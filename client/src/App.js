import React, { Component, useContext } from 'react';
import './App.css';
import Navbar from './components/navbar/index';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import HomePage from './pages/homePage';
import Profile from './pages/profile';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Golive from './pages/golive';
import Schedule from './pages/schedule';
import { UserContext } from './context/userProvider.js';

function App() {
	const { authUser, token, user, logout, addEvent } = useContext(UserContext);
	console.log(authUser);
	//render() {
	return (
		<Router>
			<div className="App">
				<Navbar user={user} />

<<<<<<< HEAD
				<Switch>
					<Route exact path={[ '/' ]}>
						<HomePage />
					</Route>
					<Route
						exact
						path="/signin"
						render={() =>
							token ? (
								<Redirect to="/profile" />
							) : (
								<SignIn authUser={authUser} />
							)}
					/>
					{/* <Route exact path={[ '/signin' ]}>
=======
					<Switch>
						<Route exact path={[ '/' ]} render={ () => token ? <HomePage /> : <SignIn authUser={authUser}/> } />
							
						
						<Route
          exact path="/signin" render={ () => token ? <Redirect to="/profile" /> : <SignIn authUser={authUser}/> } />
						{/* <Route exact path={[ '/signin' ]}>
>>>>>>> b53b75e9a715f498a1e088cce3ece4ea14a16218
							 </Route>*/}

					<Route exact path={[ '/signup' ]}>
						<SignUp />
					</Route>
					<Route
						exact
						path="/profile"
						render={() =>
							token ? (
								<Profile user={user} logout={logout} />
							) : (
								<Redirect to="/signin" />
							)}
					/>

					<Route exact path={[ '/golive' ]}>
						<Golive />
					</Route>
					<Route exact path={[ '/schedule' ]}>
						<Schedule addEvent={addEvent} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
	//}
}

export default App;
