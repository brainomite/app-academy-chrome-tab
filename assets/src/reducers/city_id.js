export default (state = (localStorage["cityId"] || 1), action) => {
	switch (action.type) {
		case "SET_CITY_ID":
			localStorage["cityId"] = action.cityId;
			return action.cityId;
		case "CLEAR_CITY_ID":
			return null;
	}
	return state;
};