import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStream } from '../../actions';
import Modal from '../Modal';
import ReactDOM from 'react-dom';
import history from '../../history';

const StreamDelete = ({ match, getStream, stream }) => {
	const actions = (
		<React.Fragment>
			<button className="ui primary button">Delete</button>
			<button className="ui button">Cancel</button>
		</React.Fragment>
	);

	const handleDismiss = () => history.push('/');

	useEffect(() => getStream(match.params.id), []);

	return stream ? (
		<div>
			Delete Stream
			<Modal
				title="Delete Stream"
				content={`Are your sure you want to delete stream: ${stream.title}?`}
				actions={actions}
				handleDismiss={handleDismiss}
			/>
		</div>
	) : (
		<div>...loading</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream })(StreamDelete);
