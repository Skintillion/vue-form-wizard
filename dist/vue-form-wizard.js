!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueFormWizard=e():t.VueFormWizard=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){t.exports=function(t,e,n,a,i,r){var s,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(s=t,o=t.default);var c="function"==typeof o?o.options:o;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var u;if(r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):a&&(u=a),u){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(t,e){return u.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:s,exports:o,options:c}}},function(t,e){throw new Error("Module build failed: SyntaxError: Unexpected token, expected ; (224:70)\n\n  222 |     lastStepPercentage () {\n  223 |       let stepMultiplier = 2\n> 224 |       return this.stepPercentage * (this.tabCount -1) * stepMultiplier);\n      |                                                                       ^\n  225 |     },\n  226 |     progressBarBackStyle () {\n  227 |       return {\n")},function(t,e,n){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,n){"use strict";e.a={}},function(t,e,n){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),i=n(9),r=n(11),s=n(14);n.o(a,"default")&&n.d(e,"FormWizard",function(){return a.default}),n.d(e,"TabContent",function(){return i.a}),n.d(e,"WizardButton",function(){return r.a}),n.d(e,"WizardStep",function(){return s.a});var o={install:function(t){t.component("form-wizard",a.default),t.component("tab-content",i.a),t.component("wizard-button",r.a),t.component("wizard-step",s.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,n){"use strict";function a(t){n(7)}var i=n(1),r=(n.n(i),n(8)),s=n(0),o=a,l=s(i.default,r.a,!1,o,null,null);e.default=l.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],attrs:{id:t.id?t.id:""},on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[t.$slots.title?n("div",{staticClass:"wizard-header"},[t._t("title",[n("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2):t._e(),t._v(" "),n("div",{staticClass:"wizard-navigation"},[n("div",{staticClass:"row wizard-display-flex"},[n("div",{staticClass:"col-md-2 text-center"},[t._t("logo",[t._v("\n          Logo\n        ")])],2),t._v(" "),n("div",{staticClass:"col-md-8"},[t.isVertical?t._e():n("div",{staticClass:"wizard-progress-with-circle"},[n("div",{staticClass:"wizard-progress-bar wizard-progress-bar-back",style:t.progressBarBackStyle}),t._v(" "),n("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),n("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,function(e,a){return t._t("step",[n("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:a},nativeOn:{click:function(e){t.navigateToTab(a)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(a)}}})],{tab:e,index:a,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})})],2)]),t._v(" "),n("div",{staticClass:"col-md-2 text-center"},[t._t("button",[t._v("\n          Button\n        ")])],2)]),t._v(" "),n("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():n("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[n("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?n("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[n("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),n("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?n("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[n("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):n("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[n("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},i=[],r={render:a,staticRenderFns:i};e.a=r},function(t,e,n){"use strict";var a=n(2),i=n(10),r=n(0),s=r(a.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},i=[],r={render:a,staticRenderFns:i};e.a=r},function(t,e,n){"use strict";function a(t){n(12)}var i=n(3),r=n(13),s=n(0),o=a,l=s(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},i=[],r={render:a,staticRenderFns:i};e.a=r},function(t,e,n){"use strict";function a(t){n(15)}var i=n(4),r=n(16),s=n(0),o=a,l=s(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{active:t.tab.active}},[n("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[t._t("title",[n("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])]),t._v(" "),n("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[n("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?n("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?n("i",{staticClass:"wizard-icon",class:t.tab.icon}):n("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?n("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():n("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1)],2)])},i=[],r={render:a,staticRenderFns:i};e.a=r}])});