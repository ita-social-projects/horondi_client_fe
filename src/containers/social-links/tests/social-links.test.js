import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import SocialLinks from '../social-links';

jest.mock('react-redux');
jest.mock('../social-links.styles', () => ({ useStyles: () => ({}) }));

const props = {
  showTitle: true
};

describe('Social links tests', () => {
  const history = createMemoryHistory();
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <Router history={history}>
        <SocialLinks {...props} />
      </Router>
    );
  });

  afterEach(() => {
    wrapper = null;
  });

  it('should render social links', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render title', () => {
    const title = wrapper.getByTestId('title');
    expect(title).toBeInTheDocument();
  });
});
