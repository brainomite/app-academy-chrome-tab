import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
  desk: state.desk
});

const mapDispatchToProps = dispatch => ({
 showDesks: () => showImage(dispatch)
});

// const mapDispatchToProps = dispatch => ({
//   showDesks: () => { dispatch({ type: "SET_DESKS_VISIBLE" }); }
// });

const showImage = dispatch => {
  dispatch({ type: 'SHOW_SCARY_IMG' });
  setTimeout(() => { dispatch({ type: "SET_DESKS_VISIBLE" }); }, 500);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
