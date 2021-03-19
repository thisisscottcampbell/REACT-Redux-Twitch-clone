import React from 'react';
import { connect } from 'react-redux';
import { getStream, editStream } from '../../actions/index';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.getStream(this.props.match.params.id);
	}

	callEdit = (formValues) =>
		this.props.editStream(this.props.match.params.id, formValues);

	render() {
		return this.props.stream ? (
			<div>
				<h3>Edit a Stream</h3>
				<StreamForm
					initialValues={{
						title: this.props.stream.title,
						description: this.props.stream.description,
					}}
					callEdit={this.callEdit}
				/>
			</div>
		) : (
			<div>Loading...</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, editStream })(StreamEdit);
