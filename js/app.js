var pixelStudio = {

	pixel_dimension:50,
	$draw: null,

	pixels:[],

	init: function(){

	    var dot = new Tools('dot');
	    var dot = new Tools('trace');
	    var dot = new Tools('rubber');
		
		var self = this;
		this.init_draw();

		
		this.$draw.on('mousedown',function(e){
			console.log(e);
		
			var offset = self.$draw.offset();
			var offset_x = e.clientX - parseInt(offset.left);
			var offset_y = e.clientY - parseInt(offset.top);

			var x = Math.floor(offset_x / self.pixel_dimension) + 1;
			var y = Math.floor(offset_y / self.pixel_dimension) + 1

		    var p = new Pixel(x, y,self.pixel_dimension, 'red');

		    self.pixels.push(p);
		});
		

	},

	init_draw: function(){
		this.$draw = $('<div id="draw"></div>');
		$('body').append(this.$draw);

		var w 	= window.innerWidth/this.pixel_dimension;
		w 		= Math.floor(w - (w / 6));

		var h 	= Math.floor(window.innerHeight/this.pixel_dimension);


		this.$draw.css({
			width 	: (w * this.pixel_dimension) + 'px' ,
			height 	: (h * this.pixel_dimension) + 'px' ,
			right 	: 0
		})
	}
};