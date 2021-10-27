import React, { useEffect } from 'react';
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
import { IMG_URL, TIME_OPTIONS } from '../../../configs';

const NewsItem = ({ date, author, image, title, text, id, slug }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t, i18n } = useTranslation();
  const language = i18n.language === 'ua' ? 0 : 1;
  const styles = useStyles();
  if (!text[language]?.value) {
    return null;
  }

  const newsDateLanguageOptions = ['ukr-UA', 'en-US'];
  const dateLanguage = newsDateLanguageOptions[language];

  return (
    <div className={styles.container}>
      <Card className={styles.root}>
        <div className={styles.imagesContainer}>
          <CardMedia
            className={styles.media}
            image={IMG_URL + image}
            title={parse(title[language]?.value) || t('newsDetail.noTitle')}
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
            {parse(title[language]?.value) || t('newsDetail.noTitle')}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='div'
            className={styles.newsText}
            data-cy='newsText'
          >
            {parse(text[language]?.value) || t('newsDetail.noText')}
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
              subheader={author.name[language]?.value || t('newsDetail.noAuthor')}
              data-cy='authorName'
              className={styles.authorName}
            />
            <Avatar
              alt={author.name[language]?.value || t('newsDetail.noAuthor')}
              src={IMG_URL + author.image}
              data-cy='authorPhoto'
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

const primaryShape = PropTypes.shape({
  medium: PropTypes.string
});

const valueShape = PropTypes.shape({
  value: PropTypes.string
});

const newsItemPropTypes = {
  date: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.arrayOf(valueShape),
  title: PropTypes.arrayOf(valueShape),
  image: PropTypes.shape({
    additional: PropTypes.arrayOf(primaryShape),
    primary: primaryShape
  }),
  author: PropTypes.shape({
    image: PropTypes.shape({
      small: PropTypes.string
    }),
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
