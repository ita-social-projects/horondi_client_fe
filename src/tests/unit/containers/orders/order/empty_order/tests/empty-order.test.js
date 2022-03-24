import React from 'react';
import { shallow } from 'enzyme';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EmptyOrder from '../../../../../../../containers/orders/order/empty-order/index';

let wrapper;

jest.mock('../../../../../../../containers/orders/order/empty-order/empty-order.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

describe('Empty order component tests', () => {
  const buttonTitle = 'до каталогу';

  it('should match snapshot', () => {
    wrapper = shallow(<EmptyOrder title='' name='' buttonTitle='' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should cover other branches', () => {
    wrapper = shallow(<EmptyOrder title='' name='' buttonTitle='' />);
  });

  it('render text in button', () => {
    render(
      <Router>
        <EmptyOrder buttonTitle={buttonTitle} />
      </Router>
    );
    const linkItem = screen.getByText('до каталогу');

    expect(linkItem).toBeInTheDocument();
  });
});
