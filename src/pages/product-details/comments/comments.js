import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import { Button, Tooltip, TextField } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useStyles } from './comments.styles';

import CommentsItem from './comments-item';
import SnackbarItem from '../../../containers/snackbar';
import { Loader } from '../../../components/loader/loader';

import { TEXT_VALUE, commentFields, formRegExp, commentsLimit } from '../../../configs';
import { COMMENTS, TOOLTIPS } from '../../../translations/product-details.translations';
import {
  addComment,
  setCommentsLimit,
  getComments
} from '../../../redux/comments/comments.actions';
import LimitButton from './limit-button/limit-button';
import useCommentValidation from '../../../hooks/use-comment-validation';
import { selectProductsIdCommentsLanguageUserData } from '../../../redux/selectors/multiple.selectors';
import {
  handleRateTip,
  handleClassName,
  handleTextField,
  handleHelperText,
  handleCommentsLength,
  handleCommentsLimit,
  handleCommentsFilter,
  handleUserLogin
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
    getCommentsLoading
  } = useSelector(selectProductsIdCommentsLanguageUserData);

  const { _id: userId } = userData || {};

  useEffect(() => {
    dispatch(getComments(productId));
  }, [productId]);

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

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
    setFieldValue,
    setShouldValidate
  } = useCommentValidation(!!userData, onSubmit);

  const [rate, setRate] = useState(0);

  useEffect(() => {
    setRate(handleUserLogin(userData));
  }, [userData]);

  const rateTip = useMemo(() => handleRateTip(userId, language), [language, userId]);
  const [commentsListFilter, setCommentsListFilter] = useState([]);
  useEffect(() => {
    setCommentsListFilter(handleCommentsFilter(comments, userId));
  }, [comments, userId]);
  const commentsLength = handleCommentsLength(comments, userId);

  const commentsList = commentsListFilter
    ? commentsListFilter
      .slice(0, currentLimit)
      .map(({ _id, ...rest }) => <CommentsItem key={_id} data={rest} commentId={_id} />)
    : [];

  const limitOption =
    commentsList.length === commentsListFilter.length && commentsListFilter.length > commentsLimit;

  const handleCommentsReload = () => {
    const newLimit = handleCommentsLimit(limitOption, commentsLimit, currentLimit);
    dispatch(setCommentsLimit(newLimit));
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
                    onChange={name === TEXT_VALUE ? handleCommentChange : handleChange}
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
        <Tooltip title={userData ? '' : TOOLTIPS[language].unregisteredComment}>
          <div className={styles.submit}>
            <Button
              type='submit'
              className={styles.commentBtn}
              disabled={!userData}
              onClick={() => setShouldValidate(true)}
            >
              {COMMENTS[language].submit}
            </Button>

            {commentsLoading && (
              <div className={styles.loader}>
                <Loader width={40} height={40} heightWrap={90} />
              </div>
            )}
          </div>
        </Tooltip>
      </form>
      {getCommentsLoading ? <Loader width={40} height={40} heightWrap={90} /> : commentsList}
      {commentsLength > commentsLimit && (
        <LimitButton
          onClick={handleCommentsReload}
          startIcon={limitOption ? <VisibilityOffIcon /> : <GetAppIcon />}
        >
          {limitOption ? COMMENTS[language].hideBtn : COMMENTS[language].loadMore}
        </LimitButton>
      )}
      <SnackbarItem />
    </div>
  );
};

export default Comments;
