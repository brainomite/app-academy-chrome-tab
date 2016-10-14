import React from 'react';
import ReactDom from 'react-dom';

import App from 'components/app';
import Links from 'links';

document.addEventListener("DOMContentLoaded", () => {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
							'Thursday', 'Friday', 'Saturday'];

	const months = ['January', 'February', 'March', 'April',
								'May', 'June', 'July', 'August', 'September',
								'October', 'November', 'December'];

	const d = new Date();
	const hours = d.getHours();

	let dateStamp;
	dateStamp = days[d.getDay()].substring(0,3) + ", ";
	dateStamp += months[d.getMonth()].substring(0,3) + " ";
	dateStamp += d.getDate();

	const Stamp = {
		date: dateStamp,
		time: dateStamp + ", " + hours
	};

	ReactDom.render(<App stamp={Stamp} links={Links} />, document.querySelector('#app'));
});