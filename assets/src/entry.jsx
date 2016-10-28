import React from 'react';
import ReactDom from 'react-dom';

import Root from 'components/root';

const insertDeskHash = () => {
	chrome.storage.local.get("deskHash", function(storage){
		$("input.desk-hash").val(storage.deskHash);
	});
};

document.addEventListener("DOMContentLoaded", () => {
	insertDeskHash();
	ReactDom.render(<Root />, document.querySelector('#app'));
});