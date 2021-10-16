import React from 'react';
import { MailForm } from '../mail-form';

jest.mock('../../chat.style.js', () => ({ useStyles: () => ({}) }));

const props = {
  cancelIconHandler: jest.fn(),
  contacts: [],
  themeMode: true
};

describe('<MailForm />', () => {
  it('should render <MailForm />', () => {
    const wrapper = shallow(<MailForm {...props} />);
    expect(wrapper).toBeDefined();
  });
});
