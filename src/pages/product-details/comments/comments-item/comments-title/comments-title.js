import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CommentsTitle = ({ count }) => {
  const [commentsCount, setCount] = useState(count);
  const { t } = useTranslation();

  useEffect(() => {
    setCount(count);
  }, [count]);

  return (
    <h2>
      {t('product.comments.commentsTitle')} ({commentsCount})
    </h2>
  );
};

export default CommentsTitle;
