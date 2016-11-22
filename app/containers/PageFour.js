import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'; 
import s from './PageFour.scss';
import n from '../base/Base.css';

import Galery from '../components/Galery'

class Greater extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value:'123'
		}
		
	}
	componentDidMount() {
		
	}
	render() {
		
		return(
			<div>
		        {this.props.children}
		    </div>
		)
	}
}

export default Greater