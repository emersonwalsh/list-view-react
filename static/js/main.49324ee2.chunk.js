(this["webpackJsonplist-view-react"]=this["webpackJsonplist-view-react"]||[]).push([[0],{123:function(e,t,a){e.exports=a(171)},128:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(34),o=a(12),i=a(13),c=a(16),l=a(14),s=a(15),u=a(0),p=a.n(u),m=a(7),d=a.n(m),f=(a(128),a(129),a(42)),b={tasks:{"task-1":{id:"task-1",content:"AirBnB",ceo:"Brian",ceoEmail:"brian@gmail.com",lastContact:"01/01/2020",owner:"Spencer",priority:5},"task-2":{id:"task-2",content:"Stripe",ceo:"Patrick",ceoEmail:"patrick@gmail.com",lastContact:"01/01/2020",owner:"John",priority:1},"task-3":{id:"task-3",content:"SoFi",ceo:"Anthony",ceoEmail:"anthony@gmail.com",lastContact:"01/01/2020",owner:"Spencer",priority:0},"task-4":{id:"task-4",content:"Palantir",ceo:"Alex",ceoEmail:"alex@gmail.com",lastContact:"01/01/2020",owner:"Spencer",priority:3},"task-5":{id:"task-5",content:"Compass",ceo:"Robert",ceoEmail:"robert@gmail.com",lastContact:"01/01/2020",owner:"John",priority:0},"task-6":{id:"task-6",content:"Appnexus",ceo:"Brian",ceoEmail:"brian@gmail.com",lastContact:"01/01/2020",owner:"Spencer",priority:2},"task-7":{id:"task-7",content:"Box",ceo:"Dylan",ceoEmail:"dylan@gmail.com",lastContact:"01/01/2020",owner:"John",priority:1},"task-8":{id:"task-8",content:"DoorDash",ceo:"Tony",ceoEmail:"tony@gmail.com",lastContact:"01/01/2020",owner:"Spencer",priority:1},"task-9":{id:"task-9",content:"Houzz",ceo:"Adi",ceoEmail:"adi@gmail.com",lastContact:"01/01/2020",owner:"Spencer",priority:0},"task-10":{id:"task-10",content:"SnowFlake",ceo:"Frank",ceoEmail:"frank@gmail.com",lastContact:"01/01/2020",owner:"John",priority:3}},columns:{"column-1":{id:"column-1",title:"Of Interest",taskIds:["task-1","task-2","task-6","task-7","task-8","task-9"]},"column-2":{id:"column-2",title:"Due Dilligence",taskIds:["task-3","task-4"]},"column-3":{id:"column-3",title:"Portfolio",taskIds:["task-10"]},"column-4":{id:"column-4",title:"Pass",taskIds:["task-5"]}},columnOrder:["column-1","column-2","column-3","column-4"]},g=a(19),h=a(20),k=a(52),y=a(208),E=a(91),x=a.n(E),v=a(205),O=a(225),j=a(223),C=a(217),w=a(212),D=a(213),S=a(211),I=a(214),A=a(226),L=a(224),z=a(221),P=Object(v.a)((function(e){return{formControlHalf:{margin:e.spacing(1),width:"calc(50% - 16px)"},formControlFull:{margin:e.spacing(1),width:"calc(100% - 16px)"},selectEmpty:{marginTop:e.spacing(2)}}}));function B(){var e=p.a.useState(!1),t=Object(k.a)(e,2),a=t[0],n=t[1],r=P(),o=p.a.useState(""),i=Object(k.a)(o,2),c=i[0],l=i[1],s=function(){n(!1)};return p.a.createElement("div",null,p.a.createElement(y.a,{variant:"contained",color:"primary",style:{float:"right",right:"8px",top:"7px",backgroundColor:"#2684ff"},onClick:function(){n(!0)},startIcon:p.a.createElement(x.a,null)},"Add Deal"),p.a.createElement(j.a,{open:a,onClose:s,"aria-labelledby":"form-dialog-title"},p.a.createElement(S.a,{id:"form-dialog-title"},"Add a New Deal"),p.a.createElement(w.a,null,p.a.createElement(D.a,null,"Enter company information below."),p.a.createElement(I.a,{className:r.formControlFull},p.a.createElement(O.a,{autoFocus:!0,id:"company",label:"Company",type:"text"})),p.a.createElement(I.a,{className:r.formControlHalf},p.a.createElement(O.a,{id:"ceo-name",label:"CEO name",type:"text"})),p.a.createElement(I.a,{className:r.formControlHalf},p.a.createElement(O.a,{id:"ceo-email",label:"CEO email",type:"email"})),p.a.createElement(I.a,{className:r.formControlHalf},p.a.createElement(O.a,{id:"material-link",label:"One Drive Link",type:"url"})),p.a.createElement(I.a,{className:r.formControlHalf},p.a.createElement(A.a,null,"Deal POC"),p.a.createElement(z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:c,onChange:function(e){l(e.target.value)}},p.a.createElement(L.a,{value:1},"Spencer"),p.a.createElement(L.a,{value:2},"John")))),p.a.createElement(C.a,null,p.a.createElement(y.a,{onClick:s,color:"primary",style:{color:"#2684ff"}},"Cancel"),p.a.createElement(y.a,{onClick:function(){n(!1)},variant:"contained",color:"primary",style:{backgroundColor:"#2684ff"}},"Add"))))}function H(){var e=Object(g.a)(["\n    float: left;\n    line-height: 50px;\n    font-size: 1.7em;\n    padding-left: 8px;\n"]);return H=function(){return e},e}function F(){var e=Object(g.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 50px;\n    width: 100%;\n    background-color: white;\n    z-index: 2;\n    box-shadow: 0 3px 5px rgba(0,0,0,.09)    \n"]);return F=function(){return e},e}var J=h.a.div(F()),N=h.a.div(H());function T(){return p.a.createElement(J,null,p.a.createElement(N,null,"Deal Board"),p.a.createElement(B,null))}function M(){var e=Object(g.a)(["\n    line-height: 30px;\n    width: 15%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    color: white;\n"]);return M=function(){return e},e}function R(){var e=Object(g.a)(["\n    height: 30px;\n    width: calc(100% - 95px);\n    line-height: 30px;\n    display: flex;\n    justify-content: space-between;\n    padding-left: 50px;\n"]);return R=function(){return e},e}var V=h.a.div(R()),Y=h.a.div(M()),_=(p.a.Component,a(218)),q=a(102),G=a(94),K=a.n(G),Q=["Edit","Delete"];function U(){var e=p.a.useState(null),t=Object(k.a)(e,2),a=t[0],n=t[1],r=Boolean(a),o=function(e){n(null)};return p.a.createElement("div",null,p.a.createElement(_.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},style:{padding:"8px",backgroundColor:"white"},title:"More"},p.a.createElement(K.a,null)),p.a.createElement(q.a,{id:"long-menu",anchorEl:a,keepMounted:!0,open:r,onClose:o,PaperProps:{style:{width:130}}},Q.map((function(e){return p.a.createElement(L.a,{key:e,selected:""===e,onClick:o},e)}))))}var W=a(227),X=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{style:{padding:"5px 0"}},p.a.createElement(W.a,{style:{backgroundColor:"#79bb79",color:"white",height:"30px",width:"30px",fontSize:"14px"}},this.props.name.charAt(0)))}}]),t}(p.a.Component),Z=a(219),$=a(222),ee=a(95),te=a.n(ee),ae=a(96),ne=a.n(ae),re=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return p.a.createElement(Z.a,{display:"flex",flexDirection:"column",style:{paddingTop:"11px"}},p.a.createElement($.a,(e={name:"customized-empty",defaultValue:this.props.priority},Object(n.a)(e,"name",this.props.id),Object(n.a)(e,"max",3),Object(n.a)(e,"icon",p.a.createElement(te.a,{fontSize:"inherit"})),Object(n.a)(e,"emptyIcon",p.a.createElement(ne.a,{fontSize:"inherit"})),Object(n.a)(e,"size","small"),e)))}}]),t}(p.a.Component),oe=a(97),ie=a.n(oe),ce=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return p.a.createElement("div",null,p.a.createElement(_.a,{style:{backgroundColor:"white",padding:"8px"},onClick:function(){window.location.href="mailto:"+e.props.email},title:"Send email"},p.a.createElement(ie.a,null)),this.props.name)}}]),t}(p.a.Component),le=a(48),se=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={daysSinceLastContact:a.calculateDaysSinceLastContact()},a.resetLastContactDate=a.resetLastContactDate.bind(Object(le.a)(a)),a.calculateDaysSinceLastContact=a.calculateDaysSinceLastContact.bind(Object(le.a)(a)),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"resetLastContactDate",value:function(){var e;(e=new Date).getMonth(),e.getDate(),e.getFullYear();this.setState({daysSinceLastContact:0})}},{key:"calculateDaysSinceLastContact",value:function(){return function(e,t){var a=t.getTime()-e.getTime();return Math.ceil(a/864e5)}(new Date(this.props.lastContact),new Date)}},{key:"render",value:function(){return p.a.createElement("div",{style:{cursor:"pointer"},onClick:this.resetLastContactDate,title:"Click to reset"},this.state.daysSinceLastContact," days")}}]),t}(p.a.Component);function ue(){var e=Object(g.a)(["\n    width: 40px;\n    height: 40px;\n    background-color: #2684ff;\n    border-radius: 4px 0 0 4px;\n    margin-right: 8px;\n"]);return ue=function(){return e},e}function pe(){var e=Object(g.a)(["\n    border: ",";\n    border-radius: 4px;\n    margin-bottom: 8px;\n    background-color: ",";\n    display: flex;\n    box-shadow: ",";\n    height: 40px;\n"]);return pe=function(){return e},e}var me=h.a.div(pe(),(function(e){return e.isDragging,"1px solid #ecebeb"}),(function(e){return e.isDragging,"white"}),(function(e){return e.isDragging?"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)":"0 0 0px"})),de=h.a.div(ue()),fe=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t={width:"100%",lineHeight:"40px",display:"flex",justifyContent:"space-between"},a={width:"15%",textOverflow:"ellipsis",overflow:"hidden",backgroundColor:"white"},n={backgroundColor:"white",color:"#2684ff"};return p.a.createElement(f.b,{draggableId:this.props.task.id,index:this.props.index},(function(r,o){return p.a.createElement(me,Object.assign({},r.draggableProps,{ref:r.innerRef,isDragging:o.isDragging}),p.a.createElement(de,r.dragHandleProps),p.a.createElement("div",{style:t},p.a.createElement("div",{style:a},e.props.task.content),p.a.createElement("div",{style:a},p.a.createElement(ce,{name:e.props.task.ceo,email:e.props.task.ceoEmail})),p.a.createElement("div",{style:a},p.a.createElement(se,{lastContact:e.props.task.lastContact})),p.a.createElement("div",{style:a},p.a.createElement(X,{title:e.props.task.owner,name:e.props.task.owner})),p.a.createElement("div",{style:a},p.a.createElement("a",{style:n,href:"https://products.office.com/en-us/onedrive-for-business/online-cloud-storage",target:"_blank"},"Material")),p.a.createElement("div",{style:a},"Next Steps"),p.a.createElement("div",{style:a},p.a.createElement(re,{priority:e.props.task.priority,id:e.props.task.id})),p.a.createElement(U,null)))}))}}]),t}(p.a.Component);function be(){var e=Object(g.a)(["\n    padding: 8px 8px 0 8px;\n    flex-grow: 1;\n    min-height: 40px;\n    transition: background-color 0.1s ease 0s;\n"]);return be=function(){return e},e}function ge(){var e=Object(g.a)(["\n    padding: 8px;\n    color: #484850;\n    font-size: 1.2em;\n"]);return ge=function(){return e},e}function he(){var e=Object(g.a)(["\n    margin: 8px;\n    border-radius: 2px;\n    display: flex;\n    flex-direction: column;\n"]);return he=function(){return e},e}var ke=h.a.div(he()),ye=h.a.h3(ge()),Ee=h.a.div(be()),xe=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return p.a.createElement(ke,null,p.a.createElement(ye,null,this.props.column.title),p.a.createElement(f.c,{droppableId:this.props.column.id},(function(t,a){return p.a.createElement(Ee,Object.assign({ref:t.innerRef},t.droppableProps,{isDraggingOver:a.isDraggingOver}),e.props.tasks.map((function(e,t){return p.a.createElement(fe,{key:e.id,task:e,index:t})})),t.placeholder)})))}}]),t}(p.a.Component),ve=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state=b,a.onDragStart=function(){},a.onDragEnd=function(e){var t,o=e.destination,i=e.source,c=e.draggableId;if(o&&(o.droppableId!==i.droppableId||o.index!==i.index)){var l=a.state.columns[i.droppableId],s=a.state.columns[o.droppableId];if(l!==s){var u=Array.from(l.taskIds);u.splice(i.index,1);var p=Object(r.a)({},l,{taskIds:u}),m=Array.from(s.taskIds);m.splice(o.index,0,c);var d=Object(r.a)({},s,{taskIds:m}),f=Object(r.a)({},a.state,{columns:Object(r.a)({},a.state.columns,(t={},Object(n.a)(t,p.id,p),Object(n.a)(t,d.id,d),t))});a.setState(f)}else{var b=Array.from(l.taskIds);b.splice(i.index,1),b.splice(o.index,0,c);var g=Object(r.a)({},l,{taskIds:b}),h=Object(r.a)({},a.state,{columns:Object(r.a)({},a.state.columns,Object(n.a)({},g.id,g))});a.setState(h)}}},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return p.a.createElement(f.a,{onDragEnd:this.onDragEnd,onDragStart:this.onDragStart},p.a.createElement(T,null),p.a.createElement("div",{style:{position:"absolute",top:"50px",left:"25px",right:"25px",zIndex:"1"}},this.state.columnOrder.map((function(t){var a=e.state.columns[t],n=a.taskIds.map((function(t){return e.state.tasks[t]}));return p.a.createElement(xe,{key:a.id,column:a,tasks:n})}))))}}]),t}(p.a.Component);d.a.render(p.a.createElement(ve,null),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.49324ee2.chunk.js.map