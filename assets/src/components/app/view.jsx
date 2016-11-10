import React from 'react';

import Curriculum from './curriculum/view';
import DeskInfo from './desk_info/view';
import Header from './header/view';
import Links from './links/view';
import Timer from './timer/view';

export default ({ showOptions, getDay, loaded }) => {
  if (loaded) {
    return (
      <div>
        <Header />
        <DeskInfo />
        <Links />
        <div>
          <Timer />
          <Curriculum />
        </div>
      </div>
    )
  } else {
    getDay();
    return (<div>Loading...</div>)
  }
}
