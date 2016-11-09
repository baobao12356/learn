import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import DevTools from './DevTools';

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
	getContent(){
		return(
			<Router history={this.props.history}>
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
	getDevTools(){
		return <DevTools />
	}
	render() {
		return(
			<Provider store={this.props.store}>
		        <div style={{ height: '100vh',width:'100vw'}}>
		          {this.getContent()}
		          {this.getDevTools()}
		        </div>
		    </Provider>
		)
	}
}

export default Root