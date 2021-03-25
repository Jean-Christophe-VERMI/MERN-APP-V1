import React, {useEffect, useState} from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';


//Components
import Article from './Article';

//Styles
import useStyles from './style';

const Articles = ({ setCurrentId, order }) => {
  const [isRecent, setIsRecent] = useState(true);
  const articles = useSelector((state) => state.articles);
  const classes = useStyles();
  
  useEffect(() => {
    if(order === 'Ascendant') {
      handleOrderAscendant();
    }
    if(order === 'Descendant') {
      handleOrderDescendant();
    }
  }, [order]);
  
  const handleOrderAscendant = () => {
    setIsRecent(true);
  }

  const handleOrderDescendant = () => {
    setIsRecent(false);
  }

  console.log(articles);

  return (
    !articles.length ? <CircularProgress /> : (
      <div className={classes.container}>
        {isRecent && (
          articles.sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          ).map((article) => (
            <Article key={article._id} {...article} setCurrentId={setCurrentId} />
          ))
        )}
        {!isRecent && (
          articles.sort(
            (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          ).map((article) => (
            <Article key={article._id} {...article} setCurrentId={setCurrentId} />
          ))
        )}
      </div>
    )
  );
};

export default Articles;
