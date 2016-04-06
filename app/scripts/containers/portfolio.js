import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getPortfolioIfNeeded } from '../actions'
import WorkItem from '../components/WorkItem';

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('component did mount')
    this.props.dispatch( getPortfolioIfNeeded() )
  }

  render() {
    let workItems = null
    if (this.props.items) {
      workItems = ( this.props.items.map((item, index) => ( <WorkItem item={item} key={index} />
      )))
    }

    return (
      <div className="container" id="portfolio">
        <div className="card-columns">
          {workItems}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('bind below object')
  console.log(state)
  return { items: state.portfolio.items }
}

export default connect(mapStateToProps)(Portfolio)
