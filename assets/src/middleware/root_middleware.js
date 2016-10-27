import { applyMiddleware } from 'redux';

import initializer from './initializer';
import localStoring from './local_storing';
import city from './city';
import day from './day';

const RootMiddleware = applyMiddleware(
	initializer,
	localStoring,
	city,
	day
);

export default RootMiddleware;