import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
	pods   : state.day.pods,
	cityId : state.cityId,
	podId  : state.podId,
	desk   : state.desk
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(View);