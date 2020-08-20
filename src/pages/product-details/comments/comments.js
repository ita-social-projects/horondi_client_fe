import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './comments.styles';

import CommentsItem from './comments-item';

import { INPUT_VARIANT } from '../../../configs';
import { COMMENTS } from '../../../translations/product-details.translations';

const Comments = ({ comments }) => {
  const styles = useStyles();
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  const [rate, setRate] = useState(0);

  const commentsList = comments
    ? comments.map(({ _id, text, date, user: { name } }) => (
      <CommentsItem
        key={_id}
        language={language}
        name={name}
        text={text}
        date={date}
      />
    ))
    : null;

  return (
    <div className={styles.comments}>
      <h2>{COMMENTS[language].title}</h2>
      <Rating
        name='simple-controlled'
        value={rate}
        onChange={(e, newRate) => setRate(newRate)}
      />
      <form>
        <div className={styles.form}>
          <TextField
            className={styles.input}
            label={COMMENTS[language].firstName}
            variant={INPUT_VARIANT}
            required
          />
          <TextField
            className={styles.input}
            label={COMMENTS[language].email}
            variant={INPUT_VARIANT}
            required
          />
          <br />
          <TextField
            className={styles.textInput}
            label={COMMENTS[language].text}
            multiline
            rows={10}
            variant={INPUT_VARIANT}
            required
          />
        </div>
        <Button className={styles.commentBtn}>
          {COMMENTS[language].submit}
        </Button>
      </form>
      <hr />
      {commentsList}
    </div>
  );
};

export default Comments;
