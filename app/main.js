import React,{PropTypes} from 'react';
import {ReactDOM} from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Root from './routes/Root'

render(
	<Root />
	, document.getElementById('root')
);