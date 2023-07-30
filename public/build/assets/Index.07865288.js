import{L as x}from"./Admin.a483dc9a.js";import{P as y}from"./Pagination.68f11c89.js";import{H as S,L as B,m as C,a as c,o as _,c as h,b as l,w as i,d as t,e as f,f as L,v as j,F as p,p as A,h as w,t as e,i as m}from"./app.eb3979ba.js";import{S as k}from"./sweetalert2.all.2e4bbcc4.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";const U={layout:x,components:{Head:S,Link:B,Pagination:y},props:{exam_sessions:Object},setup(){const d=C(new URL(document.location).searchParams.get("q"));return{search:d,handleSearch:()=>{w.Inertia.get("/admin/exam_sessions",{q:d.value})},destroy:o=>{k.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(u=>{u.isConfirmed&&(w.Inertia.delete(`/admin/exam_sessions/${o}`),k.fire({title:"Deleted!",text:"Sesi Ujian Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},D=t("title",null,"Sesi Ujian - Aplikasi Ujian Online",-1),H={class:"container-fluid mb-5 mt-5"},N={class:"row"},T={class:"col-md-8"},V={class:"row"},I={class:"col-md-3 col-12 mb-2"},M=t("i",{class:"fa fa-plus-circle"},null,-1),q=m(" Tambah"),F={class:"col-md-9 col-12 mb-2"},O={class:"input-group"},E=t("span",{class:"input-group-text border-0 shadow"},[t("i",{class:"fa fa-search"})],-1),K={class:"row mt-1"},R={class:"col-md-12"},Y={class:"card border-0 shadow"},z={class:"card-body"},G={class:"table-responsive"},J={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},Q=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start",style:{width:"5%"}},"No."),t("th",{class:"border-0"},"Ujian"),t("th",{class:"border-0"},"Sesi"),t("th",{class:"border-0"},"Siswa"),t("th",{class:"border-0"},"Mulai"),t("th",{class:"border-0"},"Selesai"),t("th",{class:"border-0 rounded-end",style:{width:"15%"}},"Aksi")])],-1),W=t("div",{class:"mt-2"},null,-1),X={class:"fw-bold text-center"},Z={class:"fw-bold"},$={class:"mt-2"},tt=m("Kelas : "),st={class:"fw-bold"},et=m("Pelajaran : "),ot={class:"fw-bold"},at={class:"text-center"},nt={class:"text-center"},lt=t("i",{class:"fa fa-plus-circle"},null,-1),it=t("i",{class:"fa fa-pencil-alt"},null,-1),dt=["onClick"],rt=t("i",{class:"fa fa-trash"},null,-1),ct=[rt];function _t(d,a,n,o,u,ht){const v=c("Head"),r=c("Link"),g=c("Pagination");return _(),h(p,null,[l(v,null,{default:i(()=>[D]),_:1}),t("div",H,[t("div",N,[t("div",T,[t("div",V,[t("div",I,[l(r,{href:"/admin/exam_sessions/create",class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:i(()=>[M,q]),_:1})]),t("div",F,[t("form",{onSubmit:a[1]||(a[1]=f((...s)=>o.handleSearch&&o.handleSearch(...s),["prevent"]))},[t("div",O,[L(t("input",{type:"text",class:"form-control border-0 shadow","onUpdate:modelValue":a[0]||(a[0]=s=>o.search=s),placeholder:"masukkan kata kunci dan enter..."},null,512),[[j,o.search]]),E])],32)])])])]),t("div",K,[t("div",R,[t("div",Y,[t("div",z,[t("div",G,[t("table",J,[Q,W,t("tbody",null,[(_(!0),h(p,null,A(n.exam_sessions.data,(s,b)=>(_(),h("tr",{key:b},[t("td",X,e(++b+(n.exam_sessions.current_page-1)*n.exam_sessions.per_page),1),t("td",null,[t("strong",Z,e(s.exam.title),1),t("ul",$,[t("li",null,[tt,t("strong",st,e(s.exam.classroom.title),1)]),t("li",null,[et,t("strong",ot,e(s.exam.lesson.title),1)])])]),t("td",null,e(s.title),1),t("td",at,e(s.exam_groups.length),1),t("td",null,e(s.start_time),1),t("td",null,e(s.end_time),1),t("td",nt,[l(r,{href:`/admin/exam_sessions/${s.id}`,class:"btn btn-sm btn-primary border-0 shadow me-2",type:"button"},{default:i(()=>[lt]),_:2},1032,["href"]),l(r,{href:`/admin/exam_sessions/${s.id}/edit`,class:"btn btn-sm btn-info border-0 shadow me-2",type:"button"},{default:i(()=>[it]),_:2},1032,["href"]),t("button",{onClick:f(mt=>o.destroy(s.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},ct,8,dt)])]))),128))])])]),l(g,{links:n.exam_sessions.links,align:"end"},null,8,["links"])])])])])])],64)}const kt=P(U,[["render",_t]]);export{kt as default};