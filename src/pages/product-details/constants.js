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
  price: 0,
  options: {
    size: {
      _id: ''
    }
  }
};

export const RESPONSIVE_PDP = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1150 },
    items: 3.5
  },
  desktop: {
    breakpoint: { max: 1150, min: 950 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 950, min: 750 },
    items: 2.5
  },
  smallerTablet: { breakpoint: { max: 750, min: 550 }, items: 2 },
  biggerMobile: { breakpoint: { max: 550, min: 400 }, items: 1.5 },
  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1
  }
};
export const ERROR = 'error';

export const SCROLL_BAR_LINKS = '#comment';
