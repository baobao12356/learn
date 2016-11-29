import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'; 
import s from './PageOne.scss';
import n from '../base/Base.css';
import config from '../source/config.json';

import CssIcon from '../components/CssIcon';
import { MoveIcon } from '../components/CssIcon';





// import { DatePicker, List, Button } from 'antd-mobile';


class Greater extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<div className={cx(s.oneBox)}>
		        {/*config.greetText
		        <CssIcon name="horn"></CssIcon>
		        <MoveIcon name="starry"></MoveIcon>
		        <MoveIcon name="mypra"></MoveIcon>
		        <button>测试button按钮</button>*/}
		    </div>
		)
	}
}

export default Greater