import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import Profile from './pages/profile';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Footer from './components/footer/index.js';
// import Particles from 'react-particles-js';


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					{/* <Particles 
						bg={true}
						params={{
							"particles": {
								"number": {
									"value": 160,
									"density": {
										"enable": false
									}
								},
								"size": {
									"value": 3,
									"random": true,
									"anim": {
										"speed": 4,
										"size_min": 0.3
									}
								},
								"line_linked": {
									"enable": false
								},
								"move": {
									"random": true,
									"speed": 1,
									"direction": "top",
									"out_mode": "out"
								}
							},
							"interactivity": {
								"events": {
									"onhover": {
										"enable": true,
										"mode": "bubble"
									},
									"onclick": {
										"enable": true,
										"mode": "repulse"
									}
								},
								"modes": {
									"bubble": {
										"distance": 250,
										"duration": 2,
										"size": 0,
										"opacity": 0
									},
									"repulse": {
										"distance": 400,
										"duration": 4
									}
								}
							}
						}} /> */}
					<Switch>
						<Route exact path={['/']}>
							<HomePage />
						</Route>
						<Route exact path={['/signin']}>
							<SignIn />
						</Route>
						<Route exact path={['/signup']}>
							<SignUp />
						</Route>
						<Route exact path={['/profile']}>
							<Profile />
						</Route>
					</Switch>
				</div>
				<Footer />
			</Router>
		);
	}
}

export default App;
