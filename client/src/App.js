import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/index';
// import Container from './components/container/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import Profile from './pages/profile';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path={[ '/' ]}>
							<HomePage />
						</Route>
						<Route exact path={[ '/signin' ]}>
							<SignIn />
						</Route>
						<Route exact path={[ '/signup' ]}>
							<SignUp />
						</Route>
						<Route exact path={[ '/profile' ]}>
							<Profile />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
