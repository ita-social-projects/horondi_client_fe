import React, { useEffect, useState, useMemo } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './products-carousel.style';
import {
  setModelsFilter,
  setPriceFilter,
  setPatternsFilter,
  setColorsFilter,
  setHotItemFilter,
  setSearchFilter
} from '../../redux/products/products.actions';
import { getModelsByCategory } from '../../redux/model/model.actions';
import { getImage } from '../../utils/imageLoad';
import { Loader } from '../../components/loader/loader';
import { carouselInterval } from '../../configs';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ProductsCarousel = ({ category }) => {
  const [images, setImages] = useState([]);
  const styles = useStyles();
  const dispatch = useDispatch();

  const { models, loading, language, filterData } = useSelector(
    ({
      Model: { models, loading },
      Products: { filterData },
      Language: { language }
    }) => ({
      models,
      language,
      loading,
      filterData
    })
  );

  useEffect(() => {
    dispatch(getModelsByCategory(category._id));
  }, [dispatch, category]);

  useMemo(() => {
    models.forEach((item) => {
      getImage(item.images.large)
        .then((src) => setImages(src))
        .catch((badSrc) => setImages(badSrc));
    });
  }, [models]);

  if (loading) {
    return (
      <div className={styles.center}>
        <Loader />
      </div>
    );
  }

  const handleClick = (model) => {
    dispatch(setModelsFilter([model.name[1].value]));
    dispatch(setPatternsFilter([]));
    dispatch(setColorsFilter([]));
    dispatch(setSearchFilter(''));
    dispatch(setHotItemFilter(false));
    dispatch(
      setPriceFilter([
        Math.min(...filterData.map((product) => product.basePrice[0].value)),
        Math.max(...filterData.map((product) => product.basePrice[0].value))
      ])
    );
  };

  return (
    <div className={styles.container}>
      <AutoplaySlider
        play
        cancelOnInteraction={false}
        interval={carouselInterval}
        className={styles.slider}
        mobileTouch
      >
        {models.map((model, index) => (
          <div
            key={model.name[1].value}
            data-src={images[index]}
            className={styles.captionBlock}
          >
            <Link
              onClick={() => handleClick(model)}
              to={`/${category.name[1].value.toLowerCase()}/${model.name[1].value.toLowerCase()}`}
            >
              <p data-cy='model-name' className={styles.caption}>
                {model.name[language].value}
              </p>
            </Link>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default ProductsCarousel;
