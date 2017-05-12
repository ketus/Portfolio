import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Match} from 'react-router-dom';
import Layout from './pages/Layout';

ReactDOM.render(
  <Router>
    <div>
      <ul>        
        <li><Link to="/" activeOnlyWhenExact activeClassName="active">Home</Link></li>
      </ul>
      // <Match exactly pattern="/" component={Layout} />
    </div>
  </Router>,
  document.getElementById('app')
);
