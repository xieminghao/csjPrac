var $method_list = null; 
$method_list = $('.article>ul a');

$method_list.click(function(e){
    var pathname = location.pathname.split('?')[0].replace('index.html','').replace('article.html','');
    if(pathname[pathname.length-1] !== '/'){
        pathname = pathname + '/'
    }
    // pathname = pathname + 'article.html'
    var target = e.target;
    var href = target.pathname;
    var templateLinkArr = href.split('/');
    templateLinkArr.shift();
    templateLinkArr.pop();
    templateLinkArr.push('article.html');
    pathname = pathname + templateLinkArr.join('/');


    var title= $(target).text();
    pathname = pathname + '?' + encodeURIComponent(encodeURIComponent('r=' + href + '&' + title));
    window.open(pathname);
    return false;
});