/**
 * Pixel représente un pixel dans le cadre de dessin
 * @param {number} x     position horizontale
 * @param {number} y     position verticale
 * @param {number} size  largeure et hauteure du pixel
 * @param {string} color couleure du pixel
 */
function Pixel(x,y,size,color){
	this.size = size || 50; 
	this.$el = ('<div class="pixel"></div>');

	this.set_color(color);	
	this.set_size(size);
	this.set_position(x,y);
	
	$('body').append(this.$el);
}

Pixel.prototype = {

	/**
	 * Permet de changer la position
	 * @param {number} x     position horizontale
 	 * @param {number} y     position verticale
	 */
	set_position: function(x,y){
		this.x = x;
		this.y = y;
		this.$el.css({
			'top'	: (this.y - 1) * this.size + 'px',
			'left'	: (this.x - 1) * this.size + 'px'
		})	
	},

	/**
	 * permet de definire la taille du pixel
 	 * @param {number} size  largeure et hauteure du pixel
	 */
	set_size: function(size){
		this.size = size || 50;
		this.$el.css({
			width 	: this.size + 'px' ,
			height 	: this.size + 'px' 
		})
	},

	/**
	 * permet de definire la couleur du pixel
	 * @param {string} color couleur du pixel
	 */
	set_color: function(color){
		this.color = color  || 'red';
		this.$el.css('background-color', this.color)
	}
}