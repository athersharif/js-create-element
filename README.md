# js-create-element

Library to create a DOM element with inline CSS using pure JS.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/athersharif/js-create-element/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/js-create-element.svg?style=flat)](https://www.npmjs.com/package/js-create-element) [![Travis](https://travis-ci.org/athersharif/js-create-element.svg?branch=master)](https://travis-ci.org/athersharif/js-create-element)

----------

## Latest Release Notes

Version 1.1.0 implements the following changes:

- Support for SVG elements
- Allows strings, arrays, and booleans to be passed as text

## Installation

### npm

`npm install js-create-element`

### Browser

The minified version of the script can be found [here](https://github.com/athersharif/js-create-element/blob/master/build/jsCreateElement.min.js).

`<script type="text/javascript" src="jsCreateElement.min.js"></script>`

### Node

`import { createElement } from 'js-create-element';`

## Usage

```
createElement(
	[type],
	[attributes],
	[style],
	[text],
	[pseudoElementBefore],
	[pseudoElementAfter]
 )
```

Returns the DOM element.

### Arguments

|                           | Type   | Default |
 -------------------------- | ------ | --------|
| [type](#type)                      | string | 'div'   |
| [attributes](#attributes)                | object | {}      |
| [style](#style)                     | object | {}      |
| [text](#text)                      | string | null    |
| [pseudoElementBefore](#pseudoelementbefore)       | object | null    |
| [pseudoElementAfter](#pseudoelementafter)        | object | null    |

#### type

The type of the DOM element. For SVG elements, the type will look like `svg:[elementType]`.

Example: `a`, `p`, `span`, `svg:circle`

#### attributes

The list of attributes for the DOM element.

Example:

```
{
	id: 'sample-id',
	class: 'sample-class',
	'aria-hidden': true
}
```

#### style

The list of styles for the DOM element.

Example:

```
{
     width: '100px',
     color: 'white',
     padding: '10px',
     backgroundColor: 'blue'
}
```

#### text

The inner text for the DOM element.

Example: `This is some text I want inside the element.`

#### pseudoElementBefore

pseudoElementBefore replicates the behavior of CSS pseudo-element `::before` via a `span` element.

Example:

```
{
     content: 'sample-content',
     width: '10px',
     height: '10px',
     backgroundColor: 'red'
}
```

#### pseudoElementAfter

pseudoElementAfter replicates the behavior of CSS pseudo-element `::after` via a `span` element.

Example:

```
{
     content: 'sample-content',
     width: '10px',
     height: '10px',
     backgroundColor: 'red'
}
```

## Demo

A really simple demo can be found [here](https://athersharif.github.io/js-create-element/demo/).

## Dev Tools

### Lint

[ESLint](https://github.com/eslint/eslint) is used for linting.

Command: `make lint` / `npm run lint`

### Tests

[Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai) are used as testing frameworks. Coverage is handled though [Istanbul](https://github.com/istanbuljs/nyc). Runs lint as well.

Command: `make test` / `npm test`

For CI: `npm run test:ci`

### Docs

[JSDoc](https://github.com/jsdoc3/jsdoc) is used for documentation. Documentation can be found [here](https://athersharif.github.io/js-create-element/).

Command: `make docs` / `npm run docs`

### Code formatter

[Prettier](https://github.com/prettier/prettier) is used for code formatting.

Command: `make prettier` / `npm run prettier`

### Buildsr

[Webpack](https://github.com/webpack/webpack) is used for build purposes. Runs lint, tests, code formatter and docs as well.

Command: `make build` / `npm run build`

## Contributing

Pull requests are welcome and appreciated. Contributing guidelines can be found [here](https://github.com/athersharif/js-create-element/blob/master/CONTRIBUTING.md).

## License

Licensed under MIT. Can be found [here](https://github.com/athersharif/js-create-element/blob/master/LICENSE).
