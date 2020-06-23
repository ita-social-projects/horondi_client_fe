import React, { useEffect } from 'react';
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
import { LANGUAGE } from '../../../../configs';

const NewsPageItem = ({ date, author, image, title, text, id }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const styles = useStyles();
  const newsTitle =
    title.length !== 0 ? title[LANGUAGE].value : 'No title provided';
  const newsImage =
    image.length !== 0 ? image[0].primary.medium : 'No image provided';
  const newsText =
    text.length !== 0 ? parse(text[LANGUAGE].value) : 'No text provided';
  const newsAuthor =
    author.length !== 0 ? author.name[LANGUAGE].value : 'No author provided';
  const newsAuthorAvatar = author.image.small;
  const newsButtonText = ['читати далі', 'read more...'];
  const newsDateLANGUAGEOptions = ['ukr-UA', 'en-US'];
  const dateLANGUAGE = `${newsDateLANGUAGEOptions[LANGUAGE]}`;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const dateToShow = new Date(parseInt(date));
  const newsDate = dateToShow.toLocaleString(`${dateLANGUAGE}`, options);
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
              {newsButtonText[LANGUAGE]}
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
