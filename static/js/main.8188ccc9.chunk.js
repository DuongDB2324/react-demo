(this["webpackJsonpdemo-slide"]=this["webpackJsonpdemo-slide"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(1),s=n.n(i),c=n(3),o=n.n(c);n(13),n.p,n(14);var l=n(4),r=n(5),u=n(7),m=n(6),b=(n(15),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).auto=function(){a.timer=setInterval((function(){a.setState({img:4==a.state.img?1:a.state.img+1})}),1500)},a.next=function(){a.setState({img:4==a.state.img?1:a.state.img+1})},a.back=function(){a.setState({img:1==a.state.img?4:a.state.img-1})},a.pause=function(){clearInterval(a.timer)},a.state={img:1},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"father",children:[Object(a.jsx)("img",{className:"img",src:"img/slide"+this.state.img+".jpg",alt:"image1"}),Object(a.jsx)("a",{className:"icon-back",onClick:this.back,children:Object(a.jsx)("i",{className:"fas fa-angle-left"})}),Object(a.jsx)("a",{className:"icon-next",onClick:this.next,children:Object(a.jsx)("i",{className:"fas fa-angle-right"})}),Object(a.jsx)("button",{className:"button",type:"button",onClick:this.auto,children:"AUTO"}),Object(a.jsx)("div",{class:"pause",children:Object(a.jsx)("button",{className:"button1",type:"button",onClick:this.pause,children:"PAUSE"})})]})}}]),n}(s.a.Component)),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),s(t),c(t)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.8188ccc9.chunk.js.map