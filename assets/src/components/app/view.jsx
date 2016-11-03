import React from 'react';

import Page from './page/view';
import Desks from './desks/container';
import Header from './header';
import Corners from './corners';
import Options from './options/container';

export default ({ showOptions, getDay, loaded }) => {
  if (loaded) {
    return (
      <div>
        <Header />
        <Corners />

        <Page />

        <Desks />
        <Options />

        <footer>
          <span onClick={ showOptions }>Options</span>
        </footer>
      </div>
    )
  } else {
    getDay();
    return (<div>Loading...</div>)
  }
}
