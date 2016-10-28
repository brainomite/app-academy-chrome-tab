import React from 'react';
// import $ from 'jquery';

import Header from './header';
import Corners from './corners';
import Desks from './desks/container';
import Page from './page/view';
import Options from './options/modal';

export default () => (
	<div>
		<Header />
		<Corners />
		<Desks />
		<Page />

		<footer>
			<span onClick={ () => { console.log('whee!') } }>Options</span>
		</footer>
	</div>
);