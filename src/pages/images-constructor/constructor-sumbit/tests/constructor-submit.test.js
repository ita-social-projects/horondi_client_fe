import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../components/app/app-theme/app.theme';
import ConstructorSubmit from '../constructor-submit';

Enzyme.configure({ adapter: new Adapter() });

const themeValue = theme('light');

let wrapper;

describe('ConstructorSubmit component tests', () => {
  wrapper = shallow(
    <ThemeProvider theme={themeValue}>
      <ConstructorSubmit />
    </ThemeProvider>
  );

  it('Should render ConstructorSubmit', () => {
    expect(wrapper).toBeDefined();
  });
});
