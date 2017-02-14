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
		this.checkMediaQuery = this.checkMediaQuery.bind(this);
		this.state = {
			type:'desktop'
		}
	}

	getChildContext() {
	    return {type: this.state.type};
	}
	checkMediaQuery(){
		const type = window.matchMedia("screen and (min-width: 1025px)").matches ? 'desktop' : 'mobile';
      	if (type !== this.state.type) {
        	this.setState({type});
      	}
	}
	componentDidMount() {
	    window.addEventListener('resize',this.checkMediaQuery);
	    this.checkMediaQuery();
	}
	componentWillUnmount() {
		window.removeEventListener('resize',this.checkMediaQuery)
	}
	
	render() {
		console.log('--',this.state.type);
		//style={{width:200,height:200,color:'red',backgroundImage:`url${require('../../public/img/icon/fail.png')}`}}
		const element=React.createElement('div',{className:'box',key:'1',name:'1'},'123')
		const lel='<div>456</div>'
		// console.log(React.isValidElement(lel))
		return(
			element
			
		)
	}
}

Greater.childContextTypes = {
  type: React.PropTypes.string
}


export default Greater


//<div className={cx(s.oneBox)}>
    // <CssIcon name="horn"></CssIcon>
    // <MoveIcon name="starry"></MoveIcon>
    // <MoveIcon name="mypra"></MoveIcon>
// </div>

