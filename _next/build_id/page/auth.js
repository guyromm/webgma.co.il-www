module.exports=__NEXT_REGISTER_PAGE("/auth",function(){return{page:webpackJsonp([25],{1253:function(e,t,r){e.exports=r(584)},584:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"default",function(){return S});var n=r(22),o=r.n(n),a=r(0),i=r.n(a),u=r(545),c=(r.n(u),r(21)),s=r.n(c),l=r(6),p=r.n(l),f=r(7),y=r(535),h=r.n(y),b=r(282),m=(r.n(b),r(3)),v=r(4),d=r(771);function g(e){"@babel/helpers - typeof";return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e,t,r){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,n,a,u,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,m["a"]),r=t,n=[{key:"render",value:function(){return this.props.session.user?i.a.createElement(v.a,O({},this.props,{navmenu:!1}),i.a.createElement("p",{className:"lead text-center mt-5 mb-5"},i.a.createElement(p.a,{href:"/auth"},i.a.createElement("a",null,"Manage your profile")))):i.a.createElement(v.a,O({},this.props,{navmenu:!1,signinBtn:!1}),i.a.createElement("h1",{className:"text-center display-4 mt-5"},"Sign up / Sign in"),i.a.createElement(f.r,{className:"mb-5"},i.a.createElement(f.b,{lg:"8",className:"mr-auto ml-auto",style:{marginBottom:20}},i.a.createElement(d.a,{session:this.props.session,providers:this.props.providers}))))}}],a=[{key:"getInitialProps",value:(u=o.a.mark(function e(r){var n,a,i,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.req,a=r.res,i=r.query,e.next=3,P(t.__proto__||Object.getPrototypeOf(t),"getInitialProps",this).call(this,{req:n});case 3:return u=e.sent,e.next=6,b.NextAuth.init({force:!0,req:n});case 6:return u.session=e.sent,e.next=9,b.NextAuth.providers({req:n});case 9:return u.providers=e.sent,u.session.user&&(n?a.redirect("/account"):s.a.push("/account")),i.redirect&&new h.a(n&&n.headers.cookie?n.headers.cookie:null).set("redirect_url",i.redirect,{path:"/"}),e.abrupt("return",u);case 13:case"end":return e.stop()}},e,this)}),c=function(){var e=this,t=arguments;return new Promise(function(r,n){var o=u.apply(e,t);function a(e){_(o,r,n,a,i,"next",e)}function i(e){_(o,r,n,a,i,"throw",e)}a(void 0)})},function(e){return c.apply(this,arguments)})}],n&&w(r.prototype,n),a&&w(r,a),t}()}},[1253]).default}});