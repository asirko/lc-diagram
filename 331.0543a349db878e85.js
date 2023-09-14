"use strict";(self.webpackChunklc_diagram=self.webpackChunklc_diagram||[]).push([[331],{239:(Ae,q,c)=>{c.d(q,{E:()=>Z});var i=c(6814),F=c(4213),l=c(5879);function $(d,y){if(1&d){const g=l.EpF();l.TgZ(0,"li",4),l.NdJ("click",function(){const v=l.CHM(g).$implicit,m=l.oxw();return l.KtG(m.toggleActive(v))}),l._uU(1),l.ALo(2,"uppercase"),l.qZA()}if(2&d){const g=y.$implicit,h=l.oxw();l.ekj("active",h.active===g),l.xp6(1),l.Oqu(l.lcZ(2,3,g))}}function W(d,y){if(1&d&&l._UZ(0,"markdown",6),2&d){const g=l.oxw().$implicit,h=l.oxw();l.Q6J("src",h.path+"."+g)("line",null==h.highlight?null:h.highlight[g])}}function z(d,y){if(1&d&&(l.ynx(0),l.YNc(1,W,1,2,"markdown",5),l.BQk()),2&d){const g=y.$implicit;l.xp6(1),l.Q6J("ngSwitchCase",g)}}const J=["*"];let Z=(()=>{var d;class y{constructor(){this.supportedExtension=["ts","html","scss"],this.active=null}ngOnChanges(){this.name=this.path.split("/").at(-1)}toggleActive(h){this.active=this.active===h?null:h}}return(d=y).\u0275fac=function(h){return new(h||d)},d.\u0275cmp=l.Xpm({type:d,selectors:[["lcd-code-reader"]],inputs:{path:"path",supportedExtension:"supportedExtension",highlight:"highlight"},standalone:!0,features:[l.TTD,l.jDz],ngContentSelectors:J,decls:8,vars:4,consts:[[1,"content"],[3,"active","click",4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngFor","ngForOf"],[3,"click"],["clipboard","","lineNumbers","","lineHighlight","",3,"src","line",4,"ngSwitchCase"],["clipboard","","lineNumbers","","lineHighlight","",3,"src","line"]],template:function(h,C){1&h&&(l.F$t(),l.TgZ(0,"div",0),l.Hsn(1),l.qZA(),l.TgZ(2,"ul"),l.YNc(3,$,3,5,"li",1),l.TgZ(4,"span"),l._uU(5),l.qZA()(),l.ynx(6,2),l.YNc(7,z,2,1,"ng-container",3),l.BQk()),2&h&&(l.xp6(3),l.Q6J("ngForOf",C.supportedExtension),l.xp6(2),l.Oqu(C.name),l.xp6(1),l.Q6J("ngSwitch",C.active),l.xp6(1),l.Q6J("ngForOf",C.supportedExtension))},dependencies:[i.ez,i.sg,i.RF,i.n9,i.gd,F.JP,F.lF],styles:["[_nghost-%COMP%]{border:1px solid var(--color-primary-lightest);display:block}.content[_ngcontent-%COMP%]{margin:var(--space-m)}.content[_ngcontent-%COMP%]:empty{display:none}ul[_ngcontent-%COMP%]{background-color:var(--color-primary-lightest);display:flex;margin:0}ul[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 var(--space-m) 0 auto;align-self:center;color:var(--color-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}li[_ngcontent-%COMP%]{list-style:none;padding:var(--space-s) var(--space-m);cursor:pointer;transition:.2s}li[_ngcontent-%COMP%]:hover{background-color:var(--color-primary-lighter)}li.active[_ngcontent-%COMP%]{background-color:var(--color-primary);color:var(--color-white)}"],changeDetection:0}),y})()},95:(Ae,q,c)=>{c.d(q,{Wl:()=>Q,Fj:()=>P,NI:()=>dt,oH:()=>gt,u5:()=>Cn,JJ:()=>$t,On:()=>ht,_:()=>ft,UX:()=>Vn});var i=c(5879),F=c(6814),l=c(7715),$=c(5592),W=c(7453),z=c(4829),J=c(9940),Z=c(8251),d=c(7400),y=c(2714),h=c(7398);let C=(()=>{var e;class t{constructor(n,o){this._renderer=n,this._elementRef=o,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,o){this._renderer.setProperty(this._elementRef.nativeElement,n,o)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(i.Qsj),i.Y36(i.SBq))},e.\u0275dir=i.lG2({type:e}),t})(),v=(()=>{var e;class t extends C{}return(e=t).\u0275fac=function(){let r;return function(o){return(r||(r=i.n5z(e)))(o||e)}}(),e.\u0275dir=i.lG2({type:e,features:[i.qOj]}),t})();const m=new i.OlP("NgValueAccessor"),De={provide:m,useExisting:(0,i.Gpc)(()=>Q),multi:!0};let Q=(()=>{var e;class t extends v{writeValue(n){this.setProperty("checked",n)}}return(e=t).\u0275fac=function(){let r;return function(o){return(r||(r=i.n5z(e)))(o||e)}}(),e.\u0275dir=i.lG2({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,o){1&n&&i.NdJ("change",function(a){return o.onChange(a.target.checked)})("blur",function(){return o.onTouched()})},features:[i._Bn([De]),i.qOj]}),t})();const Me={provide:m,useExisting:(0,i.Gpc)(()=>P),multi:!0},Ee=new i.OlP("CompositionEventMode");let P=(()=>{var e;class t extends C{constructor(n,o,s){super(n,o),this._compositionMode=s,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function be(){const e=(0,F.q)()?(0,F.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(Ee,8))},e.\u0275dir=i.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){1&n&&i.NdJ("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[i._Bn([Me]),i.qOj]}),t})();const f=new i.OlP("NgValidators"),A=new i.OlP("NgAsyncValidators");function Gt(e){return null!=e}function xt(e){return(0,i.QGY)(e)?(0,l.D)(e):e}function Bt(e){let t={};return e.forEach(r=>{t=null!=r?{...t,...r}:t}),0===Object.keys(t).length?null:t}function Pt(e,t){return t.map(r=>r(e))}function kt(e){return e.map(t=>function we(e){return!e.validate}(t)?t:r=>t.validate(r))}function X(e){return null!=e?function It(e){if(!e)return null;const t=e.filter(Gt);return 0==t.length?null:function(r){return Bt(Pt(r,t))}}(kt(e)):null}function K(e){return null!=e?function Tt(e){if(!e)return null;const t=e.filter(Gt);return 0==t.length?null:function(r){return function g(...e){const t=(0,J.jO)(e),{args:r,keys:n}=(0,W.D)(e),o=new $.y(s=>{const{length:a}=r;if(!a)return void s.complete();const u=new Array(a);let _=a,O=a;for(let M=0;M<a;M++){let At=!1;(0,z.Xf)(r[M]).subscribe((0,Z.x)(s,An=>{At||(At=!0,O--),u[M]=An},()=>_--,void 0,()=>{(!_||!At)&&(O||s.next(n?(0,y.n)(n,u):u),s.complete())}))}});return t?o.pipe((0,d.Z)(t)):o}(Pt(r,t).map(xt)).pipe((0,h.U)(Bt))}}(kt(e)):null}function Ht(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function Ut(e){return e._rawValidators}function Rt(e){return e._rawAsyncValidators}function tt(e){return e?Array.isArray(e)?e:[e]:[]}function I(e,t){return Array.isArray(e)?e.includes(t):e===t}function jt(e,t){const r=tt(t);return tt(e).forEach(o=>{I(r,o)||r.push(o)}),r}function Lt(e,t){return tt(t).filter(r=>!I(e,r))}class Yt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=X(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=K(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,r){return!!this.control&&this.control.hasError(t,r)}getError(t,r){return this.control?this.control.getError(t,r):null}}class p extends Yt{get formDirective(){return null}get path(){return null}}class D extends Yt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class qt{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let $t=(()=>{var e;class t extends qt{constructor(n){super(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(D,2))},e.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){2&n&&i.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[i.qOj]}),t})();const S="VALID",H="INVALID",w="PENDING",N="DISABLED";function U(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class Zt{constructor(t,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===H}get pending(){return this.status==w}get disabled(){return this.status===N}get enabled(){return this.status!==N}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(jt(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(jt(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Lt(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Lt(t,this._rawAsyncValidators))}hasValidator(t){return I(this._rawValidators,t)}hasAsyncValidator(t){return I(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=w,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const r=this._parentMarkedDirty(t.onlySelf);this.status=N,this.errors=null,this._forEachChild(n=>{n.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!0))}enable(t={}){const r=this._parentMarkedDirty(t.onlySelf);this.status=S,this._forEachChild(n=>{n.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===w)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=w,this._hasOwnPendingAsyncValidator=!0;const r=xt(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,r={}){this.errors=t,this._updateControlsErrors(!1!==r.emitEvent)}get(t){let r=t;return null==r||(Array.isArray(r)||(r=r.split(".")),0===r.length)?null:r.reduce((n,o)=>n&&n._find(o),this)}getError(t,r){const n=r?this.get(r):this;return n&&n.errors?n.errors[t]:null}hasError(t,r){return!!this.getError(t,r)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(w)?w:this._anyControlsHaveStatus(H)?H:S}_anyControlsHaveStatus(t){return this._anyControls(r=>r.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){U(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function xe(e){return Array.isArray(e)?X(e):e||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Be(e){return Array.isArray(e)?K(e):e||null}(this._rawAsyncValidators)}}const b=new i.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>G}),G="always";function x(e,t,r=G){(function st(e,t){const r=Ut(e);null!==t.validator?e.setValidators(Ht(r,t.validator)):"function"==typeof r&&e.setValidators([r]);const n=Rt(e);null!==t.asyncValidator?e.setAsyncValidators(Ht(n,t.asyncValidator)):"function"==typeof n&&e.setAsyncValidators([n]);const o=()=>e.updateValueAndValidity();L(t._rawValidators,o),L(t._rawAsyncValidators,o)})(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||"always"===r)&&t.valueAccessor.setDisabledState?.(e.disabled),function Ie(e,t){t.valueAccessor.registerOnChange(r=>{e._pendingValue=r,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Qt(e,t)})}(e,t),function He(e,t){const r=(n,o)=>{t.valueAccessor.writeValue(n),o&&t.viewToModelUpdate(n)};e.registerOnChange(r),t._registerOnDestroy(()=>{e._unregisterOnChange(r)})}(e,t),function Te(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Qt(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function ke(e,t){if(t.valueAccessor.setDisabledState){const r=n=>{t.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(r),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(r)})}}(e,t)}function j(e,t,r=!0){const n=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(n),t.valueAccessor.registerOnTouched(n)),function Y(e,t){let r=!1;if(null!==e){if(null!==t.validator){const o=Ut(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==t.validator);s.length!==o.length&&(r=!0,e.setValidators(s))}}if(null!==t.asyncValidator){const o=Rt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==t.asyncValidator);s.length!==o.length&&(r=!0,e.setAsyncValidators(s))}}}const n=()=>{};return L(t._rawValidators,n),L(t._rawAsyncValidators,n),r}(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function L(e,t){e.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(t)})}function Qt(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function lt(e,t){if(!e.hasOwnProperty("model"))return!1;const r=e.model;return!!r.isFirstChange()||!Object.is(t,r.currentValue)}function ut(e,t){if(!t)return null;let r,n,o;return Array.isArray(t),t.forEach(s=>{s.constructor===P?r=s:function je(e){return Object.getPrototypeOf(e.constructor)===v}(s)?n=s:o=s}),o||n||r||null}function te(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}function ee(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const dt=class extends Zt{constructor(t=null,r,n){super(function rt(e){return(U(e)?e.validators:e)||null}(r),function ot(e,t){return(U(t)?t.asyncValidators:e)||null}(n,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),U(r)&&(r.nonNullable||r.initialValueIsDefault)&&(this.defaultValue=ee(t)?t.value:t)}setValue(t,r={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==r.emitModelToViewChange&&this._onChange.forEach(n=>n(this.value,!1!==r.emitViewToModelChange)),this.updateValueAndValidity(r)}patchValue(t,r={}){this.setValue(t,r)}reset(t=this.defaultValue,r={}){this._applyFormState(t),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){te(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){te(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){ee(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},We={provide:D,useExisting:(0,i.Gpc)(()=>ht)},oe=(()=>Promise.resolve())();let ht=(()=>{var e;class t extends D{constructor(n,o,s,a,u,_){super(),this._changeDetectorRef=u,this.callSetDisabledState=_,this.control=new dt,this._registered=!1,this.name="",this.update=new i.vpe,this._parent=n,this._setValidators(o),this._setAsyncValidators(s),this.valueAccessor=ut(0,a)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){const o=n.name.previousValue;this.formDirective.removeControl({name:o,path:this._getPath(o)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),lt(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){x(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(n){oe.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){const o=n.isDisabled.currentValue,s=0!==o&&(0,i.VuI)(o);oe.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?function R(e,t){return[...t.path,e]}(n,this._parent):[n]}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(p,9),i.Y36(f,10),i.Y36(A,10),i.Y36(m,10),i.Y36(i.sBO,8),i.Y36(b,8))},e.\u0275dir=i.lG2({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[i._Bn([We]),i.qOj,i.TTD]}),t})();const Ze={provide:m,useExisting:(0,i.Gpc)(()=>ft),multi:!0};let se=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({}),t})(),Qe=(()=>{var e;class t{constructor(){this._accessors=[]}add(n,o){this._accessors.push([n,o])}remove(n){for(let o=this._accessors.length-1;o>=0;--o)if(this._accessors[o][1]===n)return void this._accessors.splice(o,1)}select(n){this._accessors.forEach(o=>{this._isSameGroup(o,n)&&o[1]!==n&&o[1].fireUncheck(n.value)})}_isSameGroup(n,o){return!!n[0].control&&n[0]._parent===o._control._parent&&n[1].name===o.name}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:se}),t})(),ft=(()=>{var e;class t extends v{constructor(n,o,s,a){super(n,o),this._registry=s,this._injector=a,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=(0,i.f3M)(b,{optional:!0})??G}ngOnInit(){this._control=this._injector.get(D),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(n){this._state=n===this.value,this.setProperty("checked",this._state)}registerOnChange(n){this._fn=n,this.onChange=()=>{n(this.value),this._registry.select(this)}}setDisabledState(n){(this.setDisabledStateFired||n||"whenDisabledForLegacyCode"===this.callSetDisabledState)&&this.setProperty("disabled",n),this.setDisabledStateFired=!0}fireUncheck(n){this.writeValue(n)}_checkName(){!this.name&&this.formControlName&&(this.name=this.formControlName)}}return(e=t).\u0275fac=function(n){return new(n||e)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(Qe),i.Y36(i.zs3))},e.\u0275dir=i.lG2({type:e,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(n,o){1&n&&i.NdJ("change",function(){return o.onChange()})("blur",function(){return o.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[i._Bn([Ze]),i.qOj]}),t})();const pt=new i.OlP("NgModelWithFormControlWarning"),Ke={provide:D,useExisting:(0,i.Gpc)(()=>gt)};let gt=(()=>{var e;class t extends D{set isDisabled(n){}constructor(n,o,s,a,u){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=u,this.update=new i.vpe,this._ngModelWarningSent=!1,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=ut(0,s)}ngOnChanges(n){if(this._isControlChanged(n)){const o=n.form.previousValue;o&&j(o,this,!1),x(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}lt(n,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&j(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_isControlChanged(n){return n.hasOwnProperty("form")}}return(e=t)._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(i.Y36(f,10),i.Y36(A,10),i.Y36(m,10),i.Y36(pt,8),i.Y36(b,8))},e.\u0275dir=i.lG2({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[i._Bn([Ke]),i.qOj,i.TTD]}),t})(),Ve=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[se]}),t})(),Cn=(()=>{var e;class t{static withConfig(n){return{ngModule:t,providers:[{provide:b,useValue:n.callSetDisabledState??G}]}}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[Ve]}),t})(),Vn=(()=>{var e;class t{static withConfig(n){return{ngModule:t,providers:[{provide:pt,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:b,useValue:n.callSetDisabledState??G}]}}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[Ve]}),t})()}}]);