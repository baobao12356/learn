import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Greater from '../containers/Greater';
import Home from '../containers/Home';
import Back from '../containers/Back';
import About from '../components/About';

export class Root extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<Router history={hashHistory}>
			    <Route path="/" component={Greater}>
			    	<IndexRoute component={Home}/>
			    	<Route path="/about" component={About}/>
			    	<Route path="/back" component={Back}/>
			    </Route>
			</Router>
		)
	}
}

export default Root