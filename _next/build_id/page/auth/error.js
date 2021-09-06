module.exports=__NEXT_REGISTER_PAGE("/auth/error",function(){return{page:webpackJsonp([26],{1252:function(e,t,n){e.exports=n(740)},740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return g});var r=n(22),a=n.n(r),o=n(0),i=n.n(o),c=n(6),s=n.n(c),l=n(3),u=n(4);function p(e){"@babel/helpers - typeof";return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,o,c,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,l["a"]),n=t,r=[{key:"render",value:function(){return"signin"==this.props.action&&"oauth"==this.props.type?i.a.createElement(u.a,f({},this.props,{navmenu:!1}),i.a.createElement("div",{className:"text-center mb-5"},i.a.createElement("h1",{className:"display-4 mt-5 mb-3"},"Unable to sign in"),i.a.createElement("p",{className:"lead"},"An account associated with your email address already exists."),i.a.createElement("p",{className:"lead"},i.a.createElement(s.a,{href:"/auth"},i.a.createElement("a",null,"Sign in with email or another service")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-8 mr-auto ml-auto mb-5"},i.a.createElement("div",{className:"text-muted"},i.a.createElement("h4",{className:"mb-2"},"Why am I seeing this?"),i.a.createElement("p",{className:"mb-2"},"It looks like you might have already signed up using another service."),i.a.createElement("p",{className:"mb-3"},"To protect your account, if you have perviously signed up using another service you must link accounts before you can use a different service to sign in."),i.a.createElement("h4",{className:"mb-2"},"How do I fix this?"),i.a.createElement("p",{className:"mb-0"},"To sign in using another service, first sign in using your email address then link accounts."))))):"signin"==this.props.action&&"token-invalid"==this.props.type?i.a.createElement(u.a,f({},this.props,{navmenu:!1}),i.a.createElement("div",{className:"text-center mb-5"},i.a.createElement("h1",{className:"display-4 mt-5 mb-2"},"Link not valid"),i.a.createElement("p",{className:"lead"},"This sign in link is no longer valid."),i.a.createElement("p",{className:"lead"},i.a.createElement(s.a,{href:"/auth"},i.a.createElement("a",null,"Get a new sign in link"))))):i.a.createElement(u.a,f({},this.props,{navmenu:!1}),i.a.createElement("div",{className:"text-center mb-5"},i.a.createElement("h1",{className:"display-4 mt-5"},"Error signing in"),i.a.createElement("p",{className:"lead"},"An error occured while trying to sign in."),i.a.createElement("p",{className:"lead"},i.a.createElement(s.a,{href:"/auth"},i.a.createElement("a",null,"Sign in with email or another service")))))}}],o=[{key:"getInitialProps",value:(c=a.a.mark(function e(n){var r,o,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.req,o=n.query,e.next=3,v(t.__proto__||Object.getPrototypeOf(t),"getInitialProps",this).call(this,{req:r});case 3:return(i=e.sent).action=o.action||null,i.type=o.type||null,i.service=o.service||null,e.abrupt("return",i);case 8:case"end":return e.stop()}},e,this)}),p=function(){var e=this,t=arguments;return new Promise(function(n,r){var a=c.apply(e,t);function o(e){m(a,n,r,o,i,"next",e)}function i(e){m(a,n,r,o,i,"throw",e)}o(void 0)})},function(e){return p.apply(this,arguments)})}],r&&y(n.prototype,r),o&&y(n,o),t}()}},[1252]).default}});