import CollisionMap from './CollisionMap';

export default function collisionMapFactory(params = {}) {
  return new CollisionMap(params);
}
