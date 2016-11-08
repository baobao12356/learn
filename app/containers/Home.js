import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';


const lake=require('../img/lake.jpg')

class Home extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<div>
		        this is page web123
		    	<img src={lake} alt="湖"/>
		       <img src={require('../img/lake.jpg')} alt="湖"/>
		    </div>
		)
	}
}

export default Home