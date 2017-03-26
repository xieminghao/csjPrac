// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";
// console.log(host+pathname);
 var datas = '[{"Period":170326042,"Result":6,"Nums":[5,20,1,6,4,0,11,19,9,8,7],"ZX":0,"FX":1,"CH":2,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170326041,"Result":3,"Nums":[4,19,0,5,3,1,10,18,8,7,6],"ZX":2,"FX":0,"CH":1,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170326040,"Result":6,"Nums":[3,18,8,4,2,0,9,17,7,6,5],"ZX":1,"FX":3,"CH":0,"Big":0,"Small":2,"Odd":2,"Even":0},{"Period":170326039,"Result":6,"Nums":[2,17,7,3,1,0,8,16,6,5,4],"ZX":0,"FX":2,"CH":12,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170326038,"Result":5,"Nums":[1,16,6,2,0,14,7,15,5,4,3],"ZX":0,"FX":1,"CH":11,"Big":3,"Small":0,"Odd":0,"Even":2},{"Period":170326037,"Result":1,"Nums":[0,15,5,1,10,13,6,14,4,3,2],"ZX":2,"FX":0,"CH":10,"Big":2,"Small":0,"Odd":0,"Even":1},{"Period":170326036,"Result":4,"Nums":[28,14,4,0,9,12,5,13,3,2,1],"ZX":1,"FX":0,"CH":9,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170326035,"Result":11,"Nums":[27,13,3,6,8,11,4,12,2,1,0],"ZX":0,"FX":3,"CH":8,"Big":0,"Small":3,"Odd":0,"Even":1},{"Period":170326034,"Result":10,"Nums":[26,12,2,5,7,10,3,11,1,0,22],"ZX":0,"FX":2,"CH":7,"Big":0,"Small":2,"Odd":1,"Even":0},{"Period":170326033,"Result":9,"Nums":[25,11,1,4,6,9,2,10,0,17,21],"ZX":0,"FX":1,"CH":6,"Big":0,"Small":1,"Odd":0,"Even":4},{"Period":170326032,"Result":3,"Nums":[24,10,0,3,5,8,1,9,2,16,20],"ZX":2,"FX":0,"CH":5,"Big":1,"Small":0,"Odd":0,"Even":3},{"Period":170326031,"Result":7,"Nums":[23,9,3,2,4,7,0,8,1,15,19],"ZX":1,"FX":0,"CH":4,"Big":0,"Small":2,"Odd":0,"Even":2},{"Period":170326030,"Result":9,"Nums":[22,8,2,1,3,6,5,7,0,14,18],"ZX":0,"FX":2,"CH":3,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170326029,"Result":4,"Nums":[21,7,1,0,2,5,4,6,19,13,17],"ZX":0,"FX":1,"CH":2,"Big":4,"Small":0,"Odd":1,"Even":0},{"Period":170326028,"Result":3,"Nums":[20,6,0,8,1,4,3,5,18,12,16],"ZX":3,"FX":0,"CH":1,"Big":3,"Small":0,"Odd":0,"Even":4},{"Period":170326027,"Result":5,"Nums":[19,5,16,7,0,3,2,4,17,11,15],"ZX":2,"FX":1,"CH":0,"Big":2,"Small":0,"Odd":0,"Even":3},{"Period":170326026,"Result":5,"Nums":[18,4,15,6,0,2,1,3,16,10,14],"ZX":1,"FX":0,"CH":4,"Big":1,"Small":0,"Odd":0,"Even":2},{"Period":170326025,"Result":7,"Nums":[17,3,14,5,10,1,0,2,15,9,13],"ZX":0,"FX":1,"CH":3,"Big":0,"Small":3,"Odd":0,"Even":1},{"Period":170326024,"Result":6,"Nums":[16,2,13,4,9,0,7,1,14,8,12],"ZX":1,"FX":0,"CH":2,"Big":0,"Small":2,"Odd":7,"Even":0},{"Period":170326023,"Result":8,"Nums":[15,1,12,3,8,4,6,0,13,7,11],"ZX":0,"FX":2,"CH":1,"Big":0,"Small":1,"Odd":6,"Even":0},{"Period":170326022,"Result":2,"Nums":[14,0,11,2,7,3,5,8,12,6,10],"ZX":3,"FX":1,"CH":0,"Big":3,"Small":0,"Odd":5,"Even":0},{"Period":170326021,"Result":2,"Nums":[13,0,10,1,6,2,4,7,11,5,9],"ZX":2,"FX":0,"CH":34,"Big":2,"Small":0,"Odd":4,"Even":0},{"Period":170326020,"Result":4,"Nums":[12,2,9,0,5,1,3,6,10,4,8],"ZX":1,"FX":0,"CH":33,"Big":1,"Small":0,"Odd":3,"Even":0},{"Period":170326019,"Result":6,"Nums":[11,1,8,28,4,0,2,5,9,3,7],"ZX":0,"FX":1,"CH":32,"Big":0,"Small":1,"Odd":2,"Even":0},{"Period":170326018,"Result":2,"Nums":[10,0,7,27,3,18,1,4,8,2,6],"ZX":2,"FX":0,"CH":31,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170326017,"Result":7,"Nums":[9,8,6,26,2,17,0,3,7,1,5],"ZX":1,"FX":0,"CH":30,"Big":0,"Small":2,"Odd":0,"Even":1},{"Period":170326016,"Result":10,"Nums":[8,7,5,25,1,16,3,2,6,0,4],"ZX":0,"FX":1,"CH":29,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170326015,"Result":5,"Nums":[7,6,4,24,0,15,2,1,5,22,3],"ZX":1,"FX":0,"CH":28,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170326014,"Result":8,"Nums":[6,5,3,23,9,14,1,0,4,21,2],"ZX":0,"FX":1,"CH":27,"Big":0,"Small":3,"Odd":1,"Even":0},{"Period":170326013,"Result":7,"Nums":[5,4,2,22,8,13,0,10,3,20,1],"ZX":1,"FX":0,"CH":26,"Big":0,"Small":2,"Odd":0,"Even":4},{"Period":170326012,"Result":11,"Nums":[4,3,1,21,7,12,5,9,2,19,0],"ZX":0,"FX":1,"CH":25,"Big":0,"Small":1,"Odd":0,"Even":3},{"Period":170326011,"Result":3,"Nums":[3,2,0,20,6,11,4,8,1,18,14],"ZX":1,"FX":0,"CH":24,"Big":1,"Small":0,"Odd":0,"Even":2},{"Period":170326010,"Result":9,"Nums":[2,1,20,19,5,10,3,7,0,17,13],"ZX":0,"FX":2,"CH":23,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170326009,"Result":2,"Nums":[1,0,19,18,4,9,2,6,5,16,12],"ZX":0,"FX":1,"CH":22,"Big":2,"Small":0,"Odd":1,"Even":0},{"Period":170326008,"Result":1,"Nums":[0,2,18,17,3,8,1,5,4,15,11],"ZX":1,"FX":0,"CH":21,"Big":1,"Small":0,"Odd":0,"Even":2},{"Period":170326007,"Result":7,"Nums":[5,1,17,16,2,7,0,4,3,14,10],"ZX":0,"FX":1,"CH":20,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170326006,"Result":2,"Nums":[4,0,16,15,1,6,11,3,2,13,9],"ZX":2,"FX":0,"CH":19,"Big":2,"Small":0,"Odd":1,"Even":0},{"Period":170326005,"Result":5,"Nums":[3,7,15,14,0,5,10,2,1,12,8],"ZX":1,"FX":0,"CH":18,"Big":1,"Small":0,"Odd":0,"Even":2},{"Period":170326004,"Result":9,"Nums":[2,6,14,13,3,4,9,1,0,11,7],"ZX":0,"FX":2,"CH":17,"Big":0,"Small":2,"Odd":0,"Even":1},{"Period":170326003,"Result":8,"Nums":[1,5,13,12,2,3,8,0,26,10,6],"ZX":0,"FX":1,"CH":16,"Big":0,"Small":1,"Odd":1,"Even":0}]';
    var stats = '[{"Period":0,"Result":0,"Nums":[2,5,4,3,5,5,5,3,4,2,2],"ZX":19,"FX":18,"CH":3,"Big":21,"Small":19,"Odd":22,"Even":18},{"Period":0,"Result":0,"Nums":[28,20,20,28,10,18,11,19,26,22,22],"ZX":3,"FX":3,"CH":34,"Big":4,"Small":3,"Odd":7,"Even":4}]';



$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	datatype:'html',
	type:'get',
	// headers: {'isaj': true},
	success: function(res){
		$('.web_dateLineBody').replaceWith(res);
		 $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/gd11x5/chart.js',type:'text/javascript'}).appendTo($('body'));


		$(function () {
            if (top != self) {
                $(".history_gg").show();
            }
            $(".top_warn .closeBtns").click(function () {
                $(".top_warn").fadeOut(100);
                $(".ydImg").css({ "top": "5px" });
            })
        });

		
	}
});


