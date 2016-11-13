import { connect } from 'react-redux';

import View from './view';
import { CITIES } from 'util/settings';

const getPod = state => state.day.pods[state.podId].name;
const getCityAbbr = state => CITIES[state.cityId].abbr;

const mapStateToProps = state => ({
  city : getCityAbbr(state),
  pod  : getPod(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);