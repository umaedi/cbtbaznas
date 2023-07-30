import{L as x}from"./Student.d4b8ae65.js";import{L as p,a as c,o as s,c as o,b as l,w as _,d as e,t as n,F as u,p as w,i as d,g as m}from"./app.eb3979ba.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";const f={layout:x,components:{Link:p},props:{exam_groups:Array,auth:Object},setup(a){window.onfocus=function(){window.location.href="/student/logout/"+a.auth.student.id}}},k=e("title",null,"Dashboard Siswa - Aplikasi Ujian Online",-1),v={class:"row"},y={class:"col-md-12"},j={class:"alert alert-success border-0 shadow"},L=d(" Selamat Datang "),S={key:0,class:"row"},C={class:"card border-0 shadow"},T={class:"card-body"},B=e("hr",null,null,-1),D={class:"table-responsive"},N={class:"table table-centered table-nowrap mb-0 rounded"},V=e("td",{class:"fw-bold"},"Mata Pelajaran",-1),K=e("td",{class:"fw-bold"},"Kelas",-1),M=e("td",{class:"fw-bold"},"Sesi",-1),$=e("td",{class:"fw-bold"},"Mulai",-1),A=e("td",{class:"fw-bold"},"Selesai",-1),E={key:0},F={key:0},H={key:0},O=d("Kerjakan"),I={key:1},P=d("Lanjut Kerjakan"),R={key:1},U={key:0},W=e("button",{class:"btn btn-md btn-gray-700 border-0 shadow w-100 mt-2",disabled:""}," Belum Mulai ",-1),q=[W],z={key:1},G=e("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""}," Waktu Terlewat ",-1),J=[G],Q={key:1},X=e("button",{class:"btn btn-md btn-danger border-0 shadow w-100 mt-2",disabled:""}," Sudah Dikerjakan ",-1),Y=[X],Z={key:1,class:"row"},ee=e("div",{class:"col-md-12"},[e("div",{class:"alert alert-danger border-0 shadow"},[e("i",{class:"fa fa-info-circle"}),d(" Tidak ada ujian yang tersedia ")])],-1),te=[ee];function se(a,oe,i,ne,ae,de){const h=c("Head"),r=c("Link");return s(),o(u,null,[l(h,null,{default:_(()=>[k]),_:1}),e("div",v,[e("div",y,[e("div",j,[L,e("strong",null,n(i.auth.student.name),1)])])]),i.exam_groups.length>0?(s(),o("div",S,[(s(!0),o(u,null,w(i.exam_groups,(t,b)=>(s(),o("div",{class:"col-md-6",key:b},[e("div",C,[e("div",T,[e("h5",null,n(t.exam_group.exam.title),1),B,e("div",D,[e("table",N,[e("thead",null,[e("tr",null,[V,e("td",null,n(t.exam_group.exam.lesson.title),1)]),e("tr",null,[K,e("td",null,n(t.exam_group.student.classroom.title),1)]),e("tr",null,[M,e("td",null,n(t.exam_group.exam_session.title),1)]),e("tr",null,[$,e("td",null,n(t.exam_group.exam_session.start_time),1)]),e("tr",null,[A,e("td",null,n(t.exam_group.exam_session.end_time),1)])])])]),t.grade.end_time==null?(s(),o("div",E,[a.examTimeRangeChecker(t.exam_group.exam_session.start_time,t.exam_group.exam_session.end_time)?(s(),o("div",F,[t.grade.start_time==null?(s(),o("div",H,[l(r,{href:`/student/exam-confirmation/${t.exam_group.id}`,class:"btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"},{default:_(()=>[O]),_:2},1032,["href"])])):(s(),o("div",I,[l(r,{href:`/student/exam/${t.exam_group.id}/1`,class:"btn btn-md btn-info border-0 shadow w-100 mt-2"},{default:_(()=>[P]),_:2},1032,["href"])]))])):(s(),o("div",R,[a.examTimeStartChecker(t.exam_group.exam_session.start_time)?(s(),o("div",U,q)):m("",!0),a.examTimeEndChecker(t.exam_group.exam_session.end_time)?(s(),o("div",z,J)):m("",!0)]))])):(s(),o("div",Q,Y))])])]))),128))])):(s(),o("div",Z,te))],64)}const re=g(f,[["render",se]]);export{re as default};