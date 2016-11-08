import React,{PropTypes} from 'react';

import config from '../source/config.json';

class Greater extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<div>
		        {config.greetText}
		    </div>
		)
	}
}

export default Greater