$(document).ready(function(){
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$("#loader").fadeOut();

	$("section.spotlight > div > img").each(function(index){
		$(this).css("height",$(this).css("width"));
	});

	$("div.4u > span.image.fit > img").each(function(index){
		$(this).css("height",$(this).css("width"));
		// $(this).css("display","none");
	});

	$("#dp").css("height",$("#dp").css("width"));

	// Function for Typer
	$(function(){
		  langs = [
		  "C/C++ ^350",
		  "Python ^350",
		  "PHP ^350",
		  "Laravel ^350",
		  "HTML ^350",
		  "Java ^350",
		  "Django ^350",
		  "JavaScript ^350",
		  "jQuery ^350",
		  "Golang ^350",
		  "NodeJS ^350",
		  "MongoDB ^350",
		  "SQL/MySQL ^350"
		  ];
	    $("#cursor").typed({
	      strings: langs,
	      typeSpeed: 0,
	      // showCursor:false,
	      loop: true
	    });
	});

});