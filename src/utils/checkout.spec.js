import i18next from 'i18next';
import { checkoutFormBtnValue } from './checkout';

describe('Checkout utils tests', () => {
  it('Should return expected result', () => {
    const values = {
      paymentMethod: ''
    };
    const result = checkoutFormBtnValue(values);
    expect(result).toBe(i18next.t(`checkout.confirmOrder`));
  });
  it('Should return expected result', () => {
    const values = {
      paymentMethod: 'cash'
    };
    const result = checkoutFormBtnValue(values);
    expect(result).toBe(i18next.t(`checkout.confirmOrder`));
  });
  it('Should return expected result', () => {
    const values = {
      paymentMethod: 'card'
    };
    const result = checkoutFormBtnValue(values);
    expect(result).toBe(i18next.t(`checkout.payOrder`));
  });
});
