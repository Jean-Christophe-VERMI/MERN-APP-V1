import React from 'react';
import useStyles from './style';

const Tag = ({tag}) => {
  const classes = useStyles();
  
  return (
    <p className={classes.tag}>{tag}</p>
  );
};
export default Tag;
