export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRICULUM":
      return action.curriculum;
    case "CLEAR_CURRICULUM":
      return null;
  }
  return state;
};
