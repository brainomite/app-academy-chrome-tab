import React from 'react';

import Page from './page/view';
import Desks from './desks/container';
import Header from './header';
import Corners from './corners';
import Options from './options/container';

export default ({ showOptions }) => (
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
);