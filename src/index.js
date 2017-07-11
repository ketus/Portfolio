import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import {StyleSheet, css} from 'aphrodite';

import Routes from './Routes';

import Footer from './components/Footer';
import MainMenu from './components/Menu';

// import 'semantic-ui-css/semantic.min.css';

const styles = StyleSheet.create({
  alignedRight: {
    marginLeft: 280,
    marginRight: 30,
  },
});

ReactDOM.render(
  <Router>
    <div>
      <MainMenu />
      <div className={css(styles.alignedRight)}>
        <Routes />
        <Footer />
      </div>
    </div>
  </Router>,
  document.getElementById('app')
);
