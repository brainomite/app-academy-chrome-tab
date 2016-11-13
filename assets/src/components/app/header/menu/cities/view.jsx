import React from 'react';

import { CITIES } from 'util/settings';

const cityLi = id => (
  <li key={ id }>{ CITIES[id].abbr }</li>
)

export default ({ city }) => (
  <span className="cities menuTitle">
    { city }
    <ul className="menu">
      { Object.keys(CITIES).map(cityLi) }
    </ul>
  </span>
)