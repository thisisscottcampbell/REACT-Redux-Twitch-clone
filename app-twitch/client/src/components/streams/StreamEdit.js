import React from 'react';
import { connect } from 'react-redux';
import { getStream } from '../../actions/index';

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.getStream(this.props.match.params.id);
	}

	render() {
		return this.props.editStream ? (
			<div>
				<h1>{this.props.editStream.title}</h1>
			</div>
		) : (
			<div>Loading...</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { editStream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream })(StreamEdit);
