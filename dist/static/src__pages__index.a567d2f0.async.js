webpackJsonp([1,2],{"04qB":function(e,t,n){"use strict";function a(){return r.a.createElement("div",null,"content")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("Uifd"),r=n.n(o),l=n("Kng9"),c=(n.n(l),n("UvZQ"));n.n(c),n("G3VR");t.default=Object(l.connect)()(a)},G3VR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("ng98"),o=n.n(a),r=n("6osJ"),l=n.n(r),c=n("iups"),i=n.n(c),s=n("/O8+"),u=n.n(s),m=n("NX1q"),_=n.n(m),d=n("Uifd"),p=n.n(d),v=n("Kng9"),h=(n.n(v),n("hDlL")),g=n.n(h),f=n("hBEj"),C=(n.n(f),n("OCkQ")),w=n.n(C),E=[{name:"\u7cbe\u54c1\u8bfe\u5802",path:"/good"},{name:"\u4e91\u8bfe\u5802",path:"/cloud"},{name:"\u7d20\u517b",path:"/suyang"},{name:"\u5fae\u8bfe\u4e2d\u5fc3",path:"/center"},{name:"\u4e0b\u8f7d\u5ba2\u6237\u7aef",path:"/download"}],b=function(e){function t(e){var n;return o()(this,t),n=u()(this,_()(t).call(this,e)),n.handleClick=function(e,t){console.log(e),n.setState({activedIndex:t}),console.log(f.routerRedux),g.a.push(e.path)},n.state={activedIndex:2},n}return i()(t,[{key:"render",value:function(){var e=this;console.log(this.props.children);var t=this.state.activedIndex;return p.a.createElement("div",{className:w.a.wrapper},p.a.createElement("div",{className:w.a.menuContentWrapper},p.a.createElement("div",{className:w.a.menuContent},p.a.createElement("img",{className:w.a.logoImg,src:"https://video-react.js.org/assets/poster.png",alt:""}),E.map(function(n,a){return p.a.createElement("div",{className:a===t?w.a.activeMenu:"",onClick:function(){e.handleClick(n,a)}},p.a.createElement("span",null,n.name))}))),p.a.createElement("div",{className:w.a.mainContent},p.a.createElement("div",null,this.props.children)),p.a.createElement("div",{className:w.a.bottom},"\xa9 2009-2020 liangxinchao.com \u7248\u6743\u6240\u6709 ICP\u8bc1\uff1a",p.a.createElement("a",{target:"_blank",href:"http://www.beian.miit.gov.cn"},"\u6d59ICP\u590718015546\u53f7-1")))}}]),l()(t,e),t}(p.a.Component);t.default=Object(f.withRouter)(b)},OCkQ:function(e,t){e.exports={menuContentWrapper:"menuContentWrapper___1vuZN",menuContent:"menuContent___1p7qe",logoImg:"logoImg___vKsJ_",activeMenu:"activeMenu___P9eg8",wrapper:"wrapper___2NAq1",mainContent:"mainContent___3MvOr",bottom:"bottom___3ILVV"}},UvZQ:function(e,t){e.exports={normal:"normal___3g6Nd",title:"title___2_z1U",welcome:"welcome___GpWoy",list:"list___zmOI2"}},hDlL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=window.g_history;t.default=a}});