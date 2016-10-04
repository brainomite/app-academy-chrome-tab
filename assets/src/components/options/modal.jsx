import React from 'react';

import Form from './form';

export default class extends React.Component {
	render() {
		let optionClass = this.props.visible ? "is-active" : "";

		return (
			<article className={optionClass} id="options">
				<Form />
			</article>
		);
	}
};