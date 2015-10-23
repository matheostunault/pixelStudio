function Dot(name, selected){
	Tools.call(name, selected);
}

Dot.prototype = Object.create(Tools.prototype);

Dot.prototype.dot_draw = function(){
	
}