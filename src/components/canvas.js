import React, { Component } from 'react';
import CanvasBall from './canvasBall.js';
import '../css/canvas.css';
import { Switch , Modal} from 'antd';
export default class Canvas extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	width: 200,
	    	height : 200,
	    	isShow : "none",
	    	ctx : '',
	    	beginTitle : this.refs.beginTitle,
	    	iTimer : ''
	    };
	    this.onChange = this.onChange.bind(this);
	    this.close = this.close.bind(this);
	}
	render () {
		return (
		   <div className="jiepanxia" ref="canvasBox">
		   		<div className="info">
		   			<h2>A Magic Site!!!</h2>
			   		<p>那么进入我的网站前,我给你准备了三个游戏,很简单的游戏,只是看看你是不是...</p>
			   		<p>游戏都是用canvas写的,所以有点...额,好吧!性能有点差.如果你很喜欢玩游戏的话!那么尽情期待吧!目前自学xx!会出更好更棒的游戏的!么么哒!</p>
			   		<p>简单介绍下:</p>
			   		<p>接盘侠:就是一个盘子,然后有个小球,得用键盘玩,你要接到它哦!!!完成指定任务量!对了,写的比较匆忙,所以可能会偶尔蹦出个bug!</p>
		   		</div>
		   		<Switch defaultChecked={false} onChange={this.onChange} checked={false}/>
		 		<span>开启游戏</span>
		 		<span className="close" style={{display : this.state.isShow}} onClick={this.close}>结束游戏</span>
		 		<div className="tan" style={{display : this.state.isShow}} ref="tan"></div>
		   		<canvas width={this.state.width} height={this.state.height} className="canvas" ref="canvas" style={{display : this.state.isShow}}></canvas>
		   </div>
		);
	}
	componentDidMount () {
		let iW = this.refs.canvasBox.offsetWidth;
		let iH = this.refs.canvasBox.offsetHeight;
//		const iW = window.innerWidth;
//		const iH = window.innerHeight;
		this.setState({
			width : iW,
			height : iH,
			ctx : this.refs.canvas.getContext("2d"),
		});	
	}
	//当选择开始游戏后
	onChange (checked) {
		//显示画布
		this.setState({
			isShow : "block"
		});
		//重新改变画布的大小
		const oThat = this;
		const ctx = this.state.ctx;
		const maxWidth = this.state.width;
		const maxHeight = this.state.height;
		var iLeft = 0;
		var oTan = oThat.refs.tan;
		let iNum = 0;
		//生成小球
		var ball = new CanvasBall(ctx,maxWidth,maxHeight,1);
		ball.controller();
		//键盘控制事件
		document.onkeydown = function(e){
			var  ev = e||window.event;
			
			if(ev.keyCode === 37 && iLeft >= 0){
				iLeft -= 20; 
				oTan.style.left = iLeft + "px";
			}
			if(ev.keyCode === 39 && iLeft <= maxWidth){
				iLeft += 20; 
				oTan.style.left = iLeft + "px";
			}
		}
		//监听事件
		var iTimer = setInterval(() => {
			if(ball.y >= maxHeight - 40){
				//获取弹板的偏移以及宽度
				var oLeft = oTan.offsetLeft;
				var oWidth = oTan.offsetWidth;
				//检测碰撞
				var result = pz(ball.x,oLeft,ball.r * 2,oWidth);
				if(result){
					var iX = ball.x;
					var iY = ball.y;
					iNum++;
					//完成任务
					if(iNum > 5){
						success();
						iNum = 0;
					}
					ball = new CanvasBall(ctx,maxWidth,maxHeight,-1);
					//改变小球默认值
					ball.x = iX;
					ball.y = iY;
					var aa = Math.random();
					ball.dx = aa > 0.5 ? (-1 * ball.dx) : ball.dx; //增加点变化
			
					ball.controller();
				}else{
					clearInterval(iTimer);
					warning();
				}
			}
		},100)
		//赋给状态，方便其他地方关闭调用
		this.setState({
			iTimer : iTimer
		});
	}
	//关闭游戏
	close () {
		this.setState({
			isShow : "none"
		});
		clearInterval(this.state.iTimer);
	}
}

//碰撞函数(水平方向简单检测)
function pz(x1,x2,w1,w2){
	if(x1>x2){
		if(x1-x2 < w2){
			return true;
		}
	}else{
		if(x2-x1 < w1){
			return true;
		}
	}
}
//弹出框
function success() {
  Modal.success({
    title: '提示',
    content: '您已完成任务量！您可以选择确认后点击退出游戏！或者继续玩！',
  })
}
function warning() {
  Modal.warning({
    title: '提示',
    content: '可能是。。。。要不？退出游戏，玩下一个试试？',
  });
}