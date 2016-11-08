import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import NavBar from '../containers/NavBar';
import Home from '../containers/Home';

import PageOne from '../containers/PageOne';
import PageTwo from '../containers/PageTwo';
import PageThree from '../containers/PageThree';
import PageFour from '../containers/PageFour';


export class Root extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<Router history={hashHistory}>
			    <Route path="/" component={NavBar}>
			    	<IndexRoute component={Home}/>
			    	<Route path="/one" component={PageOne}/>
			    	<Route path="/two" component={PageTwo}/>
			    	<Route path="/three" component={PageThree}/>
			    	<Route path="/four" component={PageFour}/>
			    </Route>
			</Router>
		)
	}
}

export default Root