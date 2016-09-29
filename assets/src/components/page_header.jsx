import React from 'react';

class PageHeaderInfo extends React.Component {
	render() {
		var pods = this.props.day.pods;
		var pod = pods && pods[this.props.podId];
		var pair = pod && pod.pairs[this.props.desk];
		var pairComponent;

		if(pair){
			pairComponent = (
				<Pair pair={pair} />
			);
		}

		return (
			<div id="info">
				<p>{this.props.day.dateStamp} — {this.props.day.day} {pair && "—"} {pairComponent}</p>
			</div>
		);
	}
}


class PageHeaderClock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: "0:00"
		}
	}

	componentWillMount() {
		this.interval = null;
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	componentDidMount() {
		this.updateTime();
		this.interval = setInterval(this.updateTime, 10000);
	}

	updateTime() {
		var currentTime = new Date();
		var currentHours = currentTime.getHours();
		var currentMinutes = currentTime.getMinutes();
		currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;

		this.setState({time: currentHours + ":" + currentMinutes});
	}

	render() {
		return (
			<h1 id="clock">{this.state.time}</h1>
		);
	}
}

export default class extends React.Component {
	render() {
		var desk = this.props.desk ? this.props.desk : "•";

		return (
			<header className="clock-wrap">
				<h2 id="desk" onClick={this.props.onDeskClick}>{desk}</h2>
				<PageHeaderClock />
				<PageHeaderInfo
					desk={this.props.desk}
					podId={this.props.podId}
					day={this.props.day} />
			</header>
		);
	}
}