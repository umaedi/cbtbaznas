import{L as V}from"./Admin.1868bb41.js";import{H as p,L as N,r as j,a as u,o as a,c as i,b as h,w as f,d as s,e as x,f as _,v,t as r,g as d,s as c,F as b,p as w,h as S,i as k}from"./app.0569614b.js";import{S as M}from"./sweetalert2.all.481941ef.js";import{E as q}from"./Editor.c4db024e.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const A={layout:V,components:{Head:p,Link:N,Editor:q},props:{errors:Object,lessons:Array,classrooms:Array},setup(){const l=j({title:"",lesson_id:"",classroom_id:"",duration:"",description:"",random_question:"",random_answer:"",show_answer:""});return{form:l,submit:()=>{S.Inertia.post("/admin/exams",{title:l.title,lesson_id:l.lesson_id,classroom_id:l.classroom_id,duration:l.duration,description:l.description,random_question:l.random_question,random_answer:l.random_answer,show_answer:l.show_answer},{onSuccess:()=>{M.fire({title:"Success!",text:"Ujian Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},D=s("title",null,"Tambah Ujian - Aplikasi Ujian Online",-1),Y={class:"container-fluid mb-5 mt-5"},B={class:"row"},C={class:"col-md-12"},E=s("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),H=k(" Kembali"),T={class:"card border-0 shadow"},F={class:"card-body"},K=s("h5",null,[s("i",{class:"fa fa-edit"}),k(" Tambah Ujian")],-1),O=s("hr",null,null,-1),I={class:"mb-4"},J=s("label",null,"Nama Ujian",-1),P={key:0,class:"alert alert-danger mt-2"},R={class:"row"},z={class:"col-md-6"},G={class:"mb-4"},Q=s("label",null,"Mata Pelajaran",-1),W=["value"],X={key:0,class:"alert alert-danger mt-2"},Z={class:"col-md-6"},$={class:"mb-4"},ss=s("label",null,"Kelas",-1),os=["value"],ts={key:0,class:"alert alert-danger mt-2"},es={class:"mb-4"},ns=s("label",null,"Deskripsi",-1),as={key:0,class:"alert alert-danger mt-2"},is={class:"row"},ls={class:"col-md-6"},rs={class:"mb-4"},ds=s("label",null,"Acak Soal",-1),_s=s("option",{value:"Y"},"Y",-1),cs=s("option",{value:"N"},"N",-1),ms=[_s,cs],us={key:0,class:"alert alert-danger mt-2"},hs={class:"col-md-6"},bs={class:"mb-4"},fs=s("label",null,"Acak Jawaban",-1),vs=s("option",{value:"Y"},"Y",-1),ws=s("option",{value:"N"},"N",-1),ks=[vs,ws],ys={key:0,class:"alert alert-danger mt-2"},gs={class:"row"},Us={class:"col-md-6"},Vs={class:"mb-4"},ps=s("label",null,"Tampilkan Hasil",-1),Ns=s("option",{value:"Y"},"Y",-1),js=s("option",{value:"N"},"N",-1),xs=[Ns,js],Ss={key:0,class:"alert alert-danger mt-2"},Ms={class:"col-md-6"},qs={class:"mb-4"},Ls=s("label",null,"Durasi (Menit)",-1),As={key:0,class:"alert alert-danger mt-2"},Ds=s("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),Ys=s("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function Bs(l,t,e,n,Cs,Es){const y=u("Head"),g=u("Link"),U=u("Editor");return a(),i(b,null,[h(y,null,{default:f(()=>[D]),_:1}),s("div",Y,[s("div",B,[s("div",C,[h(g,{href:"/admin/exams",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:f(()=>[E,H]),_:1}),s("div",T,[s("div",F,[K,O,s("form",{onSubmit:t[8]||(t[8]=x((...o)=>n.submit&&n.submit(...o),["prevent"]))},[s("div",I,[J,_(s("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Ujian","onUpdate:modelValue":t[0]||(t[0]=o=>n.form.title=o)},null,512),[[v,n.form.title]]),e.errors.title?(a(),i("div",P,r(e.errors.title),1)):d("",!0)]),s("div",R,[s("div",z,[s("div",G,[Q,_(s("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=o=>n.form.lesson_id=o)},[(a(!0),i(b,null,w(e.lessons,(o,m)=>(a(),i("option",{key:m,value:o.id},r(o.title),9,W))),128))],512),[[c,n.form.lesson_id]]),e.errors.lesson_id?(a(),i("div",X,r(e.errors.lesson_id),1)):d("",!0)])]),s("div",Z,[s("div",$,[ss,_(s("select",{class:"form-select","onUpdate:modelValue":t[2]||(t[2]=o=>n.form.classroom_id=o)},[(a(!0),i(b,null,w(e.classrooms,(o,m)=>(a(),i("option",{key:m,value:o.id},r(o.title),9,os))),128))],512),[[c,n.form.classroom_id]]),e.errors.classroom_id?(a(),i("div",ts,r(e.errors.classroom_id),1)):d("",!0)])])]),s("div",es,[ns,h(U,{"api-key":"no-api-key",modelValue:n.form.description,"onUpdate:modelValue":t[3]||(t[3]=o=>n.form.description=o),init:{menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"]),e.errors.description?(a(),i("div",as,r(e.errors.description),1)):d("",!0)]),s("div",is,[s("div",ls,[s("div",rs,[ds,_(s("select",{class:"form-select","onUpdate:modelValue":t[4]||(t[4]=o=>n.form.random_question=o)},ms,512),[[c,n.form.random_question]]),e.errors.random_question?(a(),i("div",us,r(e.errors.random_question),1)):d("",!0)])]),s("div",hs,[s("div",bs,[fs,_(s("select",{class:"form-select","onUpdate:modelValue":t[5]||(t[5]=o=>n.form.random_answer=o)},ks,512),[[c,n.form.random_answer]]),e.errors.random_answer?(a(),i("div",ys,r(e.errors.random_answer),1)):d("",!0)])])]),s("div",gs,[s("div",Us,[s("div",Vs,[ps,_(s("select",{class:"form-select","onUpdate:modelValue":t[6]||(t[6]=o=>n.form.show_answer=o)},xs,512),[[c,n.form.show_answer]]),e.errors.show_answer?(a(),i("div",Ss,r(e.errors.show_answer),1)):d("",!0)])]),s("div",Ms,[s("div",qs,[Ls,_(s("input",{type:"number",min:"1",class:"form-control",placeholder:"Masukkan Durasi Ujian (Menit)","onUpdate:modelValue":t[7]||(t[7]=o=>n.form.duration=o)},null,512),[[v,n.form.duration]]),e.errors.duration?(a(),i("div",As,r(e.errors.duration),1)):d("",!0)])])]),Ds,Ys],32)])])])])])],64)}const Is=L(A,[["render",Bs]]);export{Is as default};
