import React, { useRef, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts.js';

import jsIcon from './techLogo/javascript.png';
import reactIcon from './techLogo/react.png';
import nodeIcon from './techLogo/nodejs.png';

import iconGit from './images/github-icon.png';
import iconLinkedIn from './images/linkedin-icon.png';

//Components
import Menu from '../Menu/Burger';
import Projects from '../Projects';

//Styles
import useStyles from './style';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const projectElem = useRef(null);
  const headerElem = useRef(null);

  const executeScroll = () => projectElem.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const executeScrollTop = () => headerElem.current.scrollIntoView({ behavior: 'smooth', block: 'center' });

  useEffect(()=> {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className={classes.container}>
      <header ref={headerElem} className={classes.header}>
        <Menu />
        <div className={classes.name}>
          <p>Jean-Christophe Vermi</p>
          <div className={classes.icons}>
            <a className={classes.links} href="https://github.com/Jean-Christophe-VERMI" target="_blank" rel="noopener noreferrer" title="Github"><img src={iconGit} alt='logo github'/></a>
            <a className={classes.links} href="https://www.linkedin.com/in/jean-christophe-vermi" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src={iconLinkedIn} alt='logo linkedIn'/></a>
          </div>
        </div>
        <div className={classes.description}>
          <div>
            <p className={classes.title}>Développeur web</p>
          </div>
          <div className={classes.techLogo}>
            <img className={classes.logo} src={jsIcon} alt='logo javascript'></img>
            <img className={classes.logo} src={reactIcon} alt='logo react'></img>
            <img className={classes.logo} src={nodeIcon} alt='logo node'></img>
          </div>
          <div>
            <Button className={classes.downButton} onClick={executeScroll} variant="outlined" color="primary">
              Projets réalisés <ExpandMoreIcon />
            </Button>
          </div>
        </div>
      </header>
      <main ref={projectElem} className={classes.main}>
        <Projects />
        <div className={classes.goTop}>
          <ExpandLessIcon onClick={executeScrollTop} fontSize="large" style={{ cursor: 'pointer' }}/>
        </div>
      </main>
    </div>
    

    
  );
}

export default Home;