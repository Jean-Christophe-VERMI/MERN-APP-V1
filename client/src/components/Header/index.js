import React from 'react';

//Components
import Menu from '../Menu/Burger';

//Styles
import useStyles from './style';

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Menu />
      <div className={classes.name}>
        <p>Jean-Christophe Vermi</p>
      </div>
    </header>
  );
}

export default Header;