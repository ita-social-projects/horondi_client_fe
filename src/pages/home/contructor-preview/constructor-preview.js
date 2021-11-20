import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { useTranslation } from 'react-i18next';

import { useStyles } from './constructor-preview.style';
import { CONSTRUCTOR_VIDEO_LINK } from '../../../configs';
import routes from '../../../configs/routes';

const { pathToConstructor } = routes;

const ConstructorPreview = () => {
  const { t } = useTranslation();

  const [isMouseIn, setIsMouseIn] = useState(false);
  const [isZeroVolume, setIsZeroVolume] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const styles = useStyles({ isMouseIn });

  return (
    <div className={styles.constructorPreview} id='constructor' data-section-style='dark'>
      <ReactPlayer
        width='100%'
        height='100%'
        playing
        volume={isZeroVolume}
        muted={isMuted}
        loop
        url={CONSTRUCTOR_VIDEO_LINK}
      />
      <div
        className={styles.constructorInner}
        onMouseLeave={() => setIsMouseIn(false)}
        onMouseEnter={() => setIsMouseIn(true)}
      >
        <ExpandLessIcon className={styles.constructorInnerIcon} />
        <Link to={pathToConstructor} className={styles.constructorInnerLink}>
          {t('home.createStyle')}
          <ArrowRightAltIcon />
        </Link>
      </div>
      <div className={styles.playerSoundControl}>
        {isZeroVolume ? (
          <VolumeUpIcon
            onClick={() => {
              setIsZeroVolume(0);
              setIsMuted(true);
            }}
          />
        ) : (
          <VolumeOffIcon
            onClick={() => {
              setIsZeroVolume(1);
              setIsMuted(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ConstructorPreview;
