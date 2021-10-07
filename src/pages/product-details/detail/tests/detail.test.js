import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Detail from '../detail';

jest.mock('../detail.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux');
Enzyme.configure({ adapter: new Adapter() });

describe('Detail component', () => {
  it('Should render', () => {
    const component = shallow(<Detail />);
  });
});
