(this.webpackJsonpdeployment=this.webpackJsonpdeployment||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),l=n.n(c),o=(n(27),n(6)),u=n(7),i=n(9),m=n(8),p=(n(28),n(10)),s=n(1),h=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("small",null,"Click the links"),r.a.createElement("h4",null,r.a.createElement(p.b,{to:"/about"},"About Page")),r.a.createElement("h4",null,r.a.createElement(p.b,{to:"/gif"},"Random GIF")))}}]),n}(a.Component),b=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Not Found: 404"))}}]),n}(a.Component),d=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"About Page"),r.a.createElement("h4",null,"101 Ways to Deploy a React Website"),r.a.createElement("iframe",{title:"the video i watched",width:"560",height:"315",src:"https://www.youtube.com/embed/-THM2R4MJ98",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}]),n}(a.Component),f=n(16),y=n.n(f),E=n(21),v="https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=funny&rating=PG",j=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={url:"https://media.giphy.com/media/VseXvvxwowwCc/giphy.gif"},e.componentDidMount=Object(E.a)(y.a.mark((function t(){var n,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(v);case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.t0=e,t.next=9,a.data.image_original_url;case 9:t.t1=t.sent,t.t2={url:t.t1},t.t0.setState.call(t.t0,t.t2);case 12:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.url;return r.a.createElement("div",null,r.a.createElement("img",{src:e,style:{width:"50%",height:"auto"},alt:"random gif"}))}}]),n}(a.Component),O=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.location.pathname;return r.a.createElement("div",{className:"App"},"/"===e?r.a.createElement("h2",null,"Hello, world!"):r.a.createElement("h2",null,r.a.createElement(p.b,{to:"/"},"Hello, world!")),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:h}),r.a.createElement(s.a,{exact:!0,path:"/about",component:d}),r.a.createElement(s.a,{exact:!0,path:"/gif",component:j}),r.a.createElement(s.a,{path:"*",component:b})))}}]),n}(a.Component),g=Object(s.f)(O);l.a.render(r.a.createElement(p.a,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.4001ae85.chunk.js.map