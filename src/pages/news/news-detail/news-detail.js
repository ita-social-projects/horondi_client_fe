import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Card, Typography, CardContent, CardHeader, CardMedia } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStyles } from './news-detail.style';
import { IMG_URL, TIME_OPTIONS } from '../../../configs';
import { getNewsById } from '../operations/news-queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';

const NewsDetail = ({ match }) => {
  const [article, setArticle] = useState({});

  const articleId = match.params.id;
  const id = articleId.split('-')[0];

  const { loading, error } = useQuery(getNewsById, {
    onCompleted: (data) => setArticle(data.getNewsById),
    variables: { id }
  });
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;
  const styles = useStyles();

  if (loading || error || !article._id) return errorOrLoadingHandler(error, loading);

  const newsDateLanguageOptions = ['ukr-UA', 'en-US'];
  const dateLanguage = newsDateLanguageOptions[language];

  if (article.text[language].value === null) {
    return <h2>{t('newsDetail.change')}</h2>;
  }

  return (
    <Card className={styles.container}>
      <CardContent>
        <Typography className={styles.ArticleTitle} gutterBottom variant='h2' component='h2'>
          {article.title[language].value || t('newsDetail.noTitle')}
        </Typography>
        <CardHeader
          subheader={new Date(parseInt(article.date)).toLocaleString(dateLanguage, TIME_OPTIONS)}
        />
        <hr />
        <div className={styles.imagesContainer}>
          <CardMedia
            className={styles.media}
            image={IMG_URL + article.image || t('newsDetail.noPhoto')}
            title={article.title[language].value || t('newsDetail.noTitle')}
            alt={article.title[language].value || t('newsDetail.noTitle')}
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
          {parse(article?.text[language].value || '') || t('newsDetail.noText')}
        </Typography>
        <hr />
        <div className={styles.newsAuthorFooter}>
          <CardHeader
            subheader={article.author.name[language]?.value || t('newsDetail.noAuthor')}
            id='newsAuthor'
          />
          <CardMedia
            className={styles.authorAvatar}
            image={IMG_URL + article.author.image || t('newsDetail.noAuthor')}
            title={article.title[language].value || t('newsDetail.noTitle')}
            component='div'
            id='newsAuthorAvatar'
          />
        </div>
      </CardContent>
    </Card>
  );
};

NewsDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default NewsDetail;
