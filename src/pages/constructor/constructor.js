import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import mergeImages from 'merge-images';
import { useStyles } from './constructor.style';
import gobelen1 from '../../images/constructor/gobelen-1.png';
import gobelen2 from '../../images/constructor/gobelen-2.png';
import main1 from '../../images/constructor/main-1.png';
import main2 from '../../images/constructor/main-2.png';
import nuz1 from '../../images/constructor/nuz-1.png';
import mouth from '../../images/constructor/mouth-1.png';

const Constructor = () => {
  const styles = useStyles();

  useEffect(() => {
    mergeImages([mouth, main1, nuz1, gobelen1], {
      height: 3000,
      weight: 460
    }).then((b64) => (document.querySelector('#constructor').src = b64));
  }, [mouth, main1, nuz1, gobelen1]);

  const [pattern, setPattern] = useState(gobelen1);
  const [main, setMain] = useState(main1);
  const [bottom, setBotton] = useState(nuz1);

  const changeImage = () => {
    console.log(pattern);
    console.log(main);
    console.log(bottom);

    mergeImages([mouth, main, bottom, pattern], {
      height: 3000,
      weight: 460
    }).then((b64) => (document.querySelector('#constructor').src = b64));
  };

  return (
    <div className={styles.constructorWrapper}>
      <h1>Роллтоп</h1>

      <div className={styles.contentWrapper}>
        <form className={styles.form}>
          <FormControl>
            <InputLabel htmlFor='main-material-select'>Основа</InputLabel>
            <NativeSelect
              onChange={(e) => {
                setMain(e.target.value);
                changeImage();
              }}
              name='name'
              inputProps={{
                id: 'main-material-select'
              }}
            >
              <optgroup label='Bond'>
                <option value='314'>314</option>
                <option value='316'>316</option>
                <option value='318'>318</option>
                <option value='308'>308</option>
                <option value='303'>303</option>
                <option value='304'>304</option>
                <option value='305'>305</option>
              </optgroup>
              <optgroup label='Malmo'>
                <option value={main1}>main1</option>
                <option value={main2}>main2</option>
                {/* <option value='200'>200</option>
                <option value='201'>201</option>
                <option value='202'>202</option>
                <option value='203'>203</option>
                <option value='204'>204</option>
                <option value='205'>205</option>
                <option value='206'>206</option>
                <option value='207'>207</option>
                <option value='208'>208</option>
                <option value='209'>209</option>
                <option value='210'>210</option>
                <option value='211'>211</option>
                <option value='212'>212</option>
                <option value='213'>213</option>
                <option value='214'>214</option>
                <option value='215'>215</option> */}
              </optgroup>
            </NativeSelect>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='pattern-select'>Гобелен</InputLabel>
            <NativeSelect
              onChange={(e) => {
                setPattern(e.target.value);
                changeImage();
              }}
              name='name'
              inputProps={{
                id: 'pattern-select'
              }}
            >
              <option value={gobelen1}>gobelen1</option>
              <option value={gobelen2}>gobelen2</option>
              {/* <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option> */}
            </NativeSelect>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='bottom-select'>Низ</InputLabel>
            <NativeSelect
              onChange={(e) => {
                setBotton(e.target.value);
                changeImage();
              }}
              name='name'
              inputProps={{
                id: 'bottom-select'
              }}
            >
              <option value='1'>Шкірзамінник</option>
              <option value='2'>Тканина Cordura</option>
              <option value='3'>Натуральна шкіра</option>
            </NativeSelect>
          </FormControl>
        </form>

        <img id='constructor' className={styles.imageContainer} alt='Constructor' />
      </div>
    </div>
  );
};

export default Constructor;
