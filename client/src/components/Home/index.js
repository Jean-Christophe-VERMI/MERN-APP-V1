import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import iconGit from './images/github-icon.png';
import iconLinkedIn from './images/linkedin-icon.png';

//Components
import Menu from '../Menu/Burger';
import Projects from '../Projects';

//Styles
import useStyles from './style';

const Home = () => {
  const classes = useStyles();
  const projectElem = useRef(null);

  const executeScroll = () => projectElem.current.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <div className={classes.container}>
      <header className={classes.header}>
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
        <Projects />
      </main>
    </div>
    

    
  );
}

export default Home;