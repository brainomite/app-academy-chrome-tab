import React from 'react';

import { setDashFromSec, setDashFromMin } from 'util/svg_clock';

const SECONDS_RAD = 245;
const MINUTES_RAD = 240;

export default ({ minutes, seconds }) => (
	<div className="timer">
		<svg viewBox="0 0 500 500" width="500px" height="500px" xmlns="http://www.w3.org/2000/svg">
			<circle cx="250" cy="250" r={ SECONDS_RAD } style={ setDashFromSec(SECONDS_RAD, seconds) } />
			<circle cx="250" cy="250" r={ MINUTES_RAD } style={ setDashFromMin(MINUTES_RAD, minutes) } />
		</svg>
	</div>
)
