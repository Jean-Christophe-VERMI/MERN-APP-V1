import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Avatar, Typography } from '@material-ui/core';

//Styles
import favicon from '../../images/favicon.png';
import useStyles from './style';

const Navbar = () => {
  const classes = useStyles();
  const user = null;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit" >
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Portfolio 2020</Typography>
        <img className={classes.image} src={favicon} alt="favicon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary">Déconnexion</Button>
          </div>
        ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Connexion</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
