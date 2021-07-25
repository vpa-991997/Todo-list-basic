$("ul").on("click","li",function(){
	//if li is red, turn it back to black
	$(this).toggleClass("completed");
});

//click on X tos detele todo
$("ul").on ("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
	$(this).remove();
});
	event.stopPropagation();
});

	
$("input[type ='text'").keypress(function(event){
	if(event.which == 13){ //Enter key
		var todo =  $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + todo +"</li>");
}
});
$(".fa-american-sign-language-interpreting").click(function(){
	$("input[type ='text'").fadeToggle();  /*toggle the input text*/
 
});
