import React from 'react';

const readout = seconds => {
	if (seconds >= 60 * 99 + 59) { return "99:59"; }

	const s = seconds % 60,
	      m = Math.floor(seconds / 60),
	      sStr = (s < 10) ? "0" + s : "" + s,
	      mStr = (m < 10) ? "0" + m : "" + m;

	return `${mStr}:${sStr}`;
}

export default ({ seconds }) => (
	<h1 className="readout">
		{ readout(seconds) }
	</h1>
);