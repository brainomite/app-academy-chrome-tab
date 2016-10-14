import React from 'react';

class Pair extends React.Component {
	render() {
		const pair = [];

		this.props.pair.forEach((student, index) => {
			let key = "link-" + student.github;
			let url = "https://github.com/" + student.github;

			pair.push(
				<a href={url} key={key}>{student.name}</a>
			);

			if (this.props.pair.length - 1 > index) {
				pair.push(" & ");
			}
		});

		return (
			<span className="pair">{pair}</span>
		)
	}
}

class PageHeaderInfo extends React.Component {
	render() {
		let pods = this.props.day.pods;
		let pod = pods && pods[this.props.podId];
		let pair = pod && pod.pairs[this.props.desk];
		let pairComponent;

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

		this.updateTime = this.updateTime.bind(this);
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
		let currentTime = new Date();
		let currentHours = currentTime.getHours();
		let currentMinutes = currentTime.getMinutes();
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
		let desk = this.props.desk ? this.props.desk : "•";

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
