import React from 'react';
import { render } from 'react-dom';
import Addons from 'react-addons';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import Template from './template';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Profile from './components/profile';

render((
  <div className="page-top">
    <Router history={hashHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={Home}/>
        <Route path="portfolio" component={Portfolio}/>
        <Route path="profile" component={Profile}/>
      </Route>
    </Router>
  </div>
), document.getElementById('app'));
