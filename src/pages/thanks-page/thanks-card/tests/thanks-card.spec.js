import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThanksCard from '../thanks-card';

const order = {
  _id: '619eb12f3c53565320f384c6',
  orderNumber: '1637789999938',
  recipient: {
    firstName: 'John',
    lastName: 'Dou',
    phoneNumber: '380934850648'
  },
  delivery: {
    byCourier: false,
    sentBy: 'NOVAPOST',
    courierOffice: 'Test office',
    city: '',
    street: '',
    house: ''
  }
};

describe('Tests for Thanks Card', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ThanksCard
          orderNumber={order.orderNumber}
          customerName={`${order.recipient.firstName} ${order.recipient.lastName}`}
          phoneNumber={order.recipient.phoneNumber}
          deliveryType={order.delivery.sentBy}
          address={order.delivery.courierOffice}
        />
      </BrowserRouter>
    );
  });

  it('should render Thanks Card', () => {
    expect(screen.queryByText('John Dou')).toBeInTheDocument();
    expect(screen.queryByText('380934850648')).toBeInTheDocument();
    expect(screen.queryByText('NOVAPOST')).toBeInTheDocument();
    expect(screen.queryByText('Test office')).toBeInTheDocument();
  });
});
