import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


import Home from './Home';
import NavLink from '../components/NavLink';

import cx from 'classnames'; 
import s from './NavBar.scss';//导入


class Nav extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		
		return(
			<ul role="nav" className={cx(s.nav,s.clearfix)}>
				<li><NavLink to="/" onlyActiveOnIndex={true}>home</NavLink></li>		
				<li><NavLink to="/one">pageOne</NavLink></li>			
				<li><NavLink to="/two">pageTwo</NavLink></li>			
				<li><NavLink to="/three">pageThree</NavLink></li>			
				<li><NavLink to="/four">pageFour</NavLink></li>			
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