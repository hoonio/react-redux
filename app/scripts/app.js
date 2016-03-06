import React from 'react';
import { render } from 'react-dom';
import Addons from 'react-addons';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import Template from './template';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Profile from './components/profile';
import Canvas from './components/canvas';

render((
  <div className="page-top">
    <Router history={browserHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={Home}/>
        <Route path="portfolio" component={Portfolio}/>
        <Route path="profile" component={Profile}/>
        <Route path="canvas" component={Canvas}/>
      </Route>
    </Router>
  </div>
), document.getElementById('app'));
