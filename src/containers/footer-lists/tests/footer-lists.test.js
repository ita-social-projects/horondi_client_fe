import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FooterLists from '../footer-lists';

jest.mock('../footer-lists.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-i18next', () => ({ useTranslation: () => ({ t: () => [] }) }));
jest.mock('react-redux');

const props = {
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
};

useSelector.mockImplementation(() => props);

describe('FooterLists component tests', () => {
  it('should render <FooterLists />', () => {
    const wrapper = shallow(<FooterLists />);
    expect(wrapper).toBeDefined();
  });
  it('should render category list', () => {
    const wrapper = shallow(<FooterLists />);
    expect(wrapper.find(Link).at(0).props()).toHaveProperty('children', 'Рюкзаки');
    expect(wrapper.find(Link).at(1).props()).toHaveProperty('children', 'Сумки');
    expect(wrapper.find(Link).at(2).props()).toHaveProperty('children', 'Аксесуари');
  });
});
