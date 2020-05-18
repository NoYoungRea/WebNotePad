var sideBarClickCount = 0;

$(document).on("click", ".SideBarOpenAndClose", function() {
	$('.SideBarOpenAndClose').SideBarOpenAndClose();
})

$.fn.SideBarOpenAndClose = function() {
	sideBarClickCount++;
	if (sideBarClickCount == 1) {
		$('.left').css("width","20%");
		$('.right').css("width","80%")
		$('.right > div').not('.right > div.editorToolbar').remove();
		 $(".category option:eq(0)").prop("selected", true);
		 $('.list').empty();
//		document.getElementById("main").style.marginLeft = "250px";
	} else {
		$('.right > div').not('.right > div.editorToolbar').remove();
		let box=$('<div>',{class:"editorBox"}).appendTo($('.right'));
		$('<br>').appendTo(box);
		let editor=$('<div>',{id:"editor"}).appendTo(box);
		$('<h1>',{id:"title",contentEditable:true,text:"입력"}).appendTo(editor);
		$('<div>',{id:"shdudfo",contentEditable:true}).appendTo($('<div>',{id:"content"}).appendTo(editor));
		$('<br>').appendTo(box);
		let addThemeBox=$('<div>',{class:"addThemeBox"}).appendTo(box);
		$('<button>',{id:"addTheme",text:"테마추가"}).appendTo(addThemeBox);
		$('<button>',{id:"cancelToCreate",text:"취소하기"}).appendTo(addThemeBox)
		$(box).find('#title').focus();
		$('.left').css("width","0%");
		$('.right').css("width","100%");
//		document.getElementById("main").style.marginLeft = "0px";
	}
	if (sideBarClickCount == 2) {	// 열고 닫았을 때
		sideBarClickCount = 0;
	}
}

$(document).ready(function() {

})