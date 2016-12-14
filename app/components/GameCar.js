import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'; 
// import s from './GameCar.scss';

require('./GameCar.css');
var Tick;
class GameCar extends React.Component {
	constructor(props) {
		super(props);
		this.mobileSuper = this.mobileSuper.bind(this);
		this.gameStart   = this.gameStart.bind(this);
		this.gameRestart = this.gameRestart.bind(this);
		this.gameTick    = this.gameTick.bind(this);
		this.createEnemy = this.createEnemy.bind(this);
		this.gameHandle  = this.gameHandle.bind(this);
		this.superBuff   = this.superBuff.bind(this);
		this.gameOver    = this.gameOver.bind(this);
		this.superMode    = this.superMode.bind(this);
		this.state = {
			kilometer : 0,//千米数
            heroLoc : 0,	//英雄车的位置参数
            enemyLoc: 0,	//敌方车的位置参数
            enemyType : 0,	//敌人的类型
            enemySpeed : 0,	//敌人的速度
            gameState : 0,	//游戏的状态
            gameStart :0,   //游戏开始
            gameOver : 0,	//游戏结束状态
            aniEnd : true,	//运动结束状态
            superMode :0,  //无敌模式参数
            chunge : 0,		//是否发生碰撞
            hasSuper : 0,	//是否用后无敌状态
		}
		
	}
	gameHandle(e){
		if(this.state.gameState ==1){
            switch(e.keyCode){
                case 37:
                    this.setState({heroLoc : 0});
                    break;
                case 39:
                    this.setState({heroLoc : 1});
                    break;
                case 32:
                    if(this.state.hasSuper==1){
                        this.setState({superMode : 1});
                        this.setState({hasSuper : 0});
                    }
                    break;
            }
        }
	}
	componentDidMount() {
		var that = this;
        window.addEventListener("keydown", this.gameHandle, false);
        window.addEventListener("devicemotion", function(event) {
            var eventaccelerationIncludingGravity = event.accelerationIncludingGravity;
            if(that.state.gameState == 1){
                if(eventaccelerationIncludingGravity.x < -1){
                    that.setState({heroLoc : 0});
                }else if(eventaccelerationIncludingGravity.x > 1){
                    that.setState({heroLoc : 1});
                }
            }
        }, false);
	}
	componentWillUnmount() {
		
	}
	mobileSuper(){
		//变为超级汽车
		console.log('11111')
		if(this.state.hasSuper==1){
            this.setState({superMode : 1});
            this.setState({hasSuper : 0});
        }
	}
	gameStart(){
		//开始游戏
		this.setState({
            kilometer : 0,
            heroLoc : 0,
            enemyLoc: 0,
            enemyType : 0,
            enemySpeed : 0,
            gameState : 1, //游戏状态变为1  不控制class
            gameStart :1,	//游戏开始   1 即开始
            gameOver : 0,
            aniEnd : true,
            superMode :0,
            chunge : 0,
            hasSuper : 0,
        });
        this.gameTick(true);
        this.createEnemy();
	}
	createEnemy(){
		//创造敌人
		var self = this,
            enemyClass,enemySpeed,enemyLoc,enemyType,
            animationEnd = true;
        setInterval(function(){
            if(self.state.aniEnd && self.state.gameState == 1){
                self.setState({aniEnd : false});
                enemyType = Math.floor(Math.random()*3);
                enemySpeed = Math.floor(Math.random()*3);
                enemyLoc = Math.round(Math.random());
                self.setState({enemyLoc : enemyLoc});
                self.setState({enemyType : enemyType});
                self.setState({enemySpeed : enemySpeed});
               
            }
        },1000);
        self.refs.enemy.addEventListener("webkitAnimationEnd",function(){
            self.setState({aniEnd : true});
        });

	}
	gameTick(state){
		//检测碰撞
		var self = this,
            crash = 620,
            heroLoc,enemyLoc,trs,dis,kilometer = 0;

        if(state){
            Tick = setInterval(function(){
                trs = window.getComputedStyle(self.refs.enemy,null).getPropertyValue("transform");
                dis = trs.split(",")[5].replace(")","");
                heroLoc = self.state.heroLoc;
                enemyLoc = self.state.enemyLoc;
                if(dis>crash && dis<(crash+220) && heroLoc == enemyLoc){
                    if(self.state.superMode ==1){
                        self.superBuff();
                    }else{
                        self.gameOver();
                    }
                }
                kilometer ++;
                self.setState({kilometer:kilometer});
                if(kilometer%1000==0){
                    self.superMode();
                }
            },10);
        }else{
            clearInterval(Tick);
        }

	}
	superBuff(){
		var self = this;
        self.setState({chunge : 1});
        setTimeout(function(){
            self.setState({chunge : 0});
        },1000);
	}
	gameOver(){
		this.setState({gameState : 0});  //停止创建敌人，并没有停止定时器
        this.setState({gameOver : 1});  //更改主要的class  汽车背景break 灯光消失  弹出failbub框
        this.gameTick(false); //停止碰撞监测
	}
	superMode(){
		var self = this;
        self.setState({hasSuper : 1}); //控制提示文字的显示  空格开始
        setTimeout(function(){
            self.setState({superMode : 0});
        },5000);
	}
	gameRestart(){
		//再次开始游戏
		this.gameStart();
	}
	render() {
		const state=this.state;
		var enemyCls = state.gameStart == 0 || state.aniEnd 
		? "enemy":
		("enemy enemy"+ state.enemyType +" speed" + state.enemySpeed + " loc" + state.enemyLoc);


		var boardCls;
        if(state.gameOver==1){
            boardCls = "board crashed";
        }else if(state.superMode==1){
            boardCls = "board superMode";
        }else{
            boardCls = "board";
        }
		return(
			<div className="gamebox">
		{/* 从这里开始－－－－－>> */}
				<div className={boardCls}>
					<div className={state.gameStart==1?"roadbed roadRun":"roadbed"}></div>
					<div className={state.gameStart==1?"road roadPlay":"road"}>
				{/*hero   roadPlay是为了给小车从下出现的动画*/}
						<div className={state.heroLoc == 0 ?"hero left":"hero right"} onClick={this.mobileSuper}>
							<div className="body"></div>
                			<span className="light"></span>
						</div>
				{/*enemy car*/}
						<div className={enemyCls} ref="enemy">
							<div className={state.chunge == 1?"body chunge":"body"}></div>
						</div>
						<p className="help">方向键←→控制左右</p>
                		<p className={state.hasSuper==1?"helpsp show":"helpsp"}>空格键开启春哥模式！</p>
					</div>
				{/*仪表   开始*/}
					<span className={state.gameStart==1?"start hide":"start"} onClick={this.gameStart}></span>
            		<span className="kilo">{state.kilometer}</span>
            	{/*失败场景*/}
            		<div className="failbub">
		                <span className="failtext"></span>
		                <span className="retry" onClick={this.gameRestart}></span>
		            </div>
		{/* <<------------从这里结束 */}
				</div>
			</div>
				
		
		)
	}
}

export default GameCar;