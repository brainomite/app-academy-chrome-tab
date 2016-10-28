import getStamp from 'util/dateStamp';

const checkLocalDay = () => {
	if (!localStorage["day"]) { return null; }

	const day = JSON.parse(localStorage["day"]);
	
	if (day.dateStamp !== getStamp().date) {
		return null;
	} else {
		return day;
	}
}

export default (state = checkLocalDay(), action) => {
	switch (action.type) {
		case "SET_DAY":
			return action.day;
		case "CLEAR_DAY":
			return null;
	}
	return state;
};