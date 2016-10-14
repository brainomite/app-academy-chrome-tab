import React from 'react';

import PageHeader from './page_header';
import PageLinks from './page_links';

export default class extends React.Component {
	render() {
		return (
			<div className="wrap">
				<PageHeader
					desk={this.props.desk}
					podId={this.props.podId}
					day={this.props.day}
					onDeskClick={this.props.onDeskClick} />

				<PageLinks ord={this.props.day.ord} links={this.props.links} />
				<h3 className="localhost">
					<a href="http://localhost:3000/">Localhost:3000</a>
				</h3>
			</div>
		);
	}
}