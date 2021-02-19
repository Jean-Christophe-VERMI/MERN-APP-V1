import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container} from '@material-ui/core';

// Components
import Home from '../Home';
import Contact from '../Contact';
import Auth from '../Auth';

import useStyles from './style';

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Container className={classes.container} maxWidth="lg">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/admin/jcvauth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
