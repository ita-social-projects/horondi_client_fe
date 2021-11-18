import React from 'react';
import { TextField } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

import { useStyles } from './product-sort.styles';
import CountPerPage from '../count-per-page';
import { URL_QUERIES_NAME, SORT_BY_SELECT_OPTIONS, TEXT_FIELD_VARIANT } from '../../../configs';

const ProductSort = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const history = useHistory();
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const { sort, page, defaultPage } = URL_QUERIES_NAME;
  const query = searchParams.get(sort);

  const selectHandler = (e) => {
    const { name } = JSON.parse(e.target.value);

    searchParams.set(sort, name);
    searchParams.set(page, defaultPage);
    history.push(`?${searchParams.toString()}`);
  };

  const sortByText = t('common.sortBy');
  const selectOptions = SORT_BY_SELECT_OPTIONS.map((optionValue) => (
    <option
      key={optionValue.name}
      value={JSON.stringify(optionValue)}
      defaultValue={optionValue.name === query}
    >
      {t(`common.sortOptions.${optionValue.name}`)}
    </option>
  ));

  return (
    <div data-cy='sort' className={styles.sortDiv}>
      <div>
        {sortByText}
        <TextField
          select
          SelectProps={{ native: true }}
          onChange={selectHandler}
          className={styles.root}
          variant={TEXT_FIELD_VARIANT.OUTLINED}
        >
          {selectOptions}
        </TextField>
      </div>
      <CountPerPage />
    </div>
  );
};

export default ProductSort;
