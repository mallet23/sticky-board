(this.webpackJsonpsticky=this.webpackJsonpsticky||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o,r,a,c,i,l,s,u,b,g,d,j,p,f,h=n(0),O=n.n(h),v=n(9),x=n.n(v),y=n(22),D=Object(h.createContext)(void 0),k=n(6),C=n(15),N=n(13),w=n(17),m=n(18),S=n(5),I=(n(28),n(2)),M="sticky-board",P=(o=I.b.bound,r=I.b.bound,a=I.b.bound,c=I.b.bound,i=I.b.bound,l=I.b.bound,s=function(){function e(){var t=this;Object(w.a)(this,e),Object(N.a)(this,"notes",u,this),Object(N.a)(this,"draggableNoteId",b,this),this.draggableStartDelta=void 0,Object(I.e)(this);var n=localStorage.getItem(M);n&&(this.notes=JSON.parse(n)),Object(I.g)((function(){return t.notes}),(function(){return t.updateStorage()}))}return Object(m.a)(e,[{key:"startDragging",value:function(e,t){this.draggableNoteId=e.id,this.draggableStartDelta={top:e.top-t.top,left:e.left-t.left},this.notes=[].concat(Object(C.a)(this.notes.filter((function(t){return t!==e}))),[e])}},{key:"stopDragging",value:function(){this.draggableNoteId&&(this.draggableNoteId=void 0)}},{key:"dragging",value:function(e){var t=this;this.notes=this.notes.map((function(n){if(n.id===t.draggableNoteId){var o=e.top+t.draggableStartDelta.top,r=e.left+t.draggableStartDelta.left;return Object(k.a)(Object(k.a)({},n),{},{top:o,left:r})}return n}))}},{key:"addNote",value:function(e){this.notes=[].concat(Object(C.a)(this.notes),[e])}},{key:"deleteNote",value:function(e){this.notes=this.notes.filter((function(t){return t.id!==e.id}))}},{key:"changeNote",value:function(e,t){this.notes=this.notes.map((function(n){return n.id===e?Object(k.a)(Object(k.a)({},n),t):n}))}},{key:"updateStorage",value:function(){localStorage.setItem(M,JSON.stringify(this.notes))}}]),e}(),u=Object(S.a)(s.prototype,"notes",[I.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),b=Object(S.a)(s.prototype,"draggableNoteId",[I.f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(S.a)(s.prototype,"startDragging",[o],Object.getOwnPropertyDescriptor(s.prototype,"startDragging"),s.prototype),Object(S.a)(s.prototype,"stopDragging",[r],Object.getOwnPropertyDescriptor(s.prototype,"stopDragging"),s.prototype),Object(S.a)(s.prototype,"dragging",[a],Object.getOwnPropertyDescriptor(s.prototype,"dragging"),s.prototype),Object(S.a)(s.prototype,"addNote",[c],Object.getOwnPropertyDescriptor(s.prototype,"addNote"),s.prototype),Object(S.a)(s.prototype,"deleteNote",[i],Object.getOwnPropertyDescriptor(s.prototype,"deleteNote"),s.prototype),Object(S.a)(s.prototype,"changeNote",[l],Object.getOwnPropertyDescriptor(s.prototype,"changeNote"),s.prototype),s),R=n(1),z=function(e){var t=e.children,n=new P;return Object(R.jsx)(D.Provider,{value:n,children:t})},E=n(3),A=n(4),J=n(7),K=function(){for(var e="#",t=0;t<3;t++)e+=("0"+Math.floor(Math.random()*Math.pow(16,2)/2).toString(16)).slice(-2);return e},T=n(35),B=function(){return{id:Object(T.a)(),color:K(),title:"My Note Title",description:"My Note Description",left:50,top:50,height:200,width:200}},U=A.a.button(g||(g=Object(E.a)(["\n  margin: 4px;\n"]))),X=function(e){var t=e.onClick;return Object(R.jsx)(U,{onClick:t,children:"Add"})},Y=A.a.label(d||(d=Object(E.a)(["\n  margin: 4px;\n  display: flex;\n  flex-direction: column;\n"]))),H=function(e){var t=e.children,n=e.title;return Object(R.jsxs)(Y,{children:[n,":",t]})},L=A.a.div(j||(j=Object(E.a)(["\n  margin: 4px;\n  display: flex;\n  flex-direction: column;\n  color: #ffffff;\n"]))),W=A.a.textarea(p||(p=Object(E.a)(["\n  min-height: 50px;\n  max-height: 100px;\n  resize: vertical;\n"]))),q=function(e){var t=e.onAdd,n=Object(h.useState)(B()),o=Object(J.a)(n,2),r=o[0],a=o[1],c=Object(h.useRef)(r);c.current=r;var i=Object(h.useCallback)((function(e){a(Object(k.a)(Object(k.a)({},c.current),e))}),[]),l=Object(h.useCallback)((function(e){i({description:e.target.value})}),[i]),s=Object(h.useCallback)((function(e){i({title:e.target.value})}),[i]),u=Object(h.useCallback)((function(e){i({height:Number(e.target.value)})}),[i]),b=Object(h.useCallback)((function(e){i({width:Number(e.target.value)})}),[i]),g=Object(h.useCallback)((function(e){i({top:Number(e.target.value)})}),[i]),d=Object(h.useCallback)((function(e){i({left:Number(e.target.value)})}),[i]),j=Object(h.useCallback)((function(){t(c.current),a(B())}),[t]);return Object(R.jsxs)(L,{style:{backgroundColor:r.color},children:[Object(R.jsx)(X,{onClick:j}),Object(R.jsx)(H,{title:"Title",children:Object(R.jsx)("input",{value:r.title,onChange:s})}),Object(R.jsx)(H,{title:"Description",children:Object(R.jsx)(W,{value:r.description,onChange:l})}),Object(R.jsx)(H,{title:"Width",children:Object(R.jsx)("input",{type:"number",value:r.width,onChange:b})}),Object(R.jsx)(H,{title:"Height",children:Object(R.jsx)("input",{type:"number",value:r.height,onChange:u})}),Object(R.jsx)(H,{title:"Position Top(px)",children:Object(R.jsx)("input",{type:"number",value:r.top,onChange:g})}),Object(R.jsx)(H,{title:"Position Left(px)",children:Object(R.jsx)("input",{type:"number",value:r.left,onChange:d})})]})};var F,G,Q,V,Z,$,_,ee=A.a.textarea(f||(f=Object(E.a)(["\n  padding: 5px;\n  flex-grow: 1;\n  resize: none;\n  background-color: inherit;\n  color: inherit;\n"]))),te=function(e){var t=e.value,n=e.onChange,o=e.onExit,r=Object(h.useRef)(null),a=Object(h.useState)(t),c=Object(J.a)(a,2),i=c[0],l=c[1],s=Object(h.useRef)(i);s.current=i,Object(h.useEffect)((function(){var e=r.current;e.focus(),e.setSelectionRange(e.value.length,e.value.length)}),[]);var u=Object(h.useCallback)((function(e){l(e.target.value)}),[]),b=Object(h.useCallback)((function(){n(s.current),o()}),[n,o]),g=Object(h.useCallback)(b,[b]),d=Object(h.useCallback)((function(e){"Enter"===e.code&&e.ctrlKey&&b()}),[b]),j=Object(h.useCallback)((function(e){"Escape"===e.code&&o()}),[o]);return Object(R.jsx)(ee,{ref:r,onChange:u,value:i,onBlur:g,onKeyPress:d,onKeyDown:j})},ne=A.a.div(F||(F=Object(E.a)(["\n  padding: 5px;\n  overflow: auto;\n  white-space: pre-line;\n  flex-grow: 1;\n"]))),oe=function(e){var t=e.description,n=e.onChange,o=Object(h.useState)(!1),r=Object(J.a)(o,2),a=r[0],c=r[1],i=Object(h.useCallback)((function(){c(!1)}),[]),l=Object(h.useCallback)((function(){return c(!0)}),[]);return a?Object(R.jsx)(te,{onChange:n,value:t,onExit:i}):Object(R.jsx)(ne,{onDoubleClick:l,children:t})},re=A.a.button(G||(G=Object(E.a)(["\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  width: 20px;\n  height: 20px;\n  opacity: 0.5;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:before, &:after {\n    position: absolute;\n    left: 10px;\n    top: 0;\n    content: ' ';\n    height: 20px;\n    width: 2px;\n    background-color: #ffffff;\n  }\n\n  &:before {\n    transform: rotate(45deg);\n  }\n\n  &:after {\n    transform: rotate(-45deg);\n  }\n"]))),ae=function(e){var t=e.onClick;return Object(R.jsx)(re,{onClick:t})},ce=A.a.div(Q||(Q=Object(E.a)(["\n  cursor: move;\n  min-height: 20px;\n  border-bottom: 1px solid;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  padding: 5px;\n"]))),ie=function(e){var t=e.title,n=e.onStartDragging,o=e.onDelete,r=Object(h.useCallback)((function(e){n({left:e.screenX,top:e.screenY})}),[n]);return Object(R.jsxs)("div",{children:[Object(R.jsx)(ce,{onMouseDown:r,children:t}),Object(R.jsx)(ae,{onClick:o})]})},le=A.a.div(V||(V=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  resize: both;\n  overflow: auto;\n  min-height: 70px;\n  min-width: 100px;\n  color: #ffffff;\n"]))),se=function(e){var t=e.note,n=e.startDragging,o=e.isDraggable,r=e.stopDragging,a=e.onChange,c=e.onDelete,i=t.color,l=t.description,s=t.left,u=t.top,b=t.height,g=t.width,d=t.title,j=t.id,p=Object(h.useRef)(t);p.current=t;var f=Object(h.useRef)(null);!function(e,t){var n=Object(h.useCallback)((function(e){var n=e[0];t(n.contentRect)}),[t]);Object(h.useEffect)((function(){var t=new ResizeObserver(n);return e&&t.observe(e.current),function(){t.disconnect()}}),[n,e])}(f,Object(h.useCallback)((function(e){var t=e.height,n=e.width;a(j,{width:n,height:t})}),[a,j]));var O=Object(h.useCallback)((function(e){n(p.current,e)}),[n]),v=Object(h.useCallback)((function(e){a(j,{description:e})}),[a,j]),x=Object(h.useCallback)((function(){c(p.current)}),[c]);return Object(R.jsxs)(le,{ref:f,style:{top:u,left:s,backgroundColor:i,height:b,width:g,zIndex:o?10:void 0},onMouseUp:r,children:[Object(R.jsx)(ie,{onStartDragging:O,onDelete:x,title:d}),Object(R.jsx)(oe,{description:l,onChange:v})]})},ue=A.a.div(Z||(Z=Object(E.a)(["\n  flex-grow: 1;\n  position: relative;\n"]))),be=function(e){var t=e.notes,n=e.startDragging,o=e.stopDragging,r=e.draggableNoteId,a=e.changeNote,c=e.dragging,i=e.onDeleteNote,l=Object(h.useRef)(r);l.current=r;var s=Object(h.useCallback)((function(e){l.current&&c({left:e.screenX,top:e.screenY})}),[c]);return Object(R.jsx)(ue,{onMouseUp:o,onMouseMove:s,style:{cursor:r?"move":void 0},children:t.map((function(e){return Object(R.jsx)(se,{onDelete:i,note:e,startDragging:n,stopDragging:o,isDraggable:e.id===r,onChange:a},e.id)}))})},ge=A.a.div($||($=Object(E.a)(["\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n\n  display: flex;\n"]))),de=A.a.div(_||(_=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n"]))),je=function(e){var t=e.notes,n=e.onAddNote,o=e.onDeleteNote,r=e.stopDragging,a=e.startDragging,c=e.changeNote,i=e.draggableNoteId,l=e.dragging;return Object(R.jsxs)(ge,{children:[Object(R.jsx)(de,{children:Object(R.jsx)(q,{onAdd:n})}),Object(R.jsx)(be,{stopDragging:r,startDragging:a,dragging:l,notes:t,draggableNoteId:i,changeNote:c,onDeleteNote:o})]})},pe=Object(y.a)((function(){var e=Object(h.useContext)(D),t=e.notes,n=e.addNote,o=e.startDragging,r=e.stopDragging,a=e.changeNote,c=e.deleteNote,i=e.draggableNoteId,l=e.dragging;return Object(R.jsx)(je,{notes:t,onAddNote:n,onDeleteNote:c,startDragging:o,stopDragging:r,dragging:l,changeNote:a,draggableNoteId:i})})),fe=function(){return Object(R.jsx)(z,{children:Object(R.jsx)(pe,{})})};n(32);x.a.render(Object(R.jsx)(O.a.StrictMode,{children:Object(R.jsx)(fe,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.92ccf6ab.chunk.js.map