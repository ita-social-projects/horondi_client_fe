import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './comments-item.styles';

import {
  COMMENTS_TIME_OPTIONS,
  DATE_LANGUAGE_OPTIONS
} from '../../../../configs';

const CommentsItem = ({ name, text, date }) => {
  const styles = useStyles();
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  const dateLanguage = DATE_LANGUAGE_OPTIONS[language];
  const dateToShow = new Date(parseInt(date));
  const commentDate = dateToShow.toLocaleString(
    dateLanguage,
    COMMENTS_TIME_OPTIONS
  );

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <div>
          <div className={styles.head}>
            <h3>{name}</h3>
            <div className={styles.date}>{commentDate}</div>
          </div>
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentsItem;
