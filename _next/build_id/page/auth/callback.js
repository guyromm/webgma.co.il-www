module.exports=__NEXT_REGISTER_PAGE("/auth/callback",function(){return{page:webpackJsonp([14],{1253:function(e,t,r){e.exports=r(740)},246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(r(255)),o=f(r(247)),s=f(r(262)),i=f(r(25)),a=f(r(26)),u=f(r(264)),l=f(r(267));t.flush=function(){var e=d.cssRules();return d.flush(),new n.default(e)};var c=r(0);function f(e){return e&&e.__esModule?e:{default:e}}var d=new(f(r(270)).default),h=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,a.default)(t,[{key:"componentWillMount",value:function(){d.add(this.props)}},{key:"shouldComponentUpdate",value:function(e){return this.props.css!==e.css}},{key:"componentWillUpdate",value:function(e){d.update(this.props,e)}},{key:"componentWillUnmount",value:function(){d.remove(this.props)}},{key:"render",value:function(){return null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=(0,o.default)(e,2),r=t[0],n=t[1];return d.computeId(r,n)}).join(" ")}}]),t}(c.Component);t.default=h},247:function(e,t,r){"use strict";t.__esModule=!0;var n=s(r(261)),o=s(r(248));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return function(e,t){if(Array.isArray(e))return e;if((0,n.default)(Object(e)))return function(e,t){var r=[],n=!0,s=!1,i=void 0;try{for(var a,u=(0,o.default)(e);!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){s=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(s)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},248:function(e,t,r){e.exports={default:r(523),__esModule:!0}},25:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},255:function(e,t,r){e.exports={default:r(256),__esModule:!0}},256:function(e,t,r){r(507),r(249),r(274),r(257),r(258),r(259),r(260),e.exports=r(18).Map},257:function(e,t,r){"use strict";var n=r(526),o=r(515);e.exports=r(527)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=n.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return n.def(o(this,"Map"),0===e?0:e,t)}},n,!0)},258:function(e,t,r){var n=r(35);n(n.P+n.R,"Map",{toJSON:r(528)("Map")})},259:function(e,t,r){r(529)("Map")},26:function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(263),s=(n=o)&&n.__esModule?n:{default:n};t.default=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,s.default)(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},260:function(e,t,r){r(530)("Map")},261:function(e,t,r){e.exports={default:r(535),__esModule:!0}},262:function(e,t,r){e.exports={default:r(532),__esModule:!0}},263:function(e,t,r){e.exports={default:r(521),__esModule:!0}},264:function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(40),s=(n=o)&&n.__esModule?n:{default:n};t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,s.default)(t))&&"function"!=typeof t?e:t}},265:function(e,t,r){e.exports={default:r(524),__esModule:!0}},266:function(e,t,r){e.exports={default:r(525),__esModule:!0}},267:function(e,t,r){"use strict";t.__esModule=!0;var n=i(r(268)),o=i(r(269)),s=i(r(40));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,s.default)(t)));e.prototype=(0,o.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(n.default?(0,n.default)(e,t):e.__proto__=t)}},268:function(e,t,r){e.exports={default:r(533),__esModule:!0}},269:function(e,t,r){e.exports={default:r(534),__esModule:!0}},270:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(271)),o=u(r(25)),s=u(r(26)),i=u(r(272)),a=u(r(273));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,i=void 0!==s&&s,u=t.isBrowser,l=void 0===u?"undefined"!=typeof window:u;(0,o.default)(this,e),this._sheet=n||new a.default({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),n&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return(0,s.default)(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=(0,n.default)(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),o=r.styleId,s=r.rules;if(o in this._instancesCounts)this._instancesCounts[o]+=1;else{var i=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});i.length>0&&(this._indices[o]=i,this._instancesCounts[o]=1)}}},{key:"remove",value:function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?(0,n.default)(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat((0,n.default)(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join("\n")]}))}},{key:"createComputeId",value:function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var n=String(r),o=t+n;return e[o]||(e[o]="jsx-"+(0,i.default)(t+"-"+n)),e[o]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var r=this.computeId(e.styleId,e.dynamic);return{styleId:r,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(r,e)}):[this.computeSelector(r,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=l},271:function(e,t,r){e.exports={default:r(522),__esModule:!0}},272:function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},273:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(25)),o=s(r(26));function s(e){return e&&e.__esModule?e:{default:e}}var i=e.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,o=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,u=void 0===s?i:s,c=t.isBrowser,f=void 0===c?"undefined"!=typeof window:c;(0,n.default)(this,e),l(a(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",l("boolean"==typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=f,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0}return(0,o.default)(e,[{key:"setOptimizeForSpeed",value:function(e){l("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),l(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(l(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(l(a(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];l(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];l(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,r){return r?t=t.concat(e.getSheetForTag(r).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,r){t&&l(a(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n}},{key:"length",get:function(){return this._rulesCount}}]),e}();function l(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=u}).call(t,r(531))},40:function(e,t,r){"use strict";t.__esModule=!0;var n=i(r(265)),o=i(r(266)),s="function"==typeof o.default&&"symbol"==typeof n.default?function(e){return typeof e}:function(e){return e&&"function"==typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":typeof e};function i(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof o.default&&"symbol"===s(n.default)?function(e){return void 0===e?"undefined":s(e)}:function(e){return e&&"function"==typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":void 0===e?"undefined":s(e)}},56:function(e,t,r){e.exports=r(246)},567:function(e,t,r){"use strict";r.d(t,"a",function(){return f});var n=r(56),o=r.n(n),s=r(0),i=r.n(s);function a(e){"@babel/helpers - typeof";return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,n,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,i.a.Component),r=t,(n=[{key:"render",value:function(){return this.props.fullscreen?i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{styleId:"3321740257",css:[".circle-loader{position:absolute;top:50%;left:50%;width:50%;z-index:100;text-align:center;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}",".circle-loader .circle{fill:transparent;stroke:rgba(0,0,0,0.2);stroke-width:4px;-webkit-animation:dash 2s ease infinite,rotate 2s linear infinite;animation:dash 2s ease infinite,rotate 2s linear infinite;}","@-webkit-keyframes dash{0%{stroke-dasharray:1,95;stroke-dashoffset:0;}50%{stroke-dasharray:85,95;stroke-dashoffset:-25;}100%{stroke-dasharray:85,95;stroke-dashoffset:-93;}}","@keyframes dash{0%{stroke-dasharray:1,95;stroke-dashoffset:0;}50%{stroke-dasharray:85,95;stroke-dashoffset:-25;}100%{stroke-dasharray:85,95;stroke-dashoffset:-93;}}","@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","@keyframes rotate{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]}),i.a.createElement("span",{className:"jsx-3321740257 circle-loader"},i.a.createElement("svg",{width:"60",height:"60",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"jsx-3321740257 circle"},i.a.createElement("circle",{cx:"30",cy:"30",r:"15",className:"jsx-3321740257"})))):i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{styleId:"2337374762",css:[".circle-loader{display:block;text-center;padding-left:50%;}",".circle-loader .circle{position:relative;left:-30px;fill:transparent;stroke:rgba(0,0,0,0.2);stroke-width:4px;-webkit-animation:dash 2s ease infinite,rotate 2s linear infinite;animation:dash 2s ease infinite,rotate 2s linear infinite;}","@-webkit-keyframes dash{0%{stroke-dasharray:1,95;stroke-dashoffset:0;}50%{stroke-dasharray:85,95;stroke-dashoffset:-25;}100%{stroke-dasharray:85,95;stroke-dashoffset:-93;}}","@keyframes dash{0%{stroke-dasharray:1,95;stroke-dashoffset:0;}50%{stroke-dasharray:85,95;stroke-dashoffset:-25;}100%{stroke-dasharray:85,95;stroke-dashoffset:-93;}}","@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","@keyframes rotate{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]}),i.a.createElement("span",{className:"jsx-2337374762 circle-loader"},i.a.createElement("svg",{width:"60",height:"60",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"jsx-2337374762 circle"},i.a.createElement("circle",{cx:"30",cy:"30",r:"15",className:"jsx-2337374762"}))))}}])&&u(r.prototype,n),s&&u(r,s),t}()},740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"default",function(){return k});var n=r(22),o=r.n(n),s=r(0),i=r.n(s),a=r(546),u=r.n(a),l=r(6),c=(r.n(l),r(250)),f=r.n(c),d=r(536),h=r.n(d),p=r(282),m=(r.n(p),r(567));function y(e){"@babel/helpers - typeof";return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,r,n,o,s,i){try{var a=e[s](i),u=a.value}catch(e){return void r(e)}a.done?t(u):Promise.resolve(u).then(n,o)}function v(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var s=e.apply(t,r);function i(e){_(s,n,o,i,a,"next",e)}function a(e){_(s,n,o,i,a,"throw",e)}i(void 0)})}}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,n,s,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,i.a.Component),r=t,n=[{key:"componentDidMount",value:(l=v(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.NextAuth.init({force:!0});case 2:e.sent,f.a.push(this.props.redirectTo||"/");case 4:case"end":return e.stop()}},e,this)})),function(){return l.apply(this,arguments)})},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("meta",{charSet:"UTF-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("script",{src:"https://cdn.polyfill.io/v2/polyfill.min.js"})),i.a.createElement("a",{href:this.props.redirectTo},i.a.createElement(m.a,{fullscreen:!0})))}}],s=[{key:"getInitialProps",value:(a=v(o.a.mark(function e(t){var r,n,s,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.req,e.next=3,p.NextAuth.init({force:!0,req:r});case 3:return n=e.sent,s=new h.a(r&&r.headers.cookie?r.headers.cookie:null),i="/",n.user&&(i=(i=s.get("redirect_url")||i).replace(/^[a-zA-Z]{3,5}\:\/{2}[a-zA-Z0-9_.:-]+\//,"")),e.abrupt("return",{session:n,redirectTo:i});case 8:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})}],n&&g(r.prototype,n),s&&g(r,s),t}()}},[1253]).default}});