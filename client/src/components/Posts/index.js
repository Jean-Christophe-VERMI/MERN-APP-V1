import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

//Components
import Post from './Post';

//Styles
import useStyles from './style';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  
  return (
    !posts.length ? <CircularProgress /> : (
      <div className={classes.container}>
        {posts.map((post) => (
          <Post key={post._id} post={post} setCurrentId={setCurrentId} />
        ))}
      </div>
    )
  );
};

export default Posts;
