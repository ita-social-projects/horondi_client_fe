import { USER_IS_BLOCKED } from '../../../configs';

const productId = 'c3a84a5b9866c30390366168';
const userId = 'c3a84a5b9866c30390366169';

export const addCommentsArgs = {
  payload: {
    rate: 5,
    product: productId,
    show: false,
    text: 'nice',
    user: userId
  }
};

export const addedCommentData = {
  data: {
    addComment: {
      text: 'nice'
    }
  }
};

export const changeRateData = {
  data: {
    addRate: 5
  }
};

export const addCommentsRedux = {
  replyLoading: false,
  commentsLoading: false,
  getCommentsLoading: false,
  updatingComment: null,
  comments: [],
  limit: 10,
  replyLimit: 3
};

export const addCommentsArgsError = {
  payload: {
    rate: 0,
    product: productId
  }
};

export const addedCommentDataError = {
  data: {
    addComment: {
      message: USER_IS_BLOCKED
    }
  }
};

export const deleteCommentArgs = {
  payload: {
    comment: 'c3a84a5b9866c30390366168',
    id: 'c3a84a5b9866c30390366222'
  }
};

export const deleteCommentData = {
  data: {
    deleteComment: {
      _id: 'c3a84a5b9866c30390366168'
    }
  }
};

export const deleteCommentsRedux = {
  replyLoading: false,
  commentsLoading: false,
  getCommentsLoading: false,
  updatingComment: null,
  comments: [
    {
      _id: 'c3a84a5b9866c30390366168',
      text: 'deleted'
    },
    {
      _id: 'c3a84a5b9866c30390366444',
      text: 'text'
    }
  ],
  limit: 10,
  replyLimit: 3
};

export const deleteCommentsArgsError = {
  payload: {
    comment: 'c3a84a5b9866c30390366168',
    id: 'c3a84a5b9866c30390366222'
  }
};

export const getCommentArgs = {
  payload: {
    productId: 'c3a84a5b9866c30390399222',
    skip: 0,
    filters: false,
    currentLimit: 10
  }
};

export const getCommentData = {
  data: {
    getAllCommentsByProduct: {
      count: 2,
      items: [
        {
          _id: 'c3a84a5b9866c30390366168',
          text: 'deleted'
        },
        {
          _id: 'c3a84a5b9866c30390366444',
          text: 'text'
        }
      ]
    }
  }
};

export const getCommentsSelect = {
  ...addCommentsRedux
};

export const getCommentsRedux = {
  ...deleteCommentsRedux
};

export const getCommentsArgsError = {
  payload: {
    id: 'c3a84a5b9866c30390399222'
  }
};

export const addReplyCommentArgs = {
  payload: {
    id: 'c3a84a5b9866c30390366000',
    commentId: 'c3a84a5b9866c30390366111',
    replyText: 'text reply',
    productId: 'c3a84a5b9866c30390366222',
    answerer: 'c3a84a5b9866c30390366000'
  }
};

export const addReplyCommentData = {
  data: {
    replyForComment: {
      _id: 'c3a84a5b9866c30390366111',
      replyComments: [
        {
          replyText: 'text reply'
        }
      ]
    }
  }
};

export const addReplyCommentsReduxData = {
  replyLoading: false,
  commentsLoading: false,
  getCommentsLoading: false,
  updatingComment: null,
  limit: 10,
  replyLimit: 3
};

export const addReplyCommentsRedux = {
  ...addReplyCommentsReduxData,
  comments: [
    {
      _id: 'c3a84a5b9866c30390366111',
      text: 'nice',
      replyCommentsCount: 0
    }
  ]
};

export const addReplyCommentsWithOutCommentsRedux = {
  ...addReplyCommentsReduxData,
  comments: [
    {
      _id: 'c3a84a5b9866c30390366111',
      text: 'nice',
      replyCommentsCount: 3
    }
  ]
};

export const addReplySetCommentsWithOutCommentsData = [
  {
    _id: 'c3a84a5b9866c30390366111',
    text: 'nice',
    replyCommentsCount: 4
  }
];

export const addReplySetCommentsData = [
  {
    _id: 'c3a84a5b9866c30390366111',
    text: 'nice',
    replyCommentsCount: 1,
    replyComments: {
      items: [
        {
          replyText: 'text reply'
        }
      ],
      count: 1
    }
  }
];

export const addReplyCommentsArgsError = {
  payload: {
    id: 'c3a84a5b9866c30390366000',
    commentId: 'c3a84a5b9866c30390366111',
    replyText: 'text reply',
    productId: 'c3a84a5b9866c30390366222',
    answerer: 'c3a84a5b9866c30390366000'
  }
};

export const addReplyCommentsDataWithError = {
  data: {
    addedReplyComment: {
      message: USER_IS_BLOCKED
    }
  }
};

export const getReplyCommentsArgs = {
  payload: {
    commentId: 'c3a84a5b9866c30390399222',
    skip: 0,
    filters: false,
    currentLimit: 10
  }
};
export const getReplyCommentData = {
  data: {
    replyForComment: {
      items: [
        {
          _id: 'c3a84a5b9866c30390399222',
          replyComments: [
            {
              replyText: 'text reply'
            }
          ]
        }
      ],
      count: 1
    }
  }
};

export const getReplyCommentsRedux = {
  replyLoading: false,
  commentsLoading: false,
  getCommentsLoading: false,
  updatingComment: null,
  comments: [
    {
      _id: 'c3a84a5b9866c30390399222',
      text: 'hello'
    }
  ],
  limit: 10,
  replyLimit: 3
};

export const getReplyCommentsSet = [
  {
    _id: 'c3a84a5b9866c30390399222',
    text: 'hello',
    replyComments: {
      items: [
        {
          replyText: 'text reply'
        }
      ],
      count: 1
    }
  }
];

export const getReplyCommentsArgsError = {
  payload: {
    commentId: 'c3a84a5b9866c30390399222',
    skip: 0,
    filters: false,
    currentLimit: 10
  }
};

export const deleteReplyCommentsArgs = {
  payload: {
    replyCommentId: 'c3a84a5b9866c30390366168',
    id: 'c3a84a5b9866c30390366222'
  }
};
export const deleteReplyCommentData = {
  data: {
    deleteComment: {
      _id: 'c3a84a5b9866c30390366168'
    }
  }
};

export const deleteReplyCommentsRedux = {
  replyLoading: false,
  commentsLoading: false,
  getCommentsLoading: false,
  updatingComment: null,
  comments: [
    {
      _id: 'c3a84a5b9866c30390366444',
      text: 'text',
      replyCommentsCount: 2,
      replyComments: {
        count: 2,
        items: [
          { _id: 'c3a84a5b9866c30390366168', replyText: 'text reply' },
          { _id: 'c3a84a5b9866c30390366444', replyText: 'text reply deleted' }
        ]
      }
    }
  ],
  limit: 10,
  replyLimit: 3
};

export const deleteReplyCommentsSet = [
  {
    _id: 'c3a84a5b9866c30390366444',
    text: 'text',
    replyCommentsCount: 1,
    replyComments: {
      count: 1,
      items: [{ _id: 'c3a84a5b9866c30390366444', replyText: 'text reply deleted' }]
    }
  }
];

export const deleteReplyCommentsArgsError = {
  payload: {
    replyCommentId: 'c3a84a5b9866c30390366222'
  }
};
