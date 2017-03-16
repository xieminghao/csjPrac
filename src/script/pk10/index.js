// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
console.log(host+pathname);

var successFn = function(res){
    //alert('req success!')
    $('#lot-content').html(res);
    // $('.feedbackDiv').remove();
    // $('li[data-tag="zh"]').remove();
    // $('li[data-tag="tbm"]').remove();
    // $('li[data-tag="sjyy"]').remove();
    // $('li[data-tag="jq"]').remove();
}
//alert('req begin!')
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: successFn
});


//$.ajax({
//    url: host+pathname,
//    method:'get',
//    success: successFn
//});

function ajax (settings) {
    var headers, name, transports, transport, i, length, xdrFlag = false;
    headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'text/javascript, text/html, application/xml, text/xml, */*',
        "Content-Type": "application/json",
        "data-type" : "json"
    };

    function createCORSRequest(){
        var xhr;
        try {
            xhr = new XMLHttpRequest();
        }catch(e){
            xhr = new XDomainRequest();
        }
        if ("withCredentials" in xhr){

        } else if (typeof XDomainRequest != "undefined"){
            xhr = new XDomainRequest();
            xdrFlag = true;
        } else {
            xhr = null;
        }
        return xhr;
    }
    var transport = createCORSRequest();
    if(xdrFlag && typeof transport != 'undefined'){
        // xdr,IE下
        transport.open('get', settings.url, true);
        transport.onload = function() {
            alert(typeof(transport.responseText))
            settings.success(transport.responseText)
        };
        transport.send();
    }else if(typeof transport != 'undefined') {
        transport.onreadystatechange = function () {
            if (transport.readyState !== 4) {
                return;
            }
            if (transport.readyState === 4 && transport.status >= 200 && transport.status < 400) {
                settings.success(transport.responseText);
            }else{
                settings.fail(transport.responseText);
            }
        };
        if(settings.timeout) {
            transport.timeout = settings.timeout;
        }
        if(settings.method == 'get'){
            transport.open('get', settings.url, true);
            transport.send();
        }else{
            transport.open('post', settings.url, true);
            for (name in headers) {
                transport.setRequestHeader(name, headers[name]);
            }
            transport.send(JSON.stringify(settings.param));
        }
    }
};