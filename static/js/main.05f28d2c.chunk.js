(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{41:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c(2),n=c(14),a=c.n(n),r=c(5),l=c.n(r),d=c(15),o=c(3),u=function(e){var t=Object(s.useState)(""),c=Object(o.a)(t,2),n=c[0],a=c[1];return Object(i.jsx)("div",{className:"search-bar ui segment",children:Object(i.jsx)("form",{onSubmit:function(t){e.onFormSubmit(n),t.preventDefault()},className:"ui form",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Video Search"}),Object(i.jsx)("input",{onChange:function(e){a(e.target.value)},type:"text",value:n,placeholder:"B\u1ea5m Enter \u0111\u1ec3 t\xecm"})]})})})},j=c(16),m=c.n(j).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:"10",key:"AIzaSyC7N7mCTqtxfq_8SGRM4G4lqNwQ04N-d1c"}});var b=function(e){var t=e.video,c=Object(s.useState)(!1),n=Object(o.a)(c,2),a=n[0],r=n[1];return Object(i.jsx)("div",{className:"item",style:a?{backgroundColor:"#FFB900"}:null,onMouseOver:function(){r(!0)},onMouseLeave:function(){r(!1)},onClick:function(){return e.onVideoSelected(e.video)},children:Object(i.jsxs)("div",{className:"ui grid",children:[Object(i.jsx)("div",{className:"six wide column",children:Object(i.jsx)("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.default.url})}),Object(i.jsx)("div",{className:"ten wide column",style:{marginLeft:"-14px",alignItems:"center"},children:Object(i.jsx)("a",{className:"header",children:t.snippet.title})})]})})},v=function(e){var t=e.videos.map((function(t){return Object(i.jsx)(b,{onVideoSelected:e.onVideoSelected,video:t})}));return Object(i.jsx)("div",{className:"ui celled list",children:t})},O=function(e){var t=e.video;if(!t)return Object(i.jsx)("div",{children:"B\u1ea5m Enter \u0111\u1ec3 t\xecm"});var c="https://www.youtube.com/embed/"+t.id.videoId;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"ui embed",children:Object(i.jsx)("iframe",{title:"video player",src:c})}),Object(i.jsxs)("div",{className:"ui segment",children:[Object(i.jsx)("h3",{className:"ui header",children:t.snippet.title}),Object(i.jsx)("p",{children:t.snippet.description})]})]})},x=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(null),r=Object(o.a)(a,2),j=r[0],b=r[1],x=function(){var e=Object(d.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/search",{params:{q:t}});case 2:c=e.sent,n(c.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"ui container",children:[Object(i.jsx)(u,{onFormSubmit:x}),Object(i.jsx)("div",{className:"ui celled grid",children:Object(i.jsxs)("div",{className:"ui row",children:[j?Object(i.jsx)("div",{className:"ten wide column",children:Object(i.jsx)(O,{video:j})}):null,Object(i.jsx)("div",{className:j?"six wide column":"sixteen wide column",children:Object(i.jsx)(v,{onVideoSelected:function(e){b(e)},videos:c})})]})})]})};a.a.render(Object(i.jsx)(x,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.05f28d2c.chunk.js.map