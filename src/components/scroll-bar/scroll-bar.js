import React from 'react';
import { useSelector } from 'react-redux';

import { SCROLL_BAR_DATA } from '../../configs';
import scrollBarStyles from './scroll-bar.styles';

const ScrollBar = ({ currentSection = '#catalog', isDarkSection }) => {
  const styles = scrollBarStyles({ isDarkSection });
  const language = useSelector(({ Language }) => Language.language);

  return (
    <div className={styles.scrollBar}>
      {SCROLL_BAR_DATA.map((item) => (
        <a key={item.href} href={item.href} className={styles.scrollBarItem}>
          <div
            className={styles.sectionPoint}
            data-id={item.href === currentSection}
          />
          <span className={styles.sectionTitle}>{item.name[language]}</span>
        </a>
      ))}
    </div>
  );
};

export default ScrollBar;
