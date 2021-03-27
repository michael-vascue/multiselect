var VueformMultiselect=function(e,t){"use strict";function l(e){return-1!==[null,void 0,!1].indexOf(e)}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function o(e){return String(e).toLowerCase().trim()}var i={};function c(t,r,u){var c=e.toRefs(t),s=c.options,d=c.mode,v=c.trackBy,p=c.limit,f=c.hideSelected,h=c.createTag,m=c.label,y=c.appendNewTag,g=c.multipleLabel,w=c.object,b=c.loading,S=c.delay,k=c.resolveOnLoad,V=c.minChars,O=c.filterResults,B=c.clearOnSearch,x=c.clearOnSelect,N=c.valueProp,q=c.canDeselect,M=c.max,T=u.internalValue,P=u.externalValue,D=u.currentValue,C=u.search,K=u.blurSearch,A=u.clearSearch,j=u.update,I=u.blurInput,R=u.pointer,E=e.ref([]),L=e.ref([]),H=e.ref(!1),$=e.computed((function(){var e,t=L.value||[];return e=t,"[object Object]"===Object.prototype.toString.call(e)&&(t=Object.keys(t).map((function(e){var l,n=t[e];return a(l={},N.value,e),a(l,v.value,n),a(l,m.value,n),l}))),t=t.map((function(e,t){var l;return"object"===n(e)?e:(a(l={},N.value,t),a(l,v.value,e),a(l,m.value,e),l)})),E.value.length&&(t=t.concat(E.value)),t})),F=e.computed((function(){var e=$.value;return z.value.length&&(e=z.value.concat(e)),C.value&&O.value&&(e=e.filter((function(e){return-1!==o(e[v.value]).indexOf(o(C.value))}))),f.value&&(e=e.filter((function(e){return!oe(e)}))),p.value>0&&(e=e.slice(0,p.value)),e})),J=e.computed((function(){switch(d.value){case"single":return!l(T.value[N.value]);case"multiple":case"tags":return!l(T.value)&&T.value.length>0}})),_=e.computed((function(){return void 0!==g&&void 0!==g.value?g.value(T.value):T.value&&T.value.length>1?"".concat(T.value.length," options selected"):"1 option selected"})),U=e.computed((function(){return!$.value.length&&!H.value})),W=e.computed((function(){return $.value.length>0&&0==F.value.length})),z=e.computed((function(){var e;return!1!==h.value&&C.value?-1!==ue(C.value)?[]:[(e={},a(e,N.value,C.value),a(e,m.value,C.value),a(e,v.value,C.value),e)]:[]})),G=e.computed((function(){switch(d.value){case"single":return null;case"multiple":case"tags":return[]}})),Q=e.computed((function(){return b.value||H.value})),X=function(e){switch("object"!==n(e)&&(e=re(e)),d.value){case"single":j(e);break;case"multiple":case"tags":j(T.value.concat(e))}r.emit("select",Z(e))},Y=function(e){switch("object"!==n(e)&&(e=re(e)),d.value){case"single":te();break;case"tags":case"multiple":j(T.value.filter((function(t){return t[N.value]!=e[N.value]})))}r.emit("deselect",Z(e))},Z=function(e){return w.value?e:e[N.value]},ee=function(e){Y(e)},te=function(){j(G.value)},le=function(e){switch(d.value){case"single":return!l(T.value)&&T.value[N.value]==e[N.value];case"tags":case"multiple":return!l(T.value)&&-1!==T.value.map((function(e){return e[N.value]})).indexOf(e[N.value])}},ne=function(e){return!0===e.disabled},ae=function(){return!(void 0===M||-1===M.value||!J.value&&M.value>0)&&T.value.length>=M.value},re=function(e){return $.value[$.value.map((function(e){return String(e[N.value])})).indexOf(String(e))]},ue=function(e){return $.value.map((function(e){return o(e[v.value])})).indexOf(o(e))},oe=function(e){return"tags"===d.value&&f.value&&le(e)},ie=function(e){E.value.push(e)},ce=function(){l(P.value)||(T.value=de(P.value))},se=function(e){H.value=!0,s.value(C.value).then((function(t){L.value=t,"function"==typeof e&&e(t),H.value=!1}))},de=function(e){return l(e)?"single"===d.value?{}:[]:w.value?e:"single"===d.value?re(e)||{}:e.filter((function(e){return!!re(e)})).map((function(e){return re(e)}))};if("single"!==d.value&&!l(P.value)&&!Array.isArray(P.value))throw new Error('v-model must be an array when using "'.concat(d.value,'" mode'));return s&&"function"==typeof s.value?k.value?se(ce):1==w.value&&ce():(L.value=s&&s.value?s.value:[],ce()),S.value>-1&&e.watch(C,(function(e){e.length<V.value||(H.value=!0,B.value&&(L.value=[]),setTimeout((function(){e==C.value&&s.value(C.value).then((function(t){e==C.value&&(L.value=t,R.value=F.value.filter((function(e){return!0!==e.disabled}))[0]||null,H.value=!1)}))}),S.value))}),{flush:"sync"}),e.watch(P,(function(e){var t,n,a;if(l(e))T.value=de(e);else switch(d.value){case"single":(w.value?e[N.value]!=T.value[N.value]:e!=T.value[N.value])&&(T.value=de(e));break;case"multiple":case"tags":t=w.value?e.map((function(e){return e[N.value]})):e,n=T.value.map((function(e){return e[N.value]})),a=n.slice().sort(),t.length===n.length&&t.slice().sort().every((function(e,t){return e===a[t]}))||(T.value=de(e))}}),{deep:!0}),e.watch((function(){return t.options}),(function(e){"function"!=typeof t.options&&(L.value=t.options)}),{flush:"sync"}),e.watch($,(function(e,t){if(Object.keys(T.value).length||ce(),e.length&&D.value&&D.value.length){var l;if("single"===d.value){if(l=e[e.map((function(e){return e[N.value]})).indexOf(D.value)],JSON.stringify(l)===JSON.stringify(T.value))return}else if(l=[],D.value.forEach((function(t){l.push(e[e.map((function(e){return e[N.value]})).indexOf(t)])})),function(e,t){var l=e.length===t.length;if(!l)return l;try{e.every((function(e,l){if(JSON.stringify(e)!==JSON.stringify(t[l]))throw i}))}catch(e){if(e!==i)throw e;l=!1}return l}(l,T.value))return;w.value?j(l):T.value=l}}),{flush:"sync",deep:!0,immediate:!1}),{filteredOptions:F,hasSelected:J,multipleLabelText:_,extendedOptions:$,noOptions:U,noResults:W,resolving:H,busy:Q,select:X,deselect:Y,remove:ee,clear:te,isSelected:le,isDisabled:ne,isMax:ae,getOption:re,handleOptionClick:function(e){if(!ne(e))switch(d.value){case"single":if(le(e))return void(q.value&&Y(e));X(e),K(),I();break;case"multiple":if(le(e))return void Y(e);if(ae())return;X(e),x.value&&A();break;case"tags":if(le(e))return void Y(e);if(ae())return;void 0===re(e[N.value])&&h.value&&(r.emit("tag",e[N.value]),y.value&&ie(e),A()),x.value&&A(),X(e)}},handleTagRemove:function(e,t){0===t.button?ee(e):t.preventDefault()},refreshOptions:function(e){se(e)},resolveOptions:se}}var s={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1},id:{type:[String,Number],required:!1,default:"multiselect"},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},maxHeight:{type:Number,required:!1,default:160},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},addTagOn:{type:Array,required:!1,default:()=>["enter"]},required:{type:Boolean,required:!1,default:!1}},setup(t,n){const a=function(t,l){var n=e.toRefs(t),a=n.value,r=n.modelValue,u=n.mode,o=n.valueProp,i=e.ref("single"!==u.value?[]:{}),c=void 0!==l.expose?r:a,s=e.computed((function(){return Object.keys(i.value).length?"single"!==u.value?i.value.map((function(e){return e[o.value]})):i.value[o.value]:i.value})),d=e.computed((function(){return"single"!==u.value?i.value.map((function(e){return e[o.value]})).join(","):i.value[o.value]}));return{internalValue:i,externalValue:c,currentValue:s,textValue:d}}(t,n),u=function(t,l,n){var a=e.toRefs(t),r=a.searchable,u=(a.id,e.ref(null)),o=e.computed((function(){return r.value?-1:0}));return{multiselect:u,tabindex:o,focusInput:function(){u.value.querySelector(".multiselect-input").focus()},blurInput:function(){u.value.querySelector(".multiselect-input").blur()}}}(t),o={pointer:e.ref(null)},i=function(t,n,a){var r=e.toRefs(t),u=r.object,o=r.valueProp,i=r.mode,c=a.internalValue,s=function(e){return u.value||l(e)?e:Array.isArray(e)?e.map((function(e){return e[o.value]})):e[o.value]},d=function(e){return l(e)?"single"===i.value?{}:[]:e};return{update:function(e){c.value=d(e);var t=s(e);n.emit("change",t),n.emit("input",t),n.emit("update:modelValue",t)}}}(t,n,{internalValue:a.internalValue}),s=function(t,l,n){var a=e.toRefs(t),r=a.searchable,u=a.mode,o=n.internalValue,i=e.ref(null),c=e.ref(null),s=e.computed((function(){return i.value?"".concat(i.value.length,"ch"):"tags"===u.value&&-1===[null,void 0].indexOf(o.value)&&o.value.length?"1ch":"100%"}));return e.watch(i,(function(e){l.emit("search-change",e)})),{search:i,input:c,tagsSearchWidth:s,clearSearch:function(){i.value=""},focusSearch:function(){c.value.focus()},blurSearch:function(){r.value&&c.value.blur()}}}(t,n,{internalValue:a.internalValue}),d=function(t,l,n){var a=e.toRefs(t),r=a.maxHeight,u=a.disabled,o=a.searchable,i=n.multiselect,c=n.blurInput,s=n.blurSearch,d=n.focusInput,v=n.focusSearch,p=e.ref(!1),f=e.computed((function(){return"".concat(r.value,"px")}));return{isOpen:p,contentMaxHeight:f,openDropdown:function(){u.value||(p.value=!0,l.emit("open"))},closeDropdown:function(){p.value=!1,l.emit("close")},open:function(){o&&o.value?v():d()},close:function(){o&&o.value?s():c()},handleInputMousedown:function(e){p.value&&!o.value&&(i.value.querySelector(".multiselect-input").dispatchEvent(new Event("blur")),i.value.querySelector(".multiselect-input").blur(),e.preventDefault())}}}(t,n,{multiselect:u.multiselect,blurInput:u.blurInput,blurSearch:s.blurSearch,focusInput:u.focusInput,focusSearch:s.focusSearch}),v=c(t,n,{externalValue:a.externalValue,internalValue:a.internalValue,currentValue:a.currentValue,search:s.search,blurSearch:s.blurSearch,clearSearch:s.clearSearch,update:i.update,blurInput:u.blurInput,pointer:o.pointer}),p=function(t,l,n){var a=e.toRefs(t),r=a.id,u=a.valueProp,o=n.filteredOptions,i=n.handleOptionClick,c=n.search,s=n.pointer,d=e.computed((function(){return o.value.filter((function(e){return!0!==e.disabled}))})),v=function(e){s.value=e},p=function(){s.value=d.value[0]||null},f=function(){s.value=null},h=function(){var e=document.getElementById(r.value).querySelector(".is-pointed");if(e){var t=e.parentElement;e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return e.watch(c,(function(e){p()})),{pointer:s,isPointed:function(e){return!!s.value&&s.value[u.value]==e[u.value]},setPointer:v,setPointerFirst:p,clearPointer:f,selectPointer:function(){s.value&&!0!==s.value.disabled?(i(s.value),f()):f()},forwardPointer:function(){if(null===s.value)v(d.value[0]||null);else{var t=d.value.map((function(e){return e[u.value]})).indexOf(s.value[u.value])+1;d.value.length<=t&&(t=0),v(d.value[t]||null)}e.nextTick((function(){h()}))},backwardPointer:function(){if(null===s.value)v(d.value[d.value.length-1]||null);else{var t=d.value.map((function(e){return e[u.value]})).indexOf(s.value[u.value])-1;t<0&&(t=d.value.length-1),v(d.value[t]||null)}e.nextTick((function(){h()}))}}}(t,0,{filteredOptions:v.filteredOptions,handleOptionClick:v.handleOptionClick,search:s.search,pointer:o.pointer}),f=function(t,l,n){var a=e.toRefs(t),u=a.mode,o=a.addTagOn,i=a.createTag,c=n.internalValue,s=n.update,d=n.closeDropdown,v=n.clearPointer,p=n.search,f=n.selectPointer;return{handleBackspace:function(e){"single"!==u.value&&s(r(c.value).slice(0,-1))},handleEsc:function(e){d(),v(),e.target.blur()},handleSearchBackspace:function(e){""!==p.value&&e.stopPropagation()},handleAddTag:function(e){13!==e.keyCode||-1===o.value.indexOf("enter")&&i.value?32===e.keyCode&&-1!==o.value.indexOf("space")&&i.value&&f():f()}}}(t,0,{internalValue:a.internalValue,update:i.update,closeDropdown:d.closeDropdown,clearPointer:p.clearPointer,search:s.search,selectPointer:p.selectPointer});return{...a,...d,...u,...o,...i,...s,...v,...p,...f}}};const d={class:"multiselect-single-label"},v={class:"multiselect-multiple-label"},p={key:2,class:"multiselect-search"},f={key:3,class:"multiselect-tags"},h={class:"multiselect-tag"},m={class:"multiselect-placeholder"},y={class:"multiselect-spinner"},g={class:"multiselect-no-options"},w={class:"multiselect-no-results"};return s.render=function(e,l,n,a,r,u){return t.openBlock(),t.createBlock("div",{class:["multiselect",[`is-${n.mode}`,{"is-open":e.isOpen,"is-searchable":n.searchable,"is-disabled":n.disabled,"no-caret":!n.caret}]],id:n.id,onKeydown:l[29]||(l[29]=t.withKeys(t.withModifiers((()=>{}),["prevent"]),["enter"])),ref:"multiselect"},[t.createVNode("div",{class:"multiselect-input",tabindex:e.tabindex,onMousedown:l[20]||(l[20]=(...t)=>e.handleInputMousedown&&e.handleInputMousedown(...t)),onFocus:l[21]||(l[21]=(...t)=>e.openDropdown&&e.openDropdown(...t)),onBlur:l[22]||(l[22]=(...t)=>e.closeDropdown&&e.closeDropdown(...t)),onKeyup:[l[23]||(l[23]=t.withKeys(((...t)=>e.handleEsc&&e.handleEsc(...t)),["esc"])),l[24]||(l[24]=t.withKeys(((...t)=>e.selectPointer&&e.selectPointer(...t)),["enter"]))],onKeydown:[l[25]||(l[25]=t.withKeys(t.withModifiers(((...t)=>e.handleBackspace&&e.handleBackspace(...t)),["prevent"]),["delete"])),l[26]||(l[26]=t.withKeys(t.withModifiers(((...t)=>e.backwardPointer&&e.backwardPointer(...t)),["prevent"]),["up"])),l[27]||(l[27]=t.withKeys(t.withModifiers(((...t)=>e.forwardPointer&&e.forwardPointer(...t)),["prevent"]),["down"]))]},[t.createCommentVNode(" Single label "),"single"==n.mode&&e.hasSelected&&!e.search&&e.internalValue?t.renderSlot(e.$slots,"singlelabel",{key:0,value:e.internalValue},(()=>[t.createVNode("div",d,t.toDisplayString(e.internalValue[n.label]),1)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Multiple label "),"multiple"==n.mode&&e.hasSelected&&!e.search?t.renderSlot(e.$slots,"multiplelabel",{key:1,values:e.internalValue},(()=>[t.createVNode("div",v,t.toDisplayString(e.multipleLabelText),1)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Search "),"tags"!==n.mode&&n.searchable&&!n.disabled?(t.openBlock(),t.createBlock("div",p,[t.withDirectives(t.createVNode("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>e.search=t),onFocus:l[2]||(l[2]=t.withModifiers(((...t)=>e.openDropdown&&e.openDropdown(...t)),["stop"])),onBlur:l[3]||(l[3]=t.withModifiers(((...t)=>e.closeDropdown&&e.closeDropdown(...t)),["stop"])),onKeyup:[l[4]||(l[4]=t.withKeys(t.withModifiers(((...t)=>e.handleEsc&&e.handleEsc(...t)),["stop"]),["esc"])),l[5]||(l[5]=t.withKeys(t.withModifiers(((...t)=>e.selectPointer&&e.selectPointer(...t)),["stop"]),["enter"]))],onKeydown:[l[6]||(l[6]=t.withKeys(((...t)=>e.handleSearchBackspace&&e.handleSearchBackspace(...t)),["delete"])),l[7]||(l[7]=t.withKeys(t.withModifiers(((...t)=>e.backwardPointer&&e.backwardPointer(...t)),["stop"]),["up"])),l[8]||(l[8]=t.withKeys(t.withModifiers(((...t)=>e.forwardPointer&&e.forwardPointer(...t)),["stop"]),["down"]))],ref:"input"},null,544),[[t.vModelText,e.search]])])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Tags (with search) "),"tags"==n.mode?(t.openBlock(),t.createBlock("div",f,[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.internalValue,((a,r,u)=>(t.openBlock(),t.createBlock("span",{key:u},[t.renderSlot(e.$slots,"tag",{option:a,handleTagRemove:e.handleTagRemove,disabled:n.disabled},(()=>[t.createVNode("div",h,[t.createTextVNode(t.toDisplayString(a[n.label])+" ",1),n.disabled?t.createCommentVNode("v-if",!0):(t.openBlock(),t.createBlock("i",{key:0,onClick:l[9]||(l[9]=t.withModifiers((()=>{}),["prevent"])),onMousedown:t.withModifiers((t=>e.handleTagRemove(a,t)),["prevent","stop"])},null,40,["onMousedown"]))])]))])))),128)),n.searchable&&!n.disabled?(t.openBlock(),t.createBlock("div",{key:0,class:"multiselect-search",style:{width:e.tagsSearchWidth}},[t.withDirectives(t.createVNode("input",{"onUpdate:modelValue":l[10]||(l[10]=t=>e.search=t),onFocus:l[11]||(l[11]=t.withModifiers(((...t)=>e.openDropdown&&e.openDropdown(...t)),["stop"])),onBlur:l[12]||(l[12]=t.withModifiers(((...t)=>e.closeDropdown&&e.closeDropdown(...t)),["stop"])),onKeyup:[l[13]||(l[13]=t.withKeys(t.withModifiers(((...t)=>e.handleEsc&&e.handleEsc(...t)),["stop"]),["esc"])),l[14]||(l[14]=t.withKeys(t.withModifiers(((...t)=>e.handleAddTag&&e.handleAddTag(...t)),["stop"]),["enter"])),l[15]||(l[15]=t.withKeys(t.withModifiers(((...t)=>e.handleAddTag&&e.handleAddTag(...t)),["stop"]),["space"]))],onKeydown:[l[16]||(l[16]=t.withKeys(((...t)=>e.handleSearchBackspace&&e.handleSearchBackspace(...t)),["delete"])),l[17]||(l[17]=t.withKeys(t.withModifiers(((...t)=>e.backwardPointer&&e.backwardPointer(...t)),["stop"]),["up"])),l[18]||(l[18]=t.withKeys(t.withModifiers(((...t)=>e.forwardPointer&&e.forwardPointer(...t)),["stop"]),["down"]))],style:{width:e.tagsSearchWidth},ref:"input"},null,36),[[t.vModelText,e.search]])],4)):t.createCommentVNode("v-if",!0)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Placeholder "),t.withDirectives(t.createVNode("template",null,[t.renderSlot(e.$slots,"placeholder",{},(()=>[t.createVNode("div",m,t.toDisplayString(n.placeholder),1)]))],512),[[t.vShow,n.placeholder&&!e.hasSelected&&!e.search]]),t.createVNode(t.Transition,{name:"multiselect-loading"},{default:t.withCtx((()=>[t.withDirectives(t.createVNode("div",y,null,512),[[t.vShow,e.busy]])])),_:1}),"single"!==n.mode&&e.hasSelected&&!n.disabled?(t.openBlock(),t.createBlock("a",{key:4,class:"multiselect-clear",onClick:l[19]||(l[19]=t.withModifiers(((...t)=>e.clear&&e.clear(...t)),["prevent"]))})):t.createCommentVNode("v-if",!0)],40,["tabindex"]),t.createCommentVNode(" Options "),e.resolving&&n.clearOnSearch?t.createCommentVNode("v-if",!0):(t.openBlock(),t.createBlock(t.Transition,{key:0,name:"multiselect",onAfterLeave:e.clearSearch},{default:t.withCtx((()=>[t.withDirectives(t.createVNode("div",{class:"multiselect-options",style:{maxHeight:e.contentMaxHeight}},[t.renderSlot(e.$slots,"beforelist"),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.filteredOptions,((a,r,u)=>(t.openBlock(),t.createBlock("span",{tabindex:-1,class:["multiselect-option",{"is-pointed":e.isPointed(a),"is-selected":e.isSelected(a),"is-disabled":e.isDisabled(a)}],key:u,onMousedown:l[28]||(l[28]=t.withModifiers((()=>{}),["prevent"])),onMouseenter:t=>e.setPointer(a),onClick:t.withModifiers((t=>e.handleOptionClick(a)),["stop","prevent"])},[t.renderSlot(e.$slots,"option",{option:a,search:e.search},(()=>[t.createVNode("span",null,t.toDisplayString(a[n.label]),1)]))],42,["onMouseenter","onClick"])))),128)),t.withDirectives(t.createVNode("span",null,[t.renderSlot(e.$slots,"nooptions",{},(()=>[t.createVNode("div",g,t.toDisplayString(n.noOptionsText),1)]))],512),[[t.vShow,e.noOptions]]),t.withDirectives(t.createVNode("span",null,[t.renderSlot(e.$slots,"noresults",{},(()=>[t.createVNode("div",w,t.toDisplayString(n.noResultsText),1)]))],512),[[t.vShow,e.noResults]]),t.renderSlot(e.$slots,"afterlist")],4),[[t.vShow,e.isOpen&&n.showOptions]])])),_:3},8,["onAfterLeave"])),t.createCommentVNode(" Hacky input element to show HTML5 required warning "),n.required?(t.openBlock(),t.createBlock("input",{key:1,class:"multiselect-fake-input",tabindex:"-1",value:e.textValue,required:""},null,8,["value"])):t.createCommentVNode("v-if",!0)],42,["id"])},s.__file="src/Multiselect.vue",s}(Vue,Vue);
