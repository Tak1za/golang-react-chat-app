import React, { Component } from 'react';
import './ChatHistory.scss';
import Message from '../Message/Message';

class ChatHistory extends Component {
	render() {
		const messages = this.props.chatHistory.map((msg, index) => (
			<Message message={msg.data} key={index} username={this.props.username} />
		));

		return (
			<div className="chatHistory">
				<h2>Chat History</h2>
				{messages}
			</div>
		);
	}
}

export default ChatHistory;
