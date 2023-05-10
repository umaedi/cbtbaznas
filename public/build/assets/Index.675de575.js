import{L as x}from"./Admin.1868bb41.js";import{P as y}from"./Pagination.a0f76a80.js";import{H as g,L as B,m as C,a as c,o as h,c as _,b as n,w as i,d as t,e as b,f as S,v as L,F as f,p as j,h as p,t as d,i as A}from"./app.0569614b.js";import{S as k}from"./sweetalert2.all.481941ef.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";const U={layout:x,components:{Head:g,Link:B,Pagination:y},props:{exams:Object},setup(){const l=C(new URL(document.location).searchParams.get("q"));return{search:l,handleSearch:()=>{p.Inertia.get("/admin/exams",{q:l.value})},destroy:e=>{k.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(m=>{m.isConfirmed&&(p.Inertia.delete(`/admin/exams/${e}`),k.fire({title:"Deleted!",text:"Ujian Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},D=t("title",null,"Ujian - Aplikasi Ujian Online",-1),H={class:"container-fluid mb-5 mt-5"},N={class:"row"},T={class:"col-md-8"},V={class:"row"},q={class:"col-md-3 col-12 mb-2"},I=t("i",{class:"fa fa-plus-circle"},null,-1),F=A(" Tambah"),M={class:"col-md-9 col-12 mb-2"},O={class:"input-group"},E=t("span",{class:"input-group-text border-0 shadow"},[t("i",{class:"fa fa-search"})],-1),J={class:"row mt-1"},K={class:"col-md-12"},R={class:"card border-0 shadow"},Y={class:"card-body"},z={class:"table-responsive"},G={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},Q=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),t("th",{class:"border-0"},"Ujian"),t("th",{class:"border-0"},"Pelajaran"),t("th",{class:"border-0"},"Kelas"),t("th",{class:"border-0"},"Jumlah Soal"),t("th",{class:"border-0 rounded-end",style:{width:"15%"}},"Aksi")])],-1),W=t("div",{class:"mt-2"},null,-1),X={class:"fw-bold text-center"},Z={class:"text-center"},$={class:"text-center"},tt={class:"text-center"},st=t("i",{class:"fa fa-plus-circle"},null,-1),et=t("i",{class:"fa fa-pencil-alt"},null,-1),at=["onClick"],ot=t("i",{class:"fa fa-trash"},null,-1),nt=[ot];function dt(l,a,o,e,m,it){const w=c("Head"),r=c("Link"),v=c("Pagination");return h(),_(f,null,[n(w,null,{default:i(()=>[D]),_:1}),t("div",H,[t("div",N,[t("div",T,[t("div",V,[t("div",q,[n(r,{href:"/admin/exams/create",class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:i(()=>[I,F]),_:1})]),t("div",M,[t("form",{onSubmit:a[1]||(a[1]=b((...s)=>e.handleSearch&&e.handleSearch(...s),["prevent"]))},[t("div",O,[S(t("input",{type:"text",class:"form-control border-0 shadow","onUpdate:modelValue":a[0]||(a[0]=s=>e.search=s),placeholder:"masukkan kata kunci dan enter..."},null,512),[[L,e.search]]),E])],32)])])])]),t("div",J,[t("div",K,[t("div",R,[t("div",Y,[t("div",z,[t("table",G,[Q,W,t("tbody",null,[(h(!0),_(f,null,j(o.exams.data,(s,u)=>(h(),_("tr",{key:u},[t("td",X,d(++u+(o.exams.current_page-1)*o.exams.per_page),1),t("td",null,d(s.title),1),t("td",null,d(s.lesson.title),1),t("td",Z,d(s.classroom.title),1),t("td",$,d(s.questions.length),1),t("td",tt,[n(r,{href:`/admin/exams/${s.id}`,class:"btn btn-sm btn-primary border-0 shadow me-2",type:"button"},{default:i(()=>[st]),_:2},1032,["href"]),n(r,{href:`/admin/exams/${s.id}/edit`,class:"btn btn-sm btn-info border-0 shadow me-2",type:"button"},{default:i(()=>[et]),_:2},1032,["href"]),t("button",{onClick:b(lt=>e.destroy(s.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},nt,8,at)])]))),128))])])]),n(v,{links:o.exams.links,align:"end"},null,8,["links"])])])])])])],64)}const ut=P(U,[["render",dt]]);export{ut as default};
