/**
 * Created by liutongwang on 2017/3/11.
 */
function openDialog(a){$.dialog({title:"提示",padding:"5px",width:400,height:50,content:a,ok:!1})}function checkInput(){var b,a=0;if(json.length>0)for(b=0;b<json.length;b++)if(json[b].index<5){if(json[b].end>0&&json[b].star<=0||json[b].end<=0&&json[b].star>0){a=2,openDialog("参数设置"+(b+1)+":请输入正确的范围值");break}if(json[b].end>500||json[b].star<2){a=1,openDialog("参数设置"+(b+1)+":范围在2-500");break}if(json[b].end<json[b].star){a=2,openDialog("参数设置"+(b+1)+":范围结束值必须大于等于开始值");break}if(b>0){if(json[b-1].end>=json[b].star&&json[b].star>=json[b-1].star||json[b-1].end>=json[b].end&&json[b].end>=json[b-1].star){a=3,openDialog("参数设置范围不能重复与重叠");break}if(json[b-1].star>=json[b].star&&json[b].end>=json[b-1].end){a=3,openDialog("参数设置范围不能重复与重叠");break}}}return json.length>2&&0==a&&json[0].index<5&&json[2].index<5&&(json[0].star>=json[2].star&&json[2].end>=json[0].end?(a=3,openDialog("参数设置1,3范围不能重复或重叠")):(json[0].end>=json[2].star&&json[2].star>=json[0].star||json[0].end>=json[2].end&&json[2].end>=json[0].star)&&(a=3,openDialog("参数设置1,3范围不能重复或重叠"))),a}function loadData(){var a=checkInput();0==a&&changedata()}function setList(a){var d,b=$("#mobang").html(),c=[];c.push(b.replaceWith(a)),d=$("#colorSet i").length+1,3==d?($(".sa2[pid='"+(d-1)+"']").show(),$("#spAdd").hide()):d>1?($("#spDel").show(),$(".sa2[pid='"+(d-1)+"']").show()):$("#spDel").hide(),$("#spAdd").before(c.join("")),$(".sa2[pid='"+d+"']").hide()}function changedata(){json.length>0&&($(".lot-table span").attr("class","span"),$(".lot-table span").each(function(){number=Number($(this).attr("data"));for(var a=0;a<json.length;a++)json[a].index<5&&json[a].star<=number&&number<=json[a].end&&$(this).attr("class",json[a].color)}))}var json=[];$(function(){var a=$("#callFun").attr("lottery");"gdkl10"==a||"xync"==a?json.push({index:1,star:15,end:300,color:"red",bgcolor:"color_red"}):json.push({index:1,star:15,end:100,color:"red",bgcolor:"color_red"}),$(".sa2").live("click",function(){var a=Number($(this).attr("pid")),b=$("#colorSet span[id^='sid']").length;2==a?($(".sa2[pid='"+(b-1)+"']").hide(),3==b&&($("#sid3").remove(),json.remove(2))):1==a&&b>2?($("#sid2").remove(),$("#sid3").remove(),$("#spDel").hide(),json.remove(2),json.remove(1)):1==a&&b>1?($("#sid2").remove(),$("#spDel").hide(),json.remove(1)):($("#sid3").remove(),json.remove(2)),$("#spAdd").show(),loadData()}),$("#colorSet input[tty='0']").live("blur",function(){var b,c,a=Number($(this).attr("pid"));isNaN(a)?openDialog("参数错误！"):(b=$("#star"+a).val(),c=$("#end"+a).val(),""==b&&""==c?(b=0,c=0,json[a-1].index=5):(b=Number($("#star"+a).val()),c=Number($("#end"+a).val()),json[a-1].index=a),json.length>0&&(json[a-1].star=b,json[a-1].end=c))}),$("#spAdd").click(function(){var b,c,d,e,f,a=$("#colorSet input[tty='0']").length;return isNaN(Number(a))?(openDialog("参数错误！"),void 0):a>4?(openDialog("最多只能设置3个！"),void 0):(b=Number($("#colorSet input[tty='0']").eq(a-1).val()),c=$("#colorSet i").length+1,d="red",e="color_red",2==c?(d="blue",e="color_blue"):3==c&&(d="green",e="color_green"),f={index:c,star:b+1,end:b+50,color:d,bgcolor:e},json.push(f),setList(f),void 0)}),$("#changedata").click(function(){loadData()})});