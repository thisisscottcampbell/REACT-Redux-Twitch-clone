/* eslint-disable no-unused-vars */
import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	GET_STREAM,
	GET_STREAMS,
	DELETE_STREAM,
	EDIT_STREAM,
} from './types';
import streams from '../apis/streams';

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

export const createStream = (formData) => async (dispatch) => {
	const res = await streams.post('/streams', formData);

	dispatch({ type: CREATE_STREAM, payload: res.data });
};

export const getStreams = () => async (dispatch) => {
	const res = await streams.get('/streams');

	dispatch({ type: GET_STREAMS, payload: res.data });
};

export const getStream = (id) => async (dispatch) => {
	const res = await streams.get(`/streams/${id}`);

	dispatch({ type: GET_STREAM, payload: res.data });
};

export const deleteStream = (id) => async (dispatch) => {
	await streams.delete(`streams/${id}`);

	dispatch({ type: DELETE_STREAM, payload: id });
};

export const editStream = (id, formData) => async (dispatch) => {
	const res = await streams.put(`streams/${id}`, formData);

	dispatch({ type: EDIT_STREAM, payload: res.data });
};
