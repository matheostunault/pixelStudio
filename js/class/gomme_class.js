function Rubber(name, selected){
	Tools.call(name, selected);
}

Rubber.prototype = Object.create(Tools.prototype);

Rubber.prototype.dot_draw = function(){
	
}