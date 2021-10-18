import React from 'react';
import OrderHistoryPagination from '../order-history-pagination';

jest.mock('../order-history-pagination.style', () => ({
  useStyles: () => ({})
}));

const data = ['', '', ''];

describe('OrderHistoryPagination component tests', () => {
  it('Should render OrderHistoryPagination', () => {
    const component = shallow(<OrderHistoryPagination data={data} />);
    expect(component).toBeDefined();
  });
});
