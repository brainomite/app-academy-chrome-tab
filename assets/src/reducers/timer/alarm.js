export default (state = 15, action) => {
    switch (action.type) {
        case "SET_ALARM":
            return action.alarmInterval;
    }
    return state;
};