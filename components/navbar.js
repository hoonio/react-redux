import NavLink from './navlink'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  toggleMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  }

  render() {
    let toggleStyle = (this.state.showMenu) ? {display:'block'}:{display:'none'};
    return (
      <nav className="navbar navbar-expand-md navbar-inverse sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="logo" src="https://lh3.googleusercontent.com/-xLJDIl8LBcM/VV0GwIRMygI/AAAAAAACeA4/1IOmES6TSUA/w172-h30-Ic42/hoonio-logo-2014.png"/>
          </a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" onClick={this.toggleMenu}>
            &#9776;
          </button>
          <div className="collapse navbar-collapse justify-content-end" style={toggleStyle}>
            <ul className="nav navbar-nav">
              <NavLink href="/" id="nav-home" onClick={this.toggleMenu} onlyActiveOnIndex>Home</NavLink>
              <NavLink href="/profile" onClick={this.toggleMenu}>Profile</NavLink>
              <NavLink href="/portfolio" onClick={this.toggleMenu}>Portfolio</NavLink>
              <NavLink href="/blog" onClick={this.toggleMenu} prefetch>Blog</NavLink>
              <li className="nav-item"><a className="nav-link" href='/#contact'>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
