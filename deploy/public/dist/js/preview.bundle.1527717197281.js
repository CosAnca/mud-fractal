!function(t){function n(n){for(var r,i,u=n[0],c=n[1],s=n[2],f=0,p=[];f<u.length;f++)i=u[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(l&&l(n);p.length;)p.shift()();return a.push.apply(a,s||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,u=1;u<e.length;u++){var c=e[u];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={8:0,7:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var n=[],e=o[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise(function(n,r){e=o[t]=[n,r]});n.push(e[2]=r);var a=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=i.p+""+({}[t]||t)+".bundle.1527717197281.js";var c=setTimeout(function(){s({type:"timeout",target:u})},12e4);function s(n){u.onerror=u.onload=null,clearTimeout(c);var e=o[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,e[1](i)}o[t]=void 0}}u.onerror=u.onload=s,a.appendChild(u)}return Promise.all(n)},i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/dist/js/",i.oe=function(t){throw console.error(t),t};var u=this.webpackJsonp=this.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var l=c;a.push([22,0]),e()}([,function(t,n,e){"use strict";var r=e(11),o=Object(r.a)();n.a=o},function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"g",function(){return o}),e.d(n,"f",function(){return a}),e.d(n,"h",function(){return i}),e.d(n,"c",function(){return u}),e.d(n,"b",function(){return c}),e.d(n,"e",function(){return s}),e.d(n,"d",function(){return l});var r="ROUTER_POP_EVENT",o="ROUTE_TRANSITION_LOAD",a="ROUTE_TRANSITION_EXIT",i="ROUTE_TRANSITION_RESOLVED",u="ROUTE_TRANSITION_BEFORE_DOM_UPDATE",c="ROUTE_TRANSITION_AFTER_DOM_UPDATE",s="ROUTE_TRANSITION_ENTER",l="ROUTE_TRANSITION_COMPLETE"},,,function(t,n,e){"use strict";e.d(n,"a",function(){return f});var r=e(0),o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};function a(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}var i=function(t){return t.replace(/-(.)/g,function(t,n){return n.toUpperCase()})},u=r.c(function(t){return t.value}),c=r.c(function(t){return/^data-/.test(t.name)&&"data-element"!==t.name&&"data-behaviour"!==t.name}),s=r.j(function(t){var n=t.name,e=t.value;return{name:i(n.substr(5)),value:e}}),l=r.n(function(t,n){var e=n.name,r=n.value;return t[e]=r,t},{}),f=r.a(l,s,u,c),p=r.n(function(t,n){return t[""+i(n.getAttribute("data-element"))]=o({node:n},function(t){return f([].concat(a(t.attributes)))}(n)),t},{});n.b=function(t){return p([].concat(a(t.querySelectorAll("*[data-element]"))))}},function(t,n,e){"use strict";var r=e(3),o=e.n(r),a=e(0),i=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return e}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function u(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}n.a=a.b(function(t,n){var e=this,r=Object.entries(n).map(function(t){var n=i(t,2),r=n[0],o=n[1],c=a.a(a.j(a.q),a.p(" "))(r),s=!!a.a(a.i,a.k(/mouse/g),a.g)(c),l="string"==typeof o?e[o]:o;return[].concat(u(c),[l,s])}),c=void 0,s=void 0,l=a.b(function(t,n,e){a.a(a.f(function(t){var e;return(e=c)[n].apply(e,u(t))}),a.j(function(n){return a.d(function(t){var e=i(t,2);return[e[0],e[1]].join(" ")===n})(t)}))(e)})(r);return{attachAll:function(){c=c||new o.a(t);try{a.f(function(t){var n;return(n=c).on.apply(n,u(t))})(r)}catch(t){console.error("Handler must be a type of Function, careful with arrow functions, they will need to be above the events object:",t)}},attach:function(n){c=c||new o.a(t),l("on",n)},remove:function(t){c&&l("off",t)},destroy:function(){c&&a.f(function(t){var n;return(n=c).off.apply(n,u(t))})(r)},emit:function(t,n){(s=s||document.createEvent("HTMLEvents")).initEvent(n,!0,!1),t.dispatchEvent(s)}}})},function(t,n,e){t.exports=function(){return new Worker(e.p+"21bf0702a29ef0b03d1f.worker.js")}},,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(21);var r=e(0);var o=function(t){var n={stack:[],scope:[]},e=r.a(r.j(function(n){var e=n.node,r=n.behaviour;return new Promise(function(n){t(r).then(function(t){n({id:r,node:e,behaviour:t.default})})})}),r.e,r.j(function(t){return r.a(r.j(function(n){return{behaviour:n,node:t}}),r.p(" "),r.o(/^\s+|\s+$|\s+(?=\s)/g,""))(t.getAttribute("data-behaviour"))}));return{hydrate:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#page-wrapper";return Promise.all(e([].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}(t.querySelectorAll("*[data-behaviour]"))))).then(function(t){var e=r.a(r.j(function(t){var n=t.behaviour,e=t.node,r=t.id,a=new n(e,r);a.init(),setTimeout(function(){a.mount()});var i=e.closest(o);return{fn:a,destroy:i,id:r}}))(t),a=r.a(r.c(function(t){return t.destroy}))(e);return Object.assign(n,{stack:e,scope:a}),n})},unmount:function(){r.a(r.j(function(t){t.fn.destroy()}))(n.scope)}}},a=e(1),i=e(6),u=e(5),c=e(10),s=e.n(c),l=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};function f(t){for(var n=f.options,e=n.parser[n.strictMode?"strict":"loose"].exec(t),r={},o=14;o--;)r[n.key[o]]=e[o]||"";return r[n.q.name]={},r[n.key[12]].replace(n.q.parser,function(t,e,o){e&&(r[n.q.name][e]=o)}),r}function p(t){try{return decodeURIComponent(t)}catch(t){console.error("decodeParam error")}}f.options={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var d,h,v,m,g,y,w=(d=(d={sensitive:!1,strict:!1,end:!1})||{},function(t){var n=[],e=s()(t,n,d);return function(t,r){var o=e.exec(t);if(!o)return!1;r=r||{};for(var a=void 0,i=void 0,u=0;u<n.length;u+=1)a=n[u],(i=o[u+1])&&(r[a.name]=p(i),a.repeat&&(r[a.name]=r[a.name].split(a.delimiter)));return r}}),b=r.n(function(t,n){var e=n.path,o=n.view,a=n.children,i=n.name,u=n.pagination,c=e,s=[];if(s.push({path:e,view:o,name:i,pagination:u}),a){var f=Array.isArray(a)?a:[a];s.push.apply(s,function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}(r.a(r.j(function(t){return l({},t,{path:(c+"/"+t.path).replace("//","/")})}),b)(f)))}return t.push.apply(t,s),t},[]),A=r.b(function(t){return r.l(r.h,function(n){var e,o,a,i,u,c,s,l=n.match(/\d+/g),p=l?parseInt(l[l.length-1],10):null,d=(e=f(n),o=e.anchor,a=e.host,i=e.path,u=e.queryKey,c=e.source,s=i.split("/").filter(function(t){return t.length}),{isRoot:"/"===i,hash:o,host:a,path:i,segments:s,slug:s[s.length-1],source:c,query:u,length:s.length}),h=d.path,v=r.c(function(t){var n=t.path;return w(n)(h)})(t),m=1===v.length&&"/"!==h?t.find(function(t){return"*"===t.path}):v[v.length-1];return{route:m,data:d,page:m.pagination?p:null}})}),O=function(t,n){var e=n.href;n.pathname;return!(!n||!e)&&(!(t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||n.target&&"_blank"===n.target||window.location.protocol!==n.protocol||window.location.hostname!==n.hostname||e.indexOf("#")>-1||n.getAttribute&&"string"==typeof n.getAttribute("download")||n.classList.contains("nope"))||void 0)},E=e(9),T=e.n(E),j=e(2),P=((h=T()()).listen(function(t,n){var e=t.pathname,r=t.state;"POP"===n&&a.a.emit(j.a,{pathname:e,state:r})}),{store:{from:"",to:""},push:function(){h.push.apply(h,arguments)}}),x=function(){var t={};return{set:function(n,e){t[n]=e},get:function(n){return t[n]}}}(),S=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text";return new Promise(function(r,o){x.get(t)?r(x.get(t)):fetch(t,n).then(function(n){var r=n.ok,a=n.status,i=n.url;if(!r||200!==a){var u={data:!1,ok:r,status:a,url:i};return x.set(t,u),void o(u)}return n[e]()}).then(function(n){x.set(t,{data:n}),r(n)})})},_={el:".page-child",onLoad:function(t){console.info("onLoad",t)},onError:function(t){console.warn("error loading page",t)},updateDom:function(t){var n=t.wrapper,e=t.newHtml,r=t.title;n.innerHTML="",n.appendChild(e),document.title=r},onExit:function(t){var n=t.next,e=t.action,r=t.from,o=t.to;log(r);var a={from:r.data.path,to:o.data.path,action:e};console.table(a),n()},onAfterExit:function(){},onEnter:function(t){(0,t.next)()},onAfterEnter:function(){}},R=e(8),k=e.n(R),N=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return e}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),q=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},I=(v=void 0,m={},g={},y=void 0,{addRoutes:function(t){return v=A(t),P.store.from=v(window.location.pathname),this},setWrapper:function(t){return y=t,this},onLoad:function(t){var n=v(t);return Object.assign({},_,n.route.view).onLoad(n),a.a.emit(j.g,n),this},exit:function(t){var n=t.pathname,e=t.action,r=t.transition,o=t.dataAttrs,i=v(n),u=r||i.route.view;P.store.to=i,m=Object.assign({},_,P.store.from.route.view),g=Object.assign({},_,u);var c=q({},P.store,{wrapper:y,oldHtml:document.querySelector(m.el),action:e,dataAttrs:o}),s=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r,o){n[t](q({next:r,onError:o},e))})};return a.a.emit(j.f,c),Promise.all([s("onExit",m,c),S(n)]).then(function(t){var r=N(t,2)[1];a.a.emit(j.h,c);var o=x.get(n).data;if(r.data&&!1===r.data.data)return m.onError(q({},c,r)),!1;var i=k()(o),u=i.querySelector("title").textContent.trim(),s=i.querySelector(g.el),l=q({oldHtml:document.querySelector(m.el),wrapper:y,newHtml:s,title:u,html:i},P.store,{action:e});return a.a.emit(j.c,l),g.updateDom(l),a.a.emit(j.b,l),m.onAfterExit(l),l}).then(function(t){if(t){var n=q({},t,P.store,{action:e});a.a.emit(j.e,n),s("onEnter",g,n).then(function(){g.onAfterEnter(n),P.store.from=i,a.a.emit(j.d,n)})}return t})}}),H=e(7);function $(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}var C=new(e.n(H).a),L=r.a(r.c(function(t){return t!==window.location.pathname&&!x.get(t)}),r.j(r.m("pathname")),r.c(function(t){return!O({},t.pathname)}));C.addEventListener("message",function(t){t.data.forEach(function(t){var n=t.key,e=t.data;x.set(n,{data:e})})});var U=function t(n){var e=this,r=n.routes,o=n.rootNode;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.onMouseEnter=function(t,n){var e=n.pathname;O(t,n)&&!x.get(e)&&S(e).catch(function(t){console.warn("[PREFETCH] no page found at "+e)})},this.onClick=function(n,e){var r=e.pathname;if(O(n,e)&&(n.stopPropagation(),n.preventDefault(),r!==window.location.pathname)){var o=Object(u.a)([].concat($(e.attributes)));t.goTo({pathname:r,dataAttrs:o,action:"PUSH"})}},this.mount=function(){return a.a.on(j.a,function(t){var n=t.pathname;I.exit({pathname:n,action:"POP"})}),e.$events.attachAll(),e},this.lazyload=function(){var t=L([].concat($(document.querySelectorAll("a"))));return t.length&&C.postMessage({links:t}),e},this.$routes=b(r),I.addRoutes(this.$routes).setWrapper(o).onLoad(window.location.pathname),this.$findRoute=A(this.$routes),this.$wrapper=o,this.$events=i.a.call(this,document,{"click a":"onClick","mouseover a":"onMouseEnter"})};U.goTo=function(t,n){var e=t.pathname,r=t.action,o=t.dataAttrs;I.exit({pathname:e,action:r,transition:n,dataAttrs:o}).then(function(t){"PUSH"===t.action&&P.push(e,{attr:o})})};var M=U,D=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};var K=void 0,F=void 0;new function t(n){var e=this,r=n.router,i=n.chunks;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.mount=function(){e.$loader.hydrate(document),e.$router&&e.$router.mount().lazyload(),a.a.on(j.c,function(){e.$loader.unmount()}),a.a.on(j.b,function(t){var n=t.newHtml;e.$loader.hydrate(n),e.$router.lazyload()})},r&&(this.$router=new M(D({},r))),this.$loader=o(i)}({router:{routes:[{path:"/",view:{}},{path:"/blog/",view:{},children:{path:":id",view:{updateDom:function(t){var n=t.wrapper,e=t.newHtml,r=t.title,o=t.from,a=t.to,i=o.page,u=o.data.segments,c=a.page,s=a.data.segments;null===i&&(K=null,s[s.length-2]===u[u.length-1]||(n.innerHTML=""));if(c>i){if(n.querySelector('[data-spon-page="'+c+'"]'))return;var l=(K||(F?F.nextElementSibling:n)).querySelector("[data-pagination-next]");l&&(l.style.display="none"),e.setAttribute("data-spon-page",c),n.appendChild(e),K=e}else if(K){var f=K.previousElementSibling;f&&(f.querySelector("[data-pagination-next]").style.display="",K.parentNode.removeChild(K)),K=f,F=null,f||(n.innerHTML="",e.setAttribute("data-spon-page",c),n.appendChild(e))}else e.setAttribute("data-spon-page",c),(F=n.querySelector(this.el))?(F=F.parentNode.insertBefore(e,F),e.querySelector("[data-pagination-next]").style.display="none"):n.appendChild(e),K=null;document.title=r}},pagination:!0}},{path:"/page-2/",view:{}},{path:"/page-3/",view:{}},{path:"/page-4/",view:{}},{path:"*",view:{}}],rootNode:document.getElementById("page-wrapper")},chunks:function(t){return e(19)("./"+t)}}).mount()},function(t,n,e){var r={"./Header":[17,0,6],"./Header.js":[17,0,6],"./HomePage":[16,0,5],"./HomePage.js":[16,0,5],"./Page1":[15,0,4],"./Page1.js":[15,0,4],"./Page2":[14,0,3],"./Page2.js":[14,0,3],"./Page3":[13,0,2],"./Page3.js":[13,0,2],"./Page4":[12,0,1],"./Page4.js":[12,0,1]};function o(t){var n=r[t];return n?Promise.all(n.slice(1).map(e.e)).then(function(){return e(n[0])}):Promise.resolve().then(function(){var n=new Error('Cannot find module "'+t+'".');throw n.code="MODULE_NOT_FOUND",n})}o.keys=function(){return Object.keys(r)},o.id=19,t.exports=o},,function(t,n,e){"use strict";(function(t){var n=e(4),r=e.n(n);window.log=t.log=r()("app:log"),r.a.disable("app:log")}).call(this,e(20))},function(t,n,e){t.exports=e(18)}]);
//# sourceMappingURL=preview.bundle.1527717197281.js.map