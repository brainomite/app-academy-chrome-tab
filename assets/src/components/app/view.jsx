import React from 'react';

import Curriculum from './curriculum/view';
import DeskInfo from './desk_info/view';
import Header from './header/view';
import Links from './links/view';
import Timer from './timer/view';

export default ({ showOptions, getDay, loaded }) => {
  if (loaded) {
    return (
      <main>
        <Header />
        <DeskInfo />
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
