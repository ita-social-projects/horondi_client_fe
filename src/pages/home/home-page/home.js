import React from 'react';
import { useStyles } from './home.styles';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <div className={classes.homeHeader} />
      <div className={classes.categories} />
      <div className={classes.looks} />
    </div>
  );
};

export default Home;
