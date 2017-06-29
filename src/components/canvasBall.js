function Ball (ctx,maxWidth,maxHeight,direction) {
	//基础值
	const aColor = ["red","green","yellow","pink","lightblue","lightgreen","white"];
	this.ctx = ctx;
	this.x = 0;
	this.y = 0;
	this.r = Math.random() * 10 + 10;
	this.deg = Math.PI * 2;
	this.color = aColor[Math.floor(Math.random() * aColor.length)];

	this.maxW = maxWidth;
	this.maxH = maxHeight;
	this.direction = direction;
	this.dx = 1;
	//时间变量
	this.iTimer = "";
}
Ball.prototype = {
	draw () {
		const ctx = this.ctx;
		ctx.beginPath(); //开始新的路径
		ctx.fillStyle = this.color;
		
		ctx.arc(this.x,this.y,this.r,0,this.deg,true);
		ctx.fill();
		return this
	},
	change () {
		//改变值
		const sx = this.maxW/130;
		const sy = this.maxH/120;
		//控制左右速度的方向
		if(this.x >= this.maxW){
			this.dx = -1;
		}else if(this.x <= 0){
			this.dx = 1;	
		}
		//控制上下速度的方向
		this.direction = this.y < this.r && this.direction < 0 ? -1 * this.direction : this.direction;
		//显示速度
		this.speedX = this.dx * sx ;
		this.speedY = this.direction * sy;
		//改变左右位置
		this.x += this.speedX;
		this.y += this.speedY;
	},
	destroy () {
		this.ctx.clearRect(0,0,this.maxW,this.maxH);
		return this
	},
	controller () {
		this.destroy().draw().change();
		if(this.y < this.maxH ) {
			this.iTimer = setTimeout(function(){
				this.controller();
			}.bind(this),40)
		}else{
			clearTimeout(this.iTimer);
			this.destroy();
		}
	}
}
export default Ball;
