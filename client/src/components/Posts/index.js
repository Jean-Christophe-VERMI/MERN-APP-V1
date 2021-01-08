import React from 'react';
import { useSelector } from 'react-redux';

//Components
import Post from './Post';

//Styles
import useStyles from './style';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  
  console.log(posts);
  
  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
