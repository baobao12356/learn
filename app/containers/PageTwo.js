import React,{PropTypes} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'; 
import s from './PageTwo.scss';
import n from '../base/Base.css';

import echarts from 'echarts'; 

class Home extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echarts'));
		// 绘制图表
		var options={
            title: { text: 'ECharts 入门示例' },
            tooltip: {
              trigger:'item'     //'axis'
            },
            xAxis: {
                data: ["企业发放工资","社保费用","个税","公积金"]
            },
            yAxis: {},
            series: [
              {
                name: '销量',
                type: 'bar',
                data: [51, 20, 36, 10],
                itemStyle:{
                  normal:{ color:'red'}
                },
                barWidth:'20%',
                barGap:'80%',
                barCategoryGap:'50%'
              },
              {
                name: '销量',
                type: 'bar',
                data: [25, 30, 56, 15],
                itemStyle:{
                  normal:{ color:'yellow'}
                },
                barWidth:'20%',
                barGap:'80%',
                barCategoryGap:'50%'
              },
            ]
        }
		myChart.setOption(options);
	}
	render() {
		return(
			<div >
		        <div id="echarts" style={{width:'100%',height:'500px'}}></div>
		    </div>
		)
	}
}

export default Home