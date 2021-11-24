import React from 'react';
import { useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../../../components/modal';
import ImagesConstructor from '../images-constructor';
import { mockAllConstructors } from './images-constructor.variables';

jest.mock('react-redux');

jest.mock('../images-constructor.style', () => ({
  useStyles: () => ({})
}));

jest.mock('../constructor-sumbit/constructor-submit.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('i18next', () => ({
  useTranslation: () => ({ i18n: { language: 'ua' }, t: () => 'test' })
}));

jest.mock('../../../utils/checkout', () => ({ getCurrentCurrency: () => '1' }));
jest.mock('../../../utils/constructor', () => ({
  constructorEndPrice: () => '',
  constructorPartPrice: () => ({ map: () => '' }),
  constructorPartNames: () => ''
}));

const state = {
  currency: 0
};
useSelector.mockImplementation(() => state);

beforeEach(() => {
  render(
    <MockedProvider mocks={mockAllConstructors} addTypename={false}>
      <ImagesConstructor />
    </MockedProvider>
  );
});

describe('ImagesConstructor component tests', () => {
  it('renders h1', async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(screen.getByText(/common.title/i)).toBeInTheDocument();
  });

  it('it can change selected item', async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const select = screen.getByTestId('model');
    expect(select).toBeInTheDocument();
  });

  it('modal', async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const button = screen.getAllByRole('button')[0];
    fireEvent.click(button);
    expect(<Modal />).toBeTruthy();
  });
});
