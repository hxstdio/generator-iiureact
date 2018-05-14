<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title><%= componentName %> - Demo</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
    <meta content="telephone=no" name="format-detection"  />
    <meta content="false" name="twcClient" id="twcClient" />
    <script>
      !(function(b){var e=document.documentElement;var d=document.createElement("style");var a=1;e.firstElementChild.appendChild(d);e.setAttribute("data-dpr",a);function c(){var h=e.clientWidth;var j="}";b.rem=h/10;if(b.devicePixelRatio&&b.devicePixelRatio>=2){if(!b.RATIO_HACK){e.style.fontSize="200px";var g=document.createElement("div");var i=document.createElement("body");var f=e.firstElementChild||e.firstChild;g.style.width="0";g.style.borderTop="1rem solid transparent";g.style.borderLeft=".5px solid transparent";g.style.borderRight=".5px solid transparent";i.appendChild(g);e.insertBefore(i,f);b.RATIO_HACK=200/g.offsetHeight;b.rem=b.rem*b.RATIO_HACK;e.removeChild(i);e.style.fontSize=""}else{b.rem=b.rem*b.RATIO_HACK}}d.innerHTML="html{font-size:"+b.rem+"px!important;}body{font-size:"+12*(h/320)+"px"+j}b.dpr=a;b.addEventListener("resize",function(){c()},false);b.addEventListener("pageshow",function(f){if(f.persisted){c()}},false);c()})(window);
    </script>
</head>
<body>
<div id="wrapper"></div>
<script src="bundle.js"></script>
</body>
</html>