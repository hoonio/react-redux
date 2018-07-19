import React from 'react';
import { connect } from 'react-redux'

class Canvas extends React.Component {
  static async getInitialProps({ req, store, isServer, pathname}) {
    store.dispatch({type: 'CHANGING_PAGE', status: pathname})
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    return fetch(baseUrl + '/brainwave/list')
    .then(res => res.json())
    .then(data => ({
      list: data
    }))
  }

  render() {
    console.log(this.props.list)

    return (
      <div className="container" id="portfolio">
        <div className="card-columns">
          {this.props.list}
        </div>
      </div>
    );
  }
}

export default connect()(Canvas)
