import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';

import Footer from './components/Footer';
import { MainMenu } from './components/Menu';

const styles = {
  marginLeft: 250,
  marginRight: 50
};

ReactDOM.render(
  <Router>
    <div style={styles}>
      <MainMenu />
      <Routes />
      <Footer />
    </div>
  </Router>,
  document.getElementById('app'));
