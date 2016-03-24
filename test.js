import test from 'ava'
import isPresent from 'is-present'
import colorable from './'

test('it returns an array of color combinations', t => {
  t.plan(4)

  const colors = {
    red: 'tomato',
    blue: 'blue',
    gray1: '#333',
    gray2: '#444'
  }

  const colorCombos = colorable(colors)
  const gray1Combos = colorCombos[2].combinations
  const redContrast = gray1Combos[0].contrast
  const gray2Contrast = gray1Combos[2].contrast

  t.true(isPresent(colorCombos))
  t.same(colorCombos.length, 4)
  t.true(redContrast > 4)
  t.true(gray2Contrast < 2)
})
