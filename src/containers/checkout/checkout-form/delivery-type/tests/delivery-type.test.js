import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import DeliveryType from '../delivery-type';

jest.mock('react-redux');
jest.mock('react-i18next', () => ({ useTranslation: () => ({ t: (key) => key }) }));
jest.mock('../delivery-type.styles', () => ({ useStyles: () => ({ Theme: 'lightMode' }) }));
jest.mock('../../../../../services/session-storage.service', () => ({
  setToSessionStorage: () => {}
}));

jest.mock('../../../../../utils/checkout', () => ({
  setDeliveryTypeToStorage: () => {}
}));

const mockStore = { language: 0 };
const mockDispatch = jest.fn();

const props = {
  values: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: null
  },
  touched: { courierOrganization: 'test' },
  errors: { courierOrganization: 'test' },
  setFieldValue: jest.fn(),
  setDeliveryType: jest.fn()
};

useSelector.mockImplementation(() => mockStore);
useDispatch.mockReturnValue(mockDispatch);

describe('<DeliveryType />', () => {
  it('Radio group should be rendered', () => {
    render(<DeliveryType {...props} deliveryType='COURIER' />);

    const radiogroup = screen.getByRole('radiogroup', { name: 'Delivery type' });
    expect(radiogroup).toBeInTheDocument();
  });

  it('setDeliveryType function should be called with correct argument', () => {
    render(<DeliveryType {...props} deliveryType='NOVAPOST' />);

    expect(props.setDeliveryType).toHaveBeenCalledWith('NOVAPOST');
  });

  it('handleCourierOrganizationChange function should triggered on select change', () => {
    render(<DeliveryType {...props} deliveryType='COURIER' />);

    const selectWrapper = screen.getByTestId('courierOrganization');
    const selectComponent = within(selectWrapper).getByRole('button');

    fireEvent.mouseDown(selectComponent);

    const popup = within(screen.getByRole('listbox'));

    fireEvent.click(popup.getAllByRole('option')[0]);
  });
});
