import React from 'react';
import { act } from 'react-dom/test-utils';
import { useQuery } from '@apollo/client';
import ModelsList from '../models-list';
import ClassicButton from '../../../../components/classic-button';

jest.mock('../models-list.style.js', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('@apollo/client');

useQuery.mockImplementation(() => ({}));
let wrapper;

describe('Models list component tests', () => {
  beforeEach(() => {
    wrapper = shallow(<ModelsList />);
  });

  it('Should render models-list', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render another button', () => {
    act(() => {
      wrapper.find(ClassicButton).props().onClickHandler();
    });

    expect(wrapper.find(ClassicButton).props().buttonStyle).toBe('classic');
  });
});
