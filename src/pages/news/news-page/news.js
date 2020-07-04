import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from '../../../redux/news/news.actions';
import { useStyles } from './news.style';
import NewsItem from '../news-item';
import LoadingBar from '../../../components/LoadingBar';
import { LANGUAGE } from '../../../configs';

const NewsPage = () => {
  const newslist = useSelector(({ News: { list } }) => list);
  const loading = useSelector(({ News: { loading } }) => loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const newsHeader = ['Новини', 'News'];
  const styles = useStyles();
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
  if (loading) {
    return <LoadingBar />;
    // console.log(loading)
  }
  return (
    <>
      <h1 className={styles.newsTitle}>{newsHeader[LANGUAGE]}</h1>
      <div className={styles.NewsPageItem}>{newsItems}</div>
    </>
  );
};

export default NewsPage;
