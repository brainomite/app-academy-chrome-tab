import React from 'react';

import Header from './header';
import Corners from './corners';
import Desks from './desks/container';
import Page from './page/view';
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