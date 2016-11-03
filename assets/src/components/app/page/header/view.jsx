import React from 'react';

import Clock from './clock';
import Info from './info/container';

export default ({ desk, showDesks }) => (
  <header className="clock-wrap">
    <h2 id="desk" onClick={ showDesks }>{ desk || "•" }</h2>
    <Clock />
    <Info />
  </header>
)
