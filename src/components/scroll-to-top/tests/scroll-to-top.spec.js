import React from 'react';
import { render } from '@testing-library/react';
import ScrollToTop from '../scroll-to-top';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({ pathname: '/about-us' })
}));

describe('ScrollToTop component test', () => {
  window.scrollTo = jest.fn();

  beforeEach(() => {
    render(<ScrollToTop />);
  });

  it('should call scrollTo', () => {
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
