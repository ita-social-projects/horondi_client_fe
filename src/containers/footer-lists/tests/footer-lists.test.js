import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import FooterLists from '../footer-lists';

jest.mock('react-redux');
jest.mock('@apollo/client');

useSelector.mockImplementation(() => ({
  language: 0,
  categories: [],
  quantityPerPage: 9
}));

useQuery.mockImplementation(() => ({
  loading: false,
  error: false,
  data: {}
}));

const wrapper = shallow(<FooterLists />);

describe('tests for footer lists', () => {
  it('should render footer list', () => {
    expect(wrapper).toBeDefined();
  });

  it('should return null if there are no categories', () => {
    const Categories = { list: [] };
    const Language = { language: 0 };
    const Contacts = { contacts: [] };
    const Products = { countPerPage: 9 };

    useSelector.mockImplementation((callback) =>
      callback({ Categories, Language, Contacts, Products })
    );

    const wrapper = mount(
      <BrowserRouter>
        <FooterLists />
      </BrowserRouter>
    );

    expect(wrapper.find(Link).at(0).props()).not.toHaveProperty('children', 'Рюкзаки');
    expect(wrapper.find(Link).at(1).props()).not.toHaveProperty('children', 'Сумки');
    expect(wrapper.find(Link).at(2).props()).not.toHaveProperty('children', 'Аксесуари');
  });
});
