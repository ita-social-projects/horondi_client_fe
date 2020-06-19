import React from 'react';
import { connect } from 'react-redux';
import withApolloService from '../../hoc/withApolloService';

const Test = ({ client, gql }) => {
  const handler = () => {
    client
      .query({
        query: gql`
          {
            categories {
              _id
              name {
                lang
                value
              }
            }
          }
        `
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <button type='button' onClick={handler}>
        test
      </button>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = {};

export default withApolloService()(
  connect(mapStateToProps, mapDispatchToProps)(Test)
);
