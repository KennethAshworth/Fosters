![react-redux-starter](https://user-images.githubusercontent.com/33935506/36640376-e23a592e-1a25-11e8-9567-ec4622684159.png)

# Fosters

A basic animal adoption website that consists of the essential elements that are required to showcase eligible animals, accept applications, review FAQ, and contact site owners.


The site consists of:

* a typcial project layout structure
* a Babel setup and configuration
* a Webpack setup and configuration
* an ESLint setup and configuration
* a SCSS setup and configuration
* a sample React component to display list codes
* a Redux setup to handle application state
* a React Router setup to show basic navigation

Additionaly, the site provides a development and production webpack configuration.

The site also allows one to include specific plugins as part of build. [Please see here for more detail](#build-application-with-bundleanalayzer-plugin-included)

---

## Showcase

TBD

---

## Developed With

* [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring
* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [React Router] - Declarative routing for React
* [Redux] - Redux is a predictable state container for JavaScript apps.
* [Redux-Promise-Middleware] - Redux middleware for promises, async functions and conditional optimistic updates
* [Redux-Thunk] - Thunk middleware for Redux
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

  ```bash
  node -v
  npm -v
  ```

### Install

Follow the following steps to get development environment running.

* Clone _'react-redux-starter'_ repository from GitHub

  ```bash
  git clone https://github.com/drminnaar/react-redux-starter.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:drminnaar/react-redux-starter.git
  ```

* Install node modules

   ```bash
   cd react-redux-starter
   npm install
   ```

### Build

#### Build Application

dev | prod
:---: | :---:
npm run build:dev | npm run build:prod

#### Build Application And Watch For Changes

dev | prod
:---: | :---:
npm run build:dev:watch | npm run build:prod:watch

#### Build Application With BundleAnalayzer Plugin Included

dev | prod
:---: | :---:
npm run build:dev:bundleanalyze | npm run build:prod:bundleanalyze

After running the above command, a browser window will open displaying an interactive graph resembling the following image:

![webpack bundle analyzer](https://user-images.githubusercontent.com/33935506/36639476-30f9479c-1a16-11e8-9d09-1b80355a089b.png)

#### Build Application With BundleBuddy Plugin Included

dev | prod
:---: | :---:
npm run build:dev:bundlebuddy | npm run build:prod:bundlebuddy

### Run ESlint

#### Lint Project Using ESLint

  ```bash
  npm run lint
  ```

#### Lint Project Using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

#### Run Start

This will run the _'serve:dev'_ npm task

```bash
npm start
```

#### Run Dev Server

```bash
npm run serve:dev
```

#### Run Dev Server With Dashboard

```bash
npm run serve:dev:dashboard
```

The above command will display a dashboard view in your console resembling the following image:

![webpack-dashboard](https://user-images.githubusercontent.com/33935506/36639594-589409e8-1a18-11e8-84fe-29f7bdafcaa6.png)

#### Run Prod Server

This command will build application using production settings and start the application using _live-server_

```bash
npm run serve:prod
```

---

## Authors
* **Kenneth Ashworth** - *Implentation Work* - [KennethAshworth](https://github.com/KennethAshworth)
* **Douglas Minnaar** - *Initial Setup* - [drminnaar](https://github.com/drminnaar)

[Redux-Promise-Middleware]: https://github.com/pburtchaell/redux-promise-middleware
[Redux-Thunk]: https://github.com/gaearon/redux-thunk
[React Router]: https://reacttraining.com/react-router/
[Redux]: https://redux.js.org/
