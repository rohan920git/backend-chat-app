(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1139:function(e,s,a){Promise.resolve().then(a.bind(a,5755))},5755:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var i=a(3827);a(4039);var n=a(8796),c=a(8209),r=a(4090);a(5712);var l=function(e){let{data:s}=e,a=new Date().toLocaleTimeString();return(0,i.jsx)("div",{className:"main-chat",children:"receiver"===s.from?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"left",children:[(0,i.jsx)("div",{className:"username",children:(0,i.jsx)("label",{children:s.by.substring(0,10)})}),(0,i.jsx)("div",{className:"message-left",children:s.message}),(0,i.jsx)("div",{children:(0,i.jsx)("label",{children:a})})]})}):(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"right",children:[(0,i.jsx)("div",{className:"username",children:(0,i.jsx)("label",{children:s.by.substring(0,10)})}),(0,i.jsx)("div",{className:"message-right",children:s.message}),(0,i.jsx)("div",{children:(0,i.jsx)("label",{children:a})})]})})})};function d(){let[e,s]=(0,r.useState)(123),[a,d]=(0,r.useState)([]),[t,m]=(0,r.useState)(""),o=(0,r.useMemo)(()=>(0,c.io)(),[]);return console.log(o),(0,r.useEffect)(()=>(o.emit("join-room",e),()=>{o.emit("leave-room",e)}),[e]),(0,r.useEffect)(()=>(o.on("receive_message",e=>{d(s=>[...s,{message:e.data,from:"receiver",by:e.by}])}),()=>{}),[o]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"main",children:[(0,i.jsx)("div",{className:"header",children:"anonymous-chat"}),(0,i.jsxs)("div",{className:"body",children:[(0,i.jsxs)("div",{className:"nevigation",children:[(0,i.jsx)("div",{className:"room",onClick:()=>{s(123),d([])},children:"room123"}),(0,i.jsx)("div",{className:"room",onClick:()=>{s(201),d([])},children:"room201"}),(0,i.jsx)("div",{className:"room",onClick:()=>{s(101),d([])},children:"room101"}),(0,i.jsx)("div",{className:"room",onClick:()=>{s(500),d([])},children:"room500"})]}),(0,i.jsxs)("div",{className:"chatscreen",children:[(0,i.jsxs)("div",{className:"chatheader",children:[(0,i.jsx)("img",{className:"chat-image"}),(0,i.jsxs)("span",{children:["Room-",e]})]}),(0,i.jsx)("div",{className:"chats",children:a.map((e,s)=>(0,i.jsx)(l,{data:e},s))}),(0,i.jsx)("div",{className:"chatinput",children:(0,i.jsxs)("div",{className:"chatinput-sender",children:[(0,i.jsx)("input",{type:"text",placeholder:"Type you message here....",value:t,onChange:e=>{m(e.target.value)}}),(0,i.jsxs)("button",{onClick:function(){""!==t&&(d(e=>[...e,{message:t,from:"sender",by:o.id}]),o.emit("send_message",{data:t,room:e}),m(""))},children:[" ",(0,i.jsx)(n.OUD,{})]})]})})]})]})]})})}},5712:function(){},4039:function(){}},function(e){e.O(0,[452,699,971,69,744],function(){return e(e.s=1139)}),_N_E=e.O()}]);