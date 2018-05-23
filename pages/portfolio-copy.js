import React from 'react';
import { connect } from 'react-redux';

import { getPortfolioIfNeeded } from '../actions/portfolio-actions';
import WorkItem from '../components/workitem';

export class Portfolio extends React.Component {

  componentDidMount() {
    this.props.getPortfolioWorks();
  }

  render() {
    let workItems = null;
    if (this.props.items) {
      workItems = this.props.items.map((item, index) => (
        (item.gsx$portfolio.$t === 'TRUE') ?
          <WorkItem item={item} key={index} /> :
          null
      ));
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

Portfolio.propTypes = {
  items: React.PropTypes.array.isRequired,
  getPortfolioWorks: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ items: state.portfolio.items });

const mapDispatchToProps = (dispatch) => ({
  getPortfolioWorks: () => dispatch(getPortfolioIfNeeded()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
