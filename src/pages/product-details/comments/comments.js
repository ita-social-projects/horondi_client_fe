import React, { useState } from 'react';

import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './COMMENTS.styles';

import CommentsItem from './comments-item';

import { INPUT_VARIANT } from '../../../configs';
import { COMMENTS } from '../../../translations/product-details.translations';

const Comments = ({ language, comments }) => {
  const styles = useStyles();

  const [rate, setRate] = useState(0);

  const commentsList = comments
    ? comments.map(({ text, date, user: { firstName } }) => (
      <CommentsItem
        key={date}
        language={language}
        name={firstName}
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
            label={COMMENTS[language].name}
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
            label={COMMENTS[language].textField}
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
