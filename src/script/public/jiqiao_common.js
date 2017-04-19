var $method_list = $("ul.method>li>a");
$method_list.click(function(e){
    var pathname = location.pathname.replace('index.html','');
    pathname = pathname + 'article.html'
    var target = e.target;
    var href = target.pathname;
    pathname = pathname + '?r=' + href;
    window.open(pathname);
    return false;
});