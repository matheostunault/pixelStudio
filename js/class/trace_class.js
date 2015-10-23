function Trace(name, selected){
	Tools.call(name, selected);
}

Trace.prototype = Object.create(Tools.prototype);

Trace.prototype.Trace_draw = function(){
	//
}