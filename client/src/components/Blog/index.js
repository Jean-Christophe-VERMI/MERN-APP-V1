import React, { useState, useEffect } from 'react';
import { TextField, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';

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
  const [articleData, setArticleData] = useState({ url:'', tags: ''});
  const user = JSON.parse(localStorage.getItem('profile'));


  useEffect(()=> {
    dispatch(getArticles());
  }, [currentId, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // fonction de requete au serveur pour aller scrapprer les metadatas à partir d'une url pour créer un nouvel article depuis le backend.
    dispatch(createArticle(articleData));
    setArticleData({url:'', tags: ''});
  };

  return (
    <div className={classes.body}>
      <Menu />
      <main className={classes.main}>
        <h4 className={classes.title}>Suivi de veille technologique</h4>
        {user && (
          <div className={classes.urlForm}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              <TextField className={classes.input} name="url" variant="outlined" label="url" fullWidth value={articleData.url} onChange={(e) => setArticleData({ ...articleData, url: e.target.value})} />
              <TextField className={classes.input} name="tags" variant="outlined" label="Tags" fullWidth value={articleData.tags} onChange={(e) => setArticleData({ ...articleData, tags: e.target.value})} />
              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Enregister</Button>
            </form>
          </div>
        )}
        <div>
          <Articles setCurrentId={currentId} />
        </div>
      </main>
    </div>
  );
}; 

export default Blog;
