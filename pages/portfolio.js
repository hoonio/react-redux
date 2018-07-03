import React from 'react';
import { connect } from 'react-redux'

const WorkItem = ({ item, index }) => (
  <div className="card">
    <div className="card-block">
      <h4 className="card-title">{item.gsx$title.$t}</h4>
      <h6 className="card-subtitle text-muted">{item.gsx$period.$t} {item.gsx$client.$t}</h6>
    </div>
    <a href={item.gsx$link.$t ? item.gsx$link.$t : '#'}>
      <img className={item.gsx$image.$t ? 'card-img-top img-fluid' : 'invisible'} src={item.gsx$image.$t} alt={item.gsx$imagealt.$t} />
    </a>
    <div className="card-block">
      <p className={item.gsx$description.$t ? 'card-text' : 'invisible'} dangerouslySetInnerHTML={{ __html: item.gsx$description.$t }} />
      <p className={item.gsx$stacks.$t ? 'card-text' : 'invisible'}>{listStacks(item.gsx$stacks.$t).map((stack, index) => (
        <button type="button" className="btn-sm btn-secondary" key={index}>{stack}</button>
      ))}</p>
      <a href={item.gsx$link.$t} className={item.gsx$link.$t ? 'btn btn-primary card-link' : 'invisible'}>View</a>
      <a href={item.gsx$sourcecode.$t} className={item.gsx$sourcecode.$t ? 'card-link' : 'invisible'} >Code</a>
    </div>
  </div>
)

const listStacks = (stringText) => {
  const arr = stringText.split(', ')
  return arr;
}

class Portfolio extends React.Component {
  static async getInitialProps({ req, store, isServer, pathname}) {
    store.dispatch({type: 'CHANGING_PAGE', status: pathname})
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    return fetch(baseUrl + '/work')
    .then(res => res.json())
    .then(data => ({
      posts: data,
      page: store.getState().page,
      isServer,
    }))
  }

  render() {
    const workItems = this.props.posts.map((item, index) => (
      (item.gsx$portfolio.$t === 'TRUE') ?
        <WorkItem item={item} key={index} /> :
        null
    ));

    return (
      <div className="container" id="portfolio">
        <div className="card-columns">
          {workItems}
        </div>
      </div>
    );
  }

}

export default connect()(Portfolio)
