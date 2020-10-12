import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardMedia
} from '@material-ui/core';
import { getArticle } from '../../../redux/news/news.actions';
import { useStyles } from './news-detail.style';
import { TIME_OPTIONS } from '../../../configs';
import { Loader } from '../../../components/loader/loader';

const NewsDetailPage = ({ match }) => {
  const { article, loading, language } = useSelector(({ News, Language }) => ({
    article: News.activeArticle,
    loading: News.loading,
    language: Language.language
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    const articleId = match.params.id;
    dispatch(getArticle(articleId));
    window.scrollTo(0, 0);
  }, [match.params.id, dispatch]);

  const styles = useStyles();

  if (loading || !article) {
    return (
      <div className={styles.center}>
        <Loader />
      </div>
    );
  }
  if (article.text[language].value === null) {
    return (
      <h2>Sory, this article is not translated. Try to change language</h2>
    );
  }
  const newsTitle =
    article.title.length !== 0
      ? article.title[language].value
      : 'No title provided';
  const newsDateLanguageOptions = ['ukr-UA', 'en-US'];
  const dateLanguage = newsDateLanguageOptions[language];
  const dateToShow = new Date(parseInt(article.date));
  const newsDate = dateToShow.toLocaleString(dateLanguage, TIME_OPTIONS);
  const newsImage = article.images ? article.images.primary.medium : ' ';
  const newsText =
    article.text.length !== 0
      ? parse(article.text[language].value)
      : 'No text provided';
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
          id='fullText'
        >
          {newsText}
        </Typography>
        <hr />
        <div className={styles.newsAuthorFooter}>
          <CardHeader subheader={newsAuthor} id='newsAuthor' />
          <CardMedia
            className={styles.authorAvatar}
            image={newsAuthorAvatar}
            title={newsTitle}
            component='div'
            id='newsAuthorAvatar'
          />
        </div>
      </CardContent>
    </Card>
  );
};

NewsDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default NewsDetailPage;
