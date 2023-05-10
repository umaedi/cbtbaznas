import{L as h}from"./Admin.1868bb41.js";import{H as p,L as w,r as y,a as d,o as r,c as i,b as c,w as m,d as t,e as v,t as _,g as u,F as x,h as g,i as l}from"./app.0569614b.js";import{S as k}from"./sweetalert2.all.481941ef.js";import{_ as S}from"./_plugin-vue_export-helper.cdc0426e.js";const I={layout:h,components:{Head:p,Link:w},props:{errors:Object},setup(){const o=y({file:""});return{form:o,submit:()=>{g.Inertia.post("/admin/students/import",{file:o.file},{onSuccess:()=>{k.fire({title:"Success!",text:"Import Siswa Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},L=t("title",null,"Import Siswa - Aplikasi Ujian Online",-1),B={class:"container-fluid mb-5 mt-5"},C={class:"row"},F={class:"col-md-12"},H=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),N=l(" Kembali"),V=t("a",{href:"/assets/excel/students.xls",target:"_blank",class:"btn btn-md btn-success border-0 shadow mb-3 text-white",type:"button"},[t("i",{class:"fa fa-file-excel me-2"}),l(" Contoh Format")],-1),j={class:"card border-0 shadow"},A={class:"card-body"},D=t("h5",null,[t("i",{class:"fa fa-user"}),l(" Import Siswa")],-1),E=t("hr",null,null,-1),O={class:"mb-4"},U=t("label",null,"File Excel",-1),K={key:0,class:"alert alert-danger mt-2"},M={key:1,class:"alert alert-danger mt-2"},R=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Upload",-1),T=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function q(o,s,e,n,z,G){const f=d("Head"),b=d("Link");return r(),i(x,null,[c(f,null,{default:m(()=>[L]),_:1}),t("div",B,[t("div",C,[t("div",F,[c(b,{href:"/admin/students",class:"btn btn-md btn-primary border-0 shadow mb-3 me-3",type:"button"},{default:m(()=>[H,N]),_:1}),V,t("div",j,[t("div",A,[D,E,t("form",{onSubmit:s[1]||(s[1]=v((...a)=>n.submit&&n.submit(...a),["prevent"]))},[t("div",O,[U,t("input",{type:"file",class:"form-control",onInput:s[0]||(s[0]=a=>n.form.file=a.target.files[0])},null,32),e.errors.file?(r(),i("div",K,_(e.errors.file),1)):u("",!0),e.errors[0]?(r(),i("div",M,_(e.errors[0]),1)):u("",!0)]),R,T],32)])])])])])],64)}const X=S(I,[["render",q]]);export{X as default};
