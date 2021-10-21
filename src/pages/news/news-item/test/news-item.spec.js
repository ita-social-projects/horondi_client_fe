import React from 'react';
import { useSelector } from 'react-redux';
import { shallow } from 'enzyme';
import NewsItem from '../news-item';

jest.mock('react-redux');

useSelector.mockImplementation(() => ({
  language: 0
}));

describe('', () => {
  it('', () => {
    shallow(<NewsItem />);
  });
});
