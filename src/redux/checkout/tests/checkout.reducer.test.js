import {
  setDeliveryLoading,
  setUkrPostRegions,
  setUkrPostDistricts,
  setUkrPostCities,
  setUkrPostPostOffices
} from '../checkout.actions';
import { checkoutReducer } from '../checkout.reducer';
import {
  fakeUkrPostRegions,
  fakeUkrPostDistricts,
  fakeUkrPostCities,
  fakeUkrPostOffices
} from './checkout.variables';

describe('Checkout reducer tests', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      deliveryLoading: false,
      cities: [],
      warehouses: [],
      price: {},
      ukrPoshtaCities: [],
      ukrPoshtaRegions: [],
      ukrPoshtaDistricts: [],
      ukrPoshtaPostOffices: []
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

  it('should set array of regions from UkrPoshta', () => {
    const ukrPoshtaRegions = fakeUkrPostRegions.data.getUkrPoshtaRegions;
    const state = {
      ...initialState,
      ukrPoshtaRegions
    };
    expect(checkoutReducer(initialState, setUkrPostRegions(ukrPoshtaRegions))).toEqual(state);
  });

  it('should set array of districts from UkrPoshta', () => {
    const ukrPoshtaDistricts = fakeUkrPostDistricts.data.getUkrPoshtaDistrictsByRegionId;
    const state = {
      ...initialState,
      ukrPoshtaDistricts
    };
    expect(checkoutReducer(initialState, setUkrPostDistricts(ukrPoshtaDistricts))).toEqual(state);
  });

  it('should set array of cities from UkrPoshta', () => {
    const ukrPoshtaCities = fakeUkrPostCities.data.getUkrPoshtaCitiesByDistrictId;
    const state = {
      ...initialState,
      ukrPoshtaCities
    };
    expect(checkoutReducer(initialState, setUkrPostCities(ukrPoshtaCities))).toEqual(state);
  });

  it('should set array of post offices from UkrPoshta', () => {
    const ukrPoshtaPostOffices = fakeUkrPostOffices.data.getUkrPoshtaPostofficesCityId;
    const state = {
      ...initialState,
      ukrPoshtaPostOffices
    };
    expect(checkoutReducer(initialState, setUkrPostPostOffices(ukrPoshtaPostOffices))).toEqual(
      state
    );
  });
});
