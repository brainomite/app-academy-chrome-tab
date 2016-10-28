export default store => next => action => {
	switch (action.type) {
		case "SET_POD_ID":
			store.dispatch({ type: "SET_DESK", desk: "1" });
			break;
	}
	return next(action);
}