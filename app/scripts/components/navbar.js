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
      <nav className="navbar navbar-default navbar-fixed-top bg-faded">
        <div className="container">
          <div className="row">
            <button className="navbar-toggler hidden-sm-up pull-xs-right" type="button" data-toggle="collapse" onClick={ ()=> this.setState({showMenu: !this.state.showMenu})} data-target="#exCollapsingNavbar2">
              &#9776;
            </button>
            <a className="navbar-brand" href="/"><img className="logo" src="http://hoon.io/logo-transparent"/></a>
            <div className="navbar-toggleable-xs pull-sm-right" style={toggleStyle} id="exCollapsingNavbar2">
              <ul role="nav" className="nav navbar-nav">
                <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/canvas">Canvas</NavLink>
                <li className="nav-item"><a className="nav-link" href='/helpage'>AgeWatch</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
