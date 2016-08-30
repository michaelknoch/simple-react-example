import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';

import Vita from './components/vita';
import Navigation from './components/navigation';
import References from './components/references';
import Footer from './components/footer.jsx';
import styles from './index.scss';

class App extends React.Component {
	render() {
		return (
			<div style={styles}>
				<Router history={hashHistory}>
					<Route path="/vita" component={Vita}/>
					<Route path="/references" component={References}/>
					<Redirect from="/" to="/vita"/>
				</Router>
				<Footer />
			</div>
		)
	}
}

render(<App/>, document.querySelector("#app"));
