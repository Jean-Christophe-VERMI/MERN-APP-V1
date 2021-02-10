import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import githubIcon from './github-icon.png';

import FormProject from '../../FormProject';

import { deletePost } from '../../../actions/posts';
import useStyles from './style';

const Post = ({ post, setCurrentId }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleOpen = () => {
    setCurrentId(post._id)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.card}>
      <CardMedia  className={classes.media} image={post.urlImg} title={post.title} />
      <div className={classes.overlay}>
        <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
      </div>
      {(user?.result?.googleId === post?.author || user?.result?._id === post?.author) && (
        <div className={classes.overlay2}>
          <Button onClick={handleOpen} style={{ color: 'white' }} size="small">
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
         <FormProject handleClose={handleClose} currentId={post._id} setCurrentId={setCurrentId} />
      </Modal>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.content}</Typography>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
          <a href={post.github} target="_blank" title="Repository Git"><img src={githubIcon} alt='logo github'/></a>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.result?.googleId === post?.author || user?.result?._id === post?.author) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> Supprimer
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
