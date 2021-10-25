import React from 'react';
import ImgsViewer from 'react-images-viewer';
import { useDispatch, useSelector } from 'react-redux';
import ProductImages from '../product-images';

jest.mock('connected-react-router', () => {
  jest.fn();
});
jest.mock('../product-images.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('../../../../utils/imageLoad', () => ({
  getImage: () =>
    new Promise((resolve, reject) => {
      resolve('resolved');
    })
}));
jest.mock('react-redux');
jest.mock('@material-ui/icons');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn()
  })
}));
const mockUseContext = jest.fn().mockImplementation(() => ({
  isLight: true
}));

React.useContext = mockUseContext;

const dispatch = jest.fn();
const storage = {
  language: 0,
  images: {
    primary: {
      large: '',
      medium: '',
      small: ''
    },
    additional: []
  }
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => storage);

describe('ProductImages page test', () => {
  it('Should call imgViewer handlers ', () => {
    const component = shallow(
      <ProductImages
        images={{
          primary: { large: '' },
          additional: [{ large: '' }]
        }}
      />
    );
    const viewer = component.find(ImgsViewer);
    viewer.props().onClickPrev();
    viewer.props().onClickNext();
    viewer.props().onClickThumbnail();
    viewer.props().onClose();

    expect(component).toBeDefined();
  });

  it('Should call button in primary image', () => {
    const component = mount(
      <ProductImages
        images={{
          primary: { large: '' },
          additional: [{ large: '' }]
        }}
      />
    );
    const viewer = component.find('button');
    viewer.at(0).props().onClick();
    viewer.at(1).props().onClick();

    expect(component).toBeDefined();
  });
});
