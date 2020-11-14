import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { useStyles } from './constructor-preview.style';
import { getAllHomeImageLooks } from '../../../redux/home-page-looks/home-page-looks.actions';
import { HOME_BUTTONS } from '../../../translations/homepage.translations';

const ConstructorPreview = () => {
  const { language } = useSelector(({ Language, HomePageImages }) => ({
    language: Language.language,
    looksImages: HomePageImages.imageList,
    loading: HomePageImages.homeImagesLoading
  }));
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const styles = useStyles({ isMouseIn });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHomeImageLooks());
  }, [dispatch]);

  return (
    <div
      className={styles.constructorPreview}
      onClick={() => setIsPlaying(!isPlaying)}
      id='#constructor'
    >
      <ReactPlayer
        width='100%'
        height='100%'
        playing={isPlaying}
        volume={0}
        playsinline={false}
        muted
        url='https://www.youtube.com/watch?v=KG1y-lk2f0E&ab_channel=Ukra%D1%97ner'
      />
      <div
        className={styles.constructorInner}
        onMouseLeave={() => setIsMouseIn(false)}
        onMouseEnter={() => setIsMouseIn(true)}
      >
        <ExpandLessIcon className={styles.constructorInnerIcon} />
        <Link to='/constructor' className={styles.constructorInnerLink}>
          {HOME_BUTTONS[language].MOVE_TO_CONSTRUCTOR}
          <span>&#8594;</span>
        </Link>
      </div>
    </div>
  );
};

export default ConstructorPreview;
