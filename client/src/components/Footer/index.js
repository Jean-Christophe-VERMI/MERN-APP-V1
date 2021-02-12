import React from 'react';

//Styles
import useStyles from './style';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.column}>Col1</div>
      <div className={classes.column}>col2</div>
      <div className={classes.column}><a className={classes.link} href='/contact' alt='contact' title='contactez-moi'>Contact</a></div>
    </footer>
  );
}

export default Footer;
