import React from 'react';

const handleResponse = setToken => redirectUrl => {
  const githubToken = redirectUrl.split("code=")[1];
}

const getGithub = setToken => () => {
  chrome.identity.launchWebAuthFlow({
    url: "https://github.com/login/oauth/authorize?client_id=1a1e117ad08088ce339b",
    interactive: true
  }, handleResponse(setToken));
}

export default ({ setToken }) => (
  <div className="curriculum">
    <h1 onClick={ getGithub(setToken) }>Sign in to Github to view the daily curriculum.</h1>
  </div>
);
