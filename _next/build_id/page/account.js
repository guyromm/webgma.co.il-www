module.exports=__NEXT_REGISTER_PAGE("/account",function(){return{page:webpackJsonp([15],{456:function(e,t,r){r(483),e.exports=self.fetch.bind(self)},483:function(e,t){!function(e){"use strict";if(!e.fetch){var t={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(t.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(e){return e&&DataView.prototype.isPrototypeOf(e)},o=ArrayBuffer.isView||function(e){return e&&r.indexOf(Object.prototype.toString.call(e))>-1};l.prototype.append=function(e,t){e=s(e),t=u(t);var r=this.map[e];this.map[e]=r?r+","+t:t},l.prototype.delete=function(e){delete this.map[s(e)]},l.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},l.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},l.prototype.set=function(e,t){this.map[s(e)]=u(t)},l.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},l.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),c(e)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),c(e)},l.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),c(e)},t.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var a=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},y.call(m.prototype),y.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},v.error=function(){var e=new v(null,{status:0,statusText:""});return e.type="error",e};var i=[301,302,303,307,308];v.redirect=function(e,t){if(-1===i.indexOf(t))throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})},e.Headers=l,e.Request=m,e.Response=v,e.fetch=function(e,r){return new Promise(function(n,o){var a=new m(e,r),i=new XMLHttpRequest;i.onload=function(){var e,t,r={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",t=new l,e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t)};r.url="responseURL"in i?i.responseURL:r.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;n(new v(o,r))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.open(a.method,a.url,!0),"include"===a.credentials&&(i.withCredentials=!0),"responseType"in i&&t.blob&&(i.responseType="blob"),a.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===a._bodyInit?null:a._bodyInit)})},e.fetch.polyfill=!0}function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function u(e){return"string"!=typeof e&&(e=String(e)),e}function c(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(r[Symbol.iterator]=function(){return r}),r}function l(e){this.map={},e instanceof l?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function h(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function p(e){var t=new FileReader,r=h(t);return t.readAsArrayBuffer(e),r}function d(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(t.arrayBuffer&&t.blob&&n(e))this._bodyArrayBuffer=d(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!t.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!o(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=d(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var e,t,r,n=f(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=h(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}function m(e,t){var r,n,o=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new l(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new l(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),a.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function v(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new l(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)},617:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"default",function(){return B}),r.d(t,"LinkAccounts",function(){return U}),r.d(t,"LinkAccount",function(){return C});var n=r(12),o=r.n(n),a=r(0),i=r.n(a),s=r(26),u=(r.n(s),r(7)),c=r.n(u),l=r(456),f=r.n(l),h=r(8),p=r(79),d=(r.n(p),r(2)),y=r(4),m=r(474),b=r.n(m);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function g(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){E(a,n,o,i,s,"next",e)}function s(e){E(a,n,o,i,s,"throw",e)}i(void 0)})}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?S(e):t}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e,t,r){return t&&A(e.prototype,t),r&&A(e,r),e}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t,r){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){var t,r,n;function a(e){var t;return _(this,a),(t=x(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))).state={session:e.session,isSignedIn:!!e.session.user,name:"",email:"",emailVerified:!1,alertText:null,alertStyle:null},e.session.user&&(t.state.name=e.session.user.name,t.state.email=e.session.user.email),t.handleChange=t.handleChange.bind(S(t)),t.onSubmit=t.onSubmit.bind(S(t)),t}return O(a,d["a"]),P(a,null,[{key:"getInitialProps",value:(t=g(o.a.mark(function e(t){var r,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.req,e.next=3,k(a.__proto__||Object.getPrototypeOf(a),"getInitialProps",this).call(this,{req:r});case 3:return n=e.sent,e.next=6,p.NextAuth.linked({req:r});case 6:return n.linkedAccounts=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}]),P(a,[{key:"componentDidMount",value:(n=g(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.NextAuth.init({force:!0});case 2:t=e.sent,this.setState({session:t,isSignedIn:!!t.user}),(new b.a).set("redirect_url",window.location.pathname,{path:"/"}),this.getProfile();case 7:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},{key:"getProfile",value:function(){var e=this;f()("/account/user",{credentials:"include"}).then(function(e){return e.json()}).then(function(t){t.name&&t.email&&e.setState({name:t.name,email:t.email,emailVerified:t.emailVerified})})}},{key:"handleChange",value:function(e){var t,r,n;this.setState((t={},r=e.target.name,n=e.target.value,r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t))}},{key:"onSubmit",value:(r=g(o.a.mark(function e(t){var r,n,a=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({alertText:null,alertStyle:null}),e.next=4,p.NextAuth.csrfToken();case 4:e.t0=e.sent,e.t1=this.state.name||"",e.t2=this.state.email||"",r={_csrf:e.t0,name:e.t1,email:e.t2},n=Object.keys(r).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])}).join("&"),f()("/account/user",{credentials:"include",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}).then(function(){var e=g(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=11;break}return a.getProfile(),a.setState({alertText:"Changes to your profile have been saved",alertStyle:"alert-success"}),e.t0=a,e.next=6,p.NextAuth.init({force:!0});case 6:e.t1=e.sent,e.t2={session:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=17;break;case 11:return e.t3=a,e.next=14,p.NextAuth.init({force:!0});case 14:e.t4=e.sent,e.t5={session:e.t4,alertText:"Failed to save changes to your profile",alertStyle:"alert-danger"},e.t3.setState.call(e.t3,e.t5);case 17:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 10:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{key:"render",value:function(){if(!0===this.state.isSignedIn){var e=null===this.state.alertText?i.a.createElement("div",null):i.a.createElement("div",{className:"alert ".concat(this.state.alertStyle),role:"alert"},this.state.alertText);return i.a.createElement(y.a,w({},this.props,{navmenu:!1}),i.a.createElement(h.r,{className:"mb-1"},i.a.createElement(h.b,{xs:"12"},i.a.createElement("h1",{className:"display-2"},"Your Account"),i.a.createElement("p",{className:"lead text-muted"},"Edit your profile and link accounts"))),e,i.a.createElement(h.r,{className:"mt-4"},i.a.createElement(h.b,{xs:"12",md:"8",lg:"9"},i.a.createElement(h.e,{method:"post",action:"/account/user",onSubmit:this.onSubmit},i.a.createElement(h.g,{name:"_csrf",type:"hidden",value:this.state.session.csrfToken,onChange:function(){}}),i.a.createElement(h.f,{row:!0},i.a.createElement(h.h,{sm:2},"Name:"),i.a.createElement(h.b,{sm:10,md:8},i.a.createElement(h.g,{name:"name",value:this.state.name,onChange:this.handleChange}))),i.a.createElement(h.f,{row:!0},i.a.createElement(h.h,{sm:2},"Email:"),i.a.createElement(h.b,{sm:10,md:8},i.a.createElement(h.g,{name:"email",value:this.state.email.match(/.*@localhost\.localdomain$/)?"":this.state.email,onChange:this.handleChange}))),i.a.createElement(h.f,{row:!0},i.a.createElement(h.b,{sm:12,md:10},i.a.createElement("p",{className:"text-right"},i.a.createElement(h.a,{color:"primary",type:"submit"},"Save Changes")))))),i.a.createElement(h.b,{xs:"12",md:"4",lg:"3"},i.a.createElement(U,{session:this.props.session,linkedAccounts:this.props.linkedAccounts}))),i.a.createElement(h.r,null,i.a.createElement(h.b,null,i.a.createElement("h2",null,"Delete your account"),i.a.createElement("p",null,"If you delete your account it will be erased immediately. You can sign up again at any time."),i.a.createElement(h.e,{id:"signout",method:"post",action:"/account/delete"},i.a.createElement("input",{name:"_csrf",type:"hidden",value:this.state.session.csrfToken}),i.a.createElement(h.a,{type:"submit",color:"outline-danger"},i.a.createElement("span",{className:"icon ion-md-trash mr-1"})," Delete Account")))))}return i.a.createElement(y.a,w({},this.props,{navmenu:!1}),i.a.createElement(h.r,null,i.a.createElement(h.b,{xs:"12",className:"text-center pt-5 pb-5"},i.a.createElement("p",{className:"lead m-0"},i.a.createElement(c.a,{href:"/auth"},i.a.createElement("a",null,"Sign in to manage your profile"))))))}}]),a}(),U=function(e){function t(){return _(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,i.a.Component),P(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,Object.keys(this.props.linkedAccounts).map(function(t,r){return i.a.createElement(C,{key:r,provider:t,session:e.props.session,linked:e.props.linkedAccounts[t]})}))}}]),t}(),C=function(e){function t(){return _(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,i.a.Component),P(t,[{key:"render",value:function(){return!0===this.props.linked?i.a.createElement("form",{method:"post",action:"/auth/oauth/".concat(this.props.provider.toLowerCase(),"/unlink")},i.a.createElement("input",{name:"_csrf",type:"hidden",value:this.props.session.csrfToken}),i.a.createElement("p",null,i.a.createElement("button",{className:"btn btn-block btn-outline-danger",type:"submit"},"Unlink from ",this.props.provider))):i.a.createElement("p",null,i.a.createElement("a",{className:"btn btn-block btn-outline-primary",href:"/auth/oauth/".concat(this.props.provider.toLowerCase())},"Link with ",this.props.provider))}}]),t}()},853:function(e,t,r){e.exports=r(617)}},[853]).default}});