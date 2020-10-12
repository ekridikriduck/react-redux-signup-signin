(this["webpackJsonpreact-redux-signup-signin"]=this["webpackJsonpreact-redux-signup-signin"]||[]).push([[0],{237:function(e,t,a){e.exports=a(266)},242:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),c=(a(242),a(40)),s=a(16),l=a(43),u=function(e){var t=e.layout,a=e.component,n=e.title,o=Object(l.a)(e,["layout","component","title"]);return r.a.createElement(s.b,Object.assign({},o,{render:function(e){return r.a.createElement(t,{title:n},r.a.createElement(a,e))}}))},m=a(295),p=a(298),f=a(319),d=a(63),g=a(299),h=a(13),b=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}})),E=function(e){var t=b(),a=e.children,n=e.title,o=Object(h.c)((function(e){return e.messages})).message,i=void 0===o?"":o;return r.a.createElement(p.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:t.paper},r.a.createElement(f.a,{className:t.avatar}),r.a.createElement(d.a,{component:"h1",variant:"h5"},n),r.a.createElement(g.a,{justify:"center",container:!0,spacing:2},r.a.createElement(g.a,{item:!0},r.a.createElement(d.a,{variant:"body2",color:"primary",align:"center"},i))),a))},v=a(21),O=a(8),y=a(23),j=a(300),S=a(303),x=a(229),N=a(34),T=a.n(N),C="https://hiring.getbasis.co/candidate/",k=function(e){return T.a.post(C+"users/phone",{phoneNumber:e}).then((function(e){var t=e.data,a=t.success,n=t.results,r=t.message;return a?{message:r,results:n}:{message:r}})).catch((function(e){console.log(e)}))},P=function(e,t,a){return T.a.post(C+"users/phone/verify",{phoneNumber:e,verificationCode:t,token:a}).then((function(e){var t=e.data,a=t.success,n=t.results,r=t.message,o=t.messageObj;return a?{results:n,message:r}:{message:r,messageObj:o}})).catch((function(e){console.log(e)}))},A=function(e,t,a){return T.a.post(C+"users/email",{email:e,token:t,phoneNumber:a}).then((function(e){var t=e.data,a=t.success,n=t.results,r=t.message;return a?{results:n,message:r}:{message:r}})).catch((function(e){console.log(e)}))},_=function(e,t,a){return T.a.post(C+"users/email/verify",{email:e,token:t,verificationToken:a}).then((function(e){var t=e.data,a=t.success,n=t.results,r=t.message;return a?{results:n,message:r}:{message:r}})).catch((function(e){console.log(e)}))},w=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5?arguments[5]:void 0,i=arguments.length>6?arguments[6]:void 0;return T.a.post(C+"users",{firstName:e,lastName:t,email:a,phoneNumber:n,referredCodeKey:r,agreeToPrivacyPolicy:o,token:i,source:"WEB_APP"}).then((function(e){var t=e.data,a=t.success,n=t.results,r=t.message;return a?{results:n,message:r}:{message:r}})).catch((function(e){console.log(e)}))},I=function(e){return T.a.put(C+"users/referral/".concat(e)).then((function(e){return{message:e.data.message}})).catch((function(e){console.log(e)}))},R=function(e,t,a,n){var r="Bearer ".concat(t,",").concat(e);return T.a.put(C+"users/".concat(t),{firstName:a,lastName:n,avatar:null},{headers:{Authorization:r}}).then((function(e){var t=e.data;console.log(e);var a=t.message,n=t.results;return t.success?{results:n,message:a}:{message:a}})).catch((function(e){console.log(e)}))},M=function(e,t){var a="Bearer ".concat(e,",").concat(t);return T.a.delete(C+"users/logout/".concat(e),{headers:{Authorization:a}}).then((function(e){var t=e.data,a=t.message,n=t.results;return t.success?{results:n,message:a}:{message:a}})).catch((function(e){console.log(e)}))},G=function(e,t){return T.a.put(C+"users/otp/resend",{phoneNumber:e,token:t}).then((function(e){var t=e.data,a=t.success,n=t.message,r=t.results;return a?{message:n,results:r}:{message:n}})).catch((function(e){console.log(e)}))},F=function(e,t){return T.a.put(C+"users/token/resendtoken",{email:e,token:t}).then((function(e){var t=e.data,a=t.success,n=t.message,r=t.results;return a?{message:n,results:r}:{message:n}})).catch((function(e){console.log(e)}))},W=Object(m.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),L=function(e){var t=e.history,a=W(),o=Object(h.b)(),i=Object(n.useState)({isValid:!1,error:!1,phoneNumber:"",touched:!1}),c=Object(y.a)(i,2),s=c[0],l=c[1];Object(n.useEffect)((function(){var e=x.a.isMobilePhone(s.phoneNumber,"en-IN");l((function(t){return Object(O.a)(Object(O.a)({},t),{},{isValid:e,error:!e&&"Please Enter A Valid Phone Number"})}))}),[s.phoneNumber]);var u=s.phoneNumber,m=s.isValid,p=function(){return!(!s.touched||!s.error)};return r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,error:p(),fullWidth:!0,helperText:p()?s.error:"",onChange:function(e){e.persist(),l((function(t){var a;return Object(O.a)(Object(O.a)({},t),{},(a={},Object(v.a)(a,e.target.id,e.target.value),Object(v.a)(a,"touched",!0),a))}))},value:u,id:"phoneNumber",label:"Mobile Number",name:"phoneNumber",autoFocus:!0}),r.a.createElement(S.a,{onClick:function(e){var a=s.phoneNumber;o(function(e){return function(t){return k(e).then((function(a){var n=a.results,r=a.message;if(!n)return Promise.reject(r);var o=n.wrongOtpCount,i=n.resendOtpCount,c=n.token,s=n.isLogin;return t({type:"NUMBER_VERIFIED",payload:{wrongOtpCount:o,resendOtpCount:i,token:c,isLogin:s,phoneNumber:e}}),t({type:"SET_MESSAGE",payload:r}),Promise.resolve()})).catch((function(e){return console.log(e),Promise.reject(e)}))}}(a)).then((function(){t.push("/enterOtp")})).catch((function(e){console.log(e)}))},disabled:!m,fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Get OTP"))},V=a(304),U=a(29),D=Object(m.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),H=function(e){var t=e.history,a=D(),o=Object(n.useState)(""),i=Object(y.a)(o,2),c=i[0],l=i[1],u=Object(n.useState)(!1),m=Object(y.a)(u,2),p=m[0],f=m[1],d=Object(h.b)(),g=Object(h.c)((function(e){return e.auth})),b=g.isLogin,E=g.token,v=g.phoneNumber,O=g.resendOtpCount;if(!E)return r.a.createElement(s.a,{to:"/"});var x=b?"/profile":"/verifyEmail",N=Object(U.a)(c)||c.length<4;return r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,onChange:function(e){e.persist(),l((function(){return e.target.value}))},value:c,id:"verificationCode",label:"Enter OTP",name:"verificationCode",autoFocus:!0}),r.a.createElement(S.a,{onClick:function(){d(function(e,t,a){return function(n){return P(e,t,a).then((function(e){var t=e.results,a=e.message,r=e.messageObj;if(!t)return n({type:"SET_MESSAGE",payload:a}),Promise.reject(r);var o=t.isLogin,i=t.user;return o?(n({type:"VERIFIED_LOGIN",payload:i}),localStorage.setItem("user",JSON.stringify(i)),Promise.resolve()):(n({type:"SET_MESSAGE",payload:a}),Promise.resolve())})).catch((function(e){n({type:"WRONG_OTP",payload:e});var t=e.wrongOtpCount;return 3===(void 0===t?0:t)&&setTimeout((function(){n({type:"CLEAR_MESSAGE"}),n({type:"CLEAR_AUTH"})}),2e3),Promise.reject(e)}))}}(v,c,E)).then((function(){t.push(x)})).catch((function(e){var t=e.wrongOtpCount;3===(void 0===t?0:t)&&f(!0)}))},disabled:N||p,fullWidth:!0,variant:"contained",color:"primary",className:a.submit},p?"Please Start Again":"Submit"),r.a.createElement(V.a,{onClick:function(){d(function(e,t){return function(a){return G(e,t).then((function(e){var t=e.results,n=e.message;return t?(a({type:"OTP_RESEND",payload:t}),a({type:"SET_MESSAGE",payload:n}),Promise.resolve()):Promise.reject(n)})).catch((function(e){setTimeout((function(){a({type:"CLEAR_MESSAGE"}),a({type:"CLEAR_AUTH"})}),2e3)}))}}(v,E)).then((function(){3===O&&f(!0)})).catch((function(e){console.log(e)}))},style:{cursor:"pointer"},align:"right",variant:"body2"},"Resend OTP"))},z=a(305),B=a(317),q=Object(m.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),K=function(e){var t=e.history,a=q(),o=Object(h.c)((function(e){return e.auth})),i=o.token,c=o.phoneNumber,l=o.email,u=Object(h.b)(),m=Object(n.useState)({touched:{},errors:{}}),p=Object(y.a)(m,2),f=p[0],d=p[1];Object(n.useEffect)((function(){var e={firstName:Object(U.a)(f.firstName||""),lastName:Object(U.a)(f.lastName||"")};d((function(t){return Object(O.a)(Object(O.a)({},t),{},{errors:e||{},isValid:!(e.firstName||e.lastName)})}))}),[f.firstName,f.lastName]);var b=function(e){e.persist(),d((function(t){var a;return Object(O.a)(Object(O.a)({},t),{},(a={},Object(v.a)(a,e.target.id,"checkbox"===e.target.type?e.target.checked:e.target.value),Object(v.a)(a,"touched",Object(O.a)(Object(O.a)({},t.touched),{},Object(v.a)({},e.target.name,!0))),a))}))};if(!i)return r.a.createElement(s.a,{to:"/"});var E=f.firstName,x=void 0===E?"":E,N=f.lastName,T=void 0===N?"":N,C=f.referredCodeKey,k=void 0===C?"":C,P=f.agreeToPrivacyPolicy,A=void 0!==P&&P,_=f.isValid,R=function(e){return!(!f.touched[e]||!f.errors[e])},M=!(A&&_);return r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(g.a,{container:!0,spacing:2},r.a.createElement(g.a,{item:!0,xs:12,sm:6},r.a.createElement(j.a,{name:"firstName",variant:"outlined",error:R("firstName"),required:!0,fullWidth:!0,value:x,onChange:b,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(g.a,{item:!0,xs:12,sm:6},r.a.createElement(j.a,{variant:"outlined",required:!0,error:R("lastName"),fullWidth:!0,onChange:b,value:T,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(j.a,{variant:"outlined",required:!0,fullWidth:!0,onChange:function(e){e.persist();var t=e.target.value,a=void 0===t?"":t;d((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(v.a)({},e.target.id,a))})),6===a.length&&u(function(e){return function(t){return I(e).then((function(e){var a=e.message;return t({type:"SET_MESSAGE",payload:a}),Promise.resolve()}))}}(a)).then((function(e){console.log(e)}))},value:k,name:"referredCodeKey",label:"Referral Code",id:"referredCodeKey"})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(z.a,{control:r.a.createElement(B.a,{onChange:b,id:"agreeToPrivacyPolicy",color:"primary"}),label:"Agree To Privacy Policy."}))),r.a.createElement(S.a,{onClick:function(){var e=f.firstName,a=f.lastName,n=f.referredCodeKey,r=f.agreeToPrivacyPolicy;n||(n=""),u(function(e,t,a,n,r,o,i){return function(c){return w(e,t,a,n,r,o,i).then((function(e){var t=e.results,a=e.message;if(!t)return Promise.reject(a);var n=t.user;return c({type:"VERIFIED_LOGIN",payload:n}),Promise.resolve()})).catch((function(e){return console.log(e),c({type:"SET_MESSAGE",payload:e}),Promise.reject(e)}))}}(e,a,l,c,n,r,i)).then((function(e){t.push("/profile")})).catch((function(e){console.log(e)}))},fullWidth:!0,disabled:M,variant:"contained",color:"primary",className:a.submit},"Sign Up"))},J=Object(m.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),$=function(e){var t=e.history,a=J(),o=Object(n.useState)(""),i=Object(y.a)(o,2),c=i[0],l=i[1],u=Object(n.useState)(""),m=Object(y.a)(u,2),p=m[0],f=m[1],d=Object(n.useState)(!1),b=Object(y.a)(d,2),E=b[0],v=b[1],x=Object(n.useState)(!1),N=Object(y.a)(x,2),T=N[0],C=N[1],k=Object(h.c)((function(e){return e.auth})),P=k.token,w=k.phoneNumber,I=k.resendEmailTokenCount,R=Object(h.b)();if(!P)return r.a.createElement(s.a,{to:"/"});var M=Object(U.a)(c)||E;return r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(g.a,{container:!0,spacing:2},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,disabled:T,fullWidth:!0,onChange:function(e){e.persist(),l((function(){return e.target.value}))},value:c,id:"email",label:"Email Address",name:"email",autoFocus:!0})),r.a.createElement(g.a,{hidden:!T,item:!0,xs:12},r.a.createElement(j.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,onChange:function(e){e.persist(),f((function(){return e.target.value}))},value:p,id:"verificationToken",label:"Enter Verification Code",name:"verificationToken"}))),r.a.createElement(S.a,{onClick:T?function(e){R(function(e,t,a){return function(n){return _(e,t,a).then((function(t){var a=t.results,r=t.message;return a?(n({type:"EMAIL_VERIFIED",payload:Object(O.a)(Object(O.a)({},a),{},{email:e})}),n({type:"CLEAR_MESSAGE"}),Promise.resolve()):Promise.reject(r)})).catch((function(e){return console.log(e),n({type:"SET_MESSAGE",payload:e}),Promise.reject(e)}))}}(c,P.toString(),p)).then((function(){t.push("/signUp")}))}:function(e){R(function(e,t,a){return function(n){return A(e,t,a).then((function(e){var t=e.results,a=e.message;return t?(n({type:"VERIFICATION_MAIL_SEND",payload:e}),n({type:"SET_MESSAGE",payload:a}),Promise.resolve()):Promise.reject(a)})).catch((function(e){return console.log(e),n({type:"SET_MESSAGE",payload:e}),Promise.reject(e)}))}}(c,P,w)).then((function(){C(!0)})).catch((function(e){console.log(e)}))},fullWidth:!0,disabled:M,variant:"contained",color:"primary",className:a.submit},T?"Verify Email":"Send Verification Code"),r.a.createElement(V.a,{hidden:!T,onClick:function(){R(function(e,t){return function(a){return F(e,t).then((function(e){var t=e.results,n=e.message;return t?(a({type:"TOKEN_RESEND",payload:t}),a({type:"SET_MESSAGE",payload:n}),Promise.resolve()):Promise.reject(n)})).catch((function(e){setTimeout((function(){a({type:"CLEAR_MESSAGE"}),a({type:"CLEAR_AUTH"})}),2e3)}))}}(c,P.toString())).then((function(){3===I&&v(!0)}))},style:{cursor:"pointer"},align:"right",variant:"body2"},"Resend Email Token"))},Q=a(279),X=a(307),Y=a(308),Z=a(309),ee=a(310),te=a(311),ae=a(4),ne=Object(Q.a)((function(e){return{root:{padding:"32px"}}})),re=function(e){var t=ne(),a=e.className,o=Object(h.b)(),i=Object(h.c)((function(e){return e.user})),c=i.firstName,l=void 0===c?"":c,u=i.lastName,m=void 0===u?"":u,p=i._id,f=void 0===p?null:p,d=i.token,b=void 0===d?null:d,E=Object(n.useState)({firstName:l,lastName:m}),x=Object(y.a)(E,2),N=x[0],T=x[1],C=function(e){T(Object(O.a)(Object(O.a)({},N),{},Object(v.a)({},e.target.name,e.target.value)))};if(!b)return r.a.createElement(s.a,{to:"/"});var k=Object(U.a)(N.firstName)||Object(U.a)(N.lastName);return r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{container:!0,spacing:4},r.a.createElement(g.a,{item:!0,lg:8,md:6,xl:8,xs:12},r.a.createElement(X.a,{className:Object(ae.a)(t.root,a)},r.a.createElement("form",{autoComplete:"off",noValidate:!0},r.a.createElement(Y.a,{subheader:"The information can be edited",title:"Profile"}),r.a.createElement(Z.a,null),r.a.createElement(ee.a,null,r.a.createElement(g.a,{container:!0,spacing:3},r.a.createElement(g.a,{item:!0,md:6,xs:12},r.a.createElement(j.a,{fullWidth:!0,label:"First name",margin:"dense",name:"firstName",onChange:C,value:N.firstName,variant:"outlined"})),r.a.createElement(g.a,{item:!0,md:6,xs:12},r.a.createElement(j.a,{fullWidth:!0,label:"Last name",margin:"dense",name:"lastName",onChange:C,value:N.lastName,variant:"outlined"})))),r.a.createElement(Z.a,null),r.a.createElement(te.a,null,r.a.createElement(S.a,{disabled:k,onClick:function(){var e=N.firstName,t=N.lastName;o(function(e,t,a,n){return function(r){return R(e,t,a,n).then((function(e){var t=e.results,a=(e.message,t.user);return r({type:"UPDATE_USER",payload:a}),Promise.resolve(a)}))}}(b,f,e,t)).then((function(e){var t=Object(O.a)(Object(O.a)({},i),e);localStorage.setItem("user",JSON.stringify(t))}))},color:"primary",variant:"contained"},"Save details")))))))},oe=a(113),ie=a(275),ce=a(312),se=a(313),le=a(306),ue=a(318),me=a(225),pe=a.n(me),fe=a(226),de=a.n(fe),ge=Object(Q.a)((function(e){return{root:{boxShadow:"none"},flexGrow:{flexGrow:1},signOutButton:{marginLeft:"8px"}}})),he=function(e){var t=e.className,a=e.onSidebarOpen,n=Object(l.a)(e,["className","onSidebarOpen"]),o=ge(),i=Object(h.b)(),c=Object(h.c)((function(e){return e.user})),s=c._id,u=c.token;return r.a.createElement(ce.a,Object.assign({},n,{className:Object(ae.a)(o.root,t)}),r.a.createElement(se.a,null,r.a.createElement("div",{className:o.flexGrow}),r.a.createElement(le.a,{onClick:function(){i(function(e,t){return function(a){return M(e,t).then((function(e){e.message;return a({type:"LOGOUT_USER"}),localStorage.clear(),Promise.resolve()}))}}(s,u)).then((function(e){}))},className:o.signOutButton,color:"inherit"},r.a.createElement(pe.a,null)),r.a.createElement(ue.a,{lgUp:!0},r.a.createElement(le.a,{color:"inherit",onClick:a},r.a.createElement(de.a,null)))))},be=a(315),Ee=Object(Q.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"fit-content"},avatar:{width:60,height:60},name:{marginTop:e.spacing(1)}}})),ve=function(e){var t=e.className,a=Object(l.a)(e,["className"]),n=Ee(),o=Object(h.c)((function(e){return e.user})),i=o.avatar,c=o.firstName,s=o.lastName,u=o.phoneNumber;return r.a.createElement("div",Object.assign({},a,{className:Object(ae.a)(n.root,t)}),r.a.createElement(f.a,{alt:"Person",className:n.avatar,src:i}),r.a.createElement(d.a,{className:n.name,variant:"h4"},"".concat(c," ").concat(s)),r.a.createElement(d.a,{variant:"body2"},u))},Oe=Object(Q.a)((function(e){return{drawer:Object(v.a)({width:240},e.breakpoints.up("lg"),{marginTop:64,height:"calc(100% - 64px)"}),root:{backgroundColor:e.palette.white,display:"flex",flexDirection:"column",height:"100%",padding:e.spacing(2)},divider:{margin:e.spacing(2,0)},nav:{marginBottom:e.spacing(2)}}})),ye=function(e){var t=e.open,a=e.variant,n=e.onClose,o=e.className,i=Object(l.a)(e,["open","variant","onClose","className"]),c=Oe();return r.a.createElement(be.a,{anchor:"left",classes:{paper:c.drawer},onClose:n,open:t,variant:a},r.a.createElement("div",Object.assign({},i,{className:Object(ae.a)(c.root,o)}),r.a.createElement(ve,null)))},je=Object(Q.a)((function(e){return{root:Object(v.a)({paddingTop:56,height:"100%"},e.breakpoints.up("sm"),{paddingTop:64}),shiftContent:{paddingLeft:240},content:{height:"100%"}}})),Se=function(e){var t,a=e.children,o=je(),i=Object(oe.a)(),c=Object(ie.a)(i.breakpoints.up("lg"),{defaultMatches:!0}),s=Object(n.useState)(!1),l=Object(y.a)(s,2),u=l[0],m=l[1],p=!!c||u;return r.a.createElement("div",{className:Object(ae.a)((t={},Object(v.a)(t,o.root,!0),Object(v.a)(t,o.shiftContent,c),t))},r.a.createElement(he,{onSidebarOpen:function(){m(!0)}}),r.a.createElement(ye,{onClose:function(){m(!1)},open:p,variant:c?"persistent":"temporary"}),r.a.createElement("main",{className:o.content},a))},xe=function(){return r.a.createElement(s.d,null,r.a.createElement(u,{layout:E,exact:!0,title:"Sign In",component:L,path:"/"}),r.a.createElement(u,{layout:E,exact:!0,title:"Enter OTP",component:H,path:"/enterOtp"}),r.a.createElement(u,{layout:E,exact:!0,title:"Verify Email Address",component:$,path:"/verifyEmail"}),r.a.createElement(u,{layout:E,exact:!0,title:"Sign Up",component:K,path:"/signUp"}),r.a.createElement(u,{layout:Se,exact:!0,title:"",component:re,path:"/profile"}))},Ne=a(316),Te=a(230),Ce=a(9),ke="#FFFFFF",Pe={black:"#000000",white:ke,primary:{contrastText:ke,dark:Ce.a.indigo[900],main:Ce.a.indigo[500],light:Ce.a.indigo[100]},secondary:{contrastText:ke,dark:Ce.a.blue[900],main:Ce.a.blue.A400,light:Ce.a.blue.A400},success:{contrastText:ke,dark:Ce.a.green[900],main:Ce.a.green[600],light:Ce.a.green[400]},info:{contrastText:ke,dark:Ce.a.blue[900],main:Ce.a.blue[600],light:Ce.a.blue[400]},warning:{contrastText:ke,dark:Ce.a.orange[900],main:Ce.a.orange[600],light:Ce.a.orange[400]},error:{contrastText:ke,dark:Ce.a.red[900],main:Ce.a.red[600],light:Ce.a.red[400]},text:{primary:Ce.a.blueGrey[900],secondary:Ce.a.blueGrey[600],link:Ce.a.blue[600]},background:{default:"#F4F6F8",paper:ke},icon:Ce.a.blueGrey[600],divider:Ce.a.grey[200]},Ae={h1:{color:Pe.text.primary,fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:Pe.text.primary,fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:Pe.text.primary,fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:Pe.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:Pe.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:Pe.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:Pe.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:Pe.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:Pe.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:Pe.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:Pe.text.primary,fontSize:"14px"},caption:{color:Pe.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:Pe.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},_e={MuiButton:{contained:{boxShadow:"0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",backgroundColor:"#FFFFFF"}},MuiIconButton:{root:{color:Pe.icon,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.03)"}}},MuiPaper:{elevation1:{boxShadow:"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"}},MuiTableCell:{root:Object(O.a)(Object(O.a)({},Ae.body1),{},{borderBottom:"1px solid ".concat(Pe.divider)})},MuiTableHead:{root:{backgroundColor:Ce.a.grey[50]}},MuiTypography:{gutterBottom:{marginBottom:8}}},we=Object(Te.a)({palette:Pe,typography:Ae,overrides:_e,zIndex:{appBar:1200,drawer:1100}});function Ie(){return r.a.createElement(Ne.a,{theme:we},r.a.createElement(c.a,{basename:"/react-redux-signup-signin"},r.a.createElement(xe,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=a(227),Me=a(41),Ge=a(228),Fe={},We={},Le=JSON.parse(localStorage.getItem("user")),Ve=Le||{},Ue=Object(Me.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"NUMBER_VERIFIED":case"OTP_RESEND":case"WRONG_OTP":case"TOKEN_RESEND":case"EMAIL_VERIFIED":return Object(O.a)(Object(O.a)({},e),n);case"CLEAR_AUTH":return{};default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_MESSAGE":return{message:n};case"CLEAR_MESSAGE":return{message:""};default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"VERIFIED_LOGIN":case"UPDATE_USER":return Object(O.a)(Object(O.a)({},e),n);case"LOGOUT_USER":return{};default:return e}}}),De=[Ge.a],He=Object(Me.createStore)(Ue,Object(Re.composeWithDevTools)(Me.applyMiddleware.apply(void 0,De)));i.a.render(r.a.createElement(h.a,{store:He},r.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[237,1,2]]]);
//# sourceMappingURL=main.895cc202.chunk.js.map