import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'; 
import s from './Galery.scss';

var imageDatas = require('../source/imageDatas.json');
/*
 * 获取区间内的一个随机值
 */
function getRangeRandom(low, high) {
    return Math.ceil(Math.random() * (high - low) + low);
}
/*
 * 获取 0~30° 之间的一个任意正负值
 */
function get30DegRandom() {
  return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30));
}


class ImgFig extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {

	}
	handleImg(index,e){
		console.log('indexhahhahah哈哈哈',this.props.range)
		if (this.props.range.isCenter) {
	        this.props.inverse(index);
	    } else {
	        this.props.center(index);
	    }
	    e.stopPropagation();
      	e.preventDefault();
	}
	render() {
		const { data,range } = this.props;
		let styleObj={};
		// console.log('图片等饿定位范围',range)
		if(range){
			styleObj=range.pos;
		}
		// 如果图片的旋转角度有值并且不为0， 添加旋转角度
		if(range.rotate){
			styleObj['transform']='rotate('+range.rotate+'deg)'
		}
		if (range.isCenter) {
          styleObj.zIndex = 11;
        }


		return(
			<div className={cx(s.imgfigure,s[range.isInverse ? 'imgfigureMove' : ''])} style={styleObj} onClick={this.handleImg.bind(this,this.props.num)}>
	        	<img src={require('../img/images/'+data.fileName)} alt="图片"/>
	        	<div className={cx(s.text)}>
	        		<h2>{data.title}</h2>
		        	<div className={cx(s.imgBack)} onClick={this.handleImg.bind(this,this.props.num)} >
		        		{data.desc}
		        	</div>
	        	</div>
	        </div>
		)
	}
}

class Union extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}
	handleClick(index,e){
    	console.log('点击的事导航',index)
        if (this.props.range.isCenter) {
            this.props.inverse(index);
        } else {
            this.props.center(index);
        }
        e.preventDefault();
        e.stopPropagation();
    }

	render() {
		console.log(this.props.range.isCenter)
		return(
			<span className={cx(s.dot,s[this.props.range.isCenter ? 'isCenter' : null ])} onClick={this.handleClick.bind(this,this.props.num)}>
			{this.props.num}
			</span>
		)
	}
}


export class Galery extends React.Component {
	constructor(props) {
		super(props);
		this.inverse = this.inverse.bind(this);
		this.center = this.center.bind(this);
		this.state = {
			imgsArrangeArr: [
	            /*{
	                pos: {
	                    left: '0',
	                    top: '0'
	                },
	                rotate: 0,    // 旋转角度
	                isInverse: false,    // 图片正反面
	                isCenter: false,    // 图片是否居中
	            }*/
	        ]
		}
		
	}
	static defaultProps = {
		Constant: {
						centerPos: { left: 0,right: 0  },
						// 水平方向的取值范围
					    hPosRange: { leftSecX: [0, 0], rightSecX: [0, 0], y: [0, 0] },
					    // 垂直方向的取值范围
					    vPosRange: {  x: [0, 0], topY: [0, 0] }
				    }
		
	}
	inverse(index){  //点击中间，都不换方向，只换isInverse   让它翻转
		var imgsArrangeArr = this.state.imgsArrangeArr;
			console.log('@@',imgsArrangeArr[index])
	      	imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;

		    this.setState({
		        imgsArrangeArr: imgsArrangeArr
		    });
	}
	center(index){
		this.rearrange(index);
	}
  	rearrange(centerIndex){
  		console.log('第一次进入componentDidMount的imgsArrangeArr',this.state.imgsArrangeArr)
  		var imgsArrangeArr = this.state.imgsArrangeArr,
	        Constant = this.props.Constant,

	        centerPos = Constant.centerPos,       //中心位置
	        hPosRange = Constant.hPosRange,			//水平方向取值范围
	        vPosRange = Constant.vPosRange,			// 纵向取值范围

	        hPosRangeLeftSecX = hPosRange.leftSecX,		// 左半区域X轴取值范围
	        hPosRangeRightSecX = hPosRange.rightSecX, 	// 右半区域X轴取值范围
	        hPosRangeY = hPosRange.y,	//  左、右 区域的y轴的取值范围

	        vPosRangeTopY = vPosRange.topY,	// 上半区域Y的取值范围
	        vPosRangeX = vPosRange.x,	//  上半区域X轴的取值范围

	   		//  中心图片的信息
	        imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);   //取出数组第一个img
	        //防止以后这个数组充满元素后的行为
	        // 首先居中 centerIndex 的图片, 居中的 centerIndex 的图片不需要旋转
	        imgsArrangeCenterArr[0] = {
	          pos: centerPos,
	          rotate: 0,
	          isCenter: true
	        };

