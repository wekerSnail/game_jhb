//字体设置
$(function () {
    var cssEl = document.createElement("style");
    document.documentElement.firstElementChild.appendChild(cssEl);
    var that = this;

    function setPxPerRem() {
        var dpr = 1;
        var width = document.documentElement.clientWidth * 0.8
        var pxPerRem = width * dpr / 10;
        cssEl.innerHTML = "html{font-size:" + pxPerRem + "px!important;}";
    }
    setPxPerRem();
    window.onresize = setPxPerRem;
})