import {combineReducers} from 'redux';

import curriculum from './curriculum';
import cityId from './city_id';
import podId from './pod_id';
import day from './day';
import desk from './desk';

import modalsDesks from './modals/desks';
import modalsOptions from './modals/options';

import timerPlaying from './timer/playing';
import timerSeconds from './timer/seconds';
import timerInterval from './timer/interval';

const RootReducer = combineReducers({
  curriculum,
  cityId,
  podId,
  day,
  desk,
  modals: combineReducers({
    desks: modalsDesks,
    options: modalsOptions
  }),
  timer: combineReducers({
    playing: timerPlaying,
    seconds: timerSeconds,
    interval: timerInterval
  })
});

export default RootReducer;
