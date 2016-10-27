import {combineReducers} from 'redux';

import cityId from './city_id';
import podId from './pod_id';
import day from './day';
import desk from './desk';

import modalsDesks from './modals/desks';
import modalsOptions from './modals/options';

const RootReducer = combineReducers({
	cityId,
	podId,
	day,
	desk,
	modals: combineReducers({
		desks: modalsDesks,
		options: modalsOptions
	})
});

export default RootReducer;