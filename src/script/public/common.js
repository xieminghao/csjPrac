var HOST = 'http://120.76.188.66:8080';
jQuery.extend({
    //HTTP get方法
    get: function (url, data, callback, type) {
        // shift arguments if data argument was ommited
        if (jQuery.isFunction(data)) {
            callback = data;
            data = null;
        }
        // debugger;
        return jQuery.ajax({
            type: "GET",
            url: HOST+url,
            data: $.extend({isa:true}, data),
            // headers: {
            //     // 'X-Requested-With': 'XMLHttpRequest',
            //     "Access-Control-Allow-Headers":"X-Requested-With"
            // },
            // beforeSend: function(xhr){
            //      xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
            // },
            success: callback,
            dataType: type
        });
    },
    post: function (url, data, callback, type) {

        if (jQuery.isFunction(data)) {
            callback = data;
            data = {};
        }
        return jQuery.ajax({
            type: "POST",
            url: HOST+url,
            data: data,
            success: callback,
            dataType: type
        });
    }
});

//function ajax (settings) {
//    var headers, name, transports, transport, i, length, xdrFlag = false;
//    headers = {
//        'X-Requested-With': 'XMLHttpRequest',
//        'Accept': 'text/javascript, text/html, application/xml, text/xml, */*',
//        "Content-Type": "application/json",
//        "data-type" : "json"
//    };
//
//    function createCORSRequest(){
//        var xhr;
//        try {
//            xhr = new XMLHttpRequest();
//        }catch(e){
//            xhr = new XDomainRequest();
//        }
//        if ("withCredentials" in xhr){
//
//        } else if (typeof XDomainRequest != "undefined"){
//            xhr = new XDomainRequest();
//            xdrFlag = true;
//        } else {
//            xhr = null;
//        }
//        return xhr;
//    }
//    var transport = createCORSRequest();
//    if(xdrFlag && typeof transport != 'undefined'){
//        // xdr,IE下
//        transport.open('get', settings.url, true);
//        transport.onload = function() {
//            alert(typeof(transport.responseText))
//            settings.success(transport.responseText)
//        };
//        transport.send();
//    }else if(typeof transport != 'undefined') {
//        transport.onreadystatechange = function () {
//            if (transport.readyState !== 4) {
//                return;
//            }
//            if (transport.readyState === 4 && transport.status >= 200 && transport.status < 400) {
//                settings.success(transport.responseText);
//            }else{
//                settings.fail(transport.responseText);
//            }
//        };
//        if(settings.timeout) {
//            transport.timeout = settings.timeout;
//        }
//        if(settings.method == 'get'){
//            transport.open('get', settings.url, true);
//            transport.send();
//        }else{
//            transport.open('post', settings.url, true);
//            for (name in headers) {
//                transport.setRequestHeader(name, headers[name]);
//            }
//            transport.send(JSON.stringify(settings.param));
//        }
//    }
//};
//
//
//jQuery.extend({
//    ajax: function(settings) {
//        ajax(settings)
//    },
//    //HTTP get方法
//    get: function (url, data, callback, type) {
//        // shift arguments if data argument was ommited
//        if (jQuery.isFunction(data)) {
//            callback = data;
//            data = null;
//        }
//        // debugger;
//        return jQuery.ajax({
//            type: "GET",
//            url: HOST+url,
//            data: $.extend({isa:true}, data),
//            // headers: {
//            //     // 'X-Requested-With': 'XMLHttpRequest',
//            //     "Access-Control-Allow-Headers":"X-Requested-With"
//            // },
//            // beforeSend: function(xhr){
//            //      xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
//            // },
//            success: callback,
//            dataType: type
//        });
//    },
//    post: function (url, data, callback, type) {
//
//        if (jQuery.isFunction(data)) {
//            callback = data;
//            data = {};
//        }
//        return jQuery.ajax({
//            type: "POST",
//            url: HOST+url,
//            data: data,
//            success: callback,
//            dataType: type
//        });
//    }
//});



































