import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
  visible : state.modals.options,
});

const mapDispatchToProps = dispatch => ({
  hideOptions : () => { dispatch({ type: "SET_OPTIONS_HIDE" }) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
