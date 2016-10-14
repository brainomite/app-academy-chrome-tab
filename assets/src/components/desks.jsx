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


class DesksPairListItem extends React.Component {
	render() {
		return (
			<li>
			<strong>{this.props.desk}</strong> — <Pair pair={this.props.pair} />
			</li>
		);
	}
}


class DesksPairList extends React.Component {
	render() {
		const pairs = []
		let desks = Object.getOwnPropertyNames(this.props.pod.pairs);

		desks.forEach((desk, index) => {
			let key = "pair-" + index;

			pairs.push(
				<DesksPairListItem
					key={key}
					desk={desk}
					pair={this.props.pod.pairs[desk]} />
			);
		});

		return (
			<ul>
				{pairs}
			</ul>
		);
	}
}

export default class extends React.Component {
	render() {
		let pods = this.props.day.pods;
		let pod = pods && pods[this.props.podId];
		let deskClass = this.props.visible ? "is-active" : "";
		let podName, podDeskPairList;

		if(pod){
			podName = (
				<h2>{pod.name} {pod.instructor && "—"} {pod.instructor}</h2>
			);

			podDeskPairList = (
				<DesksPairList pod={pod} />
			);
		}

		return (
			<article className={deskClass} id="desks">
				<span onClick={this.props.onDeskClick}>×</span>
				<h1>{this.props.day.day} Desks</h1>
				{podName}
				{podDeskPairList}
			</article>
		);
	}
}
