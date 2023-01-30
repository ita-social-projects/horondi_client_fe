import { useRef, useState, useEffect } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { getAllConstructors } from './operations/getAllConstructors.queries';
import { getConstructorByModel } from './operations/getConstructorByModel.queries';

const useConstructorLoader = () => {
  const [constructorValues, setConstructorValues] = useState(null);
  const [constructorModel, setConstructorModel] = useState('');
  const currentConstructorModel = useRef({});
  const allModels = useRef([]);

  const [allPrices, setAllPrice] = useState({});
  const [valuesLoading, setValuesLoading] = useState(true);

  const { data: constructors, error: constructorsError } = useQuery(getAllConstructors, {
    variables: {
      limit: 0,
      skip: 0
    }
  });

  const [
    getConstructorByModelHandler,
    { data: constructorByModel, refetch, called, constructorError }
  ] = useLazyQuery(getConstructorByModel, {
    variables: {
      id: constructorModel
    }
  });

  useEffect(() => {
    if (constructors) {
      allModels.current = constructors.getAllConstructors.items.map((item) => item.model);
      setConstructorModel(constructors.getAllConstructors.items[0].model._id);
      currentConstructorModel.current = constructors.getAllConstructors.items[0];
    }
  }, [constructors]);

  useEffect(() => {
    if (constructorByModel) {
      const constructor = constructorByModel.getConstructorByModel;

      const values = {
        name: constructor.name,
        sizeAndPrice: { size: constructor.model.sizes[0] },
        pattern: constructor.patterns[0],
        bottom: constructor.bottoms[0],
        basic: constructor.basics[0],
        model: constructor.model,
        pocket: constructor.pockets[0],
        basePrice: constructor.basePrice
      };

      setConstructorValues(values);

      currentConstructorModel.current = constructorByModel.getConstructorByModel;
      currentConstructorModel.current.model && setValuesLoading(false);
    }
  }, [constructorByModel]);

  useEffect(() => {
    !called && constructorModel && getConstructorByModelHandler();
    called && refetch();
  }, [called, constructorModel, getConstructorByModelHandler, refetch]);

  useEffect(() => {
    if (constructorValues) {
      setAllPrice({
        pattern: constructorValues.pattern.absolutePrice || null,
        bottom: constructorValues.bottom.absolutePrice || null,
        basic: constructorValues.basic.absolutePrice || null,
        size: constructorValues.sizeAndPrice.size.absolutePrice || null
      });
    }
  }, [constructorValues, setAllPrice]);

  return {
    constructorValues,
    setConstructorValues,
    constructorModel,
    setConstructorModel,
    currentConstructorModel,
    allPrices,
    setAllPrice,
    allModels,
    valuesLoading,
    constructorsError,
    constructorError
  };
};

export default useConstructorLoader;
