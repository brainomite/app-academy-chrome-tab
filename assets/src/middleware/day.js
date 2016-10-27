import $ from 'jQuery';

const getStamp = () => {
	const now       = new Date(),
	      hours     = now.getHours(),
	      dateStamp = DAYS[now.getDay()].substring(0,3) + ", " +
	                  MONTHS[now.getMonth()].substring(0,3) + " " +
	                  now.getDate();

	return {
		date: dateStamp,
		time: dateStamp + ", " + hours
	};
}

const getDay = ({ dispatch, getState }) => {
	const { cityId, podId, day } = getState(),
	      url = `http://progress.appacademy.io/api/pairs.json?city_id=${cityId}`,
	      stamp = getStamp();

	if(!day || day.dateStamp != stamp.date){
		$.getJSON(url, (data) => {
			data.dateStamp = stamp.date;

			if(!podId || !data.pods[podId]){
				const podId = Object.keys(data.pods)[0];
				dispatch({ type: "SET_POD_ID", podId });
			}

			dispatch({ type: "SET_DAY", day: data });
		});
	}

	return day;
}

export default store => next => action => {
	switch (action.type) {
		case "GET_DAY":
			getDay(store);
			break;
	}
	return next(action);
}