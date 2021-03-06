import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

//Components
import Article from './Article';

//Styles
import useStyles from './style';

const Articles = ({ setCurrentId }) => {
  const articles = useSelector((state) => state.articles);
  const classes = useStyles();
  console.log(articles);

  return (
    !articles.length ? <CircularProgress /> : (
      <div className={classes.container}>
        {articles.map((article) => (
          <Article key={article._id} {...article} setCurrentId={setCurrentId} />
        ))}
      </div>
    )
  );
};

export default Articles;
