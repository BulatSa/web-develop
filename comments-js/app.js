var main = function() {
	"use strict";
	$(".page-main__comments-input-button").on("click", function(event) {
		var $new_comment = $("<p class=\"page-main__comments-text\">");
		var $comment_text = $(".page-main__comments-input").val();
		$new_comment.text($comment_text);
		$(".page-main__comments-block").append($new_comment);
	});
};

$(document).ready(main);