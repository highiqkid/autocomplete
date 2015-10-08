# Notepad

This is a notepad application that runs inside of the browser. The current state is stored immediately to localStorage, so the UI and text will remain exactly as you left them. In the left pane, you can enter markdown, which will be converted to rendered HTML in the right pane. I've tested in Firefox and Chrome, so those should work. Good luck with IE.

## Technologies Used
* [React](https://facebook.github.io/react/) (For the view layer)
* [Redux](http://rackt.github.io/redux/) (For the model/state management)
* [redux-localstorage](https://github.com/elgerlambert/redux-localstorage) (For syncing state to localStorage)
* [redux-thunk](https://github.com/gaearon/redux-thunk) (For implementing more complex redux actions)
* [Marked](https://github.com/chjj/marked) (For compiling markdown to HTML)
* [Lodash](https://lodash.com/) (For misc. Javascript utilities)
* [classnames](https://github.com/JedWatson/classnames) (For managing class assignment logic)
* [Yeoman](http://yeoman.io/) (For project scaffolding)
* [generator-redux](https://github.com/banderson/generator-redux) (For generating a redux scaffold)
* [webpack](https://webpack.github.io/) (For managing the build process)
* [Karma](http://karma-runner.github.io) (For running tests)
* [Mocha](http://mochajs.org/) (For tests)
* [Chai](http://chaijs.com/) (For asserting in the tests)
* [Sinon.JS](http://sinonjs.org/) (For spying/stubbing functions)
* [Babel](http://babeljs.io/) (For compiling ES6)
* [CoffeeScript](http://coffeescript.org/) (For less painful test writing)
* [Skeleton](http://getskeleton.com/) (For basic styles)
* [Normalize.css](https://necolas.github.io/normalize.css/) (For removing cross-browser craziness)


## Running the project

To run the development server (with debug tools turned on):

```bash
$ npm start
```

To run a development server with no debugging tools (for better performance):

```bash
$ npm run fastserver
```

To run the test suite:
```bash
$ npm test
```

To run the test suite in watch mode (tests run on file change):
```bash
$ npm run watch
```

To build for production, this command will output optimized production code:

```bash
$ npm run build
```

To build a static site with the debugging tools turned on:
```bash
$ npm run build-dev
```
