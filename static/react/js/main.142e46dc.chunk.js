(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),s=a.n(c),i=(a(24),a(1)),o=a(8),l=a(2),u=(a(25),Object(n.createContext)()),m=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement(o.b,{to:"/predict"},"Go To Predictor"),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/auth"},"Go To Login/Register"))},p=a(9),d=a.n(p),g=a(11),b=function(){var e=Object(l.f)(),t=Object(n.useContext)(u),a=Object(n.useState)(0),c=Object(i.a)(a,2),s=c[0],m=c[1],p=Object(n.useState)(0),b=Object(i.a)(p,2),f=b[0],E=b[1],h=Object(n.useState)(0),v=Object(i.a)(h,2),N=v[0],O=v[1],j=Object(n.useState)(0),y=Object(i.a)(j,2),x=y[0],S=y[1],w=Object(n.useState)(0),C=Object(i.a)(w,2),k=C[0],P=C[1],T=Object(n.useState)(0),D=Object(i.a)(T,2),L=D[0],F=D[1],G=Object(n.useState)(0),B=Object(i.a)(G,2),J=B[0],R=B[1],A=Object(n.useState)(0),z=Object(i.a)(A,2),I=z[0],H=z[1],Y=function(){var a=Object(g.a)(d.a.mark((function a(n){var r,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,fetch("/api/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pregnancies:s,glucose:f,bloodpressure:N,skinthickness:x,insulin:k,bmi:L,dpf:J,age:I})});case 3:return r=a.sent,a.next=6,r.json();case 6:c=a.sent,console.log(c[0]),t.assignPredictionFunction(c[0]),e.push("/results");case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Predictor Form"),r.a.createElement("form",{onSubmit:Y,className:"predict-container"},r.a.createElement("input",{className:"predict-form-item",type:"text",placeholder:"Pregnancies",onChange:function(e){return m(e.target.value)}}),r.a.createElement("input",{className:"predict-form-item",type:"text",placeholder:"Glucose",onChange:function(e){return E(e.target.value)}}),r.a.createElement("input",{className:"predict-form-item",type:"text",placeholder:"Bloodpressure",onChange:function(e){return O(e.target.value)}}),r.a.createElement("input",{className:"predict-form-item",type:"text",placeholder:"Skinthickness",onChange:function(e){return S(e.target.value)}}),r.a.createElement("input",{className:"predict-form-item",type:"text",placeholder:"Insulin",onChange:function(e){return P(e.target.value)}}),r.a.createElement("input",{className:"predict-form-item",type:"text",placeholder:"Bmi",onChange:function(e){return F(e.target.value)}}),r.a.createElement("input",{className:"predict-form-item",type:"text",placeholder:"Dpf",onChange:function(e){return R(e.target.value)}}),r.a.createElement("input",{className:"predict-form-item",type:"text",placeholder:"Age",onChange:function(e){return H(e.target.value)}}),r.a.createElement("button",{className:"predict-form-item",type:"submit"},"Predict")),r.a.createElement(o.b,{to:"/"},"Go Home"))},f=function(){var e;return e=Object(n.useContext)(u).statePrediction?r.a.createElement("h2",{className:"result-bad"},"Oops! You have DIABETES."):r.a.createElement("h2",{className:"result-good"},"Great! You DON'T have diabetes."),r.a.createElement("div",null,r.a.createElement("h1",null,"Results"),e,r.a.createElement(o.b,{to:"/predict"},"Go to Predictor"),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/"},"Go home"))},E=(a(32),function(e){var t,a,c=Object(n.useContext)(u),s=Object(n.useState)(""),o=Object(i.a)(s,2),l=o[0],m=o[1],p=Object(n.useState)(""),b=Object(i.a)(p,2),f=b[0],E=b[1],h=Object(n.useState)(""),v=Object(i.a)(h,2),N=v[0],O=v[1],j=Object(n.useState)(""),y=Object(i.a)(j,2),x=y[0],S=y[1],w=Object(n.useState)(!1),C=Object(i.a)(w,2),k=C[0],P=C[1],T=function(){var e=Object(g.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:f})});case 3:return a=e.sent,e.next=6,a.json();case 6:if(n=e.sent,c.assignTokenFunction(n.token),console.log(n),!n.token){e.next=19;break}return e.next=12,fetch("/api/user",{headers:{"x-access-tokens":n.token}});case 12:return a=e.sent,e.next=15,a.json();case 15:n=e.sent,console.log(n.firstName),O(", "+n.firstName),S(n.lastName);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return k?(t=r.a.createElement("div",{className:"hide-password",onClick:function(){return P(!1)}}),a="text"):(t=r.a.createElement("div",{className:"show-password",onClick:function(){return P(!0)}}),a="password"),r.a.createElement("div",{className:"login-container"},r.a.createElement("h1",{className:"welcome-message"},"Welcome",N," ",x),r.a.createElement("form",{className:"login-form",onSubmit:T},r.a.createElement("input",{className:"login-form-item login-input",type:"text",placeholder:"Email",onChange:function(e){return m(e.target.value)}}),r.a.createElement("div",{className:"password-container"},r.a.createElement("input",{className:"password-item login-input",type:a,placeholder:"Password",onChange:function(e){return E(e.target.value)}}),t),r.a.createElement("button",{className:"login-form-item login-button",type:"submit"},"Sign in")),r.a.createElement("h3",{className:"forgot-password"},"Forgot your password?"))}),h=(a(33),function(e){var t,a,c,s,o,l=Object(n.useState)(""),u=Object(i.a)(l,2),m=u[0],p=u[1],b=Object(n.useState)(""),f=Object(i.a)(b,2),E=(f[0],f[1],Object(n.useState)("")),h=Object(i.a)(E,2),v=h[0],N=h[1],O=Object(n.useState)(""),j=Object(i.a)(O,2),y=j[0],x=j[1],S=Object(n.useState)(""),w=Object(i.a)(S,2),C=w[0],k=w[1],P=Object(n.useState)(""),T=Object(i.a)(P,2),D=(T[0],T[1]),L=Object(n.useState)(""),F=Object(i.a)(L,2),G=F[0],B=F[1],J=Object(n.useState)(!1),R=Object(i.a)(J,2),A=R[0],z=R[1],I=Object(n.useState)(!1),H=Object(i.a)(I,2),Y=H[0],M=H[1],W=Object(n.useState)(0),q=Object(i.a)(W,2),K=q[0],Q=q[1],U=function(){var e=Object(g.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:y,lastName:C,email:m,healthCard:"",phoneNumber:G,password:v})});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return A?(s=r.a.createElement("div",{className:"hide-password",onClick:function(){return z(!1)}}),a="text"):(s=r.a.createElement("div",{className:"show-password",onClick:function(){return z(!0)}}),a="password"),Y?(o=r.a.createElement("div",{className:"hide-password",onClick:function(){return M(!1)}}),c="text"):(o=r.a.createElement("div",{className:"show-password",onClick:function(){return M(!0)}}),c="password"),t=0===K?r.a.createElement("form",{className:"register-form",onSubmit:function(e){e.preventDefault(),Q(1)}},r.a.createElement("input",{className:"register-form-item register-input",value:y,type:"text",placeholder:"First Name",onChange:function(e){return x(e.target.value)}}),r.a.createElement("input",{className:"register-form-item register-input",value:C,type:"text",placeholder:"Last Name",onChange:function(e){return k(e.target.value)}}),r.a.createElement("div",{className:"submission-buttons"},r.a.createElement("button",{className:"register-form-item register-button",type:"submit"},"Next"))):1===K?r.a.createElement("form",{className:"register-form",onSubmit:function(e){e.preventDefault(),Q(2)}},r.a.createElement("input",{className:"register-form-item register-input",value:m,type:"text",placeholder:"Email",onChange:function(e){return p(e.target.value)}}),r.a.createElement("input",{className:"register-form-item register-input",value:G,type:"text",placeholder:"Phone Number",onChange:function(e){return B(e.target.value)}}),r.a.createElement("div",null),r.a.createElement("div",{className:"submission-buttons"},r.a.createElement("button",{className:"register-form-item back-button",type:"button",onClick:function(){return Q(0)}},"Back"),r.a.createElement("div",{className:"register-form-item"}),r.a.createElement("button",{className:"register-form-item register-button",type:"submit"},"Next"))):r.a.createElement("form",{className:"register-form",onSubmit:U},r.a.createElement("div",{className:"password-container"},r.a.createElement("input",{className:"password-item register-input",type:a,placeholder:"Password",onChange:function(e){return N(e.target.value)}}),s),r.a.createElement("div",{className:"password-container"},r.a.createElement("input",{className:"password-item register-input",type:c,placeholder:"Confirm Password",onChange:function(e){return D(e.target.value)}}),o),r.a.createElement("div",{className:"submission-buttons"},r.a.createElement("button",{className:"register-form-item back-button",type:"button",onClick:function(){return Q(1)}},"Back"),r.a.createElement("div",{className:"register-form-item"}),r.a.createElement("button",{className:"register-form-item register-button",type:"submit"},"Sign up"))),r.a.createElement("div",{className:"register-container"},r.a.createElement("h1",{className:"welcome-message"},"Create account"),t)}),v=a(37),N=(a(34),function(){var e,t,a=Object(n.useState)(!1),c=Object(i.a)(a,2),s=c[0],o=c[1];window.addEventListener("resize",(function(){document.body.classList.add("resize-animation-stopper"),clearTimeout(t),t=setTimeout((function(){document.body.classList.remove("resize-animation-stopper")}),400)}));var l=function(e){o(e)};return e=s?r.a.createElement("div",{className:"gradient-display-background gradient-display-background-register"},r.a.createElement("div",{className:"gradient-display gradient-display-register-rtrue"},r.a.createElement("h1",{className:"gradient-display-text"},"Already have an account?"),r.a.createElement("button",{onClick:function(){return o(!1)},className:"gradient-display-button gradient-display-button-red"},"Login")),r.a.createElement("div",{className:"gradient-display gradient-display-register-bfalse"})):r.a.createElement("div",{className:"gradient-display-background gradient-display-background-login"},r.a.createElement("div",{className:"gradient-display gradient-display-login-rfalse"}),r.a.createElement("div",{className:"gradient-display gradient-display-login-btrue"},r.a.createElement("h1",{className:"gradient-display-text"},"Don't have an account?"),r.a.createElement("button",{onClick:function(){return o(!0)},className:"gradient-display-button gradient-display-button-blue"},"Register"))),r.a.createElement("div",{className:"auth-container"},e,r.a.createElement("div",{className:"fill"},r.a.createElement(v.a,{in:s,timeout:500,classNames:"reg-transition",unmountOnExit:!0},r.a.createElement(h,{assignLoginReg:function(e){return l(e)}}))),r.a.createElement("div",{className:"fill"},r.a.createElement(v.a,{in:!s,timeout:500,classNames:"login-transition",unmountOnExit:!0},r.a.createElement(E,{assignLoginReg:function(e){return l(e)}}))))});var O=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),p=Object(i.a)(s,2),d=p[0],g=p[1];return r.a.createElement(u.Provider,{value:{statePrediction:a,assignPredictionFunction:function(e){return function(e){c(e)}(e)},stateToken:d,assignTokenFunction:function(e){return function(e){g(e)}(e)}}},r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:m}),r.a.createElement(l.a,{exact:!0,path:"/predict",component:b}),r.a.createElement(l.a,{exact:!0,path:"/results",component:f}),r.a.createElement(l.a,{exact:!0,path:"/auth",component:N})))))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.142e46dc.chunk.js.map