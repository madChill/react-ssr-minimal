# minimal react server side rendering

## Quick Overview

This is a minimalistic starter app to benefit of the flexibility of Babel and of ES6, ES7+,
if you you want to use the latest ECMAscript features (e.g. ES6 modules)
without waiting for nodejs to support them natively, already configured with a custom .vscode to allow debugging inside Visual studio code IDE

## Usage

clone the repository then:

`npm install` or `yarn install`

`npm run dev` (to start the server development mode)

`npm run build` (to build the code)

`npm run prod` (to run the code production after build)

## Features

-   **babel**: transpiling from ES6, ES7+ to ES5
-   **webpack**: compile typescript with ts-loader and bundling the source to a bundle.js
-   **live compiling**: as well as live reload
