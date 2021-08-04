module.exports=__NEXT_REGISTER_PAGE("/Articles/rapid-prototyping-with-postgrest-and-svelte/en",function(){return{page:webpackJsonp([17],{11:function(e,t,s){"use strict";s.d(t,"a",function(){return p});var n=s(3),a=s(24);s.n(a);function o(e){"@babel/helpers - typeof";return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e,s){var n,a,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=!(i=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==o(i)&&"function"!=typeof i?r(a):i,Object.defineProperty(r(n),"state",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(r(n),"gists",{configurable:!0,enumerable:!0,writable:!0,value:[]}),Object.defineProperty(r(n),"fileid",{configurable:!0,enumerable:!0,writable:!0,value:null}),n.state.path=e.path,n}var s,a,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,n["a"]),s=t,(a=[{key:"render",value:function(){return this.props.preview?this.preview():this.post()}}])&&i(s.prototype,a),p&&i(s,p),t}()},1236:function(e,t,s){e.exports=s(574)},574:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s.d(t,"Title",function(){return w}),s.d(t,"PreviewContents",function(){return v}),s.d(t,"default",function(){return x});s(3);var n=s(5),a=s(11),o=s(8),i=s(7),l=s.n(i),r=s(0),p=s.n(r);function h(e){"@babel/helpers - typeof";return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,s){return t&&d(e.prototype,t),s&&d(e,s),e}function f(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){return y(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,p.a.Component),u(t,[{key:"render",value:function(){return p.a.createElement("h4",null,t.text)}}]),t}();Object.defineProperty(w,"text",{configurable:!0,enumerable:!0,writable:!0,value:"PostgreSQL, PostgREST & Svelte are a bliss to develop with!"});var v=function(e){function t(){return y(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,p.a.Component),u(t,[{key:"render",value:function(){return p.a.createElement("p",null,"The combination of svelte + postgrest enables rapid prototyping while reducing boilerplate, helps minimize the mental footprint, and is straightforward to grasp, all while being surprisingly flexible.")}}]),t}(),x=function(e){function t(){var e,s,n;y(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return f(n,(s=n=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(g(n),"fileid",{configurable:!0,enumerable:!0,writable:!0,value:"1ESyJTwscqyN_4oU-gSNNRSrie5IQ7WokCe5ze1OHvnw"}),s))}return b(t,a["a"]),u(t,[{key:"preview",value:function(){return p.a.createElement(o.d,null,p.a.createElement(w,null),p.a.createElement(v,null),p.a.createElement(l.a,{href:this.state.path},"Read more.."))}},{key:"post",value:function(){return p.a.createElement(n.a,c({},this.props,{navmenu:!1,title:w.text}),p.a.createElement(w,null),p.a.createElement(v,null),p.a.createElement("div",{dangerouslySetInnerHTML:{__html:s(725)}}))}}]),t}()},725:function(e,t){e.exports='<h4 id="h.n1ed50w1g9m3" style><span style>Preface</span></h4><p style><span style>In this text I&#x2019;d like to describe the reasoning and road taken to reach the tech stack that I grew to adopt, explain the choices made and suggest who in particular may benefit from using this combination of technologies.</span></p><p style><span style></span></p><p style><span style>The journey was almost two decades long. However, the presented solution began to emerge in the last two years or so.</span></p><h4 id="h.hayb2qi442ki" style><span style>But first, some history</span></h4><p style><span style></span></p><p style><span style>I&#x2019;ve been programming web sites &amp; apps since 2002 or so, hitting the road with PHP4. What follows are my rather personal observations on how things went from that point to the present in web development.</span></p><p style><span style></span></p><p style><span style>Back then, things were converging around the </span><span style><a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" style>MVC pattern</a></span><span style>. Since the client was (mostly) static content, changes to which involved page refreshes, it was sufficient to organize user actions, data flow, business logic and what the user ended up seeing in a way that made sense. </span></p><p style><span style></span></p><p style><span style>In those rather early days, no specializations existed in web development. Since the field was young and rather narrow, *everyone* was a full-stack engineer.</span></p><p style><span style></span></p><p style><span style>Needless to say, that sweet innocence didn&#x2019;t last. As soon as the browser (JS) evolved towards dynamic pages (</span><span style><a href="https://en.wikipedia.org/wiki/Dynamic_HTML" style>DHTML</a></span><span style>&#xA0;was a term back then), with JS becoming increasingly capable, the discovery of &#x201C;AJAX&#x201D;, permitting to query partial HTML snippets from the server, and eventually the advent of JSON, enabling &#x201C;proper&#x201D; SPAs, complexity sharply increased, taking its toll on the client side logic.</span></p><p style><span style>This entropy, in turn, was answered with new tooling to amend the chaos that client side programming was becoming.</span></p><p style><span style>Initially, the venerable jQuery took on as a way to streamline DOM manipulations &amp; events, succeeded by more comprehensive attempts to marshall state, rendering and event / action flows in setups that grew increasingly complex as the front-end gained an ever more complex business logic.</span></p><p style><span style>To bring an order into this chaos, frameworks such as Backbone and eventually Angular and React were introduced.</span></p><p style><span style></span></p><p style><span style>As client-side development evolved, developer knowledge and focus shifted towards these new domains. Web development as a whole began to suffer from a domain split, where separate disciplines and sets of skills were required to create the backend (persistence &amp; business logic), and a completely different skill set was emerging for the creation of an ever-evolving, more and more elaborate world of UI and UX, fueled by an ever growing matrix of Devices, increasingly capable Browsers, multiplying Operating Systems - each its own set of intricacies, features, limitations and usage patterns.</span></p><p style><span style></span></p><p style><span style>This resulted in the emergence of the front-end developer.</span></p><p style><span style>Their distinction from back-end programmers, and, well, of those who claim they&#x2019;re &#x201C;full stack&#x201D;, though that latter group does not instill much trust from oldtimers as myself, given that no matter how large the volume of knowledge that a &#x201C;full stack developer&#x201D; with two years of experience would have, it would still be very thinly spread.</span></p><p style><span style></span></p><p style><span style>Throughout this evolution of the web stack described above, I kept bouncing between various corners of the field, never staying in one spot for too long. </span></p><p style><span style>Early days I wrote domain specific PHP frameworks &amp; tooling, which were both back and front-end. Proceeded to hop on the Python bandwagon (Pylons circa 2007), then to write JS animation and graph scene frameworks in 2012-3, only to bounce back into solving scalability and performance problems on the backend (database sharding, green threads for concurrency with the advent of websockets). In the last decade I dabbled in browser extensions, and 2021 threw me into the world of Electron apps. </span></p><p style><span style></span></p><p style><span style>This experience led me to discover that what I really enjoyed was the research and architecture building activities that often characterize the early stages of a project. </span></p><p style><span style>This kind of activity requires rapid iterations, trial &amp; error, and the ability to quickly throw different approaches at a problem, resulting in sweeping architecture modifications and refactoring. </span></p><p style><span style>This kind of activity is best done by as few participants as possible. The more people - the higher is the communication overhead, the slower the speed and efficiency.</span></p><p style><span style>And this, if you read this far, brought me to identiy the problem:</span></p><h4 id="h.2ouqxowr4qhp" style><span style>Overspecialization in web development hampers rapid prototyping.</span></h4><p style><span style></span></p><p style><span style>As the field evolved, it became increasingly difficult to do the one thing that I enjoyed doing: single handedly churn out dirty proof-of-concept solutions that could later be built upon and expanded into real products.</span></p><p style><span style>The mere act of wrapping one&apos;s head around the entire combination of technologies required just to bootstrap any unexceptional project became burdensome. </span></p><p style><span style>The mental context switches required every time one&#x2019;s attention moves from infrastructure (whatever form it took), persistence (SQL or any other flavor), backend business logic (be it PHP, python, or even nodejs), and, mainly, the latest choice of another ever-evolving frontend framework, with its yet-again-novel way of doing things, introduced an overhead so high, while the necessity to hold the vast and heterogenous body of knowledge to support those activities did not leave much room in that head of mine for the actual task at hand. </span></p><p style><span style></span></p><p style><span style>Well, at least the problem&#x2019;s identified. And we can move on to seek a solution!</span></p><p style><span style></span></p><h4 id="h.svbntccaoir0" style><span style>So what do we need?</span></h4><p style><span style>A concise, small collection of tools that allows us to deliver without getting in the way, doesn&#x2019;t force us to keep too much on our mind, and at the same time be expressive and not get in the way of a product&#x2019;s long term growth.</span></p><h5 id="h.546paty46rbc" style><span style>To keep the mental footprint small, we&#x2019;d like</span></h5><ul class="lst-kix_986vh4l0vt0m-0 start" style><li style><span style>As few different languages as possible</span></li><li style><span style>As few different services as possible</span></li><li style><span style>As few new concepts outside of the &#x201C;standard&#x201D; web dev body of knowledge as possible</span></li></ul><h5 id="h.wvosnvwd2zk9" style><span style>To become fluent in it as quickly as possible, and to get stuff done efficiently (with the least context switches) we&#x2019;d like it to:</span></h5><ul class="lst-kix_986vh4l0vt0m-0" style><li style><span style>Be concise and expressive. The less LoC - the better.</span></li><li style><span style>Employ tooling as standard (common) as possible</span></li><li style><span style>Be easily refactorable, permit &amp; encourage DRY and component/code reuse.</span></li></ul><p style><span style></span></p><h4 id="h.ls30p372m05p" style><span style>From the bottom up</span></h4><h5 id="h.7pt5n7gbo41y" style><span style>Persistence, data modeling, message passing &amp; authorization.</span></h5><p style><span style><a href="https://www.postgresql.org/" style>PostgreSQL</a></span><span style>&#xA0;is the most popular and feature-complete open source database that&#x2019;s out there. In addition to providing the Relational solution (SQL), it also replaces a Document store (such as MongoDB) with its JSON(B) support and a Message broker (such as RabbitMQ).</span></p><p style><span style>In addition, it comes packing </span></p><ul class="lst-kix_h21llgelmq0n-0 start" style><li style><span style>SQL (relational)</span></li><li style><span style>JSON(B) - document/object storage</span></li><li style><span style>LISTEN/NOTIFY - event broadcasting &amp; message passing</span></li><li style><span style>Expressive roles &amp; permissions allowing to control access on a fine grained level (row level security).</span></li><li style><span style>JWT is supported as an extension</span></li></ul><p style><span style>PostgreSQL is so widely adopted that it has a bunch of both opensource as well as commercial solutions for everything from columnar storage through sharding and down to replication, providing plenty of room to grow. SQL is a widely adopted standard.</span></p><p style><span style></span></p><h5 id="h.ejkqixktns9y" style><span style>Back-end. Do we need one?</span></h5><p style><span style>All of the features listed above need a way to be unlocked and made available to the front-end. The way that&#x2019;s traditionally done is via a server-side solution such as Python, PHP, NodeJS, Ruby (and plenty of others). </span></p><p style><span style>Such server-side solutions typically also hold the business logic, enforce constraints, validate input, perform auth, using the database for storage alone, complex queries aside. </span></p><p style><span style></span></p><p style><span style><a href="https://postgrest.org/en/stable/" style>PostgREST</a></span><span style>&#xA0;is a tiny and concise module that utilizes PostgreSQL&#x2019;s power to radically deal away (for the most part) with the need for a server-side language. </span></p><p style><span style>This is possible because the underlying database allows to express (and enforce) business logic on various levels (declaratively, using data definition constraints, and procedurally with triggers, custom functions, views and other abstractions), protects this logic via an elaborate role &amp; permission system, and allows to easily define custom authentication with its JWT support. </span></p><p style><span style>So the only thing that PostgREST does is expose the database through a REST API, and, for the most part, does not get in the way.</span></p><p style><span style>While one still needs server-side code for tasks such as worker queues and functionality that cannot be expressed in the DB, it is nevertheless surprising, for someone who&#x2019;s written server-side code for almost two decades, to discover that server-side code, in its traditional sense, is simply not needed.</span></p><p style><span style>And there&#x2019;s more! Getting used to expressing business logic and constraints declaratively, brings one to the discovery that data-based constraints, other than being concise, are a very solid safeguard against errors and lacking validation in code that&#x2019;s higher up. In other words:</span></p><p style><span style></span></p><h4 id="h.kg1mum76pcqa" style><span style>The database is where an application&#x2019;s state lives. Business logic that&#x2019;s expressed in the database applies to the entire app.</span></h4><p style><span style></span></p><p style><span style>And when we express business logic declaratively, concisely, in the database, we relieve ourselves of the need to express it elsewhere. Hell, we relieve ourselves of the need to even have a server-side app. Well, we delay that need, until it surfaces, sooner or later. But let&#x2019;s not be picky.</span></p><p style><span style></span></p><h4 id="h.y8gfokkjysiu" style><span style>This leaves us with the front-end to decide on.</span></h4><p style><span style>As I was trying to force React down my throat, getting used to the excess boilerplate of redux, and trying to wrap my head around functional components, convincing myself this is the one tool to use due to its wide adoption, a friend suggested that I try out </span><span style><a href="https://svelte.dev/" style>Svelte</a></span><span style>. I did, and haven&#x2019;t looked back. Here&#x2019;s what so good about it:</span></p><ul class="lst-kix_q316saq6btwt-0 start" style><li style><span style>The least amount of new concepts to learn on top of vanilla JS.</span></li><li style><span style>Things follow a logic and seem to just align with my way of thinking. Yes, that&#x2019;s subjective, but if you&#x2019;re a web dinosaur too, you may remember gentler times, when MVC made sense, was simple to work with, and had predictable results. Svelte, other than the fact that is browser based instead of being server-rendered, feels very much like that.</span></li><li style><span style>The produced bundle is truly tiny.</span></li><li style><span style>It&#x2019;s very much alive and keeps getting better. </span><span style><a href="https://sapper.svelte.dev/" style>Sapper</a></span><span style>, which is the framework around Svelte providing SSR, project structure and other amenities, is being replaced with </span><span style><a href="https://kit.svelte.dev/" style>SvelteKit</a></span><span style>, which solved my two grievances with sapper: long compile times for large codebases and the presence of server.js, which makes projects potentially undeployable as a static bundle.</span></li></ul><p style><span style></span></p><h4 id="h.p4h9nnpw0wqf" style><span style>And here are some other pleasant perks</span></h4><ul class="lst-kix_rjragiq7nng-0 start" style><li style><span style>Traditional self-hosted web app aside, I was able to use this stack, with little changes:</span></li></ul><ul class="lst-kix_rjragiq7nng-1 start" style><li style><span style>On AWS RDS + Lambda + S3/Cloudfront. So yes, if you&#x2019;d like to host with minimal infrastructure costs and pay for usage, this is a solid way to go. Run PostgREST in Lambda, compile and deploy static front-end on S3, while the DB lives in RDS. it all works!</span></li></ul><ul class="lst-kix_rjragiq7nng-0" style><li style><span style>To build a Windows/macOS/Linux Electron app. Well, minus the sapper/sveltekit - you don&#x2019;t need those. Yes, the installer weighs a ton (200MB), but so does Electron to begin with. but you can bundle PostgreSQL+ PostgREST and develop with Svelte. It works great! </span></li></ul><p style><span style>On the subject of bloat, I&#x2019;m inclined to try out </span><span style><a href="https://tauri.studio/en/" style>Tauri</a></span><span style>&#xA0;as an Electron alternative, now that Edge versions have mostly stabilized on Win*.</span></p><ul class="lst-kix_rjragiq7nng-0" style><li style><span style>For </span><span style><a href="https://github.com/webextension-toolbox/webextension-toolbox" style>developing browser extensions</a></span><span style>. Svelte can be compiled to live within the extension, if you&#x2019;d like to bundle UI with it. And the persistence is exposed the same way, via PostgREST from a remote resource.</span></li><li style><span style>Easy to write a websocket server using PostgreSQL&#x2019;s LISTEN/NOTIFY. Any server process or stored procedure can fire an event (with optional payload), which will be immediately pushed to any connected client, based on a need to know basis. Since PostgREST does not support Websockets this is required if you want an app that quickly reacts to things happening in the background.</span></li><li style><span style>Worker processes that process a queue are easy to write utilizing the LISTEN/NOTIFY construct, which is used to quickly wake a sleeping worker up to any fresh items that require processing.</span></li><li style><span style>PostgreSQL&#x2019;s support for JSONB allows to prototype without defining a strict data model by pushing everything to a unstructured fields, and as data structure emerges, to painlessly migrate it to separate fields, or maybe just add indexes to the data as its still inside of the JSON.</span></li><li style><span style>SQL aside, unless, for some strange reason, we have to write server code in a language that&#x2019;s not JS, we are isomorphic and can share and reuse components between the client &amp; server.</span></li><li style><span style>This stack enables an untypical, but highly efficient inside-out collaboration pattern. I can quickly create a fully functional, butt-ugly solution, and then pass it to a developer specializing on front-end for beautification. This exempts me from the need to design screens first. It&#x2019;s possible to iterate over functionality without being concerned about the design &amp; UX aspects. Once a functioning result is attained it can be passed as-is to the front-ender and forgotten about.</span></li><li style><span style>PostgREST exposes a </span><span style><a href="https://swagger.io/" style>Swagger/OpenAPI</a></span><span style>&#xA0;spec out of the box. This enables collaboration with front-end developers and 3rd parties by merely declaring the data structure in the DB and giving them access to it. no further action is required.</span></li><li style><span style>It would probably be straightforward to swap PostgREST for PostGraphile, if one wants to gain GraphQL which may have benefits over REST for dedicated front-end devs who won&#x2019;t touch the schema itself. However, I haven&#x2019;t tried that.</span></li></ul><h4 id="h.s57jl626ovg4" style><span style>Oh, the shameless self-plug!</span></h4><p style><span style>Here&#x2019;s my little </span><span style><a href="https://github.com/guyromm/svelte-postgrest-template" style>boilerplate template</a></span><span style>&#xA0;that can be used to jumpstart the above evangelized combination of tools. Caution: SvelteKit support is just fresh in, so, there be dragons. </span></p><h5 id="h.l9wxe7l2t9i7" style><span style>But hey, if you read this far, you must be one brave adventurer!</span></h5><p style><span style></span></p><h4 id="h.v2z535vir8u0" style><span style>On the business side. </span></h4><p style><span style></span></p><p style><span style>I run a small consulting shop that specializes in rapidly churning out custom-built web solutions. And I just gave you the recipe for our secret sauce. If you like the idea, we can cook something together. Welcome to </span><span style><a href="mailto:guy@webgma.co.il" style>drop me a line</a></span><span style>.</span></p><p style><span style></span></p>'}},[1236]).default}});