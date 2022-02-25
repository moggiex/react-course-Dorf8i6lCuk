import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import NotFoundPage from './pages/NotFoundPage';

// Components
import MainNavigation from './components/Layout/MainNavigation';

const App = () => {
	return (
		<>
			<Router>
				<MainNavigation />
				<Routes>
					<Route path='/' element={<AllMeetupsPage />} exact={true} />
					<Route path='/new-meetup' element={<NewMeetupPage />} />
					<Route path='/favourites' element={<FavouritesPage />} />
					<Route path='/*' element={<NotFoundPage />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
