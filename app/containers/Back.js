import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'; 
import s from './Back.scss';
import n from './Back.css';

console.log('s',s)
console.log('n',n)

class Home extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<div className={cx(s.box,n.back)}>
		        this is back web
		    </div>
		)
	}
}

export default Home