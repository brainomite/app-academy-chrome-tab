import { applyMiddleware } from 'redux';

import localStoring from './local_storing';
import city from './city';
import day from './day';

const RootMiddleware = applyMiddleware(
	localStoring,
	city,
	day
);

export default RootMiddleware;