import { applyMiddleware } from 'redux';

import localStoring from './local_storing';
import city from './city';
import desk from './desk';
import day from './day';

const RootMiddleware = applyMiddleware(
  localStoring,
  city,
  day,
  desk,
);

export default RootMiddleware;
