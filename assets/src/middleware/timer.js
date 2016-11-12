const tick = (dispatch, getState) => {
  const seconds = getState().timer.seconds,
        then = Math.floor(Date.now() / 1000) - seconds;

  return () => {
    const now = Math.floor(Date.now() / 1000);

    dispatch({
      type : "SET_SECONDS", 
      seconds : now - then
    });
  }
}

const play = ({ getState, dispatch }) => {
  const { interval } = getState().timer;

  if (!interval) {
    const interval = setInterval(tick(dispatch, getState), 1000);
    dispatch({ type: "SET_INTERVAL", interval });
  }
}

const pause = ({ getState, dispatch }) => {
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
    case "PAUSE":
      pause(store);
      break;
  }
  return next(action);
}