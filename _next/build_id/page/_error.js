module.exports=__NEXT_REGISTER_PAGE("/_error",function(){return{page:webpackJsonp([18],{611:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r.n(n),o=r(300),l=r.n(o),u=r(7),c=r.n(u),s=r(8),i=r(652),p=r.n(i),m=r(23);r.n(m);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,a.a.Component),r=t,o=[{key:"propTypes",value:function(){return{errorCode:a.a.PropTypes.number.isRequired,url:a.a.PropTypes.string.isRequired}}},{key:"getInitialProps",value:function(e){var t=e.res,r=e.xhr;return{errorCode:t?t.statusCode:r?r.status:null}}}],(n=[{key:"render",value:function(){var e;switch(this.props.errorCode){case 200:case 404:e=a.a.createElement("div",null,a.a.createElement(l.a,null,a.a.createElement("style",{dangerouslySetInnerHTML:{__html:p.a}})),a.a.createElement(s.d,{className:"pt-5 text-center"},a.a.createElement("h1",{className:"display-4"},"Page Not Found"),a.a.createElement("p",null,"The page ",a.a.createElement("strong",null,this.props.router.pathname)," does not exist."),a.a.createElement("p",null,a.a.createElement(c.a,{href:"/"},a.a.createElement("a",null,"Home")))));break;case 500:e=a.a.createElement("div",null,a.a.createElement(l.a,null,a.a.createElement("style",{dangerouslySetInnerHTML:{__html:p.a}})),a.a.createElement(s.d,{className:"pt-5 text-center"},a.a.createElement("h1",{className:"display-4"},"Internal Server Error"),a.a.createElement("p",null,"An internal server error occurred.")));break;default:e=a.a.createElement("div",null,a.a.createElement(l.a,null,a.a.createElement("style",{dangerouslySetInnerHTML:{__html:p.a}})),a.a.createElement(s.d,{className:"pt-5 text-center"},a.a.createElement("h1",{className:"display-4"},"HTTP ",this.props.errorCode," Error"),a.a.createElement("p",null,"An ",a.a.createElement("strong",null,"HTTP ",this.props.errorCode)," error occurred while trying to access ",a.a.createElement("strong",null,this.props.router.pathname))))}return e}}])&&y(r.prototype,n),o&&y(r,o),t}();t.default=Object(m.withRouter)(h)},804:function(e,t,r){e.exports=r(611)}},[804]).default}});