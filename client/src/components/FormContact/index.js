import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

//Actions
import { sendContactForm } from '../../actions/contact';

//Style
import useStyles from './style';


const FormContact = () => {
  const [formData, setFormData] = useState({email: '', message: ''});
  const dispatch = useDispatch();
  const classes = useStyles();

  const clear = () => {
    setFormData({ email: '', message: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(sendContactForm(formData));
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Contactez-moi</Typography>
        <TextField 
          name="email" 
          type='email'
          required 
          variant="outlined" 
          label="E-mail" 
          fullWidth 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField 
          name="message"  
          multiline
          rows={4} 
          variant="outlined" 
          label="Message" 
          required 
          fullWidth 
          value={formData.message} 
          onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
        />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Envoyer</Button>
      </form>
    </Paper>
  );
};

export default FormContact;