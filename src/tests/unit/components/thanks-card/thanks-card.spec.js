import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThanksCard from '../../../../pages/thanks-page/thanks-card/thanks-card';
import { order } from '../../pages/thanks-page/thanks-page.variables';

jest.mock('../../../../pages/thanks-page/thanks-card/thanks-card.styles', () => ({
  useStyles: () => ({})
}));

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
