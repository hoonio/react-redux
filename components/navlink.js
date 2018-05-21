import React from 'react';
import { Link } from 'next';

export default (props) => (
  <li className="nav-item">
    <Link {...props} className="nav-link" activeClassName="active" />
  </li>
);
