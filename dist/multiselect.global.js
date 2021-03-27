var VueformMultiselect=function(e,t){"use strict";function n(e){return-1!==[null,void 0,!1].indexOf(e)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function o(e){return String(e).toLowerCase().trim()}var i={};function c(t,r,u){var c=e.toRefs(t),s=c.options,d=c.mode,v=c.trackBy,p=c.limit,f=c.hideSelected,h=c.createTag,m=c.label,y=c.appendNewTag,g=c.multipleLabel,w=c.object,b=c.loading,S=c.delay,k=c.resolveOnLoad,V=c.minChars,O=c.filterResults,B=c.clearOnSearch,x=c.clearOnSelect,N=c.valueProp,q=c.canDeselect,M=c.max,T=u.internalValue,P=u.externalValue,D=u.currentValue,C=u.search,K=u.blurSearch,A=u.clearSearch,j=u.update,I=u.blurInput,R=u.pointer,E=e.ref([]),L=e.ref([]),H=e.ref(!1),$=e.computed((function(){var e,t=L.value||[];return e=t,"[object Object]"===Object.prototype.toString.call(e)&&(t=Object.keys(t).map((function(e){var n,l=t[e];return a(n={},N.value,e),a(n,v.value,l),a(n,m.value,l),n}))),t=t.map((function(e,t){var n;return"object"===l(e)?e:(a(n={},N.value,t),a(n,v.value,e),a(n,m.value,e),n)})),E.value.length&&(t=t.concat(E.value)),t})),F=e.computed((function(){var e=$.value;return z.value.length&&(e=z.value.concat(e)),C.value&&O.value&&(e=e.filter((function(e){return-1!==o(e[v.value]).indexOf(o(C.value))}))),f.value&&(e=e.filter((function(e){return!oe(e)}))),p.value>0&&(e=e.slice(0,p.value)),e})),J=e.computed((function(){switch(d.value){case"single":return!n(T.value[N.value]);case"multiple":case"tags":return!n(T.value)&&T.value.length>0}})),_=e.computed((function(){return void 0!==g&&void 0!==g.value?g.value(T.value):T.value&&T.value.length>1?"".concat(T.value.length," options selected"):"1 option selected"})),U=e.computed((function(){return!$.value.length&&!H.value})),W=e.computed((function(){return $.value.length>0&&0==F.value.length})),z=e.computed((function(){var e;return!1!==h.value&&C.value?-1!==ue(C.value)?[]:[(e={},a(e,N.value,C.value),a(e,m.value,C.value),a(e,v.value,C.value),e)]:[]})),G=e.computed((function(){switch(d.value){case"single":return null;case"multiple":case"tags":return[]}})),Q=e.computed((function(){return b.value||H.value})),X=function(e){switch("object"!==l(e)&&(e=re(e)),d.value){case"single":j(e);break;case"multiple":case"tags":j(T.value.concat(e))}r.emit("select",Z(e))},Y=function(e){switch("object"!==l(e)&&(e=re(e)),d.value){case"single":te();break;case"tags":case"multiple":j(T.value.filter((function(t){return t[N.value]!=e[N.value]})))}r.emit("deselect",Z(e))},Z=function(e){return w.value?e:e[N.value]},ee=function(e){Y(e)},te=function(){j(G.value)},ne=function(e){switch(d.value){case"single":return!n(T.value)&&T.value[N.value]==e[N.value];case"tags":case"multiple":return!n(T.value)&&-1!==T.value.map((function(e){return e[N.value]})).indexOf(e[N.value])}},le=function(e){return!0===e.disabled},ae=function(){return!(void 0===M||-1===M.value||!J.value&&M.value>0)&&T.value.length>=M.value},re=function(e){return $.value[$.value.map((function(e){return String(e[N.value])})).indexOf(String(e))]},ue=function(e){return $.value.map((function(e){return o(e[v.value])})).indexOf(o(e))},oe=function(e){return"tags"===d.value&&f.value&&ne(e)},ie=function(e){E.value.push(e)},ce=function(){n(P.value)||(T.value=de(P.value))},se=function(e){H.value=!0,s.value(C.value).then((function(t){L.value=t,"function"==typeof e&&e(t),H.value=!1}))},de=function(e){return n(e)?"single"===d.value?{}:[]:w.value?e:"single"===d.value?re(e)||{}:e.filter((function(e){return!!re(e)})).map((function(e){return re(e)}))};if("single"!==d.value&&!n(P.value)&&!Array.isArray(P.value))throw new Error('v-model must be an array when using "'.concat(d.value,'" mode'));return s&&"function"==typeof s.value?k.value?se(ce):1==w.value&&ce():(L.value=s&&s.value?s.value:[],ce()),S.value>-1&&e.watch(C,(function(e){e.length<V.value||(H.value=!0,B.value&&(L.value=[]),setTimeout((function(){e==C.value&&s.value(C.value).then((function(t){e==C.value&&(L.value=t,R.value=F.value.filter((function(e){return!0!==e.disabled}))[0]||null,H.value=!1)}))}),S.value))}),{flush:"sync"}),e.watch(P,(function(e){var t,l,a;if(n(e))T.value=de(e);else switch(d.value){case"single":(w.value?e[N.value]!=T.value[N.value]:e!=T.value[N.value])&&(T.value=de(e));break;case"multiple":case"tags":t=w.value?e.map((function(e){return e[N.value]})):e,l=T.value.map((function(e){return e[N.value]})),a=l.slice().sort(),t.length===l.length&&t.slice().sort().every((function(e,t){return e===a[t]}))||(T.value=de(e))}}),{deep:!0}),e.watch((function(){return t.options}),(function(e){"function"!=typeof t.options&&(L.value=t.options)}),{flush:"sync"}),e.watch($,(function(e,t){if(Object.keys(T.value).length||ce(),e.length&&D.value&&D.value.length){var n;if("single"===d.value){if(n=e[e.map((function(e){return e[N.value]})).indexOf(D.value)],JSON.stringify(n)===JSON.stringify(T.value))return}else if(n=[],D.value.forEach((function(t){n.push(e[e.map((function(e){return e[N.value]})).indexOf(t)])})),function(e,t){var n=e.length===t.length;if(!n)return n;try{e.every((function(e,n){if(JSON.stringify(e)!==JSON.stringify(t[n]))throw i}))}catch(e){if(e!==i)throw e;n=!1}return n}(n,T.value))return;w.value?j(n):T.value=n}}),{flush:"sync",deep:!0,immediate:!1}),{filteredOptions:F,hasSelected:J,multipleLabelText:_,extendedOptions:$,noOptions:U,noResults:W,resolving:H,busy:Q,select:X,deselect:Y,remove:ee,clear:te,isSelected:ne,isDisabled:le,isMax:ae,getOption:re,handleOptionClick:function(e){if(!le(e))switch(d.value){case"single":if(ne(e))return void(q.value&&Y(e));X(e),K(),I();break;case"multiple":if(ne(e))return void Y(e);if(ae())return;X(e),x.value&&A();break;case"tags":if(ne(e))return void Y(e);if(ae())return;void 0===re(e[N.value])&&h.value&&(r.emit("tag",e[N.value]),y.value&&ie(e),A()),x.value&&A(),X(e)}},handleTagRemove:function(e,t){0===t.button?ee(e):t.preventDefault()},refreshOptions:function(e){se(e)},resolveOptions:se}}var s={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1},id:{type:[String,Number],required:!1,default:"multiselect"},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},maxHeight:{type:Number,required:!1,default:160},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},addTagOn:{type:Array,required:!1,default:()=>["enter"]},required:{type:Boolean,required:!1,default:!1}},setup(t,l){const a=function(t,n){var l=e.toRefs(t),a=l.value,r=l.modelValue,u=l.mode,o=l.valueProp,i=e.ref("single"!==u.value?[]:{}),c=void 0!==n.expose?r:a,s=e.computed((function(){return Object.keys(i.value).length?"single"!==u.value?i.value.map((function(e){return e[o.value]})):i.value[o.value]:i.value})),d=e.computed((function(){return"single"!==u.value?i.value.map((function(e){return e[o.value]})).join(","):i.value[o.value]}));return{internalValue:i,externalValue:c,currentValue:s,textValue:d}}(t,l),u=function(t,n,l){var a=e.toRefs(t),r=a.searchable,u=(a.id,e.ref(null)),o=e.computed((function(){return r.value?-1:0}));return{multiselect:u,tabindex:o,focusInput:function(){u.value.querySelector(".multiselect-input").focus()},blurInput:function(){u.value.querySelector(".multiselect-input").blur()}}}(t),o={pointer:e.ref(null)},i=function(t,l,a){var r=e.toRefs(t),u=r.object,o=r.valueProp,i=r.mode,c=a.internalValue,s=function(e){return u.value||n(e)?e:Array.isArray(e)?e.map((function(e){return e[o.value]})):e[o.value]},d=function(e){return n(e)?"single"===i.value?{}:[]:e};return{update:function(e){c.value=d(e);var t=s(e);l.emit("change",t),l.emit("input",t),l.emit("update:modelValue",t)}}}(t,l,{internalValue:a.internalValue}),s=function(t,n,l){var a=e.toRefs(t),r=a.searchable,u=a.mode,o=l.internalValue,i=e.ref(null),c=e.ref(null),s=e.computed((function(){return i.value?"".concat(i.value.length,"ch"):"tags"===u.value&&-1===[null,void 0].indexOf(o.value)&&o.value.length?"1ch":"100%"}));return e.watch(i,(function(e){n.emit("search-change",e)})),{search:i,input:c,tagsSearchWidth:s,clearSearch:function(){i.value=""},focusSearch:function(){c.value.focus()},blurSearch:function(){r.value&&c.value.blur()}}}(t,l,{internalValue:a.internalValue}),d=function(t,n,l){var a=e.toRefs(t),r=a.maxHeight,u=a.disabled,o=a.searchable,i=l.multiselect,c=l.blurInput,s=l.blurSearch,d=l.focusInput,v=l.focusSearch,p=e.ref(!1),f=e.computed((function(){return"".concat(r.value,"px")}));return{isOpen:p,contentMaxHeight:f,openDropdown:function(){u.value||(p.value=!0,n.emit("open"))},closeDropdown:function(){p.value=!1,n.emit("close")},open:function(){o&&o.value?v():d()},close:function(){o&&o.value?s():c()},handleInputMousedown:function(e){p.value&&!o.value&&(i.value.querySelector(".multiselect-input").dispatchEvent(new Event("blur")),i.value.querySelector(".multiselect-input").blur(),e.preventDefault())}}}(t,l,{multiselect:u.multiselect,blurInput:u.blurInput,blurSearch:s.blurSearch,focusInput:u.focusInput,focusSearch:s.focusSearch}),v=c(t,l,{externalValue:a.externalValue,internalValue:a.internalValue,currentValue:a.currentValue,search:s.search,blurSearch:s.blurSearch,clearSearch:s.clearSearch,update:i.update,blurInput:u.blurInput,pointer:o.pointer}),p=function(t,n,l){var a=e.toRefs(t),r=a.id,u=a.valueProp,o=l.filteredOptions,i=l.handleOptionClick,c=l.search,s=l.pointer,d=e.computed((function(){return o.value.filter((function(e){return!0!==e.disabled}))})),v=function(e){s.value=e},p=function(){s.value=d.value[0]||null},f=function(){s.value=null},h=function(){var e=document.getElementById(r.value).querySelector(".is-pointed");if(e){var t=e.parentElement;e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return e.watch(c,(function(e){p()})),{pointer:s,isPointed:function(e){return!!s.value&&s.value[u.value]==e[u.value]},setPointer:v,setPointerFirst:p,clearPointer:f,selectPointer:function(){s.value&&!0!==s.value.disabled?(i(s.value),f()):f()},forwardPointer:function(){if(null===s.value)v(d.value[0]||null);else{var t=d.value.map((function(e){return e[u.value]})).indexOf(s.value[u.value])+1;d.value.length<=t&&(t=0),v(d.value[t]||null)}e.nextTick((function(){h()}))},backwardPointer:function(){if(null===s.value)v(d.value[d.value.length-1]||null);else{var t=d.value.map((function(e){return e[u.value]})).indexOf(s.value[u.value])-1;t<0&&(t=d.value.length-1),v(d.value[t]||null)}e.nextTick((function(){h()}))}}}(t,0,{filteredOptions:v.filteredOptions,handleOptionClick:v.handleOptionClick,search:s.search,pointer:o.pointer}),f=function(t,n,l){var a=e.toRefs(t),u=a.mode,o=a.addTagOn,i=a.createTag,c=l.internalValue,s=l.update,d=l.closeDropdown,v=l.clearPointer,p=l.search,f=l.selectPointer;return{handleBackspace:function(e){"single"!==u.value&&s(r(c.value).slice(0,-1))},handleEsc:function(e){d(),v(),e.target.blur()},handleSearchBackspace:function(e){""!==p.value&&e.stopPropagation()},handleAddTag:function(e){13!==e.keyCode||-1===o.value.indexOf("enter")&&i.value?32===e.keyCode&&-1!==o.value.indexOf("space")&&i.value&&f():f()}}}(t,0,{internalValue:a.internalValue,update:i.update,closeDropdown:d.closeDropdown,clearPointer:p.clearPointer,search:s.search,selectPointer:p.selectPointer});return{...a,...d,...u,...o,...i,...s,...v,...p,...f}}};const d={class:"multiselect-single-label"},v={class:"multiselect-multiple-label"},p={key:2,class:"multiselect-search"},f={key:3,class:"multiselect-tags"},h={class:"multiselect-tag"},m={class:"multiselect-spinner"},y={class:"multiselect-no-options"},g={class:"multiselect-no-results"};return s.render=function(e,n,l,a,r,u){return t.openBlock(),t.createBlock("div",{class:["multiselect",[`is-${l.mode}`,{"is-open":e.isOpen,"is-searchable":l.searchable,"is-disabled":l.disabled,"no-caret":!l.caret}]],id:l.id,onKeydown:n[29]||(n[29]=t.withKeys(t.withModifiers((()=>{}),["prevent"]),["enter"])),ref:"multiselect"},[t.createVNode("div",{class:"multiselect-input",tabindex:e.tabindex,onMousedown:n[20]||(n[20]=(...t)=>e.handleInputMousedown&&e.handleInputMousedown(...t)),onFocus:n[21]||(n[21]=(...t)=>e.openDropdown&&e.openDropdown(...t)),onBlur:n[22]||(n[22]=(...t)=>e.closeDropdown&&e.closeDropdown(...t)),onKeyup:[n[23]||(n[23]=t.withKeys(((...t)=>e.handleEsc&&e.handleEsc(...t)),["esc"])),n[24]||(n[24]=t.withKeys(((...t)=>e.selectPointer&&e.selectPointer(...t)),["enter"]))],onKeydown:[n[25]||(n[25]=t.withKeys(t.withModifiers(((...t)=>e.handleBackspace&&e.handleBackspace(...t)),["prevent"]),["delete"])),n[26]||(n[26]=t.withKeys(t.withModifiers(((...t)=>e.backwardPointer&&e.backwardPointer(...t)),["prevent"]),["up"])),n[27]||(n[27]=t.withKeys(t.withModifiers(((...t)=>e.forwardPointer&&e.forwardPointer(...t)),["prevent"]),["down"]))]},[t.createCommentVNode(" Single label "),"single"==l.mode&&e.hasSelected&&!e.search&&e.internalValue?t.renderSlot(e.$slots,"singlelabel",{key:0,value:e.internalValue},(()=>[t.createVNode("div",d,t.toDisplayString(e.internalValue[l.label]),1)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Multiple label "),"multiple"==l.mode&&e.hasSelected&&!e.search?t.renderSlot(e.$slots,"multiplelabel",{key:1,values:e.internalValue},(()=>[t.createVNode("div",v,t.toDisplayString(e.multipleLabelText),1)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Search "),"tags"!==l.mode&&l.searchable&&!l.disabled?(t.openBlock(),t.createBlock("div",p,[t.withDirectives(t.createVNode("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>e.search=t),onFocus:n[2]||(n[2]=t.withModifiers(((...t)=>e.openDropdown&&e.openDropdown(...t)),["stop"])),onBlur:n[3]||(n[3]=t.withModifiers(((...t)=>e.closeDropdown&&e.closeDropdown(...t)),["stop"])),onKeyup:[n[4]||(n[4]=t.withKeys(t.withModifiers(((...t)=>e.handleEsc&&e.handleEsc(...t)),["stop"]),["esc"])),n[5]||(n[5]=t.withKeys(t.withModifiers(((...t)=>e.selectPointer&&e.selectPointer(...t)),["stop"]),["enter"]))],onKeydown:[n[6]||(n[6]=t.withKeys(((...t)=>e.handleSearchBackspace&&e.handleSearchBackspace(...t)),["delete"])),n[7]||(n[7]=t.withKeys(t.withModifiers(((...t)=>e.backwardPointer&&e.backwardPointer(...t)),["stop"]),["up"])),n[8]||(n[8]=t.withKeys(t.withModifiers(((...t)=>e.forwardPointer&&e.forwardPointer(...t)),["stop"]),["down"]))],ref:"input"},null,544),[[t.vModelText,e.search]])])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Tags (with search) "),"tags"==l.mode?(t.openBlock(),t.createBlock("div",f,[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.internalValue,((a,r,u)=>(t.openBlock(),t.createBlock("span",{key:u},[t.renderSlot(e.$slots,"tag",{option:a,handleTagRemove:e.handleTagRemove,disabled:l.disabled},(()=>[t.createVNode("div",h,[t.createTextVNode(t.toDisplayString(a[l.label])+" ",1),l.disabled?t.createCommentVNode("v-if",!0):(t.openBlock(),t.createBlock("i",{key:0,onClick:n[9]||(n[9]=t.withModifiers((()=>{}),["prevent"])),onMousedown:t.withModifiers((t=>e.handleTagRemove(a,t)),["prevent","stop"])},null,40,["onMousedown"]))])]))])))),128)),l.searchable&&!l.disabled?(t.openBlock(),t.createBlock("div",{key:0,class:"multiselect-search",style:{width:e.tagsSearchWidth}},[t.withDirectives(t.createVNode("input",{"onUpdate:modelValue":n[10]||(n[10]=t=>e.search=t),onFocus:n[11]||(n[11]=t.withModifiers(((...t)=>e.openDropdown&&e.openDropdown(...t)),["stop"])),onBlur:n[12]||(n[12]=t.withModifiers(((...t)=>e.closeDropdown&&e.closeDropdown(...t)),["stop"])),onKeyup:[n[13]||(n[13]=t.withKeys(t.withModifiers(((...t)=>e.handleEsc&&e.handleEsc(...t)),["stop"]),["esc"])),n[14]||(n[14]=t.withKeys(t.withModifiers(((...t)=>e.handleAddTag&&e.handleAddTag(...t)),["stop"]),["enter"])),n[15]||(n[15]=t.withKeys(t.withModifiers(((...t)=>e.handleAddTag&&e.handleAddTag(...t)),["stop"]),["space"]))],onKeydown:[n[16]||(n[16]=t.withKeys(((...t)=>e.handleSearchBackspace&&e.handleSearchBackspace(...t)),["delete"])),n[17]||(n[17]=t.withKeys(t.withModifiers(((...t)=>e.backwardPointer&&e.backwardPointer(...t)),["stop"]),["up"])),n[18]||(n[18]=t.withKeys(t.withModifiers(((...t)=>e.forwardPointer&&e.forwardPointer(...t)),["stop"]),["down"]))],style:{width:e.tagsSearchWidth},ref:"input"},null,36),[[t.vModelText,e.search]])],4)):t.createCommentVNode("v-if",!0)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Placeholder "),t.createCommentVNode(' <template >\n        <slot name="placeholder"> '),t.withDirectives(t.createVNode("div",{class:"multiselect-placeholder"},t.toDisplayString(l.placeholder),513),[[t.vShow,l.placeholder&&!e.hasSelected&&!e.search]]),t.createCommentVNode(" </slot>\n      </template> "),t.createVNode(t.Transition,{name:"multiselect-loading"},{default:t.withCtx((()=>[t.withDirectives(t.createVNode("div",m,null,512),[[t.vShow,e.busy]])])),_:1}),"single"!==l.mode&&e.hasSelected&&!l.disabled?(t.openBlock(),t.createBlock("a",{key:4,class:"multiselect-clear",onClick:n[19]||(n[19]=t.withModifiers(((...t)=>e.clear&&e.clear(...t)),["prevent"]))})):t.createCommentVNode("v-if",!0)],40,["tabindex"]),t.createCommentVNode(" Options "),e.resolving&&l.clearOnSearch?t.createCommentVNode("v-if",!0):(t.openBlock(),t.createBlock(t.Transition,{key:0,name:"multiselect",onAfterLeave:e.clearSearch},{default:t.withCtx((()=>[t.withDirectives(t.createVNode("div",{class:"multiselect-options",style:{maxHeight:e.contentMaxHeight}},[t.renderSlot(e.$slots,"beforelist"),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.filteredOptions,((a,r,u)=>(t.openBlock(),t.createBlock("span",{tabindex:-1,class:["multiselect-option",{"is-pointed":e.isPointed(a),"is-selected":e.isSelected(a),"is-disabled":e.isDisabled(a)}],key:u,onMousedown:n[28]||(n[28]=t.withModifiers((()=>{}),["prevent"])),onMouseenter:t=>e.setPointer(a),onClick:t.withModifiers((t=>e.handleOptionClick(a)),["stop","prevent"])},[t.renderSlot(e.$slots,"option",{option:a,search:e.search},(()=>[t.createVNode("span",null,t.toDisplayString(a[l.label]),1)]))],42,["onMouseenter","onClick"])))),128)),t.withDirectives(t.createVNode("span",null,[t.renderSlot(e.$slots,"nooptions",{},(()=>[t.createVNode("div",y,t.toDisplayString(l.noOptionsText),1)]))],512),[[t.vShow,e.noOptions]]),t.withDirectives(t.createVNode("span",null,[t.renderSlot(e.$slots,"noresults",{},(()=>[t.createVNode("div",g,t.toDisplayString(l.noResultsText),1)]))],512),[[t.vShow,e.noResults]]),t.renderSlot(e.$slots,"afterlist")],4),[[t.vShow,e.isOpen&&l.showOptions]])])),_:3},8,["onAfterLeave"])),t.createCommentVNode(" Hacky input element to show HTML5 required warning "),l.required?(t.openBlock(),t.createBlock("input",{key:1,class:"multiselect-fake-input",tabindex:"-1",value:e.textValue,required:""},null,8,["value"])):t.createCommentVNode("v-if",!0)],42,["id"])},s.__file="src/Multiselect.vue",s}(Vue,Vue);
