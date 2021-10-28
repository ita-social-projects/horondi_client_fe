import React from 'react';
import NewsItem from '../news-item';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => null, i18n: { language: 'ua' } })
}));
jest.mock('../../news-item/news-item.style', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

let props = {
  date: '',
  key: '',
  id: '',
  author: { name: [{ value: '' }] },
  image: {},
  title: [{ value: 'true' }],
  slug: '',
  text: [{ value: 'true' }]
};
describe('Test NewsItem', () => {
  it('should render component', () => {
    const component = shallow(<NewsItem {...props} />);
    expect(component).toBeDefined();
  });
  it('should cover branch when we get empty string', () => {
    props = {
      text: [{ value: '' }, { value: '' }]
    };
    const component = shallow(<NewsItem {...props} />);
    expect(component).toBeDefined();
  });
});
