import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { watchNewsLoad } from '../../redux/news/news.actions';
import { useStyles } from './news.style';
import NewsPageItem from './components/news-list';
import { LANGUAGE } from '../../configs';

const NewsPage = ({ watchNewsLoad, list }) => {
  useEffect(() => {
    watchNewsLoad();
    window.scrollTo(0, 0);
  }, [watchNewsLoad]);

  const newsHeader = ['Новини', 'News'];
  const styles = useStyles();
  const newsItems = list.map(({ _id, date, author, images, title, text }) => (
    <NewsPageItem
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
      <h1 className={styles.newsTitle}>{newsHeader[LANGUAGE]}</h1>
      <div className={styles.NewsPageItem}>{newsItems}</div>
    </>
  );
};

const mapStateToProps = ({ news: { list } }) => ({
  list
});
const mapDispatchToProps = {
  watchNewsLoad
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
