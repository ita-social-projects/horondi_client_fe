import React from 'react';
import * as reactRedux from 'react-redux';
import EmptyOrder from '../index';

let wrapper;

function spyOnSelector(lightMode) {
  jest.spyOn(reactRedux, 'useSelector').mockImplementation((cb) =>
    cb({
      Theme: { lightMode }
    })
  );
}

describe('Empty order component tests', () => {
  it('should match snapshot', () => {
    spyOnSelector(true);

    wrapper = shallow(<EmptyOrder title='' name='' buttonTitle='' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    spyOnSelector(false);

    wrapper = shallow(<EmptyOrder title='' name='' buttonTitle='' />);
  });
});
