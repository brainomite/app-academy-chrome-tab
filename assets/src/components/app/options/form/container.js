import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
	pods   : state.day.pods,
	cityId : state.cityId,
	podId  : state.podId,
	desk   : state.desk
});

const mapDispatchToProps = dispatch => ({
	setPodId  : podId => { dispatch({ type: "SET_POD_ID", podId }) },
	setDesk   : desk => { dispatch({ type: "SET_DESK", desk }) },
	setCityId : cityId => { dispatch({ type: "SET_CITY_ID", cityId }) }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(View);