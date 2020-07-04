import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import parse from 'html-react-parser';
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardMedia
} from '@material-ui/core';
import { getArticle } from '../../../redux/news/news.actions';
import { useStyles } from './news-detail.style';
import LoadingBar from '../../../components/LoadingBar';
import { LANGUAGE, TIME_OPTIONS } from '../../../configs';

const NewsDetailPage = ({ match }) => {
  const { article, loading } = useSelector(({ News }) => ({
    article: News.item,
    loading: News.loading
  }));
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

  if (loading) {
    return <LoadingBar />;
    // console.log(loading)
  }

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
        <iframe
          className={newsVideo ? 'disp-block' : 'disp-none'}
          title={newsTitle}
          width='100%'
          height='600'
          src={newsVideo}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
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
