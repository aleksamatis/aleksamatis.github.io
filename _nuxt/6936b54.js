(window.webpackJsonp=window.webpackJsonp||[]).push([[214,218],{1122:function(t,e,n){"use strict";n.r(e);var o={components:{AmavaScrollToButton:n(414).default}},r=n(23),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mb-2-9 mb-md-6 mb-lg-9 align-items-center",attrs:{id:"step2"}},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-6 col-md-12"},[n("div",{staticClass:"pl-lg-5"},[t._m(1),t._v(" "),n("h3",{staticClass:"text-color-md-blue mb-4"},[t._v("\n        Refinement and analysis of option everyone know\n      ")]),t._v(" "),n("p",[t._v("\n        Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae\n        ab illo inventore veritatis et quasi architecto beatae vitae dicta\n        sunt explicabo. aut odit aut fugit, sed quia consequuntur.\n      ")]),t._v(" "),n("AmavaScrollToButton",{attrs:{href:"#step3"}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6 col-md-12 text-center text-lg-left mb-4 mb-lg-0"},[e("img",{attrs:{src:"/img/content/tab-content-04.png",alt:"..."}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon-circle orange mb-4"},[n("span",{staticClass:"text"},[t._v("02")])])}],!1,null,null,null);e.default=component.exports},405:function(t,e,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("bfa51da6",content,!0,{sourceMap:!1})},414:function(t,e,n){"use strict";n.r(e);n(31),n(250),n(51);var o={props:{href:{type:String,required:!0},direction:{type:String,default:"down"}},methods:{onClick:function(t){if(t.target.href){var e=t.target.href.split("#")[1],n=document.getElementById(e);if(n){var o=n.offsetTop-85;this.scrollTo(o)}}},scrollTo:function(t){var e=window.scrollY,n=Date.now(),o=t-e,r=function(t){return Math.pow(t,3)},l=window.requestAnimationFrame||function(t){return setTimeout(t,16)};l((function c(){var d,progress=(Date.now()-n)/1e3;progress<1?(window.scrollTo({top:e+o*(d=progress,d<.5?r(2*d)/2:1-r(2*(1-d))/2)}),l(c)):window.scrollTo({top:t})}))}}},r=(n(433),n(23)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circle-btn"},[n("a",{attrs:{href:t.href},on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[n("i",{staticClass:"fas",class:{"fa-arrow-down":"down"===t.direction,"fa-arrow-up":"down"!==t.direction}})])])}),[],!1,null,"b0b26b98",null);e.default=component.exports},433:function(t,e,n){"use strict";n(405)},434:function(t,e,n){var o=n(66)(!1);o.push([t.i,".circle-btn a[data-v-b0b26b98]{border:1px solid #243f67;border-radius:100%;cursor:pointer;display:inline-block;height:50px;line-height:50px;text-align:center;width:50px}.circle-btn i[data-v-b0b26b98]{color:#243f67;pointer-events:none}.circle-btn a[data-v-b0b26b98]:hover{background:#243f67;border-color:#243f67;color:#fff}.circle-btn a:hover i[data-v-b0b26b98]{color:#fff}",""]),t.exports=o}}]);