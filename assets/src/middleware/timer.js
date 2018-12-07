const notify = (dispatch) =>{
  let options, notification;
  if (!window.Notification) {
    return;
  }
  options = {
    body: "Time to switch Driver/Navigator roles",
    icon: "/assets/img/app-academy-logo-chrome-48.png"
  };
  document.title = 'Switch Drivers!';
  notification = new Notification('New question', options);
  setTimeout(() => notification.close(notification), 10000)
  setTimeout(() => switchDriver(dispatch), 1000)
}

const switchDriver = (dispatch) => {
  dispatch({ type: "PAUSE" })
  if (confirm("Click OK to restart the timer and switch Driver/Navigator roles.")) {
    dispatch({ type: "SET_SECONDS", seconds: 0 })
    dispatch({ type: "PLAY" })
    document.title = 'App Academy';
  } else {
    dispatch({ type: "PLAY" })
    document.title = 'App Academy';
  }
}

const tick = (dispatch, getState) => {
  const seconds = getState().timer.seconds,
        then = Date.now() - (seconds * 1000);
  return () => {
    const now = Date.now(),
          seconds = Math.floor((now - then) / 1000);
    if (seconds === getState().timer.alarm * 60) { 
      notify(dispatch);
     }else {
       dispatch({ type : "SET_SECONDS", seconds });
     }

  }
};

const play = ({ getState, dispatch }) => {
  const { interval } = getState().timer;
  if (!interval) {
    const interval = setInterval(tick(dispatch, getState), 1000);
    dispatch({ type: "SET_INTERVAL", interval });
  } else {
    setTimeout(() => tick(dispatch,getState), 1000)
  }
};

const pause = ({ getState, dispatch }) => {
  const interval = getState().timer.interval;
  if (interval) {
    clearInterval(interval);
    dispatch({ type: "CLEAR_INTERVAL" });
  }
};

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
};
