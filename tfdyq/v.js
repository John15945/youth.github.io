/*! 2017 Baidu Inc. All Rights Reserved */
!function(){function e(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function t(e){var t=new Image;t.src=I+e,t.onload=t.onerror=function(){t=t.onload=t.onerror=null}}function s(e,t,s,i){if((e/=i/2)<1)return s/2*e*e*e+t;else return s/2*((e-=2)*e*e+2)+t}function i(e,t,s,i){return s*e/i+t}function o(e,t){return t=t||document,"string"==typeof e?t.getElementById(e):e}function a(e){return new Function("return ("+e+")")()}function n(e,t){for(var s in t)if(t.hasOwnProperty(s))o(e).style[s]=t[s]}function l(e){if(window.getComputedStyle)return window.getComputedStyle(e);else if(window.document.documentElement.currentStyle)return e.currentStyle;return{}}function c(){var e=document,t="BackCompat"===e.compatMode?e.body:e.documentElement;return t.clientHeight}function d(e,t){if(6>=O){var s=t.vertical||"top",i=t.offset,o=l(e).height.replace(/px/,"")-0,a="top"===s?i:c()-i-o,n="eval((document.body.scrollTop || document.documentElement.scrollTop) + "+a+') + "px"';e.style.position="absolute",e.style.setExpression("top",n)}}function r(e){if(e.isMulti||!o("bds-credit-pop"))if(e.codeStyle&&e.site)if(e.site.vlevel&&/^[123]{1}$/.test(parseInt(e.site.vlevel,10))){var t=a(e.codeStyle),s={type:1,pos:1,color:g[1],diseffect:2,fold:1,beishucolor:0};for(var i in t)if(t.hasOwnProperty(i)&&s.hasOwnProperty(i))s[i]=t[i];var n=s.color;s.color=g.hasOwnProperty(n)?g[n]:n,e.codeStyle=s,e.main=e.main||document.body,p(e)}}function p(e){var t=e.codeStyle,s=t.type,i=t.color,o=t.fold,a=t.pos,l=t.beishucolor,c=e.site,d=c.beishustatus,r="",p=0;if(d&&2===+d)var r=" bds-credit-bsn";if(d&&2===+d&&l&&(1===+l||2===+l)&&1===s)r=1===+l?" bsa bds-credit-bsb":" bsa bds-credit-bsg",p=1;var b={},m="right",h="left";if(1===s){if(b=x.FLOAT,1===a||3===a)m="right",h="left";else if(2===a||4===a)m="left",h="right"}else b=x.CROSS,m=w[o],h="left"===w[o]?"right":"left";var g=e.domain+v[s],k=c.rztype.join(1===s?'<em class="divide">|</em>':'<em class="dot"></em>'),I=p?'<div class="bds-header">':'<div class="bds-header" style="background-color:'+i+'">',S="",O=c.bztype,C="";if(O&&O.length){C=" with-bz-info";var z=O.join(1===s?'<em class="divide">|</em>':'<em class="dot"></em>');if(S='<div class="bds-exp-info"><p class="title clearfix"><span>承诺保障</span></p><p class="info">'+z+"</p></div>",2===s)S='<div class="bds-exp-info bz"><span class="title">保障</span><em class="dot"></em>'+z+"</div>";x.FLOAT.h=300}var A=+c.kbrate?'<em class="b">'+c.kbrate+"% </em>好评":"暂无好评率",T=["<!DOCTYPE html>","<html>","<head>",'<meta charset="UTF-8" />',"<title>百度信誉名片</title>",'<link rel="stylesheet" type="text/css" href="'+g+'" />',"</head>","<body>",'<div class="bds-float'+r+'">','<div class="bds-main" id="bds-main">',I,'<i class="bds-icon i-logo">&nbsp;</i>','<a id="bds-fold" class="bds-fold" href="#" onclick="return false" hidefocus="true">','<b class="fold" href="#" onclick="return false">',"收起","</b>",'<i class="arrow '+m+'"></i>',"</a>","</div>",'<div class="content">','<div class="bds-comp-info">','<h2 class="bds-comp-name" title="'+c.companyname+'">',c.companyname,"</h2>",'<div class="bds-level-info clearfix">','<i class="bds-icon i-v i-v-'+c.vlevel+'">&nbsp;</i>','<div class="level-tip">','<p class="custnum">'+c.custnum+"</p>",'<p>累计时间：<em class="b">'+c.authtime+"</em>个月</p>",'<p class="ext clearfix">','<span class="kb">'+A+"</span>",'<span class="act">','<a href="'+c.koubeiurl+'" target="_blank">评价</a>','<em class="divide">|</em>','<a href="'+c.accuseurl+'" target="_blank">举报</a>',"</span>","</p>","</div>","</div>","</div>",'<div class="bds-exp-main">','<div class="bds-exp-info">','<p class="title clearfix">',"<span>认证类型</span>",'<a href="'+y+c.vmp+'" target="_blank">更多</a>',"</p>",'<p class="info">'+k+"</p>","</div>",S,'<div class="bds-cert-search">','<input type="text" value="'+c.vmp+'" id="bds-search-input" />','<i class="bds-icon i-search" id="bds-search-btn">&nbsp;</i>',"</div>","</div>","</div>","</div>",'<div id="bds-unfold" class="bds-unfold '+m+'" title="百度信誉名片">&nbsp;</div>',"</div>","</body>","</html>"].join(""),$=["<!DOCTYPE html>","<html>","<head>",'<meta charset="UTF-8" />',"<title>百度信誉名片</title>",'<link rel="stylesheet" type="text/css" href="'+g+'" />',"</head>","<body>",'<div class="bds-cross no" style="background-color:'+i+'">','<div class="bds-main clearfix" id="bds-main">','<div class="bds-sec bds-title">','<i class="bds-icon i-logo">&nbsp;</i>',"</div>",'<em class="divide"></em>','<div class="bds-sec comp-info" title="'+c.companyname+'">','<h4 class="comp-name">','<span class="name ellipsis">'+c.companyname+"</span>",'<i class="bds-icon i-v i-v-'+c.vlevel+'">&nbsp;</i>',"</h4>",'<p class="custnum ellipsis">'+c.custnum+"</p>","</div>",'<em class="divide"></em>','<div class="bds-sec ext-info">','<p>累计时间：<em class="b">'+c.authtime+"</em>个月</p>",'<p class="ext clearfix">','<span class="kb">'+A+"</span>",'<span class="act">','<a href="'+c.koubeiurl+'" target="_blank">评价</a>','<em class="divide-small"></em>','<a href="'+c.accuseurl+'" target="_blank">举报</a>',"</span>","</p>","</div>",'<em class="divide"></em>','<div class="bds-sec bds-exp'+C+'">','<div class="bds-exp-info">','<span class="title">认证</span>','<em class="dot"></em>',k,"</div>",S,"</div>",'<i class="bds-icon i-arrow-right icon-exp"></i>','<span class="bds-cert-search">','<input type="text" value="'+c.vmp+'" id="bds-search-input" />','<i class="bds-icon i-search" id="bds-search-btn">&nbsp;</i>',"</span>",'<a id="bds-fold" class="bds-fold" href="#" onclick="return false" hidefocus="true">','<b class="fold" href="#" onclick="return false">',"收起","</b>",'<i class="arrow '+m+'"></i>',"</a>","</div>",'<div id="bds-unfold" class="bds-unfold '+m+'">','<i class="arrow '+h+'"></i>','<span class="title-wrap">','<i class="bds-icon i-logo">&nbsp;</i>','<span class="bds-title">百度信誉</span>',"</span>","</div>","</div>","</body>","</html>"].join(""),F=document.createElement("div");F.className="bds-credit-pop"+(2===s?" cross":""),F.id="bds-credit-pop",F.style.width=1===s?b.w+"px":"100%",F.style.height=b.h+"px",F.style.zIndex="2147483647";var E=document.createElement("iframe");E.setAttribute("src","javascript:;"),E.setAttribute("allowTransparency",!0),E.setAttribute("border",0),E.setAttribute("frameBorder","no"),E.setAttribute("scrolling","no"),E.setAttribute("height",b.h+"px"),E.setAttribute("width",b.w+"px"),n(E,{display:"block",margin:"auto"});var D=document.createElement("div");if(D.className="bds-credit-pop-mask",n(D,{width:"100%",height:"100%",position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:i,opacity:.8,filter:"alpha(opacity=80)",zIndex:-1}),2===s)F.appendChild(D);F.appendChild(E),e.main.appendChild(F);var L=E.contentWindow||E.contentDocument;L.document.open(),L.document.write(1===s?T:$),L.document.close();var _={main:F,iframe:E,mask:D,context:L.document,codeStyle:t,size:b};f(_),u(_)}function f(e){var t=e.codeStyle,s=t.type,i=t.pos,a=(t.color,t.fold),l=e.main,c=e.iframe,r=e.mask,p=(e.size,e.context);if(1===s)n(c,{position:"absolute"}),n(l,{overflow:"hidden"});switch(i){case 1:n(l,{position:"fixed",top:"80px",right:0}),d(l,{vertical:"top",offset:80}),n(c,{top:0,right:0}),n(o("bds-unfold",p),{top:0,right:0});break;case 2:n(l,{position:"fixed",top:"80px",left:0}),d(l,{vertical:"top",offset:80}),n(c,{top:0,left:0}),n(o("bds-unfold",p),{top:0,left:0});break;case 3:n(l,{position:"fixed",top:"auto",bottom:"80px",right:0}),d(l,{vertical:"bottom",offset:80}),n(c,{bottom:0,right:0}),n(o("bds-unfold",p),{bottom:0,right:0});break;case 4:n(l,{position:"fixed",top:"auto",bottom:"80px",left:0}),d(l,{vertical:"bottom",offset:80}),n(c,{bottom:0,left:0}),n(o("bds-unfold",p),{bottom:0,left:0});break;case 5:n(l,{position:"fixed",top:0,right:1===a?0:"auto",left:1===a?"auto":0}),d(l,{vertical:"top",offset:0});var f={right:1===a?0:"auto",left:1===a?"auto":0,top:0};n(c,f),n(r,f);break;case 6:n(l,{position:"fixed",top:"auto",bottom:0,right:1===a?0:"auto",left:1===a?"auto":0}),d(l,{vertical:"bottom",offset:0});var f={right:1===a?0:"auto",left:1===a?"auto":0,bottom:0};n(c,f),n(r,f)}}function u(s){var i=s.main,a=s.context,n=s.codeStyle;n.type,n.diseffect;if(o("bds-search-btn",a)&&o("bds-search-input",a))o("bds-search-btn",a).onclick=function(){var s=e(o("bds-search-input",a).value);if(s)window.open(y+s),t(S.MAGNIFIER+s+"&source="+T.site.vmp)};if(o("bds-security",a))o("bds-security",a).onclick=function(){t(S.BAIDU+T.site.vmp)};if(o("bds-fold",a)&&o("bds-unfold",a))o("bds-fold",a).onclick=function(){h(1,s),t(S.FOLD)},o("bds-unfold",a).onclick=function(){h(2,s),t(S.UNFOLD)};i.onmouseover=function(){if(A)m()},i.onmouseout=function(){if(A)b(s)},b(s)}function b(e){if(m(),2===e.codeStyle.diseffect)z=setTimeout(function(){h(1,e)},5e3)}function m(){if(z)clearTimeout(z),z=null}function h(e,t){var a=t.context,c=t.codeStyle,d=c.type,r=c.color,p=c.fold,f=t.main,u=t.iframe,b=t.mask,h=t.size,v=k[1===d?"FLOAT":"CROSS"],y=1===d?250:250,g=1===d?1e3/180:1e3/60,w=y/g;if(C.foldInter)clearInterval(C.foldInter);if(C.unfoldInter)clearInterval(C.unfoldInter);if(m(),A=0,o("bds-main",a).style.display="block",o("bds-unfold",a).style.display="none",2===d){if(1===e)n(f,{width:h.w+"px",height:h.h+"px"}),n(u,{position:"absolute"});n(f,{background:"none"}),n(o("bds-fold",a),{position:"static"})}var x=1===e?h:v,I=1===e?v:h,S=0;C[1===e?"foldInter":"unfoldInter"]=setInterval(function(){if(w>S){S++;var t={width:(1===d?s:i)(S,x.w,I.w-x.w,w)+"px",height:(1===d?s:i)(S,x.h,I.h-x.h,w)+"px"};if(n(u,t),1===d)n(f,t);if(2===d)n(b,t)}else{if(clearInterval(C[1===e?"foldInter":"unfoldInter"]),1===d)n(f,{width:I.w+"px",height:I.h+"px"}),n(u,{width:I.w+"px",height:I.h+"px"});else{n(f,{background:1===e?r:"none",width:1===e?I.w+"px":"100%",height:I.h+"px"}),n(u,{width:I.w+"px",height:I.h+"px"});var c=parseInt(l(document.body).width,10);if(2===p&&2===e&&c>h.w){var m=(c-h.w)/2;n(u,{position:"absolute"});var v=0,y=120/g,k=setInterval(function(){if(y>v)v++,n(u,{left:i(v,0,m-0,y)+"px"});else clearInterval(k),n(u,{position:"static",left:"auto"})},g)}else n(u,{position:1===e?"absolute":"static"});n(b,{width:"100%",height:I.h+"px"}),n(o("bds-fold",a),{position:"absolute"})}if(1===e)o("bds-main",a).style.display="none",o("bds-unfold",a).style.display="block"}},g)}var v={1:"/views/showsite/creditFloatStyle.css?20170227",2:"/views/showsite/creditCrossStyle.css?20170227"},y="https://www.baidu.com/s?wd=",g={1:"#445fb0",2:"#bd1919",3:"#2e9f40",4:"#333333"},w={1:"right",2:"left"},x={FLOAT:{w:222,h:250},CROSS:{w:1e3,h:70}},k={FLOAT:{w:38,h:37},CROSS:{w:124,h:41}},I="http:"===window.location.protocol?"http://trustrcv.baidu.com/v.php?":"https://sp1.baidu.com/6KYTfyq72xB3otqbppnN2DJv/v.php?",S={FOLD:"tag=vsiteClick&target=less",UNFOLD:"tag=vsiteClick&target=more",MAGNIFIER:"tag=vsiteClick&target=magnifier&wd=",BAIDU:"tag=vsiteClick&target=security&wd="},O=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:void 0,C=(Object.prototype.toString,{foldInter:null,unfoldInter:null}),z=null,A=1,T={codeStyle:'{"type":1,"pos":1,"color":"#445fb0","diseffect":2,"fold":1,"beishucolor":0}',site:{companyname:"深圳市洛壹网络科技有限公司",vlevel:"1",rztype:'["\u5b9e\u540d\u8ba4\u8bc1"]',bztype:'[]',vmp:"深圳市洛壹网络科技有限公司@v",custnum:"BDV-759079101",authtime:"32",kbrate:"0",accuseurl:"http://jubao.baidu.com/jubao/accu/?surl=www.szluoyi.com&token=F9228961D4FA7E76389947632AE53138",koubeiurl:"http://koubei.baidu.com/s/www.szluoyi.com",beishustatus:"0"},domain:"https://tag.baidu.com"};T.site.rztype=a(T.site.rztype),T.site.bztype=a(T.site.bztype),r(T)}(window);