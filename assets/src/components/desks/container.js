import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
	day     : state.day.day,
	pods    : state.day.pods,
	visible : state.modals.desks,
	podId   : state.podId
});

const mapDispatchToProps = dispatch => ({
	hideDesks : () => { dispatch({ type: "SET_DESKS_HIDE" }) }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(View);