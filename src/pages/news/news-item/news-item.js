import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStyles } from './news-item.style';
import { IMG_URL } from '../../../configs';
import { TIME_OPTIONS } from '../constants';

const NewsItem = ({ date, author, image, id, slug, translationsKey }) => {
  const { t, i18n } = useTranslation();
  const dateLanguage = i18n.language === 'ua' ? 'ukr-UA' : 'en-US';
  const styles = useStyles();
  if (!t(`${translationsKey}.text`)) {
    return null;
  }
  return (
    <div className={styles.container}>
      <Card className={styles.root}>
        <div className={styles.imagesContainer}>
          <CardMedia
            className={styles.media}
            image={IMG_URL + image}
            title={translationsKey ? t(`${translationsKey}.title`) : t('newsDetail.noTitle')}
            component='div'
            data-cy='image'
          />
        </div>
        <div className={styles.newsAuthorFooter}>
          <Typography variant='h5' component='div' className={styles.newsDateAutor}>
            <span>{new Date(parseInt(date)).toLocaleString(dateLanguage, TIME_OPTIONS)}</span>
            <span>{translationsKey ? t(`${translationsKey}.name`) : t('newsDetail.noAuthor')}</span>
          </Typography>
        </div>
        <CardContent className={styles.ArticleTitleContainer}>
          <Typography
            className={styles.ArticleTitle}
            gutterBottom
            variant='h5'
            component='h2'
            data-cy='newsTitle'
          >
            {translationsKey ? t(`${translationsKey}.title`) : t('newsDetail.noTitle')}
          </Typography>
        </CardContent>
        <CardContent className={styles.newsItemContent}>
          <Typography
            variant='body2'
            color='textSecondary'
            component='div'
            className={styles.newsText}
            data-cy='newsText'
          >
            {translationsKey
              ? parse(t(`${translationsKey}.text`).slice(0, 299))
              : t('newsDetail.noText')}
          </Typography>
        </CardContent>
        <div className={styles.newsFooter}>
          <Link to={`/news/${id}-${slug}`}>
            <Button variant='outlined' className={styles.newsButton} data-cy='readMoreButton'>
              {t('buttons.readMore')}
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

const newsItemPropTypes = {
  date: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.arrayOf(
      PropTypes.shape({
        lang: PropTypes.string,
        value: PropTypes.string
      })
    )
  })
};

NewsItem.propTypes = newsItemPropTypes;
NewsItem.defaultProps = newsItemPropTypes;
export default NewsItem;
