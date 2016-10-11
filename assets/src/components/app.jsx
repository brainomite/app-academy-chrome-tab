import React from 'react';
import $ from 'jquery';

import Header from './header';
import Corners from './corners';
import Desks from './desks';
import Page from './page';
import Options from './options/modal';

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cityId: localStorage["cityId"],
			podId: localStorage["podId"],
			desk: localStorage["desk"],
			day: this.getDay(),
			deskVisible: false,
			optionsVisible: false
		};

		this.handleDeskClick = this.handleDeskClick.bind(this);
		this.handleOptionsClick = this.handleOptionsClick.bind(this);
		this.optionsChanged = this.optionsChanged.bind(this);
	}

	getCityId() {
		return ((this.state && this.state.cityId) || localStorage["cityId"] || 1);
	}

	getCityByIP(callback) {
		if((this.state && this.state.cityId) || localStorage["cityId"]){
			callback && callback.apply(this);
			return;
		};

		let sfLong = -122;
		let nycLong = -74;
		let midLong = parseInt((sfLong + nycLong) / 2);

		$.getJSON("http://ipinfo.io/json", (data) => {
				let long = parseInt(data.loc.split(",")[1]);
				this.setCityId((long > midLong) ? 1 : 2, callback);
		});
	}

	setCityId(cityId, callback) {
		localStorage["cityId"] = cityId;
		localStorage.removeItem("podId");

		this.setState({
			cityId: cityId,
			podId: null
		},
		callback);
	}

	getDay() {
		let url = "http://progress.appacademy.io/api/pairs.json?city_id=" + this.getCityId();
		let day = JSON.parse(localStorage["day"] || "{}");

		if(!day || day.dateStamp != this.props.stamp.date){
			$.getJSON(url, (data) => {
				data.dateStamp = this.props.stamp.date;
				localStorage["day"] = JSON.stringify(data);

				if(!this.state.podId || !data.pods[this.state.podId]){
					let podId = Object.keys(data.pods)[0];
					localStorage["podId"] = podId;
					this.setState({podId: podId});
				}

				this.setState({day: data});
			});
		}

		return day;
	}

	componentDidMount() {
		this.getCityByIP();
	}

	handleDeskClick() {
		this.setState({
			deskVisible: !this.state.deskVisible,
			optionsVisible: false
		});
	}

	handleOptionsClick() {
		this.setState({
			optionsVisible: !this.state.optionsVisible,
			deskVisible: false
		});
	}

	optionsChanged(options) {
		// This is bad form, we need redux in here
		this.setState(options);
	}

	render() {
		return(
			<div>
				<Header
					cityId={this.state.cityId} />

				<Corners
					corners={this.props.links.corners} />

				<Desks
					podId={this.state.podId}
					day={this.state.day}
					visible={this.state.deskVisible}
					onDeskClick={this.handleDeskClick} />

				<Page
					desk={this.state.desk}
					podId={this.state.podId}
					day={this.state.day}
					links={this.props.links.main}
					onDeskClick={this.handleDeskClick} />

				<Options
					changed={this.optionsChanged}
					onOptionsClick={this.handleOptionsClick}
					visible={this.state.optionsVisible} />

				<footer>
					<span onClick={this.handleOptionsClick}>Options</span>
				</footer>
			</div>
		)
	};

};
