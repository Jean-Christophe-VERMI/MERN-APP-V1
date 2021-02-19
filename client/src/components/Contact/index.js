import React from 'react';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

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
      <div className={classes.topForm}>
        <h4 className={classes.title}>Contactez-moi</h4>
        <MailOutlineOutlinedIcon />
      </div>
      <FormContact />
      <Notification />
    </div>
  );
};

export default Contact;
