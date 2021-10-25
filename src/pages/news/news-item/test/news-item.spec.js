import React from 'react';
import { shallow } from 'enzyme';
import NewsItem from '../news-item';

describe('Test NewsItem', () => {
  it('should render component', () => {
    const component = shallow(<NewsItem />);
    expect(component).toBeDefined();
  });
});
