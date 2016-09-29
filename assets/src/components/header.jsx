import React from 'react';

export default class extends React.Component {
	render() {
		let city = this.props.cityId == 1 ? "NYC" : "SF";
		let weatherLeft, weatherRight;

		if(this.props.weather.main){
			let degreeCel = parseInt(this.props.weather.main.temp);
			let degreeFar = parseInt((degreeCel * 9 / 5) + 32);

			weatherLeft = (
				<em className="weather-left">
					{city} / {this.props.weather.weather[0].main}
					<span className="weather-hidden"> — {this.props.weather.weather[0].description}</span>
				</em>
			);

			weatherRight = (
				<em className="weather-right">
					<span className="weather-hidden">{degreeFar} &deg; F / </span>
					{degreeCel} &deg; C
				</em>
			);
		}

		return (
			<header className="header group">
				{weatherLeft}
				{weatherRight}

				<h1 className="logo">
					<a href="http://www.appacademy.io/">App Academy</a>
				</h1>
			</header>
		);
	}
}
