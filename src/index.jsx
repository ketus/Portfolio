import {BrowserRouter as Router} from 'react-router-dom';
import {Container, Grid} from 'semantic-ui-react';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';

import Footer from './components/Footer';
import {MainMenu} from './components/Menu';

ReactDOM.render(
  <Router>
      <Grid columns={2}>

        <Grid.Column width={3}>
          <MainMenu/>
        </Grid.Column>

        <Grid.Column >
            <Routes/>
            <Footer/>
        </Grid.Column>

      </Grid>
  </Router>,
document.getElementById('app'));
