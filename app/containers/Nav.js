import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

import cx from 'classnames'; 
import s from './Nav.scss';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		return(
			<ul role="nav" className={cx(s.nav,s.clearfix)}>
				<li><Link to="/">home</Link></li>		
				<li><Link to="/about">about</Link></li>			
				<li><Link to="/back">back</Link></li>			
			</ul>
		)
	}
}

export default Nav