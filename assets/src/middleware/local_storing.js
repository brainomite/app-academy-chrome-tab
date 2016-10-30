import sjcl from 'sjcl';

const setDeskHash = () => {
	const deskRecipe = ["cityId", "desk", "password"]
		.map(key => localStorage[key])
		.reduce((a, b) => a + b);

	const deskHash = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(deskRecipe));
	chrome.storage.local.set({ deskHash });
}

export default store => next => action => {
	switch (action.type) {
		case "SET_CITY_ID":
			localStorage['cityId'] = action.cityId;
			setDeskHash();
			break;
		case "CLEAR_CITY_ID":
			localStorage.removeItem("cityId");
			setDeskHash();
			break;
		case "SET_POD_ID":
			localStorage['podId'] = action.podId;
			break;
		case "CLEAR_POD_ID":
			localStorage.removeItem("podId");
			break;
		case "SET_DESK":
			localStorage['desk'] = action.desk;
			setDeskHash();
			break;
		case "CLEAR_DESK":
			localStorage.removeItem("desk");
			setDeskHash();
			break;
		case "SET_DAY":
			localStorage['day'] = JSON.stringify(action.day);
			break;
		case "CLEAR_DAY":
			localStorage.removeItem("day");
			break;
		case "SET_PASSWORD":
			localStorage['password'] = action.password;
			setDeskHash();
			break;
		case "CLEAR_PASSWORD":
			localStorage.removeItem("password");
			setDeskHash();
			break;
	}
	return next(action);
}