import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
  pods: state.day.pods
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);