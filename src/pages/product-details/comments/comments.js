import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import { Button, Tooltip, TextField } from '@material-ui/core';
import { useStyles } from './comments.styles';

import CommentsItem from './comments-item';
import SnackbarItem from '../../../containers/snackbar';
import { Loader } from '../../../components/loader/loader';

import { TEXT_VALUE, commentFields, formRegExp } from '../../../configs';
import { COMMENTS } from '../../../translations/product-details.translations';
import {
  addComment,
  setCommentsSkip,
  getComments,
  clearComments
} from '../../../redux/comments/comments.actions';
import useCommentValidation from '../../../hooks/use-comment-validation';
import { selectProductsIdCommentsLanguageUserData } from '../../../redux/selectors/multiple.selectors';
import {
  handleRateTip,
  handleClassName,
  handleTextField,
  handleHelperText,
  handleUserLogin,
  handleTitleSubmit,
  handleArrowIcon
} from '../../../utils/handle-comments';

const Comments = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const {
    commentsLoading,
    language,
    productId,
    comments,
    userData,
    currentLimit,
    getCommentsLoading,
    commentsCount,
    skip
  } = useSelector(selectProductsIdCommentsLanguageUserData);

  const { _id: userId } = userData || {};
  useEffect(
    () => () => {
      dispatch(clearComments());
    },
    []
  );
  useEffect(() => {
    if (comments?.length === 0) {
      dispatch(getComments({ productId, skip, currentLimit }));
    }
  }, [userData?._id]);

  const onSubmit = (formValues) => {
    const userFields = userId ? { user: userId } : {};
    dispatch(
      addComment({
        ...formValues,
        ...userFields,
        product: productId,
        show: false,
        rate
      })
    );
    setShouldValidate(false);
    resetForm();
  };

  const { values, errors, handleSubmit, handleBlur, resetForm, setFieldValue, setShouldValidate } =
    useCommentValidation(!!userData, onSubmit);

  const [rate, setRate] = useState(0);

  useEffect(() => {
    setRate(handleUserLogin(userData));
  }, [userData]);

  const rateTip = useMemo(() => handleRateTip(userId, language), [language, userId]);

  const commentsLength = comments?.length;

  const commentsList = comments
    ? comments.map(({ _id, ...rest }) => <CommentsItem key={_id} data={rest} commentId={_id} />)
    : [];

  const limitOption = commentsList?.length === comments?.length && comments?.length > commentsCount;

  const handleCommentsReload = () => {
    const newSkip = skip + currentLimit;
    dispatch(setCommentsSkip(newSkip));
    dispatch(getComments({ productId, skip: newSkip, currentLimit }));
  };

  const handleCommentChange = (e) => {
    const value = e.target.value.replace(formRegExp.link, '');
    setFieldValue(commentFields.text.name, value);
  };

  return (
    <div className={styles.comment}>
      <h2 className={styles.title}>{COMMENTS[language].title}</h2>
      <Tooltip title={rateTip} placement='right'>
        <span className={styles.rate}>
          <Rating
            data-cy='rate'
            disabled={!userData}
            name='edit-rate'
            value={rate}
            onChange={(e, newRate) => setRate(newRate)}
          />
        </span>
      </Tooltip>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          {Object.values(commentFields).map(
            ({ name, multiline = null, rows = null }) =>
              handleTextField(name, userData) && (
                <div key={name}>
                  <TextField
                    className={handleClassName(name, styles.text, styles.input)}
                    name={name}
                    onChange={name === TEXT_VALUE ? handleCommentChange : null}
                    onBlur={handleBlur}
                    value={values[name]}
                    disabled={!userData}
                    label={COMMENTS[language][name]}
                    error={!!errors[name]}
                    helperText={handleHelperText(errors[name])}
                    multiline={multiline}
                    rows={rows}
                    variant='outlined'
                    data-cy={name}
                  />
                </div>
              )
          )}
        </div>

        <div className={styles.submit}>
          <Tooltip title={handleTitleSubmit(userData, language, 'unregisteredComment')}>
            <div>
              <Button
                type='submit'
                className={styles.commentBtn}
                disabled={!userData}
                onClick={() => setShouldValidate(true)}
              >
                {COMMENTS[language].submit}
              </Button>
            </div>
          </Tooltip>

          {commentsLoading && (
            <div className={styles.loader}>
              <Loader width={40} height={40} heightWrap={90} />
            </div>
          )}
        </div>
      </form>
      {commentsList}

      {commentsLength < commentsCount && (
        <div className={styles.loadMore}>
          {handleArrowIcon(limitOption)}
          <span onClick={handleCommentsReload} className={styles.loadMoreText}>
            {limitOption ? null : COMMENTS[language].loadMore}
          </span>
        </div>
      )}
      {getCommentsLoading ? <Loader width={40} height={40} heightWrap={90} /> : null}
      <SnackbarItem />
    </div>
  );
};

export default Comments;
