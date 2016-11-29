import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'; 
import s from './Native.scss';

// import { DatePicker, List, Button } from 'antd-mobile';
import {  Button, DatePicker } from 'antd';

class Native extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		return(
			<div>
				<Button>123</Button>
			</div>
		)
	}
}

export default Native