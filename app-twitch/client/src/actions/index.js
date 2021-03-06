/* eslint-disable no-unused-vars */
import streams from '../apis/streams';
import history from '../history';
import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	GET_STREAM,
	GET_STREAMS,
	DELETE_STREAM,
	EDIT_STREAM,
} from './types';

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};

export const createStream = (formData) => async (dispatch, getState) => {
	const { userId } = getState().auth;

	const res = await streams.post('/streams', { ...formData, userId });

	dispatch({ type: CREATE_STREAM, payload: res.data });
	history.push('/');
};

export const getStreams = () => async (dispatch) => {
	const response = await streams.get('/streams');

	dispatch({ type: GET_STREAMS, payload: response.data });
};

export const getStream = (id) => async (dispatch) => {
	const response = await streams.get(`/streams/${id}`);

	dispatch({ type: GET_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
	const response = await streams.patch(`/streams/${id}`, formValues);

	dispatch({ type: EDIT_STREAM, payload: response.data });
	history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
	await streams.delete(`/streams/${id}`);

	dispatch({ type: DELETE_STREAM, payload: id });

	history.push('/');
};
