/*if (jQuery != "undefined") {
	alert("jQuery is working");
} else {
	alert("jQuery is NOT working");
};*/


// HEADER ANIMATIONS

$(function(){
	$("#header").data("size", "big");
});

$(window).scroll(function(){
	if ($(document).scrollTop() > 0) {
		if ($("#header").data("size") == "big") {
			// styles
			$("#header").data("size", "small");
			
			$("#header").stop().animate({
            	height: "40px",
            	paddingTop: "10px"
        	},600);

			$("#logo h1").stop().animate({
            	fontSize: "35px"
        	},600);

        	$("#nav").stop().animate({
            	paddingTop: "10px"
        	},600);

        	$("#logo p").fadeOut(100);

			//$("#logo p").css("display", "none");


			// end styles
		};
	} else {
		if ($("#header").data("size") == "small") {
			// styles
			$("#header").data('size','big');
        	
        	$("#header").stop().animate({
            	height:'100px',
            	paddingTop: "30px"
        	},600);

        	$("#logo h1").stop().animate({
            	fontSize: "60px"
        	},600);

        	$("#nav").stop().animate({
            	paddingTop: "45px"
        	},600);

        	$("#logo p").fadeIn(100);

			//$("#logo p").css("display", "inline");

        	// end styles
		};
	};
});


// NAV SCROLLING ANIMATIONS

var $root = $('html, body');

$("#nav a:first").click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, "href") ).offset().top + (-150)
    }, 500);
    return false;
});

$(".midpagelinks").click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, "href") ).offset().top + (-80)
    }, 500);
    return false;
});



$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$("#scrolltop").fadeIn();
		} else {
			$("#scrolltop").fadeOut();
		}
	});
	
	//Click event to scroll to top
	$("#scrolltop").click(function(){
		$("html, body").animate({scrollTop : 0},500);
		return false;
	});
	
});


// THEME CHOOSER

$("#theme").click(function() {
	
	if ($("#wrapper").css("backgroundColor")=="rgb(255, 255, 255)") {
		
		$("#theme").css("backgroundColor","#FFFFFF");
		$("#wrapper, #header, #footer").css("backgroundColor","#171D25");
		$("#header").css("color","rgba(255, 255, 255, 0.9)");
		$("h2").css("color","#007BA8");
		$("#content p, h3, #footer").css("color","rgba(152,175,197,0.7)");
		$("#footer").css("borderTop","solid 1px rgba(243, 243, 243, 0.1)");
	
	} else {
		
		$("#theme").css("backgroundColor","#171D25");
		$("#wrapper, #header, #footer").css("backgroundColor","#FFFFFF");
		$("#header, h2").css("color","#333333");
		$("#content p, h3").css("color","#3a3a3a");
		$("#footer").css("color","rgba(0,0,0,0.5)");
		$("#footer").css("borderTop","solid 1px rgba(243, 243, 243, 1)");
	};
});


$("#theme").hover(function(){

	if ($("#wrapper").css("backgroundColor")=="rgb(255, 255, 255)") {
		$("#themeHelp").html("Apply dark theme");
		$("#themeHelp").css("color", "rgba(0,0,0,0.6)");
		$("#themeHelp").css("display", "inline");
			
	} else {
		$("#themeHelp").html("Apply light theme");
		$("#themeHelp").css("color", "rgba(152,175,197,0.6)");
		$("#themeHelp").css("display", "inline");
		
	};
},function(){
	$("#themeHelp").css("display", "none");
});