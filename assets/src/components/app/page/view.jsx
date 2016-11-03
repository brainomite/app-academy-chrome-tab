import React from 'react';

import PageHeader from './header/container';
import PageLinks from './links';

export default () => (
  <div className="wrap">
    <PageHeader />
    <PageLinks />

    <h3 className="localhost">
      <a href="http://localhost:3000/">Localhost:3000</a>
    </h3>
  </div>
)
