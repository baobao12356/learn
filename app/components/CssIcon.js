import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'; 
import s from './CssIcon.scss';

//加号plus    放大镜search   图片img  关闭(圆圈中间X)close   垃圾 trash   定位location
//音乐播放器   上一首previouse  下一首next   开始start  停止stop    重播repeat 喇叭  horn

//cloud云      snowy下雪   stormy雷电 rainbow彩虹  starry星空

export class MoveIcon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
		
	}
	static propTypes = {   
        name:PropTypes.string
    }
	render() {
		const { name } = this.props;
		return(
			<div className={cx(s[name])}></div>
		)
	}
}


class Icon extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	static propTypes = {   
        name:PropTypes.string
    }
	render() {
		const { name } = this.props;
		return(
			<span className={cx(s[name])}>
				{name=='trash' && <i className={cx(s.trash_1)}></i>}
			</span>
		)
	}
}

export default Icon