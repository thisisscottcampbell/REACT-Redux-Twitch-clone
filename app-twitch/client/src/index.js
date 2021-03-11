import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './Twitch/App';
import reducers from './reducers';

const componseEnhancers =
	window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	componseEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
