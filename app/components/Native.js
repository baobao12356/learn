import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'; 
import s from './Native.scss';
import game from './game';
// import { DatePicker, List, Button } from 'antd-mobile';
import {  Button, DatePicker } from 'antd';

var tick;
class Native extends React.Component {
	constructor(props) {
		super(props);
		this.keypress = this.keypress.bind(this);
		this.creatEnemy = this.creatEnemy.bind(this);
		this.getTick = this.getTick.bind(this);
		this.gameOver = this.gameOver.bind(this);
		this.state = {
			start:'0',
			heromove:'0',
			eneymyLoc:0,
			enemyType:0,
			isend:true,
			meter:0,
		}
		
	}
	componentDidMount() {
		document.addEventListener('keydown',this.keypress,false);
		
	}
	start(){
		this.setState({
			start:'1'
		})
		this.creatEnemy();
		this.getTick(true);
	}
	end(){
		this.setState({
			start:'0'
		})
	}
	gameOver(){
		console.log('gameOver')
		this.setState({start:'0'});
		this.getTick(false);
	}
	creatEnemy(){
		const self=this;
		var enemyLoc,enemyType;
		setInterval(function () {
			if(self.state.isend && self.state.start=='1'){
				console.log('有几个进来了');
				
				self.setState({aniEnd : false});
                enemyType = Math.floor(Math.random()*3);
                enemyLoc = Math.round(Math.random());
                self.setState({enemyLoc : enemyLoc});
                self.setState({enemyType : enemyType});
			}
		},4000);
		self.refs.enemy.addEventListener('webkitAnimationEnd',function(){
			console.log('运动结束');
			self.setState({
				isend:true
			})
		},false)
	}

	getTick(state){
		const self=this;
		let kilometer=0;
		if(state){
			tick=setInterval(function(){
				kilometer++;
				let dis= window.getComputedStyle(self.refs.enemy,null).getPropertyValue("transform") == 'none' ? 0 : window.getComputedStyle(self.refs.enemy,null).getPropertyValue("transform").split(",")[5].replace(")","");
				console.log(self.state.enemyType,self.state.heromove)
				// console.log(self.state.enemyType==self.state.heromove)
				if(dis>220 &&  self.state.enemyType==self.state.heromove){
					console.log('游戏结束')
					// self.gameOver();
				}
				self.setState({
					meter:kilometer
				})
			},10)
		}else{
			console.log('体制定时器')
			clearInterval(tick)
		}

	}
	keypress(e){
		const self=this;
		if (this.state.start=='1') {
	        switch(e.keyCode){
	            case 37:
	            	console.log('向左移动30');
	            	this.setState({heromove:'0'})
	            break;
	            case 38:
	            	console.log('向上移动30');
	            break;
	            case 39:
	            	console.log('向右移动30');
	            	this.setState({heromove:'1'})
	            break;
	            case 40:
	            	console.log('向下加速')
	            break;
	        }
        }
	}
	render() {
		const { start, heromove, enemyType, eneymyLoc, meter } = this.state;
		return(
			<div className={cx(s.roadBox)}>
				<div className={cx(s.road,'road',s[ start == '0' ? null : 'roadRun'])}></div>
				<div className={cx(s.gameBox)}>
					<div className={cx(s.hero,s[heromove=='0' ? 'left' : 'right'])}></div>
					<div ref="enemy" 
					className={cx(
						s[start 	== '0' ? null   : 'enemy'],
						s[start     == '0' ? null   : 'enemyRun'],
						s[eneymyLoc == '0' ? 'left' : 'right'])}
					></div>
				</div>
				<Button className={cx(s.start)} onClick={this.start.bind(this)}>开始游戏</Button>
				<Button className={cx(s.end)} onClick={this.getTick.bind(this)}>暂停游戏</Button>
				<span className={cx(s.meter)}>{meter}m</span>
			</div>
		)
	}
}

export default Native