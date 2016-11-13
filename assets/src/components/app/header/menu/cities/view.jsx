import React from 'react';

import { CITIES } from 'util/settings';

const cityLi = id => (
  <li key={ id }>{ CITIES[id].abbr }</li>
)

export default ({ city }) => (
  <ul>
    <li>SF</li>
    <li>NYC</li>
  </ul>
)