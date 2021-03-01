import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, CircularProgress} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { getArticles, createArticle } from '../../actions/articles.js';

//Components
import Article from '../Article';

//Style
import useStyles from './style';

const Blog = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const [url, setUrl] = useState('');

  const articles = useSelector((state) => state.articles);

  useEffect(()=> {
    dispatch(getArticles());
  }, [currentId, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // fonction de requete au serveur pour aller scrapprer les metadatas à partir d'une url pour créer un nouvel article depuis le backend.
    createArticle();
    setUrl('');
  };

  return (
    <div>
      <header className={classes.header}>
        <h4>Articles suivi de veille technologique</h4>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId ? 'Editer' : 'Créer' } un projet web</Typography>
          <TextField name="url" variant="outlined" label="url" fullWidth value={url} onChange={(e) => seturl(e.target.value)} />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Enregister</Button>
        </form>
      </header>
      <main className={classes.main}>
        <div>
          {!articles &&(
            <CircularProgress />
          )}
          {articles &&(
            <div className={classes.container}>
              {articles.map((article) => (
                <Article key={article._id} { ...article } setCurrentId={setCurrentId} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}; 

export default Blog;
