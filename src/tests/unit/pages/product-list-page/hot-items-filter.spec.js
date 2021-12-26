import React, { useState } from 'react';
import { render } from '@testing-library/react';

import HotItemFilter from '../../../../pages/product-list-page/product-list-filter/hot-item-filter/hot-item-filter';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({ search: 'sort=isHotItemFilter=false' }),
  useHistory: () => ({
    push: jest.fn()
  })
}));

const setHotItem = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));

jest.mock(
  '../../../../pages/product-list-page/product-list-filter/product-list-filter.styles.js',
  () => ({
    useStyles: () => ({})
  })
);

describe('HotItemFilter component tests', () => {
  beforeEach(() => {
    useState.mockImplementation(() => [false, setHotItem]);
  });

  it('Switch should be unchecked by default', () => {
    const { getByRole } = render(<HotItemFilter />);
    const checkbox = getByRole('checkbox');

    expect(checkbox).toHaveProperty('checked', false);
  });

  it('Switch should be checked', () => {
    const wrapper = mount(<HotItemFilter />);
    const checkbox = wrapper.find('input[type="checkbox"]');

    checkbox.simulate('change', { target: { checked: true } });

    expect(setHotItem).toHaveBeenCalled();
  });

  it('Switch should be checked', () => {
    const wrapper = mount(<HotItemFilter />);
    const checkbox = wrapper.find('input[type="checkbox"]');

    checkbox.simulate('change', { target: { checked: false } });

    expect(setHotItem).toHaveBeenCalled();
  });
});
