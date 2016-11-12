import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
	minutes : state.timer.minutes,
	seconds : state.timer.seconds
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
