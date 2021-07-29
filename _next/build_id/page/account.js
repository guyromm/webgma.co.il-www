module.exports=__NEXT_REGISTER_PAGE("/account",function(){return{page:webpackJsonp([26],{1218:function(e,t,n){e.exports=n(719)},719:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return T}),n.d(t,"LinkAccounts",function(){return A}),n.d(t,"LinkAccount",function(){return I});var a=n(21),r=n.n(a),o=n(0),i=n.n(o),s=n(24),c=(n.n(s),n(7)),l=n.n(c),u=n(557),m=n.n(u),p=n(8),f=n(282),h=(n.n(f),n(3)),d=n(5),y=n(535),b=n.n(y);function v(e){"@babel/helpers - typeof";return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t,n,a,r,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(a,r)}function k(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){g(o,a,r,i,s,"next",e)}function s(e){g(o,a,r,i,s,"throw",e)}i(void 0)})}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?j(e):t}function _(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function O(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}function S(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){var t,n,a;function o(e){var t;return w(this,o),(t=x(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e))).state={session:e.session,isSignedIn:!!e.session.user,name:"",email:"",emailVerified:!1,alertText:null,alertStyle:null},e.session.user&&(t.state.name=e.session.user.name,t.state.email=e.session.user.email),t.handleChange=t.handleChange.bind(j(t)),t.onSubmit=t.onSubmit.bind(j(t)),t}return S(o,h["a"]),O(o,null,[{key:"getInitialProps",value:(t=k(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,e.next=3,C(o.__proto__||Object.getPrototypeOf(o),"getInitialProps",this).call(this,{req:n});case 3:return a=e.sent,e.next=6,f.NextAuth.linked({req:n});case 6:return a.linkedAccounts=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}]),O(o,[{key:"componentDidMount",value:(a=k(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.NextAuth.init({force:!0});case 2:t=e.sent,this.setState({session:t,isSignedIn:!!t.user}),(new b.a).set("redirect_url",window.location.pathname,{path:"/"}),this.getProfile();case 7:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"getProfile",value:function(){var e=this;m()("/account/user",{credentials:"include"}).then(function(e){return e.json()}).then(function(t){t.name&&t.email&&e.setState({name:t.name,email:t.email,emailVerified:t.emailVerified})})}},{key:"handleChange",value:function(e){var t,n,a;this.setState((t={},n=e.target.name,a=e.target.value,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t))}},{key:"onSubmit",value:(n=k(r.a.mark(function e(t){var n,a,o=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({alertText:null,alertStyle:null}),e.next=4,f.NextAuth.csrfToken();case 4:e.t0=e.sent,e.t1=this.state.name||"",e.t2=this.state.email||"",n={_csrf:e.t0,name:e.t1,email:e.t2},a=Object.keys(n).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])}).join("&"),m()("/account/user",{credentials:"include",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a}).then(function(){var e=k(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==t.status){e.next=11;break}return o.getProfile(),o.setState({alertText:"Changes to your profile have been saved",alertStyle:"alert-success"}),e.t0=o,e.next=6,f.NextAuth.init({force:!0});case 6:e.t1=e.sent,e.t2={session:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=17;break;case 11:return e.t3=o,e.next=14,f.NextAuth.init({force:!0});case 14:e.t4=e.sent,e.t5={session:e.t4,alertText:"Failed to save changes to your profile",alertStyle:"alert-danger"},e.t3.setState.call(e.t3,e.t5);case 17:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 10:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"render",value:function(){if(!0===this.state.isSignedIn){var e=null===this.state.alertText?i.a.createElement("div",null):i.a.createElement("div",{className:"alert ".concat(this.state.alertStyle),role:"alert"},this.state.alertText);return i.a.createElement(d.a,E({},this.props,{navmenu:!1}),i.a.createElement(p.r,{className:"mb-1"},i.a.createElement(p.b,{xs:"12"},i.a.createElement("h1",{className:"display-2"},"Your Account"),i.a.createElement("p",{className:"lead text-muted"},"Edit your profile and link accounts"))),e,i.a.createElement(p.r,{className:"mt-4"},i.a.createElement(p.b,{xs:"12",md:"8",lg:"9"},i.a.createElement(p.e,{method:"post",action:"/account/user",onSubmit:this.onSubmit},i.a.createElement(p.g,{name:"_csrf",type:"hidden",value:this.state.session.csrfToken,onChange:function(){}}),i.a.createElement(p.f,{row:!0},i.a.createElement(p.h,{sm:2},"Name:"),i.a.createElement(p.b,{sm:10,md:8},i.a.createElement(p.g,{name:"name",value:this.state.name,onChange:this.handleChange}))),i.a.createElement(p.f,{row:!0},i.a.createElement(p.h,{sm:2},"Email:"),i.a.createElement(p.b,{sm:10,md:8},i.a.createElement(p.g,{name:"email",value:this.state.email.match(/.*@localhost\.localdomain$/)?"":this.state.email,onChange:this.handleChange}))),i.a.createElement(p.f,{row:!0},i.a.createElement(p.b,{sm:12,md:10},i.a.createElement("p",{className:"text-right"},i.a.createElement(p.a,{color:"primary",type:"submit"},"Save Changes")))))),i.a.createElement(p.b,{xs:"12",md:"4",lg:"3"},i.a.createElement(A,{session:this.props.session,linkedAccounts:this.props.linkedAccounts}))),i.a.createElement(p.r,null,i.a.createElement(p.b,null,i.a.createElement("h2",null,"Delete your account"),i.a.createElement("p",null,"If you delete your account it will be erased immediately. You can sign up again at any time."),i.a.createElement(p.e,{id:"signout",method:"post",action:"/account/delete"},i.a.createElement("input",{name:"_csrf",type:"hidden",value:this.state.session.csrfToken}),i.a.createElement(p.a,{type:"submit",color:"outline-danger"},i.a.createElement("span",{className:"icon ion-md-trash mr-1"})," Delete Account")))))}return i.a.createElement(d.a,E({},this.props,{navmenu:!1}),i.a.createElement(p.r,null,i.a.createElement(p.b,{xs:"12",className:"text-center pt-5 pb-5"},i.a.createElement("p",{className:"lead m-0"},i.a.createElement(l.a,{href:"/auth"},i.a.createElement("a",null,"Sign in to manage your profile"))))))}}]),o}(),A=function(e){function t(){return w(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return S(t,i.a.Component),O(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,Object.keys(this.props.linkedAccounts).map(function(t,n){return i.a.createElement(I,{key:n,provider:t,session:e.props.session,linked:e.props.linkedAccounts[t]})}))}}]),t}(),I=function(e){function t(){return w(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return S(t,i.a.Component),O(t,[{key:"render",value:function(){return!0===this.props.linked?i.a.createElement("form",{method:"post",action:"/auth/oauth/".concat(this.props.provider.toLowerCase(),"/unlink")},i.a.createElement("input",{name:"_csrf",type:"hidden",value:this.props.session.csrfToken}),i.a.createElement("p",null,i.a.createElement("button",{className:"btn btn-block btn-outline-danger",type:"submit"},"Unlink from ",this.props.provider))):i.a.createElement("p",null,i.a.createElement("a",{className:"btn btn-block btn-outline-primary",href:"/auth/oauth/".concat(this.props.provider.toLowerCase())},"Link with ",this.props.provider))}}]),t}()}},[1218]).default}});