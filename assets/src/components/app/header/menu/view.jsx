import React from 'react';

import Cities from './cities/container';
import Pods from './pods/container';

export default () => (
  <ul className="menu">
    <li>
      SF
      <ul>
        <li>SF</li>
        <li>NYC</li>
      </ul>
    </li>
    <li>
      Presidio
      <ul>
        <li>Presidio</li>
        <li>Ocean Beach</li>
        <li>Market</li>
      </ul>
    </li>
  </ul>
)