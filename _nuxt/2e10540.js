(window.webpackJsonp=window.webpackJsonp||[]).push([[45,50],{427:function(t,n,e){"use strict";e.r(n);var r={props:{title:{type:String,required:!0},items:{type:Array,required:!0}}},o=e(23),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"widget"},[e("div",{staticClass:"widget-title"},[e("h6",[t._v(t._s(t.title))])]),t._v(" "),e("ul",t._l(t.items,(function(n,r){return e("li",{key:r},[e("a",{attrs:{href:"javascript:void(0);"}},[t._v(t._s(n.text))])])})),0)])}),[],!1,null,null,null);n.default=component.exports},469:function(t,n,e){"use strict";var r=e(6),o=e(729).start;r({target:"String",proto:!0,forced:e(730)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},729:function(t,n,e){var r=e(3),o=e(55),c=e(12),l=e(249),d=e(22),f=r(l),m=r("".slice),v=Math.ceil,h=function(t){return function(n,e,r){var l,h,w=c(d(n)),_=o(e),S=w.length,x=void 0===r?" ":c(r);return _<=S||""==x?w:((h=f(x,v((l=_-S)/x.length))).length>l&&(h=m(h,0,l)),t?w+h:h+w)}};t.exports={start:h(!1),end:h(!0)}},730:function(t,n,e){var r=e(69);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},951:function(t,n,e){"use strict";e.r(n);e(53),e(128),e(32),e(469),e(17),e(127);var r={components:{SidebarWidget:e(427).default},data:function(){return{categories:[{name:"Business",count:45},{name:"Consultancy",count:33},{name:"Finance",count:23},{name:"Investment",count:9},{name:"Development",count:21},{name:"Professional",count:12},{name:"Planning",count:7},{name:"Saving",count:15},{name:"Banking",count:10}]}},computed:{items:function(){return this.categories.map((function(t){return{text:"".concat(t.name," - ").concat(t.count.toString().padStart(2,"0"))}}))}}},o=e(23),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("SidebarWidget",{attrs:{title:"Categories",items:t.items}})}),[],!1,null,null,null);n.default=component.exports}}]);