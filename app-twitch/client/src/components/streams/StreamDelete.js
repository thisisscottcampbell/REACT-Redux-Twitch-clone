import React from 'react';
import Modal from '../Modal';
import ReactDOM from 'react-dom';
import history from '../../history';

const StreamDelete = () => {
	const actions = (
		<React.Fragment>
			<button className="ui primary button">Delete</button>
			<button className="ui button">Cancel</button>
		</React.Fragment>
	);

	const handleDismiss = () => history.push('/');

	return (
		<div>
			Stream Delete
			<Modal
				title="Delete Stream"
				content="Are your sure you want to delte this stream?"
				actions={actions}
				handleDismiss={handleDismiss}
			/>
		</div>
	);
};

export default StreamDelete;
