import React, { useEffect, useRef, useState } from 'react';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import mergeImages from 'merge-images';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './constructor.style';
import {
  getConstructorBasic,
  getConstructorBottom,
  getConstructorModel,
  getConstructorPattern
} from '../../redux/constructor/constructor.actions';
import { CONSTRUCTOR_TITLES } from '../../translations/constructor.translations';

const { MODEL, BASIC, PATTERN, BOTTOM } = CONSTRUCTOR_TITLES[0];

const Constructor = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const {
    constructorModel,
    constructorBasic,
    constructorBottom,
    constructorPattern
  } = useSelector(({ Constructor }) => ({
    constructorModel: Constructor.constructorModel,
    constructorBasic: Constructor.constructorBasic,
    constructorBottom: Constructor.constructorBottom,
    constructorPattern: Constructor.constructorPattern
  }));

  const image = useRef(null);
  const [basic, setBasic] = useState('');
  const [bottom, setBottom] = useState('');
  const [frontPocket, setFrontPocket] = useState('');
  const [pattern, setPattern] = useState('');

  const modelId = '600064d9e13f421f58674b1b';

  const models = [
    { id: '1', name: 'Гарбуз' },
    { id: '600064d9e13f421f58674b1b', name: 'Rolltop' }
  ];

  const basics = [
    {
      _id: '600067e4e13f421f58674b1c',
      name: [{ value: 'Тест' }, { value: 'Test' }]
    },
    {
      _id: '6000d4b91944f53154ce6125',
      name: [{ value: 'Тест2' }, { value: 'Test2' }]
    }
  ];

  const patterns = [
    {
      _id: '600067e1421f58674b1c',
      name: [{ value: 'Тест' }, { value: 'Test' }]
    },
    {
      _id: '494991140ecfe3a21d3ffb4e',
      name: [{ value: 'Тест2' }, { value: 'Test2' }]
    }
  ];

  const bottoms = [
    {
      _id: '600067e4e13f421f58674b2c',
      name: [{ value: 'Тест' }, { value: 'Test' }]
    },
    {
      _id: '600068bfe13f421f58674b1e',
      name: [{ value: 'Тест2' }, { value: 'Test2' }]
    }
  ];

  useEffect(() => {
    dispatch(getConstructorModel(modelId));
  }, [dispatch, modelId]);

  const createImage = () => {
    mergeImages([frontPocket, basic, bottom, pattern], {
      height: 3000,
      weight: 460
    }).then((b64) => (document.querySelector('#constructor').src = b64));
  };

  const currState = () => {
    console.log('constructorModel');
    console.log(constructorModel);
    console.log('constructorBasic');
    console.log(constructorBasic);
    console.log('constructorBottom');
    console.log(constructorBottom);
    console.log('constructorPattern');
    console.log(constructorPattern);
  };

  useEffect(() => {
    if (constructorModel) {
      console.log(constructorModel);
      setBasic(constructorModel.constructorBasic[0].image);
      setBottom(constructorModel.constructorBottom[0].image);
      setFrontPocket(constructorModel.constructorFrontPocket[0].image);
      setPattern(constructorModel.constructorPattern[0].constructorImg);
      if ((basic, bottom, frontPocket, pattern)) {
        createImage();
      } else {
        console.log('Image Load...');
      }
    }
  }, [constructorModel]);

  const changeModel = (id) => {
    console.log('changed model id - ', id);
    dispatch(getConstructorModel(modelId));
    currState();
  };

  const changeBasic = (id) => {
    console.log('changed basic id - ', id);
    dispatch(getConstructorBasic(id));
    currState();
  };

  const changePattern = (id) => {
    console.log('changed pattern id - ', id);
    dispatch(getConstructorPattern(id));
    currState();
  };

  const changeBottom = (id) => {
    console.log('changed bottom id - ', id);
    dispatch(getConstructorBottom(id));
    currState();
  };

  const availableModels = models.map((obj) => (
    <option key={obj.id} value={obj.id}>
      {obj.name}
    </option>
  ));

  const availableBasics = basics.map((obj) => (
    <option key={obj._id} value={obj._id}>
      {obj.name[0].value}
    </option>
  ));

  const availablePatterns = patterns.map((obj) => (
    <option key={obj._id} value={obj._id}>
      {obj.name[0].value}
    </option>
  ));

  const availableBottoms = bottoms.map((obj) => (
    <option key={obj._id} value={obj._id}>
      {obj.name[0].value}
    </option>
  ));

  return (
    <div className={styles.constructorWrapper}>
      <FormControl>
        <InputLabel htmlFor='model-select'>{MODEL}</InputLabel>
        <NativeSelect onChange={(e) => changeModel(e.target.value)} name='name'>
          {availableModels}
        </NativeSelect>
      </FormControl>

      <div className={styles.contentWrapper}>
        <form className={styles.form}>
          <FormControl>
            <InputLabel htmlFor='main-material-select'>{BASIC}</InputLabel>
            <NativeSelect
              onChange={(e) => changeBasic(e.target.value)}
              name='name'
            >
              {availableBasics}
            </NativeSelect>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='pattern-select'>{PATTERN}</InputLabel>
            <NativeSelect
              onChange={(e) => changePattern(e.target.value)}
              name='name'
            >
              {availablePatterns}
            </NativeSelect>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='bottom-select'>{BOTTOM}</InputLabel>
            <NativeSelect
              onChange={(e) => changeBottom(e.target.value)}
              name='name'
            >
              {availableBottoms}
            </NativeSelect>
          </FormControl>
        </form>
        <img
          ref={image}
          id='constructor'
          className={styles.imageContainer}
          alt='Constructor'
        />
      </div>
    </div>
  );
};

export default Constructor;
