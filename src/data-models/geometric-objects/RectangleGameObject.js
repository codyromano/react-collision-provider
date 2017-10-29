import BaseGameObject from './BaseGameObject';

/**
* @private
*/
function collisionStrategy(itemA, itemB) {
  const conditions = [
    itemA.position.x < itemB.position.x + itemB.width,
    itemA.position.x + itemA.width > itemB.position.x,
    itemA.position.y < itemB.position.y + itemB.height,
    itemA.height + itemA.position.y > itemB.position.y
  ];
  return !conditions.includes(false);
}

export default class RectangleGameObject extends BaseGameObject {
  constructor({
    width,
    height,
    position
  }) {
    super({ width, height, position });
    this.collisionStrategy = collisionStrategy;
  }
};
