import React from 'react';
import Navigation from '../../components/navigation';
import locator from '../assets/locator.jpg';

export default React.createClass({
	render() {

		var background = {
			backgroundImage: 'url(' + locator + ')',
			backgroundSize: 'cover',
			minHeight: '80vh'
		};

		return (
			<div>

				<Navigation />

				<div style={background} className="image col-xs-12 spacetop">
					<div className="container">
						<div className="row">
							<div className="backdrop col-xs-12 col-sm-5 offset-sm-7">
								<h2>Locator</h2>
								<p>Keine umständlichen Stadtpläne oder Touristenführer mehr, kein stundenlanges durch
									die Gegend laufen um diesen einen Laden zu finden. Locator macht dir deine urbane Entdeckungsreise zu
									einem Spaziergang.</p>
								<a href="http://locator-app.com/" target="_blank">locator-app.com</a>
							</div>
						</div>
					</div>
				</div>
				<div className="container spacetop">
					<div className="row">
						<div className="col-xs-12 col-sm-8 spacetop spacebottom">
							<h2>Locator | Studium</h2>
							<p>Das Studienprojekt Locator war eines der ersten interdisziplinären Projekte der HTWG
								zwischen den Studiengängen Applied Computer Science und Communication Design.
								Die erste Version wurde im Rahmen eines Teamprojekts unter
								Verwendung der
								Frameworks Angular und Ionic als hybride Anwendung
								für Web, iOS und Android in Typescript entwickelt und löste regelrechte Euphorie bei Professoren und Studenten der
								beiden Studiengänge aus. <br /> <br />
								Im darauffolgenden Semester wurde die Entscheidung getroffen, die Plattform mit einem überarbeiteten
								Konzept zu relaunchen und das Projekt erneut als Teamrojekt für Informatiker und Designer der HTWG
								anzubieten.
								Nachdem wir zuvor Erfahrungen in der hybriden Entwicklung sammeln konnten, wurde der Technologiestack
								des Frontends auf Swift und Java für eine native Implementierung der Apps gewechselt.
								Der Stack des Backends basiert nach wie vor auf Node.js
							</p>
						</div>

					</div>
				</div>
			</div>
		)
	}
})
