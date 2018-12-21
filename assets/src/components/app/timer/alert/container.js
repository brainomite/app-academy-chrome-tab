import { connect } from 'react-redux';

import View from './view';

const mapDispatchToProps = dispatch => ({
    set: (time) => dispatch({ type: "SET_ALARM", alarmInterval: time }),
});

export default connect(
    null,
    mapDispatchToProps
)(View);