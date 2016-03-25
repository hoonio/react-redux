import React from 'react';
import WorkItem from './workitem';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    reqwest({
      url:'https://spreadsheets.google.com/feeds/list/1LNTNp3n_DYYq_dDLf7YdZyJWjI0soMn3MjYPeVLFSfk/1/public/values?alt=json-in-script',
      type: 'jsonp',
      success:(resp) => {
        this.setState({items: resp.feed.entry});
      }
    });
  }

  render() {
    return (
      <div className="container" id="portfolio">
        <div className="card-columns">
          {this.state.items.map((item, index) => ( <WorkItem item={item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
