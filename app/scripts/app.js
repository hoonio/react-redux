import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Template from './template';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Profile from './components/profile';
import Canvas from './components/canvas';
import Blog from './components/blog'

render((
    <Router history={browserHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={Home}/>
        <Route path="portfolio" component={Portfolio}/>
        <Route path="profile" component={Profile}/>
        <Route path="profile.html" component={Profile}/>
        <Route path="canvas" component={Canvas}/>
        <Route path="blog" component={Blog}/>
        <Route path="*" component={Home}/>
      </Route>
    </Router>
), document.getElementById('app'));
