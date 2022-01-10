import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pagination } from '@material-ui/lab';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import withWidth from '@material-ui/core/withWidth';
import Drawer from '@material-ui/core/Drawer';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { useHistory, useLocation } from 'react-router';
import { useQuery } from '@apollo/client';

import { useSelector } from 'react-redux';
import { useStyles } from './product-list-page.styles';
import ProductSort from './product-sort';
import ProductFilter from './product-list-filter';
import ProductListItem from './product-list-item';
import { URL_QUERIES_NAME } from '../../configs';
import { TEMPORARY_WIDTHS, DRAWER_PERMANENT, DRAWER_TEMPORARY } from './constants';
import { getFilteredProductsQuery } from './operations/product-list.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import getSortParamsFromQuery from '../../utils/getSortParamsFromQuery';
import getFilterParamsFromQuery from '../../utils/getFilterParamsFromQuery';

const ProductListPage = ({ width }) => {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useState(new URLSearchParams(search));
  const sortParamsFromQuery = searchParams.get(URL_QUERIES_NAME.sort);
  const nameFilter = searchParams.get(URL_QUERIES_NAME.nameFilter);

  const { t } = useTranslation();
  const styles = useStyles();
  const history = useHistory();
  const [products, setProducts] = useState([]);

  const { currency } = useSelector(({ Currency }) => ({
    currency: Currency.currency
  }));
  const [paginationParams, setPaginationParams] = useState({
    pagesCount: 1,
    currentPage: +searchParams.get(URL_QUERIES_NAME.page) || 1,
    countPerPage: +searchParams.get(URL_QUERIES_NAME.countPerPage) || 9
  });
  const [sortParams, setSortParams] = useState(() => getSortParamsFromQuery(sortParamsFromQuery));
  const [filterParams, setFilterParams] = useState(() => getFilterParamsFromQuery(searchParams));
  const [filterMenuStatus, setFilterMenuStatus] = useState(false);

  const { pagesCount, currentPage, countPerPage } = paginationParams;
  const variables = {
    ...sortParams,
    ...filterParams,
    currency,
    limit: Math.ceil(Math.abs(countPerPage)) || 9,
    skip:
      Math.ceil(Math.abs(currentPage)) > 1
        ? Math.ceil(Math.abs(countPerPage)) * (Math.ceil(Math.abs(currentPage)) - 1)
        : 0
  };

  const handleDrawerToggle = () => {
    setFilterMenuStatus((prevState) => !prevState);
  };
  const checkWidth = () => TEMPORARY_WIDTHS.find((element) => element === width);
  const drawerVariant = checkWidth() ? DRAWER_TEMPORARY : DRAWER_PERMANENT;

  const { error, loading } = useQuery(getFilteredProductsQuery, {
    onCompleted: (data) => {
      setProducts(data.getProducts.items);
      setPaginationParams((prevState) => ({
        ...prevState,
        pagesCount: Math.ceil(data.getProducts.count / countPerPage)
      }));
    },
    variables
  });

  useEffect(() => {
    setSearchParams(new URLSearchParams(search));
  }, [search]);

  useEffect(() => {
    setSortParams(() => getSortParamsFromQuery(sortParamsFromQuery));
    setPaginationParams((prevState) => ({
      ...prevState,
      currentPage: +searchParams.get(URL_QUERIES_NAME.page) || 1,
      countPerPage: +searchParams.get(URL_QUERIES_NAME.countPerPage) || 9
    }));
    setFilterParams(getFilterParamsFromQuery(searchParams));
  }, [searchParams, sortParamsFromQuery]);

  const changeHandler = (e, value) => {
    searchParams.set(URL_QUERIES_NAME.page, value);
    history.push(`?${searchParams.toString()}`);
  };

  const handleFilterShow = () => setFilterMenuStatus((prevState) => !prevState);

  if (loading || error) return errorOrLoadingHandler(error, loading);

  const itemsToShow = () => {
    if (products?.length > 0) {
      if (nameFilter) {
        const filteredProducts = products.filter((product) =>
          product.name.some((name) => name.value.toLowerCase().includes(nameFilter.toLowerCase()))
        );
        return filteredProducts.map((product) => (
          <ProductListItem key={product._id} product={product} />
        ));
      }
      return products.map((product) => <ProductListItem key={product._id} product={product} />);
    } 
    return null;
    
  };
  const paginationToShow = (
    <Pagination count={pagesCount} variant='outlined' page={currentPage} onChange={changeHandler} />
  );
  const paginationCondition = () => {
    if (
      products?.length < searchParams.get(URL_QUERIES_NAME.countPerPage) &&
      Number(searchParams.get(URL_QUERIES_NAME.page)) === 1
    ) {
      return <div className={styles.invisiblePaginationDiv}>{paginationToShow}</div>;
    }
    return <div className={styles.paginationDiv}>{paginationToShow}</div>;
  };
  return (
    <Container maxWidth='lg'>
      <div className={styles.root}>
        <Typography className={styles.header}>{t('common.scrollbar.catalog')}</Typography>
        <div className={styles.sortDiv}>
          <ProductSort />
        </div>
        <div className={styles.filterButtonBlock}>
          <Button className={styles.button} variant='contained' onClick={handleFilterShow}>
            {t('common.showFilters')}
          </Button>
        </div>
        <div className={styles.list}>
          <Drawer
            id='menuDrawer'
            className={styles.drawer}
            variant={drawerVariant}
            open={filterMenuStatus}
            onClose={handleDrawerToggle}
            classes={{
              paper: styles.drawerPaper
            }}
          >
            <div className={styles.drawerContainer}>
              <ProductFilter filterParams={filterParams} />
            </div>
          </Drawer>
          <div className={styles.filterMenu}>
            <ProductFilter filterParams={filterParams} />
          </div>
          {products?.length > 0 ? (
            <div className={styles.productsWrapper}>
              <Grid container spacing={2} className={styles.productsDiv}>
                {itemsToShow()}
              </Grid>
              {paginationCondition()}
            </div>
          ) : (
            <div className={styles.defaultBlock}>
              <div>{t('productListPage.productNotFound')}</div>
              <div>
                <MoodBadIcon className={styles.defaultIcon} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default withWidth()(ProductListPage);
