(window.webpackJsonp=window.webpackJsonp||[]).push([[38,5,28],{251:function(t,e,o){"use strict";o.r(e);var n={},r=(o(253),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",[t._t("default",[o("span",{staticClass:"text"},[t._v("Submit")])])],2)}),[],!1,null,"43ef6a28",null);e.default=component.exports;installComponents(component,{Button:o(251).default})},252:function(t,e,o){var content=o(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(84).default)("3cb85593",content,!0,{sourceMap:!1})},253:function(t,e,o){"use strict";o(252)},254:function(t,e,o){var n=o(83)(!1);n.push([t.i,"button[data-v-43ef6a28]{display:block;box-sizing:border-box;height:32px;margin:0 1px 20px;padding:0;border:0;background:none;cursor:pointer;font-family:Tahoma;font-size:1rem}button .icon[data-v-43ef6a28],button .text[data-v-43ef6a28]{color:#fff;background-color:#918f8e}button .icon[data-v-43ef6a28]{width:32px}button .icon[data-v-43ef6a28],button .text[data-v-43ef6a28]{display:flex;justify-content:center;align-items:center;float:left;height:32px}button .text[data-v-43ef6a28]{padding:0 10px}button .iconLeft[data-v-43ef6a28]{border-top-left-radius:4px;border-bottom-left-radius:4px}button .iconRight[data-v-43ef6a28]{border-top-right-radius:4px;border-bottom-right-radius:4px}button .textLeft[data-v-43ef6a28]{border-top-left-radius:4px;border-bottom-left-radius:4px}button .textRight[data-v-43ef6a28]{border-top-right-radius:4px;border-bottom-right-radius:4px}button[data-v-43ef6a28]:focus{outline:0}button[data-v-43ef6a28]:hover{opacity:.8}",""]),t.exports=n},260:function(t,e,o){var content=o(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(84).default)("538c37f4",content,!0,{sourceMap:!1})},268:function(t,e,o){"use strict";o(260)},269:function(t,e,o){var n=o(83)(!1);n.push([t.i,".huge[data-v-276cd014]{font-size:8rem;color:#928f8f;width:100%;padding:20px}.oneSection[data-v-276cd014]{background-color:#f8efef;margin:5px;padding:5px}",""]),t.exports=n},271:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{}}},r=(o(268),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"oneSection"},[t._t("default")],2)}),[],!1,null,"276cd014",null);e.default=component.exports},285:function(t,e,o){var content=o(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(84).default)("30b1e119",content,!0,{sourceMap:!1})},298:function(t,e,o){"use strict";o(285)},299:function(t,e,o){var n=o(83)(!1);n.push([t.i,".huge[data-v-3825e320]{font-size:8rem;color:#928f8f;width:100%;padding:20px}.thumbs[data-v-3825e320]{display:flex;flex-wrap:wrap;justify-content:center}.thumbs div[data-v-3825e320]{display:flex;flex-direction:column;justify-content:space-between}.thumbs div a[data-v-3825e320]{padding-right:5px}.overlay[data-v-3825e320]{width:100%;height:100%;position:fixed;top:0;left:0;background-color:rgba(65,63,63,.75294);overflow:auto}.dialog[data-v-3825e320]{background-color:#f8efef;width:90%;margin:0 auto;border:1px solid #999;display:flex;flex-direction:column;align-items:center}.one[data-v-3825e320]{padding:10px}.comment[data-v-3825e320]{padding:5px;text-align:center}.actions[data-v-3825e320]{display:flex;justify-content:center}",""]),t.exports=n},335:function(t,e,o){"use strict";o.r(e);o(41),o(85),o(66),o(86),o(38);var n={head:{script:[]},data:function(){return{show1:!1,dialogIsVisible:!1,img:"",comment:"",images:[],index:null,visible:!1,host:this.$store.state.host}},created:function(){var t=this;this.images=this.screenshots.map((function(s){return{_id:s._id,title:s.comment,path:s.path,url:"".concat(t.host).concat(s.path.replace("public","").replace("\\","/")),thumb:s.screenshot}})),console.log(this.images)},filters:{img:function(t){return t.replace("./public","")}},methods:{edit:function(t,e,o,path){var n={id:t,comment:e,screenshot:o,path:path};localStorage.setItem("serverSetupId",JSON.stringify(n)),this.$router.push("/edit-server-setup")}},computed:{path2:function(){return this.images[0].path.replace("./public/","")},customer:function(){var t=this;return this.$store.state.customers.filter((function(e){return e._id===t.$route.params.customer}))},screenshots:function(){return this.customer[0].serverSetup}}},r=(o(298),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("one-section",[o("h3",[t._v("Server Setup")]),t._v(" "),o("client-only",[o("LightGallery",{attrs:{images:t.images,index:t.index,"disable-scroll":!0},on:{close:function(e){t.index=null}}})],1),t._v(" "),o("div",{staticClass:"thumbs"},t._l(t.images,(function(e,n){return o("div",{key:n},[o("a",{attrs:{href:"#"},on:{click:function(e){t.index=n}}},[o("img",{attrs:{src:""+e.url,width:"100px"}})]),t._v(" "),o("span",[t._v(t._s(e.title))]),t._v(" "),o("button",{key:e._id,on:{click:function(o){return t.edit(e._id,e.title,e.thumb,e.path)}}},[t._v("\n        Edit\n      ")])])})),0),t._v(" "),o("nuxt-link",{attrs:{to:"/add-server-setup"}},[o("Plus")],1)],1)}),[],!1,null,"3825e320",null);e.default=component.exports;installComponents(component,{Button:o(251).default,OneSection:o(271).default})}}]);