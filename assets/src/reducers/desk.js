export default (state = localStorage['desk'], action) => {
	switch (action.type) {
		case "SET_DESK":
			return action.desk;
		case "CLEAR_DESK":
			return null;
	}
	return state;
};