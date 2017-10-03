
import React,{ Component } from 'react';
import RouteMap from '../router/router';

class App extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="app_containers">
				<RouteMap />
			</div>
		)
	}
}
export default App;