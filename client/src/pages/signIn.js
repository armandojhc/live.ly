import React from 'react';
import FutureEvents from '../components/futureEvent/index';
import Footer from '../components/footer/index';
import SignInForm from '../components/signIn/index';

function SignIn() {
	return (
		<div>
			<SignInForm />
			<FutureEvents />
			<Footer />
		</div>
	);
}

export default SignIn;
