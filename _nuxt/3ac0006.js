(window.webpackJsonp=window.webpackJsonp||[]).push([[121,11],{406:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},408:function(t,e,n){"use strict";var r=n(11),o=n(2),c=n(3),l=n(126),f=n(18),d=n(14),v=n(248),m=n(40),h=n(125),_=n(247),x=n(4),w=n(86).f,C=n(30).f,N=n(16).f,I=n(406),E=n(410).trim,y="Number",A=o.Number,k=A.prototype,F=o.TypeError,S=c("".slice),M=c("".charCodeAt),T=function(t){var e=_(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,o,c,l,f,code,d=_(t,"number");if(h(d))throw F("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=E(d),43===(e=M(d,0))||45===e){if(88===(n=M(d,2))||120===n)return NaN}else if(48===e){switch(M(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=S(d,2)).length,f=0;f<l;f++)if((code=M(c,f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(l(y,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var V,j=function(t){var e=arguments.length<1?0:A(T(t)),n=this;return m(k,n)&&x((function(){I(n)}))?v(Object(e),n,j):e},R=r?w(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),$=0;R.length>$;$++)d(A,V=R[$])&&!d(j,V)&&N(j,V,C(A,V));j.prototype=k,k.constructor=j,f(o,y,j)}},410:function(t,e,n){var r=n(3),o=n(22),c=n(12),l=n(411),f=r("".replace),d="["+l+"]",v=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(t){return function(e){var n=c(o(e));return 1&t&&(n=f(n,v,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},411:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},423:function(t,e,n){"use strict";n.r(e);n(408),n(430),n(51);var r={props:{from:{type:Number,default:0},to:{type:Number,required:!0},duration:{type:Number,default:1e3},digits:{type:Number,default:0},tag:{type:String,default:"div"}},data:function(){return{value:this.from}},computed:{displayValue:function(){return this.value.toFixed(this.digits)}},methods:{onAnimate:function(){var t=this,e=(this.to-this.from)/this.duration,n=setInterval((function(){t.value=Math.min(t.value+50*e,t.to),t.value>=t.to&&clearInterval(n)}),50)}}},o=n(23),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{directives:[{name:"wow",rawName:"v-wow",value:{"animation-name":"fadeInUp","animation-duraion":"0.0s"},expression:"{\n    'animation-name': 'fadeInUp',\n    'animation-duraion': '0.0s',\n  }"}],tag:"component",on:{animationstart:t.onAnimate}},[t._v("\n  "+t._s(t.displayValue)),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},430:function(t,e,n){"use strict";var r=n(6),o=n(2),c=n(3),l=n(52),f=n(406),d=n(249),v=n(4),m=o.RangeError,h=o.String,_=Math.floor,x=c(d),w=c("".slice),C=c(1..toFixed),N=function(t,e,n){return 0===e?n:e%2==1?N(t,e-1,n*t):N(t*t,e/2,n)},I=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=_(r/1e7)},E=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=_(n/t),n=n%t*1e7},y=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:v((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!v((function(){C({})}))},{toFixed:function(t){var e,n,r,o,c=f(this),d=l(t),data=[0,0,0,0,0,0],v="",_="0";if(d<0||d>20)throw m("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return h(c);if(c<0&&(v="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*N(2,69,1))-69)<0?c*N(2,-e,1):c/N(2,e,1),n*=4503599627370496,(e=52-e)>0){for(I(data,0,n),r=d;r>=7;)I(data,1e7,0),r-=7;for(I(data,N(10,r,1),0),r=e-1;r>=23;)E(data,1<<23),r-=23;E(data,1<<r),I(data,1,1),E(data,2),_=y(data)}else I(data,0,n),I(data,1<<-e,0),_=y(data)+x("0",d);return _=d>0?v+((o=_.length)<=d?"0."+x("0",d-o)+_:w(_,0,o-d)+"."+w(_,o-d)):v+_}})},466:function(t,e,n){var content=n(723);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("7242eefb",content,!0,{sourceMap:!1})},722:function(t,e,n){"use strict";n(466)},723:function(t,e,n){var r=n(66)(!1);r.push([t.i,".bg-theme-solid[data-v-f6d7ff4c],.theme-overlay-solid[data-overlay-dark][data-v-f6d7ff4c]:before{background:#292dc2}.counter-box02[data-v-f6d7ff4c]{position:relative}.counter-box02 .right-shape[data-v-f6d7ff4c]{bottom:-7px;position:absolute;right:0;width:300px}.counter-box02 .left-shape[data-v-f6d7ff4c]{background:url(/img/bg/bg-03.png) no-repeat top;background-size:cover;height:100%;left:0;opacity:.1;position:absolute;top:0;width:100%}",""]),t.exports=r},767:function(t,e,n){"use strict";n.r(e);n(722);var r=n(23),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bg-theme-solid counter-box02"},[t._m(0),t._v(" "),n("span",{staticClass:"left-shape"}),t._v(" "),n("div",{staticClass:"container position-relative z-index-99"},[t._m(1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 col-md-3 mb-5 mb-md-0"},[n("div",{staticClass:"text-center"},[n("AmavaCounter",{staticClass:"text-white",attrs:{tag:"h1",to:15,duration:2e3}},[t._v("+")]),t._v(" "),n("p",{staticClass:"mb-0 text-white"},[t._v("Experience Years")])],1)]),t._v(" "),n("div",{staticClass:"col-6 col-md-3 mb-5 mb-md-0"},[n("div",{staticClass:"text-center"},[n("AmavaCounter",{staticClass:"text-white",attrs:{tag:"h1",to:634,duration:2e3}},[t._v("+")]),t._v(" "),n("p",{staticClass:"mb-0 text-white"},[t._v("Happy clients")])],1)]),t._v(" "),n("div",{staticClass:"col-6 col-md-3"},[n("div",{staticClass:"text-center"},[n("AmavaCounter",{staticClass:"text-white",attrs:{tag:"h1",to:951,duration:2e3}},[t._v("+")]),t._v(" "),n("p",{staticClass:"mb-0 text-white"},[t._v("Finished Projects")])],1)]),t._v(" "),n("div",{staticClass:"col-6 col-md-3"},[n("div",{staticClass:"text-center"},[n("AmavaCounter",{staticClass:"text-white",attrs:{tag:"h1",to:5,duration:2e3}},[t._v("k")]),t._v(" "),n("p",{staticClass:"mb-0 text-white"},[t._v("Skilled Experts")])],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"right-shape d-none d-xl-block"},[e("img",{attrs:{src:"/img/content/object-01.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-95 w-sm-90 w-lg-50 text-center mx-auto mb-5 mb-md-7"},[n("span",{staticClass:"d-block mb-2 text-white font-weight-600"},[t._v("We provide best")]),t._v(" "),n("h2",{staticClass:"text-white"},[t._v("\n        The bright and easiest help to grow your business\n      ")])])}],!1,null,"f6d7ff4c",null);e.default=component.exports;installComponents(component,{AmavaCounter:n(423).default})}}]);