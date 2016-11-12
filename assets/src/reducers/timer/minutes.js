import { MINS_IN_SESSION } from 'util/settings';

export default (state = 0, action) => {
  switch (action.type) {
    case "RESET_MINUTES":
      return 0;
    case "TICK_MINUTES":
      return state + 1;
    case "SET_MINUTES":
      return action.minutes;
  }
  return state;
};
