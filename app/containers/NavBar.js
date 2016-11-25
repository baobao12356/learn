import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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
				<li><NavLink to="/demo">DEMO篇</NavLink></li>			
			</ul>
		)
	}
}



class NavBar extends React.Component{
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		const { location, params } = this.props;
		let showHead=true;
		const pathname=location.pathname||'default';
		const headLink=['/demo/galery'].map( (item,index) => {
			if(pathname.indexOf(item)!=-1){
				showHead=false;
			}
		})
		return (
		  <div className={cx(s.root)}>
		  		{ showHead && <Nav></Nav>}
		    	{this.props.children || <Home />}
		  </div>
		);

	}
}

const ValueMapState = (state) => {
    const {environment:{value}} = state;
    return {
        value
    }
};

export default connect(ValueMapState)(NavBar)

