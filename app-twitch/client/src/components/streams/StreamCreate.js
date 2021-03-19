import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
	callCreate = (formValues) => this.props.createStream(formValues);

	render() {
		console.log('create props', this.props);
		return (
			<div>
				<h3>Create A Stream</h3>
				<StreamForm callCreate={this.callCreate} />
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
