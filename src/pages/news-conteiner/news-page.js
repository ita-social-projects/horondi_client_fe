import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { wachNewsLoad } from '../../redux/news-page/news-actions';
import { useStyles } from './news-page.style';
import NewsPageItem from './components/news-list';
import { language } from '../../configs';

const NewsPage = ({ wachNewsLoad, news }) => {
  useEffect(() => {
    wachNewsLoad();
  }, [wachNewsLoad]);

  const newsHeader = ['Новини', 'News'];
  const styles = useStyles();
  console.log(news);
  const newsItems = news.map(({ _id, date, author, images, title, text }) => (
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
      <h1 className={styles.newsTitle}>{newsHeader[language]}</h1>
      <div className={styles.NewsPageItem}>{newsItems}</div>
    </>
  );
};

const mapStateToProps = ({ newsReduser: { news } }) => ({
  news
});
const mapDispatchToProps = {
  wachNewsLoad
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
