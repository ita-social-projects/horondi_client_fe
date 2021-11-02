import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Rating from '@material-ui/lab/Rating';
import { Button, TextField, Tooltip } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/client';
import i18n from 'i18next';
import { useStyles } from './comments.styles';
import CommentsItem from './comments-item';
import SnackbarItem from '../../../containers/snackbar';
import { Loader } from '../../../components/loader/loader';
import {
  commentFields,
  formRegExp,
  SNACKBAR_MESSAGE,
  SNACKBAR_TYPES,
  TEXT_VALUE
} from '../../../configs';
import useCommentValidation from '../../../hooks/use-comment-validation';
import {
  handleArrowIcon,
  handleClassName,
  handleHelperText,
  handleTextField,
  handleUserLogin
} from '../../../utils/handle-comments';
import { addCommentMutation, getCommentsQuery } from './operations/comments.queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';
import { useIsLoadingOrError } from '../../../hooks/useIsLoadingOrError';
import { SnackBarContext } from '../../../containers/snackbar/snackbar-context';

const Comments = ({ productId }) => {
  const styles = useStyles();
  const [comments, setComments] = useState({ items: [], count: 0 });
  const [currentLimit, setCurrentLimit] = useState(10);
  const { userData } = useSelector(({ User }) => ({ userData: User.userData }));
  const { t } = useTranslation();
  const snackbar = useContext(SnackBarContext);

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
    },
    onError: (err) => errorOrLoadingHandler(err)
  });

  const [addComment, { loading: addCommentLoading }] = useMutation(addCommentMutation, {
    onCompleted: () => snackbar.setMessage(SNACKBAR_MESSAGE.added),
    onError: (err) => {
      errorOrLoadingHandler(err);
      snackbar.setMessage(SNACKBAR_MESSAGE.error, SNACKBAR_TYPES.error);
    }
  });

  const { isLoading } = useIsLoadingOrError([addCommentLoading, getCommentsLoading]);
  const { _id: userId } = userData || {};

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
  }, [i18n.language === 'ua' ? 0 : 1, userId]);

  const commentsList = comments.items.map(({ _id, ...rest }) => (
    <CommentsItem
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
          <Tooltip title={userData ? '' : t(`product.tooltips.unregisteredComment`)}>
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

          {isLoading && (
            <div className={styles.loader}>
              <Loader width={40} height={40} heightWrap={90} />
            </div>
          )}
        </div>
      </form>
      {commentsList}

      {currentLimit < comments.count && (
        <div className={styles.loadMore}>
          {handleArrowIcon(limitOption)}
          <span onClick={handleCommentsReload} className={styles.loadMoreText}>
            {limitOption ? null : t('product.comments.loadMore')}
          </span>
        </div>
      )}
      {isLoading ? <Loader width={40} height={40} heightWrap={90} /> : null}
      <SnackbarItem />
    </div>
  );
};

export default Comments;
