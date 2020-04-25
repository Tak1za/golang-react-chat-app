import React, { Component } from 'react';
import './Message.scss';

class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: JSON.parse(this.props.message)
		};
	}

	render() {
		return (
			<div
				className={`${this.state.message.username === this.props.username ? 'me' : null} message ${this.state
					.message.usename === 'SYSTEM'
					? 'system'
					: null}`}
			>
				{this.state.message.username}: {this.state.message.body}
			</div>
		);
	}
}

export default Message;
