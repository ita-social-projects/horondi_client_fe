import {
  setNovaPoshtaCities,
  setNovaPoshtaWarehouse,
  setNovaPoshtaPrices,
  setDeliveryLoading
} from '../checkout.actions';
import { checkoutReducer } from '../checkout.reducer';

describe('Checkout reducer tests', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      deliveryLoading: false,
      cities: [],
      warehouses: [],
      price: {}
    };
  });

  it('should return default state', () => {
    expect(checkoutReducer(initialState, {})).toEqual(initialState);
  });

  it('should set loading to true', () => {
    const state = {
      ...initialState,
      deliveryLoading: true
    };

    expect(checkoutReducer(initialState, setDeliveryLoading(true))).toEqual(state);
  });

  it('should set array of cities', () => {
    const state = {
      ...initialState,
      cities: [
        {
          description: 'Львів',
          ref: 'db5c88f5-391c-11dd-90d9-001a92567626'
        },
        {
          description: 'Львівське',
          ref: '90a1d47c-a7a5-11e9-b73a-005056b24375'
        }
      ]
    };
    expect(
      checkoutReducer(
        initialState,
        setNovaPoshtaCities([
          {
            description: 'Львів',
            ref: 'db5c88f5-391c-11dd-90d9-001a92567626'
          },
          {
            description: 'Львівське',
            ref: '90a1d47c-a7a5-11e9-b73a-005056b24375'
          }
        ])
      )
    ).toEqual(state);
  });

  it('should set warehouses', () => {
    const state = {
      ...initialState,
      warehouses: [
        {
          description: 'Відділення № 1: вул. Ангарська, 13/1',
          ref: '4ecddea5-1986-11e5-add9-005056887b8d',
          shortAddress: 'Авангард, Ангарська, 13/1',
          schedule: {
            monday: '09:00-19:00',
            saturday: '09:00-17:00',
            sunday: '11:00-17:00'
          }
        },
        {
          description: 'Відділення №2: пров. Степний, 1а',
          ref: '08b8e8c2-11f4-11ea-9295-005056b24375',
          shortAddress: 'Авангард, Степний, 1а',
          schedule: {
            monday: '09:00-19:00',
            saturday: '09:00-17:00',
            sunday: '11:00-17:00'
          }
        },
        {
          description: 'Поштомат "Нова Пошта" №5083: вул. Ангарська, 12 (маг. АТБ)',
          ref: 'ddb1aa3e-cd91-11ea-b39d-b8830365bd14',
          shortAddress: 'Авангард, Ангарська, 12 (маг. АТБ)',
          schedule: {
            monday: '00:01-23:59',
            saturday: '00:01-23:59',
            sunday: '00:01-23:59'
          }
        }
      ]
    };
    expect(
      checkoutReducer(
        initialState,
        setNovaPoshtaWarehouse([
          {
            description: 'Відділення № 1: вул. Ангарська, 13/1',
            ref: '4ecddea5-1986-11e5-add9-005056887b8d',
            shortAddress: 'Авангард, Ангарська, 13/1',
            schedule: {
              monday: '09:00-19:00',
              saturday: '09:00-17:00',
              sunday: '11:00-17:00'
            }
          },
          {
            description: 'Відділення №2: пров. Степний, 1а',
            ref: '08b8e8c2-11f4-11ea-9295-005056b24375',
            shortAddress: 'Авангард, Степний, 1а',
            schedule: {
              monday: '09:00-19:00',
              saturday: '09:00-17:00',
              sunday: '11:00-17:00'
            }
          },
          {
            description: 'Поштомат "Нова Пошта" №5083: вул. Ангарська, 12 (маг. АТБ)',
            ref: 'ddb1aa3e-cd91-11ea-b39d-b8830365bd14',
            shortAddress: 'Авангард, Ангарська, 12 (маг. АТБ)',
            schedule: {
              monday: '00:01-23:59',
              saturday: '00:01-23:59',
              sunday: '00:01-23:59'
            }
          }
        ])
      )
    ).toEqual(state);
  });

  it('should set prices', () => {
    const state = {
      ...initialState,
      price: { cost: 68, assessedCost: 3600 }
    };

    expect(
      checkoutReducer(initialState, setNovaPoshtaPrices({ cost: 68, assessedCost: 3600 }))
    ).toEqual(state);
  });
});
