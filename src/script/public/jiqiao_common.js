var $method_list = $("ul.method>li>a");
$method_list.click(function(e){
    var pathname = location.pathname.split('?')[0].replace('index.html','');
    if(pathname[pathname.length-1] !== '/'){
        pathname = pathname + '/'
    }
    pathname = pathname + 'article.html'
    var target = e.target;
    var href = target.pathname;
    var title= target.title;
    pathname = pathname + '?' + encodeURIComponent(encodeURIComponent('r=' + href + '&' + title));
    window.open(pathname);
    return false;
});