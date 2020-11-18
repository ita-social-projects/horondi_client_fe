import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { useStyles } from './constructor-preview.style';
import { getAllHomeImageLooks } from '../../../redux/home-page-looks/home-page-looks.actions';
import { HOME_BUTTONS } from '../../../translations/homepage.translations';
import { CONSTRUCTOR_VIDEO_LINK } from '../../../configs';

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
      id='constructor'
      data-section-style='dark'
    >
      <ReactPlayer
        width='100%'
        height='100%'
        playing={isPlaying}
        volume={0}
        playsinline={false}
        loop
        muted
        url={CONSTRUCTOR_VIDEO_LINK}
      />
      <div
        className={styles.constructorInner}
        onMouseLeave={() => setIsMouseIn(false)}
        onMouseEnter={() => setIsMouseIn(true)}
      >
        <ExpandLessIcon className={styles.constructorInnerIcon} />
        <Link to='/constructor' className={styles.constructorInnerLink}>
          {HOME_BUTTONS[language].MOVE_TO_CONSTRUCTOR}
          <ArrowRightAltIcon />
        </Link>
      </div>
    </div>
  );
};

export default ConstructorPreview;
