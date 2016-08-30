import React from 'react';
import Navigation from '../components/navigation';

export default React.createClass({
	render() {
		return (
			<div className="row">
				<Navigation />
				<div className="col-xs-12">
					<div>References</div>
				</div>
			</div>
		)
	}
})
