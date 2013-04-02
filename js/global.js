// namespace principal
App = {};

// namespace para objetos
App.objects = {};

App.objects.pageSliderHome = function() {
	var that = this;
	this.contentSite = $('.content-site');
	this.container = $('.sli-width');
	this.buttonEnter = $('.button-enter');

	
	this.setWidthContent();
	this.nextSlidePage();


}

App.objects.pageSliderHome.prototype = {
	setWidthContent : function() {
		var width = 0;
		$('.content-site .sli-width').each(function(){
			width += $(this).width();
		});

		this.contentSite.width(width);

	},

	nextSlidePage : function() {
		var that = this;
		var  maxLeft = this.container.width();

		console.log(maxLeft)

		this.buttonEnter.on('click', function(){
			that.contentSite.animate({
				'left' : -maxLeft
			})
		});
	}

}

$(function () {
	// App.pagesliderhome = new App.objects.pageSliderHome();
});