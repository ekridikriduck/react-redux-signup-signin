This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `GIT Deployment`

1) Upload the source code to the git hub repo 
2) Install gh-pages as dev dependency - npm install --save-dev gh-pages
3) To the package.json file add the homepage for you app "https://{gitusername}.github.io/repo-name/"

4) Add deploy and predeploy scripts to package.json <br />
`"predeploy": "npm run build",`
`"deploy": "gh-pages -d build",`

5) Remember to add `basename` to the router `basename = {/repo-name}`
6) Run `npm run deploy`

And you are done !!!


### `Extra Dependencies`
1) `Material-UI` -  Create beautiful responsive UI's using googles material design `npm install @material-ui/core`
2) `npm install @material-ui/icons` - Material UI icons library
3) `npm install @material-ui/styles` - Material UI theming library
2) `validator`  - Utility for validating different fields `npm install validator`