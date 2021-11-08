import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useStyles } from './news-page.style';
import NewsItem from '../news-item';
import { getAllNews } from '../operations/news-queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const { t } = useTranslation();

  const { loading, error } = useQuery(getAllNews, {
    onCompleted: (data) => setNews(data.getAllNews.items)
  });

  const styles = useStyles();
  const newsItems = news.map(({ _id, date, author, image, title, text, slug, translationsKey }) => (
    <NewsItem
      date={date}
      key={_id}
      id={_id}
      author={author}
      image={image}
      title={title}
      slug={slug}
      text={text}
      translationsKey={translationsKey}
    />
  ));
  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <>
      <h1 className={styles.newsTitle}>{t('common.news')}</h1>
      <div className={styles.NewsPageItem}>{newsItems}</div>
    </>
  );
};

export default NewsPage;
