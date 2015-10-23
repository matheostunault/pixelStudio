function Dot(name, selected){
	Tools.call(this, name, selected);
	this.name = name;
	
}

Dot.prototype = Object.create(Tools.prototype);

Dot.prototype.dot_draw = function(){
	
}