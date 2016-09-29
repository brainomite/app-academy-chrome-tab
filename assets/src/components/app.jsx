import React from 'react';
import $ from 'jquery';

import Header from './header';
import Corners from './corners';
import Desks from './desks';
import Page from './page';

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cityId: localStorage["cityId"],
			podId: localStorage["podId"],
			desk: localStorage["desk"],
			weather: this.getWeather(),
			day: this.getDay(),
			deskVisible: false
		};
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

	getWeather() {
		let weatherId = (this.getCityId() == 2) ? 5391959 : 5128581;
		let url = "http://api.openweathermap.org/data/2.5/weather?id=" + weatherId + "&units=metric";
		let weather = JSON.parse(localStorage["weather"] || "{}");

		if(!weather || weather.timeStamp != this.props.stamp.time){
			$.getJSON(url, (data) => {
				data.timeStamp = this.props.stamp.time;

				localStorage["weather"] = JSON.stringify(data);
				this.setState({weather: data});
			});
		}

		return weather;
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

	handleDeskClick(event) {
		this.setState({
			deskVisible: !this.state.deskVisible
		});
	}

	render() {
		return(
			<div>
				<Header
					cityId={this.state.cityId}
					weather={this.state.weather} />

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

				<footer>
					<a href="options.html">Options</a>
				</footer>
			</div>
		)
	};

};
