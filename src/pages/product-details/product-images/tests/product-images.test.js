import React from 'react';
import { useSelector} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ProductImages from '../product-images';

jest.mock('react-redux');
Enzyme.configure({ adapter: new Adapter() });

jest.mock('../product-images.styles', () => ({
  useStyles: () => ({})
}));

useSelector.mockImplementation(() => ({
  images: {'primary':{'large':'large_4051pm10kty4dhv5_37.png','medium':'medium_4051pm10kty4dhv5_37.png','small':'small_4051pm10kty4dhv5_37.png','thumbnail':'thumbnail_4051pm10kty4dhv5_37.png'},'additional':[{'large':'large_4051pm10ktv87b4m_40.png','medium':'medium_4051pm10ktv87b4m_40.png','small':'small_4051pm10ktv87b4m_40.png','thumbnail':'thumbnail_4051pm10ktv87b4m_40.png'},{'large':'large_1cwxwm8ycko1gnhag_38.png','medium':'medium_1cwxwm8ycko1gnhag_38.png','small':'small_1cwxwm8ycko1gnhag_38.png','thumbnail':'thumbnail_1cwxwm8ycko1gnhag_38.png'},{'large':'large_1cwxwm8ycko1gnhbe_41.png','medium':'medium_1cwxwm8ycko1gnhbe_41.png','small':'small_1cwxwm8ycko1gnhbe_41.png','thumbnail':'thumbnail_1cwxwm8ycko1gnhbe_41.png'}]},
  isLightTheme: true,
}));

describe('Product info', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ProductImages />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Should render', () => {
    expect(wrapper.exists('div')).toBe(true);
  });

  it('Should semilar change', () => {  
    const imgViewer = wrapper.find('ImgsViewer').props();
    imgViewer.onClickPrev();
    imgViewer.onClickNext();
    imgViewer.onClickThumbnail();
    imgViewer.onClose();
  });

  it('Should click', () => {
    const img = wrapper.find("[data-cy='test']");
    expect(img).toBeDefined();
  });

});
