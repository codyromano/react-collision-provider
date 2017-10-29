
export default class BaseGameObject {
  constructor({ width, height, position }) {

    this.width = width;
    this.height = height;
    this.position = position;

    // Differs by game
    this.collisionStrategy = () => {};
  }

  updatePosition(position) {
    this.position = position;
  }

  collidesWith(gameObject) {
    return this.collisionStrategy(
      this,
      gameObject
    );
  }
}
