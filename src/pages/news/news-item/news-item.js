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
import { useStyles } from './news-item.style';
import { TIME_OPTIONS } from '../../../configs';
import { getFromLocalStorage } from '../../../services/local-storage.service';

const NewsItem = ({ date, author, image, title, text, id }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const language = getFromLocalStorage('language');
  const styles = useStyles();
  const newsTitle =
    title.length !== 0 ? title[language].value : 'No title provided';
  const newsImage = image ? image.primary.medium : 'No image provided';
  const newsText =
    text.length !== 0 ? parse(text[language].value) : 'No text provided';
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
          />
        </div>
        <CardHeader subheader={newsDate} />
        <CardContent>
          <Typography
            className={styles.ArticleTitle}
            gutterBottom
            variant='h5'
            component='h2'
          >
            {newsTitle}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='div'
            className={styles.newsText}
          >
            {newsText}
          </Typography>
        </CardContent>
        <div className={styles.newsFooter}>
          <Link to={`/news/${id}`}>
            <Button variant='contained' className={styles.newsButton}>
              {newsButtonText[language]}
            </Button>
          </Link>
          <div className={styles.newsAuthorFooter}>
            <CardHeader subheader={newsAuthor} />
            <CardContent />
            <Avatar
              alt={newsAuthor}
              src={newsAuthorAvatar}
              className={styles.large}
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

NewsItem.propTypes = {
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
NewsItem.defaultProps = {
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
export default NewsItem;
