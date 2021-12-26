import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import HotItemFilter from '../../../../pages/product-list-page/product-list-filter/hot-item-filter/hot-item-filter';

jest.mock('react-router', () => ({
  useLocation: () => ({ search: 'sort=isHotItemFilter=false' }),
  useHistory: () => jest.fn()
}));
jest.mock(
  '../../../../pages/product-list-page/product-list-filter/product-list-filter.styles.js',
  () => ({
    useStyles: () => ({})
  })
);

describe('HotItemFilter component tests', () => {
  it('Switch should be unchecked by default', () => {
    const { getByRole } = render(<HotItemFilter />);
    const checkbox = getByRole('checkbox');

    expect(checkbox).toHaveProperty('checked', false);
  });

  it('Switch should be checked', () => {
    const { getByRole } = render(<HotItemFilter />);
    const checkbox = getByRole('checkbox');

    fireEvent.change(checkbox, { target: { checked: true } });

    expect(checkbox).toHaveProperty('checked', true);
  });

  it('Switch should be unchecked', () => {
    const { getByRole } = render(<HotItemFilter />);
    const checkbox = getByRole('checkbox');

    fireEvent.change(checkbox, { target: { checked: false } });

    expect(checkbox).toHaveProperty('checked', false);
  });
});
