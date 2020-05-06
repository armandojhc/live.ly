import React from 'react';
import Feeds from '../components/feedsEvent/index';
import Footer from '../components/footer/index';
import Grid from '@material-ui/core/Grid';

function Profile() {
	return (
		<div>
			<Grid container spacing={3}>
				<Feeds />
				<Footer />
			</Grid>
		</div>
	);
}

export default Profile;
