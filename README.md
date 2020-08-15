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

#### Installation

We need implementing the `IntrospectionFragmentMatcher` to avoid making heuristic queries. Before we can get started, we need to install it.

In your project directory, open your terminal:
run `npm i -D @graphql-codegen/cli` or `yarn add -D @graphql-codegen` – this installs GraphQL Code Generator.
run `npm i -D @graphql-codegen/fragment-matcher` or `yarn add -D @graphql-codegen/fragment-matcher` – this installs the fragment matcher plugin.

After installing it you should create file `codegen.yml` in root directory and paste the following code into it
`schema: "<Your GraphQL Endpoint URI>" //eg. http://ocalhost:1337graphql generates: ./fragmentTypes.json: plugins: - "fragment-matcher"`.

##### Remember to replace <Your GraphQL Endpoint URI> with your actual endpoint.

This YAML file acts as a config store for your code generator. You define your schema endpoint and an output directory and name for your generated introspection file. Ours is called `fragmentTypes.json` and can be found in the projects root directory.

Our introspection file contains the names of unions and interfaces so that your Apollo client can work accurately with the unions and their nested types in your schema.

Next up we add the code generation script to our `package.json` by pasting the following:
`{ "scripts": { "generate": "graphql-codegen" } }`

This allows us to use `npm run generate` or `yarn generate` and get the introspection result when we need to.

You must run `npm run generate` to generate the introspection file every time you add new unions or intarfaces. This will awoid errors as our introspection will always be up to date.

You should modify your apollo config file:

`import ApolloClient, { gql } from 'apollo-boost';
import fetch from 'unfetch';
import {
InMemoryCache,
IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';

const introspectionResult = require('../fragmentTypes.json');

const fragmentMatcher = new IntrospectionFragmentMatcher({
introspectionQueryResultData: introspectionResult
});
export const REACT_APP_API_URL =
window.env && window.env.REACT_APP_API_URL
? window.env.REACT_APP_API_URL
: process.env.REACT_APP_API_URL;

const client = new ApolloClient({
uri: REACT_APP_API_URL,
fetch,
cache: new InMemoryCache({
addTypename: true,
fragmentMatcher
})
})`

Now apollo client can read introspection result.

#### Usage

before using generator you should run backend server

open terminal

run `npm run generate`

#### License

[MIT](https://choosealicense.com/licenses/mit/)
