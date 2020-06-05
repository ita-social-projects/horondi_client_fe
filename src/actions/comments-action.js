const setComments = (comments) => ({
  type: 'SET_COMMENTS',
  payload: comments
});

const removeComments = (commentId) => ({
  type: 'REMOVE_COMMENTS',
  payload: commentId
});

export { setComments, removeComments };
