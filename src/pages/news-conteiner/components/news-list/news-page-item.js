import React from 'react';
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

const NewsPageItem = ({ date, author, image, title, text, id }) => {
  const styles = useStyles();
  const language = 1;
  const newsTitle = title[language].value || 'no title provided';
  const newsImage = image[0].primary.medium;
  const newsText = text[language].value || 'no text provided';
  const newsAuthor = author.name[language].value;
  const newsAuthorAvatar = author.image.small;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const dateToShow = new Date(parseInt(date));
  const newsDate = dateToShow.toLocaleString('en-US', options);
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
            component='p'
            className={styles.newsText}
          >
            {newsText}
          </Typography>
        </CardContent>
        <div className={styles.newsFooter}>
          <Link to={`/news/${id}`}>
            <Button variant='contained' className={styles.newsButton}>
              read more...
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
