import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
	pods   : state.day.pods,
	cityId : state.cityId,
	podId  : state.podId,
	desk   : state.desk
});

const mapDispatchToProps = dispatch => ({
	setPodId : podId => { dispatch({ type: "SET_POD_ID", podId }) }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(View);