import React from 'react';
import { act } from '@testing-library/react';
import ImgsViewer from 'react-images-viewer';
import ProductImages from '../product-images';

jest.mock('connected-react-router', () => {
  jest.fn();
});
jest.mock('../product-images.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('../../../../utils/imageLoad', () => ({
  getImage: () => 'LARGE'
}));
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

describe('ProductImages page test', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <ProductImages
        images={{
          primary: { large: '' },
          additional: [{ large: '' }, { large: '' }, { large: '' }]
        }}
      />
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it('Should call prevImg in ImgViewer', async () => {
    await act(async () => {
      await Promise.resolve(component);
      await new Promise((resolve) => setImmediate(resolve));
      component.update();

      const viewer = component.find(ImgsViewer);
      viewer.props().onClickPrev();

      expect(viewer.props().currImg).toBe(0);
    });
  });

  it('Should call NextImage in ImgViewer', async () => {
    await act(async () => {
      await Promise.resolve(component);
      await new Promise((resolve) => setImmediate(resolve));
      component.update();

      const viewer = component.find(ImgsViewer);
      viewer.props().onClickNext((fn) => fn(0));

      expect(viewer.props().currImg).toBe(0);
    });
  });

  it('Should call onClickThumbnail in ImgViewer', async () => {
    await act(async () => {
      await Promise.resolve(component);
      await new Promise((resolve) => setImmediate(resolve));
      component.update();

      const viewer = component.find(ImgsViewer);
      viewer.props().onClickThumbnail(1);

      expect(viewer.props().currImg).toBe(0);
    });
  });

  it('Should call onClose in ImgViewer', async () => {
    await act(async () => {
      await Promise.resolve(component);
      await new Promise((resolve) => setImmediate(resolve));
      component.update();

      const viewer = component.find(ImgsViewer);
      viewer.props().onClose();

      expect(viewer.props().isOpen).toBe(false);
    });
  });

  it('Should call button in primary image', async () => {
    await act(async () => {
      await Promise.resolve(component);
      await new Promise((resolve) => setImmediate(resolve));
      component.update();

      const button = component.find('button');
      const img = component.find('img');
      button.at(0).props().onClick();
      button.at(1).props().onClick();

      expect(img.at(0).props().src).toBe('LARGE');
    });
  });

  it('Should call openFn in latest photo', async () => {
    await act(async () => {
      await Promise.resolve(component);
      await new Promise((resolve) => setImmediate(resolve));
      component.update();

      const div = component.find('div');
      const viewer = component.find(ImgsViewer);

      div.at(4).props().children[2].props.onClick();
      expect(viewer.props().isOpen).toBe(false);
    });
  });

  it('Should call openFn in additional photo', async () => {
    await act(async () => {
      await Promise.resolve(component);
      await new Promise((resolve) => setImmediate(resolve));
      component.update();

      const img = component.find('img');
      img.at(1).props().onClick();

      expect(img.at(1).props().src).toBe('LARGE');
    });
  });
});
