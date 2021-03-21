import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStreams } from '../../actions';

const StreamList = ({ streams, currUserId, isSignedIn, getStreams }) => {
	const admins = (stream) => {
		if (stream.userId === currUserId)
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`} className="ui button primary">
						Edit
					</Link>
					<Link
						to={`/streams/delete/${stream.id}`}
						className="ui button negative"
					>
						Delete
					</Link>
				</div>
			);
	};

	const renderList = () => {
		return streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					{admins(stream)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						<Link to={`/streams/stream/${stream.id}`} className="header">
							{stream.title}
						</Link>
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	};

	const createStreamLink = () => {
		if (isSignedIn) {
			return (
				<div style={{ textAlign: 'right' }}>
					<Link to="/streams/new" className="ui button primary">
						Create Stream
					</Link>
				</div>
			);
		}
	};

	const list = renderList();
	const link = createStreamLink();

	useEffect(() => getStreams, []);

	return (
		<div>
			<h2>Streams</h2>
			<div className="ui celled list">{list}</div>
			{link}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		currUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { getStreams })(StreamList);
