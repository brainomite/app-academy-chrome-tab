import $ from 'jQuery';

import { DAYS, MONTHS } from 'util/data';

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

const getDay = ({ dispatch, getState }, newCityId) => {
	if (!newCityId && !getState().cityId) {
		dispatch({ type: "GET_CITY" });
		return;
	}

	const state     = getState(),
	      cityId    = newCityId || state.cityId,
	      { podId } = state,
	      stamp     = getStamp(),
	      url       = `http://progress.appacademy.io/api/pairs.json?city_id=${cityId}`;
	
	$.getJSON(url, data => {
		data.dateStamp = stamp.date;

		if(!podId || !data.pods[podId]){
			const podId = Object.keys(data.pods)[0];
			dispatch({ type: "SET_POD_ID", podId });
		}

		dispatch({ type: "SET_DAY", day: data });
	});
}

export default store => next => action => {
	switch (action.type) {
		case "GET_DAY":
			getDay(store);
			break;
		case "SET_CITY_ID":
			getDay(store, action.cityId);
			break;
	}
	return next(action);
}