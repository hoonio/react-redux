import React from 'react'
import NavLink from './navlink'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  render() {
    let toggleStyle = (this.state.showMenu) ? {display:'block'}:{display:'none'};
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary fixed-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" onClick={ ()=> this.setState({showMenu: !this.state.showMenu})} data-target="#exCollapsingNavbar2">
          &#9776;
        </button>
        <a className="navbar-brand" href="/">
          <img className="logo" src="https://lh3.googleusercontent.com/-xLJDIl8LBcM/VV0GwIRMygI/AAAAAAACeA4/1IOmES6TSUA/w172-h30-Ic42/hoonio-logo-2014.png"/>
        </a>
        <div className="collapse navbar-collapse" style={toggleStyle} id="exCollapsingNavbar2">
          <ul role="nav" className="nav navbar-nav">
            <NavLink to="/" id="nav-home" onlyActiveOnIndex>Home</NavLink>
            <NavLink to="/profile" onClick={ ()=> this.setState({showMenu: !this.state.showMenu})}>Profile</NavLink>
            <NavLink to="/portfolio" onClick={ ()=> this.setState({showMenu: !this.state.showMenu})}>Portfolio</NavLink>
            <NavLink to="/canvas" onClick={ ()=> this.setState({showMenu: !this.state.showMenu})}>Canvas</NavLink>
            <NavLink to="/blog" onClick={ ()=> this.setState({showMenu: !this.state.showMenu})}>Blog</NavLink>
            <li className="nav-item"><a className="nav-link" href='/#contact'>Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
