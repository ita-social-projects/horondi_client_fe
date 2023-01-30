import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { scrollBarStyles } from './scroll-bar.styles';
import { SCROLL_BAR_DATA } from './constants';
import Sidebar from '../../containers/sidebar';
import { getFromLocalStorage } from '../../services/local-storage.service';

const ScrollBar = ({ homeRef }) => {
  const { t } = useTranslation();
  const homePageSections = Array.from(homeRef.current.children);
  const theme = getFromLocalStorage('theme');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState({ id: '#slider' });
  const [sectionIdx, setsectionIdx] = useState(null);

  const styles = scrollBarStyles({
    isDarkSection: theme === 'dark' ? true : currentSection.sectionStyle === 'dark'
  });
  const sectionsData = homePageSections.map((item) => {
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
    if (homePageSections[sectionIdx]) {
      const section = homePageSections[sectionIdx];
      const top = window.scrollY + section.getBoundingClientRect().top - window.innerHeight / 5;
      window.scrollTo({ top });
      setsectionIdx(null);
    }
  }, [sectionIdx, homePageSections]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);

  return (
    <>
      <div data-testid='scroll-bar-div' className={styles.scrollBar}>
        {SCROLL_BAR_DATA.map((item, idx) => (
          <div
            data-testid={`link-btn-${item}`}
            key={item}
            onClick={() => setsectionIdx(idx)}
            className={styles.scrollBarItem}
          >
            <div
              data-testid={`section-div-${item}`}
              className={styles.sectionPoint}
              data-id={item === currentSection.id}
            />
            <span className={styles.sectionTitle}>
              {t(`common.scrollbar.${item.replace('#', '')}`)}
            </span>
          </div>
        ))}
      </div>
      <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </>
  );
};

export default ScrollBar;
