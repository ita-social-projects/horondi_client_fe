import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { wachNewsLoad } from '../../redux/news-page-redux/actions';
import { useStyles } from './news-page.style';
import NewsPageItem from './components/news-list';

const NewsPage = ({ wachNewsLoad, news }) => {
  useEffect(() => {
    wachNewsLoad();
  }, [wachNewsLoad]);

  const styles = useStyles();
  console.log(news);
  const newsItems = news.map(({ _id, date, author, images }) => (
    <NewsPageItem date={date} key={_id} author={author} image={images} />
  ));

  return (
    <>
      <h2 className={styles.newsTitle}>News</h2>
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
