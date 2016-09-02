import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="spacebottom spacetop paddingright col-xs-12">
						<ul role="nav">
							<hr />
							<h2 className="tiny">Made with React <i className="fa fa-heart-o"></i></h2>
						</ul>
					</div>
				</div>
			</div>
		)
	}
})
