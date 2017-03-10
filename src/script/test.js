//$.ajax({
//    url: "http://www.1395p.com/pk10/gethistoryandbetgame?count=20&t=0.833900224330856",
//    data: {},
//    type: "GET",
//    beforeSend: function(xhr){xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');},//这里设置header
//    success: function(data) {
//        console.log(data)
//    }
//});

//$.ajax({
//    // url: "http://www.1395p.com/pk10/gethistoryandbetgame?count=20&t=0.833900224330856",
//    url: 'http://120.76.188.66:8080/pk10/gethistoryandbetgame?count=20&t='+'0.833900224330856',
//    data: {},
//    type: "POST",
//    beforeSend: function(xhr){xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');},//这里设置header
//    success: function(data) {
//        console.log(data)
//    }
//});

ajax({
    // url: 'http://www.1395p.com/pk10/gethistoryandbetgame?count=20&t='+'0.833900224330856',
    url: 'http://120.76.188.66:8080/pk10/gethistoryandbetgame?count=20&t='+'0.833900224330856',
    method: 'post',
    success: function (data) {
        console.log(data)
    },
    fail: function(data){
        console.log(data)
    }
});

function ajax (settings) {
    var headers, name, transports, transport, i, length;

    headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'text/javascript, text/html, application/xml, text/xml, */*',
        "Content-Type": "application/json",
        "data-type" : "json"
    };

    transports = [
        function () { return new XMLHttpRequest(); },
        function () { return new ActiveXObject('Msxml2.XMLHTTP'); },
        function () { return new ActiveXObject('Microsoft.XMLHTTP'); }
    ];

    for (i = 0, length = transports.length; i < length; i++) {
        transport = transports[i];
        try {
            transport = transport();
            break;
        } catch (e) {
        }
    }

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
    transport.timeout = settings.timeout;

    if(settings.method == 'get'){
        transport.open('get', settings.url, true);
        transport.send();
    }else{
        transport.open('post', settings.url, true);
        for (name in headers) {
            transport.setRequestHeader(name, headers[name]);
        }
        // transport.send(formatParams(settings.param));
        transport.send(JSON.stringify(settings.param));
    }
};