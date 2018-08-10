import React from 'react';

import Clock from './clock';
import Info from './info/container';

export default ({ desk, showDesks }) => (
  <header className="desk-info wrap">
    <div className="clock-wrapper">
      <img className="number" src="/assets/img/app-academy-logo-black.png"></img>
      <Clock />
    </div>
    <Info />
  </header>
);
