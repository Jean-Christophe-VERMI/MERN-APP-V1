import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container} from '@material-ui/core';

// Components
import Home from '../Home';
import Projects from '../Projects';
import Blog from '../Blog';
import Contact from '../Contact';
import Auth from '../Auth';

import reset from './reset.css';
import useStyles from './style';

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Container className={classes.container} maxWidth="lg">
        <Home />
        <Switch>
          <Route path="/projets" component={Projects} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
