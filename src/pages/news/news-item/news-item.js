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
import { useSelector } from 'react-redux';
import { useStyles } from './news-item.style';
import { TIME_OPTIONS } from '../../../configs';

const NewsItem = ({ date, author, image, title, text, id }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();
  const newsTitle =
    title.length !== 0 ? title[language].value : 'No title provided';
  const newsImage = image ? image.primary.medium : 'No image provided';
  const newsText =
    text.length !== 0 && text[language].value != null
      ? parse(text[language].value)
      : 'No text provided';
  const newsAuthor =
    author.name.length !== 0
      ? author.name[language].value
      : 'No author provided';
  const newsAuthorAvatar = author.image
    ? author.image.small
    : 'No author provided';

  const newsButtonText = ['читати далі', 'read more...'];
  const newsDateLanguageOptions = ['ukr-UA', 'en-US'];
  const dateLanguage = newsDateLanguageOptions[language];
  const dateToShow = new Date(parseInt(date));
  const newsDate = dateToShow.toLocaleString(dateLanguage, TIME_OPTIONS);
  return (
    <div className={styles.container}>
      <Card className={styles.root}>
        <div className={styles.imagesContainer}>
          <CardMedia
            className={styles.media}
            image={newsImage}
            title={newsTitle}
            component='div'
            data-cy='image'
          />
        </div>
        <CardHeader subheader={newsDate} data-cy='date' />
        <CardContent>
          <Typography
            className={styles.ArticleTitle}
            gutterBottom
            variant='h5'
            component='h2'
            data-cy='newsTitle'
          >
            {newsTitle}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='div'
            className={styles.newsText}
            data-cy='newsText'
          >
            {newsText}
          </Typography>
        </CardContent>
        <div className={styles.newsFooter}>
          <Link to={`/news/${id}`}>
            <Button
              variant='contained'
              className={styles.newsButton}
              data-cy='readMoreButton'
            >
              {newsButtonText[language]}
            </Button>
          </Link>
          <div className={styles.newsAuthorFooter}>
            <CardHeader subheader={newsAuthor} data-cy='authorName' />
            <CardContent />
            <Avatar
              alt={newsAuthor}
              src={newsAuthorAvatar}
              className={styles.large}
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
