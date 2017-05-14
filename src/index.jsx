import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Header from './components/Header';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import {Container} from 'semantic-ui-react';

ReactDOM.render(
  <Router>
    <Container>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} /> {/*Default route*/}
      </Switch>
    </Container>
  </Router>,
  document.getElementById('app')
);
