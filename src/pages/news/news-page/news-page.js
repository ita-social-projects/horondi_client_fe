import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useStyles } from './news-page.style';
import NewsItem from '../news-item';
import { getAllNews } from '../operations/news-queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const { i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;

  const { loading, error } = useQuery(getAllNews, {
    onCompleted: (data) => setNews(data.getAllNews.items)
  });

  const newsHeader = ['Новини', 'News'];
  const styles = useStyles();
  const newsItems = news?.map(({ _id, date, author, image, title, text, slug }) => (
    <NewsItem
      date={date}
      key={_id}
      id={_id}
      author={author}
      image={image}
      title={title}
      slug={slug}
      text={text}
    />
  ));

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <>
      <h1 className={styles.newsTitle}>{newsHeader[language]}</h1>
      <div className={styles.NewsPageItem}>{newsItems}</div>
    </>
  );
};

export default NewsPage;
