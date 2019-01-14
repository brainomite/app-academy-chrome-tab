import { connect } from 'react-redux';

import View from './view';

const mapDispatchToProps = dispatch => ({
    set: (time) => dispatch({ type: "SET_ALARM", alarmInterval: time }),
});

const mapStateToProps = ({ timer }) => ({
    playing: timer.playing,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View);