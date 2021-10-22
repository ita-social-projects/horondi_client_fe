import React from 'react';
import { useQuery } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';
import NewsDetail from '../news-detail';
import { getNewsById } from '../../operations/news-queries';

jest.mock('../../news-detail/news-detail.style', () => ({ useStyles: () => ({}) }));
jest.mock('@apollo/client');
jest.mock('react-redux');

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: {}
};

const mocks = [
  {
    request: {
      query: getNewsById,
      variables: {
        id: '604398f9a7532c33dcb326dc'
      }
    },
    result: {
      data: {
        _id: '604398f9a7532c33dcb326dc',
        title: { value: 'Співачка GARZA про бренд HORONDI' },
        text: {
          value:
            '<p>Українська співачка <strong>GARZA </strong>— ді… підкреслить колір ваших очей і настрій.</em></p>'
        },
        image: 'large_id73d2kkm22ie1z_accessories - Copy.jpg',
        author: {
          name: { value: 'Олександр Хоронді' },
          image:
            'large_4051pm10kompup3s_[HorribleSubs] Hibike! Euphonium S2 - 01 [720p].mkv_snapshot_09.54_[2021.02.17_18.37.28].jpg'
        },
        date: '1621708925959'
      }
    }
  }
];

it('renders without error', async () => {
  let wrapper;
  await (async () => {
    wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <NewsDetail id='604398f9a7532c33dcb326dc' />
      </MockedProvider>
    );
    expect(wrapper).toBeDefined();
  });
});

describe('test newsDetail', () => {
  it('should cover branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    wrapper = shallow(<NewsDetail match={{ params: { id: '' } }} />);
  });

  it('should cover other branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));
    wrapper = shallow(<NewsDetail match={{ params: { id: '' } }} />);
  });
});
