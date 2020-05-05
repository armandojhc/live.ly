import React from 'react';
import Feeds from '../feedsEvent/index';
import FutureEvent from '../futureEvent/index';
import Trending from '../trendingEvent';
import Container from '@material-ui/core/Container';

function mainContainer() {
	return (
		<div>
			<Container>
				<Feeds />
				{/* <FutureEvent />
			<Trending /> */}
			</Container>
		</div>
	);
}

export default mainContainer;
