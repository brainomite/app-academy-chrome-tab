export default (state = false, action) => {
  switch (action.type) {
    case "SET_DESK_HASH_VISIBLE":
      return false;
    case "SET_DESKS_VISIBLE":
      return false;
    case "HIDE_MODALS":
      return false;
    case "SHOW_SCARY_IMG":
      return true;
  }
  return state;
};
