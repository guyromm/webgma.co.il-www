module.exports=__NEXT_REGISTER_PAGE("/auth/error",function(){return{page:webpackJsonp([16],{620:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return v});var a=n(11),r=n.n(a),o=n(0),i=n.n(o),s=n(7),c=n.n(s),l=n(3),u=n(5);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var r=Object.getPrototypeOf(e);return null===r?void 0:y(r,t,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,o,s,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l["a"]),n=t,a=[{key:"render",value:function(){return"signin"==this.props.action&&"oauth"==this.props.type?i.a.createElement(u.a,p({},this.props,{navmenu:!1}),i.a.createElement("div",{className:"text-center mb-5"},i.a.createElement("h1",{className:"display-4 mt-5 mb-3"},"Unable to sign in"),i.a.createElement("p",{className:"lead"},"An account associated with your email address already exists."),i.a.createElement("p",{className:"lead"},i.a.createElement(c.a,{href:"/auth"},i.a.createElement("a",null,"Sign in with email or another service")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-8 mr-auto ml-auto mb-5"},i.a.createElement("div",{className:"text-muted"},i.a.createElement("h4",{className:"mb-2"},"Why am I seeing this?"),i.a.createElement("p",{className:"mb-2"},"It looks like you might have already signed up using another service."),i.a.createElement("p",{className:"mb-3"},"To protect your account, if you have perviously signed up using another service you must link accounts before you can use a different service to sign in."),i.a.createElement("h4",{className:"mb-2"},"How do I fix this?"),i.a.createElement("p",{className:"mb-0"},"To sign in using another service, first sign in using your email address then link accounts."))))):"signin"==this.props.action&&"token-invalid"==this.props.type?i.a.createElement(u.a,p({},this.props,{navmenu:!1}),i.a.createElement("div",{className:"text-center mb-5"},i.a.createElement("h1",{className:"display-4 mt-5 mb-2"},"Link not valid"),i.a.createElement("p",{className:"lead"},"This sign in link is no longer valid."),i.a.createElement("p",{className:"lead"},i.a.createElement(c.a,{href:"/auth"},i.a.createElement("a",null,"Get a new sign in link"))))):i.a.createElement(u.a,p({},this.props,{navmenu:!1}),i.a.createElement("div",{className:"text-center mb-5"},i.a.createElement("h1",{className:"display-4 mt-5"},"Error signing in"),i.a.createElement("p",{className:"lead"},"An error occured while trying to sign in."),i.a.createElement("p",{className:"lead"},i.a.createElement(c.a,{href:"/auth"},i.a.createElement("a",null,"Sign in with email or another service")))))}}],o=[{key:"getInitialProps",value:(s=r.a.mark(function e(n){var a,o,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.req,o=n.query,e.next=3,y(t.__proto__||Object.getPrototypeOf(t),"getInitialProps",this).call(this,{req:a});case 3:return(i=e.sent).action=o.action||null,i.type=o.type||null,i.service=o.service||null,e.abrupt("return",i);case 8:case"end":return e.stop()}},e,this)}),m=function(){var e=this,t=arguments;return new Promise(function(n,a){var r=s.apply(e,t);function o(e,t){try{var o=r[e](t),s=o.value}catch(e){return void a(e)}o.done?n(s):Promise.resolve(s).then(i,c)}function i(e){o("next",e)}function c(e){o("throw",e)}i()})},function(e){return m.apply(this,arguments)})}],a&&f(n.prototype,a),o&&f(n,o),t}()},860:function(e,t,n){e.exports=n(620)}},[860]).default}});