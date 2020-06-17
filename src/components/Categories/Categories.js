import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import withGraphqlService from '../../hoc/withGraphqlService';
import LoadingBar from '../LoadingBar';
import { categoriesLoaded, categoriesRequested } from '../../redux/actions';

const Categories = ({
                      graphqlService,
                      categoriesLoaded,
                      categoriesRequested,
                      categories,
                      loading
                    }) => {
  useEffect(() => {
    categoriesRequested();
    graphqlService
      .getItems(
        `query{
        categories{
          categoryCode,
          _id
          images{
          medium
          }
          name{
            value
          }
        }
      }`
      )
      .then((res) => categoriesLoaded(res.data.data.categories));

  }, [categoriesLoaded, categoriesRequested, graphqlService]);

  if (loading) {
    return <LoadingBar/>;
  }

  const items = categories.map((category) => (
    <div key={category._id} />
  ));
  return <div >{items}</div>;
   {/*<div><img src='https://horondi.blob.core.windows.net/horondi/categories/bags.jpg'></img></div>;*/}

};

const mapStateToProps = ({ categoriesReducer: { categories, loading } }) => ({
  categories,
  loading
});
const mapDispatchToProps = { categoriesLoaded, categoriesRequested };

export default withGraphqlService()(
  connect(mapStateToProps, mapDispatchToProps)(Categories)
);
