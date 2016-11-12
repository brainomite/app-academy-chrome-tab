import React from 'react';

import { setDashFromSec, setDashFromMin } from 'util/svg_clock';

const SECONDS_RAD = 223;
const MINUTES_RAD = 238;

const formatSeconds = (seconds, minutes) => {
	if (minutes > 0 && seconds === 0) { return 60; }
	return seconds;
}

const formatMinutes = (minutes) => {
	if (minutes >= 15) { return 15; }
	return minutes;
}

export default ({ seconds, minutes }) => (
	<svg viewBox="0 0 550 550" width="500px" height="500px" xmlns="http://www.w3.org/2000/svg">
		<circle className="seconds" 
			cx="275" cy="275" r={ SECONDS_RAD } 
			style={ setDashFromSec(SECONDS_RAD, formatSeconds(seconds, minutes)) } />
		<circle className="minutes" 
			cx="275" cy="275" r={ MINUTES_RAD } 
			style={ setDashFromMin(MINUTES_RAD, formatMinutes(minutes)) } />
	</svg>
);