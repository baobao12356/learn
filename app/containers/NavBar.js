import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


import Home from './Home';

import cx from 'classnames'; 
import s from './NavBar.scss';//导入


class Nav extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		
		return(
			<ul role="nav" className={cx(s.nav,s.clearfix)}>
				<li><Link to="/">home</Link></li>		
				<li><Link to="/one">pageOne</Link></li>			
				<li><Link to="/two">pageTwo</Link></li>			
				<li><Link to="/three">pageThree</Link></li>			
				<li><Link to="/four">pageFour</Link></li>			
			</ul>
		)
	}
}



class NavBar extends React.Component{

  render() {

    return (
      <div className={cx(s.root)}>
      		<Nav></Nav>
        	{this.props.children || <Home />}
      </div>
    );

  }
}

export default NavBar