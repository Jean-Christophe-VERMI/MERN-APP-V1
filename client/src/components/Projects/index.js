import React, { useEffect, useState, useRef } from 'react';
import { Container, Grow, Grid, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';

import { getPosts } from '../../actions/posts.js';

//Components
import Posts from '../Posts';
import FormProject from '../FormProject';

//Styles
import useStyles from './style';

const Projects = () => {
  const [currentId, setCurrentId] = useState(null);
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('profile'));

  const dispatch = useDispatch();
  const classes = useStyles();
  const ref = useRef(null);

  useEffect(()=> {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleOpen = () => {
    setCurrentId(currentId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grow in>
      <Container className={classes.container}>
        <div className={classes.header} >
          <h4 className={classes.title}>Mes dernières réalisations</h4>
          {user && (
            <div className={classes.divFormBtn} >
              <Button onClick={handleOpen} className={classes.formBtn} variant="contained">
                Ajouter un projet
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <FormProject ref={ref} handleClose={handleClose} currentId={currentId} setCurrentId={setCurrentId} />
              </Modal>
            </div>
          )}
        </div>
        <div className={classes.postProject}>
          <Posts setCurrentId={setCurrentId} />
        </div>
      </Container>
    </Grow>
  );
};

export default Projects;
