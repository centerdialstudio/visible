var scrollTop = function() {
    if (typeof pageYOffset != 'undefined') {
        return pageYOffset;
    } else {
        var bod = document.body;
        var doc = document.documentElement;
        doc = (doc.clientHeight)? doc: bod;
        return doc.scrollTop;
    }
}

var getOffset = function(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft;
        _y += el.offsetTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

var size = function(el) {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    if (el) {
        x = el.clientWidth;
        y = el.clientHeight;
    }
    return { width: x, height: y };
}

var visible = function(element, partial) {
    
    var $t            = element,
        $d            = document,
        viewTop       = scrollTop(),
        viewBottom    = viewTop + size().height,
        _top          = getOffset($t).top,
        _bottom       = _top + size($t).height,
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

module.exports = visible;