$(document).ready(function(){
	$(document).on('click','#cancel',function(){
		$('.viewBox').css("display","none");
	})
	$(document).on('click','#deleteMsgBtn',function(){
		let string="'#"+$('#sender').val()+"'";

		console.log($('.Message').children(eval(string)).attr("id"));
		$('.Message').children(eval(string)).remove();
		$('.viewBox').css("display", "none");
	})
	$(document).on("click", "#replyAtMessage", function() {
		$(".viewBox").css("display","none");
		$(".replyBox").css("display","block");
		$('#receiver').val($(".sender").val);
		$('#replyView').val("");
	});
});