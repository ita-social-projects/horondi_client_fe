import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';

import PathBack from '../path-back';

configure({ adapter: new Adapter() });

let wrapper;

function spyOnSelector(lightMode, language) {
  jest.spyOn(reactRedux, 'useSelector').mockImplementation((cb) =>
    cb({
      Theme: { lightMode },
      Language: { language }
    })
  );
}

describe('Path back component tests', () => {
  it('should match snapshot', () => {
    spyOnSelector(true, 0);

    wrapper = shallow(<PathBack />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    spyOnSelector(false, 1);

    wrapper = shallow(<PathBack />);
  });
});
