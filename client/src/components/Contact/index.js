import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

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
      <Notification />
      <FormContact />
    </div>
  );
};

export default Contact;
