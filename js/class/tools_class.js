function Tools(name, selected){
	this.name = name;
	this.selected = selected || false
	this.$button = $('<button class="button" id="' + name + '">' + name + '</div>');
	$('#toolbar').append(this.$button);
};

Tools.prototype = {
	get_selected:function(object) {
		$('#' + object.name).on('clic', function() {
			console.log('clicked'); 
			object.selected = true;
		}) 
		
	}
}