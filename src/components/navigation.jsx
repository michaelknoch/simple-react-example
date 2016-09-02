import React from 'react';
import { Link } from 'react-router';
import styles from '../index.scss';

export default React.createClass({
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 spacetop spacebottom">
						<ul className={styles.menu} role="nav">
							<li className="tiny"><Link to="/vita">Vita</Link></li>
							<li className="tiny"><Link to="/references">Referenzen</Link></li>
							<li className="tiny"><Link to="/vita">Kontakt</Link></li>
							<li className="tiny"><Link to="/references">Impressum</Link></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
})
