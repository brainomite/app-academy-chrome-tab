import sjcl from 'sjcl';

const notify = () => chrome.notifications.create(
  'desk-hash-changed', 
  { 
    type: "basic", 
    title: "Desk Hash Updated", 
    message: "The desk hash has been updated.", 
    iconUrl: "/assets/img/app-academy-logo-chrome-48.png"
  }
);

const setDeskHash = (password) => {
  const deskRecipe = ["cityId", "desk"]
    .map(key => localStorage[key])
    .reduce((a, b) => a + b);

  const deskHash = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(deskRecipe + password));
  chrome.storage.local.set({ deskHash });
  notify();
}

export default store => next => action => {
  switch (action.type) {
    case "SET_CITY_ID":
      localStorage['cityId'] = action.cityId;
      setDeskHash();
      break;
    case "CLEAR_CITY_ID":
      localStorage.removeItem("cityId");
      break;
    case "SET_POD_ID":
      localStorage['podId'] = action.podId;
      break;
    case "CLEAR_POD_ID":
      localStorage.removeItem("podId");
      break;
    case "SET_DESK":
      localStorage['desk'] = action.desk;
      break;
    case "CLEAR_DESK":
      localStorage.removeItem("desk");
      break;
    case "SET_DAY":
      localStorage['day'] = JSON.stringify(action.day);
      break;
    case "CLEAR_DAY":
      localStorage.removeItem("day");
      break;
    case "SET_CURRICULUM":
      localStorage['curriculum'] = JSON.stringify(action.curriculum);
      break;
    case "CLEAR_CURRICULUM":
      localStorage.removeItem("curriculum");
      break;
    case "SET_DESKTOP_HASH":
      setDeskHash(action.password);
      break;
  }
  return next(action);
}
