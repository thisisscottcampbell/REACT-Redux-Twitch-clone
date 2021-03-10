import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamCreate = (props) => {
	const renderInput = (formProps) => {
		return (
			<div className="field">
				{formProps.label}:
				<input
					onChange={formProps.input.onChange}
					value={formProps.input.value}
				/>
			</div>
		);
	};

	const onSubmit = (data) => {
		console.log(data);
	};

	const validate = (data) => {
		const errors = {};

		if (!data.title) errors.title = 'You must enter a title';

		if (!data.description) errors.description = 'You must enter a description';

		return errors;
	};

	return (
		<div>
			<form onSubmit={props.handleSubmit(onSubmit)} className="ui form">
				<Field name="title" component={renderInput} label="Title" />
				<Field name="description" component={renderInput} label="Description" />
				<button className="ui button primary">Submit</button>
			</form>
		</div>
	);
};

export default reduxForm({
	form: 'streamCreate',
})(StreamCreate);
