import React from 'react';

import Tag from '../../Tag';

//Style
import useStyles from './style';

const Article = ({title, url, tags}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.article}>
      <div className={classes.metasDatas}>
        <a href={url} target="_blank" title="Repository Git" className={classes.title}>
          {title}
        </a>
      </div>
      <div>
      {tags.map((tag) => (
        <Tag tags={tag} key={tag} />
      ))}
      </div>
    </div>
  );
};
export default Article;
