import React from 'react';

import Curriculum from './curriculum/view';
import DeskInfo from './desk_info/container';
import Header from './header/view';
import Links from './links/view';
import Timer from './timer/view';
import Desks from './desks/container';

export default ({ showOptions, getDay, loaded }) => {
  if (loaded) {
    return (
      <main>
        <Header />
        <DeskInfo />
        <Desks />
        <Links />
        <div className="pair-tools">
          <Timer />
          <Curriculum />
        </div>
      </main>
    )
  } else {
    getDay();
    return (<div>Loading...</div>)
  }
}
