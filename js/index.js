$(function(){

		setInterval('AutoScroll("#s1")', 1000);
})
function AutoScroll(obj) {
		console.log(1)
		$(obj).find("ul:first").animate({
			marginTop: "-25px"
		}, 500, function() {
			$(this).css({
				marginTop: "0px"
			}).find("li:first").appendTo(this);
		});
	}