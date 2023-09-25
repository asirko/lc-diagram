"use strict";(self.webpackChunklc_diagram=self.webpackChunklc_diagram||[]).push([[215],{9215:(f,d,a)=>{a.r(d),a.d(d,{default:()=>o});var l=a(6814),g=a(239),e=a(5879);const m=["lcdChild",""];let _=(()=>{var n;class s{}return(n=s).\u0275fac=function(c){return new(c||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["g","lcdChild",""]],inputs:{start:"start",end:"end"},standalone:!0,features:[e.jDz],attrs:m,decls:4,vars:4,consts:[["id","arrowhead","markerWidth","10","markerHeight","7","refX","0","refY","3.5","orient","auto"],["points","0 0, 10 3.5, 0 7"],["stroke","black","marker-end","url(#arrowhead)"]],template:function(c,u){1&c&&(e.O4$(),e.TgZ(0,"defs")(1,"marker",0),e._UZ(2,"polygon",1),e.qZA()(),e._UZ(3,"line",2)),2&c&&(e.xp6(3),e.uIk("x1",u.start.x)("y1",u.start.y)("x2",u.end.x)("y2",u.end.y))},dependencies:[l.ez],changeDetection:0}),s})();const h=function(){return{x:10,y:80}},C=function(){return{x:190,y:5}};let v=(()=>{var n;class s{}return(n=s).\u0275fac=function(c){return new(c||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["lcd-parent"]],standalone:!0,features:[e.jDz],decls:4,vars:4,consts:[["viewBox","0 0 200 100"],["lcdChild","",3,"start","end"]],template:function(c,u){1&c&&(e.TgZ(0,"p"),e._uU(1,"De l'HTML avec un SVG"),e.qZA(),e.O4$(),e.TgZ(2,"svg",0),e._UZ(3,"g",1),e.qZA()),2&c&&(e.xp6(3),e.Q6J("start",e.DdM(2,h))("end",e.DdM(3,C)))},dependencies:[l.ez,_],styles:["svg[_ngcontent-%COMP%]{max-width:300px;border:1px solid black}"],changeDetection:0}),s})();var t=a(8237);const p=function(){return["ts","svg"]},r=function(){return{ts:"5, 8"}};let o=(()=>{var n;class s{}return(n=s).\u0275fac=function(c){return new(c||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["lcd-component-svg"]],standalone:!0,features:[e.jDz],decls:33,vars:4,consts:[["path","./app/features/02-component-svg/parent/parent.component"],["path","./app/features/02-component-svg/child/child.component",3,"supportedExtension","highlight"],[1,"controls"],["routerLink","../01-svg-example"],["routerLink","../03-static-graph"]],template:function(c,u){1&c&&(e.TgZ(0,"h3"),e._uU(1,"Comment le SVG est int\xe9gr\xe9 \xe0 Angular"),e.qZA(),e.TgZ(2,"h4"),e._uU(3,"Exemple\xa0:"),e.qZA(),e.TgZ(4,"lcd-code-reader",0),e._UZ(5,"lcd-parent"),e.qZA(),e._UZ(6,"lcd-code-reader",1),e.TgZ(7,"h4"),e._uU(8,"\xc0 noter\xa0:"),e.qZA(),e.TgZ(9,"ul")(10,"li"),e._uU(11," Les "),e.TgZ(12,"em"),e._uU(13,"custom elements"),e.qZA(),e._uU(14," ne sont pas support\xe9s en SVG, il faut donc faire un s\xe9lecteur par attribut ("),e.TgZ(15,"code"),e._uU(16,"selector: '[attribute]'"),e.qZA(),e._uU(17,")\xa0; "),e.qZA(),e.TgZ(18,"li"),e._uU(19," Les attributs SVG n'ont pas d'\xe9quivalent en propri\xe9t\xe9, il faut donc utiliser ("),e.TgZ(20,"code"),e._uU(21,"[attr.attribut]"),e.qZA(),e._uU(22,")\xa0; "),e.qZA(),e.TgZ(23,"li"),e._uU(24," Le parser Angular ne reconnait pas directement les balises SVG dans les templates SVG, il faut leur ajouter le pr\xe9fixe ("),e.TgZ(25,"code"),e._uU(26,"<svg:rect>"),e.qZA(),e._uU(27,")\xa0; "),e.qZA()(),e.TgZ(28,"div",2)(29,"button",3),e._uU(30,"Pr\xe9c\xe9dent"),e.qZA(),e.TgZ(31,"button",4),e._uU(32,"Suivant"),e.qZA()()),2&c&&(e.xp6(6),e.Q6J("supportedExtension",e.DdM(2,p))("highlight",e.DdM(3,r)))},dependencies:[l.ez,g.E,v,t.rH],changeDetection:0}),s})()},239:(f,d,a)=>{a.d(d,{E:()=>v});var l=a(6814),g=a(4213),e=a(5879);function m(t,p){if(1&t){const r=e.EpF();e.TgZ(0,"li",4),e.NdJ("click",function(){const s=e.CHM(r).$implicit,i=e.oxw();return e.KtG(i.toggleActive(s))}),e._uU(1),e.ALo(2,"uppercase"),e.qZA()}if(2&t){const r=p.$implicit,o=e.oxw();e.ekj("active",o.active===r),e.xp6(1),e.Oqu(e.lcZ(2,3,r))}}function _(t,p){if(1&t&&e._UZ(0,"markdown",6),2&t){const r=e.oxw().$implicit,o=e.oxw();e.Q6J("src",o.path+"."+r)("line",null==o.highlight?null:o.highlight[r])}}function h(t,p){if(1&t&&(e.ynx(0),e.YNc(1,_,1,2,"markdown",5),e.BQk()),2&t){const r=p.$implicit;e.xp6(1),e.Q6J("ngSwitchCase",r)}}const C=["*"];let v=(()=>{var t;class p{constructor(){this.supportedExtension=["ts","html","scss"],this.active=null}ngOnChanges(){this.name=this.path.split("/").at(-1)}toggleActive(o){this.active=this.active===o?null:o}}return(t=p).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["lcd-code-reader"]],inputs:{path:"path",supportedExtension:"supportedExtension",highlight:"highlight"},standalone:!0,features:[e.TTD,e.jDz],ngContentSelectors:C,decls:8,vars:4,consts:[[1,"content"],[3,"active","click",4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngFor","ngForOf"],[3,"click"],["clipboard","","lineNumbers","","lineHighlight","",3,"src","line",4,"ngSwitchCase"],["clipboard","","lineNumbers","","lineHighlight","",3,"src","line"]],template:function(o,n){1&o&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA(),e.TgZ(2,"ul"),e.YNc(3,m,3,5,"li",1),e.TgZ(4,"span"),e._uU(5),e.qZA()(),e.ynx(6,2),e.YNc(7,h,2,1,"ng-container",3),e.BQk()),2&o&&(e.xp6(3),e.Q6J("ngForOf",n.supportedExtension),e.xp6(2),e.Oqu(n.name),e.xp6(1),e.Q6J("ngSwitch",n.active),e.xp6(1),e.Q6J("ngForOf",n.supportedExtension))},dependencies:[l.ez,l.sg,l.RF,l.n9,l.gd,g.JP,g.lF],styles:["[_nghost-%COMP%]{border:1px solid var(--color-primary-lightest);display:block}.content[_ngcontent-%COMP%]{margin:var(--space-m)}.content[_ngcontent-%COMP%]:empty{display:none}ul[_ngcontent-%COMP%]{background-color:var(--color-primary-lightest);display:flex;padding:0;margin:0}ul[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 var(--space-m) 0 auto;align-self:center;color:var(--color-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}li[_ngcontent-%COMP%]{list-style:none;padding:var(--space-s) var(--space-m);cursor:pointer;transition:.2s}li[_ngcontent-%COMP%]:hover{background-color:var(--color-primary-lighter)}li.active[_ngcontent-%COMP%]{background-color:var(--color-primary);color:var(--color-white)}"],changeDetection:0}),p})()}}]);