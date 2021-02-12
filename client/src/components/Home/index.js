import React, { useRef, useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts.js';

import iconGit from './images/github-icon.png';
import iconLinkedIn from './images/linkedin-icon.png';

//Components
import Menu from '../Menu/Burger';
import Projects from '../Projects';
import FormProject from '../FormProject';

//Styles
import useStyles from './style';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const projectElem = useRef(null);
  const headerElem = useRef(null);

  const executeScroll = () => projectElem.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const executeScrollTop = () => headerElem.current.scrollIntoView({ behavior: 'smooth', block: 'center' });

  useEffect(()=> {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('profile'));
    if (user !== null) {
      setIsLogged(true);
    }
  }, []);

  const handleOpen = () => {
    setCurrentId(currentId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <header ref={headerElem} className={classes.header}>
        <Menu />
        <div className={classes.name}>
          <p>Jean-Christophe Vermi</p>
          <div className={classes.icons}>
            <a className={classes.links} href="https://github.com/Jean-Christophe-VERMI" target="_blank" title="Github"><img src={iconGit} alt='logo github'/></a>
            <a className={classes.links} href="https://www.linkedin.com/in/jean-christophe-vermi" target="_blank" title="LinkedIn"><img src={iconLinkedIn} alt='logo linkedIn'/></a>
          </div>
        </div>
        <div className={classes.description}>
          <p>Développeur web</p>
          <p className={classes.technos}>
            <span className={classes.js}>Javascript</span> - 
            <span className={classes.react}>React</span> - 
            <span className={classes.node}>Node</span>
          </p>
          <div>
          <Button className={classes.downButton} onClick={executeScroll} variant="outlined" color="primary">
            Projets réalisés <ExpandMoreIcon />
          </Button>
          </div>
        </div>
      </header>
      <main ref={projectElem} className={classes.main}>
        {isLogged && (
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
              <FormProject handleClose={handleClose} currentId={currentId} setCurrentId={setCurrentId} />
            </Modal>
          </div>
        )}
        <Projects />
        <div className={classes.goTop}>
          <ExpandLessIcon onClick={executeScrollTop} fontSize="large" style={{ cursor: 'pointer' }}/>
        </div>
      </main>
    </div>
    

    
  );
}

export default Home;