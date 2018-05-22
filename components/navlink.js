import Link from 'next/link'

export default (props) => (
  <li className="nav-item">
    <Link href={props.href}><a {...props} className="nav-link" activeClassName="active" /></Link>
  </li>
);
