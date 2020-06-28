import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import parse from 'html-react-parser';
import ReactPlayer from 'react-player';
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardMedia
} from '@material-ui/core';
import { getArticleById } from '../../redux/news-detail/news-detail.actions';
import { useStyles } from './news-detail.style';
import { LANGUAGE, TIME_OPTIONS } from '../../configs';

const NewsDetailPage = ({ match, item, list }) => {
  const articleId = match.params.id;
  useEffect(() => {
    window.scrollTo(0, 0);
    // getArticleById(articleId)
  }, [match.params.id]);

  const article = list.filter((item) => item._id === articleId);
  const newsTitle = article[0].title[LANGUAGE].value;
  const newsDateLanguegeOptions = ['ukr-UA', 'en-US'];
  const dateLANGUAGE = `${newsDateLanguegeOptions[LANGUAGE]}`;
  const dateToShow = new Date(parseInt(article[0].date));
  const newsDate = dateToShow.toLocaleString(`${dateLANGUAGE}`, TIME_OPTIONS);
  const newsImage = article[0].images[0].primary.medium;
  const newsText = parse(article[0].text[LANGUAGE].value);
  const newsVideo = article[0].video;
  const newsAuthor = article[0].author.name[LANGUAGE].value;
  const newsAuthorAvatar = article[0].author.image.small;
  const styles = useStyles();

  return (
    <Card className={styles.container}>
      <CardContent>
        <Typography
          className={styles.ArticleTitle}
          gutterBottom
          variant='h5'
          component='h2'
        >
          {newsTitle}
        </Typography>
        <CardHeader subheader={newsDate} />
        <hr />
        <div className={styles.imagesContainer}>
          <CardMedia
            className={styles.media}
            image={newsImage}
            title={newsTitle}
          />
        </div>
        <Typography
          variant='body2'
          color='textSecondary'
          component='div'
          className={styles.newsText}
        >
          {newsText}
        </Typography>
        <ReactPlayer
          className={styles.video}
          url={newsVideo}
          playing={false}
          controls
        />
        <hr />
        <div className={styles.newsAuthorFooter}>
          <CardHeader subheader={newsAuthor} />
          <CardContent />
          <CardMedia
            className={styles.authorAvatar}
            image={newsAuthorAvatar}
            title={newsTitle}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = ({ Article: { item }, News: { list } }) => ({
  item,
  list
});
const mapDispatchToProps = {
  getArticleById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewsDetailPage));
