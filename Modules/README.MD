# Node.js Modules

Node.js modules are a fundamental part of Node.js development. They allow you to organize your code, promote reusability, and maintain your application more efficiently.

## Table of Contents

- [Node.js Modules](#nodejs-modules)
  - [Introduction](#introduction)
  - [Types of Modules](#types-of-modules)
    - [Core Modules](#core-modules)
    - [Third-party Modules](#third-party-modules)
  - [Node.js Module System](#enabling-modules)

## Introduction

In Node.js, each file is treated as a separate module. These modules encapsulate functionality and can be easily included in other parts of your Node.js application. By structuring your code with modules, you can promote separation of concerns and improve reusability.

## Types of Modules

There are two main types of Node.js modules:

### Core Modules

Core Modules are built-in modules provided by Node.js itself. You can use them in your applications without needing to install anything separately. Examples include modules like `fs` for file system operations, `http` for creating HTTP servers, and `path` for working with file paths.

To use a core module, you typically require it like this:

```javascript
const fs = require('fs');
```

### Third-party Modules

Third-party Modules are created by the Node.js community or other developers and are not included in the Node.js core. You can find a vast collection of third-party modules on the npm (Node Package Manager) registry. To use a third-party module, you need to install it using npm or yarn and then require it in your code.

#### Installation

To install a third-party module, use npm or yarn:

```bash
npm install module-name
# or
yarn add module-name
```

#### Usage
Once installed, you can require the third-party module in your code like this:

```js
const moduleName = require('module-name');
```

This allows you to access and utilize the functionality provided by the third-party module in your Node.js application.


## Node.js Module System

Node.js has a flexible module system that allows developers to choose between CommonJS and ECMAScript (ES) modules. Here's how Node.js treats modules by default:

### CommonJS Modules

Node.js will treat the following as CommonJS modules by default:

1. Files with a `.cjs` extension.

2. Files with a `.js` extension when the nearest parent `package.json` file contains a top-level field `"type"` with a value of `"commonjs"`.

3. Files with a `.js` extension when the nearest parent `package.json` file doesn't contain a top-level field `"type"`. It is recommended that package authors include the `"type"` field, even in packages where all sources are CommonJS. This explicit declaration makes it easier for build tools and loaders to determine how the files in the package should be interpreted.

4. Files with an extension that is not `.mjs`, `.cjs`, `.json`, `.node`, or `.js` (when the nearest parent `package.json` file contains a top-level field `"type"` with a value of `"module"`). In this case, those files will be recognized as CommonJS modules only if they are being included via `require()`, not when used as the command-line entry point of the program.

For more details on determining the module system, refer to the [Determining module system](https://nodejs.org/api/packages.html#packages_determining_module_system) documentation.

### Module Loaders

- Calling `require()` always uses the CommonJS module loader.

- Calling `import()` always uses the ECMAScript module loader.

Node.js provides flexibility in choosing between these module systems, allowing developers to work with the one that best suits their project's needs.


