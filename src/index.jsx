import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';

import Vita from './components/vita';
import Navigation from './components/navigation';
import References from './components/references';
import Footer from './components/footer.jsx';
import Impressum from './components/impressum.jsx';

import styles from './index.scss';

import Locator from './components/references/locator.jsx';
import MySmile from './components/references/mysmile.jsx';
import Donau from './components/references/donau2015.jsx';

class App extends React.Component {
	render() {
		return (
			<div style={styles}>
				<Router history={hashHistory}>
					<Route path="/vita" component={Vita}/>
					<Route path="/references" component={References}/>

					<Route path="/references/locator" component={Locator}/>
					<Route path="/references/mysmile" component={MySmile}/>
					<Route path="/references/donau" component={Donau}/>
					<Route path="/impressum" component={Impressum}/>
					<Redirect from="/" to="/vita"/>
				</Router>
				<Footer />
			</div>
		)
	}
}

render(<App/>, document.querySelector("#app"));
