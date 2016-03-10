import React from 'react';
import WorkItem from './WorkItem';

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
        this.organizeData(resp.feed.entry);
        this.setState({items: resp.feed.entry});
      }
    });
  }

  organizeData(source) {
    console.log(source);
  }

  render() {
    return (
      <div className="container-fluid" id="portfolio">
        <h1>Portfolio</h1>
        <p>Here are all the works</p>
        <div className="card-columns">
          {this.state.items.map((item, index) => ( <WorkItem item={item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
