(function(e){function t(t){for(var o,c,l=t[0],u=t[1],i=t[2],f=0,s=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&s.push(n[c][0]),n[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(s.length)s.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,c=1;c<r.length;c++){var u=r[c];0!==n[u]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},n={app:0},a=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"60621270"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var i=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(f);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}n[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3785:function(e,t,r){"use strict";r("4570")},4570:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("7a23"),n={id:"nav"},a=Object(o["g"])("Home"),c=Object(o["g"])(" | "),l=Object(o["g"])("About");function u(e,t){var r=Object(o["w"])("router-link"),u=Object(o["w"])("router-view");return Object(o["q"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",n,[Object(o["h"])(r,{to:"/"},{default:Object(o["B"])((function(){return[a]})),_:1}),c,Object(o["h"])(r,{to:"/about"},{default:Object(o["B"])((function(){return[l]})),_:1})]),Object(o["h"])(u)],64)}r("3785");var i=r("6b0d"),f=r.n(i);const d={},s=f()(d,[["render",u]]);var v=s,p=r("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var b=r("6c02"),h=r("cf05"),g=r.n(h),j={class:"home"},m=Object(o["e"])("img",{alt:"Vue logo",src:g.a},null,-1);function O(e,t,r,n,a,c){var l=Object(o["w"])("HelloWorld");return Object(o["q"])(),Object(o["d"])("div",j,[m,Object(o["h"])(l,{msg:"Welcome to Your Vue.js App"})])}var w={class:"hello"},k=Object(o["f"])('<p data-v-55cd5ff2> For a guide and recipes on how to configure / customize this project,<br data-v-55cd5ff2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-55cd5ff2>vue-cli documentation</a>. </p><h3 data-v-55cd5ff2>Installed CLI Plugins</h3><ul data-v-55cd5ff2><li data-v-55cd5ff2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-55cd5ff2>babel</a></li><li data-v-55cd5ff2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-55cd5ff2>pwa</a></li><li data-v-55cd5ff2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-55cd5ff2>router</a></li><li data-v-55cd5ff2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-55cd5ff2>eslint</a></li></ul><h3 data-v-55cd5ff2>Essential Links</h3><ul data-v-55cd5ff2><li data-v-55cd5ff2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-55cd5ff2>Core Docs</a></li><li data-v-55cd5ff2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-55cd5ff2>Forum</a></li><li data-v-55cd5ff2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-55cd5ff2>Community Chat</a></li><li data-v-55cd5ff2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-55cd5ff2>Twitter</a></li><li data-v-55cd5ff2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-55cd5ff2>News</a></li></ul><h3 data-v-55cd5ff2>Ecosystem</h3><ul data-v-55cd5ff2><li data-v-55cd5ff2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-55cd5ff2>vue-router</a></li><li data-v-55cd5ff2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-55cd5ff2>vuex</a></li><li data-v-55cd5ff2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-55cd5ff2>vue-devtools</a></li><li data-v-55cd5ff2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-55cd5ff2>vue-loader</a></li><li data-v-55cd5ff2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-55cd5ff2>awesome-vue</a></li></ul>',7);function y(e,t,r,n,a,c){return Object(o["q"])(),Object(o["d"])("div",w,[Object(o["e"])("h1",null,Object(o["y"])(r.msg),1),k])}var _={name:"HelloWorld",props:{msg:String}};r("8d6e");const P=f()(_,[["render",y],["__scopeId","data-v-55cd5ff2"]]);var x=P,A={name:"Home",components:{HelloWorld:x}};const C=f()(A,[["render",O]]);var S=C,E=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],H=Object(b["a"])({history:Object(b["b"])("/"),routes:E}),q=H;Object(o["c"])(v).use(q).mount("#app")},"7c35":function(e,t,r){},"8d6e":function(e,t,r){"use strict";r("7c35")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.3cd9e953.js.map