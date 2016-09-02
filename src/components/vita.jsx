import React from 'react';
import Navigation from '../components/navigation';
import michael from './assets/michael.jpg';
import styles from '../index.scss';

export default React.createClass({
	render() {
		return (
			<div className="container">
				<div className="row">

					<Navigation />

					<div className="col-xs-12 col-sm-4">
						<img src={michael} className={styles.responsive}/>
					</div>

					<div className={"col-xs-12 col-sm-8"}>
						<div className="bluebox">
							<h2>Michael Knoch</h2>
							<h3>Frontend aus Leidenschaft</h3>
						</div>
						<br />
						<br />
						<div>
							<h2 className="tiny col-xs-12">Erfahrung</h2>
							<a href="http://mica-design.de" target="_blank" className={styles.vitaItem}>
								<h4>2012 - heute | Freelancing</h4>
								<p>Mobile und Web Development nativ und hybrid mit
									AngularJS, Ionic, Swift und Drupal im Rahmen der mica-design GbR
								</p>
							</a>
							<a href="http://tojio.com" target="_blank" className={styles.vitaItem}>
								<h4>03.2014 - 08.2014 | Semesterpraktikum Tojio GmbH</h4>
								<p>
									Full Stack Webentwickler mit
									Drupal, PHP, HTML5, CSS3 und JavaScript
								</p>
							</a>
							<a href="http://isgus.de" target="_blank" className={styles.vitaItem}>
								<h4>04.2010 | Praktikum ISGUS GmbH</h4>
								<p>
									Soft- und Hardwareentwicklung
								</p>
							</a>
							<h2 className="col-xs-12 spacetop tiny">Ausbildung</h2>

							<a href="http://www.htwg-konstanz.de/" target="_blank" className={styles.vitaItem}>
								<h4>2012 - 2016 | HTWG Konstanz</h4>
								<p>
									Applied Computer Science (B.Sc.)
									Schwerpunkt Software Engineering
								</p>
							</a>

							<span className={styles.vitaItem}>
								<h4>2003 – 2012 | Gymnasium am Romäusring</h4>
								<p>
									allgemeine Hochschulreife
								</p>
							</span>


						</div>

					</div>

				</div>
			</div>
		)
	}
})
