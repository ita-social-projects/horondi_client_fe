import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Rating from '@material-ui/lab/Rating';
import { Button, Tooltip, TextField } from '@material-ui/core';
import { useStyles } from './comments.styles';
import CommentsItem from './comments-item';
import SnackbarItem from '../../../containers/snackbar';
import { Loader } from '../../../components/loader/loader';
import { TEXT_VALUE, commentFields, formRegExp } from '../../../configs';
import {
  addComment,
  setCommentsSkip,
  getComments,
  clearComments
} from '../../../redux/comments/comments.actions';
import useCommentValidation from '../../../hooks/use-comment-validation';
import { selectProductsIdCommentsLanguageUserData } from '../../../redux/selectors/multiple.selectors';
import {
  handleClassName,
  handleTextField,
  handleHelperText,
  handleUserLogin,
  handleArrowIcon
} from '../../../utils/handle-comments';

const Comments = ({ productId }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const {
    commentsLoading,
    language,
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

  const rateTip = useMemo(() => {
    if (!userId) {
      return t('product.comments.unregisteredTip');
    }
    return t('product.comments.successfulTip');
  }, [language, userId]);

  const commentsLength = comments?.length;

  const commentsList = comments
    ? comments.map(({ _id, ...rest }) => (
      <CommentsItem key={_id} data={rest} commentId={_id} productId={productId} />
    ))
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
      <h2 className={styles.title}>{t('product.comments.title')}</h2>
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
                    label={t(`product.comments.${name}`)}
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
          <Tooltip title={userData ? '' : t(`commentsItem.tooltips.unregisteredComment`)}>
            <div>
              <Button
                type='submit'
                className={styles.commentBtn}
                disabled={!userData}
                onClick={() => setShouldValidate(true)}
              >
                {t('product.comments.submit')}
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
            {limitOption ? null : t('product.comments.loadMore')}
          </span>
        </div>
      )}
      {getCommentsLoading ? <Loader width={40} height={40} heightWrap={90} /> : null}
      <SnackbarItem />
    </div>
  );
};

export default Comments;
