import React from 'react';

import Clock from './clock';
import Info from './info/container';

export default ({ desk, showDesks }) => (
  <header className="desk-info wrap">
    <div className="clock-wrapper">
      <div className="logo-wrapper">
        <img className="logo"
          src="/assets/img/app-academy-logo-white.png">
        </img>
        <div className="logo-box" onClick={ showDesks }></div>
      </div>
      <Clock />
    </div>
    <Info />
  </header>
);
