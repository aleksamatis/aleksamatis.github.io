(window.webpackJsonp=window.webpackJsonp||[]).push([[43,44,45,46,47,48,49,50],{1086:function(t,e,n){"use strict";n.r(e);var r=n(780),o=n(781),l=n(782),c=n(783),d=n(795),f=n(796),v={components:{SidebarArchives:c.default,SidebarCategories:r.default,SidebarRecentPosts:o.default,SidebarRecentComments:l.default,SidebarSocial:d.default,SidebarSearch:f.default}},m=(n(837),n(23)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-bar"},[n("SidebarSearch"),t._v(" "),n("SidebarRecentPosts"),t._v(" "),n("SidebarRecentComments"),t._v(" "),n("SidebarArchives"),t._v(" "),n("SidebarCategories"),t._v(" "),n("SidebarSocial")],1)}),[],!1,null,"54538326",null);e.default=component.exports},401:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0},items:{type:Array,required:!0}}},o=n(23),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widget"},[n("div",{staticClass:"widget-title"},[n("h6",[t._v(t._s(t.title))])]),t._v(" "),n("ul",t._l(t.items,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"javascript:void(0);"}},[t._v(t._s(e.text))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},443:function(t,e,n){"use strict";var r=n(6),o=n(488).start;r({target:"String",proto:!0,forced:n(489)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},455:function(t,e,n){var content=n(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("583365b6",content,!0,{sourceMap:!1})},456:function(t,e,n){var content=n(679);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("5bc0d64c",content,!0,{sourceMap:!1})},488:function(t,e,n){var r=n(3),o=n(54),l=n(12),c=n(249),d=n(22),f=r(c),v=r("".slice),m=Math.ceil,h=function(t){return function(e,n,r){var c,h,x=l(d(e)),_=o(n),w=x.length,S=void 0===r?" ":l(r);return _<=w||""==S?x:((h=f(S,m((c=_-w)/S.length))).length>c&&(h=v(h,0,c)),t?x+h:h+x)}};t.exports={start:h(!1),end:h(!0)}},489:function(t,e,n){var r=n(68);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},676:function(t,e,n){"use strict";n(455)},677:function(t,e,n){var r=n(66)(!1);r.push([t.i,".social-listing[data-v-1b2d63f1]{margin-bottom:0}.widget .social-listing li[data-v-1b2d63f1]{display:inline-block;list-style:none;margin-bottom:0}.widget .social-listing li[data-v-1b2d63f1]:first-child{padding-left:0}.social-listing li[data-v-1b2d63f1]:after{background:none;display:none}",""]),t.exports=r},678:function(t,e,n){"use strict";n(456)},679:function(t,e,n){var r=n(66)(!1);r.push([t.i,".search form input[data-v-4b86124a]{background:#f7f7f7;border:1px solid #d1d1d1;height:50px;margin:0;min-height:auto;padding:0 10px;width:calc(100% - 50px)}.butn[data-v-4b86124a]{background:linear-gradient(-45deg,#292dc2,#0084e9);border:0;border-radius:30px;color:#fff;cursor:pointer;display:inline-block;font-size:14px;font-weight:600;letter-spacing:1px;line-height:20px;padding:14px 28px;position:relative;text-align:center;text-transform:uppercase;transform:perspective(1px) translateZ(0);transition:all .4s linear;vertical-align:middle}.search form button[data-v-4b86124a]{border:0;border-radius:0;color:#fff;float:right;height:50px;line-height:50px;padding:0;width:50px}",""]),t.exports=r},680:function(t,e,n){var content=n(838);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("039cacba",content,!0,{sourceMap:!1})},780:function(t,e,n){"use strict";n.r(e);n(53),n(128),n(32),n(443),n(17),n(127);var r={components:{SidebarWidget:n(401).default},data:function(){return{categories:[{name:"Business",count:45},{name:"Consultancy",count:33},{name:"Finance",count:23},{name:"Investment",count:9},{name:"Development",count:21},{name:"Professional",count:12},{name:"Planning",count:7},{name:"Saving",count:15},{name:"Banking",count:10}]}},computed:{items:function(){return this.categories.map((function(t){return{text:"".concat(t.name," - ").concat(t.count.toString().padStart(2,"0"))}}))}}},o=n(23),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SidebarWidget",{attrs:{title:"Categories",items:t.items}})}),[],!1,null,null,null);e.default=component.exports},781:function(t,e,n){"use strict";n.r(e);var r={components:{SidebarWidget:n(401).default},data:function(){return{items:[{text:"You don't want Traveling as your enemy!"},{text:"Good City Has Written All Over It."},{text:"The 20 Best Lightroom Presets You Need."},{text:"Pride of the Performers For Hundred Years."},{text:"Time will be for you what you want it to be."}]}}},o=n(23),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SidebarWidget",{attrs:{title:"Recent Posts",items:t.items}})}),[],!1,null,null,null);e.default=component.exports},782:function(t,e,n){"use strict";n.r(e);var r={components:{SidebarWidget:n(401).default},data:function(){return{items:[{text:"You don't want Traveling as your enemy!"},{text:"Good City Has Written All Over It."}]}}},o=n(23),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SidebarWidget",{attrs:{title:"Recent Comments",items:t.items}})}),[],!1,null,null,null);e.default=component.exports},783:function(t,e,n){"use strict";n.r(e);var r={components:{SidebarWidget:n(401).default},data:function(){return{items:[{text:"January 2021"},{text:"February 2021"},{text:"March 2021"}]}}},o=n(23),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SidebarWidget",{attrs:{title:"Archives",items:t.items}})}),[],!1,null,null,null);e.default=component.exports},795:function(t,e,n){"use strict";n.r(e);n(676);var r=n(23),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widget"},[n("div",{staticClass:"widget-title"},[n("h6",[t._v("Follow Us")])]),t._v(" "),n("ul",{staticClass:"social-listing"},[n("li",[n("a",{attrs:{href:"javascript:void(0);"}},[n("i",{staticClass:"fab fa-facebook-f"})])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:void(0);"}},[n("i",{staticClass:"fab fa-twitter"})])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:void(0);"}},[n("i",{staticClass:"fab fa-dribbble"})])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:void(0);"}},[n("i",{staticClass:"fab fa-youtube"})])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:void(0);"}},[n("i",{staticClass:"fab fa-linkedin-in"})])])])])}],!1,null,"1b2d63f1",null);e.default=component.exports},796:function(t,e,n){"use strict";n.r(e);n(678);var r=n(23),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widget search"},[n("form",{attrs:{method:"post"}},[n("input",{attrs:{type:"hidden",name:"form-name",value:"form 1"}}),t._v(" "),n("input",{attrs:{type:"search",name:"search",placeholder:"Type here ..."}}),t._v(" "),n("button",{staticClass:"butn",attrs:{type:"submit"}},[n("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])])}],!1,null,"4b86124a",null);e.default=component.exports},837:function(t,e,n){"use strict";n(680)},838:function(t,e,n){var r=n(66)(!1);r.push([t.i,'.side-bar[data-v-54538326] .widget{margin-bottom:30px}.side-bar[data-v-54538326] .widget .widget-title h6{font-size:14px;font-weight:600;letter-spacing:1px;margin-bottom:20px;padding-bottom:5px;position:relative}.side-bar[data-v-54538326] .widget .widget-title h6:after{background:#292dc2;bottom:0;content:"";height:1px;left:0;position:absolute;width:30px}.side-bar[data-v-54538326] .widget ul{list-style:none;margin:0;padding:0}.side-bar[data-v-54538326] .widget li{font-size:14px;margin:0 0 9px;padding:0 0 0 12px;position:relative}.side-bar[data-v-54538326] .widget li:after{background-color:#5a5d80;content:"";height:1px;left:0;position:absolute;top:12px;width:5px}.side-bar[data-v-54538326] .widget li:last-child{margin:0}',""]),t.exports=r}}]);