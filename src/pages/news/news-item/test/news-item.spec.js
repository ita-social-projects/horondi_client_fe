import React from 'react';
import NewsItem from '../news-item';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => null, i18n: { language: 'ua' } })
}));
jest.mock('../../news-item/news-item.style', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

describe('Test NewsItem', () => {
  it('should render component', () => {
    const component = shallow(<NewsItem />);
    expect(component).toBeDefined();
  });
});
