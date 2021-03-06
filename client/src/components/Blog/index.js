import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, CircularProgress} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { getArticles, createArticle } from '../../actions/articles.js';

//Components
import Menu from '../Menu/Burger';
import Articles from '../Articles';

//Style
import useStyles from './style';

const Blog = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const [url, setUrl] = useState('');
  const user = JSON.parse(localStorage.getItem('profile'));


  useEffect(()=> {
    dispatch(getArticles());
  }, [currentId, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // fonction de requete au serveur pour aller scrapprer les metadatas à partir d'une url pour créer un nouvel article depuis le backend.
    console.log(url);
    dispatch(createArticle(url));
    console.log('envoi url au serveur');
    setUrl('');
  };

  return (
    <div>
      <Menu />
      <header className={classes.header}>
        <h4 className={classes.title}>Articles suivi de veille technologique</h4>
        {user && (
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <TextField name="url" variant="outlined" label="url" fullWidth value={url} onChange={(e) => setUrl(e.target.value)} />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Enregister</Button>
        </form>
        )}
      </header>
      <main className={classes.main}>
        <div>
          <Articles />
        </div>
      </main>
    </div>
  );
}; 

export default Blog;
