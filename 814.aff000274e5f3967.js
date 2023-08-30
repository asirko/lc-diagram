"use strict";(self.webpackChunklc_diagram=self.webpackChunklc_diagram||[]).push([[814],{2814:($,u,l)=>{l.r(u),l.d(u,{default:()=>O});var m=l(6814),x=l(239),t=l(5879);const C=["depDiv"];function D(e,o){1&e&&(t.O4$(),t._UZ(0,"path",6)),2&e&&t.uIk("d",o.$implicit)}function _(e,o){if(1&e&&(t.O4$(),t.TgZ(0,"svg",2)(1,"defs")(2,"marker",3),t._UZ(3,"polygon",4),t.qZA()(),t.YNc(4,D,1,1,"path",5),t.qZA()),2&e){const i=t.oxw();t.uIk("viewBox",i.viewBox),t.xp6(4),t.Q6J("ngForOf",i.arrowPaths)}}function y(e,o){if(1&e&&(t.TgZ(0,"div",9,10),t._uU(2),t.qZA()),2&e){const i=o.$implicit;t.uIk("data-name",i),t.xp6(2),t.hij(" ",i," ")}}function B(e,o){if(1&e&&(t.TgZ(0,"div",7),t.YNc(1,y,3,2,"div",8),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.Q6J("ngForOf",i)}}const f={A:[],B:[],C:[],D:["A","B"],E:["B","C"],F:["D","E"]};let Z=(()=>{var e;class o{constructor(){this.elementRef=(0,t.f3M)(t.SBq),this.cdr=(0,t.f3M)(t.sBO),this.dependenciesByDepth=[]}ngOnInit(){let n=0,a=Object.entries(f);for(;a.length;)this.dependenciesByDepth[n]=[],a=a.filter(s=>{const[p,g]=s;return!g.every(r=>this.dependenciesByDepth.slice(0,-1).flat().includes(r))||(this.dependenciesByDepth[n].push(p),!1)}),n++}ngAfterViewChecked(){const n=this.elementRef.nativeElement.getBoundingClientRect(),a=`${n.left} ${n.top} ${n.width} ${n.height}`;if(this.viewBox!==a){this.viewBox=a;const s=new Map;this.depDivs.forEach(p=>{const g=p.nativeElement.getAttribute("data-name"),r=p.nativeElement?.getBoundingClientRect();s.set(g,r)}),this.arrowPaths=[];for(const p of Object.keys(f))f[p]?.forEach(g=>{const r=s.get(g),h=s.get(p),c={x:r.left+r.width/2,y:r.top+r.height},d={x:h.left+h.width/2,y:h.top},v=c.x>d.x?-1:c.x===d.x?0:1;c.x+=v*r.width/6,d.x-=v*h.width/6;const w=(c.x-d.x)/3;this.arrowPaths.push(`M ${c.x} ${c.y}C ${c.x-w} ${d.y} ${d.x+w} ${c.y} ${d.x} ${d.y}`)});this.cdr.detectChanges()}}resize(){}}return(e=o).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["lcd-static-diagram"]],viewQuery:function(n,a){if(1&n&&t.Gf(C,5),2&n){let s;t.iGM(s=t.CRH())&&(a.depDivs=s)}},hostBindings:function(n,a){1&n&&t.NdJ("resize",function(){return a.resize()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:2,vars:2,consts:[["xmlns","http://www.w3.org/2000/svg",4,"ngIf"],["class","dep-row",4,"ngFor","ngForOf"],["xmlns","http://www.w3.org/2000/svg"],["id","arrowhead","markerWidth","6","markerHeight","4","refX","5","refY","2","orient","auto"],["points","0 0, 6 2, 0 4"],["stroke","#000","fill","none","stroke-width","2","marker-end","url(#arrowhead)",4,"ngFor","ngForOf"],["stroke","#000","fill","none","stroke-width","2","marker-end","url(#arrowhead)"],[1,"dep-row"],["class","dep",4,"ngFor","ngForOf"],[1,"dep"],["depDiv",""]],template:function(n,a){1&n&&(t.YNc(0,_,5,2,"svg",0),t.YNc(1,B,2,1,"div",1)),2&n&&(t.Q6J("ngIf",a.viewBox),t.xp6(1),t.Q6J("ngForOf",a.dependenciesByDepth))},dependencies:[m.ez,m.sg,m.O5],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:5rem;position:relative}svg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.dep-row[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.dep[_ngcontent-%COMP%]{border:1px solid black;padding:var(--space-s) var(--space-m);border-radius:var(--space-s)}"],changeDetection:0}),o})();var S=l(8237);let O=(()=>{var e;class o{}return(e=o).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["lcd-static-graph"]],standalone:!0,features:[t.jDz],decls:11,vars:0,consts:[["path","./app/features/03-static-graph/static-diagram/static-diagram.component"],[1,"controls"],["routerLink","../02-component-svg"],["routerLink","../04-cubic-bezier"]],template:function(n,a){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Exemple d'un diagramme de d\xe9pendances"),t.qZA(),t.TgZ(2,"p"),t._uU(3," Cet exemple montre comment l'association SVG et HTML "),t.qZA(),t.TgZ(4,"lcd-code-reader",0),t._UZ(5,"lcd-static-diagram"),t.qZA(),t.TgZ(6,"div",1)(7,"button",2),t._uU(8,"Pr\xe9c\xe9dent"),t.qZA(),t.TgZ(9,"button",3),t._uU(10,"Suivant"),t.qZA()())},dependencies:[m.ez,x.E,Z,S.rH],changeDetection:0}),o})()}}]);