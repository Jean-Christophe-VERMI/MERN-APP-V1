import React, { useState } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import ReCAPTCHA from "react-google-recaptcha";
import iconGit from './images/github-icon.png';
import iconLinkedIn from './images/linkedin-icon.png';

//Actions
import { sendContactForm } from '../../actions/contact';

//Component
import Notification from '../Notification';

//Style
import useStyles from './style';


const FormContact = () => {
  const [formData, setFormData] = useState({email: '', message: ''});
  const [reCaptchaIsDone, setRecaptchaIsDone] = useState(false);
  const recaptchaRef = React.useRef();
  const dispatch = useDispatch();
  const classes = useStyles();

  const clear = () => {
    setFormData({ email: '', message: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(reCaptchaIsDone) {
      dispatch(sendContactForm(formData));
      clear();
    }
    
  };

  const handlereCaptcha = () => {
    const reCaptchaValue = recaptchaRef.current.getValue();
    if (reCaptchaValue) {
      setRecaptchaIsDone(true);
    };
  };

  return (
    <div className={classes.container}>
      <Notification />
      <Paper className={classes.paper1}>
        <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <TextField 
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
            onChange={handlereCaptcha}
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
          <MailOutlineOutlinedIcon /><p className={classes.emailContact}>contact@jcvdevpro.fr</p>
        </div>
        <div className={classes.bottomInfos}>
          <a className={classes.logo} href="https://github.com/Jean-Christophe-VERMI" target="_blank" rel="noopener noreferrer" title="Github"><img src={iconGit} alt='logo github'/></a>
          <a className={classes.logo} href="https://www.linkedin.com/in/jean-christophe-vermi" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src={iconLinkedIn} alt='logo linkedIn'/></a>
        </div>
      </Paper>
    </div>
    
  );
};

export default FormContact;