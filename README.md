# Horondi
Frontend app for the `Hondri` online store
## Rules and guidelines
- Redux
    - For each entity we should have separate folder
    - In each folder we should have different files for actions, reducer
      `{modelName}.actions.js` or `{modelName}.reducer.js`
- Configuration
    - Configuration is done via `.env` file where environment
      variables are located
    - Also we have `.env.example` that contains examples of environment
      variables
- Styles
    - For styling function `makeStyles` from `@material-ui`
      should be used and all styles should be located inside separate
      component.
- Components
    - Components that are connected to redux should be located inside
      `containers` folder. Components without connection to redux should
      be located inside `components` folder.
    - Each individual page that is accessed via `react-router`
      should be located inside `pages` folder. All components
      that are used inside particular page should be located inside
      folder for the specific page.
    - Each component should have at least three files:
      - `index.js` where we export anything from the whole folder
      - `{component-name}.js` - file where component is located
      - `{component-name}.styles.js` where all styles are located

## Starting a project
In the project directory, you should run:
- Copy content of `.env.example` file to the newly created `.env`
- Run `npm install` to install all dependencies
- Run `npm run start` to start application
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.