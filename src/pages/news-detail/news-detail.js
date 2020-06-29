import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { getArticle } from '../../redux/news-detail/news-detail.actions';
import { useStyles } from './news-detail.style';
import { LANGUAGE, TIME_OPTIONS } from '../../configs';

const NewsDetailPage = ({ match }) => {
  const article = useSelector(({ Article: { item } }) => item);
  const dispatch = useDispatch();

  useEffect(() => {
    const articleId = match.params.id;
    window.scrollTo(0, 0);
    dispatch(getArticle(articleId));
  }, [match.params.id, dispatch]);

  const newsTitle = article.title[LANGUAGE].value;
  const newsDateLanguegeOptions = ['ukr-UA', 'en-US'];
  const dateLANGUAGE = `${newsDateLanguegeOptions[LANGUAGE]}`;
  const dateToShow = new Date(parseInt(article.date));
  const newsDate = dateToShow.toLocaleString(`${dateLANGUAGE}`, TIME_OPTIONS);
  const newsImage = article.images[0].primary.medium;
  const newsText = parse(article.text[LANGUAGE].value);
  const newsVideo = article.video;
  const newsAuthor = article.author.name[LANGUAGE].value;
  const newsAuthorAvatar = article.author.image.small;
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
            alt={newsTitle}
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
          className={newsVideo ? 'styles.video' : 'styles.hide'}
          url={newsVideo}
          playing={false}
          origin='http://localhost:3000/'
          controls
        />
        <hr />
        <div className={styles.newsAuthorFooter}>
          <CardHeader subheader={newsAuthor} />
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

export default withRouter(NewsDetailPage);
