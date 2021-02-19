import React, { useState, useRef } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import ReCAPTCHA from "react-google-recaptcha";

import iconGit from './images/github-icon.png';
import iconLinkedIn from './images/linkedin-icon.png';


//Actions
import { sendContactForm } from '../../actions/contact';

//Style
import useStyles from './style';


const FormContact = () => {
  const [formData, setFormData] = useState({email: '', message: ''});
  const recaptchaRef = React.useRef();
  const dispatch = useDispatch();
  const classes = useStyles();

  const clear = () => {
    setFormData({ email: '', message: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    dispatch(sendContactForm(formData));
    clear();
  };

  return (
    <div className={classes.container}>
      <Paper className={classes.paper1}>
        <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <TextField 
            className={classes.input}
            className={classes.email}
            name="email" 
            type="email"
            required 
            variant="outlined" 
            label="E-mail"
            fullWidth 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField 
            className={classes.input}
            className={classes.message}
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
          <div className={classes.formActions}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6Le4uV4aAAAAAL2L2bZPgRX4b2P6c6hOTfrzhzW1"
          />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Envoyer</Button>
          </div>
        </form>
      </Paper>
      <Paper className={classes.paper2}>
        <div className={classes.topInfos}>
          <h4 className={classes.name}>Jean-Christophe Vermi</h4>
          <p>Développeur web</p>
        </div>
        <div className={classes.middleInfos}>
          <p>image</p>
        </div>
        <div className={classes.bottomInfos}>
          <a className={classes.logo} href="https://github.com/Jean-Christophe-VERMI" target="_blank" title="Github"><img src={iconGit} alt='logo github'/></a>
          <a className={classes.logo} href="https://www.linkedin.com/in/jean-christophe-vermi" target="_blank" title="LinkedIn"><img src={iconLinkedIn} alt='logo linkedIn'/></a>
        </div>
      </Paper>
    </div>
    
  );
};

export default FormContact;