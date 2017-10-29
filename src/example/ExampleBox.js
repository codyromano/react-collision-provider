import React from 'react';

export default class ExampleBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.initialPosition.x,
      y: props.initialPosition.y,
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  componentDidMount() {
    this.props.onCollision(function() {
      console.log('c:', arguments);
    });
  }

  onDragEnd(event) {
    const position = {
      x: event.clientX - (this.props.size.width / 2),
      y: event.clientY - (this.props.size.height / 2)
    };
    this.props.updatePosition(position);
    this.setState(position);
  }
  render() {
    const styles = {
      position: 'fixed',
      top: this.state.y,
      left: this.state.x,
      width: `${this.props.size.width}px`,
      height: `${this.props.size.height}px`,
      cursor: 'move',
      backgroundColor: 'green'
    };
    return (
      <div
        style={styles}
        draggable={true}
        onDragEnd={this.onDragEnd}
      >
      </div>
    );
  }
}
