import React from 'react';

import { MAIN_LINKS } from 'util/links';

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

const linksList = links => (
	<ul>
		{ links.map(linksListItem) }
	</ul>
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

export default () => (
	<main className="group">
		{ MAIN_LINKS.map(pageLinksList) }
	</main>
)