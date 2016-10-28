import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	showOptions : () => { dispatch({ type: "SET_OPTIONS_VISIBLE" }) }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(View);