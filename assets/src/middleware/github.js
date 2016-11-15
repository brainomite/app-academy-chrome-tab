import { getJSON } from 'jquery';

import { GITHUB, READMES } from 'util/settings';

const getReadme = ({ dispatch, getState }) => {
  const state   = getState(),
        token   = state.githubAuth,
        { day } = state.day,
        url     = GITHUB.readmeUrl + GITHUB[READMES[day]];

  getJSON(`${ url }?access_token=${ token }`, processReadme(dispatch, day));
}

const processReadme = (dispatch, day) => response => {
  const content = atob(response.content),
        regex   = new RegExp(`## ${ day }(?:(?!## w)[\\s\\S])*`),
        readme  = regex.exec(content)[0];

  dispatch({ type: "SET_CURRICULUM", curriculum: readme });
}

export default store => next => action => {
  switch (action.type) {
    case "GET_DAILY_README":
      getReadme(store);
      break;
  }
  return next(action);
}
