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

import Galery from '../components/Galery';
import Native from '../components/Native';
import GameCar from '../components/GameCar';
import IndexFour from '../components/IndexFour';



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
			    	<Route path="one" component={PageOne}/>
			    	<Route path="two" component={PageTwo}/>
			    	<Route path="three" component={PageThree}/>
			    	<Route path="demo" component={PageFour}>
			    		<IndexRoute component={IndexFour}/>
			    		<Route path="galery" component={Galery} />
			    		<Route path="native" component={GameCar} />
			    	</Route>
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