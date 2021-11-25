import { useRef, useState, useEffect } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { getAllConstructors } from './operations/getAllConstructors.queries';
import { getConstructorByModel } from './operations/getConstructorByModel.queries';

const useConstructorLoader = () => {
  const [constructorValues, setConstructorValues] = useState({});
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
      setConstructorValues(
        Object.keys(constructorByModel.getConstructorByModel[0]).reduce((acc, key) => {
          switch (key) {
            case 'model':
              acc.sizes = constructorByModel.getConstructorByModel[0][key].sizes[0];
              break;
            case 'pocketsWithRestrictions':
              acc.pocket =
                constructorByModel.getConstructorByModel[0][
                  key
                ][0]?.currentPocketWithPosition.pocket;
              break;
            default:
              if (key !== 'name' && key !== '_id' && key !== 'model')
                acc[key] = constructorByModel.getConstructorByModel[0][key][0];
              else acc[key] = constructorByModel.getConstructorByModel[0][key];
          }
          return acc;
        }, {})
      );
      currentConstructorModel.current = constructorByModel.getConstructorByModel[0];

      currentConstructorModel.current.model && setValuesLoading(false);
    }
  }, [constructorByModel]);

  useEffect(() => {
    !called && constructorModel && getConstructorByModelHandler();
    called && refetch();
  }, [constructorModel]);

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
