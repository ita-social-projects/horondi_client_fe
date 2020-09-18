# Horondi

Frontend app for the `Horondi` online store

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

## Testing

#### Components

Order of testing components:

1. simple stateless components that are used in multiple places
2. components that depends on other components but not connected to redux and don’t have any state
3. components that have internal state but are not connected to redux
4. components that connected to redux

##### Don’t test:

- third-party libraries
- constants
- static css styles
- related components (test only one specific component at the specific moment of time)
- How to test:
- testing using snapshots (actual ui)
- testing logic of component (dynamic)

Snapshots allow us to compare actual UI with saved one and throw an error if it has accidentally changed. We can use flag “updateSnapshot” to update save snapshots of a component.
It is appropriate for presentational components but doesn’t cover any logic

##### What to test in components:

- Properties
- default properties
- custom properties
- Data types (use library “jest-extended”)
- Conditions (what if)
- State
- default state
- state after some event has happened
- Events
- with parameters or custom props
- without arguments

#### Sagas

Flow:

- Set up the conditions of our test
- Mock the actual HTTP requests
- Instruct the saga to run through everything and finish its business
- Check that the expected side effects have happened (actions are dispatched, selectors are called, etc)

Link to the full article about proper saga testing: https://dev.to/phil/the-best-way-to-test-redux-sagas-4hib#:~:text=To%20test%20that%20the%20saga,selector%20into%20the%20following%20gen.

#### Actions creators

We test action creators as simple pure functions that just take an arguments and output proper arguments

#### Reducers

We test reducers as simple pure functions that just take an arguments and output proper arguments
Checks:

- valid default state
- changes of state when action is dispatched for different values of state

## Starting a project

##### Setup backend (two ways):

- Use deployed version of backend and just put remote url in `.env` file in the client.
- Pull repository from [https://github.com/horondi/horondi_client_be](https://github.com/horondi/horondi_client_be)
  and setup it locally using its readme.

##### Setup frontend application:

1. Copy content of `.env.example` file to the newly created `.env`.
   Replace environment variable for the backend url with the url to running backend in `.env` file.
2. Run `npm install` to install all dependencies
3. Run `npm run start` to start application
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

# Horondi

Frontend app for the `Horondi` online store

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

## Testing

#### Components

Order of testing components:

1. simple stateless components that are used in multiple places
2. components that depends on other components but not connected to redux and don’t have any state
3. components that have internal state but are not connected to redux
4. components that connected to redux

#### Cypress

1. Use `data-cy` as selector

##### Don’t test:

- third-party libraries
- constants
- static css styles
- related components (test only one specific component at the specific moment of time)
- How to test:
- testing using snapshots (actual ui)
- testing logic of component (dynamic)

Snapshots allow us to compare actual UI with saved one and throw an error if it has accidentally changed. We can use flag “updateSnapshot” to update save snapshots of a component.
It is appropriate for presentational components but doesn’t cover any logic

##### What to test in components:

- Properties
- default properties
- custom properties
- Data types (use library “jest-extended”)
- Conditions (what if)
- State
- default state
- state after some event has happened
- Events
- with parameters or custom props
- without arguments

#### Sagas

Flow:

- Set up the conditions of our test
- Mock the actual HTTP requests
- Instruct the saga to run through everything and finish its business
- Check that the expected side effects have happened (actions are dispatched, selectors are called, etc)

Link to the full article about proper saga testing: https://dev.to/phil/the-best-way-to-test-redux-sagas-4hib#:~:text=To%20test%20that%20the%20saga,selector%20into%20the%20following%20gen.

#### Actions creators

We test action creators as simple pure functions that just take an arguments and output proper arguments

#### Reducers

We test reducers as simple pure functions that just take an arguments and output proper arguments
Checks:

- valid default state
- changes of state when action is dispatched for different values of state

## Starting a project

##### Setup backend (two ways):

- Use deployed version of backend and just put remote url in `.env` file in the client.
- Pull repository from [https://github.com/horondi/horondi_client_be](https://github.com/horondi/horondi_client_be)
  and setup it locally using its readme.

##### Setup frontend application:

1. Copy content of `.env.example` file to the newly created `.env`.
   Replace environment variable for the backend url with the url to running backend in `.env` file.
2. Run `npm install` to install all dependencies
3. Run `npm run start` to start application
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

### `npm run generate`

this command is used to run [graphql code generator](https://graphql-code-generator.com)

1. before using codegen you must run backend server [horondi backend](https://github.com/horondi/horondi_client_be)

2. open terminal

3. run `npm run generate`

4. you should run `npm run generate` every time new unions or interfaces are created

### Implementing Facebook chat.

For run Facebook chat on your site you need two variables - FACEBOOK_PAGE_ID and FACEBOOK_APP_ID and write them
in 'src -> containers -> chat -> chat.js' file.

1. FACEBOOK_PAGE_ID.
   You can find your page ID in menu under your avatar, button 'about' or 'more -> about'.
   Then scroll to the down and find your Page ID.

2. FACEBOOK_APP_ID
   Go to https://developers.facebook.com/apps/ and choose 'Add a New App -> Manage Business Integration'.
   Fills the forms and press 'Create App ID'. You can find your App ID at the top of page.

3. After that you may go to left bar, and find 'Messenger -> Settings' and add your Facebook Business page ID in section
   'Access Tokens'.

4. Now go to your Facebook Business page -> Settings(Left bar) -> Advanced Messaging and find section 'Whitelisted
   Domains'. Here you must add your domain to white list and save.

More details you can find on official site
https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin/

#### License

[MIT](https://choosealicense.com/licenses/mit/)
