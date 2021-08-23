(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7403cc80"],{"0e8f":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return c}));n("99af");var r=n("b775"),i="",a=function(){return Object(r["c"])("".concat(i,"/api-user/department/findAll"))},o=function(e){return Object(r["b"])("".concat(i,"/api-user/department/").concat(e))};function s(e){return Object(r["a"])({url:"".concat(i,"/api-user/department/saveOrUpdate"),method:"post",isJson:!0,data:JSON.stringify(e)})}var c=function(e){return Object(r["c"])("".concat(i,"/api-user/department/editName"),e)}},7331:function(e,t,n){"use strict";n("9af9")},"7f74":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("el-row",[n("el-col",{attrs:{span:10}},[n("p",{staticClass:"header-title"},[e._v("部门结构")]),n("el-tree",{ref:"tree",staticStyle:{"min-height":"300px"},attrs:{data:e.data,props:e.defaultProps,"default-expand-all":"","node-key":"id",accordion:"","highlight-current":""},on:{"node-click":e.handleNodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node,i=t.data;return n("span",{staticClass:"custom-tree-node"},[n("span",[e._v(e._s(r.label))]),i&&0!==i.id?n("span",[n("el-button",{attrs:{type:"text",icon:"el-icon-circle-plus-outline"},on:{click:function(t){return t.stopPropagation(),e.appendDepartment(i)}}}),n("el-button",{attrs:{type:"text",icon:"el-icon-edit-outline"},on:{click:function(t){return t.stopPropagation(),e.update(i)}}}),n("el-button",{staticStyle:{color:"red"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){return t.stopPropagation(),e.removeDepartment(r,i)}}})],1):n("span",[n("el-button",{attrs:{type:"text",icon:"el-icon-circle-plus-outline"},on:{click:function(t){return t.stopPropagation(),e.appendDepartment(i,1)}}})],1)])}}])})],1)],1),n("el-dialog",{attrs:{title:e.modalTreeOption.title,visible:e.modalTreeOption.show,width:"30%",center:"","destroy-on-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){return e.$set(e.modalTreeOption,"show",t)}}},[n("el-form",{ref:"editTreeForm",attrs:{size:"small",model:e.editTreeForm,rules:e.editTreeFormRules,"label-width":"120px","label-position":"left"}},[n("el-form-item",{attrs:{label:"名称",prop:"name"}},[n("el-input",{attrs:{placeholder:"部门名称",maxlength:10},model:{value:e.editTreeForm.name,callback:function(t){e.$set(e.editTreeForm,"name",t)},expression:"editTreeForm.name"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.handleCancelClick}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.handleConfirmClick}},[e._v("确认")])],1)],1)],1)},i=[],a=(n("b0c0"),n("0e8f")),o={name:"DepartmentManagement",data:function(){return{defaultProps:{children:"subs",label:"name"},data:[],modalTreeOption:{title:"",show:!1},editTreeForm:{name:"",parentId:""},editTreeFormRules:{name:[{required:!0,message:"请输入部门",trigger:"blur"}]},parentOrgName:"",currentValue:null}},mounted:function(){this.init()},methods:{init:function(){var e=this;Object(a["c"])().then((function(t){e.loading=!1,e.data=[{subs:t,id:0,name:"部门"}]})).catch((function(){}))},handleNodeClick:function(e){this.currentValue=e},appendDepartment:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.editTreeForm.name="",this.editTreeForm.parentId=1===t?-1:e.id,this.modalTreeOption.title="新增部门",this.modalTreeOption.show=!0},update:function(e){this.editTreeForm={id:e.id,name:e.name,parentId:e.parentId},this.modalTreeOption.title="编辑部门名称",this.modalTreeOption.show=!0},handleCancelClick:function(){this.$refs["editTreeForm"].resetFields(),this.editTreeForm.id="",this.editTreeForm.name="",this.editTreeForm.parentId="",this.modalTreeOption.show=!1},handleConfirmClick:function(){var e=this;this.$refs.editTreeForm.validate((function(t){if(t)if("新增部门"===e.modalTreeOption.title){var n={parentId:e.editTreeForm.parentId,name:e.editTreeForm.name};Object(a["a"])(n).then((function(t){0===t.resp_code?(e.init(),e.handleCancelClick(),e.$message({type:"success",message:"添加成功!"})):e.$message({type:"error",message:t.resp_msg})})).catch((function(){}))}else{var r={departmentId:e.editTreeForm.id,newName:e.editTreeForm.name};Object(a["d"])(r).then((function(t){0===t.resp_code?(e.$message({type:"success",message:"更新成功!"}),e.init(),e.handleCancelClick()):e.$message({type:"error",message:t.resp_msg})})).catch((function(){}))}}))},removeDepartment:function(e,t){var n=this;this.$confirm("是否删除该部门？","Confirmation",{cancelButtonText:"取消",confirmButtonText:"确认",type:"warning"}).then((function(){Object(a["b"])(t.id).then((function(e){0===e.resp_code?(n.$message({type:"success",message:"删除成功!"}),n.init(),n.currentValue=null):n.$message({type:"error",message:e.resp_msg})})).catch((function(){}))}))}}},s=o,c=(n("7331"),n("2877")),l=Object(c["a"])(s,r,i,!1,null,"346cab1a",null);t["default"]=l.exports},"9af9":function(e,t,n){}}]);