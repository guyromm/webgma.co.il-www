module.exports=__NEXT_REGISTER_PAGE("/auth/check-email",function(){return{page:webpackJsonp([30],{1260:function(e,t,n){e.exports=n(745)},745:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return _});var r=n(24),o=n.n(r),a=n(0),i=n.n(a),u=n(250),c=n.n(u),l=n(8),s=n(3),f=n(283);n.n(f);function p(e){"@babel/helpers - typeof";return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,a,u,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,l["a"]),n=t,r=[{key:"render",value:function(){return i.a.createElement(s.a,b({},this.props,{navmenu:!1,signinBtn:!1}),i.a.createElement("div",{className:"text-center pt-5 pb-5"},i.a.createElement("h1",{className:"display-4"},"Check your email"),i.a.createElement("p",{className:"lead"},"A sign in link has been sent to ",this.props.email?i.a.createElement("span",{className:"font-weight-bold"},this.props.email):i.a.createElement("span",null,"your inbox"),".")))}}],a=[{key:"getInitialProps",value:(u=o.a.mark(function e(n){var r,a,i,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.req,a=n.res,i=n.query,e.next=3,v(t.__proto__||Object.getPrototypeOf(t),"getInitialProps",this).call(this,{req:r});case 3:return u=e.sent,e.next=6,f.NextAuth.init({force:!0,req:r});case 6:return u.session=e.sent,u.session.user&&(r?a.redirect("/auth/callback"):c.a.push("/auth/callback")),u.email=i.email,e.abrupt("return",u);case 10:case"end":return e.stop()}},e,this)}),p=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=u.apply(e,t);function a(e){y(o,n,r,a,i,"next",e)}function i(e){y(o,n,r,a,i,"throw",e)}a(void 0)})},function(e){return p.apply(this,arguments)})}],r&&h(n.prototype,r),a&&h(n,a),t}()}},[1260]).default}});