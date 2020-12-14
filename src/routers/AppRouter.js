import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Movie from '../components/Movie';
import Favourites from '../components/Favourites';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (

	<Router>
		<div className="wrapper">
			<Header />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/about'}><About /></Route>
				<Route path={'/movie'}><Movie /></Route>
				<Route path={'/favourites'}><Favourites /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
			</Switch>
			<Footer />
		</div>
	</Router>	
);

export default AppRouter;
