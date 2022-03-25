import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import PathBack from '../../../../../../containers/orders/cart/path-back/path-back';

describe('Path-back component tests', () => {
  const history = createMemoryHistory();
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <Router history={history}>
        <PathBack />
      </Router>
    );
  });

  it('should render PathBack', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render description of path', () => {
    expect(screen.getByText(/toMain/i)).toBeInTheDocument();
    expect(screen.getByText(/toCatalog/i)).toBeInTheDocument();
    expect(screen.getByText(/yourCart/i)).toBeInTheDocument();
  });
});
