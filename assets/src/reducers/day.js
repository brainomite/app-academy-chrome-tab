export default (state = null, action) => {
	switch (action.type) {
		case "SET_DAY":
			return action.day;
		case "CLEAR_DAY":
			return null;
	}
	return state;
};