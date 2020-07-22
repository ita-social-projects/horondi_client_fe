import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Backdrop } from '@material-ui/core';
import { getNews } from '../../../redux/news/news.actions';
import { useStyles } from './news.style';
import NewsItem from '../news-item';
import LoadingBar from '../../../components/loading-bar';

const NewsPage = () => {
  const { newslist, loading, language } = useSelector(({ News, Language }) => ({
    newslist: News.list,
    loading: News.loading,
    language: Language.language
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const newsHeader = ['Новини', 'News'];
  const styles = useStyles();
  if (loading) {
    return (
      <Backdrop className={styles.backdrop} open={loading} invisible>
        <LoadingBar color='inherit' />
      </Backdrop>
    );
  }
  const newsItems = newslist.map(
    ({ _id, date, author, images, title, text }) => (
      <NewsItem
        date={date}
        key={_id}
        id={_id}
        author={author}
        image={images}
        title={title}
        text={text}
      />
    )
  );
  return (
    <>
      <h1 className={styles.newsTitle}>{newsHeader[language]}</h1>
      <div className={styles.NewsPageItem}>{newsItems}</div>
    </>
  );
};

export default NewsPage;
