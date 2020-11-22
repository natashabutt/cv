/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-jpeg2000-jpegxr-webp-setclasses !*/
!function(A,n,e){function o(A,n){return typeof A===n}function a(){var A,n,e,a,t,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(A=[],n=r[f],n.name&&(A.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(e=0;e<n.options.aliases.length;e++)A.push(n.options.aliases[e].toLowerCase());for(a=o(n.fn,"function")?n.fn():n.fn,t=0;t<A.length;t++)i=A[t],l=i.split("."),1===l.length?Modernizr[l[0]]=a:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=a),s.push((a?"":"no-")+l.join("-"))}}function t(A){var n=c.className,e=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+e+"no-js(\\s|$)");n=n.replace(o,"$1"+e+"js$2")}Modernizr._config.enableClasses&&(n+=" "+e+A.join(" "+e),u?c.className.baseVal=n:c.className=n)}function i(A,n){if("object"==typeof A)for(var e in A)f(A,e)&&i(e,A[e]);else{A=A.toLowerCase();var o=A.split("."),a=Modernizr[o[0]];if(2==o.length&&(a=a[o[1]]),"undefined"!=typeof a)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),t([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(A,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,n){var e=this;setTimeout(function(){n(e[A])},0)},addTest:function(A,n,e){r.push({name:A,fn:n,options:e})},addAsyncTest:function(A){r.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,c=n.documentElement,u="svg"===c.nodeName.toLowerCase();!function(){var A={}.hasOwnProperty;f=o(A,"undefined")||o(A.call,"undefined")?function(A,n){return n in A&&o(A.constructor.prototype[n],"undefined")}:function(n,e){return A.call(n,e)}}(),l._l={},l.on=function(A,n){this._l[A]||(this._l[A]=[]),this._l[A].push(n),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},l._trigger=function(A,n){if(this._l[A]){var e=this._l[A];setTimeout(function(){var A,o;for(A=0;A<e.length;A++)(o=e[A])(n)},0),delete this._l[A]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function A(A,n,e){function o(n){var o=n&&"load"===n.type?1==a.width:!1,t="webp"===A;i(A,t&&o?new Boolean(o):o),e&&e(n)}var a=new Image;a.onerror=o,a.onload=o,a.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],e=n.shift();A(e.name,e.uri,function(e){if(e&&"load"===e.type)for(var o=0;o<n.length;o++)A(n[o].name,n[o].uri)})}),Modernizr.addAsyncTest(function(){var A=new Image;A.onload=A.onerror=function(){i("jpeg2000",1==A.width)},A.src="data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="}),Modernizr.addAsyncTest(function(){var A=new Image;A.onload=A.onerror=function(){i("jpegxr",1==A.width,{aliases:["jpeg-xr"]})},A.src="data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="}),a(),t(s),delete l.addTest,delete l.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();A.Modernizr=Modernizr}(window,document);