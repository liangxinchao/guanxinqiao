webpackJsonp([2],{G3VR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("ng98"),o=n.n(a),r=n("6osJ"),i=n.n(r),c=n("iups"),l=n.n(c),s=n("/O8+"),m=n.n(s),u=n("NX1q"),p=n.n(u),d=n("Uifd"),_=n.n(d),h=n("Kng9"),v=(n.n(h),n("hDlL")),g=n.n(v),C=n("hBEj"),f=(n.n(C),n("OCkQ")),w=n.n(f),E=[{name:"\u7cbe\u54c1\u8bfe\u5802",path:"/good"},{name:"\u4e91\u8bfe\u5802",path:"/cloud"},{name:"\u7d20\u517b",path:"/suyang"},{name:"\u5fae\u8bfe\u4e2d\u5fc3",path:"/center"},{name:"\u4e0b\u8f7d\u5ba2\u6237\u7aef",path:"/download"}],N=function(e){function t(e){var n;return o()(this,t),n=m()(this,p()(t).call(this,e)),n.handleClick=function(e,t){console.log(e),n.setState({activedIndex:t}),console.log(C.routerRedux),g.a.push(e.path)},n.state={activedIndex:2},n}return l()(t,[{key:"render",value:function(){var e=this;console.log(this.props.children);var t=this.state.activedIndex;return _.a.createElement("div",{className:w.a.wrapper},_.a.createElement("div",{className:w.a.menuContentWrapper},_.a.createElement("div",{className:w.a.menuContent},_.a.createElement("img",{className:w.a.logoImg,src:"https://video-react.js.org/assets/poster.png",alt:""}),E.map(function(n,a){return _.a.createElement("div",{className:a===t?w.a.activeMenu:"",onClick:function(){e.handleClick(n,a)}},n.name)}))),_.a.createElement("div",{className:w.a.mainContent},_.a.createElement("div",null,this.props.children)),_.a.createElement("div",{className:w.a.bottom},"\xa9 2009-2020 liangxinchao.com \u7248\u6743\u6240\u6709 ICP\u8bc1\uff1a",_.a.createElement("a",{target:"_blank",href:"http://www.beian.miit.gov.cn"},"\u6d59ICP\u590718015546\u53f7-1")))}}]),i()(t,e),t}(_.a.Component);t.default=Object(C.withRouter)(N)},OCkQ:function(e,t){e.exports={menuContentWrapper:"menuContentWrapper___1vuZN",menuContent:"menuContent___1p7qe",logoImg:"logoImg___vKsJ_",activeMenu:"activeMenu___P9eg8",wrapper:"wrapper___2NAq1",mainContent:"mainContent___3MvOr",bottom:"bottom___3ILVV"}},hDlL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=window.g_history;t.default=a}});