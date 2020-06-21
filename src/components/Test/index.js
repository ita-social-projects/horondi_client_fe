import React from 'react';
import { gql } from 'apollo-boost';
import client from '../../services/ApolloService';

const Test = () => {
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

export default Test;
