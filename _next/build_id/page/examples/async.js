module.exports=__NEXT_REGISTER_PAGE("/examples/async",function(){return{page:webpackJsonp([27],{1264:function(e,t,n){e.exports=n(747)},747:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),a=n.n(r),o=n(0),i=n.n(o),c=n(5),s=n(8),l=n(3),u=n(558),p=n.n(u);function f(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r,o,i;return t=e,n=null,r=[{key:"getData",value:(o=a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("//jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}),i=function(){var e=this,t=arguments;return new Promise(function(n,r){var a=o.apply(e,t);function i(e){f(a,n,r,i,c,"next",e)}function c(e){f(a,n,r,i,c,"throw",e)}i(void 0)})},function(){return i.apply(this,arguments)})}],n&&h(t.prototype,n),r&&h(t,r),e}();function y(e){"@babel/helpers - typeof";return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function b(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){m(o,r,a,i,c,"next",e)}function c(e){m(o,r,a,i,c,"throw",e)}i(void 0)})}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),e}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"default",function(){return k}),n.d(t,"RenderPosts",function(){return j});var k=function(e){var t,n;function r(e){var t;return v(this,r),(t=w(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e))).state={posts:e.posts||null,error:e.error||null},t}return _(r,s["a"]),E(r,null,[{key:"getInitialProps",value:(t=b(a.a.mark(function e(t){var n,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,e.next=3,x(r.__proto__||Object.getPrototypeOf(r),"getInitialProps",this).call(this,{req:n});case 3:if(o=e.sent,"undefined"!=typeof window){e.next=14;break}return e.prev=5,e.next=8,d.getData();case 8:o.posts=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),o.error="Unable to fetch AsyncData on server";case 14:return e.abrupt("return",o);case 15:case"end":return e.stop()}},e,this,[[5,11]])})),function(e){return t.apply(this,arguments)})}]),E(r,[{key:"componentDidMount",value:(n=b(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this.state.posts){e.next=13;break}return e.prev=1,e.t0=this,e.next=5,d.getData();case 5:e.t1=e.sent,e.t2={posts:e.t1,error:null},e.t0.setState.call(e.t0,e.t2),e.next=13;break;case 10:e.prev=10,e.t3=e.catch(1),this.setState({error:"Unable to fetch AsyncData on client"});case 13:case"end":return e.stop()}},e,this,[[1,10]])})),function(){return n.apply(this,arguments)})},{key:"render",value:function(){return i.a.createElement(l.a,this.props,i.a.createElement("h1",{className:"display-2"},"Async Data"),i.a.createElement("p",null,"This page is an example of how to fetch and load data asynchronously so that pages load quickly and with without blocking rendering when possible, but in a way that still works in browsers that do not support JavaScript."),i.a.createElement(c.r,null,i.a.createElement(c.b,{xs:"12",md:"6"},i.a.createElement("h3",null,"Server Side Rendering"),i.a.createElement("p",null,"When rendering on the server, this page will not be rendered until it has fetched the remote data. This ensures web crawlers and browsers that do not have JavaScript enabled will still see the full content of the page.")),i.a.createElement(c.b,{xs:"12",md:"6"},i.a.createElement("h3",null,"Client Side Rendering"),i.a.createElement("p",null,"When the page is rendered by browser that supports JavaScript it will load the page immediately, without data, and have the client fetch and insert the data while the page is loading."))),i.a.createElement("p",null,"This page calls ",i.a.createElement("a",{href:"https://jsonplaceholder.typicode.com/"},"jsonplaceholder.typicode.com")," using ",i.a.createElement("a",{href:"https://github.com/matthew-andrews/isomorphic-fetch"},"isomorphic-fetch"),"."),i.a.createElement("hr",null),i.a.createElement("h2",{className:"display-4"},"Data from API"),i.a.createElement(j,{posts:this.state.posts,error:this.state.error}))}}]),r}(),j=function(e){function t(){return v(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _(t,i.a.Component),E(t,[{key:"render",value:function(){return this.props.error?i.a.createElement("p",null,i.a.createElement("span",{className:"font-weight-bold"},"Error loading posts:")," ",this.props.error):this.props.posts?i.a.createElement(i.a.Fragment,null,this.props.posts.map(function(e,t){return i.a.createElement("div",{key:t},i.a.createElement("span",{className:"font-weight-bold"},e.title),i.a.createElement("p",null,i.a.createElement("i",null,e.body)))})):i.a.createElement("p",null,i.a.createElement("i",null,"Loading content…"))}}]),t}()}},[1264]).default}});