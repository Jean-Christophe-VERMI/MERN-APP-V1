import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container} from '@material-ui/core';

// Components
import Navbar from '../Navbar';
import Home from '../Home';
import Auth from '../Auth';


const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
