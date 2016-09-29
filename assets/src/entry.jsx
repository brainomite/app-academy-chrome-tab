import React from 'react';
import ReactDom from 'react-dom';

import App from 'components/app';
import Links from 'links';

document.addEventListener("DOMContentLoaded", () => {
	var Stamp = (function(){
		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
								'Thursday', 'Friday', 'Saturday'];

		var months = ['January', 'February', 'March', 'April',
									'May', 'June', 'July', 'August', 'September',
									'October', 'November', 'December'];

		var dateStamp;
		var d = new Date();
		var hours = d.getHours();

		dateStamp = days[d.getDay()].substring(0,3) + ", ";
		dateStamp += months[d.getMonth()].substring(0,3) + " ";
		dateStamp += d.getDate();

		return {
			date: dateStamp,
			time: dateStamp + ", " + hours
		};
	})();

	ReactDom.render(<App stamp={Stamp} links={Links} />, document.querySelector('#app'));
});