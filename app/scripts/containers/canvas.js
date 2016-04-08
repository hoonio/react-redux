import React from 'react';
import { connect } from 'react-redux'

import { getCanvasIfNeeded } from '../actions/canvas-actions'

class Canvas extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch( getCanvasIfNeeded() )
  }

  render() {
    let dataset = null
    if (this.props.dataset) {
      dataset = (this.props.dataset.map((data, index) => {
        return (<p>{data.date} - {data.close}</p>)
      }))
    }

    return (
      <div className="container" id="canvas">
        {dataset}
      </div>
    );
  }
}

Canvas.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  dataset: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return { dataset: state.canvas.dataset }
}

export default connect(mapStateToProps)(Canvas)
