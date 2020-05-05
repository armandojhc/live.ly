import React from 'react';
import Feeds from '../components/feedsEvent/index';
import TrendingEvents from '../components/trendingEvent/index';
import FutureEvents from '../components/futureEvent/index';
import Footer from '../components/footer/index';

function HomePage() {
	return (
		<div>
			<Feeds />
			<TrendingEvents />
			<FutureEvents />
			<Footer />
		</div>
	);
}

export default HomePage;
