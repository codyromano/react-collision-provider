import React from 'react';
import collisionMapFactory from '../data-models/collisionMapFactory';
import collisionProviderShape from './collisionProviderShape';

const CollisionProvider = collisionProviderFactory();
export { CollisionProvider };

export default function collisionProviderFactory() {
  const collisionMap = collisionMapFactory();

  class CollisionProvider extends React.Component {
    constructor(props) {
      super(props);
      collisionMap.register({
        itemId: props.itemId,
        width: props.size.width,
        height: props.size.height,
        position: {
          x: props.initialPosition.x,
          y: props.initialPosition.y
        }
      });

      this.onCollision = this.onCollision.bind(this);
      this.updatePosition = this.updatePosition.bind(this);

      this.updatePosition(props.initialPosition);
    }
    updatePosition({ x, y }) {
      collisionMap.updatePosition(this.props.itemId, { x, y });
    }
    onCollision(callback) {
      collisionMap.subscribe(this.props.itemId, callback);
    }
    render() {
      const Component = this.props.component;
      return (<Component
        onCollision={this.onCollision}
        updatePosition={this.updatePosition}
        {...this.props}
      />);
    }
  }

  CollisionProvider.propTypes = collisionProviderShape;
  return CollisionProvider;
}
