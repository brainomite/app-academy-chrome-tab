import React from 'react';

import Clock from './clock';
import Info from './info/container';

export default ({ desk, showDesks }) => (
  <header className="desk-info wrap">
    <div className="clock-wrapper">
      <img className="number"
        onClick={ showDesks }
        src="/assets/img/app-academy-logo-white.png">
      </img>
      <Clock />
    </div>
    <Info />
  </header>
);
