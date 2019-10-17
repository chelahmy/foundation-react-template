# Foundation-React Template
A starter for front-end project using both [Foundation](https://foundation.zurb.com) and [React](https://reactjs.org) frameworks.

This template comes with a tool-chain based on [Gulp](https://gulpjs.com) and [Webpack](https://webpack.js.org). Gulp is a workflow automation tool that streams files through various processors. And Webpack is a file bundler that allows javascript codes to be modular like in nodejs. A javascript file can simply require() other javascript file. Webpack will remove the require() statement and merge the the content of the required file into the caller script. The merged file can be used in a browser. All javascript files will be packed into a single bundle.js file. Prior to that, all React jsx files will be preprocessed into js files using [Babel](https://babeljs.io). The tool-chain will build the project and run it in a web browser. All of these processes will be automated by Gulp. Developers will be freed from many repetitive tasks and much time will be saved.

The template is a [npm](https://www.npmjs.com) package. It requires [nodejs](https://nodejs.org/en/) for development automation. The resulting distribution files do not need npm or nodejs. The distribution can be installed in a static web server without any server-side dependency. It runs in a browser. It is the front-end.

This template uses versions of Foundation and React as defined in the [package.json](https://github.com/chelahmy/foundation-react-template/blob/master/package.json) file. You may want to update them to the latest versions before starting a new project. Please refer to the npm documentation to update packages.

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

Begin with the `src/index.html` and `src/js/app.js` files. The resulting `dist` folder is standalone and can be deployed to a web server.

Please refer to the Foundation and React websites for detail documentation regarding the individual frameworks.
