import { ajax } from 'jquery';

import { GITHUB } from 'util/settings';

const getCode = ({ dispatch }) => {
  const { oauthUrl, client_id, scope } = GITHUB,
        url = `${ oauthUrl }?client_id=${ client_id }&scope=${ scope }`;

  const handleResponse = url => {
    if (url) {
      const code = url.split("code=")[1];
      dispatch({ type: "GET_GITHUB_TOKEN", code });
    }
  }

  console.log('here');
  chrome.identity.launchWebAuthFlow({
    url, interactive: true
  }, handleResponse);
}

const getToken = ({ dispatch }, code) => {
  const promise = ajax({
    url         : GITHUB.lambdaUrl,
    type        : "POST",
    crossDomain : true,
    data        : JSON.stringify({ code }),
    dataType    : 'json',
    success     : handleResponse
  });

  const handleResponse = (data, something, somethingElse) => {
    if (data.access_token) {
      dispatch({ type: "GET_CURRICULUM", token: data.access_token });
    }
  }

  promise.done(handleResponse);
}

export default store => next => action => {
  console.log(action.type);
  switch (action.type) {
    case "GET_GITHUB_CODE":
      getCode(store);
      break;
    case "GET_GITHUB_TOKEN":
      getToken(store, action.code);
      break;
  }
  return next(action);
}
