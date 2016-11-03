import React from 'react';

import { MAIN_LINKS } from 'util/links';

export default () => (
  <main className="group">
    { MAIN_LINKS.map(linksSection) }
  </main>
)

const linksSection = ({ title, links }, idx) => {
  const key = `links-section-${idx}`;

  return (
    <section key={ key }>
      <h2>{ title }</h2>
      { linksList(links) }
    </section>
  );
}

const linksList = links => (
  <ul>
    { links.map(linkListItem) }
  </ul>
)

const linkListItem = (link, idx) => {
  const subLinks = link.sub ? linksList(link.sub) : null,
        key = `link-${idx}`;

  return (
    <li key={ key }>
      <a href={ link.url }>{ link.title }</a>
      { subLinks }
    </li>
  );
}
