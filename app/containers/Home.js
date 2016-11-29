import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { environment } from '../redux/actions/action';
import cx from 'classnames'; 
import s from './Home.scss';

import n from '../base/Base.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		const { dispatch } = this.props;
		const data={
			value:'2222'
		}
		// dispatch(environment(data))
		
	}
	
	render() {
		
		return(
			<div>
		       <img src={require('../img/lake.jpg')} alt="湖"/>
		       <img src="../img/lake.jpg" alt="湖"/>

		       <span id="span">123</span>
		    </div>
		)
	}
}
const ValueMapState = (state) => {
    const {environment:{value}} = state;
    return {
        value
    }
};

export default connect(ValueMapState)(Home)


