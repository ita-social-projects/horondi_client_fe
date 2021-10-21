import { SORT_ASC, SORT_DESC, RATE, POPULARITY } from '../configs/index';

export default function (query) {
  switch (query) {
    case SORT_DESC: {
      return {
        basePrice: -1
      };
    }
    case RATE: {
      return {
        rate: -1
      };
    }
    case POPULARITY: {
      return {
        purchasedCount: -1
      };
    }
    case SORT_ASC: {
      return {
        basePrice: 1
      };
    }
    default: {
      return {};
    }
  }
}
