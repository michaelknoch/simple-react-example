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
			{key: "Locator", img: Locator, link: '/references/locator', style: {backgroundImage: 'url(' + Locator + ')'}},
			{key: "MySmile", img: MySmile, link: '/references/mysmile', style: {backgroundImage: 'url(' + MySmile + ')'}},
			{key: "Donau2015", img: MySmile, link: '/references/donau', style: {backgroundImage: 'url(' + Donau + ')'}}
		];

		var referenceList = references.map((item) => {
			return (
				<div key={item.key} className="col-xs-12 col-sm-4 spacetop">
					<Link to={item.link} style={item.style} className="reference-item">
						<h2><span className={styles.center}>{item.key}</span></h2>
					</Link>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">
					<Navigation />
					<div className="col-xs-12">
						<h2>Referenzen</h2>
					</div>

					<ul>
						{referenceList}
					</ul>

					<div className="uppercase spacetop col-xs-12">
						<h2 className="tiny"><a target="_blank" href="http://mica-design.de/work">weitere Referenzen</a></h2>
					</div>
				</div>
			</div>

		)
	}
})
