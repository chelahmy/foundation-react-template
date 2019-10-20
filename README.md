# Foundation-React Template
A starter for front-end project using both [Foundation](https://foundation.zurb.com) and [React](https://reactjs.org) frameworks.

Foundation is a responsive css-based framework. And React is a javascript-based UI framework. Fusing them together will complete a front-end baseline development template, and will lead developers to a different level of possibilities. Foundation uses [jQuery](https://jquery.com) so it is a bonus. But use jquery with care so not to snap the advantage of React virtual DOM.

This template comes with a build tool-chain based on [Gulp](https://gulpjs.com) and [Webpack](https://webpack.js.org). Gulp is a workflow automation tool that streams files through various processors. And Webpack is a file packer that allows javascript codes to be [modular](https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/). A javascript file can simply require() other javascript file. Webpack will remove the require() statement and merge the content of the required file into the caller script. The merged file can be used in a browser. All javascript files will be packed into a single bundle.js file. Prior to packing, all React jsx files will be preprocessed into js files using React preset in [Babel](https://babeljs.io). All [Sass](https://sass-lang.com) files will be compiled into app.css. The tool-chain will build the project and run it in a web browser. It uses [Browsersync](https://browsersync.io). All of these processes will be automated by Gulp. Developers will be freed from many repetitive tasks and much time will be saved.

This template is based on [npm](https://www.npmjs.com) package. It requires [nodejs](https://nodejs.org/en/) for the build tool-chain. The resulting distribution files do not need npm or nodejs. The distribution can be installed in a static web server without any server-side dependency. It runs in a browser. It is the front-end.

This template uses versions of Foundation and React as defined in the [package.json](https://github.com/chelahmy/foundation-react-template/blob/master/package.json) file. You may want to update them to the latest versions before starting a new project. Please refer to the npm documentation to update packages. Warning: updating a package may break dependencies.

## Installation
Clone this repository into a folder
```
$ git clone https://github.com/chelahmy/foundation-react-template.git my-project
$ cd my-project
```
and run the following command to download all dependencies including Foundation and React.
```
$ npm i
```

## How-to
Start the project.
```
$ npm start
```
The tool-chain will build the project into the `dist` folder and run it in a browser. Any changes made in the `src` folder will trigger the tool-chain to rebuild the project and push the changes to the browser in real time. Remove the `dist` folder to rebuild the project.

Begin with the `src/index.html`, `src/js/app.js` and `src/scss/app.scss` files. The resulting `dist` is standalone and can be deployed to a web server.

For building the project without watching the source files and triggering the browser
```
$ npm run build
```

Please refer to the Foundation and React websites for detail documentation regarding the individual frameworks.
