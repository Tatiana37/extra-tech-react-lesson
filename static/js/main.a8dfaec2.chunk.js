(this["webpackJsonpextra-tech-react-lesson"]=this["webpackJsonpextra-tech-react-lesson"]||[]).push([[0],{18:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),s=(n(18),n(2)),o=n(13),l=n(4),j=n(5),h=n(7),u=n(6),d=n(0),b=function(e){var t=e.title,n=e.currency,a=void 0===n?"USD":n,c=e.options,r=e.handleOpenPage,i=e.activePage;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:a}),Object(d.jsx)("ul",{children:c.map((function(e){var t=e.namePeriod,n=e.titlePeriod,a=e.sum;return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:n}),Object(d.jsx)("span",{children:a})]},t)}))}),Object(d.jsx)("button",{onClick:function(){return r(i)},type:"button",children:"Add"})]})},O=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{type:"button",children:"\u0412\u0441\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b"}),Object(d.jsx)("button",{type:"button",children:"\u0412\u0441\u0435 \u0434\u043e\u0445\u043e\u0434\u044b"})]})},p=n(8),m=function(e){var t=e.handleOpenPage;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"\u0416\u0443\u0440\u043d\u0430\u043b \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432"}),Object(d.jsx)(b,{title:"\u0420\u0430\u0441\u0445\u043e\u0434\u044b",options:p.b,activePage:"costs",handleOpenPage:t}),Object(d.jsx)(b,{title:"\u0414\u043e\u0445\u043e\u0434\u044b",options:p.c,activePage:"incomes",handleOpenPage:t}),Object(d.jsx)(b,{title:"\u0411\u0430\u043b\u0430\u043d\u0441",options:p.a,activePage:"balance",handleOpenPage:t}),Object(d.jsx)(O,{})]})},x=n(10),g=function(e){var t=e.title,n=e.cbGoBack;return Object(d.jsxs)("header",{children:[Object(d.jsx)("button",{type:"button",onClick:n,children:"GoBack"}),Object(d.jsx)("h1",{children:t})]})},v=function(e){var t=e.title,n=e.type,a=void 0===n?"text":n,c=e.name,r=e.value,i=e.placeholder,s=void 0===i?null:i,o=e.cbOnChange;return Object(d.jsxs)("label",{children:[t&&Object(d.jsx)("p",{children:t}),Object(d.jsx)("input",{type:a,name:c,value:r,onChange:o,placeholder:s})]})},P=n(12),y=n.n(P),f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={date:"",time:"",category:"\u0415\u0434\u0430",sum:"",currency:"USD",comment:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(s.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n=e.props,a=n.transType,c=n.addTransaction,r=n.handleClosePage;c({transType:a,transaction:Object(x.a)(Object(x.a)({},e.state),{},{id:y.a.generate()})}),r()},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.date,n=e.time,a=e.currency,c=e.category,r=e.sum,i=e.comment,s=this.props,o=s.handleClosePage,l=s.transType;return Object(d.jsxs)("section",{children:[Object(d.jsx)(g,{title:"costs"===l?"\u0420\u0430\u0441\u0445\u043e\u0434":"\u0414\u043e\u0445\u043e\u0434\u044b",cbGoBack:o}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",children:"Ok"}),Object(d.jsx)(v,{type:"date",title:"\u0414\u0435\u043d\u044c",name:"date",value:t,cbOnChange:this.handleChange}),Object(d.jsx)(v,{type:"time",title:"\u0412\u0440\u0435\u043c\u044f",name:"time",value:n,cbOnChange:this.handleChange}),Object(d.jsx)(v,{type:"button",title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",name:"category",value:c}),Object(d.jsx)(v,{title:"\u0421\u0443\u043c\u043c\u0430",name:"sum",value:r,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",cbOnChange:this.handleChange}),Object(d.jsx)(v,{type:"button",title:"\u0412\u0430\u043b\u044e\u0442\u0430",name:"currency",value:a}),Object(d.jsx)(v,{name:"comment",value:i,placeholder:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",cbOnChange:this.handleChange})]})]})}}]),n}(a.Component),C=f,k=function(){return Object(d.jsx)("h1",{children:"BalancePage"})},S=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={activePage:"",costs:[],incomes:[]},e.handleOpenPage=function(t){e.setState({activePage:t})},e.handleClosePage=function(){return e.setState({activePage:""})},e.addTransaction=function(t){var n=t.transType,a=t.transaction;e.setState((function(e){return Object(s.a)({},n,[].concat(Object(o.a)(e[n]),[a]))}))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.activePage;switch(e){case"costs":case"incomes":return Object(d.jsx)(C,{transType:e,handleClosePage:this.handleClosePage,addTransaction:this.addTransaction});case"balance":return Object(d.jsx)(k,{});default:return Object(d.jsx)(m,{handleOpenPage:this.handleOpenPage})}}}]),n}(a.Component),T=S;i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"b":[{"namePeriod":"today","titlePeriod":"\u0421\u0435\u0433\u043e\u0434\u043d\u044f","sum":"0.00"},{"namePeriod":"week","titlePeriod":"\u041d\u0435\u0434\u0435\u043b\u044f","sum":"0.00"},{"namePeriod":"month","titlePeriod":"\u041c\u0435\u0441\u044f\u0446","sum":"0.00"}],"c":[{"namePeriod":"month","titlePeriod":"\u041c\u0435\u0441\u044f\u0446","sum":"0.00"}],"a":[{"namePeriod":"allTime","titlePeriod":"\u0412\u0441\u0451 \u0432\u0440\u0435\u043c\u044f","sum":"0.00"}]}')}},[[28,1,2]]]);
//# sourceMappingURL=main.a8dfaec2.chunk.js.map