const INIT_STATE = {
	isSignedIn: null,
};

const authReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return { ...state, isSignedIn: true };
		case 'SIGN_OUT':
			return { ...state, isSignedIn: false };
		default:
			return state;
	}
};

export default authReducer;
