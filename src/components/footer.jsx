import React from 'react';
import { Link } from 'react-router';

import github from './assets/github.png';
import twitter from './assets/twitter.png';
import styles from '../index.scss';

export default React.createClass({
	render() {
		return (
			<div className="container">
				<div className="row spacebottom spacetop ">
					<div className="col-xs-12 spacebottom spacetop">
						<hr />
					</div>
					<div className="paddingright col-xs-8">
						<ul role="nav">
							<h2 className="tiny"><a className={styles.blacklink} href="https://github.com/michaelknoch/simple-react-example" target="_blank">Made
								with React <i className="fa fa-heart-o"></i>
							</a></h2>
						</ul>
					</div>

					<div className="col-xs-4 icon-wrapper">
						<a href="http://twitter.com/_michaelknoch" target="_blank"> <img className={styles.icon} src={twitter}/></a>
						<a href="http://github.com/michaelknoch" target="_blank" className="paddingright"> <img
							className={styles.icon} src={github}/></a>
					</div>


				</div>
			</div>
		)
	}
})
