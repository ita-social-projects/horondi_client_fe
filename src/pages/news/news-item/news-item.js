import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Avatar
} from '@material-ui/core';
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
        <CardHeader
          subheader={new Date(parseInt(date)).toLocaleString(dateLanguage, TIME_OPTIONS)}
          data-cy='date'
        />
        <CardContent className={styles.newsItemContent}>
          <Typography
            className={styles.ArticleTitle}
            gutterBottom
            variant='h5'
            component='h2'
            data-cy='newsTitle'
          >
            {translationsKey ? t(`${translationsKey}.title`) : t('newsDetail.noTitle')}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='div'
            className={styles.newsText}
            data-cy='newsText'
          >
            {translationsKey ? parse(t(`${translationsKey}.text`)) : t('newsDetail.noText')}
          </Typography>
        </CardContent>
        <div className={styles.newsFooter}>
          <Link to={`/news/${id}-${slug}`}>
            <Button variant='contained' className={styles.newsButton} data-cy='readMoreButton'>
              {t('buttons.readMore')}
            </Button>
          </Link>
          <div className={styles.newsAuthorFooter}>
            <CardHeader
              subheader={translationsKey ? t(`${translationsKey}.name`) : t('newsDetail.noAuthor')}
              data-cy='authorName'
              className={styles.authorName}
            />
            <Avatar
              alt={translationsKey ? t(`${translationsKey}.name`) : t('newsDetail.noAuthor')}
              src={IMG_URL + author.image}
              data-cy='authorPhoto'
            />
          </div>
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
