(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)i=o[p],n[i]&&d.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"0eba":function(t,e,a){},"19c5":function(t,e,a){},"25bc":function(t,e,a){},"3b59":function(t,e,a){},"3cec":function(t,e,a){"use strict";var s=a("19c5"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light shadow"},[t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav"},[a("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/"}},[t._v("Home "),a("span",{staticClass:"sr-only"},[t._v("(current)")])]),a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/members"}},[t._v("Members")]),a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/loans"}},[t._v("Loan Applications")])],1)])]),a("router-view")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],i=(a("1157"),a("4989"),{name:"app"}),o=i,c=(a("034f"),a("2877")),l=Object(c["a"])(o,n,r,!1,null,null,null),u=l.exports,p=a("bc3a"),d=a.n(p),m=a("a7fe"),f=a.n(m),v=a("8c4f"),h=(a("96cf"),a("3b8d")),g=a("2f62");s["a"].use(g["a"]);var _=new g["a"].Store({state:{loanApplications:[],customerInfo:[],Guarantors:[],Loans:[],auth:[]},getters:{APPLICATIONS:function(t){return t.loanApplications},CUSTOMER:function(t){return t.customerInfo},GUARANTORS:function(t){return t.Guarantors},LOANS:function(t){return t.Loans},AUTH:function(t){return t.auth}},mutations:{SET_LOANAPPLICATIONS:function(t,e){t.loanApplications=e},SET_CUSTOMERINFO:function(t,e){t.customerInfo=e},SET_GUARANTORS:function(t,e){t.Guarantors=e},SET_LOANS:function(t,e){t.Loans=e},SET_LOGIN:function(t,e){t.auth=e}},actions:{LOGIN:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(a),t.next=4,d.a.post("http://localhost:3000/api/v1/login",a).then(function(t){return e.commit("SET_LOGIN",t),t});case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t["catch"](0),console.log(t.t0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}},t,null,[[0,6]])}));function e(e,a){return t.apply(this,arguments)}return e}(),GET_LOANAPPLICATIONS:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(e,a){var s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("fetch started"),t.next=3,d.a.get("http://localhost:3000/api/v1/applications");case 3:s=t.sent,n=s.data,e.commit("SET_LOANAPPLICATIONS",n),console.log(n);case 7:case"end":return t.stop()}},t)}));function e(e,a){return t.apply(this,arguments)}return e}(),GET_LOANS:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(e,a){var s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://localhost:3000/api/v1/loans");case 2:s=t.sent,n=s.data,console.log(n),e.commit("SET_LOANS",n);case 6:case"end":return t.stop()}},t)}));function e(e,a){return t.apply(this,arguments)}return e}(),UPDATE_LOANAPPLICATION:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.put("http://localhost:3000/api/v1/application/update/"+e.state.customerInfo._id,a).then(function(t){console.log(t)}).catch(function(t){console.log(t)});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:case"end":return t.stop()}},t,null,[[0,5]])}));function e(e,a){return t.apply(this,arguments)}return e}(),GET_GUARANTORS:function(){var t=Object(h["a"])(regeneratorRuntime.mark(function t(e,a){var s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://localhost:3000/api/v1/guarantors/show/"+e.state.customerInfo.userId);case 2:s=t.sent,n=s.data,e.commit("SET_GUARANTORS",n);case 5:case"end":return t.stop()}},t)}));function e(e,a){return t.apply(this,arguments)}return e}()}}),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("h5",{staticClass:"text-success text-monospace"},[t._v("Loan Applications")]),a("ApplicantsList")],1),a("div",{staticClass:"col-md-8 card shadow data"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 vertical-line"},[a("Applicant")],1),a("div",{staticClass:"col-md-6"},[a("Guarantors")],1)])])])])},b=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("flash-message"),a("h4",{staticClass:"text-center text-info text-monospace"},[t._v("Applicant Details")]),a("hr"),a("div",{staticClass:"card-body"},[""!=t.$store.getters.CUSTOMER?a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[t._v("Name: "+t._s(t.$store.getters.CUSTOMER.users[0].username))]),a("li",{staticClass:"list-group-item"},[t._v("Loan: "+t._s(t.$store.getters.CUSTOMER.amount))]),a("li",{staticClass:"list-group-item"},[t._v("Date: "+t._s(t.$store.getters.CUSTOMER.date))]),a("li",{staticClass:"list-group-item"},[t._v("Status: "+t._s(t.$store.getters.CUSTOMER.status)+" ")]),a("li",{staticClass:"list-group-item"},[a("button",{staticClass:"btn btn-success",on:{click:function(e){return t.acceptApplication()}}},[t._v("Accept")]),a("button",{staticClass:"btn btn-danger ",on:{click:function(e){return t.rejectApplication()}}},[t._v("Reject")])])]):t._e()]),""==t.$store.getters.CUSTOMER?a("div",{staticClass:"card-body"},[t._v("\n          Please select a loan request from the left panel to view details\n        ")]):t._e()],1)},O=[],S={name:"applicant",created:function(){var t=this;this.$store.watch(function(){return t.$store.getters.CUSTOMER},function(){console.log("dispatched"),t.$store.dispatch("GET_GUARANTORS")})},methods:{acceptApplication:function(){var t=this;this.$store.getters.CUSTOMER.status="accepted",this.$store.dispatch("UPDATE_LOANAPPLICATION",this.$store.getters.CUSTOMER).then(function(){t.flashSuccess("Loan Approved and disbursed")}).catch(function(t){console.log(t)})},rejectApplication:function(){var t=this;this.$store.getters.CUSTOMER.status="rejected",this.$store.dispatch("UPDATE_LOANAPPLICATION",this.$store.getters.CUSTOMER).then(function(){t.flashWarning("Loan Application Rejected")}).catch(function(t){console.log(t)})}}},w=S,T=Object(c["a"])(w,A,O,!1,null,null,null),x=T.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"list-group shadow-sm"},t._l(t.Applicants,function(e){return a("li",{key:e.id,staticClass:"list-group-item",on:{click:function(a){return t.userData(e)}}},[t._v(t._s(e.users[0].username))])}),0)])},y=[],R={name:"applicantslist",data:function(){return{}},methods:{userData:function(t){this.$store.commit("SET_CUSTOMERINFO",t)}},computed:{Applicants:function(){return this.$store.getters.APPLICATIONS}},mounted:function(){this.$store.dispatch("GET_LOANAPPLICATIONS")}},N=R,$=Object(c["a"])(N,E,y,!1,null,null,null),L=$.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"text-center text-info text-monospace"},[t._v("Guarantors")]),a("hr"),""!=t.$store.getters.GUARANTORS?a("div",t._l(t.$store.getters.GUARANTORS,function(e){return a("div",{key:e,staticClass:"card"},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-title"},[t._v(t._s(e.firstname)+"  "+t._s(e.lastname))])]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(t._s(e.email))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.contact))])])])}),0):t._e(),""==t.$store.getters.GUARANTORS?a("div",[t._m(0)]):t._e()])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t._v("\n              This user doesn't have any guarantors\n            ")])])}],j={name:"guarantors"},k=j,U=Object(c["a"])(k,P,I,!1,null,null,null),G=U.exports,M={name:"index",props:{msg:String},components:{Applicant:x,ApplicantsList:L,Guarantors:G}},D=M,F=(a("f064"),Object(c["a"])(D,C,b,!1,null,"7f062e28",null)),q=F.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"col-md-6 center"},t._l(this.$store.getters.LOANS,function(e){return a("div",{key:e,staticClass:"card mb-2 shadow",staticStyle:{width:"30rem"}},[a("div",{staticClass:"card-header"},[a("p",{staticClass:"card-title"},[t._v(t._s(e.users[0].username))])]),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"card-text mb-2"},[t._v(t._s(e.users[0].email))]),a("h6",{staticClass:"card-text mb-2 text-muted"},[t._v("Date "+t._s(e.date))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.amount))]),a("a",{staticClass:"btn btn-info btn-sm",attrs:{href:"#"}},[t._v("Payments made")]),a("a",{staticClass:"btn btn-danger btn-sm",attrs:{href:"#"}},[t._v("more")])])])}),0)])},J=[],W={name:"loans",mounted:function(){this.$store.dispatch("GET_LOANS")}},z=W,B=(a("3cec"),Object(c["a"])(z,H,J,!1,null,null,null)),K=B.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"col-md-4 loginform"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"form"},[a("form",{attrs:{action:""},on:{submit:t.submitForm}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.email,expression:"auth.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"email"},domProps:{value:t.auth.email},on:{input:function(e){e.target.composing||t.$set(t.auth,"email",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.email))])]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.password,expression:"auth.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"password"},domProps:{value:t.auth.password},on:{input:function(e){e.target.composing||t.$set(t.auth,"password",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.password))])]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary full btn-lg",attrs:{name:"login",value:"login"},on:{click:t.login}},[t._v("Login")])])])])])])])])},V=[],X=(a("ac6a"),a("456d"),a("7f7f"),{data:function(){return{auth:{email:"",password:""},errors:{email:void 0,password:void 0}}},computed:{},methods:{login:function(t){var e=t.target;console.log("login was clicked ".concat(e.name,": ").concat(e.value))},submitForm:function(t){var e=this;t.preventDefault(),this.errors=this.validateForm(this.auth),Object.keys(this.errors).length||this.$store.dispatch("LOGIN",this.auth).then(function(){e.$router.push("/")}).catch(function(t){return console.log(t)})},validateForm:function(t){var e={};return t.email||(e.email="Email is required"),t.password||(e.password="Password is required"),t.email&&!this.isEmail(t.email)&&(e.email="Invalid Email"),e},isEmail:function(t){var e=/\S+@\S+\.\S+/;return e.test(t)}}}),Y=X,Z=(a("6d17"),Object(c["a"])(Y,Q,V,!1,null,"d8ac98ee",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 shadow center members"},[a("div",[a("h4",{staticClass:"text-center"},[t._v("Registered Members")]),a("hr"),a("div",[a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[t._v("Member 1")])])])])])}],st={name:"members"},nt=st,rt=(a("e2e0"),Object(c["a"])(nt,et,at,!1,null,null,null)),it=rt.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 shadow center"},[a("div",{staticClass:"form"},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"firstname"}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"lastname"}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"email"}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"contact"}})]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary full btn-lg"},[t._v("Add")])])])])}],lt={name:"addmembers"},ut=lt,pt=(a("6836"),Object(c["a"])(ut,ot,ct,!1,null,null,null)),dt=pt.exports,mt=[{path:"/",component:q},{path:"/loans",component:K},{path:"/login",component:tt},{path:"/members",component:it},{path:"/addmembers",component:dt}],ft=mt,vt=a("d00d"),ht=a.n(vt);a("f59c"),s["a"].config.productionTip=!1,s["a"].use(f.a,d.a),s["a"].use(v["a"]),s["a"].use(ht.a);var gt=new v["a"]({routes:ft});new s["a"]({store:_,router:gt,render:function(t){return t(u)}}).$mount("#app")},5997:function(t,e,a){},"64a9":function(t,e,a){},6836:function(t,e,a){"use strict";var s=a("3b59"),n=a.n(s);n.a},"6d17":function(t,e,a){"use strict";var s=a("25bc"),n=a.n(s);n.a},e2e0:function(t,e,a){"use strict";var s=a("5997"),n=a.n(s);n.a},f064:function(t,e,a){"use strict";var s=a("0eba"),n=a.n(s);n.a}});
//# sourceMappingURL=app.f52139e3.js.map