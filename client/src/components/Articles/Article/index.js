import React from 'react';
import ReactPlayer from "react-player";
import Moment from 'moment';
import 'moment/locale/fr';

import Tag from '../../Tag';

//Style
import useStyles from './style';

const Article = ({title, resume, url, youtubeUrl, tags, createdAt}) => {
  const classes = useStyles();
  const dateFr = Moment(createdAt).locale('fr').format("dddd, Do MMMM YYYY");
  
  return (
    <div className={classes.article}>
      <div className={classes.metasDatas}>
        <div className={classes.infosTitle}>
          <h1 className={classes.title}>{title}</h1>
          <a href={url} target="_blank" title={title} className={classes.url}>{url}</a>
        </div>
        <div className={classes.resume}>
          <p>{resume}</p>
        </div>
        {youtubeUrl &&(
          <ReactPlayer
            url={youtubeUrl}
          />
        )}
      </div>
      <div className={classes.infos}>
        <p className={classes.date}>{dateFr}</p>
        {tags.map((tag) => (
          <Tag tags={tag} key={tag} />
        ))}
      </div>
    </div>
  );
};
export default Article;
