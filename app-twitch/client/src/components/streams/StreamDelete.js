import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import ReactDOM from 'react-dom';
import history from '../../history';

const StreamDelete = ({ match, getStream, deleteStream, stream }) => {
	const { id } = match.params;

	const actions = (
		<React.Fragment>
			<button onClick={() => deleteStream(id)} className="ui primary button">
				Delete
			</button>
			<Link to="/" className="ui button">
				Cancel
			</Link>
		</React.Fragment>
	);

	const handleDismiss = () => history.push('/');

	useEffect(() => getStream(id), []);

	return stream ? (
		<Modal
			title="Delete Stream"
			content={`Are your sure you want to delete stream: ${stream.title}?`}
			actions={actions}
			handleDismiss={handleDismiss}
		/>
	) : (
		<div>...getting your stream</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, deleteStream })(
	StreamDelete
);
