import React, { Component } from 'react'
import '../css/ptCanvas.css'
export default class PinTu extends Component  {
	constructor (props) {
		super(props);
		this.state = {
			
		}
	}
	render () {
		return (
			<div>
				<div className="pt-info">
					<h2>超级拼图</h2>
					<p>名字听着,很霸气,其实就是个拼图!Are you ready to get amazing?</p>
					<div className="floor"></div>
					<div className="bgBall"></div>
					<canvas ref="initPT" width="800px" height="400px" className="ptCanvas"></canvas>
				</div>
			</div>
		)
	}
}