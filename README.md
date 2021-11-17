# `@askiggy/stardust`

The Iggy frontend component library and styleguide.

## Installation

With yarn
```
yarn add @askiggy/stardust
```

With npm
```
npm install @askiggy/stardust
```

## Usage

### CSS Modules

Each module can be imported into your project as individual packages:

In CSS modules:
```css
@import '@askiggy/stardust/styles/{module}`
```

In JSX:
```javascript
import '@askiggy/stardust/styles/{module}`
```

####  `global`

The global scss library. This includes all of the modules listed below.

Library | Description
---|---
`fonts` | Font assets definition
`layout` | Global layout styles
`normalize` | Style resets
`typography` | Type system
`utils` | Utility class selectors
`variables` | Global variables definition

Element | Description
---|---
`buttons` | Buttons element styles
`forms` | Form element styles
`links` | Links element styles
`lists` | List element styles
`scrollbars` | Scrollbars

Component | Description
---|---
`system` | System messages
`tooltip` | Tooltip component


## Development

### The Styleguide

Run the styleguide app on your local environment.
```bash
yarn dev
```

### Releasing a New Version

Bump the version in the `package.json` file using the [Semantic Versioning](https://semver.org/) system and then run the following script:

```bash
yarn rollup:publish
```

You can also build the package locally into the `/dist` folder without publishing.

```bash
$ yarn rollup
```

### Other Scripts

Run linters and output any errors or warnings.
```bash
$ yarn lint
```

Run linters and autofix any errors or warnings.
```bash
$ yarn lint:fix
```

Run eslint
```bash
$ yarn lint:js
```

Run stylelint
```bash
$ yarn lint:styles
```
