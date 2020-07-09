(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{100:function(e,t,n){e.exports=n(335)},335:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(0),o=n.n(a),c=n(90),i=n.n(c),u=n(17),s=n.n(u),l=n(91),p=n(20),d=n(98),f=n(11);function b(){var e=Object(r.a)(["\n\tborder: 1px solid #444;\n\twidth: auto;\n\tpadding: 20px 40px;\n\tmargin: 10px;\n\tborder-radius: 15px;\n\tcursor: pointer;\n\tcolor: #fff;\n\tbackground-color: #202E3A;\n\t&:hover {\n\t\tbackground-color: #e9ebee;\n\t\tcolor: #222;\n\t\tfont-weight: bold;\n\t\ttransition: 0.2ms ease-in-out;\n\t}\n"]);return b=function(){return e},e}var m=f.a.div(b()),g=Object(a.createContext)({score:0,addScore:function(){}}),x=Object(a.createContext)({percent:0,addPercent:function(){},tryAgain:function(){}}),v=n(95),h=n.n(v),E=n(41),w=n.n(E),j=function(e){var t=e.correctAnswer,n=e.answers,r=Object(a.useState)(!1),c=Object(p.a)(r,2),i=c[0],u=c[1],s=Object(a.useState)([]),l=Object(p.a)(s,2),d=l[0],f=l[1],b=Object(a.useContext)(x),v=Object(a.useContext)(g),E={1:"a",2:"b",3:"c",4:"d"};Object(a.useEffect)((function(){f(h.a.shuffle(n))}),[]);var j=function(){document.getElementById("wrong-answer").play()},y=function(){document.getElementById("correct-answer").play()},O=function(e){return t===e?{backgroundColor:"#458728",pointerEvents:"none"}:{backgroundColor:"#BD2A2A",pointerEvents:"none"}};return o.a.createElement("div",null,d.map((function(e,n){return o.a.createElement(m,{key:n,onClick:function(){return n=e,u(!0),b.addPercent(),void(n===t?(v.addScore(),y()):j());var n},style:i?O(e):null},E[n+1].toUpperCase(),".",w.a.unescape(e))})))};function y(){var e=Object(r.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\tflex-direction: column;\n\tbackground-color: #253341;\n\t-webkit-box-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);\n\t-moz-box-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);\n\tbox-shadow: 10px 10px 35px -16px rgba(0, 0, 0, 0.75);\n\tpadding: 20px;\n\tborder-radius: 20px;\n\tmargin: 20px;\n\tmargin-bottom: 50px;\n\n\tp {\n\t\tword-break: break-word;\n\t\tfont-size: 18px;\n\t\tcolor: #fff;\n\t\tbackground-color: #1b1b1b;\n\t\tpadding: 15px;\n\t\tborder-radius: 15px;\n\t}\n\n\th3 {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tcolor: #fff;\n\t}\n"]);return y=function(){return e},e}var O=f.a.div(y()),k=n(99);function C(){var e=Object(r.a)(["\n\tposition: sticky;\n\ttop: 0;\n\twidth: 100%;\n"]);return C=function(){return e},e}var A=Object(f.a)(k.a)(C()),S=n(96),z=n.n(S);function I(){var e=Object(r.a)(["\n\tposition: fixed;\n\tz-index: -1;\n\twidth: 100%;\n\theight: 100%;\n"]);return I=function(){return e},e}var _=Object(f.a)(z.a)(I()),F=function(e){var t=e.questions,n=Object(a.useContext)(x),r=["red","orange","yellow","green","blue","indigo","violet"],c={particles:{number:{value:25},size:{value:3}}};return o.a.createElement("div",null,o.a.createElement(A,{percent:n.percent,strokeWidth:"2",strokeColor:"#00BFFF"}),t.map((function(e,t){var n=e.category,a=e.question,i=e.correct_answer,u=e.incorrect_answers;return o.a.createElement(O,{style:{border:"2px solid ".concat(r[Math.floor(Math.random()*r.length)])},key:t},o.a.createElement("h3",null,n.toUpperCase()),o.a.createElement("p",null,w.a.unescape(a)),o.a.createElement(_,{params:c}),o.a.createElement(j,{correctAnswer:i,wrongAnswers:u,answers:[i].concat(Object(d.a)(u)),index:t}))})))};function M(){var e=Object(r.a)(["\n\ttext-align: center;\n\tborder-radius: 15px;\n\tbackground-color: #fff;\n\tpadding: 20px 0;\n\tmargin-bottom: 20px;\n\tborder: 2px solid black;\n"]);return M=function(){return e},e}var q=f.a.div(M());function B(){var e=Object(r.a)(["\n\theight: auto;\n\twidth: auto;\n\toutline: none;\n\tborder: none;\n\tbackground-color: #1b1b1b;\n\tcolor: white;\n\tpadding: 20px;\n\tfont-family: Dank Mono;\n\tfont-size: 25px;\n\tborder-radius: 15px;\n"]);return B=function(){return e},e}var T=f.a.button(B()),P=n(7),Y=function(){var e=Object(a.useContext)(x),t=Object(a.useContext)(g),n=Object(P.f)(),r=n.location.pathname,c="".concat(r,"YEYMILKTEAA");return o.a.createElement(q,null,o.a.createElement("h1",null,"Score: ",t.score," out of 10"),t.score>=6&&100===e.percent?o.a.createElement(T,{onClick:function(){return n.push(c)}},"CLAIM MILKTEA!!!"):o.a.createElement(T,{onClick:function(){e.tryAgain(),window.scrollTo({top:0,behavior:"smooth"})},style:100===e.percent?{display:""}:{display:"none"}},"TRY AGAIN"))},D=n(97),G=n.n(D);function K(){var e=Object(r.a)(["\n\tmargin-top: 300px;\n"]);return K=function(){return e},e}var L=Object(f.a)(G.a)(K()),U=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(p.a)(c,2),u=i[0],d=i[1],f=Object(a.useState)(0),b=Object(p.a)(f,2),m=b[0],v=b[1],h=Object(a.useState)(0),E=Object(p.a)(h,2),w=E[0],j=E[1],y=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api.php?amount=10&type=multiple");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.results),d(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){y()}),[]),u?o.a.createElement("div",null,o.a.createElement(x.Provider,{value:{percent:w,addPercent:function(){j(w+10)},tryAgain:function(){r([]),j(0),v(0),d(!1),y()}}},o.a.createElement(g.Provider,{value:{score:m,addScore:function(){v(m+1)}}},o.a.createElement(F,{questions:n}),o.a.createElement(Y,null)))):o.a.createElement(L,{type:"Grid",color:"#00BFFF",height:100,width:100,timeout:3e3})},J=n(43),N=n.n(J),R=function(){return o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},o.a.createElement("img",{alt:"milktea",src:"https://i.pinimg.com/originals/7e/44/aa/7e44aa732691c034a8300a2670966898.jpg",style:{marginTop:"50px"}}),o.a.createElement("p",{style:{color:"#fff"}},"sabi ko na milktea"))},H=function(){return o.a.createElement("div",null,o.a.createElement(N.a,{src:"https://www.bensound.com/bensound-music/bensound-thejazzpiano.mp3",autoPlay:!0,loop:!0}),o.a.createElement(N.a,{id:"wrong-answer",src:"https://freesound.org/people/KevinVG207/sounds/331912/download/331912__kevinvg207__wrong-buzzer.wav"}),o.a.createElement(N.a,{id:"correct-answer",src:"https://freesound.org/people/JapanYoshiTheGamer/sounds/361263/download/361263__japanyoshithegamer__8-bit-correct-answer.wav"}),o.a.createElement(P.c,null,o.a.createElement(P.a,{exact:!0,path:"/react-quiz",component:U}),o.a.createElement(P.a,{exact:!0,path:"/react-quiz/YEYMILKTEAA",component:R})))},V=n(39);function W(){var e=Object(r.a)(["\n\tdisplay: flex;\n\theight: auto;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: Dank Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI',\n\t\t'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',\n\t\t'Helvetica Neue', sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\t-webkit-user-select: none; /* Safari */\n\t-moz-user-select: none; /* Firefox */\n\t-ms-user-select: none; /* IE10+/Edge */\n\tuser-select: none; /* Standard */\n"]);return W=function(){return e},e}var Q=f.a.div(W());i.a.render(o.a.createElement(V.a,null,o.a.createElement(Q,null,o.a.createElement(H,null))),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.02f78c5d.chunk.js.map