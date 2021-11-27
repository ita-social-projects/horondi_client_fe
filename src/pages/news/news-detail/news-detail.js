import React from 'react';
import { useQuery } from '@apollo/client';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Card, Typography, CardContent, CardHeader, CardMedia } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStyles } from './news-detail.style';
import { IMG_URL } from '../../../configs';
import { TIME_OPTIONS } from '../constants';
import { getNewsById } from '../operations/news-queries';
import errorOrLoadingHandler from '../../../utils/errorOrLoadingHandler';

const NewsDetail = ({ match }) => {
  const articleId = match.params.id;
  const id = articleId.split('-')[0];

  const { loading, error, data } = useQuery(getNewsById, { variables: { id } });

  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const dateLanguage = i18n.language === 'ua' ? 'ukr-UA' : 'en-US';

  if (loading || error) return errorOrLoadingHandler(error, loading);

  const article = data.getNewsById;
  const { translationsKey } = article;

  if (!t(`${translationsKey}.text`)) {
    return <h2>{t('newsDetail.change')}</h2>;
  }

  return (
    <Card className={styles.container}>
      <CardContent>
        <Typography className={styles.ArticleTitle} gutterBottom variant='h2' component='h2'>
          {translationsKey ? t(`${translationsKey}.title`) : t('newsDetail.noTitle')}
        </Typography>
        <CardHeader
          subheader={new Date(parseInt(article.date)).toLocaleString(dateLanguage, TIME_OPTIONS)}
        />
        <hr />
        <div className={styles.imagesContainer}>
          <CardMedia
            className={styles.media}
            image={IMG_URL + article.image}
            title={translationsKey ? t(`${translationsKey}.title`) : t('newsDetail.noTitle')}
            alt={translationsKey ? t(`${translationsKey}.title`) : t('newsDetail.noTitle')}
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
          {translationsKey ? parse(t(`${translationsKey}.text`)) : t('newsDetail.noText')}
        </Typography>
        <hr />
        <div className={styles.newsAuthorFooter}>
          <CardHeader
            subheader={translationsKey ? t(`${translationsKey}.name`) : t('newsDetail.noAuthor')}
            id='newsAuthor'
          />
          <CardMedia
            className={styles.authorAvatar}
            image={IMG_URL + article.author.image}
            title={translationsKey ? t(`${translationsKey}.title`) : t('newsDetail.noTitle')}
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
