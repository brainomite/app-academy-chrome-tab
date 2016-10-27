const initialize = ({ dispatch }) => {
	dispatch({ type: "GET_CITY" });
	dispatch({ type: "GET_DAY" });
}

export default store => next => action => {
	switch (action.type) {
		case "INITIALIZE":
			initialize(store);
			break;
	}
	return next(action);
}