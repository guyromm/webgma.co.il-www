module.exports=__NEXT_REGISTER_PAGE("/examples/async",function(){return{page:webpackJsonp([11],{273:function(t,e,r){r(301),t.exports=self.fetch.bind(self)},301:function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};l.prototype.append=function(t,e){t=s(t),e=u(e);var r=this.map[t];this.map[t]=r?r+","+e:e},l.prototype.delete=function(t){delete this.map[s(t)]},l.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},l.prototype.set=function(t,e){this.map[s(t)]=u(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),c(t)},l.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),c(t)},l.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),c(t)},e.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var a=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},y.call(b.prototype),y.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var i=[301,302,303,307,308];w.redirect=function(t,e){if(-1===i.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})},t.Headers=l,t.Request=b,t.Response=w,t.fetch=function(t,r){return new Promise(function(n,o){var a=new b(t,r),i=new XMLHttpRequest;i.onload=function(){var t,e,r={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",e=new l,t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};r.url="responseURL"in i?i.responseURL:r.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;n(new w(o,r))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.open(a.method,a.url,!0),"include"===a.credentials&&(i.withCredentials=!0),"responseType"in i&&e.blob&&(i.responseType="blob"),a.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===a._bodyInit?null:a._bodyInit)})},t.fetch.polyfill=!0}function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function l(t){this.map={},t instanceof l?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function p(t){var e=new FileReader,r=h(e);return e.readAsArrayBuffer(t),r}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&n(t))this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=d(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var t,e,r,n=f(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=h(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}function b(t,e){var r,n,o=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),a.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function w(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},621:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(12),o=r.n(n),a=r(0),i=r.n(a),s=r(8),u=r(3),c=r(5),l=r(273),f=r.n(l);function h(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n,a,i;return e=t,r=null,n=[{key:"getData",value:(a=o.a.mark(function t(){var e,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f()("//jsonplaceholder.typicode.com/posts");case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}},t,this)}),i=function(){var t=this,e=arguments;return new Promise(function(r,n){var o=a.apply(t,e);function i(t){h(o,r,n,i,s,"next",t)}function s(t){h(o,r,n,i,s,"throw",t)}i(void 0)})},function(){return i.apply(this,arguments)})}],r&&p(e.prototype,r),n&&p(e,n),t}();function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(t){b(a,n,o,i,s,"next",t)}function s(t){b(a,n,o,i,s,"throw",t)}i(void 0)})}}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function g(t,e,r){return e&&E(t.prototype,e),r&&E(t,r),t}function _(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t,e,r){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"default",function(){return O}),r.d(e,"RenderPosts",function(){return T});var O=function(t){var e,r;function n(t){var e;return w(this,n),(e=v(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t))).state={posts:t.posts||null,error:t.error||null},e}return _(n,u["a"]),g(n,null,[{key:"getInitialProps",value:(e=m(o.a.mark(function t(e){var r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.req,t.next=3,x(n.__proto__||Object.getPrototypeOf(n),"getInitialProps",this).call(this,{req:r});case 3:if(a=t.sent,"undefined"!=typeof window){t.next=14;break}return t.prev=5,t.next=8,d.getData();case 8:a.posts=t.sent,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),a.error="Unable to fetch AsyncData on server";case 14:return t.abrupt("return",a);case 15:case"end":return t.stop()}},t,this,[[5,11]])})),function(t){return e.apply(this,arguments)})}]),g(n,[{key:"componentDidMount",value:(r=m(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==this.state.posts){t.next=13;break}return t.prev=1,t.t0=this,t.next=5,d.getData();case 5:t.t1=t.sent,t.t2={posts:t.t1,error:null},t.t0.setState.call(t.t0,t.t2),t.next=13;break;case 10:t.prev=10,t.t3=t.catch(1),this.setState({error:"Unable to fetch AsyncData on client"});case 13:case"end":return t.stop()}},t,this,[[1,10]])})),function(){return r.apply(this,arguments)})},{key:"render",value:function(){return i.a.createElement(c.a,this.props,i.a.createElement("h1",{className:"display-2"},"Async Data"),i.a.createElement("p",null,"This page is an example of how to fetch and load data asynchronously so that pages load quickly and with without blocking rendering when possible, but in a way that still works in browsers that do not support JavaScript."),i.a.createElement(s.r,null,i.a.createElement(s.b,{xs:"12",md:"6"},i.a.createElement("h3",null,"Server Side Rendering"),i.a.createElement("p",null,"When rendering on the server, this page will not be rendered until it has fetched the remote data. This ensures web crawlers and browsers that do not have JavaScript enabled will still see the full content of the page.")),i.a.createElement(s.b,{xs:"12",md:"6"},i.a.createElement("h3",null,"Client Side Rendering"),i.a.createElement("p",null,"When the page is rendered by browser that supports JavaScript it will load the page immediately, without data, and have the client fetch and insert the data while the page is loading."))),i.a.createElement("p",null,"This page calls ",i.a.createElement("a",{href:"https://jsonplaceholder.typicode.com/"},"jsonplaceholder.typicode.com")," using ",i.a.createElement("a",{href:"https://github.com/matthew-andrews/isomorphic-fetch"},"isomorphic-fetch"),"."),i.a.createElement("hr",null),i.a.createElement("h2",{className:"display-4"},"Data from API"),i.a.createElement(T,{posts:this.state.posts,error:this.state.error}))}}]),n}(),T=function(t){function e(){return w(this,e),v(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _(e,i.a.Component),g(e,[{key:"render",value:function(){return this.props.error?i.a.createElement("p",null,i.a.createElement("span",{className:"font-weight-bold"},"Error loading posts:")," ",this.props.error):this.props.posts?i.a.createElement(i.a.Fragment,null,this.props.posts.map(function(t,e){return i.a.createElement("div",{key:e},i.a.createElement("span",{className:"font-weight-bold"},t.title),i.a.createElement("p",null,i.a.createElement("i",null,t.body)))})):i.a.createElement("p",null,i.a.createElement("i",null,"Loading content…"))}}]),e}()},861:function(t,e,r){t.exports=r(621)}},[861]).default}});