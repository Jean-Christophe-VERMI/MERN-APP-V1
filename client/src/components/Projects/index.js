import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts.js';

//Components
import Posts from '../Posts';

//Styles
import useStyles from './style';

const Projects = () => {
  const [currentId, setCurrentId] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()=> {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  useEffect(() => {
    const checkUserData = () => {
      const user = JSON.parse(localStorage.getItem('profile'));
  
      if (user) {
        setIsLogged(true);
      }
    };
    checkUserData();
  }, []);

  return (
    <Grow in>
      <Container className={classes.container}>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Projects;
