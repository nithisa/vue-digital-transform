(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,s=1;s<i.length;s++){var l=i[s];0!==n[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var r={},n={app:0},a=[];function o(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=r,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0554":function(t,e,i){var r=i("96a4");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("499e").default;n("17611838",r,!0,{sourceMap:!1,shadowMode:!1})},"0902":function(t,e,i){"use strict";var r=i("9258"),n=i.n(r);n.a},"25f9":function(t,e,i){t.exports=i.p+"img/vdt.c614141f.png"},3614:function(t,e,i){var r=i("53ec");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("499e").default;n("27797d44",r,!0,{sourceMap:!1,shadowMode:!1})},"53ec":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,".digital-transform[data-v-62ce72ac]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.digital-transform-item[data-v-62ce72ac]{display:inline-block;-webkit-transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,transform .3s;transition:opacity .3s,transform .3s,-webkit-transform .3s}.vdt-slide-y-enter[data-v-62ce72ac],.vdt-slide-y-leave-to[data-v-62ce72ac]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}",""]),t.exports=e},5556:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,".dt-scroll[data-v-0583a45a]{overflow:hidden;display:inline-block;height:1.5em}.dt-scroll-list[data-v-0583a45a]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.42,0,.62,1.2);transition-timing-function:cubic-bezier(.42,0,.62,1.2)}",""]),t.exports=e},"56d7":function(t,e,i){"use strict";i.r(e);var r=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{attrs:{id:"app"}},[t._m(0),i("a",{staticClass:"star-me",attrs:{href:"https://github.com/DakerHub/vue-digital-transform"}},[t._v("GITHUB")]),i("div",[t._m(1),i("img",{staticClass:"shield",attrs:{src:"https://img.shields.io/badge/version-@"+t.version+"-success.svg?style=flat-square",alt:""}})]),i("div",{staticClass:"desc"},[t._v("vue-digital-transform基于vue2.x，致力于数字之间的动画切换动效，让数字的变换不再枯燥，让用户体验数字变化所带来的的乐趣。")]),i("h2",[t._v("尝试修改值")]),i("div",{staticClass:"demo-box"},[i("div",{staticClass:"ctrl"},[i("div",{staticClass:"ctrl-item"},[i("label",{attrs:{for:""}},[t._v("错乱切换：")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.dislocation,expression:"dislocation"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.dislocation)?t._i(t.dislocation,null)>-1:t.dislocation},on:{change:function(e){var i=t.dislocation,r=e.target,n=!!r.checked;if(Array.isArray(i)){var a=null,o=t._i(i,a);r.checked?o<0&&(t.dislocation=i.concat([a])):o>-1&&(t.dislocation=i.slice(0,o).concat(i.slice(o+1)))}else t.dislocation=n}}})]),i("div",{staticClass:"ctrl-item"},[i("label",{attrs:{for:""}},[t._v("分隔符：")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.useGrouping,expression:"useGrouping"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.useGrouping)?t._i(t.useGrouping,null)>-1:t.useGrouping},on:{change:function(e){var i=t.useGrouping,r=e.target,n=!!r.checked;if(Array.isArray(i)){var a=null,o=t._i(i,a);r.checked?o<0&&(t.useGrouping=i.concat([a])):o>-1&&(t.useGrouping=i.slice(0,o).concat(i.slice(o+1)))}else t.useGrouping=n}}})]),i("div",{staticClass:"ctrl-item"},[i("label",{attrs:{for:""}},[t._v("转换间隔：")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.interval,expression:"interval",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.interval},on:{input:function(e){e.target.composing||(t.interval=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"ctrl-item"},[i("label",{attrs:{for:""}},[t._v("值：")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.num,expression:"num",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.num},on:{input:function(e){e.target.composing||(t.num=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),i("button",{on:{click:t.random}},[t._v("随机")])])]),i("div",{staticClass:"demo"},[i("DigitalTransform",{attrs:{value:t.num,interval:t.interval,dislocation:t.dislocation,"use-grouping":t.useGrouping}}),i("span",[t._v("这是个inline元素")])],1)]),i("DocExample"),i("DocConfig")],1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",[r("img",{attrs:{src:i("25f9"),alt:"vue-digital-transform"}}),t._v(" vue-digital-transform ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"shield",attrs:{href:"https://github.com/DakerHub",target:"__blank"}},[i("img",{attrs:{src:"https://img.shields.io/badge/Github-@DakerHub-success.svg?style=flat-square",alt:""}})])}],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition-group",{staticClass:"digital-transform",attrs:{name:"vdt-slide-y",tag:"div"}},t._l(t.digitals,(function(e,r){return i("DigitalTransfromScroll",{key:r,staticClass:"digital-transform-item",attrs:{to:e,interval:t.interval,dislocation:t.dislocation,from:"0"}},[t._v(t._s(e))])})),1)},s=[];function l(t){return/^(\d|\.|,){1}$/.test(t.toString())}function c(t){return void 0===t||null===t||""===t||/^(\d|\.|,)+$/.test(t.toString())}var d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dt-scroll"},[i("div",{ref:"$list",staticClass:"dt-scroll-list",style:t.listStyle},t._l(t.digitals,(function(e){return i("span",{key:e,staticClass:"dt-scroll-digital"},[t._v(" "+t._s(e)+" ")])})),0)])},u=[],p={name:"DigitalTransformScroll",props:{to:{validator:l,default:"0"},from:{validator:l,default:"0"},dislocation:{type:Boolean,default:!1},interval:{type:Number,default:500}},data:function(){return{digitals:[",",".","9","8","7","6","5","4","3","2","1","0"],listHeight:0,spacing:1}},computed:{listStyle:function(){return{transitionDuration:"".concat(this.interval/1e3*this.spacing,"s")}},elHeight:function(){return this.listHeight/this.digitals.length}},watch:{to:{immediate:!0,handler:function(t,e){if(this.$refs.$list){if(this.dislocation){var i=this.digitals.findIndex((function(t){return e===t})),r=this.digitals.findIndex((function(e){return t===e}));this.spacing=Math.abs(r-i)}else this.spacing=1;this.setPosition(t)}}}},mounted:function(){var t=this;this.calcHeight(),this.$el.style.height=this.elHeight+"px",this.setPosition(this.from),setTimeout((function(){t.setPosition(t.to)}),300)},methods:{calcHeight:function(){this.listHeight=this.$refs.$list.clientHeight},setPosition:function(t){var e=this.digitals.findIndex((function(e){return t===e})),i=e*this.elHeight;this.$refs.$list&&(this.$refs.$list.style.transform="translateY(-".concat(i,"px)"))}}},v=p,f=(i("0902"),i("2877")),m=Object(f["a"])(v,d,u,!1,null,"0583a45a",null),g=m.exports,b={name:"DigitalTransfrom",components:{DigitalTransfromScroll:g},props:{value:{validator:c,default:void 0,required:!0},dislocation:{type:Boolean,default:!1},interval:{type:Number,default:500},useGrouping:{type:Boolean,default:!1}},data:function(){return{digitals:[],oldDigtals:[]}},watch:{value:{immediate:!0,handler:function(t){this.parseDigital(t)}}},methods:{parseDigital:function(t){var e=t;if("number"===typeof t){var i=Intl.NumberFormat("en-US",{useGrouping:this.useGrouping,maximumFractionDigits:20});e=i.format(t)}var r=e.split("");this.oldDigtals=this.digitals.concat(),this.digitals=r}}},h=b,x=(i("dd47"),Object(f["a"])(h,o,s,!1,null,"62ce72ac",null)),_=x.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("快速开始")]),i("h3",[t._v("安装")]),i("pre",{staticClass:"hljs",staticStyle:{display:"block","overflow-x":"auto",padding:"0.5em",background:"rgb(43, 43, 43)",color:"rgb(186, 186, 186)"}},[t._v("npm "),i("span",{staticClass:"hljs-keyword",staticStyle:{color:"rgb(203, 120, 50)"}},[t._v("install")]),t._v(" vue-digital-transform")]),i("h3",[t._v("使用")]),i("pre",{staticClass:"hljs",staticStyle:{display:"block","overflow-x":"auto",padding:"0.5em",background:"rgb(43, 43, 43)",color:"rgb(186, 186, 186)"}},[t._v("<DigitalTransform\n  "),i("span",{staticClass:"hljs-symbol",staticStyle:{color:"rgb(224, 196, 108)"}},[t._v(":value="),i("span",{staticClass:"hljs-string",staticStyle:{color:"rgb(224, 196, 108)"}},[t._v('"number"')])]),t._v("\n  "),i("span",{staticClass:"hljs-symbol",staticStyle:{color:"rgb(224, 196, 108)"}},[t._v(":interval="),i("span",{staticClass:"hljs-string",staticStyle:{color:"rgb(224, 196, 108)"}},[t._v('"interval"')])]),t._v("\n  "),i("span",{staticClass:"hljs-symbol",staticStyle:{color:"rgb(224, 196, 108)"}},[t._v(":dislocation="),i("span",{staticClass:"hljs-string",staticStyle:{color:"rgb(224, 196, 108)"}},[t._v('"dislocation"')])]),t._v("\n><"),i("span",{staticClass:"hljs-regexp",staticStyle:{color:"rgb(104, 150, 186)"}},[t._v("/DigitalTransform>")])]),i("pre",{staticClass:"hljs",staticStyle:{display:"block","overflow-x":"auto",padding:"0.5em",background:"rgb(43, 43, 43)",color:"rgb(186, 186, 186)"}},[i("span",{staticClass:"hljs-keyword",staticStyle:{color:"rgb(203, 120, 50)"}},[t._v("import")]),t._v(" DigitalTransform from "),i("span",{staticClass:"hljs-string",staticStyle:{color:"rgb(224, 196, 108)"}},[t._v('"vue-digital-transform"')]),t._v(";\n\nexport "),i("span",{staticClass:"hljs-keyword",staticStyle:{color:"rgb(203, 120, 50)"}},[t._v("default")]),t._v(" {\n  components: {\n    DigitalTransform\n  },\n  data() {\n    return {\n      number: "),i("span",{staticClass:"hljs-number",staticStyle:{color:"rgb(104, 150, 186)"}},[t._v("1000")]),t._v(",\n      interval: "),i("span",{staticClass:"hljs-number",staticStyle:{color:"rgb(104, 150, 186)"}},[t._v("500")]),t._v(",\n      dislocation: false\n    };\n  }\n}")])])}],k={},C=k,j=Object(f["a"])(C,y,w,!1,null,"2f44c0d0",null),S=j.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v("参数 Props")]),i("h3",[t._v("value")]),i("div",[i("p",[t._v("类型："),i("code",[t._v("Number")]),t._v(", "),i("code",[t._v("String")])]),i("p",[t._v("默认值："),i("code",[t._v("undefined")])]),i("p",[t._v(" 需要切换的数字，只能由 "),i("code",[t._v("0-9")]),t._v(" "),i("code",[t._v(".")]),t._v(" "),i("code",[t._v(",")]),t._v(" 组成 ")])]),i("h3",[t._v("dislocation")]),i("div",[i("p",[t._v("类型："),i("code",[t._v("Boolean")])]),i("p",[t._v("默认值："),i("code",[t._v("false")])]),i("p",[t._v(" 单个数字是否过渡时间是否不一致，设置该属性为"),i("code",[t._v("true")]),t._v("时一般会将"),i("code",[t._v("interval")]),t._v("调小 ")])]),i("h3",[t._v("interval")]),i("div",[i("p",[t._v("类型："),i("code",[t._v("Number")])]),i("p",[t._v("默认值："),i("code",[t._v("500")])]),i("p",[t._v("单个数字过渡时间（ms）")])]),i("h3",[t._v("useGrouping (v1.1.0+)")]),i("div",[i("p",[t._v("类型："),i("code",[t._v("Boolean")])]),i("p",[t._v("默认值："),i("code",[t._v("false")])]),i("p",[t._v("是否开启分隔符(对 value 为 "),i("code",[t._v("Number")]),t._v(" 类型的有效)")])])])}],M={name:"DocConfig"},G=M,O=(i("97c6"),Object(f["a"])(G,D,$,!1,null,"1ba5f760",null)),P=O.exports,T=i("9224"),H={name:"App",components:{DigitalTransform:_,DocExample:S,DocConfig:P},data:function(){return{version:T.version,num:1e3,interval:500,dislocation:!1,useGrouping:!1}},methods:{random:function(){var t=Math.ceil(10*Math.random()),e=Math.random().toString().substring(0,t+5);this.num=e*Math.pow(t,10)}}},A=H,E=(i("5c0b"),Object(f["a"])(A,n,a,!1,null,null,null)),N=E.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(N)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var r=i("0554"),n=i.n(r);n.a},"7cc6":function(t,e,i){var r=i("8b70");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("499e").default;n("1d1226f4",r,!0,{sourceMap:!1,shadowMode:!1})},"8b70":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,"code[data-v-1ba5f760]{background-color:#eee;padding:2px 5px;border-radius:2px;font-weight:700}",""]),t.exports=e},9224:function(t){t.exports=JSON.parse('{"name":"vue-digital-transform","version":"1.1.0","private":false,"main":"dist/vue-digital-transform.umd.min.js","scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build --target lib --name vue-digital-transform \'./src/components/DigitalTransform.vue\'","build:docs":"vue-cli-service build --dest docs","build:all":"npm run build & npm run build:docs","test:unit":"vue-cli-service test:unit","lint":"vue-cli-service lint --fix"},"dependencies":{"vue":"^2.6.11"},"devDependencies":{"@vue/cli-plugin-babel":"~4.2.0","@vue/cli-plugin-eslint":"~4.2.0","@vue/cli-plugin-unit-jest":"~4.2.0","@vue/cli-service":"~4.2.0","@vue/eslint-config-prettier":"^6.0.0","@vue/test-utils":"1.0.0-beta.31","babel-eslint":"^10.0.3","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.1","eslint-plugin-vue":"^6.1.2","prettier":"^1.19.1","sass":"^1.25.0","sass-loader":"^8.0.2","vue-template-compiler":"^2.6.11"},"repository":{"type":"git","url":"https://github.com/DakerHub/vue-digital-transform.git"},"keywords":["vue","vue-component","digital-animation"],"author":"DakerHub","license":"MIT"}')},9258:function(t,e,i){var r=i("5556");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("499e").default;n("779de7f4",r,!0,{sourceMap:!1,shadowMode:!1})},"96a4":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,".container{position:relative;overflow-x:hidden;width:100vw;margin-bottom:50px}body{margin:0}#app{width:100%;font-family:PingFang SC Regular,Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;max-width:800px;margin:0 auto}h1{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:40px 0;padding-bottom:20px;border-bottom:thin solid #eee}h1,h1 img{height:60px}h1 img{margin-right:20px}.star-me{position:absolute;right:-50px;top:25px;height:40px;width:200px;text-align:center;line-height:40px;font-size:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:#4caf50;color:#fff;font-weight:700;-webkit-transition:all .3s;transition:all .3s;text-decoration:none}.star-me:hover{-webkit-box-shadow:-1px 3px 4px #1d581f;box-shadow:-1px 3px 4px #1d581f;text-decoration:underline;right:-54px;top:23px}.shield{margin-right:5px}.desc{margin:20px 0}fieldset{text-align:left}.ctrl .ctrl-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:15px}.ctrl .ctrl-item label{width:120px;text-align:right}.ctrl button,.ctrl input:not([type=checkbox]){height:32px;border-radius:4px;padding:0 10px;border:thin solid #ccc;outline:none;margin-right:15px;-webkit-transition:all .3s;transition:all .3s}.ctrl input:not([type=checkbox]):hover{border-color:#4caf50}.ctrl input:not([type=checkbox]):focus{-webkit-box-shadow:0 0 0 2px #9cdc9f;box-shadow:0 0 0 2px #9cdc9f;border-color:#4caf50}.ctrl button{cursor:pointer}.ctrl button:hover{background-color:#fafafa}.ctrl button:active{background-color:#eee}.demo-box{-webkit-box-shadow:0 0 11px 0 rgba(0,0,0,.12);box-shadow:0 0 11px 0 rgba(0,0,0,.12);padding:20px;border-radius:4px}.demo{border:thin solid #ccc;padding:10px 20px;border-radius:4px;margin:0 auto}.digital-transform{font-size:30px;font-weight:700;color:#4caf50}@media screen and (max-width:600px){.container{padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}h1{word-break:break-all;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:unset}.ctrl .ctrl-item{-ms-flex-wrap:wrap;flex-wrap:wrap}.ctrl .ctrl-item label{width:100%;text-align:left}.ctrl .ctrl-item input:not([type=checkbox]){width:100%;margin:0}.ctrl .ctrl-item button{width:100%;margin:10px 0}.demo{padding:5px 0;border:none}}",""]),t.exports=e},"97c6":function(t,e,i){"use strict";var r=i("7cc6"),n=i.n(r);n.a},dd47:function(t,e,i){"use strict";var r=i("3614"),n=i.n(r);n.a}});
//# sourceMappingURL=app.4f55b4e7.js.map