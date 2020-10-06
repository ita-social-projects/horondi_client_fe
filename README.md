<a href="https://softserve.academy/"><img src="https://github.com/ita-social-projects/horondi_client_fe/blob/master/public/photo_2020-09-08_17-16-47.jpg" title="SoftServe IT Academy" alt="SoftServe IT Academy"></a>

# Horondi project

HORONDI project is an e-commerce online shop that provides hand-made backpacks, bags, purses and other accessories.

[![GitHub issues](https://img.shields.io/github/issues/ita-social-projects/horondi_client_fe)](https://github.com/ita-social-projects/horondi_client_fe/issues)
[![Pending Pull-Requests](https://img.shields.io/github/issues-pr/ita-social-projects/horondi_client_fe?style=flat-square)](https://github.com/ita-social-projects/Horondi_client_fe/pulls)
[![GitHub license](https://img.shields.io/github/license/ita-social-projects/horondi_client_fe)](https://github.com/ita-social-projects/horondi_client_fe/blob/master/LICENSE)

---

- [Installation](#installation)
  - [Required to install](#Required-to-install)
  - [Environment](https://github.com/ita-social-projects/horondi_client_fe/blob/master/environment%20valiables.md)
  - [Clone](#Clone)
  - [Setup](#Setup)
  - [How to run local](#How-to-run-local)
  - [How to run Docker](#How-to-run-Docker)
- [Usage](#Usage)
  - [How to run tests](#How-to-run-tests)
- [Documentation](#Documentation))
  - [Rules and guidelines](#Rules-and-guidelines)
  - [Testing](#Testing)
  - [Generator](#Generator)
- [Contributing](#contributing)
  - [git flow](#git-flow)
  - [issue flow](#git-flow)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)

---

## Installation

- All the `code` required to get started
- Images of what it should look like

### Required to install

- NodeJS (14.4.0)

### Clone

- Clone this repo to your local machine using `https://github.com/ita-social-projects/horondi_client_fe.git`

### Setup

> install npm packages

```shell
$ npm install
```

### How to run local

1. Open terminal.
2. Run `npm run start` to start application.
3. Open http://localhost:3000 to view it in the browser.

### How to run Docker

## Usage

### How to run tests

To run unit test open terminal and run `npm run test` in it.
To run E2E tests you need open terminal and run `npm run start` in it to start server.
Then open one more terminal and run `npm run cypress`.

---

## Documentation

### Rules and guidelines

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

### Testing

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

#### Cypress

1. Use `data-cy` as selector

### Generator

Command `npm run generate` is used to run [graphql code generator](https://graphql-code-generator.com)

1. before using codegen you must run backend server [horondi backend](https://github.com/horondi/horondi_client_be)

2. open terminal

3. run `npm run generate`

4. you should run `npm run generate` every time new unions or interfaces are created

---

## Contributing

### Git flow

> To get started...

#### Step 1

- **Option 1**

  - 🍴 Fork this repo!

- **Option 2**
  - 👯 Clone this repo to your local machine using `https://github.com/ita-social-projects/horondi_client_fe.git`

#### Step 2

- **HACK AWAY!** 🔨🔨🔨

#### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/ita-social-projects/horondi_client_fe/compare/" target="_blank">github.com/ita-social-projects/horondi_client_fe</a>.

### Issue flow

---

## Teams

### Development team

[![@VolodymyrTrach](https://avatars2.githubusercontent.com/u/50409925?s=200&u=cc5eae94f38151d613308da12c0d8f1f84fb1777&v=4)](https://github.com/VolodymyrTrach)
[![@bandvov](https://avatars2.githubusercontent.com/u/48312647?s=200&u=e63ba5607d222194799c4d04a59a2b2b21131aef&v=4)](https://github.com/bandvov)
[![@YarkoSumyk](https://avatars3.githubusercontent.com/u/40059484?s=200&u=c1252af7060ce2e61f1836d8a7904d098c9519d3&v=4)](https://github.com/YarkoSumyk)
[![@INR4GE](https://avatars3.githubusercontent.com/u/29551153?s=200&u=64b5922801512d6a92a6005239996bc6a6f49400&v=4)](https://github.com/INR4GE)
[![@Crash1212](https://avatars0.githubusercontent.com/u/39312657?s=200&u=6f9768ca1cf96e2f1452913b769820120991ce02&v=4)](https://github.com/Crash1212)
[![@DmytroDidukh](https://avatars3.githubusercontent.com/u/58104677?s=200&u=b696b5884540fc5f5982d349c05479c6111a005e&v=4)](https://github.com/DmytroDidukh)
[![@yaroslavbilokin](https://avatars0.githubusercontent.com/u/48564795?s=200&u=79107facd1421eea6f679c156150d94ac68b5bc6&v=4)](https://github.com/yaroslavbilokin)
[![@ecl1pseo](https://avatars2.githubusercontent.com/u/61461298?s=200&u=653248954a1a15753a532577534bc015e0f52e54&v=4)](https://github.com/ecl1pseo)
[![@TarasKun](https://avatars2.githubusercontent.com/u/54079677?s=200&u=cbf23d4eb12d477cb10af74fe4515dbfa6aef5c8&v=4)](https://github.com/TarasKun)
[![@TorskyM](https://avatars1.githubusercontent.com/u/43883447?s=200&u=f24cc667e57cee7ff345051e6ae45b0052aa85b9&v=4)](https://github.com/TorskyM)
[![@maksym-strus](https://avatars1.githubusercontent.com/u/57955386?s=200&u=163523fa63d33371d3b79e9e51f7e03cf20f149b&v=4)](https://github.com/maksym-strus)

### Quality control team

[![@HrytsykOlya](https://avatars1.githubusercontent.com/u/65678737?s=200&u=181e62bf4f25b07122f06ce677e73ddd34021391&v=4)](https://github.com/HrytsykOlya)

### Database team

[![@YukiAmeka](https://avatars2.githubusercontent.com/u/42378468?s=200&u=c749e6713546c371b801786ecdd678dd1d152f42&v=4)](https://github.com/YukiAmeka)

### DevOps team

[![@SofiaDemyanovska](https://avatars1.githubusercontent.com/u/48492789?s=200&u=cb0520a8498667594ded0db8e29cdd3ec5529578&v=4)](https://github.com/SofiaDemyanovska)

---

## FAQ

- **How do I do _specifically_ so and so?**
  - No problem! Just do this.

---

## Support

---

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

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="https://softserve.academy/" target="_blank"> SoftServe IT Academy</a>.

[MIT](https://choosealicense.com/licenses/mit/)

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
