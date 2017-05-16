import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container, Grid} from 'semantic-ui-react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <Router>
    <div>
      <Grid container columns={2}>
        <Grid.Column stretched width={3}>
          <Header/>
        </Grid.Column>

        <Grid.Column verticalAlign="middle" width={13}>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NotFound}/>
            </Switch>

          <Footer/>
        </Grid.Column>
      </Grid>
    </div>
  </Router>,
document.getElementById('app'));
