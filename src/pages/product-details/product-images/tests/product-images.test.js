// import React from 'react';
// import { mount, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { ThemeProvider } from '@material-ui/styles';
// import * as redux from 'react-redux';
// import ProductImages from '../product-images';
// import { Products, Theme } from './product-images.variables';
// import { theme } from '../../../../components/app/app-theme/app.theme';

// const mockUseSelector = jest.spyOn(redux, 'useSelector');
// configure({ adapter: new Adapter() });

// describe('Product submit tests', () => {
//   let wrapper;
//   const themeValue = theme('light');

//   beforeEach(() => {
//     mockUseSelector.mockImplementation((fn) => fn({ Products, Theme }));

//     wrapper = mount(
//       <ThemeProvider theme={themeValue}>
//         <ProductImages />
//       </ThemeProvider>
//     );
//   });

//   afterEach(() => {
//     wrapper.unmount();
//     mockUseSelector.mockClear();
//   });

//   it('Should render component', () => {
//     expect(wrapper.exists('div')).toBe(true);
//   });

//   it('Should semilar change', () => {
//     const imgViewer = wrapper.find('ImgsViewer').props();
//     imgViewer.onClickPrev();
//     imgViewer.onClickNext();
//     imgViewer.onClickThumbnail();
//     imgViewer.onClose();
//   });
// });

import React from 'react';
import { useSelector } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ProductImages from '../product-images';

jest.mock('react-redux');
Enzyme.configure({ adapter: new Adapter() });

jest.mock('../product-images.styles', () => ({
  useStyles: () => ({})
}));

useSelector.mockImplementation(() => ({
  images: {
    primary: { large: 'large_4051pm10kty4giwt_8.png' },
    additional: [{ large: 'large_4051pm10ktv8hrl6_9.png' }]
  },
  isLightTheme: true
}));

describe('Product info', () => {
  it('Should render', () => {
    const component = shallow(<ProductImages />);
    expect(component).toBeDefined();
  });
});
