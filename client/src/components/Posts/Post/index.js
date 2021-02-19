import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardMedia, Button, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { useDispatch } from 'react-redux';

import FormProject from '../../FormProject';
import Tag from '../../Tag';

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
      <CardActions style={{ padding: '0' }} >
        {(user?.result?.googleId === post?.author || user?.result?._id === post?.author) && (
          <div>
            <div className={classes.action1}>
              <Button onClick={handleOpen} style={{ color: 'white' }} size="small">
                Modifier
              </Button>
            </div>
            <div className={classes.action2}>
              <Button size="small" style={{ color: 'white' }} onClick={() => dispatch(deletePost(post._id))}>
                Supprimer
              </Button>
            </div>
          </div>
        )}
      </CardActions>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <FormProject handleClose={handleClose} currentId={post._id} setCurrentId={setCurrentId} />
        </Modal>
      <div className={classes.content}>
        <div className={classes.header}>
          <Typography variant="h5" gutterBottom>
            <a href={post.github} target="_blank" title="Repository Git" className={classes.title}>
              {post.title}
            </a>
          </Typography>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="p">{post.content}</Typography>
          <div className={classes.tags}>
            {post.tags.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Post;
