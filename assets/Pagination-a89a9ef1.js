import{r as h,J as Oe,B as de,e as K,p as he,q as ve,s as fe,v as be,R as m,d as E,f as $,_ as J,x as Te,y as Be,z as je,K as se,L as we,D as Me,M as De,j as Re}from"./index-66472a65.js";import{S as U,R as ce,h as ue}from"./Layout-e6df7b9c.js";import{b as _e,l as Ae,e as He,h as Le}from"./index-6066dff6.js";function Ve(){const[,e]=h.useReducer(t=>t+1,0);return e}function Ke(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const t=h.useRef({}),d=Ve(),a=Oe();return h.useEffect(()=>{const n=a.subscribe(r=>{t.current=r,e&&d()});return()=>a.unsubscribe(n)},[]),t.current}var We={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]},name:"double-left",theme:"outlined"};const Je=We;var Ce=function(t,d){return h.createElement(de,K(K({},t),{},{ref:d,icon:Je}))};Ce.displayName="DoubleLeftOutlined";const pe=h.forwardRef(Ce);var Ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}}]},name:"double-right",theme:"outlined"};const Fe=Ue;var Se=function(t,d){return h.createElement(de,K(K({},t),{},{ref:d,icon:Fe}))};Se.displayName="DoubleRightOutlined";const ge=h.forwardRef(Se);var M={ZERO:48,NINE:57,NUMPAD_ZERO:96,NUMPAD_NINE:105,BACKSPACE:8,DELETE:46,ENTER:13,ARROW_UP:38,ARROW_DOWN:40};const Xe={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"};var xe=function(e){he(d,e);var t=ve(d);function d(){var a;fe(this,d);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=t.call.apply(t,[this].concat(r)),a.state={goInputText:""},a.getValidValue=function(){var l=a.state.goInputText;return!l||Number.isNaN(l)?void 0:Number(l)},a.buildOptionText=function(l){return"".concat(l," ").concat(a.props.locale.items_per_page)},a.changeSize=function(l){a.props.changeSize(Number(l))},a.handleChange=function(l){a.setState({goInputText:l.target.value})},a.handleBlur=function(l){var g=a.props,i=g.goButton,s=g.quickGo,c=g.rootPrefixCls,u=a.state.goInputText;i||u===""||(a.setState({goInputText:""}),!(l.relatedTarget&&(l.relatedTarget.className.indexOf("".concat(c,"-item-link"))>=0||l.relatedTarget.className.indexOf("".concat(c,"-item"))>=0))&&s(a.getValidValue()))},a.go=function(l){var g=a.state.goInputText;g!==""&&(l.keyCode===M.ENTER||l.type==="click")&&(a.setState({goInputText:""}),a.props.quickGo(a.getValidValue()))},a}return be(d,[{key:"getPageSizeOptions",value:function(){var n=this.props,r=n.pageSize,o=n.pageSizeOptions;return o.some(function(l){return l.toString()===r.toString()})?o:o.concat([r.toString()]).sort(function(l,g){var i=Number.isNaN(Number(l))?0:Number(l),s=Number.isNaN(Number(g))?0:Number(g);return i-s})}},{key:"render",value:function(){var n=this,r=this.props,o=r.pageSize,l=r.locale,g=r.rootPrefixCls,i=r.changeSize,s=r.quickGo,c=r.goButton,u=r.selectComponentClass,v=r.buildOptionText,S=r.selectPrefixCls,p=r.disabled,y=this.state.goInputText,I="".concat(g,"-options"),b=u,D=null,O=null,T=null;if(!i&&!s)return null;var B=this.getPageSizeOptions();if(i&&b){var R=B.map(function(j,P){return m.createElement(b.Option,{key:P,value:j.toString()},(v||n.buildOptionText)(j))});D=m.createElement(b,{disabled:p,prefixCls:S,showSearch:!1,className:"".concat(I,"-size-changer"),optionLabelProp:"children",dropdownMatchSelectWidth:!1,value:(o||B[0]).toString(),onChange:this.changeSize,getPopupContainer:function(P){return P.parentNode},"aria-label":l.page_size,defaultOpen:!1},R)}return s&&(c&&(T=typeof c=="boolean"?m.createElement("button",{type:"button",onClick:this.go,onKeyUp:this.go,disabled:p,className:"".concat(I,"-quick-jumper-button")},l.jump_to_confirm):m.createElement("span",{onClick:this.go,onKeyUp:this.go},c)),O=m.createElement("div",{className:"".concat(I,"-quick-jumper")},l.jump_to,m.createElement("input",{disabled:p,type:"text",value:y,onChange:this.handleChange,onKeyUp:this.go,onBlur:this.handleBlur,"aria-label":l.page}),l.page,T)),m.createElement("li",{className:"".concat(I)},D,O)}}]),d}(m.Component);xe.defaultProps={pageSizeOptions:["10","20","50","100"]};var V=function(t){var d,a=t.rootPrefixCls,n=t.page,r=t.active,o=t.className,l=t.showTitle,g=t.onClick,i=t.onKeyPress,s=t.itemRender,c="".concat(a,"-item"),u=E(c,"".concat(c,"-").concat(n),(d={},$(d,"".concat(c,"-active"),r),$(d,"".concat(c,"-disabled"),!n),$(d,t.className,o),d)),v=function(){g(n)},S=function(y){i(y,g,n)};return m.createElement("li",{title:l?n.toString():null,className:u,onClick:v,onKeyPress:S,tabIndex:0},s(n,"page",m.createElement("a",{rel:"nofollow"},n)))};function Z(){}function me(e){var t=Number(e);return typeof t=="number"&&!Number.isNaN(t)&&isFinite(t)&&Math.floor(t)===t}var Ge=function(t,d,a){return a};function N(e,t,d){var a=typeof e>"u"?t.pageSize:e;return Math.floor((d.total-1)/a)+1}var Ie=function(e){he(d,e);var t=ve(d);function d(a){var n;fe(this,d),n=t.call(this,a),n.paginationNode=m.createRef(),n.getJumpPrevPage=function(){return Math.max(1,n.state.current-(n.props.showLessItems?3:5))},n.getJumpNextPage=function(){return Math.min(N(void 0,n.state,n.props),n.state.current+(n.props.showLessItems?3:5))},n.getItemIcon=function(i,s){var c=n.props.prefixCls,u=i||m.createElement("button",{type:"button","aria-label":s,className:"".concat(c,"-item-link")});return typeof i=="function"&&(u=m.createElement(i,K({},n.props))),u},n.isValid=function(i){var s=n.props.total;return me(i)&&i!==n.state.current&&me(s)&&s>0},n.shouldDisplayQuickJumper=function(){var i=n.props,s=i.showQuickJumper,c=i.total,u=n.state.pageSize;return c<=u?!1:s},n.handleKeyDown=function(i){(i.keyCode===M.ARROW_UP||i.keyCode===M.ARROW_DOWN)&&i.preventDefault()},n.handleKeyUp=function(i){var s=n.getValidValue(i),c=n.state.currentInputValue;s!==c&&n.setState({currentInputValue:s}),i.keyCode===M.ENTER?n.handleChange(s):i.keyCode===M.ARROW_UP?n.handleChange(s-1):i.keyCode===M.ARROW_DOWN&&n.handleChange(s+1)},n.handleBlur=function(i){var s=n.getValidValue(i);n.handleChange(s)},n.changePageSize=function(i){var s=n.state.current,c=N(i,n.state,n.props);s=s>c?c:s,c===0&&(s=n.state.current),typeof i=="number"&&("pageSize"in n.props||n.setState({pageSize:i}),"current"in n.props||n.setState({current:s,currentInputValue:s})),n.props.onShowSizeChange(s,i),"onChange"in n.props&&n.props.onChange&&n.props.onChange(s,i)},n.handleChange=function(i){var s=n.props,c=s.disabled,u=s.onChange,v=n.state,S=v.pageSize,p=v.current,y=v.currentInputValue;if(n.isValid(i)&&!c){var I=N(void 0,n.state,n.props),b=i;return i>I?b=I:i<1&&(b=1),"current"in n.props||n.setState({current:b}),b!==y&&n.setState({currentInputValue:b}),u(b,S),b}return p},n.prev=function(){n.hasPrev()&&n.handleChange(n.state.current-1)},n.next=function(){n.hasNext()&&n.handleChange(n.state.current+1)},n.jumpPrev=function(){n.handleChange(n.getJumpPrevPage())},n.jumpNext=function(){n.handleChange(n.getJumpNextPage())},n.hasPrev=function(){return n.state.current>1},n.hasNext=function(){return n.state.current<N(void 0,n.state,n.props)},n.runIfEnter=function(i,s){if(i.key==="Enter"||i.charCode===13){for(var c=arguments.length,u=new Array(c>2?c-2:0),v=2;v<c;v++)u[v-2]=arguments[v];s.apply(void 0,u)}},n.runIfEnterPrev=function(i){n.runIfEnter(i,n.prev)},n.runIfEnterNext=function(i){n.runIfEnter(i,n.next)},n.runIfEnterJumpPrev=function(i){n.runIfEnter(i,n.jumpPrev)},n.runIfEnterJumpNext=function(i){n.runIfEnter(i,n.jumpNext)},n.handleGoTO=function(i){(i.keyCode===M.ENTER||i.type==="click")&&n.handleChange(n.state.currentInputValue)},n.renderPrev=function(i){var s=n.props,c=s.prevIcon,u=s.itemRender,v=u(i,"prev",n.getItemIcon(c,"prev page")),S=!n.hasPrev();return h.isValidElement(v)?h.cloneElement(v,{disabled:S}):v},n.renderNext=function(i){var s=n.props,c=s.nextIcon,u=s.itemRender,v=u(i,"next",n.getItemIcon(c,"next page")),S=!n.hasNext();return h.isValidElement(v)?h.cloneElement(v,{disabled:S}):v};var r=a.onChange!==Z,o="current"in a;o&&!r&&console.warn("Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");var l=a.defaultCurrent;"current"in a&&(l=a.current);var g=a.defaultPageSize;return"pageSize"in a&&(g=a.pageSize),l=Math.min(l,N(g,void 0,a)),n.state={current:l,currentInputValue:l,pageSize:g},n}return be(d,[{key:"componentDidUpdate",value:function(n,r){var o=this.props.prefixCls;if(r.current!==this.state.current&&this.paginationNode.current){var l=this.paginationNode.current.querySelector(".".concat(o,"-item-").concat(r.current));if(l&&document.activeElement===l){var g;l==null||(g=l.blur)===null||g===void 0||g.call(l)}}}},{key:"getValidValue",value:function(n){var r=n.target.value,o=N(void 0,this.state,this.props),l=this.state.currentInputValue,g;return r===""?g=r:Number.isNaN(Number(r))?g=l:r>=o?g=o:g=Number(r),g}},{key:"getShowSizeChanger",value:function(){var n=this.props,r=n.showSizeChanger,o=n.total,l=n.totalBoundaryShowSizeChanger;return typeof r<"u"?r:o>l}},{key:"render",value:function(){var n=this,r=this.props,o=r.prefixCls,l=r.className,g=r.style,i=r.disabled,s=r.hideOnSinglePage,c=r.total,u=r.locale,v=r.showQuickJumper,S=r.showLessItems,p=r.showTitle,y=r.showTotal,I=r.simple,b=r.itemRender,D=r.showPrevNextJumpers,O=r.jumpPrevIcon,T=r.jumpNextIcon,B=r.selectComponentClass,R=r.selectPrefixCls,j=r.pageSizeOptions,P=this.state,f=P.current,w=P.pageSize,F=P.currentInputValue;if(s===!0&&c<=w)return null;var C=N(void 0,this.state,this.props),x=[],Y=null,k=null,ee=null,te=null,_=null,W=v&&v.goButton,z=S?1:2,ne=f-1>0?f-1:0,ie=f+1<C?f+1:C,ae=Object.keys(this.props).reduce(function(le,L){return(L.substr(0,5)==="data-"||L.substr(0,5)==="aria-"||L==="role")&&(le[L]=n.props[L]),le},{}),re=y&&m.createElement("li",{className:"".concat(o,"-total-text")},y(c,[c===0?0:(f-1)*w+1,f*w>c?c:f*w]));if(I)return W&&(typeof W=="boolean"?_=m.createElement("button",{type:"button",onClick:this.handleGoTO,onKeyUp:this.handleGoTO},u.jump_to_confirm):_=m.createElement("span",{onClick:this.handleGoTO,onKeyUp:this.handleGoTO},W),_=m.createElement("li",{title:p?"".concat(u.jump_to).concat(f,"/").concat(C):null,className:"".concat(o,"-simple-pager")},_)),m.createElement("ul",J({className:E(o,"".concat(o,"-simple"),$({},"".concat(o,"-disabled"),i),l),style:g,ref:this.paginationNode},ae),re,m.createElement("li",{title:p?u.prev_page:null,onClick:this.prev,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterPrev,className:E("".concat(o,"-prev"),$({},"".concat(o,"-disabled"),!this.hasPrev())),"aria-disabled":!this.hasPrev()},this.renderPrev(ne)),m.createElement("li",{title:p?"".concat(f,"/").concat(C):null,className:"".concat(o,"-simple-pager")},m.createElement("input",{type:"text",value:F,disabled:i,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onChange:this.handleKeyUp,onBlur:this.handleBlur,size:3}),m.createElement("span",{className:"".concat(o,"-slash")},"/"),C),m.createElement("li",{title:p?u.next_page:null,onClick:this.next,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterNext,className:E("".concat(o,"-next"),$({},"".concat(o,"-disabled"),!this.hasNext())),"aria-disabled":!this.hasNext()},this.renderNext(ie)),_);if(C<=3+z*2){var oe={locale:u,rootPrefixCls:o,onClick:this.handleChange,onKeyPress:this.runIfEnter,showTitle:p,itemRender:b};C||x.push(m.createElement(V,J({},oe,{key:"noPager",page:1,className:"".concat(o,"-item-disabled")})));for(var A=1;A<=C;A+=1){var Pe=f===A;x.push(m.createElement(V,J({},oe,{key:A,page:A,active:Pe})))}}else{var Ee=S?u.prev_3:u.prev_5,ze=S?u.next_3:u.next_5;D&&(Y=m.createElement("li",{title:p?Ee:null,key:"prev",onClick:this.jumpPrev,tabIndex:0,onKeyPress:this.runIfEnterJumpPrev,className:E("".concat(o,"-jump-prev"),$({},"".concat(o,"-jump-prev-custom-icon"),!!O))},b(this.getJumpPrevPage(),"jump-prev",this.getItemIcon(O,"prev page"))),k=m.createElement("li",{title:p?ze:null,key:"next",tabIndex:0,onClick:this.jumpNext,onKeyPress:this.runIfEnterJumpNext,className:E("".concat(o,"-jump-next"),$({},"".concat(o,"-jump-next-custom-icon"),!!T))},b(this.getJumpNextPage(),"jump-next",this.getItemIcon(T,"next page")))),te=m.createElement(V,{locale:u,last:!0,rootPrefixCls:o,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:C,page:C,active:!1,showTitle:p,itemRender:b}),ee=m.createElement(V,{locale:u,rootPrefixCls:o,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:1,page:1,active:!1,showTitle:p,itemRender:b});var X=Math.max(1,f-z),G=Math.min(f+z,C);f-1<=z&&(G=1+z*2),C-f<=z&&(X=C-z*2);for(var H=X;H<=G;H+=1){var Ne=f===H;x.push(m.createElement(V,{locale:u,rootPrefixCls:o,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:H,page:H,active:Ne,showTitle:p,itemRender:b}))}f-1>=z*2&&f!==1+2&&(x[0]=h.cloneElement(x[0],{className:"".concat(o,"-item-after-jump-prev")}),x.unshift(Y)),C-f>=z*2&&f!==C-2&&(x[x.length-1]=h.cloneElement(x[x.length-1],{className:"".concat(o,"-item-before-jump-next")}),x.push(k)),X!==1&&x.unshift(ee),G!==C&&x.push(te)}var q=!this.hasPrev()||!C,Q=!this.hasNext()||!C;return m.createElement("ul",J({className:E(o,l,$({},"".concat(o,"-disabled"),i)),style:g,ref:this.paginationNode},ae),re,m.createElement("li",{title:p?u.prev_page:null,onClick:this.prev,tabIndex:q?null:0,onKeyPress:this.runIfEnterPrev,className:E("".concat(o,"-prev"),$({},"".concat(o,"-disabled"),q)),"aria-disabled":q},this.renderPrev(ne)),x,m.createElement("li",{title:p?u.next_page:null,onClick:this.next,tabIndex:Q?null:0,onKeyPress:this.runIfEnterNext,className:E("".concat(o,"-next"),$({},"".concat(o,"-disabled"),Q)),"aria-disabled":Q},this.renderNext(ie)),m.createElement(xe,{disabled:i,locale:u,rootPrefixCls:o,selectComponentClass:B,selectPrefixCls:R,changeSize:this.getShowSizeChanger()?this.changePageSize:null,current:f,pageSize:w,pageSizeOptions:j,quickGo:this.shouldDisplayQuickJumper()?this.handleChange:null,goButton:W}))}}],[{key:"getDerivedStateFromProps",value:function(n,r){var o={};if("current"in n&&(o.current=n.current,n.current!==r.current&&(o.currentInputValue=o.current)),"pageSize"in n&&n.pageSize!==r.pageSize){var l=r.current,g=N(n.pageSize,r,n);l=l>g?g:l,"current"in n||(o.current=l,o.currentInputValue=l),o.pageSize=n.pageSize}return o}}]),d}(m.Component);Ie.defaultProps={defaultCurrent:1,total:0,defaultPageSize:10,onChange:Z,className:"",selectPrefixCls:"rc-select",prefixCls:"rc-pagination",selectComponentClass:null,hideOnSinglePage:!1,showPrevNextJumpers:!0,showQuickJumper:!1,showLessItems:!1,showTitle:!0,onShowSizeChange:Z,locale:Xe,style:{},itemRender:Ge,totalBoundaryShowSizeChanger:50};const $e=e=>h.createElement(U,Object.assign({},e,{size:"small"})),ye=e=>h.createElement(U,Object.assign({},e,{size:"middle"}));$e.Option=U.Option;ye.Option=U.Option;const qe=e=>{const{componentCls:t}=e;return{[`${t}-disabled`]:{"&, &:hover":{cursor:"not-allowed",[`${t}-item-link`]:{color:e.colorTextDisabled,cursor:"not-allowed"}},"&:focus-visible":{cursor:"not-allowed",[`${t}-item-link`]:{color:e.colorTextDisabled,cursor:"not-allowed"}}},[`&${t}-disabled`]:{cursor:"not-allowed",[`&${t}-mini`]:{[`
          &:hover ${t}-item:not(${t}-item-active),
          &:active ${t}-item:not(${t}-item-active),
          &:hover ${t}-item-link,
          &:active ${t}-item-link
        `]:{backgroundColor:"transparent"}},[`${t}-item`]:{cursor:"not-allowed","&:hover, &:active":{backgroundColor:"transparent"},a:{color:e.colorTextDisabled,backgroundColor:"transparent",border:"none",cursor:"not-allowed"},"&-active":{borderColor:e.colorBorder,backgroundColor:e.paginationItemDisabledBgActive,"&:hover, &:active":{backgroundColor:e.paginationItemDisabledBgActive},a:{color:e.paginationItemDisabledColorActive}}},[`${t}-item-link`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:hover, &:active":{backgroundColor:"transparent"},[`${t}-simple&`]:{backgroundColor:"transparent","&:hover, &:active":{backgroundColor:"transparent"}}},[`${t}-item-link-icon`]:{opacity:0},[`${t}-item-ellipsis`]:{opacity:1},[`${t}-simple-pager`]:{color:e.colorTextDisabled}},[`&${t}-simple`]:{[`${t}-prev, ${t}-next`]:{[`&${t}-disabled ${t}-item-link`]:{"&:hover, &:active":{backgroundColor:"transparent"}}}}}},Qe=e=>{const{componentCls:t}=e;return{[`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]:{height:e.paginationItemSizeSM,lineHeight:`${e.paginationItemSizeSM}px`},[`&${t}-mini ${t}-item`]:{minWidth:e.paginationItemSizeSM,height:e.paginationItemSizeSM,margin:0,lineHeight:`${e.paginationItemSizeSM-2}px`},[`&${t}-mini ${t}-item:not(${t}-item-active)`]:{backgroundColor:"transparent",borderColor:"transparent","&:hover":{backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive}},[`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]:{minWidth:e.paginationItemSizeSM,height:e.paginationItemSizeSM,margin:0,lineHeight:`${e.paginationItemSizeSM}px`,[`&:hover ${t}-item-link`]:{backgroundColor:e.colorBgTextHover},[`&:active ${t}-item-link`]:{backgroundColor:e.colorBgTextActive},[`&${t}-disabled:hover ${t}-item-link`]:{backgroundColor:"transparent"}},[`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]:{backgroundColor:"transparent",borderColor:"transparent","&::after":{height:e.paginationItemSizeSM,lineHeight:`${e.paginationItemSizeSM}px`}},[`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]:{height:e.paginationItemSizeSM,marginInlineEnd:0,lineHeight:`${e.paginationItemSizeSM}px`},[`&${t}-mini ${t}-options`]:{marginInlineStart:e.paginationMiniOptionsMarginInlineStart,["&-size-changer"]:{top:e.paginationMiniOptionsSizeChangerTop},["&-quick-jumper"]:{height:e.paginationItemSizeSM,lineHeight:`${e.paginationItemSizeSM}px`,input:Object.assign(Object.assign({},Ae(e)),{width:e.paginationMiniQuickJumperInputWidth,height:e.controlHeightSM})}}}},Ze=e=>{const{componentCls:t}=e;return{[`
    &${t}-simple ${t}-prev,
    &${t}-simple ${t}-next
    `]:{height:e.paginationItemSizeSM,lineHeight:`${e.paginationItemSizeSM}px`,verticalAlign:"top",[`${t}-item-link`]:{height:e.paginationItemSizeSM,backgroundColor:"transparent",border:0,"&:hover":{backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive},"&::after":{height:e.paginationItemSizeSM,lineHeight:`${e.paginationItemSizeSM}px`}}},[`&${t}-simple ${t}-simple-pager`]:{display:"inline-block",height:e.paginationItemSizeSM,marginInlineEnd:e.marginXS,input:{boxSizing:"border-box",height:"100%",marginInlineEnd:e.marginXS,padding:`0 ${e.paginationItemPaddingInline}px`,textAlign:"center",backgroundColor:e.paginationItemInputBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadius,outline:"none",transition:`border-color ${e.motionDurationMid}`,color:"inherit","&:hover":{borderColor:e.colorPrimary},"&:focus":{borderColor:e.colorPrimaryHover,boxShadow:`${e.inputOutlineOffset}px 0 ${e.controlOutlineWidth}px ${e.controlOutline}`},"&[disabled]":{color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,cursor:"not-allowed"}}}}},Ye=e=>{const{componentCls:t}=e;return{[`${t}-jump-prev, ${t}-jump-next`]:{outline:0,[`${t}-item-container`]:{position:"relative",[`${t}-item-link-icon`]:{color:e.colorPrimary,fontSize:e.fontSizeSM,opacity:0,transition:`all ${e.motionDurationMid}`,"&-svg":{top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,margin:"auto"}},[`${t}-item-ellipsis`]:{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,display:"block",margin:"auto",color:e.colorTextDisabled,fontFamily:"Arial, Helvetica, sans-serif",letterSpacing:e.paginationEllipsisLetterSpacing,textAlign:"center",textIndent:e.paginationEllipsisTextIndent,opacity:1,transition:`all ${e.motionDurationMid}`}},"&:hover":{[`${t}-item-link-icon`]:{opacity:1},[`${t}-item-ellipsis`]:{opacity:0}},"&:focus-visible":Object.assign({[`${t}-item-link-icon`]:{opacity:1},[`${t}-item-ellipsis`]:{opacity:0}},se(e))},[`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]:{marginInlineEnd:e.marginXS},[`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]:{display:"inline-block",minWidth:e.paginationItemSize,height:e.paginationItemSize,color:e.colorText,fontFamily:e.paginationFontFamily,lineHeight:`${e.paginationItemSize}px`,textAlign:"center",verticalAlign:"middle",listStyle:"none",borderRadius:e.borderRadius,cursor:"pointer",transition:`all ${e.motionDurationMid}`},[`${t}-prev, ${t}-next`]:{fontFamily:"Arial, Helvetica, sans-serif",outline:0,button:{color:e.colorText,cursor:"pointer",userSelect:"none"},[`${t}-item-link`]:{display:"block",width:"100%",height:"100%",padding:0,fontSize:e.fontSizeSM,textAlign:"center",backgroundColor:"transparent",border:`${e.lineWidth}px ${e.lineType} transparent`,borderRadius:e.borderRadius,outline:"none",transition:`border ${e.motionDurationMid}`},[`&:focus-visible ${t}-item-link`]:Object.assign({},se(e)),[`&:hover ${t}-item-link`]:{backgroundColor:e.colorBgTextHover},[`&:active ${t}-item-link`]:{backgroundColor:e.colorBgTextActive},[`&${t}-disabled:hover`]:{[`${t}-item-link`]:{backgroundColor:"transparent"}}},[`${t}-slash`]:{marginInlineEnd:e.paginationSlashMarginInlineEnd,marginInlineStart:e.paginationSlashMarginInlineStart},[`${t}-options`]:{display:"inline-block",marginInlineStart:e.margin,verticalAlign:"middle","&-size-changer.-select":{display:"inline-block",width:"auto"},"&-quick-jumper":{display:"inline-block",height:e.controlHeight,marginInlineStart:e.marginXS,lineHeight:`${e.controlHeight}px`,verticalAlign:"top",input:Object.assign(Object.assign({},He(e)),{width:e.controlHeightLG*1.25,height:e.controlHeight,boxSizing:"border-box",margin:0,marginInlineStart:e.marginXS,marginInlineEnd:e.marginXS})}}}},ke=e=>{const{componentCls:t}=e;return{[`${t}-item`]:Object.assign(Object.assign({display:"inline-block",minWidth:e.paginationItemSize,height:e.paginationItemSize,marginInlineEnd:e.marginXS,fontFamily:e.paginationFontFamily,lineHeight:`${e.paginationItemSize-2}px`,textAlign:"center",verticalAlign:"middle",listStyle:"none",backgroundColor:"transparent",border:`${e.lineWidth}px ${e.lineType} transparent`,borderRadius:e.borderRadius,outline:0,cursor:"pointer",userSelect:"none",a:{display:"block",padding:`0 ${e.paginationItemPaddingInline}px`,color:e.colorText,transition:"none","&:hover":{textDecoration:"none"}},[`&:not(${t}-item-active)`]:{"&:hover":{transition:`all ${e.motionDurationMid}`,backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive}}},we(e)),{"&-active":{fontWeight:e.paginationFontWeightActive,backgroundColor:e.paginationItemBgActive,borderColor:e.colorPrimary,a:{color:e.colorPrimary},"&:hover":{borderColor:e.colorPrimaryHover},"&:hover a":{color:e.colorPrimaryHover}}})}},et=e=>{const{componentCls:t}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},je(e)),{"ul, ol":{margin:0,padding:0,listStyle:"none"},"&::after":{display:"block",clear:"both",height:0,overflow:"hidden",visibility:"hidden",content:'""'},[`${t}-total-text`]:{display:"inline-block",height:e.paginationItemSize,marginInlineEnd:e.marginXS,lineHeight:`${e.paginationItemSize-2}px`,verticalAlign:"middle"}}),ke(e)),Ye(e)),Ze(e)),Qe(e)),qe(e)),{[`@media only screen and (max-width: ${e.screenLG}px)`]:{[`${t}-item`]:{"&-after-jump-prev, &-before-jump-next":{display:"none"}}},[`@media only screen and (max-width: ${e.screenSM}px)`]:{[`${t}-options`]:{display:"none"}}}),[`&${e.componentCls}-rtl`]:{direction:"rtl"}}},tt=e=>{const{componentCls:t}=e;return{[`${t}${t}-disabled`]:{"&, &:hover":{[`${t}-item-link`]:{borderColor:e.colorBorder}},"&:focus-visible":{[`${t}-item-link`]:{borderColor:e.colorBorder}},[`${t}-item, ${t}-item-link`]:{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,[`&:hover:not(${t}-item-active)`]:{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,a:{color:e.colorTextDisabled}},[`&${t}-item-active`]:{backgroundColor:e.paginationItemDisabledBgActive}},[`${t}-prev, ${t}-next`]:{"&:hover button":{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,color:e.colorTextDisabled},[`${t}-item-link`]:{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder}}},[t]:{[`${t}-prev, ${t}-next`]:{"&:hover button":{borderColor:e.colorPrimaryHover,backgroundColor:e.paginationItemBg},[`${t}-item-link`]:{backgroundColor:e.paginationItemLinkBg,borderColor:e.colorBorder},[`&:hover ${t}-item-link`]:{borderColor:e.colorPrimary,backgroundColor:e.paginationItemBg,color:e.colorPrimary},[`&${t}-disabled`]:{[`${t}-item-link`]:{borderColor:e.colorBorder,color:e.colorTextDisabled}}},[`${t}-item`]:{backgroundColor:e.paginationItemBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,[`&:hover:not(${t}-item-active)`]:{borderColor:e.colorPrimary,backgroundColor:e.paginationItemBg,a:{color:e.colorPrimary}},"&-active":{borderColor:e.colorPrimary}}}}},nt=Te("Pagination",e=>{const t=Be(e,{paginationItemSize:e.controlHeight,paginationFontFamily:e.fontFamily,paginationItemBg:e.colorBgContainer,paginationItemBgActive:e.colorBgContainer,paginationFontWeightActive:e.fontWeightStrong,paginationItemSizeSM:e.controlHeightSM,paginationItemInputBg:e.colorBgContainer,paginationMiniOptionsSizeChangerTop:0,paginationItemDisabledBgActive:e.controlItemBgActiveDisabled,paginationItemDisabledColorActive:e.colorTextDisabled,paginationItemLinkBg:e.colorBgContainer,inputOutlineOffset:"0 0",paginationMiniOptionsMarginInlineStart:e.marginXXS/2,paginationMiniQuickJumperInputWidth:e.controlHeightLG*1.1,paginationItemPaddingInline:e.marginXXS*1.5,paginationEllipsisLetterSpacing:e.marginXXS/2,paginationSlashMarginInlineStart:e.marginXXS,paginationSlashMarginInlineEnd:e.marginSM,paginationEllipsisTextIndent:"0.13em"},_e(e));return[et(t),e.wireframe&&tt(t)]});var it=globalThis&&globalThis.__rest||function(e,t){var d={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(d[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(d[a[n]]=e[a[n]]);return d};const at=e=>{var{prefixCls:t,selectPrefixCls:d,className:a,rootClassName:n,size:r,locale:o,selectComponentClass:l,responsive:g,showSizeChanger:i}=e,s=it(e,["prefixCls","selectPrefixCls","className","rootClassName","size","locale","selectComponentClass","responsive","showSizeChanger"]);const{xs:c}=Ke(g),{getPrefixCls:u,direction:v,pagination:S={}}=h.useContext(Me),p=u("pagination",t),[y,I]=nt(p),b=i??S.showSizeChanger,D=h.useMemo(()=>{const P=h.createElement("span",{className:`${p}-item-ellipsis`},"•••"),f=h.createElement("button",{className:`${p}-item-link`,type:"button",tabIndex:-1},v==="rtl"?h.createElement(ce,null):h.createElement(ue,null)),w=h.createElement("button",{className:`${p}-item-link`,type:"button",tabIndex:-1},v==="rtl"?h.createElement(ue,null):h.createElement(ce,null)),F=h.createElement("a",{className:`${p}-item-link`},h.createElement("div",{className:`${p}-item-container`},v==="rtl"?h.createElement(ge,{className:`${p}-item-link-icon`}):h.createElement(pe,{className:`${p}-item-link-icon`}),P)),C=h.createElement("a",{className:`${p}-item-link`},h.createElement("div",{className:`${p}-item-container`},v==="rtl"?h.createElement(pe,{className:`${p}-item-link-icon`}):h.createElement(ge,{className:`${p}-item-link-icon`}),P));return{prevIcon:f,nextIcon:w,jumpPrevIcon:F,jumpNextIcon:C}},[v,p]),[O]=Le("Pagination",De),T=Object.assign(Object.assign({},O),o),B=r==="small"||!!(c&&!r&&g),R=u("select",d),j=E({[`${p}-mini`]:B,[`${p}-rtl`]:v==="rtl"},a,n,I);return y(h.createElement(Ie,Object.assign({},D,s,{prefixCls:p,selectPrefixCls:R,className:j,selectComponentClass:l||(B?$e:ye),locale:T,showSizeChanger:b})))},rt=at,ot=({current:e,total:t,changePage:d})=>Re.jsx(rt,{current:e,total:t,pageSize:20,showSizeChanger:!1,onChange:a=>d(a)}),ut=m.memo(ot);export{ut as P};
