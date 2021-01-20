import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from "../../firebase";

//Actions
import { createPost, updatePost } from '../../actions/posts';

//Style
import useStyles from './style';


const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({author: '', title: '', content: '', tags: '', urlImg: ''});
  const [savePost, setSavePost] = useState(false);
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  useEffect(() => {
    if (savePost && currentId === null) {
      dispatch(createPost(postData));
      console.log("nouveau projet enregistré sur mongoDB");
      clear();
    }

    if (savePost && currentId) {
      dispatch(updatePost(currentId, postData));
      console.log("projet mis à jour sur mongoDB");
      clear();
    }

    setSavePost(false);
  }, [savePost]);

  const clear = () => {
    setCurrentId(null);
    setPostData({ author: '', title: '', content: '', tags: '', urlImg: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleUploadImg();
  };

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUploadImg = () => {
    const pathReference = storage.ref(`images/projects/${postData.title}`);
      pathReference.put(image).then( async () => {
        console.log("image enregistrée avec succès");
        const url = await pathReference.getDownloadURL();
        setPostData({ ...postData, urlImg: url });
        setSavePost(true);
      }).catch(function(error) {
      console.log(error);
    });
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Editer' : 'Créer' } un projet web</Typography>
        <TextField name="author" variant="outlined" label="Author" fullWidth value={postData.author} onChange={(e) => setPostData({ ...postData, author: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="content" variant="outlined" label="Content" fullWidth value={postData.content} onChange={(e) => setPostData({ ...postData, content: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        <div className={classes.fileInput}>
          <input 
            // L'image est enregistré dans cloud storage firebase
            type="file" 
            multiple={false} 
            onChange={handleChange}
          />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
