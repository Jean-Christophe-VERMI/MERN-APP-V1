import React from 'react';

//Style
import useStyles from './style';

const Article = ({title, description, image}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.article}>
      <div className={classes.thumb}>
        <img src={image} alt={title}></img>
      </div>
      <div className={classes.metasDatas}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Article;
