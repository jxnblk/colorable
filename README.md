
Take a set color palette and get contrast values for every possible combination – 
useful for finding safe color combinations with predefined colors
and includes pass/fail scores for the
[WCAG accessibility guidelines](http://www.w3.org/TR/WCAG20/#visual-audio-contrast).

## Getting Started

```bash
npm i colorable
```

## Usage

Pass an array of color strings or an object with color strings as values. 

```js
var colorable = require('colorable');
var colors = {
  red: 'red',
  green: 'green',
  blue: 'blue'
};
var options = {
  compact: true,
  threshold: 0 
};
var result = colorable(colors, options);
```

Returns an array of colors with combinations for all other colors and their
[WCAG contrast](http://www.w3.org/TR/WCAG20/#visual-audio-contrast)
values.

```json
[
  {
    "hex": "#FF0000",
    "name": "red",
    "combinations": [
      {
        "hex": "#008000",
        "name": "green",
        "contrast": 1.28483997166146,
        "accessibility": {
          "aa": false,
          "aaLarge": false,
          "aaa": false,
          "aaaLarge": false
        }
      },
      {
        "hex": "#0000FF",
        "name": "blue",
        "contrast": 2.148936170212766,
        "accessibility": {
          "aa": false,
          "aaLarge": false,
          "aaa": false,
          "aaaLarge": false
        }
      }
    ]
  },
  ...
]
```

### Accessibility object

Each key is a boolean value indicating if the color contrast meets the following criteria:
- `aa` - greater than 4.5 (for normal sized text)
- `aaLarge` - greater than 3 ([for bold text or text larger than 24px](http://www.w3.org/TR/WCAG20/#larger-scaledef))
- `aaa` - greater than 7 
- `aaaLarge` - greater than 4.5 

---

## Options

### `compact`

_Type: Boolean (default: `false`)_

If set to `true`, the result will be a smaller object that only includes hex value color strings, a name for each color (if an object is passed to the function), contrast, and accessibility values.
When set to `false`, the result also includes the entire [harthur/color](https://www.npmjs.com/package/color) object for each color, which includes other properties and methods for color manipulation.

### `threshold`

_Type: Number (default: `0`)_

When set, the colorable function only returns combinations that have a contrast above this value. This is useful for only seeing combinations that pass a minimum contrast level.

### `uniq`

_Type: Boolean (default: true)_

When set to `true`, the array of colors is passed through lodash.uniq to remove duplicates.


---

MIT License

