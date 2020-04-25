import React, { Component } from 'react';
import './App.scss';
import { connect, sendMsg } from './api';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import Username from './components/Username/Username';

class App extends Component {
	constructor() {
		super();

		this.state = {
			chatHistory: [],
			username: ''
		};
	}
	componentDidMount() {
		connect((msg) => {
			console.log('New Message');
			this.setState(
				(prevState) => ({
					chatHistory: [ ...this.state.chatHistory, msg ]
				}),
				() => console.log(this.state)
			);
		});
	}

	send = (event) => {
		if (event.keyCode === 13) {
			sendMsg(event.target.value);
			event.target.value = '';
		}
	};

	render() {
		return (
			<div className="App">
				<Header />
				{this.state.username === 'd' ? (
					<Username />
				) : (
					<div className="chat">
						<ChatHistory chatHistory={this.state.chatHistory} />
						<ChatInput send={this.send} />
					</div>
				)}
			</div>
		);
	}
}

export default App;
