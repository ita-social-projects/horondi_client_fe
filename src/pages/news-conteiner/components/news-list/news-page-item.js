import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Avatar
} from '@material-ui/core';
import { useStyles } from './news-page-item.style';
import { language } from '../../../../configs';

const NewsPageItem = ({ date, author, image, title, text, id }) => {
  const styles = useStyles();
  const newsTitle = title[language].value || 'no title provided';
  const newsImage = image[0].primary.medium;
  const newsText = parse(text[language].value) || 'no text provided';
  const newsAuthor = author.name[language].value;
  const newsAuthorAvatar = author.image.small;
  const newsButtonText = ['читати далі', 'read more...'];
  const newsDateLanguageOptions = ['ukr-UA', 'en-US'];
  const dateLanguage = `${newsDateLanguageOptions[language]}`;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const dateToShow = new Date(parseInt(date));
  const newsDate = dateToShow.toLocaleString(`${dateLanguage}`, options);
  return (
    <div className={styles.container}>
      <Card className={styles.root}>
        <div className={styles.imagesContainer}>
          <CardMedia
            className={styles.media}
            image={newsImage}
            title={newsTitle}
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
export default NewsPageItem;
