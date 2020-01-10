(this["webpackJsonplist-view-react"]=this["webpackJsonplist-view-react"]||[]).push([[0],{50:function(t,e,n){t.exports=n(97)},55:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var a=n(18),r=n(12),i=n(6),c=n(7),o=n(9),s=n(8),l=n(10),u=n(0),d=n.n(u),p=n(15),m=n.n(p),f=(n(55),n(56),n(17)),b={tasks:{"task-1":{id:"task-1",content:"AirBnB",ceo:"Brian Chesky",days:24},"task-2":{id:"task-2",content:"Stripe",ceo:"Patrick Collison",days:16},"task-3":{id:"task-3",content:"SoFi",ceo:"Anthony Noto",days:14},"task-4":{id:"task-4",content:"Palantir",ceo:"Alex Karp",days:12},"task-5":{id:"task-5",content:"Compass",ceo:"Robert Reffkin",days:3}},columns:{"column-1":{id:"column-1",title:"Of Interest",taskIds:["task-1","task-2"]},"column-2":{id:"column-2",title:"Due Dilligence",taskIds:["task-3","task-4"]},"column-3":{id:"column-3",title:"Pass",taskIds:[]},"column-4":{id:"column-4",title:"Fail",taskIds:["task-5"]}},columnOrder:["column-1","column-2","column-3","column-4"]},g=n(2),h=n(3);function k(){var t=Object(g.a)(["\n    float: right;\n    line-height: 50px;\n    padding-right: 8px;\n"]);return k=function(){return t},t}function v(){var t=Object(g.a)(["\n    float: left;\n    line-height: 50px;\n    font-size: 1.7em;\n    padding-left: 8px;\n"]);return v=function(){return t},t}function O(){var t=Object(g.a)(["\n    height: 50px;\n    width: 100%;\n"]);return O=function(){return t},t}var j=h.a.div(O()),x=h.a.div(v()),y=h.a.div(k()),E=function(t){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return d.a.createElement(j,null,d.a.createElement(x,null,"Deal Board"),d.a.createElement(y,null,d.a.createElement("input",{style:{borderRadius:"5px",border:"1px solid lightgrey",fontSize:"1em"},type:"text",placeholder:"Add Company..."})))}}]),e}(d.a.Component);function I(){var t=Object(g.a)(["\n    width: 30px;\n    height: 30px;\n    background-color: #FF3B3F;\n    border-radius: 4px 0 0 4px;\n    margin-right: 8px;\n"]);return I=function(){return t},t}function D(){var t=Object(g.a)(["\n    border: 1px solid lightgrey;\n    border-radius: 4px;\n    margin-bottom: 8px;\n    background-color: ",";\n    display: flex;\n"]);return D=function(){return t},t}var w=h.a.div(D(),(function(t){return t.isDragging?"#EFEFEF":"white"})),C=h.a.div(I()),A=function(t){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e={width:"100%",lineHeight:"30px",display:"flex",justifyContent:"space-between"},n={width:"25%"};return d.a.createElement(f.b,{draggableId:this.props.task.id,index:this.props.index},(function(a,r){return d.a.createElement(w,Object.assign({},a.draggableProps,{ref:a.innerRef,isDragging:r.isDragging}),d.a.createElement(C,a.dragHandleProps),d.a.createElement("div",{style:e},d.a.createElement("div",{style:n},t.props.task.content),d.a.createElement("div",{style:n},t.props.task.ceo),d.a.createElement("div",{style:n},t.props.task.days),d.a.createElement("div",{style:n},d.a.createElement("a",{href:"https://products.office.com/en-us/onedrive-for-business/online-cloud-storage",target:"_blank"},"Material"))))}))}}]),e}(d.a.Component);function F(){var t=Object(g.a)(["\n    padding: 8px;\n    background-color: ",";\n    flex-grow: 1;\n    min-height: 40px;\n"]);return F=function(){return t},t}function S(){var t=Object(g.a)(["\n    padding: 8px;\n    background-color: white;\n    color: #484850;\n    font-size: 1.2em;\n"]);return S=function(){return t},t}function B(){var t=Object(g.a)(["\n    margin: 8px;\n    border-radius: 2px;\n    display: flex;\n    flex-direction: column;\n"]);return B=function(){return t},t}var P=h.a.div(B()),R=h.a.h3(S()),z=h.a.div(F(),(function(t){return t.isDraggingOver?"#d1d8e0":"white"})),H=function(t){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return d.a.createElement(P,null,d.a.createElement(R,null,this.props.column.title),d.a.createElement(f.c,{droppableId:this.props.column.id},(function(e,n){return d.a.createElement(z,Object.assign({ref:e.innerRef},e.droppableProps,{isDraggingOver:n.isDraggingOver}),t.props.tasks.map((function(t,e){return d.a.createElement(A,{key:t.id,task:t,index:e})})),e.placeholder)})))}}]),e}(d.a.Component),J=function(t){function e(){var t,n;Object(i.a)(this,e);for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return(n=Object(o.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(l)))).state=b,n.onDragStart=function(){},n.onDragEnd=function(t){var e,i=t.destination,c=t.source,o=t.draggableId;if(i&&(i.droppableId!==c.droppableId||i.index!==c.index)){var s=n.state.columns[c.droppableId],l=n.state.columns[i.droppableId];if(s!==l){var u=Array.from(s.taskIds);u.splice(c.index,1);var d=Object(r.a)({},s,{taskIds:u}),p=Array.from(l.taskIds);p.splice(i.index,0,o);var m=Object(r.a)({},l,{taskIds:p}),f=Object(r.a)({},n.state,{columns:Object(r.a)({},n.state.columns,(e={},Object(a.a)(e,d.id,d),Object(a.a)(e,m.id,m),e))});n.setState(f)}else{var b=Array.from(s.taskIds);b.splice(c.index,1),b.splice(i.index,0,o);var g=Object(r.a)({},s,{taskIds:b}),h=Object(r.a)({},n.state,{columns:Object(r.a)({},n.state.columns,Object(a.a)({},g.id,g))});n.setState(h)}}},n}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return d.a.createElement(f.a,{onDragEnd:this.onDragEnd,onDragStart:this.onDragStart},d.a.createElement(E,null),this.state.columnOrder.map((function(e){var n=t.state.columns[e],a=n.taskIds.map((function(e){return t.state.tasks[e]}));return d.a.createElement(H,{key:n.id,column:n,tasks:a})})))}}]),e}(d.a.Component);m.a.render(d.a.createElement(J,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.87c37c7a.chunk.js.map