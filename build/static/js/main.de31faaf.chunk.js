(this["webpackJsonpserver.js"]=this["webpackJsonpserver.js"]||[]).push([[0],{38:function(e,n,t){},58:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t(28),c=t.n(o),i=(t(38),t(1)),s=t(15),r=t.n(s),l=t(29),u=t(11),d=t(30),p=t.n(d).a.create({baseURL:"http://localhost:8000"}),f=(t(58),t(31)),j=t.n(f),h=t(10),b=t.n(h),g=t(3);var m=function(){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),s=i[0],d=i[1],f=Object(a.useState)(!1),h=Object(u.a)(f,2),m=h[0],w=h[1],O=function(){var e=Object(l.a)(r.a.mark((function e(n){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t=n.target.files,console.log(t[0]),(a=new FormData).append("file",t[0]),p.post("/upload",a).then((function(e){console.log(e.data.message),o(!0),d(e.data.name)}));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{className:"",children:"Upload Zip Folder"}),Object(g.jsx)("input",{className:"custom-file-upload",type:"file",accept:".zip",onChange:function(e){return O(e)}}),t?Object(g.jsx)("button",{className:m?"disableButton":"button",onClick:function(){w(!0),p.post("/update",{name:s}).then((function(e){console.log("Done!"),console.log(e.data.name,e.data.JsonFileName);var n={name:e.data.name,JsonFileName:e.data.JsonFileName};p.post("/compress",n,{responseType:"blob"}).then((function(e){console.log("got al files in api "),console.log(e);var n=Date.now()+"-output.zip";j()(e.data,n),b.a.fire({icon:"success",title:"Successfully updated!"}).then((function(){window.location.reload()}))})).catch((function(){b.a.fire({icon:"warning",title:"Something went wrong..."}).then((function(){window.location.reload()}))}))})).catch((function(){b.a.fire({icon:"warning",title:"Something went wrong..."}).then((function(){window.location.reload()}))}))},children:Object(g.jsxs)("b",{children:[m?Object(g.jsx)("i",{class:"fa fa-circle-o-notch fa-spin"}):""," Update"]})}):""]})};var w=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(i.c,{children:Object(g.jsx)(i.a,{exact:!0,path:"/",component:m})})})},O=t(33),v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,79)).then((function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),o(e),c(e),i(e)}))};c.a.render(Object(g.jsx)(O.a,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),v()}},[[78,1,2]]]);
//# sourceMappingURL=main.de31faaf.chunk.js.map