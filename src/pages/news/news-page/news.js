import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../../redux/news/news.actions';
import { useStyles } from './news.style';
import NewsItem from '../news-item';

const NewsPage = ({ getNews, list, language }) => {
  useEffect(() => {
    getNews();
    window.scrollTo(0, 0);
  }, [getNews]);

  const newsHeader = ['Новини', 'News'];
  const styles = useStyles();
  const newsItems = list.map(({ _id, date, author, images, title, text }) => (
    <NewsItem
      date={date}
      key={_id}
      id={_id}
      author={author}
      image={images}
      title={title}
      text={text}
    />
  ));

  return (
    <>
      <h1 className={styles.newsTitle}>{newsHeader[language]}</h1>
      <div className={styles.NewsPageItem}>{newsItems}</div>
    </>
  );
};

const mapStateToProps = ({ news: { list }, language: { language } }) => ({
  list,
  language
});
const mapDispatchToProps = {
  getNews
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
