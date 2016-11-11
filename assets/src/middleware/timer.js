const tick = (dispatch, getState) => () => {
  // TODO: check to make sure this is enough to be accuratly 1 second
  // if not, do some sort of timestamp checking.

  dispatch({ type: "TICK_SECONDS" });
  const { seconds } = getState().timer;
  if (seconds === 0) {
    dispatch({ type: "TICK_MINUTES" });
  }
}

const play = ({ getState, dispatch }) => {
  const { interval } = getState().timer;

  if (!interval) {
    const interval = setInterval(tick(dispatch, getState), 1000);
    dispatch({ type: "SET_INTERVAL", interval });
  }
}

const stop = ({ getState, dispatch }) => {
  const interval = getState().timer.interval;

  if (interval) {
    clearInterval(interval);
    dispatch({ type: "CLEAR_INTERVAL" });
  }
}

export default store => next => action => {
  switch (action.type) {
    case "PLAY":
      play(store);
      break;
    case "STOP":
      stop(store);
      break;
  }
  return next(action);
}