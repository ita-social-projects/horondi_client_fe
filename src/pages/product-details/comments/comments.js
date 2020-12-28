import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import { Button, Tooltip, TextField } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useStyles } from './comments.styles';

import CommentsItem from './comments-item';
import SnackbarItem from '../../../containers/snackbar';
import { Loader } from '../../../components/loader/loader';

import {
  TEXT_VALUE,
  commentFields,
  formRegExp,
  commentsLimit
} from '../../../configs';
import { COMMENTS } from '../../../translations/product-details.translations';
import {
  addComment,
  setCommentsLimit
} from '../../../redux/comments/comments.actions';
import LimitButton from './limit-button/limit-button';
import useCommentValidation from '../../../hooks/use-comment-validation';
import { selectProductsIdCommentsLanguageUserData } from '../../../redux/selectors/multiple.selectors';

const Comments = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const {
    commentsLoading,
    language,
    productId,
    comments,
    userData,
    currentLimit
  } = useSelector(selectProductsIdCommentsLanguageUserData);

  const [rate, setRate] = useState(0);

  const { _id: userId, email, firstName, purchasedProducts, images } =
    userData || {};

  const onSubmit = (formValues) => {
    const userFields = userId ? { email, firstName, images, user: userId } : {};
    dispatch(
      addComment({
        ...formValues,
        ...userFields,
        product: productId,
        show: true,
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

  const hasBought = useMemo(
    () =>
      !!purchasedProducts &&
      purchasedProducts.some((product) => product._id === productId),
    [purchasedProducts, productId]
  );

  const rateTip = useMemo(
    () =>
      !userId
        ? COMMENTS[language].unregisteredTip
        : !hasBought
        ? COMMENTS[language].registeredTip
        : COMMENTS[language].successfulTip,
    [language, userId, hasBought]
  );

  const commentsList = comments
    ? comments
        .slice(0, currentLimit)
        .map(({ text, date, _id, user }) => (
          <CommentsItem
            key={_id}
            commentId={_id}
            user={user}
            text={text}
            date={date}
          />
        ))
    : [];

  const limitOption =
    commentsList.length === comments.length && comments.length > commentsLimit;

  const handleCommentsReload = () => {
    const newLimit = limitOption ? commentsLimit : currentLimit + commentsLimit;
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
            disabled={!hasBought}
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
              ((name !== TEXT_VALUE && !userData) || name === TEXT_VALUE) && (
                <div key={name}>
                  <TextField
                    className={`${
                      name === TEXT_VALUE ? styles.text : styles.input
                    }`}
                    name={name}
                    onChange={
                      name === TEXT_VALUE ? handleCommentChange : handleChange
                    }
                    onBlur={handleBlur}
                    value={values[name]}
                    label={COMMENTS[language][name]}
                    error={!!errors[name]}
                    helperText={errors[name] || ''}
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
          <Button
            type='submit'
            className={styles.commentBtn}
            onClick={setShouldValidate.bind(this, true)}
          >
            {COMMENTS[language].submit}
          </Button>
          {commentsLoading && (
            <div className={styles.loader}>
              <Loader width={40} height={40} />
            </div>
          )}
        </div>
      </form>
      {commentsList}
      {comments.length > commentsLimit && (
        <LimitButton
          onClick={handleCommentsReload}
          startIcon={limitOption ? <VisibilityOffIcon /> : <GetAppIcon />}
        >
          {limitOption
            ? COMMENTS[language].hideBtn
            : COMMENTS[language].loadMore}
        </LimitButton>
      )}
      <SnackbarItem />
    </div>
  );
};

export default Comments;
