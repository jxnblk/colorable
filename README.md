# Colorable

Color combination contrast tester

## Getting Started

```bash
npm install colorable
```

## Usage

```js
var colorable = require('colorable');

var colors = {
  red: 'red',
  green: 'green',
  blue: 'blue'
};

var options = {
  compact: true,
  threshold: 4.5
};

var result = colorable(colors, options);
```

Returns an array of colors with combinations for all other colors and their [WCAG contrast](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) values.

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

## Options

