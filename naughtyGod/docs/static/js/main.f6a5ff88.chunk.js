(this["webpackJsonprandom-name"]=this["webpackJsonprandom-name"]||[]).push([[0],{264:function(e,n,t){},265:function(e,n,t){},340:function(e,n){},342:function(e,n){},352:function(e,n){},354:function(e,n){},381:function(e,n){},382:function(e,n){},387:function(e,n){},389:function(e,n){},396:function(e,n){},415:function(e,n){},436:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),a=t(34),i=t.n(a),o=(t(264),t(265),t(266),t(441)),u=t(437),s=t(438),j=t(71),l=t(16),d=t(439),b=t(444),f=t(443),O=t(9),h=d.a.Option;var m=function(e){var n=e.tagList;return Object(O.jsx)(s.a.List,{name:"tags",children:function(e,t,c){var r=t.add,a=t.remove,i=c.errors;return Object(O.jsxs)(O.Fragment,{children:[e.map((function(e){return Object(O.jsxs)(s.a.Item,{required:!1,children:[Object(O.jsx)(s.a.Item,Object(l.a)(Object(l.a)({},e),{},{noStyle:!0,children:Object(O.jsx)(d.a,{style:{width:100},children:n.map((function(e){return Object(O.jsx)(h,{value:e,children:e},e)}))})})),Object(O.jsx)(b.a,{onClick:function(){return a(e.name)}})]},e.key)})),Object(O.jsxs)(s.a.Item,{children:[Object(O.jsx)(j.a,{type:"dashed",onClick:function(){return r()},style:{width:"60%"},icon:Object(O.jsx)(f.a,{}),children:"Add field"}),Object(O.jsx)(s.a.ErrorList,{errors:i})]})]})}})},x=t(105),v=t(44),p=t(442),g=t(440),y=t(254),k=t(175),I=k.b.apiKey("OAMMKo8c2HxLi1DzOgZHuuIGqIY2yypO9sj3eTY29mV0qGYwLiIxGNTecAs7uCDi"),C=null,w=function(){var e=Object(c.useState)(C),n=Object(v.a)(e,2),t=n[0],r=n[1];return t||(C=new k.a({id:"start-vwuib"})).logIn(I).then((function(){r(C)})).catch((function(e){return y.b.error(e)})),t};function L(e){var n=e.cluster,t=void 0===n?"mongodb-atlas":n,c=e.db,a=e.collection,i=w();return r.a.useMemo((function(){return i?i.currentUser.mongoClient(t).db(c).collection(a):void 0}),[i,t,c,a])}var M=function(){var e=s.a.useForm(),n=Object(v.a)(e,1)[0],t=L({db:"XDX",collection:"random"}),c=function(){var e=n.getFieldsValue().noun;t.insertMany(e)};return Object(O.jsx)("div",{children:Object(O.jsx)(j.a,{onClick:function(e){o.a.confirm({title:"\u6dfb\u52a0",content:Object(O.jsx)(s.a,{name:"addNoun",form:n,children:Object(O.jsx)(s.a.List,{name:"noun",children:function(e,n){var t=n.add,c=n.remove;return Object(O.jsxs)(O.Fragment,{children:[e.map((function(e){var n=e.key,t=e.name,r=e.fieldKey,a=Object(x.a)(e,["key","name","fieldKey"]);return Object(O.jsxs)(p.b,{children:[Object(O.jsx)(s.a.Item,Object(l.a)(Object(l.a)({},a),{},{name:[t,"value"],fieldKey:[r,"value"],children:Object(O.jsx)(g.a,{placeholder:"Value"})})),Object(O.jsx)(s.a.Item,Object(l.a)(Object(l.a)({},a),{},{name:[t,"tag"],fieldKey:[r,"last"],children:Object(O.jsx)(g.a,{placeholder:"Tag"})})),Object(O.jsx)(b.a,{onClick:function(){return c(t)}})]},n)})),Object(O.jsx)(s.a.Item,{children:Object(O.jsx)(j.a,{type:"dashed",onClick:function(){return t()},block:!0,icon:Object(O.jsx)(f.a,{}),children:"Add field"})})]})}})}),onOk:c,onCancel:function(e){return e()}})},children:"\u6dfb\u52a0\u540d\u8bcd"})})};var K=function(){var e=function(){var e=Object(c.useState)([]),n=Object(v.a)(e,2),t=n[0],r=n[1],a=L({db:"XDX",collection:"random"});return Object(c.useEffect)((function(){a&&a.find().then((function(e){return r(e)}))}),[a]),t}();console.log(e);var n=[],t={};return e.forEach((function(e){-1===n.indexOf(e.tag)?(n.push(e.tag),t[e.tag]=[e.value]):t[e.tag].push(e.value)})),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(M,{}),Object(O.jsx)(u.a,{spinning:!e.length,children:Object(O.jsxs)(s.a,{onFinish:function(e){var n=e.tags.map((function(e){var n,c=t[e];return c[(n=c.length,Math.floor(Math.random()*n))]}));o.a.info({title:"\u7ed3\u679c",content:n.join(" ")}),console.log(n)},children:[Object(O.jsx)(m,{tagList:n}),Object(O.jsx)(s.a.Item,{children:Object(O.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})]})};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(K,{})}),document.getElementById("root"))}},[[436,1,2]]]);
//# sourceMappingURL=main.f6a5ff88.chunk.js.map