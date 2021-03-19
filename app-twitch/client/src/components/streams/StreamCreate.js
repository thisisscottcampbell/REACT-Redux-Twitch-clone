import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
	handleSubmit = (formValues) => this.props.createStream(formValues);

	render() {
		return (
			<div>
				<h3>Create A Stream</h3>
				<StreamForm handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
