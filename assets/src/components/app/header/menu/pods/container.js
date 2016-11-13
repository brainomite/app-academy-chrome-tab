import { connect } from 'react-redux';

import View from './view';

const getPod = state => state.day.pods[state.podId].name;

const mapStateToProps = state => ({
  pod: getPod(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);