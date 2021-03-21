import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStream } from '../../actions';

const StreamDetail = ({ match, getStream, stream }) => {
	const { id } = match.params;

	useEffect(() => getStream(id), []);
	return stream ? (
		<div>
			<h2>{stream.title}</h2>
			<h5>{stream.description}</h5>
		</div>
	) : (
		<div>...getting your stream</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream })(StreamDetail);
