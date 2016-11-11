import React from 'react';

import { setDashFromSec, setDashFromMin } from 'util/svg_clock';


export default () => (
	<div className="timer">
		<svg viewBox="0 0 500 500" width="500px" height="500px" xmlns="http://www.w3.org/2000/svg">
			<circle cx="250" cy="250" r="240" style={ setDashFromSec(1) } />
		</svg>
	</div>
)
