import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav'
import Home from './Home'

import cx from 'classnames'; 
import s from './Greater.scss';//导入

class Greeter extends React.Component{

  render() {

    return (
      <div className={cx(s.root)}>
      		<Nav></Nav>
        	{this.props.children || <Home />}
      </div>
    );

  }
}

export default Greeter