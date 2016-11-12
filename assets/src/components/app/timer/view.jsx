import React from 'react';

import ClockSvg from './clock_svg/container';
import Readout from './readout/container';

export default () => (
	<div className="timer">
		<div className="clock-wrapper">
			<ClockSvg />
			<Readout />
		</div>
	</div>
)
