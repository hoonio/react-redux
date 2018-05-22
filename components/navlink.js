import Link from 'next/link'

export default (props) => (
  <li className="nav-item">
    <Link {...props} className="nav-link" activeClassName="active" />
  </li>
);
