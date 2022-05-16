import React from 'react';
import * as redux from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, fireEvent, waitForElement } from '@testing-library/react';

import Modal from '../../../components/modal';
import ImagesConstructor from '../images-constructor';
import { mockAllConstructors } from './images-constructor.variables';
import { DollarIcon } from '../../../images/profile-icons';

const mockGetPriceWithCurrency = jest.fn(() => 50);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);

jest.mock('../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => ({ currency: 0 })
}));

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
  constructorPartPrice: () => [1, 2, 3]
}));

const mockDispatch = jest.fn();
const mockUseDispatch = jest.spyOn(redux, 'useDispatch');

mockUseDispatch.mockImplementation(() => mockDispatch);

beforeEach(async () => {
  render(
    <MockedProvider mocks={mockAllConstructors} addTypename={false}>
      <ImagesConstructor />
    </MockedProvider>
  );

  await new Promise((resolve) => setTimeout(resolve, 0));
});

describe('ImagesConstructor component tests', () => {
  it('renders h1', async () => {
    waitForElement(() => {
      expect(screen.getByText(/Створи сам/i)).toBeInTheDocument();
    });
  });

  it('it can change selected item', () => {
    waitForElement(() => {
      const select = screen.getByTestId('model');
      expect(select).toBeInTheDocument();
    });
  });

  it('modal', () => {
    waitForElement(() => {
      const button = screen.getAllByRole('button')[0];
      fireEvent.click(button);
      expect(<Modal />).toBeTruthy();
    });
  });
});
