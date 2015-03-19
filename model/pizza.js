var Pizza=function() {
    this.x = Math.floor((Math.random() * 10) + 1);
    this.y = Math.floor((Math.random() * 10) + 1);
    this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
}
Pizza.prototype.move = function() {
	if (Math.random()<0.5) {
		this.x++;
	} else {
		this.x--;
	}
	if (Math.random()<0.5) {
		this.y++;
	} else {
		this.y--;
	}
	if (this.x>10) this.x=10;
	if (this.y>10) this.y=10;
	if (this.x<1) this.x=1;
	if (this.y<1) this.y=1;
	//this.x = Math.floor((Math.random() * 10) + 1);
}

module.exports = Pizza;
