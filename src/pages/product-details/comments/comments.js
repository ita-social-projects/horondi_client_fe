import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import useValidation from '../../../utils/use-validation';
import useStyles from './comments.styles';

import { addComment } from '../../../redux/products/products.actions';
import CommentsItem from './comments-item';
import SnackbarItem from '../../../containers/snackbar';
import { Loader } from '../../../components/loader/loader';

import {
  COMMENT_DATA,
  TEXT,
  formRegExp,
  errorMessages
} from '../../../configs';
import { COMMENTS } from '../../../translations/product-details.translations';

const Comments = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const {
    commentsLoading,
    language,
    productId,
    userRates,
    comments,
    userData
  } = useSelector(({ Products, Language, User }) => ({
    commentsLoading: Products.commentsLoading,
    productId: Products.product._id,
    userRates: Products.product.userRates,
    comments: Products.product.comments,
    language: Language.language,
    userData: User.userData
  }));

  const {
    firstNameValidated,
    emailValidated,
    textValidated,
    allFieldsValidated,
    shouldValidate,
    comment,
    setFirstNameValidated,
    setEmailValidated,
    setTextValidated,
    setAllFieldsValidated,
    setShouldValidate,
    setComment
  } = useValidation();

  const [rate, setRate] = useState(0);

  const { link, script } = formRegExp;
  const { purchasedProduct, _id, email: userEmail, firstName: userName } =
    userData || {};

  const hasRate = useMemo(
    () => (userRates ? userRates.some(({ user }) => user._id === _id) : null),
    [userRates, _id]
  );

  const hasBought = useMemo(
    () =>
      purchasedProduct
        ? purchasedProduct.some((product) => product === productId)
        : null,
    [purchasedProduct, productId]
  );

  const rateTip = useMemo(
    () =>
      !_id
        ? COMMENTS[language].unregisteredTip
        : !hasBought
          ? COMMENTS[language].registeredTip
          : COMMENTS[language].successfulTip,
    [language, _id, hasBought]
  );

  const commentToSend = useMemo(
    () =>
      _id
        ? {
          ...COMMENT_DATA,
          user: _id,
          email: userEmail,
          firstName: userName,
          product: productId
        }
        : { ...COMMENT_DATA, product: productId },
    [_id, productId, userEmail, userName]
  );

  useEffect(() => {
    setComment(commentToSend);
  }, [setComment, commentToSend]);

  useEffect(() => {
    if (userData && textValidated) {
      setAllFieldsValidated(true);
    } else if (firstNameValidated && emailValidated && textValidated) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [
    firstNameValidated,
    emailValidated,
    textValidated,
    setAllFieldsValidated,
    userData
  ]);

  const { firstName, email, text } = comment;

  const handleChange = (event, setValid, regExp) => {
    const { value, name } = event.target;
    const noScriptText = value.replace(script, '');
    const noLinkText =
      name === TEXT ? noScriptText.replace(link, '') : noScriptText;

    setComment({ ...comment, [name]: noLinkText });

    if (noLinkText.match(regExp) && noLinkText.trim().length >= 2) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleComment = () => {
    setShouldValidate(true);
    if (allFieldsValidated) {
      dispatch(
        addComment({
          ...comment,
          user: _id,
          rate,
          method: hasRate ? 'updateRate' : 'addRate'
        })
      );

      setComment(commentToSend);
      setShouldValidate(false);
      setAllFieldsValidated(false);
      setEmailValidated(false);
      setFirstNameValidated(false);
      setTextValidated(false);
      setRate(0);
    }
  };

  const userFields = {
    firstNameField: {
      inputName: 'firstName',
      errorMessage: errorMessages[language].value.firstname,
      value: firstName,
      onChange: handleChange,
      validation: {
        value: firstNameValidated,
        setValid: setFirstNameValidated
      },
      type: TEXT,
      regExp: formRegExp.name,
      show: !userData
    },
    email: {
      inputName: 'email',
      errorMessage: errorMessages[language].value.email,
      value: email,
      onChange: handleChange,
      validation: {
        value: emailValidated,
        setValid: setEmailValidated
      },
      type: TEXT,
      regExp: formRegExp.email,
      show: !userData
    },
    text: {
      inputName: TEXT,
      errorMessage: errorMessages[language].value.text,
      value: text,
      onChange: handleChange,
      validation: {
        value: textValidated,
        setValid: setTextValidated
      },
      type: TEXT,
      regExp: formRegExp.text,
      multiline: true,
      rows: 7
    }
  };

  const commentsList = comments
    ? comments
      .sort((a, b) => b.date - a.date)
      .map(({ text, date, _id, user }) => (
        <CommentsItem
          key={_id}
          commentId={_id}
          user={user}
          text={text}
          date={date}
        />
      ))
    : null;

  return (
    <div className={styles.comment}>
      <h2>{COMMENTS[language].title}</h2>
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
      <form>
        <div className={styles.form}>
          {Object.values(userFields).map(
            ({
              inputName,
              errorMessage,
              value,
              onChange,
              validation,
              type,
              regExp,
              multiline = null,
              rows = null,
              show = true
            }) =>
              show ? (
                <div key={inputName}>
                  <TextField
                    required
                    className={`${
                      inputName === TEXT ? styles.text : styles.input
                    }`}
                    label={COMMENTS[language][inputName]}
                    variant='outlined'
                    name={inputName}
                    error={!validation.value && shouldValidate}
                    helperText={
                      !validation.value && shouldValidate
                        ? `${errorMessage}`
                        : ''
                    }
                    onChange={(e) => onChange(e, validation.setValid, regExp)}
                    value={value}
                    type={type}
                    multiline={multiline}
                    rows={rows}
                    data-cy={inputName}
                  />
                </div>
              ) : null
          )}
        </div>
        <Button className={styles.commentBtn} onClick={handleComment}>
          {COMMENTS[language].submit}
        </Button>
      </form>
      {commentsLoading ? <Loader /> : commentsList}
      <SnackbarItem />
    </div>
  );
};

export default Comments;
