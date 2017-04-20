var $method_list = null; 
if($("ul.method>li>a").length>0){
    $method_list = $("ul.method>li>a");
}else if($("ul.hot-method>li").not('.title').length>0){
    $method_list = $("ul.hot-method>li").not('.title').find('a');
}

$method_list.click(function(e){
    var pathname = location.pathname.split('?')[0].replace('index.html','').replace('article.html','');
    if(pathname[pathname.length-1] !== '/'){
        pathname = pathname + '/'
    }
    pathname = pathname + 'article.html'
    var target = e.target;
    var href = target.pathname;
    var title= $(target).text();
    pathname = pathname + '?' + encodeURIComponent(encodeURIComponent('r=' + href + '&' + title));
    window.open(pathname);
    return false;
});