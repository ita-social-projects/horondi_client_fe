import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

import { useStyles } from './businessPage.style';
import { useAppStyles } from '../../components/app/app.styles';
import { getBusinessTextByCode } from './operations/business-page.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

const BusinessPage = ({ match }) => {
  const [page, setPage] = useState({});
  const [title, setTitle] = useState('');
  const [loaded, setLoaded] = useState(false);

  const [result, setResult] = useState([]);
  const [indexImg, setIndexImg] = useState([]);

  const code = match.params.page;
  const { t } = useTranslation();

  const { loading, error } = useQuery(getBusinessTextByCode, {
    variables: { code },
    onCompleted: (data) => setPage(data.getBusinessTextByCode)
  });

  const addressText = page?.text && parse(t(`${page.translationsKey}.text`));

  useEffect(() => {
    if (addressText) {
      if (loaded) return;
      setTitle(addressText[0].props.children);

      addressText.map((item, index) => {
        if (item.type === 'img') {
          setIndexImg((prev) => [...prev, index]);
        }
        return null;
      });
      setLoaded(true);
    }
  }, [addressText, loaded]);

  useEffect(() => {
    if (addressText && indexImg) {
      for (let i = 0; i < indexImg.length; i++) {
        const a = addressText.slice(indexImg[i], indexImg[i + 1]);
        setResult((prev) => [...prev, [...a]]);
      }
    }
  }, [indexImg]);

  useEffect(() => {}, [result]);

  const styles = useStyles();
  const appStyles = useAppStyles();

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <div className={appStyles.rootApp}>
      <div className={`${appStyles.containerApp} ${styles.root}`}>
        <h1>{title}</h1>
        <hr />
        {result.map((item, index) =>
          item[3] ? (
            <div className='busPage' key={index}>
              <div className='busPage_daughter'>
                <p>{item[1].props.children}</p>
                <div className='busPage_daughter_text'>{item[2].props.children}</div>
                <br />
                <div className='busPage_daughter_text'>{item[3].props.children}</div>
              </div>
              <div className='busPage_daughter_img'>
                <img src={item[0].props.src} alt='' />
              </div>
            </div>
          ) : item[2] ? (
            <div className='busPage' key={index}>
              <div className='busPage_daughter_img'>
                <img src={item[0].props.src} alt='' />
              </div>
              <div className='busPage_daughter'>
                <div className='busPage_daughter_text'>{item[1].props.children}</div>
                <br />
                <div className='busPage_daughter_text'>{item[2].props.children}</div>
              </div>
            </div>
          ) : (
            <div className='busPage' key={index}>
              <div className='busPage_block3'>
                <img src={item[0].props.src} alt='' />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BusinessPage;
