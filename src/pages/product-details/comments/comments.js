import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import { Button, TextField, Tooltip } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/client';
import { useStyles } from './comments.styles';

import CommentsItem from './comments-item';
import SnackbarItem from '../../../containers/snackbar';
import { Loader } from '../../../components/loader/loader';

import { commentFields, formRegExp, TEXT_VALUE } from '../../../configs';
import { COMMENTS } from '../../../translations/product-details.translations';
import useCommentValidation from '../../../hooks/use-comment-validation';
import { selectProductsIdCommentsLanguageUserData } from '../../../redux/selectors/multiple.selectors';
import {
  handleArrowIcon,
  handleClassName,
  handleHelperText,
  handleRateTip,
  handleTextField,
  handleTitleSubmit,
  handleUserLogin
} from '../../../utils/handle-comments';
import { addCommentMutation, getCommentsQuery } from './operations/comments.queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';
import { useIsLoading } from '../../../hooks/useIsLoading';

const Comments = ({ productId }) => {
  const styles = useStyles();
  const [comments, setComments] = useState({ items: [], count: 0 });
  const [currentLimit, setCurrentLimit] = useState(10);
  const { language, userData, skip } = useSelector(selectProductsIdCommentsLanguageUserData);

  const { refetch: refetchComments, loading: getCommentsLoading } = useQuery(getCommentsQuery, {
    variables: {
      filter: { productId, filters: false },
      pagination: { skip, limit: currentLimit }
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
    onError: (err) => errorOrLoadingHandler(err)
  });

  const { isLoading } = useIsLoading([addCommentLoading, getCommentsLoading]);

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

  const rateTip = useMemo(() => handleRateTip(userId, language), [language, userId]);

  const commentsList = comments.items.map(({ _id, ...rest }) => (
    <CommentsItem key={_id} data={rest} commentId={_id} productId={productId} />
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
                disabled={!userData || isLoading}
                onClick={() => setShouldValidate(true)}
              >
                {COMMENTS[language].submit}
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
            {limitOption ? null : COMMENTS[language].loadMore}
          </span>
        </div>
      )}
      {isLoading ? <Loader width={40} height={40} heightWrap={90} /> : null}
      <SnackbarItem />
    </div>
  );
};

export default Comments;
