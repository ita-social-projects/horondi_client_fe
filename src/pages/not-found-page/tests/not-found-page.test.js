import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFoundPage from '../not-found-page';

Enzyme.configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();
const mockUseHistory = jest.fn();

jest.mock('../../not-found-page/not-found-page.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    goBack: mockUseHistory
  })
}));

describe('NotFoundPage component', () => {
  it('should render', () => {
    const component = shallow(<NotFoundPage />);
  });
});
