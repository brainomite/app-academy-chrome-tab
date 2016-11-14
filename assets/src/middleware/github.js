import { ajax } from 'jquery';

import { GITHUB } from 'util/settings';

const getReadme = ({ dispatch, getState }) => {
  
}

export default store => next => action => {
  switch (action.type) {
    case "GET_DAILY_README":
      getReadme(store);
      break;
  }
  return next(action);
}
