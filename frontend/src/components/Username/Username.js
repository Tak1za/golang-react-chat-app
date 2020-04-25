import React, { Component } from 'react';
import './Username.scss';

class Username extends Component {
	render() {
		return (
			<div className="username-outer-container">
				<div className="username-inner-container">
					<input type="text" placeholder="Enter username" onKeyDown={this.props.username} />
				</div>
			</div>
		);
	}
}

export default Username;
