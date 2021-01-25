import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GOOGLE_CLIENT_ID } from '../../googleAuth';
import Icon from './icon';
import Input from './input';

//Styles
import useStyles from './style';


const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = () => {

  };

  const handleChange = () => {

  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      console.log(res);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  

  const googleError = (error) => {
    console.log(error);
    console.log('Oups... Connexion avec compte Google refusé. Essayez de nouveau.');
  };

  //const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{isSignup ? 'Inscription' : 'Connexion'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name="Nom" label="Nom" handleChange={handleChange} autoFocus half />
                  <Input name="Prénom" label="Prénom" handleChange={handleChange} autoFocus half />
                </>
              )
            }
            <Input name="email" label="Adresse email" type="email" handleChange={handleChange}/>
            <Input name="mot de passe" label="Mot de passe" type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
            { isSignup && <Input name="confirmPassword" label="Confirmation mot de passe" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Inscription' : 'Connexion' }
          </Button>
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <Button 
                className={classes.googleButton} 
                color="primary" 
                fullWidth 
                onClick={renderProps.onClick} 
                //disabled={renderProps.disabled} 
                startIcon={<Icon />} 
                variant="contained"
              >
                Se connecter avec Google
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'J\'ai un compte ? Connexion' : "Je n'ai pas de compte ? Inscription" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
