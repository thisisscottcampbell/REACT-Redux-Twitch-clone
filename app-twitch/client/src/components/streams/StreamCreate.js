import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStream } from '../../actions';

const StreamCreate = (props) => {
	const renderInput = (formProps) => {
		return (
			<div
				className={
					formProps.meta.error && formProps.meta.touched
						? 'field error'
						: 'field'
				}
			>
				{formProps.label}:
				<input
					onChange={formProps.input.onChange}
					value={formProps.input.value}
				/>
				{renderError(formProps.meta)}
			</div>
		);
	};

	const renderError = (data) => {
		if (data.touched && data.error) {
			return (
				<div className="ui error message">
					<div className="header">{data.error}</div>
				</div>
			);
		}
	};

	const onSubmit = (data) => {
		props.createStream(data);
	};

	return (
		<div>
			<form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
				<Field name="title" component={renderInput} label="Title" />
				<Field name="description" component={renderInput} label="Description" />
				<button className="ui button primary">Submit</button>
			</form>
		</div>
	);
};

const validate = (data) => {
	const errors = {};

	if (!data.title) errors.title = 'You must enter a title';

	if (!data.description) errors.description = 'You must enter a description';

	return errors;
};

const wrappedForm = reduxForm({
	form: 'streamCreate',
	validate,
})(StreamCreate);

export default connect(null, { createStream })(wrappedForm);
