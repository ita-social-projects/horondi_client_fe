import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Rating from '@material-ui/lab/Rating';
import { Button, FormHelperText, TextField, Tooltip } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/client';
import { useStyles } from './comments.styles';
import CommentsItem from './comments-item';
import SnackbarItem from '../../../containers/snackbar';
import { Loader } from '../../../components/loader/loader';
import { commentFields } from '../../../configs/index';
import { ERROR } from '../constants';
import { formRegExp } from '../../../configs/regexp';
import useCommentValidation from '../../../hooks/use-comment-validation';
import { handleArrowIcon, handleUserLogin } from '../../../utils/handle-comments';
import { addCommentMutation, getCommentsQuery } from './operations/comments.queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';
import { useIsLoadingOrError } from '../../../hooks/useIsLoadingOrError';
import { SnackBarContext } from '../../../context/snackbar-context';

const Comments = ({ productId, checkCountComments }) => {
  const styles = useStyles();
  const [comments, setComments] = useState({ items: [], count: 0 });
  const [currentLimit, setCurrentLimit] = useState(3);
  const { userData } = useSelector(({ User }) => ({ userData: User.userData }));
  const { t } = useTranslation();
  const { setSnackBarMessage } = useContext(SnackBarContext);

  const { refetch: refetchComments, loading: getCommentsLoading } = useQuery(getCommentsQuery, {
    variables: {
      filter: { productId, filters: false },
      pagination: { skip: 0, limit: currentLimit }
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    onCompleted: (data) => {
      setComments(data.getCommentsByProduct);
      checkCountComments(data.getCommentsByProduct);
    },
    onError: (err) => errorOrLoadingHandler(err)
  });
  const [addComment, { loading: addCommentLoading }] = useMutation(addCommentMutation, {
    onCompleted: () => setSnackBarMessage(t('product.snackBar.added')),
    onError: (err) => {
      errorOrLoadingHandler(err);
      setSnackBarMessage(t('errorPage.pageMessage.DEFAULT_ERROR'), ERROR);
    }
  });
  const { isLoading } = useIsLoadingOrError([addCommentLoading, getCommentsLoading]);
  const { _id: userId, firstName: userFirstName } = userData || {};

  const onSubmit = async (formValues) => {
    const userFields = userId ? { user: userId } : {};

    await addComment({
      variables: {
        ...formValues,
        ...userFields,
        product: productId,
        show: false,
        rate
      }
    });
    await refetchComments();

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
  }, [t, userId]);

  const commentsCount = comments.count;

  const commentsList = comments.items.map(({ _id, ...rest }) => (
    <CommentsItem
      userFirstName={userFirstName}
      key={_id}
      commentItem={rest}
      refetchComments={refetchComments}
      commentId={_id}
      productId={productId}
    />
  ));
  const limitOption = commentsList.length === comments.count;

  const handleCommentsReload = () => {
    setCurrentLimit((prev) => prev + 10);
  };

  const handleCommentChange = (e) => {
    const value = e.target.value.replace(formRegExp.link, '');
    setFieldValue(commentFields.text.name, value);
  };

  return (
    <div className={styles.comment} id='comment'>
      <h2 className={styles.title}>{t('product.comments.title')}</h2>
      <Tooltip title={rateTip} placement='top-start'>
        <span className={styles.rate}>
          <span className={styles.textRate}>{t('product.comments.rating')}</span>
          <Rating
            data-cy='rate'
            disabled={!userData}
            name='edit-rate'
            value={rate}
            onChange={(_e, newRate) => !!newRate && setRate(newRate)}
          />
        </span>
      </Tooltip>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <TextField
            id='text'
            onChange={handleCommentChange}
            onBlur={handleBlur}
            value={values.text}
            disabled={!userData}
            label={t(`product.comments.text`)}
            error={!!errors.text}
            multiline
            rows={5}
            variant='outlined'
            data-cy='text'
          />
          <FormHelperText className={styles.errorTextarea}>
            {errors.text ? t('error.textLength') : ' '}
          </FormHelperText>
        </div>

        <div className={styles.submit}>
          <div className={styles.commentBtnContainer}>
            <Button
              className={`${styles.commentBtn} ${styles.cancelBtn}`}
              disabled={!userData || isLoading}
              onClick={() => resetForm()}
            >
              {t('product.comments.cancel')}
            </Button>
            <Tooltip
              title={userData ? '' : t(`product.tooltips.unregisteredComment`)}
              placement='bottom'
            >
              <div>
                <Button
                  type='submit'
                  className={styles.commentBtn}
                  disabled={!userData || isLoading}
                  onClick={() => setShouldValidate(true)}
                >
                  {t('product.comments.submit')}
                </Button>
              </div>
            </Tooltip>
          </div>
        </div>
      </form>
      <h2 className={styles.title}>
        {t('product.comments.commentsTitle')} ({commentsCount})
      </h2>
      {commentsList.length ? (
        commentsList
      ) : (
        <div className={styles.emptyComments}>{t('product.comments.emptyComments')}</div>
      )}
      <div className={styles.showMore}>
        {getCommentsLoading ? (
          <div className={styles.loader} data-testid='getCommentsLoader'>
            <Loader width={40} height={40} heightWrap={55} />
          </div>
        ) : (
          currentLimit < comments.count && (
            <div className={styles.loadMore} data-testid='showMore'>
              {handleArrowIcon(limitOption)}
              <span onClick={handleCommentsReload} className={styles.loadMoreText}>
                {limitOption ? null : t('product.comments.loadMore')}
              </span>
            </div>
          )
        )}
      </div>
      <SnackbarItem />
    </div>
  );
};

export default Comments;
