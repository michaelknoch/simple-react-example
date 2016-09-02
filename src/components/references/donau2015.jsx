import React from 'react';
import Navigation from '../../components/navigation';
import donau from '../assets/wapc.jpg';
import { Link } from 'react-router';

export default React.createClass({
	render() {

		var background = {
			backgroundImage: 'url(' + donau + ')',
			backgroundSize: 'cover',
			minHeight: '90vh',
			backgroundPosition: 'center'
		};

		return (
			<div>

				<Navigation />

				<div style={background} className="image col-xs-12 spacetop">
					<div className="container">
						<div className="row">

						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-8 spacetop spacebottom">
							<h2>Donau2015 | Freelance</h2>
							<p>
								Die Responsive Website der World Archery Para Championships war vor und während dem Event Dreh- und
								Angelpunkt für den Informationsaustausch zwischen
								Athleten, Angehörigen und Zuschauern. Die Seite wurde mit dem Drupal Framework entwickelt und bedient
								die Instagram API, um mit #donau2015 markierte Schnappschüsse auf der Seite und auf Anzeigetafeln
								auf dem Gelände anzeigen zu können. Zusätzlich wurde ein Ticketshop und ein Bewerbungsportal für
								Volunteers umgesetzt.
								<br /> <br />
								<a href="http://donau2015.mica-design.de" target="_blank">donau2015.com</a>
							</p>
						</div>

					</div>
				</div>
			</div>
		)
	}
})
