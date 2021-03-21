import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from '../components/streams/StreamList';
import StreamCreate from '../components/streams/StreamCreate';
import StreamEdit from '../components/streams/StreamEdit';
import StreamDelete from '../components/streams/StreamDelete';
import StreamDetail from '../components/streams/StreamDetail';
import Header from '../components/Header';
import history from '../history';

function App() {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={StreamList} />
						<Route path="/streams/new" exact component={StreamCreate} />
						<Route path="/streams/edit/:id" exact component={StreamEdit} />
						<Route path="/streams/delete/:id" exact component={StreamDelete} />
						<Route path="/streams/stream/:id" exact component={StreamDetail} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
