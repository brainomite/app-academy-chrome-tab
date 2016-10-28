import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jQuery';

import Root from 'components/root';

const insertDeskHash = () => {
	chrome.storage.local.get("deskHash", storage => {
		$("input.desk-hash").val(storage.deskHash);
	});
};

document.addEventListener("DOMContentLoaded", () => {
	insertDeskHash();
	ReactDom.render(<Root />, document.querySelector('#app'));
});