<a href="https://softserve.academy/"><img src="https://github.com/ita-social-projects/horondi_client_fe/blob/master/public/photo_2020-09-08_17-16-47.jpg" title="SoftServe IT Academy" alt="SoftServe IT Academy"></a>

# Horondi project

HORONDI project is an e-commerce online shop that provides hand-made backpacks, bags, purses and other accessories.

[![GitHub issues](https://img.shields.io/github/issues/ita-social-projects/horondi_client_fe)](https://github.com/ita-social-projects/horondi_client_fe/issues)
[![Pending Pull-Requests](https://img.shields.io/github/issues-pr/ita-social-projects/horondi_client_fe?style=flat-square)](https://github.com/ita-social-projects/Horondi_client_fe/pulls)
[![GitHub license](https://img.shields.io/github/license/ita-social-projects/horondi_client_fe)](https://github.com/ita-social-projects/horondi_client_fe/blob/master/LICENSE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=horondi_horondi_client_fe&metric=alert_status)](https://sonarcloud.io/dashboard?id=horondi_horondi_client_fe)

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
  - [Chat](#Chat)
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

---

### Generator

Command `npm run generate` is used to run [graphql code generator](https://graphql-code-generator.com)

1. before using codegen you must run backend server [horondi backend](https://github.com/ita-social-projects/horondi_client_be)

2. open terminal

3. run `npm run generate`

4. you should run `npm run generate` every time new unions or interfaces are created

---

## Contributing

You're encouraged to contribute to our project if you've found any issues or missing functionality that you would want to see. Here you can see [the list of issues](https://github.com/ita-social-projects/horondi_client_fe/issues) and here you can create [a new issue](https://github.com/ita-social-projects/horondi_client_fe/issues/new/choose).

Before sending any pull request, please discuss requirements/changes to be implemented using an existing issue or by creating a new one. All pull requests should be done into `development` branch.

There are three GitHub projects: [horondi_client_fe](https://github.com/ita-social-projects/horondi_client_fe) for frontend part, [horondi_client_be](https://github.com/ita-social-projects/horondi_client_be) for backend part and [horondi_admin](https://github.com/ita-social-projects/horondi_admin). Every project has it's own issues.

Every pull request should be linked to an issue. So if you make changes on frontend, backend or admin parts you should create an issue with a link to corresponding requirement (story, task or epic).

All Pull Requests should start from prefix _#xxx-yyy_ where _xxx_ - task number and and _yyy_ - short description
e.g. #020-createAdminPanel

---

### Git flow

We have **master** , **development** and **feature** branches.  
All **feature** branches must be merged into [development](https://github.com/ita-social-projects/horondi_client_fe/tree/development) branch!!!
Only the release should merge into the main branch!!!

![Github flow](<https://wac-cdn.atlassian.com/dam/jcr:b5259cce-6245-49f2-b89b-9871f9ee3fa4/03%20(2).svg?cdnVersion=1312>)

#### Step 1

- **Option 1**

  - 👯 Clone this repo to your local machine using `https://github.com/ita-social-projects/horondi_client_fe.git`

- **Option 2**

  - create new branch from development branch

#### Step 2

- add some commits to your new branch

#### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/ita-social-projects/horondi_client_fe/compare/" target="_blank">github.com/ita-social-projects/horondi_client_fe</a>.

---

### Issue flow

#### Step 1

-go to [!issues](https://github.com/ita-social-projects/horondi_client_fe/issues) and click `New issue` button

#### Step 2

when creating [!issue](https://github.com/ita-social-projects/horondi_client_fe/issues/new/choose) you should add name of the issue, description, choose assignee, label, project. If issue is a `User Story` you should link it with corresponding tasks, and corresponding tasks should be linked to issue.

#### Step 3

if issue is in work it should be placed in proper column on dashboard according to its status.

---

### Chat.

For run Facebook chat on your site you need two variables - pageId and appId and write them
in 'src -> configs -> index and find a variable CHAT_FACEBOOK_DATA.

1. FACEBOOK_PAGE_ID.
   You can find your page ID in menu under your avatar, button 'about' or 'more -> about'.
   Then scroll to the down and find your Page ID.

2. FACEBOOK_APP_ID
   Go to https://developers.facebook.com/apps/ and choose 'Add a New App -> Manage Business Integration'.
   Fills the forms and press 'Create App ID'. You can find your App ID at the top of page.

3. After that you may go to left bar, and find 'Messenger -> Settings' and add your Facebook Business page ID in the 
section 'Access Tokens'.

4. Now go to your Facebook Business page -> Settings(Left bar) -> Advanced Messaging and find section 'Whitelisted
   Domains'. Here you must add your domain to white list and save.

More details you can find an official site
https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin/

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
[![@nadiyafomenko](https://avatars2.githubusercontent.com/u/47325620?s=200&u=374a6f8f91c3e8557d1807b4677ef04bce51cee6&v=4)](https://github.com/nadiyafomenko)
[![@vasylshpak](https://avatars1.githubusercontent.com/u/31392756?s=200&u=91a1fa03ab4def211eede6f469e26e9801812c29&v=4)](https://github.com/vasylshpak)
[![@Iryna-Bzdyr](https://avatars1.githubusercontent.com/u/57641315?s=200&u=7d55e9b3cc8a73bd2ab4d1630a9860e409bbe73d&v=4)](https://github.com/Iryna-Bzdyr)
[![@moran711](https://avatars1.githubusercontent.com/u/59802190?s=200&u=c937032a63ae775da998e0fe3ce066c3cda24d6e&v=4)](https://github.com/moran711)
[![@VitalikVoicix](https://avatars0.githubusercontent.com/u/64539069?s=200&u=90288a9c4ce3bc30e1e7d2b4b8c7266b1d5a86b9&v=4)](https://github.com/VitalikVoicix)
[![@koropalov](https://avatars3.githubusercontent.com/u/38702341?s=200&u=0e0aeb60e06240c840dd0852eb1f035f7ff8c88f&v=4)](https://github.com/koropalov)
[![@dieie32](https://avatars0.githubusercontent.com/u/46137635?s=200&u=78cae47953349c5ca60e0add5dea36bd1b033efa&v=4)](https://github.com/dieie32)
[![@kapoliub](https://avatars1.githubusercontent.com/u/56438696?s=200&u=be8c7bba587c6df08accc16d42868293f3c3705b&v=4)](https://github.com/kapoliub)
[![@NikitaDenysenko](https://avatars0.githubusercontent.com/u/53399334?s=200&u=66fced143733258460a0058d26ccc83a1b3fa174&v=4)](https://github.com/NikitaDenysenko)
[![@ivan-bonk](https://avatars3.githubusercontent.com/u/44017234?s=200&u=4540d5aba6e388992ca06b9224ed0e0a35f94b1c&v=4)](https://github.com/ivan-bonk)

### Quality control team

[![@HrytsykOlya](https://avatars1.githubusercontent.com/u/65678737?s=200&u=181e62bf4f25b07122f06ce677e73ddd34021391&v=4)](https://github.com/HrytsykOlya)

### ISTQB team

[![@olya011](https://avatars3.githubusercontent.com/u/49495443?s=200&u=285aa0df8435a6ec16edb6ba26b4718d82693bf9&v=4)](https://github.com/olya011)
[![@Vika-Bodnar](https://avatars2.githubusercontent.com/u/71330682?s=200&u=6c3b98868d6197bd41e3182c24c477343d355e04&v=4)](https://github.com/Vika-Bodnar)
[![@chelochev](https://avatars0.githubusercontent.com/u/66883720?s=200&u=7eec35db41587211874a2bfe962cbb6ca4e8e99a&v=4)](https://github.com/chelochev)
[![@Mary-Red](https://avatars0.githubusercontent.com/u/55394709?s=200&u=bcb5ad20d943f981a5a0d8ed09fb33bb9e878fc3&v=4)](https://github.com/Mary-Red)

### Database team

[![@YukiAmeka](https://avatars2.githubusercontent.com/u/42378468?s=200&u=c749e6713546c371b801786ecdd678dd1d152f42&v=4)](https://github.com/YukiAmeka)

### DevOps team

[![@SofiaDemyanovska](https://avatars1.githubusercontent.com/u/48492789?s=200&u=cb0520a8498667594ded0db8e29cdd3ec5529578&v=4)](https://github.com/SofiaDemyanovska)
[![@ikoblyk](https://avatars3.githubusercontent.com/u/45568834?s=200&u=5d8790e8e58a7966e2d6d6bc6a4f0d15c8cb2e9c&v=4)](https://github.com/IKoblyk)

---

## FAQ

- **How do I do _specifically_ so and so?**
  - No problem! Just do this.

---

## Support

---

#### License

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="https://softserve.academy/" target="_blank"> SoftServe IT Academy</a>.

[MIT](https://choosealicense.com/licenses/mit/)

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
