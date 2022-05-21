import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-multi-carousel';
import { responsive } from './constants';
import { useStyles } from './materials-bottom.style';

const MaterialsBottom = ({ materialsBottom }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const materialsBottomItems = materialsBottom.map((item) => (
    <Card key={item._id} className={styles.card}>
      <CardMedia className={styles.media} image={item.image}>
        <CardContent className={styles.content}>
          <Typography variant='body2' component='p'>
            {t(`${item.translationsKey}.text`)}
          </Typography>
        </CardContent>
      </CardMedia>
    </Card>
  ));

  return (
    <>
      {materialsBottom.length > 0 && <h2>{t(`materialsPage.bottom`)}</h2>}
      <Carousel infinite={false} className={styles.carousel} responsive={responsive}>
        {materialsBottomItems}
      </Carousel>
    </>
  );
};

export default MaterialsBottom;
