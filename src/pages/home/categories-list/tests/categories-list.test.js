import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as redux from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import CategoriesList from '../categories-list';

Enzyme.configure({ adapter: new Adapter() });

const mockUseSelector = jest.spyOn(redux, 'useSelector');

describe('tests for categories list', () => {
  let wrapper;

  beforeEach(() => {
    mockUseSelector.mockReturnValue({
      categories: [
        {
          _id: '6043bdeb3e06ad3edcdb7b2d',
          code: 'backpacks',
          name: [
            {
              lang: 'ua',
              value: 'Рюкзаки '
            },
            {
              lang: 'en',
              value: 'Backpacks'
            }
          ],
          images: {
            large: 'large_4051mv10ks0jtd71_asd.png'
          },
          available: null
        },
        {
          _id: '6043be253e06ad3edcdb7b2e',
          code: 'bags',
          name: [
            {
              lang: 'ua',
              value: 'Сумки '
            },
            {
              lang: 'en',
              value: 'Bags'
            }
          ],
          images: {
            large: 'large_4051pm10kokdt84z_bags.jpg'
          },
          available: null
        },
        {
          _id: '6048f900fc3c0b3b34fd4992',
          code: 'accessories',
          name: [
            {
              lang: 'ua',
              value: 'Аксесуари'
            },
            {
              lang: 'en',
              value: 'Accesories'
            }
          ],
          images: {
            large: 'large_4051mu10kq7y8fvk_d.png'
          },
          available: null
        }
      ],
      language: 0,
      quantityPerPage: 9
    });

    wrapper = mount(<CategoriesList />);
  });

  afterEach(() => {
    wrapper.unmount();
    mockUseSelector.mockClear();
  });

  it('category list should exist', () => {
    const Language = { language: 0 };
    const Categories = { list: [] };
    const Products = { countPerPage: 9 };
    mockUseSelector.mockImplementation((callback) => callback({ Categories, Language, Products }));
    expect(wrapper).toBeDefined();
  });
});
