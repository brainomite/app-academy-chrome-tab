import { connect } from 'react-redux';

import View from './view';
const mapStateToProps = state => {
  return ({
    day           : state.day.day,
    pods          : state.day.pods,
    podId         : state.podId,
    visible       : state.modals.desks,
    halloweenImg  : state.modals.halloween,
  });
};

const mapDispatchToProps = dispatch => ({
  hideDesks : () => { dispatch({ type: "SET_DESKS_HIDE" }); },
  set       : desk => { dispatch({ type: "SET_DESK", desk }); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
