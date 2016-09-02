import React from 'react';
import Navigation from '../../components/navigation';
import mysmile from '../assets/mysmile.jpg';
import { Link } from 'react-router';

export default React.createClass({
	render() {

		var background = {
			backgroundImage: 'url(' + mysmile + ')',
			backgroundSize: 'cover',
			minHeight: '90vh',
			backgroundPosition: 'center'
		};

		return (
			<div>

				<Navigation />

				<div style={background} className="image col-xs-12 spacetop">
				</div>

				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-8 spacetop spacebottom">
							<h2>MySmile | Freelance</h2>
							<p>
								Die in <Link to="/references/locator">Locator</Link> gesammelten Erfahrungen der Hybriden
								App-Entwicklung konnten genutzt werden,
								um einen umfrangreichen Prototypen für eine Gutschein-Plattform entwickeln zu können.<br /> <br />

								Der Prototyp wurde für iOS und Android mit dem Ionic Framework entwickelt. Sehr Interessant war die
								Implementierung der Cordova Schnittstellen für die Nutzung der Telefonkontakte und der Kamera für den
								Erstellvorgang eines Gutscheins sowie die
								Anbindung an das Paypal, Stripe und Twilio SDK für die Authentifizierung und Zahlungsabwicklung
								innerhalb der App.
							</p>
						</div>

					</div>
				</div>
			</div>
		)
	}
})
