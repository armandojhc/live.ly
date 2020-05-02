import React from 'react';
import Feeds from './feedsEvent/index';
import FutureEvent from './futureEvent/index';
import Trending from './trendingEvent';

function mainContainer() {
	return (
		<div>
			<Feeds />
			{/* <FutureEvent />
			<Trending /> */}
		</div>
	);
}

export default mainContainer;
