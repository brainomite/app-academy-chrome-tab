import React from 'react';
import ReactDom from 'react-dom';

import Root from 'components/root';

document.addEventListener("DOMContentLoaded", () => {
	// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
	// 						'Thursday', 'Friday', 'Saturday'];

	// const months = ['January', 'February', 'March', 'April',
	// 							'May', 'June', 'July', 'August', 'September',
	// 							'October', 'November', 'December'];

	// const d = new Date();
	// const hours = d.getHours();

	// let dateStamp;
	// dateStamp = days[d.getDay()].substring(0,3) + ", ";
	// dateStamp += months[d.getMonth()].substring(0,3) + " ";
	// dateStamp += d.getDate();

	// const Stamp = {
	// 	date: dateStamp,
	// 	time: dateStamp + ", " + hours
	// };

	ReactDom.render(<Root />, document.querySelector('#app'));
});