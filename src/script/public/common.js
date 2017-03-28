var host = 'http://120.76.188.66:8080';
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
            url: host+url,
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
            url: host+url,
            data: data,
            success: callback,
            dataType: type
        });
    }
});





