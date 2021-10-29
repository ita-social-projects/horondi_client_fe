import React from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import Materials from '../materials';

jest.mock('react-redux');
const dispatch = jest.fn();

jest.mock('../materials.style.js', () => ({
  useStyles: () => ({})
}));
jest.mock('@apollo/client');
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router')
}));

useDispatch.mockImplementation(() => dispatch);

const useQueryData = {
  error: null,
  loading: false,
  data: {
    getAllPatterns: {
      items: [
        {
          _id: '6043b87c3e06ad3edcdb7b19',
          name: [
            {
              lang: 'ua'
            },
            {
              lang: 'en'
            }
          ],
          available: true,
          images: {
            medium: 'medium_id73cf0klxzl60n_149-min.jpg'
          }
        }
      ]
    },
    getBusinessTextByCode: {
      __typename: 'BusinessText',
      _id: '5fbf675bded5be370032e707',
      code: 'materials',
      title: [
        {
          value: 'Матеріали'
        },
        {
          value: 'Materials'
        }
      ],
      text: [
        {
          value: 'test'
        },
        {
          value: 'test'
        }
      ],
      date: '1606379355725'
    }
  }
};

useQuery.mockImplementation(() => ({
  ...useQueryData
}));

describe('Materials component tests', () => {
  it('Should render Materials', () => {
    const component = shallow(<Materials />);
    expect(component).toBeDefined();
  });
});
