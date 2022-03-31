// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const fbScript = document.createElement('script');
fbScript.id = 'facebook-jssdk';
document.body.appendChild(fbScript);

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
process.env.REACT_APP_WS_API_URL = 'ws://localhost:5000/graphql';
