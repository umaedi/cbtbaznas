import{L as y}from"./Admin.1868bb41.js";import{P as g}from"./Pagination.a0f76a80.js";import{H as S,L as B,m as C,a as r,o as _,c as h,b as d,w as i,d as t,e as b,f as L,v as A,F as f,p as N,h as p,t as o,i as v}from"./app.0569614b.js";import{S as w}from"./sweetalert2.all.481941ef.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";const D={layout:y,components:{Head:S,Link:B,Pagination:g},props:{students:Object},setup(){const l=C(new URL(document.location).searchParams.get("q"));return{search:l,handleSearch:()=>{p.Inertia.get("/admin/students",{q:l.value})},destroy:e=>{w.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(m=>{m.isConfirmed&&(p.Inertia.delete(`/admin/students/${e}`),w.fire({title:"Deleted!",text:"Siswa Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},H=t("title",null,"Siswa - Aplikasi Ujian Online",-1),I={class:"container-fluid mb-5 mt-5"},T={class:"row"},V={class:"col-md-8"},U={class:"row"},j={class:"col-md-5 col-12 mb-2"},q={class:"row"},F={class:"col-md-6 col-12 mb-2"},K=t("i",{class:"fa fa-plus-circle"},null,-1),M=v(" Tambah"),O={class:"col-md-6 col-12 mb-2"},E=t("i",{class:"fa fa-file-excel"},null,-1),J=v(" Import"),R={class:"col-md-7 col-12 mb-2"},Y={class:"input-group"},z=t("span",{class:"input-group-text border-0 shadow"},[t("i",{class:"fa fa-search"})],-1),G={class:"row mt-1"},Q={class:"col-md-12"},W={class:"card border-0 shadow"},X={class:"card-body"},Z={class:"table-responsive"},$={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},tt=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),t("th",{class:"border-0"},"Nisn"),t("th",{class:"border-0"},"Nama"),t("th",{class:"border-0"},"Kelas"),t("th",{class:"border-0"},"Jenis Kelamin"),t("th",{class:"border-0"},"Password"),t("th",{class:"border-0 rounded-end",style:{width:"15%"}},"Aksi")])],-1),st=t("div",{class:"mt-2"},null,-1),et={class:"fw-bold text-center"},ot={class:"text-center"},nt={class:"text-center"},at={class:"text-center"},dt=t("i",{class:"fa fa-pencil-alt"},null,-1),it=["onClick"],lt=t("i",{class:"fa fa-trash"},null,-1),ct=[lt];function rt(l,n,a,e,m,_t){const k=r("Head"),c=r("Link"),x=r("Pagination");return _(),h(f,null,[d(k,null,{default:i(()=>[H]),_:1}),t("div",I,[t("div",T,[t("div",V,[t("div",U,[t("div",j,[t("div",q,[t("div",F,[d(c,{href:"/admin/students/create",class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:i(()=>[K,M]),_:1})]),t("div",O,[d(c,{href:"/admin/students/import",class:"btn btn-md btn-success border-0 shadow w-100 text-white",type:"button"},{default:i(()=>[E,J]),_:1})])])]),t("div",R,[t("form",{onSubmit:n[1]||(n[1]=b((...s)=>e.handleSearch&&e.handleSearch(...s),["prevent"]))},[t("div",Y,[L(t("input",{type:"text",class:"form-control border-0 shadow","onUpdate:modelValue":n[0]||(n[0]=s=>e.search=s),placeholder:"masukkan kata kunci dan enter..."},null,512),[[A,e.search]]),z])],32)])])])]),t("div",G,[t("div",Q,[t("div",W,[t("div",X,[t("div",Z,[t("table",$,[tt,st,t("tbody",null,[(_(!0),h(f,null,N(a.students.data,(s,u)=>(_(),h("tr",{key:u},[t("td",et,o(++u+(a.students.current_page-1)*a.students.per_page),1),t("td",null,o(s.nisn),1),t("td",null,o(s.name),1),t("td",ot,o(s.classroom.title),1),t("td",nt,o(s.gender),1),t("td",null,o(s.password),1),t("td",at,[d(c,{href:`/admin/students/${s.id}/edit`,class:"btn btn-sm btn-info border-0 shadow me-2",type:"button"},{default:i(()=>[dt]),_:2},1032,["href"]),t("button",{onClick:b(ht=>e.destroy(s.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},ct,8,it)])]))),128))])])]),d(x,{links:a.students.links,align:"end"},null,8,["links"])])])])])])],64)}const wt=P(D,[["render",rt]]);export{wt as default};
