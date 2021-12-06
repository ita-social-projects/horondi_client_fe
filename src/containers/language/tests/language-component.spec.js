import React from 'react';
import { render } from '@testing-library/react';
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

describe('Language component', () => {
  it('Should render the component', () => {
    render(
      <Provider store={store}>
        <LanguageComponent />
      </Provider>
    );
  });
});
