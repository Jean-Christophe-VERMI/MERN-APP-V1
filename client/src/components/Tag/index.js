import React from 'react';
import useStyles from './style';

const Tag = ({tags}) => {
  const classes = useStyles();
  const tagsArray = tags.split(',');

  return (
    <div className={classes.tags}>
    {tagsArray.map((tag) => (
      <p key={tag} className={classes.tag}>{tag}</p>
    ))}
    </div>
  );
};
export default Tag;
