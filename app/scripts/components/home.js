import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Browserify',
        'Babel',
        'Bootstrap'
      ]
    };
  }

  render() {
    return (
      <div className="hero-unit">
        <h1>Hoonio Rocks!!!!</h1>
        <p>Home page content<br/>
           The page will now change</p>
        <ul>{this.state.items.map(this.renderItem)}</ul>
      </div>
    );
  }

  renderItem(item, index) {
    return <li key={index}>{item}</li>;
  }
}
