import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useStyles } from './news-page.style';
import { NEWS_AMOUNT } from './constants';
import NewsItem from '../news-item';
import { getAllNews } from '../operations/news-queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';
import OrderHistoryPagination from '../../../containers/orders/order-history/order-history-pagination/index';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const { t } = useTranslation();
  const [count, setCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error } = useQuery(getAllNews, {
    variables: {
      limit: NEWS_AMOUNT,
      skip: (currentPage - 1) * NEWS_AMOUNT
    },
    onCompleted: (data) => {
      setNews(data.getAllNews.items);
      setCount(data.getAllNews.count);
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first'
  });
  const changeHandler = (value) => {
    setCurrentPage(value);
  };

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

  const quantityPages = Math.ceil(count / NEWS_AMOUNT);
  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <>
      <h1 className={styles.newsTitle}>{t('common.news')}</h1>
      <div className={styles.NewsPageItem}>{newsItems}</div>
      <OrderHistoryPagination data={[currentPage, quantityPages, changeHandler]} />
    </>
  );
};

export default NewsPage;
