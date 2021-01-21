import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Input from './input';

//Styles
import useStyles from './style';


const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const isSignup = false;

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = () => {

  };

  const handleChange = () => {

  };

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
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
