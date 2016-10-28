import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
	cityId : state.cityId,
	podId  : state.podId,
	desk   : state.desk
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(View);