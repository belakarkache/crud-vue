(function(e){function t(t){for(var r,i,o=t[0],l=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(f.length)f.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},a={app:0},n=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="crud-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"15ad":function(e,t,s){"use strict";s("92c5")},4294:function(e,t){e.exports="data:image/png;base64,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"},5452:function(e,t,s){"use strict";s("af35")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-row",[s("el-col",{attrs:{md:7,lg:7,xl:5}},[s("AddUser")],1),s("el-col",{attrs:{md:17,lg:17,xl:19}},[s("el-row",{staticClass:"pb"},[s("el-col",{attrs:{span:12}},[s("Header")],1),s("el-col",{staticClass:"search-col",attrs:{span:12}},[s("div",{staticClass:"search"},[s("el-input",{attrs:{placeholder:"Busca","prefix-icon":"el-icon-search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)])],1),s("DisplayUsers",{attrs:{users:e.users,search:e.search}})],1)],1)],1)},n=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"header__info"},[s("h1",{staticClass:"header__info-title"},[e._v("Users Dashboard")]),s("small",{staticClass:"header__info-subtitle"},[e._v(" Adicione novos usuários e visualize, edite e remova usuários cadastrados ")])])])}],l={name:"Header"},u=l,c=(s("5452"),s("2877")),d=Object(c["a"])(u,i,o,!1,null,null,null),f=d.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-user"},[r("div",{staticClass:"add-user__wrapper"},[r("el-form",{ref:"userInfo",attrs:{model:e.userInfo,rules:e.rules,"label-position":"top"}},[r("el-form-item",{staticClass:"avatar-form-item",attrs:{prop:"avatar"}},[r("el-popover",{attrs:{placement:"right",trigger:"click",width:"440"}},[r("el-row",{attrs:{gutter:10}},e._l(e.avatarList,(function(t){return r("el-col",{key:t.id,attrs:{span:4.5}},[r("img",{staticStyle:{cursor:"pointer"},attrs:{src:t.image,width:"80",height:"80"},on:{click:function(s){return e.setAvatarImage(t.image)}}})])})),1),r("el-avatar",{attrs:{slot:"reference",src:e.selectedAvatarImage?e.selectedAvatarImage:s("4294"),size:100},slot:"reference"})],1)],1),r("el-form-item",{attrs:{label:"Nome completo",prop:"name"}},[r("el-input",{attrs:{size:"small"},model:{value:e.userInfo.name,callback:function(t){e.$set(e.userInfo,"name",t)},expression:"userInfo.name"}})],1),r("el-form-item",{attrs:{label:"Data de nascimento",prop:"date"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",format:"dd/MM/yyyy",size:"small"},model:{value:e.userInfo.birthDate,callback:function(t){e.$set(e.userInfo,"birthDate",t)},expression:"userInfo.birthDate"}})],1),r("el-form-item",{attrs:{label:"E-mail",prop:"email"}},[r("el-input",{attrs:{size:"small"},model:{value:e.userInfo.email,callback:function(t){e.$set(e.userInfo,"email",t)},expression:"userInfo.email"}})],1),r("el-form-item",{attrs:{label:"País",prop:"country"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"",size:"small",filterable:""},model:{value:e.userInfo.country,callback:function(t){e.$set(e.userInfo,"country",t)},expression:"userInfo.country"}},e._l(e.countries,(function(e){return r("el-option",{key:e.id.M49,attrs:{label:e.nome,value:e.nome}})})),1)],1),"Brasil"===e.userInfo.country?r("el-form-item",{attrs:{label:"CEP",prop:"zipCode",size:"small"}},[r("el-input",{attrs:{"suffix-icon":e.loadingIcon,mask:"##.###-###"},on:{input:e.updateAddress},model:{value:e.userInfo.zipCode,callback:function(t){e.$set(e.userInfo,"zipCode",t)},expression:"userInfo.zipCode"}})],1):e._e(),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{label:"UF"}},[r("el-input",{attrs:{size:"small"},model:{value:e.userInfo.state,callback:function(t){e.$set(e.userInfo,"state",t)},expression:"userInfo.state"}})],1)],1),r("el-col",{attrs:{span:18}},[r("el-form-item",{attrs:{label:"Cidade",prop:"city"}},[r("el-input",{attrs:{size:"small"},model:{value:e.userInfo.city,callback:function(t){e.$set(e.userInfo,"city",t)},expression:"userInfo.city"}})],1)],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"Endereço",prop:"streetAddress"}},[r("el-input",{attrs:{size:"small"},model:{value:e.userInfo.streetAddress,callback:function(t){e.$set(e.userInfo,"streetAddress",t)},expression:"userInfo.streetAddress"}})],1)],1),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"Complemento",prop:"secondaryAddress"}},[r("el-input",{attrs:{size:"small"},model:{value:e.userInfo.secondaryAddress,callback:function(t){e.$set(e.userInfo,"secondaryAddress",t)},expression:"userInfo.secondaryAddress"}})],1)],1)],1),r("el-form-item",{attrs:{label:"Profissão",prop:"occupation"}},[r("el-input",{attrs:{size:"small"},model:{value:e.userInfo.occupation,callback:function(t){e.$set(e.userInfo,"occupation",t)},expression:"userInfo.occupation"}})],1),r("el-form-item",{staticClass:"el-form-item__buttons"},[e.isEdit?r("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.cancelEdit("userInfo")}}},[e._v(" Cancelar ")]):r("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.resetForm("userInfo")}}},[e._v(" Redefinir ")]),e.isEdit?r("el-button",{attrs:{type:"warning",size:"medium"},on:{click:function(t){return e.upUser("userInfo")}}},[e._v(" Atualizar usuário ")]):r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.addUser("userInfo")}}},[e._v(" Adicionar usuário ")])],1)],1)],1)])},m=[],v=(s("fb6a"),s("ac1f"),s("466d"),s("d3b7"),s("bc3a")),b=s.n(v),h=b.a.get("https://607b6bf967e6530017573145.mockapi.io/api/v1/users").then((function(e){return e.data})),A=b.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/paises").then((function(e){return e.data})),g=b.a.get("https://rickandmortyapi.com/api/character").then((function(e){return e.data})),y=function(e){return b.a.post("https://607b6bf967e6530017573145.mockapi.io/api/v1/users",e)},I=function(e){return b.a.delete("https://607b6bf967e6530017573145.mockapi.io/api/v1/users/".concat(e))},w=function(e,t){return b.a.put("https://607b6bf967e6530017573145.mockapi.io/api/v1/users/".concat(e),t)},C=new r["default"],k=C,D={name:"AddUser",props:["editInfo"],data:function(){return{userInfo:{avatar:"",name:"",birthDate:"",email:"",zipCode:"",city:"",state:"",country:"",streetAddress:"",secondaryAddress:"",occupation:"",brazilianResident:!1},rules:{name:[{required:!0,message:"Por favor, insira seu nome completo",trigger:"blur"}],email:[{type:"email",message:"Por favor, insira um e-mail válido",trigger:["blur","change"]}]},countries:[],states:[],avatarList:[],loading:!1,selectedAvatarImage:"",isEdit:!1}},computed:{loadingIcon:function(){return this.loading?"el-icon-loading":null}},mounted:function(){var e=this;A.then((function(t){return e.countries=t})),g.then((function(t){return e.avatarList=t.results.slice(0,20)})),k.$on("editUser",(function(t){e.userInfo=t,e.selectedAvatarImage=t.avatar,e.isEdit=!0}))},methods:{updateAddress:function(){var e=this,t=/^[0-9]{8}$/;this.userInfo.zipCode.match(t)&&"Brasil"===this.userInfo.country&&(this.loading=!0,b.a.get("https://viacep.com.br/ws/".concat(this.userInfo.zipCode,"/json/")).then((function(t){e.userInfo.city=t.data.localidade,e.userInfo.state=t.data.uf,e.userInfo.streetAddress=t.data.logradouro})).finally((function(){return e.loading=!1})))},addUser:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.userInfo.avatar=t.selectedAvatarImage,y(t.userInfo).then((function(){return k.$emit("updateList")})).finally((function(){t.$message({message:"Usuário adicionado com sucesso",type:"success"}),t.resetForm("userInfo")}))}))},resetForm:function(e){this.selectedAvatarImage="",this.userInfo.birthDate=null,this.$refs[e].resetFields()},setAvatarImage:function(e){this.selectedAvatarImage=e},cancelEdit:function(e){this.userInfo={avatar:"",name:"",birthDate:"",email:"",zipCode:"",city:"",state:"",country:"",streetAddress:"",secondaryAddress:"",occupation:"",brazilianResident:!1},this.isEdit=!1,this.selectedAvatarImage=null,this.$refs[e].resetFields(),k.$emit("updateList")},upUser:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.userInfo.avatar=t.selectedAvatarImage,w(t.userInfo.id,t.userInfo).then((function(){return k.$emit("updateList")})).finally((function(){t.$message({message:"Usuário atualizado com sucesso",type:"success"}),t.resetForm("userInfo"),t.isEdit=!1}))}))}}},x=D,_=(s("15ad"),Object(c["a"])(x,p,m,!1,null,null,null)),z=_.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"display-users"},[r("el-row",e._l(e.filteredUsers,(function(t,a){return r("el-col",{key:t.id,attrs:{md:8,lg:8,xl:6}},[r("div",{staticClass:"display-users__card"},[r("div",{staticClass:"user-info"},[r("el-col",{attrs:{span:6}},[r("el-avatar",{attrs:{src:t.avatar?t.avatar:s("4294"),size:55}})],1),r("el-col",{staticClass:"user-info__user",attrs:{span:18}},[r("h4",{staticClass:"user-info__name"},[e._v(e._s(t.name))]),r("div",{staticClass:"user-info__birth"},[r("label",[e._v("Data de nascimento")]),r("p",[e._v(e._s(e.formatDate(new Date(t.birthDate))))])])]),r("el-col",{attrs:{span:24}},[r("label",[e._v("E-mail")]),r("p",[e._v(e._s(t.email))]),r("label",[e._v("Localização")]),r("p",[e._v(" "+e._s(t.streetAddress)+" - "+e._s(t.secondaryAddress)+", "+e._s(t.city)+" - "+e._s(t.state)+". "+e._s(t.country)+" ")]),r("label",[e._v("Profissão")]),r("p",[e._v(" "+e._s(t.occupation)+" ")])])],1),r("div",{staticClass:"actions"},[r("el-button",{staticClass:"edit-button",attrs:{type:"warning",plain:""},on:{click:function(s){return e.emitEditUser(t)}}},[r("i",{staticClass:"el-icon-edit"})]),r("el-button",{staticClass:"delete-button",attrs:{type:"danger",plain:""},on:{click:function(s){return e.removeUser(t.id,a)}}},[r("i",{staticClass:"el-icon-delete"})])],1)])])})),1)],1)},O=[],P=(s("841c"),s("4de4"),s("159b"),s("07ac"),s("caad"),s("2532"),s("25f0"),s("a434"),s("b166")),M=s("49ef"),E={name:"DisplayUsers",props:["users","search"],computed:{filteredUsers:function(){var e=this;if(this.search){var t=[];return this.users.filter((function(s){Object.values(s).forEach((function(r){r.toString().toLowerCase().includes(e.search.toLowerCase())&&!t.includes(s)&&t.push(s)}))})),t}return this.users}},methods:{removeUser:function(e,t){var s=this;this.$confirm("Tem certeza que quer deletar o usuário?","Atenção",{confirmButtonText:"Deletar"}).then((function(){I(e).then((function(){s.users.splice(t,1)})).finally((function(){s.$message({message:"Usuário removido com sucesso",type:"success"}),k.$emit("updateList")}))}))},formatDate:function(e){return e&&Object(M["a"])(e)?Object(P["a"])(e,"dd/MM/yyyy"):e},emitEditUser:function(e){k.$emit("editUser",e)}}},F=E,B=(s("67d1"),Object(c["a"])(F,U,O,!1,null,null,null)),j=B.exports,L={name:"App",components:{Header:f,AddUser:z,DisplayUsers:j},data:function(){return{users:[],loading:!1,search:""}},methods:{loadUsers:function(){var e=this;h.then((function(t){e.users=t}))}},mounted:function(){var e=this;this.loadUsers(),k.$on("updateList",(function(){b.a.get("https://607b6bf967e6530017573145.mockapi.io/api/v1/users").then((function(t){e.users=t.data}))}))}},Y=L,R=(s("5c0b"),Object(c["a"])(Y,a,n,!1,null,null,null)),H=R.exports,K=s("5c96"),J=s.n(K),S=(s("7e7d"),s("05af")),V=s.n(S);r["default"].use(J.a,{locale:V.a}),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(H)}}).$mount("#app")},"5a12":function(e,t,s){},"5c0b":function(e,t,s){"use strict";s("9c0c")},"67d1":function(e,t,s){"use strict";s("5a12")},"7e7d":function(e,t,s){},"92c5":function(e,t,s){},"9c0c":function(e,t,s){},af35:function(e,t,s){}});
//# sourceMappingURL=app.4b98dfd1.js.map