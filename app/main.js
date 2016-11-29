import React,{PropTypes} from 'react';
import {ReactDOM} from 'react-dom';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import rootReducer from './redux/reducers'
import { createStore } from 'redux';
import configureStore from './redux/configReducer';

import 'antd/dist/antd.css';
import Root from './routes/Root'

let store=configureStore()
// let store=createStore(rootReducer)
if(__DEV__){
	console.log('这里有环境变量－－－－－－－－－－－－－－@@@@@@@@@@@@@')
}

render(
	<Root store={store} history={hashHistory}/>
	, document.getElementById('root')
);