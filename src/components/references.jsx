import React from 'react';
import Navigation from '../components/navigation';
import { Link } from 'react-router';
import styles from '../index.scss';

import Locator from '../components/assets/locator.jpg';
import MySmile from '../components/assets/mysmile.jpg';
import Donau from '../components/assets/wapc.jpg';


export default React.createClass({

	format(variable) {
		return 'url(' + variable + ')'
	},

	render() {

		var references = [
			{name: "Locator", img: Locator, link: '/references/locator', style: {backgroundImage: 'url(' + Locator + ')'}},
			{name: "MySmile", img: MySmile, link: '/references/mysmile', style: {backgroundImage: 'url(' + MySmile + ')'}},
			{name: "Donau2015", img: MySmile, link: '/references/donau', style: {backgroundImage: 'url(' + Donau + ')'}}
		];

		var referenceList = references.map((item) => {
			return (
				<Link to={item.link} style={item.style} key={item.name} className="col-xs-12 col-sm-4 reference-item">
					<h2><span className={styles.center}>{item.name}</span></h2>
				</Link>
			);
		});

		return (
			<div className="container">
				<div className="row">
					<Navigation />
					<div className="col-xs-12 bluebox">
						<h2>References</h2>
					</div>

					<ul>
						{referenceList}
					</ul>

				</div>
			</div>

		)
	}
})
