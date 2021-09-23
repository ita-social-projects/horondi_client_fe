import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as redux from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import FooterLists from '../footer-lists';

Enzyme.configure({ adapter: new Adapter() });

const mockUseSelector = jest.spyOn(redux, 'useSelector');

describe('tests for footer lists', () => {
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
              value: 'Рюкзаки'
            },
            {
              lang: 'en',
              value: 'Backpacks'
            }
          ],
          images: { large: 'large_4051mv10ks0jtd71_asd.png' },
          available: null
        },
        {
          _id: '6043be253e06ad3edcdb7b2e',
          code: 'bags',
          name: [
            {
              lang: 'ua',
              value: 'Сумки'
            },
            {
              lang: 'en',
              value: 'Bags'
            }
          ],
          images: { large: 'large_4051pm10kokdt84z_bags.jpg' },
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
          images: { large: 'large_4051mu10kq7y8fvk_d.png' },
          available: null
        }
      ],
      language: 0,
      contacts: [
        {
          _id: '6043bcf43e06ad3edcdb7b28',
          phoneNumber: '380961737361',
          openHours: [
            {
              lang: 'ua',
              value: 'Пн - Пт: 10:00 до 20:00   |  Сб - Нд: вихідний '
            },
            {
              lang: 'en',
              value: 'Mon - Fr: 10 AM - 8 PM   |   Sat - San: day off'
            }
          ],
          address: [
            {
              lang: 'ua',
              value: 'Львів, вул. Заводська, 31'
            },
            {
              lang: 'en',
              value: '31 Zavodska Street, Lviv'
            }
          ],
          email: 'horondi.adm@gmail.com',
          images: [
            {
              value: {
                medium: 'medium_4051mu10krxzu55o_horondi-default-map2.png'
              }
            },
            {
              value: {
                medium: 'medium_4051mu10krxzu591_horondi-default-map2-eng.png'
              }
            }
          ],
          link: 'https://goo.gl/maps/woNYNFyiYTszxe1NA'
        }
      ],
      quantityPerPage: 9
    });

    wrapper = mount(
      <BrowserRouter>
        <FooterLists />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    mockUseSelector.mockClear();
  });

  it('should render footer list', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render category list', () => {
    expect(wrapper.find(Link).at(0).props()).toHaveProperty('children', 'Рюкзаки');
    expect(wrapper.find(Link).at(1).props()).toHaveProperty('children', 'Сумки');
    expect(wrapper.find(Link).at(2).props()).toHaveProperty('children', 'Аксесуари');
    console.log(wrapper.debug());
  });

  it('should return null if there are no categories', () => {
    const Categories = { list: [] };
    const Language = { language: 0 };
    const Contacts = { contacts: [] };
    const Products = { countPerPage: 9 };

    mockUseSelector.mockImplementation((callback) =>
      callback({ Categories, Language, Contacts, Products })
    );

    wrapper = mount(
      <BrowserRouter>
        <FooterLists />
      </BrowserRouter>
    );

    expect(wrapper.find(Link).at(0).props()).not.toHaveProperty('children', 'Рюкзаки');
    expect(wrapper.find(Link).at(1).props()).not.toHaveProperty('children', 'Сумки');
    expect(wrapper.find(Link).at(2).props()).not.toHaveProperty('children', 'Аксесуари');
  });
});
