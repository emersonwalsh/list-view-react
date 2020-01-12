(this["webpackJsonplist-view-react"]=this["webpackJsonplist-view-react"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n(12),o=n(7),i=n(8),c=n(10),s=n(9),l=n(11),d=n(0),u=n.n(d),p=n(15),m=n.n(p),f=(n(60),n(61),n(17)),b={tasks:{"task-1":{id:"task-1",content:"AirBnB",ceo:"Brian",days:24,owner:"Spencer"},"task-2":{id:"task-2",content:"Stripe",ceo:"Patrick",days:16,owner:"John"},"task-3":{id:"task-3",content:"SoFi",ceo:"Anthony",days:14,owner:"Spencer"},"task-4":{id:"task-4",content:"Palantir",ceo:"Alex",days:12,owner:"Spencer"},"task-5":{id:"task-5",content:"Compass",ceo:"Robert",days:3,owner:"John"},"task-6":{id:"task-6",content:"Appnexus",ceo:"Brian",days:1,owner:"Spencer"},"task-7":{id:"task-7",content:"Box",ceo:"Dylan",days:8,owner:"John"},"task-8":{id:"task-8",content:"DoorDash",ceo:"Tony",days:31,owner:"Spencer"},"task-9":{id:"task-9",content:"Houzz",ceo:"Adi",days:9,owner:"Spencer"},"task-10":{id:"task-10",content:"SnowFlake",ceo:"Frank",days:18,owner:"John"}},columns:{"column-1":{id:"column-1",title:"Of Interest",taskIds:["task-1","task-2","task-6","task-7","task-8","task-9"]},"column-2":{id:"column-2",title:"Due Dilligence",taskIds:["task-3","task-4"]},"column-3":{id:"column-3",title:"Portfolio",taskIds:["task-10"]},"column-4":{id:"column-4",title:"Pass",taskIds:["task-5"]}},columnOrder:["column-1","column-2","column-3","column-4"]},g=n(3),h=n(4);function k(){var e=Object(g.a)(["\n    float: right;\n    line-height: 50px;\n    padding-right: 8px;\n"]);return k=function(){return e},e}function v(){var e=Object(g.a)(["\n    float: left;\n    line-height: 50px;\n    font-size: 1.7em;\n    padding-left: 8px;\n"]);return v=function(){return e},e}function x(){var e=Object(g.a)(["\n    height: 50px;\n    width: 100%;\n"]);return x=function(){return e},e}var O=h.a.div(x()),y=h.a.div(v()),j=h.a.div(k()),E=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return u.a.createElement(O,null,u.a.createElement(y,null,"Deal Board"),u.a.createElement(j,null,u.a.createElement("input",{style:{borderRadius:"5px",border:"1px solid lightgrey",fontSize:"1em"},type:"text",placeholder:"Add Company..."})))}}]),t}(u.a.Component),w=n(47),I=n(52);function D(){var e=Object(g.a)(["\n    width: 30px;\n    border-radius: 0 4px 4px 0;\n    cursor: pointer;\n\t:hover {\n\t\tbackground-color: lightgrey;\n\t}\n"]);return D=function(){return e},e}function S(){var e=Object(g.a)(["\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    background-color: #17b317;\n    color: white;\n    margin: 5px 0;\n    text-align: center;\n    line-height: 20px;\n    cursor: default;\n"]);return S=function(){return e},e}function A(){var e=Object(g.a)(["\n    width: 30px;\n    height: 30px;\n    background-color: #FF3B3F;\n    border-radius: 4px 0 0 4px;\n    margin-right: 8px;\n"]);return A=function(){return e},e}function F(){var e=Object(g.a)(["\n    border: 1px solid lightgrey;\n    border-radius: 4px;\n    margin-bottom: 8px;\n    background-color: ",";\n    display: flex;\n"]);return F=function(){return e},e}var B=h.a.div(F(),(function(e){return e.isDragging?"#EFEFEF":"white"})),C=h.a.div(A()),P=h.a.div(S()),J=h.a.div(D()),z=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t={width:"100%",lineHeight:"30px",display:"flex",justifyContent:"space-between"},n={width:"20%",textOverflow:"ellipsis",overflow:"hidden"},a={paddingLeft:"12px"};return u.a.createElement(f.b,{draggableId:this.props.task.id,index:this.props.index},(function(r,o){return u.a.createElement(B,Object.assign({},r.draggableProps,{ref:r.innerRef,isDragging:o.isDragging}),u.a.createElement(C,r.dragHandleProps),u.a.createElement("div",{style:t},u.a.createElement("div",{style:n},e.props.task.content),u.a.createElement("div",{style:n},u.a.createElement("a",{href:"mailto:name@email.com"},e.props.task.ceo)),u.a.createElement("div",{style:n},e.props.task.days," days"),u.a.createElement("div",{style:n},u.a.createElement(P,{title:e.props.task.owner},e.props.task.owner.charAt(0))),u.a.createElement("div",{style:n},u.a.createElement("a",{href:"https://products.office.com/en-us/onedrive-for-business/online-cloud-storage",target:"_blank"},"Material")),u.a.createElement(J,null,u.a.createElement(w.a,{style:a,icon:I.a}))))}))}}]),t}(u.a.Component);function R(){var e=Object(g.a)(["\n    padding: 8px;\n    background-color: ",";\n    flex-grow: 1;\n    min-height: 40px;\n"]);return R=function(){return e},e}function H(){var e=Object(g.a)(["\n    padding: 8px;\n    background-color: white;\n    color: #484850;\n    font-size: 1.2em;\n"]);return H=function(){return e},e}function L(){var e=Object(g.a)(["\n    margin: 8px;\n    border-radius: 2px;\n    display: flex;\n    flex-direction: column;\n"]);return L=function(){return e},e}var M=h.a.div(L()),T=h.a.h3(H()),_=h.a.div(R(),(function(e){return e.isDraggingOver?"#d1d8e0":"white"})),q=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(M,null,u.a.createElement(T,null,this.props.column.title),u.a.createElement(f.c,{droppableId:this.props.column.id},(function(t,n){return u.a.createElement(_,Object.assign({ref:t.innerRef},t.droppableProps,{isDraggingOver:n.isDraggingOver}),e.props.tasks.map((function(e,t){return u.a.createElement(z,{key:e.id,task:e,index:t})})),t.placeholder)})))}}]),t}(u.a.Component),G=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,l=new Array(i),d=0;d<i;d++)l[d]=arguments[d];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state=b,n.onDragStart=function(){},n.onDragEnd=function(e){var t,o=e.destination,i=e.source,c=e.draggableId;if(o&&(o.droppableId!==i.droppableId||o.index!==i.index)){var s=n.state.columns[i.droppableId],l=n.state.columns[o.droppableId];if(s!==l){var d=Array.from(s.taskIds);d.splice(i.index,1);var u=Object(r.a)({},s,{taskIds:d}),p=Array.from(l.taskIds);p.splice(o.index,0,c);var m=Object(r.a)({},l,{taskIds:p}),f=Object(r.a)({},n.state,{columns:Object(r.a)({},n.state.columns,(t={},Object(a.a)(t,u.id,u),Object(a.a)(t,m.id,m),t))});n.setState(f)}else{var b=Array.from(s.taskIds);b.splice(i.index,1),b.splice(o.index,0,c);var g=Object(r.a)({},s,{taskIds:b}),h=Object(r.a)({},n.state,{columns:Object(r.a)({},n.state.columns,Object(a.a)({},g.id,g))});n.setState(h)}}},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(f.a,{onDragEnd:this.onDragEnd,onDragStart:this.onDragStart},u.a.createElement(E,null),this.state.columnOrder.map((function(t){var n=e.state.columns[t],a=n.taskIds.map((function(t){return e.state.tasks[t]}));return u.a.createElement(q,{key:n.id,column:n,tasks:a})})))}}]),t}(u.a.Component);m.a.render(u.a.createElement(G,null),document.getElementById("root"))},55:function(e,t,n){e.exports=n(102)},60:function(e,t,n){}},[[55,1,2]]]);
//# sourceMappingURL=main.1d517ba7.chunk.js.map