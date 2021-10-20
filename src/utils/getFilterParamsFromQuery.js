import { URL_QUERIES_NAME } from '../configs';

export default function (searchParams) {
  const params = {};

  if (searchParams.get(URL_QUERIES_NAME.categoryFilter))
    params.category = searchParams.get(URL_QUERIES_NAME.categoryFilter).split(',');

  if (searchParams.get(URL_QUERIES_NAME.modelsFilter))
    params.models = searchParams.get(URL_QUERIES_NAME.modelsFilter).split(',');

  if (searchParams.get(URL_QUERIES_NAME.patternsFilter))
    params.patterns = searchParams.get(URL_QUERIES_NAME.patternsFilter).split(',');

  if (searchParams.get(URL_QUERIES_NAME.priceFilter))
    params.price = searchParams.get(URL_QUERIES_NAME.priceFilter).split(',');

  if (searchParams.get(URL_QUERIES_NAME.isHotItemFilter) === 'true') params.isHotItem = true;

  Object.keys(params).forEach((key) => {
    if (key === 'price') params[key] = params[key].map((el) => +el);
    else if (key !== 'isHotItem') params[key] = params[key].filter((el) => el !== '');
  });

  return params;
}
