# js-create-element

Library to create a DOM element with inline CSS using pure JS.

----------

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

The type of the DOM element.

Example: `a`, `p`, `span`

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

pseudoElementBefore replicates the behavior of CSS pseudo-element `::before`.

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

pseudoElementAfter replicates the behavior of CSS pseudo-element `::after`.

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

A really simple demo can be found [here](https://github.com/athersharif/js-create-element/blob/master/demo/index.html).

## Contributing

Pull requests are welcome and appreciated. Issues can be created [here](https://github.com/athersharif/js-create-element/issues). Following dev tools are used:

### Lint

[ESLint](https://github.com/eslint/eslint) is used for linting.

Command: `make lint`

### Tests

[Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai) are used as testing frameworks. Coverage is handled though [Istanbul](https://github.com/istanbuljs/nyc). Runs lint as well.

Command: `make test`

For CI: `npm run test:ci`

### Docs

[JSDoc](https://github.com/jsdoc3/jsdoc) is used for documentation. Documentation can be found [here](https://github.com/athersharif/js-create-element/tree/master/docs).

Command: `make docs`

### Code formatter

[Prettier](https://github.com/prettier/prettier) is used for code formatting.

Command: `make prettier`

### Build

[Webpack](https://github.com/webpack/webpack) is used for build purposes. Runs lint, tests, code formatter and docs as well.

Command: `make build`

## License

Licensed under MIT. Can be found [here](https://github.com/athersharif/js-create-element/blob/master/LICENSE).
