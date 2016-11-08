import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'; 
import s from './PageTwo.scss';
import n from '../base/Base.css';

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
			<div>
		        this is PageTwo
		    </div>
		)
	}
}

export default Home