import React from 'react';
import { Link } from 'react-router';
import styles from '../index.scss';

export default React.createClass({
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 spacetop">
						<ul className={styles.menu} role="nav">
							<li className="tiny"><Link activeClassName={styles.underline} to="/vita">Vita</Link></li>
							<li className="tiny"><Link activeClassName={styles.underline} to="/references">Referenzen</Link></li>
							<li className="tiny"><a href="mailto:info@michaelknoch.de">Kontakt</a></li>
							<li className="tiny"><Link activeClassName={styles.underline} to="/impressum">Impressum</Link></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
})
