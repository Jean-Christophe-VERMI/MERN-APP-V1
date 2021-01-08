import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from "../../firebase";

//Style
import useStyles from './style';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({author: '', title: '', content: '', tags: '', selectedFile: ''});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [image, setImage] = useState(null);
  
  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    const pathReference = storage.ref(`images/projet/${postData.title}`);
      pathReference.put(image).then(() => {
        console.log("image enregistrée avec succès")
      }).catch(function(error) {
      console.log(error);
    });
  }

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ author: '', title: '', content: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      handleUpload()
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Ajouter un projet web</Typography>
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