	        //上半区域图片的信息
	        var imgsArrangeTopArr = [], // 上面区域放进图片的个数
	        topImgNum = Math.floor(Math.random() * 4),    // 取一个或者不取

	        topImgSpliceIndex = 0;  //先随意赋值
	        // 取出要布局上侧的图片的状态信息
	        console.log('取出上面布局的图片个数',topImgNum);
	        console.log('已经去除中间图片剩余的图片数量',imgsArrangeArr.length);
        	topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));
        	//从这个范围区间内随机一个数，然后删除上部图片的数量，剩下的给左右布局
        	imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);
        	//截取上半区域的图片
        	console.log('两边布局图片数量的总和还有多少',imgsArrangeArr.length);
        	// 布局左右两侧的图片
	        for (var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
	            var hPosRangeLORX = null;

	            // 前半部分布局左边， 右半部分布局右边
	            if (i < k) {
	                hPosRangeLORX = hPosRangeLeftSecX;
	            } else {
	                hPosRangeLORX = hPosRangeRightSecX;
	            }

	            imgsArrangeArr[i] = {
	              pos: {
	                  top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
	                  left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
	              },
	              rotate: get30DegRandom(),
	              isCenter: false
	            };

	        }

	        if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
	        	console.log('jinlaile进来了')
	        	imgsArrangeTopArr[0] = {
	        		pos: {
	                  top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
	                  left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
	              },
	              rotate: get30DegRandom(),
	              isCenter: false
	        	}
	            imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
	        }

	        imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);

	        this.setState({
	            imgsArrangeArr: imgsArrangeArr
	        });

  	}
	componentDidMount() {

		//获取舞台的大小
		const galeryDom=ReactDOM.findDOMNode(this.refs.galery); 
		const stageW = galeryDom.scrollWidth; //1407
        const stageH = galeryDom.scrollHeight; //700
        const halfStageW = Math.ceil(stageW / 2); //704
        const halfStageH = Math.ceil(stageH / 2);  //350
        console.log(stageW,stageH,halfStageW,halfStageH)
        //任意一个图片组件的大小
        const imgDom = ReactDOM.findDOMNode(this.refs.imgfigure0);
        const imgW = imgDom.scrollWidth; //280
        const imgH = imgDom.scrollHeight;	//360
        const halfImgW = Math.ceil(imgW / 2); //140
        const halfImgH = Math.ceil(imgH / 2);	//180
        console.log(imgW,imgH,halfImgW,halfImgH)
		
        // 计算中心图片的位置点
	    this.props.Constant.centerPos = {
	        left: halfStageW - halfImgW,
	        top: halfStageH - halfImgH
	    };

		// 计算左侧，右侧区域图片排布位置的取值范围
	    this.props.Constant.hPosRange.leftSecX[0] = -halfImgW;  //-140
	    this.props.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
	    this.props.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
	    this.props.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
	    this.props.Constant.hPosRange.y[0] = -halfImgH;
	    this.props.Constant.hPosRange.y[1] = stageH - halfImgH;

	    // // 计算上侧区域图片排布位置的取值范围
	    this.props.Constant.vPosRange.topY[0] = -halfImgH;
	    this.props.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
	    this.props.Constant.vPosRange.x[0] = halfStageW - imgW;
	    this.props.Constant.vPosRange.x[1] = halfStageW;

	    this.rearrange(0);      

	}
	
	render() {
		console.log(this.state.imgsArrangeArr)
		console.log(this.props.Constant)
		return(
			<div className={cx(s.galeryBox)}>
				<div className={cx(s.imgStage)} ref="galery">
					{
						imageDatas.map( (img,index) => {
							if(!this.state.imgsArrangeArr[index]){
								console.log('是否进入到循环的机制－－－－－－')
								this.state.imgsArrangeArr[index] = {
					                pos: {
					                    left: 0,
					                    top: 0
					                },
					                rotate: 0,
					                isInverse: false,
					                isCenter: false
					            };
							}
							return(
								<ImgFig key={index} data={img} ref={'imgfigure'+index} 
								range={this.state.imgsArrangeArr[index]} num={index}
								inverse={this.inverse}
								center={this.center}
								/>
							)
						})
					}
				</div>
				<div className={cx(s.nav)}>
					{
						imageDatas.map( (img,index) => {
							if(!this.state.imgsArrangeArr[index]){
								console.log('是否进入到循环的机制－－－－－－')
								this.state.imgsArrangeArr[index] = {
					                pos: {
					                    left: 0,
					                    top: 0
					                },
					                rotate: 0,
					                isInverse: false,
					                isCenter: false
					            };
							}
							return(
								<Union key={index} num={index}
								range={this.state.imgsArrangeArr[index]}
								inverse={this.inverse}
								center={this.center}
								/>
							)
						})
					}
				</div>
				<a href="#/demo" className={cx(s.back)}>返回</a>
	        </div>
		)
	}
}

export default Galery