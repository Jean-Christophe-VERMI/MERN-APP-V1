import React from 'react';

//Component
import Menu from '../Menu/Burger';
import Notification from '../Notification';
import FormContact from '../FormContact';

//Style
import useStyles from './style';


const Contact = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <Menu />
      <FormContact />
      <Notification />
    </div>
  );
};

export default Contact;
