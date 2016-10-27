export default (state = localStorage["podId"], action) => {
	switch (action.type) {
		case "SET_POD_ID":
			return action.pod;
		case "CLEAR_POD":
			return null;
	}
	return state;
};