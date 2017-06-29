import React, { Component } from 'react';
import {Link} from "react-router";
import { Carousel} from 'antd';

import '../css/welcome.css';

export default class Welcome extends Component  {
	constructor (props) {
		super(props);
		this.state = {
			isShow : "block"
		}
	}
	render () {
		let settings = {
	      dots: true,
	      infinite: true,
	      speed: 1000,
	      autoplay : true,
	      slidesToShow: 1,
	      slidesToScroll: 1,
		  pauseOnHover : false	      
	    };
		return (
			<div className="welcomeContainer">
				<div className="zhegai" style={{display:this.state.isShow}}></div>
				<div className="showLight"></div>
				<div className="showInfo"><Link to="/home">To know Me More</Link></div>
				<div className="showBox">
					<ul className="showFloor">
						<li></li>					
						<li></li>					
						<li></li>					
						<li></li>					
						<li></li>					
						<li></li>
						<li><img src={require('../img/1.jpg')}/></li>
					</ul>
				</div>
				<Carousel {...settings} >
				    <div className="banner"><img src={require('../img/b1.jpg')} /></div>
				    <div className="banner"><img src={require('../img/b2.jpg')} /></div>
				    <div className="banner"><img src={require('../img/b3.jpg')} /></div>
				    <div className="banner"><img src={require('../img/b4.jpg')}  /></div>
				 </Carousel>
			</div>
		)
	}
	componentDidMount () {
		setTimeout(()=>{
			this.setState({
				isShow : "none"
			})
		},3500)
	}
	
}
