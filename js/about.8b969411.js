(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"014b":function(t,n,e){"use strict";var r=e("e53d"),i=e("07e3"),o=e("8e60"),s=e("63b6"),c=e("9138"),a=e("ebfd").KEY,u=e("294c"),f=e("dbdb"),l=e("45f2"),p=e("62a0"),b=e("5168"),h=e("ccb9"),v=e("6718"),d=e("47ee"),w=e("9003"),m=e("e4ae"),y=e("f772"),g=e("36c3"),_=e("1bc3"),x=e("aebd"),S=e("a159"),O=e("0395"),C=e("bf0b"),j=e("d9f6"),k=e("c3a1"),P=C.f,E=j.f,T=O.f,L=r.Symbol,I=r.JSON,F=I&&I.stringify,M="prototype",D=b("_hidden"),A=b("toPrimitive"),N={}.propertyIsEnumerable,B=f("symbol-registry"),R=f("symbols"),q=f("op-symbols"),G=Object[M],$="function"==typeof L,Q=r.QObject,H=!Q||!Q[M]||!Q[M].findChild,V=o&&u(function(){return 7!=S(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=P(G,n);r&&delete G[n],E(t,n,e),r&&t!==G&&E(G,n,r)}:E,W=function(t){var n=R[t]=S(L[M]);return n._k=t,n},J=$&&"symbol"==typeof L.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof L},z=function(t,n,e){return t===G&&z(q,n,e),m(t),n=_(n,!0),m(e),i(R,n)?(e.enumerable?(i(t,D)&&t[D][n]&&(t[D][n]=!1),e=S(e,{enumerable:x(0,!1)})):(i(t,D)||E(t,D,x(1,{})),t[D][n]=!0),V(t,n,e)):E(t,n,e)},K=function(t,n){m(t);var e,r=d(n=g(n)),i=0,o=r.length;while(o>i)z(t,e=r[i++],n[e]);return t},Y=function(t,n){return void 0===n?S(t):K(S(t),n)},U=function(t){var n=N.call(this,t=_(t,!0));return!(this===G&&i(R,t)&&!i(q,t))&&(!(n||!i(this,t)||!i(R,t)||i(this,D)&&this[D][t])||n)},X=function(t,n){if(t=g(t),n=_(n,!0),t!==G||!i(R,n)||i(q,n)){var e=P(t,n);return!e||!i(R,n)||i(t,D)&&t[D][n]||(e.enumerable=!0),e}},Z=function(t){var n,e=T(g(t)),r=[],o=0;while(e.length>o)i(R,n=e[o++])||n==D||n==a||r.push(n);return r},tt=function(t){var n,e=t===G,r=T(e?q:g(t)),o=[],s=0;while(r.length>s)!i(R,n=r[s++])||e&&!i(G,n)||o.push(R[n]);return o};$||(L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===G&&n.call(q,e),i(this,D)&&i(this[D],t)&&(this[D][t]=!1),V(this,t,x(1,e))};return o&&H&&V(G,t,{configurable:!0,set:n}),W(t)},c(L[M],"toString",function(){return this._k}),C.f=X,j.f=z,e("6abf").f=O.f=Z,e("355d").f=U,e("9aa9").f=tt,o&&!e("b8e3")&&c(G,"propertyIsEnumerable",U,!0),h.f=function(t){return W(b(t))}),s(s.G+s.W+s.F*!$,{Symbol:L});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)b(nt[et++]);for(var rt=k(b.store),it=0;rt.length>it;)v(rt[it++]);s(s.S+s.F*!$,"Symbol",{for:function(t){return i(B,t+="")?B[t]:B[t]=L(t)},keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var n in B)if(B[n]===t)return n},useSetter:function(){H=!0},useSimple:function(){H=!1}}),s(s.S+s.F*!$,"Object",{create:Y,defineProperty:z,defineProperties:K,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),I&&s(s.S+s.F*(!$||u(function(){var t=L();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){var n,e,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(e=n=r[1],(y(n)||void 0!==t)&&!J(t))return w(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!J(n))return n}),r[1]=n,F.apply(I,r)}}),L[M][A]||e("35e8")(L[M],A,L[M].valueOf),l(L,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"0395":function(t,n,e){var r=e("36c3"),i=e("6abf").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(n){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?c(t):i(r(t))}},"07e3":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},"0fc9":function(t,n,e){var r=e("3a38"),i=Math.max,o=Math.min;t.exports=function(t,n){return t=r(t),t<0?i(t+n,0):o(t,n)}},1587:function(t,n,e){"use strict";var r=e("4e4f"),i=e.n(r);i.a},1691:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1a2b":function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e("e814"),i=e.n(r),o={methods:{scroll:function(t){var n="scrollBehavior"in document.documentElement.style,e=i()(window.pageYOffset);if(e!==t)if(n)window.scroll({top:t,left:0,behavior:"smooth"});else if(t=i()(t),e<t)var r=setInterval(function(){e+=e>t-20?1:e>t-40?3:e>t-80?8:e>t-160?18:e>t-200?24:e>t-300?40:60,window.scroll(0,e),e>=t&&clearInterval(r)},5);else var o=setInterval(function(){e-=e<t+20?1:e<t+40?3:e<t+80?8:e<t+160?18:e<t+200?24:e<t+300?40:60,window.scroll(0,e),e<=t&&clearInterval(o)},5)}}}},"1bc3":function(t,n,e){var r=e("f772");t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,n,e){var r=e("f772"),i=e("e53d").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},"241e":function(t,n,e){var r=e("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"268f":function(t,n,e){t.exports=e("fde4")},"294c":function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},"32a6":function(t,n,e){var r=e("241e"),i=e("c3a1");e("ce7e")("keys",function(){return function(t){return i(r(t))}})},"32fc":function(t,n,e){var r=e("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,n,e){var r=e("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"355d":function(t,n){n.f={}.propertyIsEnumerable},3562:function(t,n,e){"use strict";var r=e("558f"),i=e.n(r);i.a},"35e8":function(t,n,e){var r=e("d9f6"),i=e("aebd");t.exports=e("8e60")?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},"36c3":function(t,n,e){var r=e("335c"),i=e("25eb");t.exports=function(t){return r(i(t))}},"386b":function(t,n,e){var r=e("5ca1"),i=e("79e5"),o=e("be13"),s=/"/g,c=function(t,n,e,r){var i=String(o(t)),c="<"+n;return""!==e&&(c+=" "+e+'="'+String(r).replace(s,"&quot;")+'"'),c+">"+i+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(c),r(r.P+r.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",e)}},"3a38":function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},"454f":function(t,n,e){e("46a7");var r=e("584a").Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},"45f2":function(t,n,e){var r=e("d9f6").f,i=e("07e3"),o=e("5168")("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},"46a7":function(t,n,e){var r=e("63b6");r(r.S+r.F*!e("8e60"),"Object",{defineProperty:e("d9f6").f})},"47ee":function(t,n,e){var r=e("c3a1"),i=e("9aa9"),o=e("355d");t.exports=function(t){var n=r(t),e=i.f;if(e){var s,c=e(t),a=o.f,u=0;while(c.length>u)a.call(t,s=c[u++])&&n.push(s)}return n}},"4e4f":function(t,n,e){},5168:function(t,n,e){var r=e("dbdb")("wks"),i=e("62a0"),o=e("e53d").Symbol,s="function"==typeof o,c=t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))};c.store=r},5559:function(t,n,e){var r=e("dbdb")("keys"),i=e("62a0");t.exports=function(t){return r[t]||(r[t]=i(t))}},"558f":function(t,n,e){},"57da":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"main main_index"},[e("h1",{staticClass:"title title_uppercase"},[t._v("\n      Тест. Проверьте вашу IT-команду, даже если вы не программист\n  ")]),e("p",{staticClass:"text"},[t._v("\n      Представьте, что все данные вашей компании были потеряны в один день. Или вы год оплачивали разработку мобильного приложения, но так и не запустились. Или персональные данные ваших клиентов были украдены.\n  ")]),e("p",{staticClass:"text"},[t._v("\n      Ужасные картины! И кажется, что совершенно неожиданные. Но это не так. Все эти ситуации могут произойти в реальной жизни, если вовремя не заметить их причину — некомпетентных программистов и технических менеджеров. Как понять, что ваши программисты и менеджеры не профессионалы, если вы сами не умеете читать код?\n  ")]),e("p",{staticClass:"text"},[t._v("\n      Этот тест рассчитан на людей, которые работают с программистами либо в качестве начальников, либо в качестве заказчиков. Пройдите его, и если хотя бы на один вопрос вы ответите отрицательно — задумайтесь. Если на два — начните волноваться. Если на три — поменяйте IT-команду, пока не стало слишком поздно.\n  ")]),e("router-link",{staticClass:"btn btn_index",attrs:{to:"/answer",tag:"a"},nativeOn:{click:function(n){return t.changeAnimation(n)}}},[t._v("\n    Проверить своих программистов\n  ")])],1)},i=[],o=e("cebc"),s=e("2f62"),c=e("1a2b"),a={methods:Object(o["a"])({},Object(s["b"])(["switchAnimation"]),{changeAnimation:function(){this.scroll(0)}}),mixins:[c["a"]]},u=a,f=(e("3562"),e("2877")),l=Object(f["a"])(u,r,i,!1,null,null,null);n["default"]=l.exports},"584a":function(t,n){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},"5b4e":function(t,n,e){var r=e("36c3"),i=e("b447"),o=e("0fc9");t.exports=function(t){return function(n,e,s){var c,a=r(n),u=i(a.length),f=o(s,u);if(t&&e!=e){while(u>f)if(c=a[f++],c!=c)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},"5d6b":function(t,n,e){var r=e("e53d").parseInt,i=e("a1ce").trim,o=e("e692"),s=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,n){var e=i(String(t),3);return r(e,n>>>0||(s.test(e)?16:10))}:r},"62a0":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},"63b6":function(t,n,e){var r=e("e53d"),i=e("584a"),o=e("d864"),s=e("35e8"),c=e("07e3"),a="prototype",u=function(t,n,e){var f,l,p,b=t&u.F,h=t&u.G,v=t&u.S,d=t&u.P,w=t&u.B,m=t&u.W,y=h?i:i[n]||(i[n]={}),g=y[a],_=h?r:v?r[n]:(r[n]||{})[a];for(f in h&&(e=n),e)l=!b&&_&&void 0!==_[f],l&&c(y,f)||(p=l?_[f]:e[f],y[f]=h&&"function"!=typeof _[f]?e[f]:w&&l?o(p,r):m&&_[f]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[a]=t[a],n}(p):d&&"function"==typeof p?o(Function.call,p):p,d&&((y.virtual||(y.virtual={}))[f]=p,t&u.R&&g&&!g[f]&&s(g,f,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},6718:function(t,n,e){var r=e("e53d"),i=e("584a"),o=e("b8e3"),s=e("ccb9"),c=e("d9f6").f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:s.f(t)})}},"6abf":function(t,n,e){var r=e("e6f3"),i=e("1691").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"6b4c":function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},7445:function(t,n,e){var r=e("63b6"),i=e("5d6b");r(r.G+r.F*(parseInt!=i),{parseInt:i})},"794b":function(t,n,e){t.exports=!e("8e60")&&!e("294c")(function(){return 7!=Object.defineProperty(e("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7e90":function(t,n,e){var r=e("d9f6"),i=e("e4ae"),o=e("c3a1");t.exports=e("8e60")?Object.defineProperties:function(t,n){i(t);var e,s=o(n),c=s.length,a=0;while(c>a)r.f(t,e=s[a++],n[e]);return t}},8403:function(t,n,e){},"85f2":function(t,n,e){t.exports=e("454f")},"89f0":function(t,n,e){"use strict";var r=e("8403"),i=e.n(r);i.a},"8aae":function(t,n,e){e("32a6"),t.exports=e("584a").Object.keys},"8e60":function(t,n,e){t.exports=!e("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},9003:function(t,n,e){var r=e("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},9138:function(t,n,e){t.exports=e("35e8")},"9aa9":function(t,n){n.f=Object.getOwnPropertySymbols},a159:function(t,n,e){var r=e("e4ae"),i=e("7e90"),o=e("1691"),s=e("5559")("IE_PROTO"),c=function(){},a="prototype",u=function(){var t,n=e("1ec9")("iframe"),r=o.length,i="<",s=">";n.style.display="none",e("32fc").appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(i+"script"+s+"document.F=Object"+i+"/script"+s),t.close(),u=t.F;while(r--)delete u[a][o[r]];return u()};t.exports=Object.create||function(t,n){var e;return null!==t?(c[a]=r(t),e=new c,c[a]=null,e[s]=t):e=u(),void 0===n?e:i(e,n)}},a1ce:function(t,n,e){var r=e("63b6"),i=e("25eb"),o=e("294c"),s=e("e692"),c="["+s+"]",a="​",u=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t,n,e){var i={},c=o(function(){return!!s[t]()||a[t]()!=a}),u=i[t]=c?n(p):s[t];e&&(i[e]=u),r(r.P+r.F*c,"String",i)},p=l.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(u,"")),2&n&&(t=t.replace(f,"")),t};t.exports=l},a4bb:function(t,n,e){t.exports=e("8aae")},ac6a:function(t,n,e){for(var r=e("cadf"),i=e("0d58"),o=e("2aba"),s=e("7726"),c=e("32e9"),a=e("84f2"),u=e("2b4c"),f=u("iterator"),l=u("toStringTag"),p=a.Array,b={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(b),v=0;v<h.length;v++){var d,w=h[v],m=b[w],y=s[w],g=y&&y.prototype;if(g&&(g[f]||c(g,f,p),g[l]||c(g,l,w),a[w]=p,m))for(d in r)g[d]||o(g,d,r[d],!0)}},aebd:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},b447:function(t,n,e){var r=e("3a38"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},b54a:function(t,n,e){"use strict";e("386b")("link",function(t){return function(n){return t(this,"a","href",n)}})},b8e3:function(t,n){t.exports=!0},b9e9:function(t,n,e){e("7445"),t.exports=e("584a").parseInt},bf0b:function(t,n,e){var r=e("355d"),i=e("aebd"),o=e("36c3"),s=e("1bc3"),c=e("07e3"),a=e("794b"),u=Object.getOwnPropertyDescriptor;n.f=e("8e60")?u:function(t,n){if(t=o(t),n=s(n,!0),a)try{return u(t,n)}catch(e){}if(c(t,n))return i(!r.f.call(t,n),t[n])}},bf90:function(t,n,e){var r=e("36c3"),i=e("bf0b").f;e("ce7e")("getOwnPropertyDescriptor",function(){return function(t,n){return i(r(t),n)}})},c3a1:function(t,n,e){var r=e("e6f3"),i=e("1691");t.exports=Object.keys||function(t){return r(t,i)}},ccb9:function(t,n,e){n.f=e("5168")},ce7e:function(t,n,e){var r=e("63b6"),i=e("584a"),o=e("294c");t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],s={};s[t]=n(e),r(r.S+r.F*o(function(){e(1)}),"Object",s)}},cebc:function(t,n,e){"use strict";var r=e("268f"),i=e.n(r),o=e("e265"),s=e.n(o),c=e("a4bb"),a=e.n(c),u=e("85f2"),f=e.n(u);function l(t,n,e){return n in t?f()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=a()(e);"function"===typeof s.a&&(r=r.concat(s()(e).filter(function(t){return i()(e,t).enumerable}))),r.forEach(function(n){l(t,n,e[n])})}return t}e.d(n,"a",function(){return p})},cf4c:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"main main_answer"},[e("h2",{staticClass:"subtitle"},[t._v("\n      Проверьте ваших программистов\n  ")]),e("div",{staticClass:"count"},[e("span",{staticClass:"count__current"},[t._v(t._s(t.currentQuestion.id))]),e("span",[t._v("/")]),e("span",{staticClass:"count__total"},[t._v(t._s(t.totalQuestions))])]),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.currentQuestion.question)}}),e("div",{staticClass:"buttons buttons_answer row justify-content-between"},[e("button",{staticClass:"btn btn_yes",class:{hover:t.yes},on:{click:function(n){return t.getAnswer(1)},mouseover:function(n){t.yes=!0},mouseleave:function(n){t.yes=!1}}},[t._v("\n      Да\n    ")]),e("button",{staticClass:"btn btn_no",class:{hover:t.no},on:{click:function(n){return t.getAnswer(0)},mouseover:function(n){t.no=!0},mouseleave:function(n){t.no=!1}}},[t._v("\n      Нет\n    ")])]),e("p",{staticClass:"text text_answer",domProps:{innerHTML:t._s(t.currentQuestion.comment)}})])},i=[],o=(e("ac6a"),e("cebc")),s=e("bc3a"),c=e.n(s),a=e("2f62"),u=e("1a2b"),f={data:function(){return{yes:!1,no:!1,device:"",id:0,answers:[],resultId:"",questions:""}},computed:{totalQuestions:function(){return this.questions.length},currentQuestion:function(){return this.questions[this.id]}},created:function(){this.fetch(),this.checkDevice(),window.addEventListener("resize",this.checkDevice)},beforeDestroy:function(){window.removeEventListener("resize",this.checkDevice)},methods:Object(o["a"])({},Object(a["b"])(["setFinished"]),{checkDevice:function(){this.device=/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)},getAnswer:function(t){this.scroll(0);var n=this;t&&this.device?(this.yes=!0,setTimeout(function(){n.yes=!1},200)):!t&&this.device&&(this.no=!0,setTimeout(function(){n.no=!1},200));var e={id:this.id,answer:t};if(this.answers.push(e),this.id===this.totalQuestions-1){this.setFinished("true");var r=0;this.answers.forEach(function(t,n){0===t.answer&&(r+=1)}),this.resultId=r>=3?4:r+1,this.send(this.resultId),this.$router.push({name:"result",params:{id:this.resultId}})}this.id+=1},fetch:function(){var t=this;c.a.get("/post.php?request=2").then(function(n){console.log(n),t.questions=n.data}).catch(function(t){return console.log(t)})},send:function(t){c.a.post("post.php",{request:4,id:t}).then(function(t){console.log(t)}).catch(function(t){return console.log(t)})},setData:function(t){this.questions=t}}),mixins:[u["a"]]},l=f,p=(e("1587"),e("2877")),b=Object(p["a"])(l,r,i,!1,null,null,null);n["default"]=b.exports},d864:function(t,n,e){var r=e("79aa");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},d9f6:function(t,n,e){var r=e("e4ae"),i=e("794b"),o=e("1bc3"),s=Object.defineProperty;n.f=e("8e60")?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return s(t,n,e)}catch(c){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},dbdb:function(t,n,e){var r=e("584a"),i=e("e53d"),o="__core-js_shared__",s=i[o]||(i[o]={});(t.exports=function(t,n){return s[t]||(s[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e265:function(t,n,e){t.exports=e("ed33")},e4ae:function(t,n,e){var r=e("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},e692:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e6f3:function(t,n,e){var r=e("07e3"),i=e("36c3"),o=e("5b4e")(!1),s=e("5559")("IE_PROTO");t.exports=function(t,n){var e,c=i(t),a=0,u=[];for(e in c)e!=s&&r(c,e)&&u.push(e);while(n.length>a)r(c,e=n[a++])&&(~o(u,e)||u.push(e));return u}},e814:function(t,n,e){t.exports=e("b9e9")},ebfd:function(t,n,e){var r=e("62a0")("meta"),i=e("f772"),o=e("07e3"),s=e("d9f6").f,c=0,a=Object.isExtensible||function(){return!0},u=!e("294c")(function(){return a(Object.preventExtensions({}))}),f=function(t){s(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!a(t))return"F";if(!n)return"E";f(t)}return t[r].i},p=function(t,n){if(!o(t,r)){if(!a(t))return!0;if(!n)return!1;f(t)}return t[r].w},b=function(t){return u&&h.NEED&&a(t)&&!o(t,r)&&f(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:b}},ed33:function(t,n,e){e("014b"),t.exports=e("584a").Object.getOwnPropertySymbols},eeac:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container container_result",class:"container_result-"+t.resultId},[e("app-header",{attrs:{logoLink:"img/logo-white.svg"}}),e("main",{staticClass:"main"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.results[t.resultId-1].img,alt:"",width:"192",height:"192"}})]),t.btnData.showBtn?t._e():e("div",{staticClass:"arrow arrow_1"},[e("p",{staticClass:"arrow__text"},[t._v("Я проверил свою команду программистов. Вот результат теста.")]),e("span",{staticClass:"icon icon-curved-arrow-with-broken-line"})]),e("h1",{staticClass:"title"},[t._v("\n      "+t._s(t.results[t.resultId-1].title)+"\n    ")]),e("p",{staticClass:"text text_result",domProps:{innerHTML:t._s(t.results[t.resultId-1].dsc)}}),t.btnData.showBtn?t._e():e("div",{staticClass:"arrow arrow_2"},[e("p",{staticClass:"arrow__text"},[t._v("Если у вас есть команда пограммистов, жмите на кнопку")]),e("span",{staticClass:"icon icon-turn-right-arrow-with-broken-line"})]),e("div",{staticClass:"buttons buttons_result row flex-column flex-sm-row justify-content-center"},[e("router-link",{staticClass:"btn btn_repeat",class:{"btn_repeat-long":!t.btnData.showBtn},attrs:{to:t.btnData.btnUrl,tag:"a"},nativeOn:{click:function(n){return t.scrollTo(n)}}},[t._v("\n        "+t._s(t.btnData.btnContent)+"\n      ")]),t.btnData.showBtn?e("button",{staticClass:"btn btn_share",attrs:{to:"/",tag:"a"},on:{mouseenter:function(n){t.showSocial=!0},mouseleave:function(n){t.showSocial=!1}}},[t._m(0),e("transition",{attrs:{name:"puff-social"}},[t.showSocial?e("span",{staticClass:"social social_vk row align-items-center justify-content-center",on:{click:function(n){t.showSocial=!t.showSocial}}},[e("social-sharing",{staticClass:"social_link",attrs:{url:t.results[t.resultId-1].link},inlineTemplate:{render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("network",{staticClass:"social_network row justify-content-center align-items-center",attrs:{network:"vk"}},[e("span",{staticClass:"icon icon-vk"})])],1)},staticRenderFns:[]}})],1):t._e()]),e("transition",{attrs:{name:"puff-social"}},[t.showSocial?e("span",{staticClass:"social social_twitter row align-items-center justify-content-center"},[e("social-sharing",{staticClass:"social_link",attrs:{url:t.results[t.resultId-1].link},inlineTemplate:{render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("network",{staticClass:"social_network row justify-content-center align-items-center",attrs:{network:"twitter"}},[e("span",{staticClass:"icon icon-twitter"})])],1)},staticRenderFns:[]}})],1):t._e()]),e("transition",{attrs:{name:"puff-social"}},[t.showSocial?e("span",{staticClass:"social social_fb row align-items-center justify-content-center"},[e("social-sharing",{staticClass:"social_link",attrs:{url:t.results[t.resultId-1].link},inlineTemplate:{render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("network",{staticClass:"social_network row justify-content-center align-items-center",attrs:{network:"facebook"}},[e("span",{staticClass:"icon icon-facebook"})])],1)},staticRenderFns:[]}})],1):t._e()])],1):t._e()],1)]),e("app-footer")],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"btn_share__text row justify-content-center"},[t._v("\n          Поделиться\n          "),e("span",{staticClass:"icon-share"})])}],o=(e("b54a"),e("e814")),s=e.n(o),c=e("cebc"),a=e("bc3a"),u=e.n(a),f=e("0418"),l=e("fd2d"),p=e("2f62"),b=e("1a2b"),h={data:function(){return{showSocial:!1,results:""}},computed:Object(c["a"])({},Object(p["c"])(["isFinished"]),{resultId:function(){return s()(this.$route.params.id)},btnData:function(){return this.isFinished},twitter:function(){return"ТЕСТ. ПРОВЕРЬТЕ ВАШУ IT-КОМАНДУ, ДАЖЕ ЕСЛИ ВЫ НЕ ПРОГРАММИСТ "+this.results[this.resultId-1].link}}),created:function(){this.fetch()},methods:{scrollTo:function(){this.scroll(0)},fetch:function(){var t=this;u.a.get("/post.php?request=3").then(function(n){console.log(n),t.results=n.data}).catch(function(t){return console.log(t)})}},mixins:[b["a"]],components:{"app-header":f["a"],"app-footer":l["a"]}},v=h,d=(e("89f0"),e("2877")),w=Object(d["a"])(v,r,i,!1,null,null,null);n["default"]=w.exports},f772:function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fde4:function(t,n,e){e("bf90");var r=e("584a").Object;t.exports=function(t,n){return r.getOwnPropertyDescriptor(t,n)}}}]);
//# sourceMappingURL=about.8b969411.js.map