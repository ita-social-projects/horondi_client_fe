export const COMMENTS_TIME_OPTIONS = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
};

export const TOAST_SETTINGS = {
  autoClose: 3000,
  hideProgressBar: true
};

export const defaultProductToSend = {
  product: {
    _id: ''
  },
  quantity: 1,
  price: [],
  options: {
    size: {
      _id: ''
    }
  }
};

export const RESPONSIVE_PDP = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1146, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 810, min: 0 },
    items: 1
  }
};
export const ERROR = 'error';

export const SCROLL_BAR_LINKS = '#comment';
