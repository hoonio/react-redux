import React from 'react';
import { DragSource } from 'react-dnd';

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
    console.log(this.props.name)
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

export default DragSource('dragitem', dragitemSource, collect)(Dragitem);
