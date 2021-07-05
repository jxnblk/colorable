/**
 * `additionalPass` Webpack plugin to compute and emit additional assets.
 *
 * An instance of AdditionalAssetsPlugin represents extra,
 * user-specified (typically through webpack.config.js) computations
 * that happen once the “main” build is complete. It can be used, for
 * instance, to call the Webpack'd JS code to do some rendering on the
 * server side.
 *
 * Freely inspired from https://github.com/markdalgleish/static-site-generator-webpack-plugin
 *
 * - Rewrite in async/await style
 * - Make it work with recent Webpacks
 * - Abstract away the rendering steps
 */

const evaluate = require('eval')
const { sources, Compilation } = require('webpack')

/**
 * @constructor
 *
 * After the main Webpack compilation is done, an instance of
 * AdditionalAssetsPlugin calls its `renderFunc` constructor parameter
 * to compute additional assets to emit.
 *
 * @param renderFunc A function (possibly async) that returns a
 *                   mapping from path names (interpreted relative to
 *                   the asset root) to asset contents (as strings).
 *                   renderFunc may call
 *                   `this.getDefaultExport(assetPath)`, which
 *                   synchronously extracts and eval's the default
 *                   export from an already built JS asset specified
 *                   by its path.
 */
module.exports.AdditionalAssetsPlugin = function AdditionalAssetsPlugin (renderFunc) {
  return { apply(compiler) { setup(compiler, renderFunc) } }
}

/**
 * Wrangle the Webpack 5 API into doing renderFunc's bidding.
 *
 * The constraints are as follows:
 *
 * - `renderFunc` must be called with a `this` that has a
 *   `getDefaultExport` method-ish
 *
 * - In order for said method-ish to work, the call must occur
 *   after the “main” compilation, so that built assets are
 *   visible...
 *
 * - ... yet not so late that the build is already sealed (see
 *   discussion in https://github.com/webpack/webpack/issues/11425),
 *   or Webpack 5 will whine
 *
 * Implementation notes: despite scant documentation therefor, this
 * appears to be what the `needAdditionalPass` / `additionalPass`
 * hooks are for. (Note that these hooks are on the `compilation` and
 * `compiler` objects, respectively.)
 *
 * @param renderFunc The function passed to the @link AdditionalAssetsPlugin constructor
 */
function setup (compiler, renderFunc) {
  // What we bill ourselves as to Webpack (for the purpose of
  // pretty-printing errors, stats etc.):
  const name = "AdditionalAssetsPlugin"

  // We want one additional compiler pass, after that we're good:
  let wantOneMorePass = true
  compiler.hooks.compilation.tap(
    name,
    (compilation) => compilation.hooks.needAdditionalPass.tap(name, () => {
      const wantedOneMorePass = wantOneMorePass
      wantOneMorePass = false
      return wantedOneMorePass
    }))

  // This is what the additional pass does:
  compiler.hooks.additionalPass.tap(
    name, () => {
      // From the horse's mouth at
      // https://github.com/webpack/webpack/issues/11425#issuecomment-690547848
      // even though it seems to me like *any* hook before sealing
      // would work just as well:
      compiler.hooks.thisCompilation.tap(name, (compilation) => {
        compilation.hooks.processAssets.tapPromise(
          { name, stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL },
          async () => {
            // Now we can call renderFunc:
            const additionalAssets = await renderFunc.bind({
              // Pass method-ish for renderFunc to obtain
              // already-webpack'd functions or expressions. This is
              // the part where doing all of this in the first
              // compiler pass would *not* work (yes, I tried):
              getDefaultExport: (assetPath) =>
              getDefaultExport(compilation, assetPath)
            })()

            // Let Webpack know about the additional assets:
            for(const relPath in additionalAssets) {
              const data = additionalAssets[relPath]
              compilation.emitAsset(relPath, new sources.RawSource(data))
            }
          })
      })
    })
}

/**
 * `eval` and return the default export of a JS asset at path `assetPath`.
 *
 * Provided as a pseudo-method (through `this`) to the
 * `renderFunc` constructor parameter of AdditionalAssetsPlugin.
 * (Note that renderFunc passes `assetPath` only; `compilation`
 * is closely guarded)
 */
function getDefaultExport (compilation, assetPath) {
  const asset = compilation.assets[assetPath]
  if (asset == null) {
      throw new Error('Source asset not found: "' + assetPath + '"');
  }

  let evald = evaluate(asset.source(),
                      /* filename: */ assetPath,
                      /* scope: */ undefined,
                      /* includeGlobals: */ true);

  if ('__esModule' in evald) {
      evald = evald['default'];
  }

  return evald
}
