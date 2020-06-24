import React from 'react';
import { connect } from 'react-redux';
import { getItems } from 'src/services';

const Test = () => {
  const handler = () => {
    getItems(
      `query{
          getAllNews{
            title{
              lang
              value
            }
          }
        }`
    ).then((res) => console.log(res));
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

export default connect(mapStateToProps, mapDispatchToProps)(Test);
