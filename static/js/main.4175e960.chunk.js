(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{40:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var r,a,c,o,i,s,u=n(0),d=n(14),l=n.n(d),p=(n(40),n(3)),b=n.n(p),j=n(9),h=n(16),f=n(17),O=n(20),m=n(19),v=n(7),x=n(8),C=x.a.ul(r||(r=Object(v.a)(["\n  text-align: center\n  width: 200px;\n  li {\n    list-style: none;\n  }\n\n  button {\n    width: 60px;\n    height: 20px;\n    border-radius: 5px;\n  }\n"]))),y=n(1),g=function(e){var t=e.clients,n=e.deleteClient;return Object(y.jsx)(C,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(y.jsxs)("li",{children:[Object(y.jsxs)("p",{children:[e.name,":",e.number]}),Object(y.jsx)("button",{type:"button",onClick:n,id:e.id,children:"Delete"})]},e.id)}))})},k=Object(u.memo)(g),w=n(5),A=x.a.form(a||(a=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n\n  input {\n    border-radius: 5px;\n    width: 175px;\n    margin-bottom: 5px;\n  }\n\n  button {\n    border-radius: 5px;\n    width: 50px;\n    margin: 0 auto;\n  }\n"]))),F=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:""},e.changeInput=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(w.a)({},r,a))},e.onSubmit=function(t){t.preventDefault(),e.props.onCheckRepeated(e.state.name)?alert("".concat(e.state.name," is already in contacts.")):e.props.addClient(e.state)},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(A,{onSubmit:this.onSubmit,children:["Name:",Object(y.jsx)("input",{onChange:this.changeInput,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),"Number:",Object(y.jsx)("input",{onChange:this.changeInput,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(y.jsx)("button",{type:"submit",children:"Add"})]})})}}]),n}(u.Component),L=x.a.div(c||(c=Object(v.a)(["\n  input {\n    border-radius: 5px;\n  }\n"]))),z=function(e){var t=e.filter,n=e.doFilter;return Object(y.jsxs)(L,{children:[Object(y.jsx)("h2",{children:"Find your contact by name"}),Object(y.jsx)("input",{type:"text",name:"filter",onChange:n,value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},Z=n(18),I=x.a.h1(o||(o=Object(v.a)(["\n  text-align: center;\n"]))),J=n(15),R=function(e){return e.contacts.loader},S=function(e){return e.contacts.filter},q=Object(J.a)([function(e){return e.contacts.items},S],(function(e,t){var n=null===t||void 0===t?void 0:t.toLowerCase();return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),B=n(13),D=n(21),E=n.n(D),M=n(2),N=Object(M.b)("addALLClients"),$=Object(M.b)("addClient"),P=Object(M.b)("deleteClient"),G=Object(M.b)("setError"),H=Object(M.b)("resetError"),K=Object(M.b)("setLoading"),Q=Object(M.b)("doFilter"),T=function(e){return function(t){t(Q(e))}},U=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).addClient=function(){var t=Object(j.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.addClientOperation(n);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteClient=function(){var t=Object(j.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.target.id,e.props.deleteClientOperation(r);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.doFilter=function(t){var n=t.target.value;e.props.doFilterOperations(n)},e.onCheckRepeated=function(t){return e.props.contacts.items.some((function(e){return e.name===t}))},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.addALLClientsOperations();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.props.contacts),Object(y.jsxs)(y.Fragment,{children:[this.props.error&&Object(y.jsx)("h2",{children:this.props.error}),this.props.loader&&Object(y.jsx)("h2",{children:"Loading...."}),Object(y.jsx)(I,{children:"Phonebook"}),Object(y.jsx)(F,{addClient:this.addClient,onCheckRepeated:this.onCheckRepeated}),Object(y.jsx)(z,{doFilter:this.doFilter,filter:this.props.contacts.filter}),Object(y.jsx)("h2",{children:"Contacts:"}),Object(y.jsx)(k,{clients:this.props.contacts.items,deleteClient:this.deleteClient})]})}}]),n}(u.Component),V={addALLClientsOperations:function(){return function(){var e=Object(j.a)(b.a.mark((function e(t,n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(K()),e.prev=1,e.next=4,E.a.get("https://shop-a2177-default-rtdb.firebaseio.com/clients.json");case 4:if(!(r=e.sent).data){e.next=11;break}a=Object.keys(r.data).map((function(e){return Object(B.a)(Object(B.a)({},r.data[e]),{},{id:e})})),console.log(a),t(N(a)),e.next=12;break;case 11:return e.abrupt("return");case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.dir(e.t0.response.data.error),t(G(e.t0.response.data.error));case 18:return e.prev=18,t(K()),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,14,18,21]])})));return function(t,n){return e.apply(this,arguments)}}()},addClientOperation:function(e){return function(){var t=Object(j.a)(b.a.mark((function t(n,r){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(K()),t.prev=1,t.next=4,E.a.post("https://shop-a2177-default-rtdb.firebaseio.com/clients.json",e);case 4:a=t.sent,n($(Object(B.a)(Object(B.a)({},e),{},{id:a.data.name}))),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.dir(t.t0.response.data.error),n(G(t.t0.response.data.error));case 12:return t.prev=12,n(K()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})));return function(e,n){return t.apply(this,arguments)}}()},deleteClientOperation:function(e){return function(){var t=Object(j.a)(b.a.mark((function t(n,r){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(K()),t.prev=1,t.next=4,E.a.delete("https://shop-a2177-default-rtdb.firebaseio.com/clients/".concat(e,".json"));case 4:n(P(e)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.dir(t.t0.response.data.error),n(G(t.t0.response.data.error));case 11:return t.prev=11,n(K()),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,7,11,14]])})));return function(e,n){return t.apply(this,arguments)}}()},doFilterOperations:T},W=Object(Z.b)((function(e){return{contacts:{items:q(e),filter:S(e),loader:R(e)}}}),V)(U),X=function(){return Object(y.jsx)(W,{})},Y=n(12),_=n(6),ee=Object(M.c)("",Object(w.a)({},Q,(function(e,t){return t.payload}))),te=Object(M.c)([],(i={},Object(w.a)(i,N,(function(e,t){return t.payload})),Object(w.a)(i,$,(function(e,t){var n=t.payload;return[].concat(Object(Y.a)(e),[n])})),Object(w.a)(i,P,(function(e,t){var n=t.payload;return Object(Y.a)(e.filter((function(e){return e.id!==n})))})),i)),ne=Object(M.c)("",(s={},Object(w.a)(s,G,(function(e,t){return t.payload})),Object(w.a)(s,H,(function(){return""})),s)),re=Object(M.c)(!1,Object(w.a)({},K,(function(e){return!e}))),ae=Object(_.b)({items:te,filter:ee,loader:re,error:ne}),ce=Object(M.a)({reducer:{contacts:ae}},{middleware:Object(Y.a)(Object(M.d)())});l.a.render(Object(y.jsx)(Z.a,{store:ce,children:Object(y.jsx)(X,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.4175e960.chunk.js.map