import React from 'react';
import { Link } from 'react-router';

export default (props) => (
  <li className="nav-item">
    <Link {...props} className="nav-link" activeClassName="active" />
  </li>
);
