import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotFound}/>
      </Switch>
    );
  }
}
