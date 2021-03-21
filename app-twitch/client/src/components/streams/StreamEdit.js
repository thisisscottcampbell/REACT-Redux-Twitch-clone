import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStream, editStream } from '../../actions/index';
import StreamForm from './StreamForm';

const StreamEdit = ({ getStream, editStream, match, stream }) => {
	const { id } = match.params;

	const callEdit = (formValues) => editStream(id, formValues);

	useEffect(() => getStream(id), []);

	return stream ? (
		<div>
			<h3>Edit Your Stream</h3>
			<StreamForm
				initialValues={{
					title: stream.title,
					description: stream.description,
				}}
				callEdit={callEdit}
			/>
		</div>
	) : (
		<div>Loading...</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, editStream })(StreamEdit);
