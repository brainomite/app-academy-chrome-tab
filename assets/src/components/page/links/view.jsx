import React from 'react';

import { MAIN_LINKS } from 'util/links';

export default () => (
	<main className="group">
		{ MAIN_LINKS.map(pageLinksList) }
	</main>
)

const pageLinksList = ({ title, links }, idx) => {
	const key = `links-list-${idx}`;

	return (
		<section key={ key }>
			<h2>{ title }</h2>
			{ linksList(links) }
		</section>
	);
}

const linksList = links => (
	<ul>
		{ links.map(linksListItem) }
	</ul>
)

const linksListItem = (link, idx) => {
	const subLinks = link.sub ? linksList(link.sub) : null,
	      key = `link-${idx}`;

	return (
		<li key={ key }>
			<a href={ link.url }>{ link.title }</a>
			{ subLinks }
		</li>
	);
}