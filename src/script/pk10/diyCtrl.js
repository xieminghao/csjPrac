$.ajax({
	url:'http://120.76.188.66:8080/pk10/',
	data:{},
	datatype:'html',
	type:'get',
	success:function(res){
		$('#lot-content').html(res);
		// drawTrend();
	}
});