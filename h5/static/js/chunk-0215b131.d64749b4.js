(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0215b131"],{"324f":function(t,s,a){"use strict";a("cb6d")},"77b8":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("section",{staticClass:"header"},[a("van-nav-bar",{attrs:{title:"调剂审核","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}})],1),a("section",{staticClass:"search-form"},[a("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词"},on:{search:t.onSearch,cancel:t.onCancel},scopedSlots:t._u([{key:"action",fn:function(){return[a("div",{on:{click:t.openPopUp}},[t._v("过滤")])]},proxy:!0}]),model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1),a("section",{staticClass:"main"},[a("div",{staticClass:"tab-wrap mt-8"},t._l(t.tabList,(function(s,e){return a("div",{key:e,on:{click:function(a){return t.changeTab(s)}}},[a("span",{class:{active:s.type===t.currentType}},[t._v(t._s(s.label))])])})),0),a("div",{staticClass:"list-item-wrap"},t._l(t.tabList,(function(s,e){return a("div",{key:e,staticClass:"list-item",class:{"mt-8":0!==e}},[t._m(0,!0),t._m(1,!0),t._m(2,!0),t._m(3,!0),t._m(4,!0)])})),0)]),a("van-popup",{ref:"popup",attrs:{position:"right",closeable:""},model:{value:t.filterShow,callback:function(s){t.filterShow=s},expression:"filterShow"}},[a("div",{staticClass:"filter-container"},[a("header",{staticClass:"filter-header"},[a("span",[t._v("筛选")])]),a("section",{staticClass:"project-wrap"},[a("p",[t._v("产品")]),a("div",{staticClass:"project-list mt-8"},t._l(t.projectList,(function(s,e){return a("span",{key:e,staticClass:"project-item",class:{active:s.type===t.currentProjectType}},[t._v(t._s(s.label))])})),0)])])])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item"},[a("div",{staticClass:"item-left order-num"},[t._v("销售订单号：0600168114")]),a("div",{staticClass:"item-right"},[a("span",{staticClass:"order-status"},[t._v("更换基地")]),a("span",{staticClass:"enter-icon"},[t._v("enter")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item mt-8"},[a("div",{staticClass:"company-name"},[t._v("广州天力建筑工程有限公司 2020111111")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item mt-8"},[a("div",{staticClass:"item-left"},[a("span",{staticClass:"label"},[t._v("产品组：")]),a("span",{staticClass:"value"},[t._v("塔机")])]),a("div",{staticClass:"item-right"},[a("span",{staticClass:"label"},[t._v("设备型号：")]),a("span",{staticClass:"value"},[t._v("TC5610A")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item mt-8"},[a("div",{staticClass:"item-left"},[a("span",{staticClass:"label"},[t._v("非标号：")]),a("span",{staticClass:"value"},[t._v("塔机")])]),a("div",{staticClass:"item-right"},[a("span",{staticClass:"label"},[t._v("所属大区：")]),a("span",{staticClass:"value"},[t._v("华南大区")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"item mt-8"},[a("div",{staticClass:"item-left"},[a("span",{staticClass:"label"},[t._v("基地：")]),a("span",{staticClass:"value"},[t._v("渭南基地")])]),a("div",{staticClass:"item-right"},[a("span",{staticClass:"label"},[t._v("申请通过日期：")]),a("span",{staticClass:"value"},[t._v("2021-02-08")])])])}],l=a("d399"),c={name:"Home",data:function(){return{value:"",filterShow:!1,currentType:0,tabList:[{type:0,label:"未审核"},{type:1,label:"已审核"}],projectList:[{type:0,label:"全部产品"},{type:1,label:"塔机"},{type:2,label:"三代升降机"},{type:3,label:"四代升降机"}],currentProjectType:1}},methods:{changeTab:function(t){this.currentType=t.type},onSearch:function(t){Object(l["a"])(t)},onCancel:function(){Object(l["a"])("取消")},onClickLeft:function(){Object(l["a"])("返回")},openPopUp:function(){this.filterShow=!0},closePopUp:function(){this.filterShow=!1}}},n=c,r=(a("324f"),a("2877")),o=Object(r["a"])(n,e,i,!1,null,"bea55e68",null);s["default"]=o.exports},cb6d:function(t,s,a){}}]);