import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/index';
import Container from './components/container/index';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Container />
			</div>
		);
	}
}

export default App;
