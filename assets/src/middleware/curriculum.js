import { getJSON } from 'jquery';

import { GITHUB, READMES } from 'util/settings';

const getReadme = ({ dispatch, getState }, token) => {
  const state   = getState(),
        { day } = state.day,
        url     = GITHUB.readmeUrl + GITHUB[READMES[day]];

  getJSON(`${ url }?access_token=${ token }`, processReadme(dispatch, day));
}

const processReadme = (dispatch, day) => response => {
  const content           = atob(response.content), // base64 decode
        url               = response.html_url.split('/').slice(0, -1).join('/'),
        regex             = new RegExp(`## ${ day }(?:(?!## w)[\\s\\S])*`),
        readme            = regex.exec(content)[0],
        linksRegex        = /\[\S*\]: \S*\n/g;

  let link;
  let links = "";
  while (link = linksRegex.exec(content)) {
    links += link;
  }

  const readmeWithLinks   = readme + links,
        readmeFixedLinks  = readmeWithLinks.replace(/(]: )(?!http)/g, `]: ${ url }/`),
        readmeSansEmotion = readmeFixedLinks.replace(/:\S*:/g, ''); // :|

  dispatch({ type: "SET_CURRICULUM", curriculum: readmeSansEmotion });
}

export default store => next => action => {
  switch (action.type) {
    case "GET_CURRICULUM":
      getReadme(store, action.token);
      break;
  }
  return next(action);
}
