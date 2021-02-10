import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import { signin, signup } from '../../actions/auth';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Icon from './icon';
import Input from './input';

//Styles
import useStyles from './style';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const history = useHistory('/admin/jcvauth');
  const dispatch = useDispatch();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      console.log(initialState);
      dispatch(signup(formData, history.push('/')));
    } else {
      setTimeout(() => {
        dispatch(signin(formData, history.push('/')));
      }, 1000);
      
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  return (
    <Container component="main" className={classes.container} maxWidth="xs">
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
                  <Input name="firstName" label="Nom" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Prénom" handleChange={handleChange} autoFocus half />
                </>
              )
            }
            <Input name="email" label="Adresse email" type="email" handleChange={handleChange}/>
            <Input name="password" label="Mot de passe" type={showPassword ? "text" : "password"} handleChange={handleChange} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Confirmation mot de passe" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Inscription' : 'Connexion' }
          </Button>
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
