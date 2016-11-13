import { connect } from 'react-redux';

import View from './view';
import { CITIES } from 'util/settings';

const getCityAbbr = state => CITIES[state.cityId].abbr;

const mapStateToProps = state => ({
  city: getCityAbbr(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);