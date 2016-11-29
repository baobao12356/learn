import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';

class IndexFour extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	render() {
		return(
			<div>
				<p>第一个例子：<a href="#/demo/galery">Galery</a></p>
				<p>第二个例子：<a href="#/demo/native">Native</a></p>
			</div>
		)
	}
}
export default IndexFour;