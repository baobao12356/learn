import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'; 
import s from './Back.scss';

const lake=require('../img/lake.jpg')

class Home extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<div className={cx(s.back)}>
		        this is back web123123
		    </div>
		)
	}
}

export default Home