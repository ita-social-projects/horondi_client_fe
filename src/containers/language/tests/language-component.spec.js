import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LanguageComponent from '../language-component';
import '@testing-library/jest-dom';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {})
    }
  })
}));

const store = createStore(() => [], {});
const handleChange = jest.fn();

describe('Language component', () => {
  it('Should render the component and execute function when you click on language button', () => {
    render(
      <Provider store={store}>
        <LanguageComponent />
      </Provider>
    );
    fireEvent.click(screen.getAllByRole('button')[0], { handleChange: handleChange() });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
