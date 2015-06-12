var main = function() {
	"use strict";

	$(".page-main__comments-input-button").on("click", function(event) {
		var $new_comment = $("<p class=\"page-main__comments-text\">");
		
		if ($(".page-main__comments-input").val() !== "") {
			var $comment_text = $(".page-main__comments-input").val();
			$new_comment.text($comment_text);
			$(".page-main__comments-block").append($new_comment);
			$(".page-main__comments-input").val("");
		};
		
	});

	$(".page-main__comments-input").on("keypress", function(event) {
		var $new_comment = $("<p class=\"page-main__comments-text\">");
		
		if (event.keyCode === 13) {
			if ($(".page-main__comments-input").val() !== "") {
				var $comment_text = $(".page-main__comments-input").val();
				$new_comment.text($comment_text);
				$(".page-main__comments-block").append($new_comment);
				$(".page-main__comments-input").val("");
			};
		};
		
	});
};

$(document).ready(main);