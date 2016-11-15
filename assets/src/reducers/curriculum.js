const parseCurriculum = () => {
	if (!localStorage['curriculum']) {
		return null;
	} else {
		return JSON.parse(localStorage['curriculum']);
	}
}

export default (state = parseCurriculum(), action) => {
  switch (action.type) {
    case "SET_CURRICULUM":
      return action.curriculum;
    case "CLEAR_CURRICULUM":
      return null;
  }
  return state;
};
