console.log('load common!');
var HOST = 'http://120.76.188.66:8080';

jQuery.extend({
    //HTTP get方法
    get: function (url, data, callback, type) {
        // shift arguments if data argument was ommited
        if (jQuery.isFunction(data)) {
            callback = data;
            data = null;
        }
        return jQuery.ajax({
            type: "GET",
            url: HOST+url,
            data: data,
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
    },
});