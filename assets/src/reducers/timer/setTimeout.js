export default (state = null, action) => {
    switch (action.type) {
        case "SET_TIMEOUT":
            return action.timeout;
        case "CLEAR_TIMEOUT":
            return null;
    }
    return state;
};