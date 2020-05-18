var message = [ 
	{	content : "스스로 불러온 태양에 짓눌려 하늘은 탄식에 가리우며 멸망의 공포가 지배하는 이곳희망은 이미 날개를 접었나 대지aaaaaaaaaaaa", sender : "as", receive: "2020-01-01"		}, 
	{	content : "쪽지입니다.", sender : "유저2", receive: "2020-02-02"		}, 
	{	content : "테스트1", sender: "유저3", receive : "2020-03-03" }, 
	{	content : "테스트2", sender: "유저4", receive : "2020-04-04"		}, 
	{	content : "테스트3", sender: "유저5", receive : "2020-05-05"	}, 
	{	content : "마지막 테스트 쪽지aaaaaaaaaaaaaaaaa", sender: "유저6", receive : '2020-06-06'		} 
]
var messageOpen = false;
var messageCnt = 0;

$(document).ready(function() {
	$(document).on('mousedown','.out',function(){
		if(!messageOpen){
			return;
		}
		
		$('#SuperBox').css("width", "100px");
		$('#SuperBox').css("height", "20px");
		$('.Message').empty();
		$('.Message').text('쪽지함');
		$(this).test1();
		messageOpen = false;
		
		//61
	})
	$(document).on('mousedown','.delete',function(){
		messageCnt--;
		$(this).closest('.user').remove();
		if(messageCnt==0) {
			$('<div>', {class: "user",text: "수신한 메시지가 없습니다."}).appendTo('.Message');
		}
	})
	
	$(document).on('mousedown', '.reply', function() {
		$('.replyBox').css("display", "block");
		$('#receiver').val($(this).closest('.user').attr("id"));
		$('#replyView').val("");
	})
	
	$(document).on('click', '#SuperBox', function() {
		
		if (messageOpen) {
			return;
		}
		else {		
			$('#SuperBox').css("width", "300px");
			$('#SuperBox').css("max-height", "400px");
			$('#SuperBox').css("height", "auto");
				$('<button>',{class:"out",text:"나가기"}).appendTo($("<div>",{class:"outDiv"}).appendTo(".Message"));
				$.each(message, function(index, item) {
					let ul = $('<div>', {class:"user",id : item["sender"]}).appendTo($(".Message"));
					let div = $('<div>', {id : "userName",text: "작성자 :"+ item["sender"]}).appendTo(ul);
					$('<button>', {class: "reply", id:item["sender"], text:"답장하기"}).appendTo(div);
					$('<button>',{class:"delete",id:item["sender"],text:"삭제하기"}).prependTo(div);
					if(item["content"].length>58){
						$('<div>', {id : "content",text: item["content"].substring(0,58)+"..."}).appendTo(ul);
					}
					else{
						$('<div>', {id : "content",text: item["content"]}).appendTo(ul);
					}
					$('<div>', {id : "date",text: item["receive"]}).appendTo(ul);
					messageCnt++;
				});
				messageOpen = true;
				$("#searchList").remove();
			}
		
		if(messageCnt==0) {
			$('<div>', {class:"user",text: "수신한 메시지가 없습니다."}).appendTo('.Message');
		}
	});	
	
	$(document).on('click', ".user", function() {
		  $(this).css("background-color","blue");
	      $('.viewBox').css("display", "inline-block");
	      $('#sender').val($(this).attr("id"));
	      $('#receiveDate').val($(this).children('#date').text());
	      $('#messageView').val($(this).children('#content').text());
	})
	
	$(document).on('keyup','#searchByCategory',function(key) {
		let selectOption=$('.searchCategory option:selected').val();
		if(selectOption=="byName"){
			$.ajax({
				url: "/TeamProject/member/searchByID",
				type: 'post',
				data:{
					selectOption:$(".searchCategory option:selected").val(),
					keyword:$('#searchByCategory').val()
				},
				success: function(data){
					if(data.length<3){
						$('#searchList').css("display","none");
                        return ;
                    }
					else{
						$('#searchList').css("display","block");
						$('#searchList').empty();
						$(this).test1();
						let div = $('<div>').appendTo($('#searchList'));
						let searchByIDList = $('<div>',{class:"ManList",text:data}).appendTo(div);
						$('<button>',{id:"invite",text:"초대"}).appendTo(searchByIDList);
						$('<button>',{id:"whisper",text:"쪽지"}).appendTo(searchByIDList);
						
					}
				}
			});
			
		}else if(selectOption=="byGroup"){
			console.log("그룹");
			let keyword =$('#searchByCategory').val()
			$.ajax({
				url:"/TeamProject/Group/search",
				type:'post',
				data:{
					groupName:keyword
				},
				success:function(data){
					if(data.leaderNameList.length==0){
						$('#searchList').css("display","none");
						return;
					}
					else{
						$('#searchList').css("display","block");
						$('#searchList').empty();
						$(this).test1();
						for(let i=0;i<data.leaderNameList.length;i++){
						let div = $('<div>').appendTo($('#searchList'));
						let searchByGroupList = $('<div>',{class:"ManList",text:data.leaderNameList[i].name}).appendTo(div);
						$('<span>',{id:"NameOfGroup",text:keyword}).appendTo(searchByGroupList);
						$('<button>',{id:"invite",text:"초대"}).appendTo(searchByGroupList);
						$('<button>',{id:"whisper",text:"쪽지"}).appendTo(searchByGroupList);
						}
					}
				}
			})
		}
		
        
    });
	
	$(document).on('click','#searchBtn',function(key) {
		if($(".searchCategory option:selected").val()==null){
			return; 
		}
    	$.ajax({
			url: "/TeamProject/member/searchByID",
			type: 'post',
			data:{
				selectOption:$(".searchCategory option:selected").val(),
				keyword:$('#searchByCategory').val()
			},
			success: function(data){
				console.log(data);
				if(data==''){
					console.log(data);
					return;
				}
				else{
					$('#searchList').empty();
					$(this).test1();
					let div = $('<div>').appendTo($('#searchList'));
					let searchByIDList = $('<div>',{class:"ManList",text:data}).appendTo(div);
					$('<button>',{id:"invite",text:"초대"}).appendTo(searchByIDList);
					$('<button>',{id:"whisper",text:"쪽지"}).appendTo(searchByIDList);
				}
			}
		});
        
    });
	
	 $.fn.test1=function(){  
         let hei =$('.searchCategory').offset().top;
         let wid =$('.searchCategory').offset().left;
         $('#searchList').offset( { left: wid+135, top: hei+24} );
         $('#searchList').css("display","block");
 
     }  
	 $.fn.test2=function(){  
         let hei =$('.searchCategory').offset().top;
         let wid =$('.searchCategory').offset().left;
         $('#searchList').offset( { left: wid+335, top: hei+24} );
         $('#searchList').css("display","block");
 
     }  
})
