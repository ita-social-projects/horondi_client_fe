import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { wachNewsLoad } from '../../redux/actions';

const NewsPage = ({ wachNewsLoad, news }) => {
  useEffect(() => {
    wachNewsLoad();
  }, [wachNewsLoad]);

  // const styles = useStyles()

  return (
    <>
      <h2 id='news-title'>News</h2>
      <div>news!!!</div>
    </>
  );
};

const mapStateToProps = ({ newsReduser: { news } }) => ({
  news
});
const mapDispatchToProps = {
  wachNewsLoad
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
