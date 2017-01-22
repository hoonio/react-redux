import React from 'react'
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
      <nav className="navbar navbar-toggleable-sm navbar-inverse bg-primary sticky-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" onClick={this.toggleMenu}>
          &#9776;
        </button>
        <a className="navbar-brand" href="/">
          <img className="logo" src="https://lh3.googleusercontent.com/-xLJDIl8LBcM/VV0GwIRMygI/AAAAAAACeA4/1IOmES6TSUA/w172-h30-Ic42/hoonio-logo-2014.png"/>
        </a>
        <div className="collapse navbar-collapse justify-content-end" style={toggleStyle}>
          <ul className="nav navbar-nav">
            <NavLink to="/" id="nav-home" onClick={this.toggleMenu} onlyActiveOnIndex>Home</NavLink>
            <NavLink to="/profile" onClick={this.toggleMenu}>Profile</NavLink>
            <NavLink to="/portfolio" onClick={this.toggleMenu}>Portfolio</NavLink>
            <NavLink to="/canvas" onClick={this.toggleMenu}>Canvas</NavLink>
            <NavLink to="/blog" onClick={this.toggleMenu}>Blog</NavLink>
            <li className="nav-item"><a className="nav-link" href='/#contact'>Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
