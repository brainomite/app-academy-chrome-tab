import { applyMiddleware } from 'redux';

import localStoring from './local_storing';
import githubAuth from './github_auth';
import github from './github';
import timer from './timer';
import city from './city';
import desk from './desk';
import day from './day';

const RootMiddleware = applyMiddleware(
  localStoring,
  githubAuth,
  github,
  timer,
  city,
  day,
  desk,
);

export default RootMiddleware;
