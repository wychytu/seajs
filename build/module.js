/*
Copyright 2011, SeaJS v0.4.0dev
MIT Licensed
build time: ${build.time}
*/

var module=module||{};module.seajs="0.4.0dev";
(function(y){function z(a){for(var c=[],b=0,d=a.length,e;b<d;b++){e=a[b];k[e]||c.push(e)}return c}function r(a,c){A(a,function(b){for(var d=[],e=0,f=a.length;e<f;e++)d[e]=b(a[e]);c&&c.apply(y,d)})}function A(a,c,b){function d(){if(c)c(b?undefined:B({deps:e}))}var e=n(a);a=z(e);if(a.length===0)return d();for(var f=0,h=a.length,g=h;f<h;f++)(function(C){J(C,function(){var o=(k[C]||0).dependencies||[],s=o.length;if(s){o=z(n(o));g+=s;A(o,function(){g-=s;g===0&&d()},true)}--g===0&&d()})})(a[f])}function D(a,
c,b){if(K(a)){b=c;c=a;a=""}else if(t.call(a)==="[object Function]"){b=a;a=b.toString();c=/\brequire\s*\(\s*['"]?([^'")]*)/g;for(var d=[],e;e=c.exec(a);)e[1]&&d.push(e[1]);c=d;a=""}b={dependencies:c,factory:b};var f;if(u){if(c=L())f=c.hasAttribute?c.src:c.getAttribute("src",4);else if(l)if(E()-l.timestamp<M)f=l.uri;l=null}if(f){if(a)f=p("./"+a,f);b.dependencies=n(b.dependencies,f);k[f]=b;j=[]}else j.push(b)}function J(a,c){function b(){var d=j.length,e=0,f,h=a;if(d){for(;e<d;e++){if(f=j[e].id)h=p("./"+
f,a);f=h;var g=j[e];g.dependencies=n(g.dependencies,f);k[f]=g}j=[]}m[a]&&delete m[a];c&&c()}if(m[a])v(m[a],b);else{if(u)l={uri:a,timestamp:E()};m[a]=N(a,b)}}function N(a,c){var b=document.createElement("script");v(b,function(){c&&c.call(b);try{if(b.clearAttributes)b.clearAttributes();else for(var d in b)delete b[d]}catch(e){}q.removeChild(b)});b.async=true;b.src=a;return q.insertBefore(b,q.firstChild)}function v(a,c){a.addEventListener("load",c,false);a.addEventListener("error",function(){c()},false)}
function L(){if(w&&w.readyState==="interactive")return w;for(var a=q.getElementsByTagName("script"),c,b=0,d=a.length;b<d;b++){c=a[b];if(c.readyState==="interactive")return c}return null}function B(a){return function(c){var b=p(c,a.uri),d;if(O(a.deps,b)===-1||!(d=k[b]))throw"Invalid module id: "+c;if(F(a,b))return d.exports;if(!d.exports){c=d;b={uri:b,deps:d.dependencies,parent:a};var e=c.factory;delete c.factory;if(t.call(e)==="[object Function]"){if(b=e(B(b),c.exports={},(c.declare=D,c.load=r,c)))c.exports=
b}else c.exports=e||{}}return d.exports}}function F(a,c){if(a.uri===c)return true;if(a.parent)return F(a.parent,c);return false}function G(a){a=("./"+a).replace(/(.*)?\/.*/,"$1").substring(2);return(a?a:".")+"/"}function p(a,c){a=a.replace(/\.js(?:\W.*)?$/,"");var b;if(a.indexOf("://")!==-1)b=a;else if(a.indexOf("./")===0||a.indexOf("../")===0){b=G(c||H)+a;if(P.call(x,b))b=x[b];else{var d=b.split("/"),e=[],f,h,g;h=0;for(g=d.length;h<g;h++){f=d[h];if(f==".."){if(e.length===0)throw"Invalid module path: "+
b;e.pop()}else f!=="."&&e.push(f)}b=x[b]=e.join("/")}}else b=a.indexOf("/")===0?I.protocol+"//"+I.host+a:H+a;return b+".js"}function n(a,c){for(var b=[],d=0,e=a.length;d<e;d++)b[d]=p(a[d],c);return b}var t=Object.prototype.toString,P=Object.prototype.hasOwnProperty,K=Array.isArray?Array.isArray:function(a){return t.call(a)==="[object Array]"},O=Array.prototype.indexOf?function(a,c){return a.indexOf(c)}:function(a,c){for(var b=0,d=a.length;b<d;b++)if(a[b]===c)return b;return-1},E=Date.now||function(){return(new Date).getTime()},
m={},j=[],l=null,M=10,u=!+"\v1",k={},I=y.location,q=document.getElementsByTagName("head")[0],i=document.getElementsByTagName("script");i=i[i.length-1];var H=G(i.hasAttribute?i.src:i.getAttribute("src",4));(i=i.getAttribute("data-main"))&&r([i]);if(u)v=function(a,c){a.attachEvent("onreadystatechange",function(){var b=a.readyState;if(b==="loaded"||b==="complete")c()})};var w=null,x={};module.declare=D;module.load=r})(this);
