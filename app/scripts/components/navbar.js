import React from 'react'
import NavLink from './navlink'

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary navbar-light bg-faded">
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
            &#9776;
          </button>
          <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <a className="navbar-brand" href="#">Hoonio</a>
            <ul role="nav" className="nav navbar-nav">
              <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
})
