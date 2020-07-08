import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import parse from 'html-react-parser';
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardMedia,
  Backdrop
} from '@material-ui/core';
import { getArticle } from '../../../redux/news/news.actions';
import { useStyles } from './news-detail.style';
import LoadingBar from '../../../components/LoadingBar';
import { TIME_OPTIONS } from '../../../configs';
import { getFromLocalStorage } from '../../../services/local-storage.service';

const NewsDetailPage = ({ match }) => {
  const { article, loading } = useSelector(({ News }) => ({
    article: News.activeArticle,
    loading: News.loading
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    const articleId = match.params.id;
    dispatch(getArticle(articleId));
    window.scrollTo(0, 0);
  }, [match.params.id, dispatch, article]);

  const styles = useStyles();

  if (loading || !article) {
    return (
      <Backdrop className={styles.backdrop} open={loading} invisible>
        <LoadingBar color='inherit' />
      </Backdrop>
    );
  }
  const language = getFromLocalStorage('language');
  const newsTitle =
    article.title.length !== 0
      ? article.title[language].value
      : 'No title provided';
  const newsDateLanguageOptions = ['ukr-UA', 'en-US'];
  const dateLanguage = `${newsDateLanguageOptions[language]}`;
  const dateToShow = new Date(parseInt(article.date));
  const newsDate = dateToShow.toLocaleString(`${dateLanguage}`, TIME_OPTIONS);
  const newsImage = article.images ? article.images.primary.medium : ' ';
  const newsText =
    article.text.length !== 0
      ? parse(article.text[language].value)
      : 'No text provided';
  const newsVideo = article.video;
  const newsAuthor =
    article.author.name.length !== 0
      ? article.author.name[language].value
      : 'No author provided';
  const newsAuthorAvatar = article.author.image
    ? article.author.image.small
    : 'No author provided';

  return (
    <Card className={styles.container}>
      <CardContent>
        <Typography
          className={styles.ArticleTitle}
          gutterBottom
          variant='h2'
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
            component='div'
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
            component='div'
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default withRouter(NewsDetailPage);
