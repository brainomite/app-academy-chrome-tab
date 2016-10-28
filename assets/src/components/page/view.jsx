import React from 'react';

import PageHeader from './header/container.js';
import PageLinks from './links.js';

export default () => (
	<div className="wrap">
		<PageHeader />
		<PageLinks />

		<h3 className="localhost">
			<a href="http://localhost:3000/">Localhost:3000</a>
		</h3>
	</div>
)