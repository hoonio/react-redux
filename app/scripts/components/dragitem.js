import React from 'react';
import { DragSource } from 'react-dnd';

import { ItemTypes } from '../constants';

const dragitemSource = {
  beginDrag(props) {
    props.onclick(props.name);
    return {};
  },
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
};

class Dragitem extends React.Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <li style={{
        backgroundColor: isDragging ? 'blue' : '',
        cursor: 'move',
      }} className="list-group-item"
    >{this.props.name}</li>
    );
  }
}

Dragitem.propTypes = {
  name: React.PropTypes.string.isRequired,
  onclick: React.PropTypes.func.isRequired,
  connectDragSource: React.PropTypes.func.isRequired,
  isDragging: React.PropTypes.bool.isRequired,
};

export default DragSource(ItemTypes.DRAGITEM, dragitemSource, collect)(Dragitem);
