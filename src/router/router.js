
import React,{ Component } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';


import Home from '../containers/home/home';
import Introduce from '../containers/introduce/introduce';
import Join from '../containers/join/join';
import Joins from '../containers/joins/joins';
import NoFound from '../containers/nofound/nofound';

class RouteMap extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Router>
				<Switch>
					<Route exact path="/" component={ Home } />
					<Route path="/introduce" component={ Introduce } />
					<Route path="/join" component={ Join } />
					<Route path="/joins" component={ Joins } />
					<Route component={ NoFound } />
				</Switch>
			</Router>
		)
	}
}

export default RouteMap;