import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { environment } from '../redux/actions/action';
import cx from 'classnames';
import s from './Home.scss';

class Home extends React.Component {
	constructor(props) {
		super(props);

	}
	componentDidMount() {
		const { dispatch } = this.props;
		const data = {
			value: '2222'
		}
		// dispatch(environment(data))

	}

	render() {
		
		return (
			<div>
				<img src={require('../img/lake.jpg')} alt="湖" />
				<span id="span">123</span>
				<div className={cx(s.box,'bg')}>111</div>
				<div className={cx(s.one)}>2222</div>
			</div>
		)
	}
}
const ValueMapState = (state) => {
	const {environment: {value}} = state;
	return {
		value
	}
};

export default connect(ValueMapState)(Home)


