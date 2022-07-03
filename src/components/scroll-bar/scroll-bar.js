import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { scrollBarStyles } from './scroll-bar.styles';
import { SCROLL_BAR_DATA } from './constants';
import Sidebar from '../../containers/sidebar';
import { getFromLocalStorage } from '../../services/local-storage.service';

const ScrollBar = ({ homeRef }) => {
  const { t } = useTranslation();
  const homeElement = Array.from(homeRef.current.children);
  const theme = getFromLocalStorage('theme');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState({ id: '#slider' });
  const styles = scrollBarStyles({
    isDarkSection: theme === 'dark' ? true : currentSection.sectionStyle === 'dark'
  });
  const sectionsData = homeElement.map((item, index, array) => {
    const sectionStyles = window.getComputedStyle(item);
    const margin = parseFloat(sectionStyles.marginTop) + parseFloat(sectionStyles.marginBottom);
    return {
      id: `#${item.id}`,
      sectionStyle: item.dataset.sectionStyle,
      sectionStart: item.offsetTop,
      sectionEnd: item.offsetTop + item.offsetHeight + margin
    };
  });

  const scrollHandler = useCallback(() => {
    const windowMiddle = window.scrollY + window.innerHeight / 2;

    const sectionOnView = sectionsData.find(
      (el) => el.sectionStart <= windowMiddle && el.sectionEnd >= windowMiddle
    );
    if (sectionOnView && sectionOnView.id !== currentSection.id) {
      setCurrentSection({
        id: sectionOnView.id,
        sectionStyle: sectionOnView.sectionStyle
      });
    }
  }, [sectionsData, currentSection.id]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);

  return (
    <>
      <div className={styles.scrollBar}>
        {SCROLL_BAR_DATA.map((item) => (
          <a key={item} href={item} className={styles.scrollBarItem}>
            <div className={styles.sectionPoint} data-id={item === currentSection.id} />
            <span className={styles.sectionTitle}>
              {t(`common.scrollbar.${item.replace('#', '')}`)}
            </span>
          </a>
        ))}
      </div>
      <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </>
  );
};

export default ScrollBar;
