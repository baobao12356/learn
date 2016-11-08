import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'; 
import s from './PageOne.scss';

import n from '../base/Base.css';

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