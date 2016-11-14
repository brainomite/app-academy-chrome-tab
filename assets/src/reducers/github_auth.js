export default (state = null, action) => {
  switch (action.type) {
    case "SET_GITHUB_TOKEN":
      return action.token;
    case "CLEAR_GITHUB_TOKEN":
      return null;
  }
  return state;
};
