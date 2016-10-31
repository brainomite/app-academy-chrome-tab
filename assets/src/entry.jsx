import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jQuery';

import Root from 'components/root';

const smile = () => {
  const $html = $("<b>:)</b>");

  $html.css({
    "display": "block",
    "position": "fixed",
    "font-size": "13px",
    "bottom": "5px",
    "right": "5px",
    "-webkit-transform": "rotate(90deg)",
    "font-family": "Inconsolata, monospace"
  });

  $("body").append($html);
};

const insertDeskHash = () => {
	chrome.storage.local.get("deskHash", storage => {
		$("input.desk-hash").val(storage.deskHash);
		smile();
	});
};

document.addEventListener("DOMContentLoaded", () => {
	ReactDom.render(<Root />, document.querySelector('#app'));
	insertDeskHash();
});