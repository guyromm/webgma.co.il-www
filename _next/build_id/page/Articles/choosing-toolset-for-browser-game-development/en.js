module.exports=__NEXT_REGISTER_PAGE("/Articles/choosing-toolset-for-browser-game-development/en",function(){return{page:webpackJsonp([24],{1243:function(e,t,s){e.exports=s(571)},571:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s.d(t,"Title",function(){return w}),s.d(t,"PreviewContents",function(){return v}),s.d(t,"default",function(){return x});s(8);var a=s(3),n=s(13),l=s(5),i=s(4),o=s.n(i),r=s(0),p=s.n(r);function y(e){"@babel/helpers - typeof";return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,s){return t&&u(e.prototype,t),s&&u(e,s),e}function f(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){return h(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,p.a.Component),m(t,[{key:"render",value:function(){return p.a.createElement("h4",null,t.text)}}]),t}();Object.defineProperty(w,"text",{configurable:!0,enumerable:!0,writable:!0,value:"Finding the best way to create web based games"});var v=function(e){function t(){return h(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,p.a.Component),m(t,[{key:"render",value:function(){return p.a.createElement("p",null,"An investigation into the feasibility of attaining a rich gaming experience with widely supported pure browser technology")}}]),t}(),x=function(e){function t(){var e,s,a;h(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return f(a,(s=a=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),Object.defineProperty(d(a),"fileid",{configurable:!0,enumerable:!0,writable:!0,value:"1jWVeBfYvRRCuRr4rIw4X9nNZ2pbZToV4hhmad_9kRUQ"}),s))}return g(t,n["a"]),m(t,[{key:"preview",value:function(){return p.a.createElement(l.d,null,p.a.createElement(w,null),p.a.createElement(v,null),p.a.createElement(o.a,{href:this.state.path},"Read more.."))}},{key:"post",value:function(){return p.a.createElement(a.a,c({},this.props,{navmenu:!1,title:w.text}),p.a.createElement(w,null),p.a.createElement(v,null),p.a.createElement("div",{dangerouslySetInnerHTML:{__html:s(727)}}))}}]),t}()},727:function(e,t){e.exports='<div style><p style><span style></span></p></div><p style><span style>Note: this is a historical document, written as a result of research conducted in early 2011. Things have changed a bit since.</span></p><p style><span style></span></p><p style><span style>With the recent impasse around Flash and its absence from iOS, I have been asked to investigate the feasibility of attaining a rich gaming experience with more widely supported &#x201C;pure&#x201C; browser technology. To be frank, Flash being a proprietary platform added much to my motivation to show that it is possible to live without..</span></p><p style><span style></span></p><p style><span style>However, personal bias aside, Adobe Flash not only provides a uniform runtime that is platform agnostic, but also a rich development environment, which makes it much harder to substitute.</span></p><p style><span style></span></p><p style><span style>As a result, the technology overview resulted in the search of a trade off, where on one hand we have strict platform support requirements, and on the other is the desire to find a comfortable toolset to work with.</span></p><p style><span style></span></p><p style><span style>First, we have to support as many browser platforms as it is possible. The following are our initial target list:</span></p><p style><span style></span></p><ul class="lst-kix_rm3r3x5l6d6f-0 start" style><li style><span style>Explorer 9+</span></li><li style><span style>Firefox 3.6+</span></li><li style><span style>Opera</span></li><li style><span style>Chrome</span></li><li style><span style>Safari</span></li><li style><span style>iOS MobileSafari</span></li><li style><span style>Android&#x2019;s WebKit browser</span></li></ul><p style><span style></span></p><p style><span style>Additionally, there is a requirement to work as comfortably as possible with designer generated artwork.</span></p><p style><span style></span></p><p style><span style>There are </span><span style><a href="http://www.sencha.com/products/animator/" style>no ripe alternatives</a></span><span style>&#xA0;to the Flash scripting environment, which allows scripting animation timelines, managing a </span><span style><a href="http://en.wikipedia.org/wiki/Scene_graph" style>scene graph</a></span><span style>, and seamless integration with Illustrator and other tools that artists use to create artwork. </span></p><p style><span style>Once off the treaded commercial toolchain path we are on our own to define the export process of graphics from the artist to the front end programmer.</span></p><p style><span style></span></p><p style><span style>Initially, SVG </span><span style><a href="http://coin.to/svgtest/scene.html" style>was examined</a></span><span style>&#xA0;as a high level language. SVG seemingly has the following advantages:</span></p><ul class="lst-kix_2bjw4cdzkw97-0 start" style><li style><span style>Relatively high-level - has its own traversable DOM, to which events can be attached</span></li><li style><span style>Supports complex animation primitives such as </span><span style><a href="http://www.w3.org/TR/SVG11/animate.html#AnimateMotionElement" style>animation along a path</a></span><span style>, shape morphing</span></li><li style><span style>Resolution agnostic (Vector Graphics)</span></li><li style><span style>Posession of something inherently similar to a scene graph</span></li><li style><span style>can use SVG as a native format when importing artwork</span></li></ul><p style><span style>With such a list of advantages, one could think that this technology is ideal for our needs. However, the following offsets and undermines these:</span></p><ul class="lst-kix_9u3l70a0h1ni-0 start" style><li style><span style>Implementations of SVG vary across browsers in features support</span></li><li style><span style>On some platforms it is quite slow</span></li><li style><span style>the SVG DOM and API was discovered to be complex and hard to use for truly dynamic scenes where objects are instantiated and thrown away.</span></li></ul><p style><span style></span></p><p style><span style>So it was decided to try a level lower approach with </span><span style><a href="http://dev.w3.org/html5/canvas-api/canvas-2d-api.html" style>Canvas</a></span><span style>, and use an abstraction library on top such as </span><span style><a href="http://processingjs.org/" style>Processing.JS</a></span></p><ul class="lst-kix_nysnkn65z5hu-0 start" style><li style><span style>Canvas is a simple standard and hence almost universally supported on modern browsers.</span></li><li style><span style>Processing gives a degree of abstraction that Canvas lacks as well as an ability to import SVG</span></li><li style><span style>with Canvas we get very fine grained (literally, per-pixel) control over the viewport</span></li></ul><p style><span style>Implementing an </span><span style><a href="http://coin.to/processingtest/scene.html" style>initial test scene</a></span><span style>&#xA0;in Canvas/Processing revealed that many primitives that inherently exist in SVG had to be implemented, such as:</span></p><ul class="lst-kix_xmdhn7453n9h-0 start" style><li style><span style>Animation along a path</span></li><li style><span style>Object Mouseover/click detection</span></li><li style><span style>Shape morphing, being complex to implement algorithmically, was done via an </span><span style><a href="http://inkscape.org/" style>Inkscape</a></span><span style>&#xA0;plugin and exported as a frameset for sprite animation.</span></li><li style><span style></span></li></ul><p style><span style>These shortcomings would all still be acceptable if in return we got consistent cross platform behaviour that we control to the pixel. Thus, it was decided to proceed with a </span><span style><a href="http://coin.to/casinotest/table.html" style>more real-life example</a></span><span style>. Unfortunately, this new demo exposed a show stopper for the Canvas/Processing duo: </span><span style>terribly low FPS using Canvas on MobileSafari</span><span style>.</span></p><p style><span style></span></p><p style><span style>Attempts were made to optimize the demo by removing the background redraw, reducing the amount of objects on screen, removing object textures, all with unsatisfactory results.</span></p><p style><span style></span></p><p style><span style>By this point, having spent a good deal of time unsucesfully trying to achieve a seemingly straightforward goal forced a rethinking of the methodology. The weakest link in the chain is obviously iOS &amp; other slow-CPU mobile platforms. </span></p><p style><span style>On these devices, fast graphics are achievable only with the help of native hardware acceleration. And it seems that in MobileSafari, only the HTML DOM gets that treat.</span></p><p style><span style></span></p><p style><span style>So the last blackjack table demo </span><span style><a href="http://coin.to/casinotest/table2.html" style>was re-written again</a></span><span style>, this time using HTML &amp; CSS3, this time with sound and some transparency effects.. and - Success! As an immediate result, MobileSafari performance improved. </span></p><p style><span style>After </span><span style><a href="http://www.facebook.com/note.php?note_id=491691753919" style>further reading </a></span><span style>and specialized optimizations, the framerate was made very smooth. In iOS 4.x MobileSafari is only partially accelerated, and careful choice of DOM manipulation methodology is needed to squeeze the most out of this browser.</span></p><p style><span style></span></p><p style><span style>Personally, I was surprised to have been capable of achieving all of the requirements of a graphically intensive scene with &#x201C;just&#x201D; CSS transformations and HTML. While busy looking for a silver bullet in the form of an advanced technology, the bread and butter of web programming went unnoticed until other options were exhausted.</span></p><p style><span style>This is not to say that Canvas &amp; SVG do not have their place. But with the above realistic goals, SVG is more suitable for complex but rather static diagrams, and Canvas simply doesn&#x2019;t pull it on the current generation of Apple mobile devices, leaving the scene for just one tech: CSS3.</span></p><p style><span style></span></p><p style><span style>Incidentally, our choice, dictated by the platform&#x2019;s low common denominator, forced us to iron out our own custom artwork digestion &amp; montage process. But that&#x2019;s subject for another article..</span></p><p style><span style></span></p><p style><span style>The code examples found in this article are available for download off the writer&#x2019;s GitHub account:</span></p><ul class="lst-kix_yb9kpwqb1ja-0 start" style><li style><span style><a href="https://github.com/guyromm/svg-test" style>https://github.com/guyromm/svg-test</a></span><span style>&#xA0;- initial SVG test</span></li><li style><span style><a href="https://github.com/guyromm/processing-test" style>https://github.com/guyromm/processing-test</a></span><span style>&#xA0;- initial Canvas/Processing test</span></li><li style><span style><a href="https://github.com/guyromm/processing-casino-test" style>https://github.com/guyromm/processing-casino-test</a></span><span style>&#xA0;- BlackJack table demo, Processing (table.html) &amp; CSS3 (table2.html).</span></li></ul><p style><span style></span></p><p style><span style></span></p><p style><span style></span></p><p style><span style>article tags: </span></p><p style><span style>games,flash,css3,svg,canvas,processing,processing.js,browser,web,html5,javascript,webkit,mobilesafari,ios,apple</span></p>'}},[1243]).default}});