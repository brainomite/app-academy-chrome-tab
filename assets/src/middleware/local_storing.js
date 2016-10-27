export default store => next => action => {
	switch (action.type) {
		case "SET_CITY_ID":
			localStorage['cityId'] = action.cityId;
			break;
		case "CLEAR_CITY_ID":
			localStorage.removeItem("cityId");
			break;
		case "SET_POD_ID":
			localStorage['podId'] = action.podId;
			break;
		case "CLEAR_POD_ID":
			localStorage.removeItem("podId");
			break;
		case "SET_DESK":
			localStorage['desk'] = action.desk;
			break;
		case "CLEAR_DESK":
			localStorage.removeItem("desk");
			break;
		case "SET_DAY":
			localStorage['day'] = JSON.stringify(action.day);
			break;
		case "CLEAR_DAY":
			localStorage.removeItem("day");
			break;
	}
	return next(action);
}