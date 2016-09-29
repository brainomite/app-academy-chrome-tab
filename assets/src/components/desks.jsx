import React from 'react';

class Pair extends React.Component {
	render() {
		var pair = [];

		this.props.pair.forEach(function(student, index){
			var key = "link-" + student.github;
			var url = "https://github.com/" + student.github;

			pair.push(
				<a href={url} key={key}>{student.name}</a>
			);

			if (this.props.pair.length - 1 > index) {
				pair.push(" & ");
			}
		}.bind(this));

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
		var pairs = []
		var desks = Object.getOwnPropertyNames(this.props.pod.pairs);

		desks.forEach(function(desk, index){
			var key = "pair-" + index;

			pairs.push(
				<DesksPairListItem
					key={key}
					desk={desk}
					pair={this.props.pod.pairs[desk]} />
			);
		}.bind(this));

		return (
			<ul>
				{pairs}
			</ul>
		);
	}
}

export default class extends React.Component {
	render() {
		var pods = this.props.day.pods;
		var pod = pods && pods[this.props.podId];
		var deskClass = this.props.visible ? "is-active" : "";
		var podName, podDeskPairList;

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