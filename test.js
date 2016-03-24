import test from 'ava'
import isPresent from 'is-present'
import colorable from './'

test('it returns an array of color combinations', t => {
  t.plan(1)

  const colors = {
    red: 'red',
    green: 'green',
    blue: 'blue'
  }

  const colorCombos = colorable(colors)
  t.true(isPresent(colorCombos))
})
