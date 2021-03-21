import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from '../streams/StreamForm';

const StreamCreate = ({ createStream }) => {
	const callCreate = (formValues) => createStream(formValues);

	return (
		<div>
			<h3>Create A Stream</h3>
			<StreamForm callCreate={callCreate} />
		</div>
	);
};

export default connect(null, { createStream })(StreamCreate);
