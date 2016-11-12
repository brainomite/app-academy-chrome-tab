import React from 'react';

import { setDashFromSec, setDashFromMin } from 'util/svg_clock';

const SECONDS_RAD = 222; // width = 9
const BACK_RAD    = 233; // width = 32
const MINUTES_RAD = 238; // width = 23

const formatMinutes = (minutes) => {
	if (minutes >= 15) { return 15; }
	return minutes;
}

export default ({ seconds, minutes }) => (
	<svg className="clock" viewBox="0 0 550 550" width="500px" height="500px" xmlns="http://www.w3.org/2000/svg">
		<circle className="back"
			cx="275" cy="275" r={ BACK_RAD } />
		<circle className="seconds"
			cx="275" cy="275" r={ SECONDS_RAD } 
			style={ setDashFromSec(SECONDS_RAD, seconds) } />
		<circle className="minutes" 
			cx="275" cy="275" r={ MINUTES_RAD } 
			style={ setDashFromMin(MINUTES_RAD, formatMinutes(minutes)) } />
	</svg>
);