import { getCommentsQuery } from '../../../../pages/product-details/comments/operations/comments.queries';

export const productId = '605658df158e2fdb53498442';
export const mockSelector = {
  guestUser: null,
  validUser: {
    orders: [],
    _id: '612e38135393e300240b4c6e',
    email: 'horondidev@gmail.com',
    firstName: 'Sashko',
    lastName: 'Horondi',
    phoneNumber: null,
    images: null,
    address: {},
    confirmed: true,
    cart: null,
    purchasedProducts: []
  }
};

export const commentItem = {
  _id: '604732a793650236ddbfb847',
  text: 'Забрала вчора з майстерні - всі заздрять :)',
  date: '2021-03-09T08:32:39.460Z',
  show: true,
  rate: null,
  verifiedPurchase: true,
  replyCommentsCount: 3,
  user: {
    _id: '5fc54971083c163c2c52d96d',
    email: 'devhorondi@gmail.com',
    firstName: 'Sashko',
    role: 'user'
  }
};

export const replyItem = {
  _id: '616d47dd3df44c00246eda3a',
  replyComments: [
    {
      _id: '616d47ea3df44c00246ed233',
      replyText: 'Hey',
      showReplyComment: true,
      createdAt: '2021-10-18T10:09:46.234Z',
      verifiedPurchase: false,
      answerer: {
        _id: '612e38135393e300240b445e',
        firstName: 'Sashko',
        email: 'devhorondi@gmail.com',
        role: 'admin'
      }
    },
    {
      _id: '616d47ea3df44c00246ed111',
      replyText: 'Hey',
      showReplyComment: true,
      createdAt: '2021-10-18T10:09:46.234Z',
      verifiedPurchase: false,
      answerer: {
        _id: '612e38135393e300240b4222',
        firstName: 'Vasyl',
        email: 'devhorondi@gmail.com',
        role: 'user'
      }
    }
  ]
};

export const mockRequest = [
  {
    request: {
      query: getCommentsQuery
    },
    result: {
      loading: false,
      data: {
        getCommentsQuery: {
          count: 1,
          items: [commentItem]
        },
        getReplyCommentsQuery: {
          items: [replyItem],
          count: 1
        }
      }
    }
  }
];
