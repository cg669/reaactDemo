import React from 'react';
//根目录
import Container from '../components/Container';
//一级路由
import App from '../components/App';
import Welcome from "../components/welcome";
//二级路由
import Home from "../components/Home";
import About from "../components/About";
import Topics from "../components/Topics";
//三级路由
import JiePanXia from "../components/canvas";
import Pintu from "../components/PinTu";
//所需插件
import {Router,Route,IndexRoute,browserHistory} from "react-router";
import '../css/index.css';


const rootRouter = (
	<Router history={browserHistory}>
         <Route path="/" component={Container}>
           <IndexRoute component={Welcome}></IndexRoute>
           <Route path="/home" component={App}>
           		<IndexRoute component={JiePanXia}></IndexRoute>
	            <Route path="/home" component={Home}>
	           		<IndexRoute component={JiePanXia}></IndexRoute>
		            <Route path="/home/jiepanxia" component={JiePanXia}> </Route>
		            <Route path="/home/pintu" component={Pintu}></Route>
		            <Route path="/home/topics" component={Topics}></Route> 
	            </Route>
	            <Route path="/about" component={About}></Route>
	            <Route path="/topics" component={Topics}></Route> 
           </Route>
         </Route>
    </Router>
)
export default rootRouter;