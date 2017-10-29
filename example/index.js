import { collisionProviderFactory } from '../data-models/collision-provider';
import React from 'react';
import ReactDOM from 'react-dom';
import ExampleBox from './ExampleBox';

const CollisionProvider = collisionProviderFactory();

ReactDOM.render(
  <div>
    <CollisionProvider
      itemId="boxA"
      size={{width: 50, height: 50}}
      initialPosition={{x: 10, y: 10}}
      component={ExampleBox}
    />
    <CollisionProvider
      itemId="boxB"
      size={{width: 50, height: 50}}
      initialPosition={{x: 10, y: 10}}
      component={ExampleBox}
    />
  </div>
, document.getElementById('root'));
