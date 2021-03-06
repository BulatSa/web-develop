var main = function() {
	"use strict";

	var addCommentFromInput = function() {
		var $new_comment = $("<p class=\"page-main__comments-text\">");
		
		if ($(".page-main__comments-input").val() !== "") {
			var $comment_text = $(".page-main__comments-input").val();
			$new_comment.hide();
			$new_comment.text($comment_text);
			$(".page-main__comments-block").append($new_comment);
			$new_comment.fadeIn();
			$(".page-main__comments-input").val("");
		};

	};

	$(".page-main__comments-input-button").on("click", function(event) {
		addCommentFromInput();
	});

	$(".page-main__comments-input").on("keypress", function(event) {
		if (event.keyCode === 13) {
			addCommentFromInput();
		};
	});

};

$(document).ready(main);