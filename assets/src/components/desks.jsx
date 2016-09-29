import React from 'react';

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