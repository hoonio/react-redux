import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Home',
        'Company',
        'Profile',
        'Portfolio',
        'Contact'
      ]
    };
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-light bg-faded">
        <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
          &#9776;
        </button>
        <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
          <a className="navbar-brand" href="#">Hoonio</a>
          <ul className="nav navbar-nav">{this.state.items.map(this.renderItem)}</ul>
        </div>
      </nav>
    );
  }

  renderItem(item, index) {
    return (
      <li className="nav-item" key={index}>
        <a className="nav-link" href="#">{item}</a>
      </li>
    );
  }
}
