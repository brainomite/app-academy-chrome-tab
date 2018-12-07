import { connect } from 'react-redux';

import View from './view';

// const mapStateToProps = state => ({
//     minutes: Math.floor(state.timer.seconds / 60),
//     seconds: state.timer.seconds % 60
// });

const mapDispatchToProps = dispatch => ({
    set: (time) => dispatch({ type: "SET_ALARM", alarmInterval: time }),
});

export default connect(
    null,
    mapDispatchToProps
)(View);