"use strict";(self.webpackChunkexam_ui=self.webpackChunkexam_ui||[]).push([[221],{7221:(X,f,r)=>{r.r(f),r.d(f,{ExamAdministrationModule:()=>V});var d=r(8583),g=r(7709),_=r(6782),e=r(639),m=r(72),u=r(183),C=r(1841);let p=(()=>{class o{constructor(t){this._httpClient=t}getExams(){return this._httpClient.get(`${u.n}/exams`)}getChildren(t){return this._httpClient.get(`${u.n}/exams/${t}`)}create(t){return this._httpClient.post(`${u.n}/exams/create`,t)}rename(t){return this._httpClient.put(`${u.n}/exams/rename`,t)}editExam(t){return this._httpClient.put(`${u.n}/exams`,t)}delete(t){return this._httpClient.delete(`${u.n}/exams/delete/${t}`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(C.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var E=r(9075),A=r(3502),h=r(6653);function M(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"li",3),e.NdJ("click",function(i){e.CHM(t);const s=e.oxw().$implicit;return e.oxw().onActionSelected(i,s.id)}),e._UZ(1,"i",4),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.xp6(1),e.Tol(t.icon)}}function b(o,c){if(1&o&&(e.ynx(0),e.YNc(1,M,2,2,"li",2),e.BQk()),2&o){const t=c.$implicit,n=e.oxw();e.xp6(1),e.Q6J("ngIf",t.visible&&(!t.requireSelection||n.selectedItem))}}let Z=(()=>{class o{constructor(t){this._router=t,this.selectedItem=null,this.onSelectAction=new e.vpe,this.onActionCreated=new e.vpe,this.actions=[{id:"add-folder",icon:"fa-solid fa-folder-plus",requireSelection:!1,visible:!0},{id:"add-exam",icon:"fa-solid fa-file-circle-plus",requireSelection:!1,visible:!0},{id:"delete",icon:"fa-regular fa-trash-can",requireSelection:!0,visible:!0},{id:"save",icon:"fa-regular fa-save",visible:!1},{id:"enter",icon:"fas fa-arrow-right",requireSelection:!0,visible:!0},{id:"back",icon:"fas fa-arrow-left",visible:!1}]}ngOnInit(){this.onActionCreated.emit(this.actions)}onActionSelected(t,n){t.stopPropagation(),"enter"==n&&this.selectedItem&&!this.selectedItem.folder?this.makeAllActionsExcept(!1,["back","save"]):"back"==n&&this.selectedItem&&!this.selectedItem.folder&&this.makeAllActionsExcept(!0,["back","save"]),this.onSelectAction.emit(n)}makeAllActionsExcept(t,n){this.actions.forEach(i=>{i.visible=this.actionsIncludes(n,i)?!t:t})}actionsIncludes(t,n){let i=0;return t.forEach(s=>{s==n.id&&i++}),i>0}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["actions"]],inputs:{selectedItem:"selectedItem"},outputs:{onSelectAction:"onSelectAction",onActionCreated:"actions"},decls:2,vars:1,consts:[[1,"actions"],[4,"ngFor","ngForOf"],[3,"click",4,"ngIf"],[3,"click"],[1,"text-secondary"]],template:function(t,n){1&t&&(e.TgZ(0,"ul",0),e.YNc(1,b,2,1,"ng-container",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",n.actions))},directives:[d.sg,d.O5],styles:[".actions[_ngcontent-%COMP%]{padding-left:25px;text-align:left;list-style:none;margin-bottom:0}.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:20px 5px 0 20px;display:inline-block}.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px}"]}),o})();var a=r(665);function T(o,c){1&o&&(e.TgZ(0,"div",4),e._UZ(1,"i",5),e.qZA())}function v(o,c){1&o&&(e.TgZ(0,"div",8),e._uU(1,"\u0645\u062c\u0644\u062f\u0627\u062a"),e.qZA())}function O(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",9),e.TgZ(1,"div",10),e.NdJ("click",function(i){const s=e.CHM(t),l=s.$implicit,x=s.index;return e.oxw(2).onExamSelected(l,x,i)}),e.TgZ(2,"div",11),e._UZ(3,"i",12),e.qZA(),e.TgZ(4,"div",13),e._UZ(5,"i",12),e.TgZ(6,"input",14),e.NdJ("focus",function(){const s=e.CHM(t).$implicit;return e.oxw(2).onFocus(s)})("ngModelChange",function(i){return e.CHM(t).$implicit.title=i})("blur",function(){const s=e.CHM(t).$implicit;return e.oxw(2).onBlur(s)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=c.$implicit,n=e.oxw(2);e.xp6(4),e.ekj("selected",n.selectedExam==t),e.xp6(2),e.Q6J("id","folders"+t.id)("ngModel",t.title)}}function w(o,c){if(1&o&&(e.ynx(0),e.YNc(1,v,2,0,"div",6),e.YNc(2,O,7,4,"div",7),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.folders.length>0),e.xp6(1),e.Q6J("ngForOf",t.folders)}}function q(o,c){1&o&&(e.TgZ(0,"div",8),e._uU(1,"\u0627\u0645\u062a\u062d\u0627\u0646\u0627\u062a"),e.qZA())}function P(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",9),e.TgZ(1,"div",10),e.NdJ("click",function(i){const s=e.CHM(t),l=s.$implicit,x=s.index;return e.oxw(2).onExamSelected(l,x,i)}),e.TgZ(2,"div",11),e._UZ(3,"i",15),e.qZA(),e.TgZ(4,"div",13),e._UZ(5,"i",15),e.TgZ(6,"input",14),e.NdJ("focus",function(){const s=e.CHM(t).$implicit;return e.oxw(2).onFocus(s)})("ngModelChange",function(i){return e.CHM(t).$implicit.title=i})("blur",function(){const s=e.CHM(t).$implicit;return e.oxw(2).onBlur(s)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=c.$implicit,n=e.oxw(2);e.xp6(4),e.ekj("selected",n.selectedExam==t),e.xp6(2),e.Q6J("id","files"+t.id)("ngModel",t.title)}}function k(o,c){if(1&o&&(e.ynx(0),e.YNc(1,q,2,0,"div",6),e.YNc(2,P,7,4,"div",7),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.files.length>0),e.xp6(1),e.Q6J("ngForOf",t.files)}}let J=(()=>{class o{constructor(t,n){this._examAdminClient=t,this._spinner=n,this.onSelectExam=new e.vpe,this.onExamDeleted=new e.vpe,this.exams=[],this.newExam=null,this.deleteActionClicked=!1,this.examCreationHidden=!1,this.folders=[],this.files=[],this.selectedExam=null,this.initText="",this.unsubscribeAll=new g.xQ}ngOnInit(){}ngOnChanges(t){var n;if(t&&t.exams&&(this.files=this.exams.filter(i=>!i.folder),this.folders=this.exams.filter(i=>i.folder)),t&&t.deleteActionClicked&&t.deleteActionClicked.currentValue&&(this._spinner.show(void 0,{type:"ball-spin-clockwise",size:"medium",bdColor:"none"}),this._examAdminClient.delete(this.selectedExam.id).pipe((0,_.R)(this.unsubscribeAll)).subscribe(()=>{this.selectedExam.folder?this.folders.splice(this.selectedExam.index,1):this.files.splice(this.selectedExam.index,1),this.onSelectExam.emit(this.selectedExam=null),this._spinner.hide()}),this.onExamDeleted.emit()),t&&t.newExam&&t.newExam.currentValue){let i="",s=this.newExam.folder?this.folders.length-1:this.files.length-1;this.newExam.folder?(i="folders",this.folders.push(this.newExam)):(i="files",this.files.push(this.newExam)),this.onExamSelected(this.newExam,s),null===(n=document.getElementById(i+this.newExam.id))||void 0===n||n.focus()}}ngOnDestroy(){this.unsubscribeAll.next(),this.unsubscribeAll.complete()}onFocus(t){t.id&&(this.initText=t.title)}onExamSelected(t,n,i=null){i&&i.stopPropagation(),t.index=n,this.onSelectExam.emit(t),this.selectedExam=t}onBlur(t){t.title=t.title?t.title:"\u0628\u0644\u0627 \u0639\u0646\u0648\u0627\u0646",this.initText!=t.title&&(this._spinner.show(void 0,{type:"ball-spin-clockwise",size:"medium",bdColor:"none"}),t.id?this._examAdminClient.rename(t).pipe((0,_.R)(this.unsubscribeAll)).subscribe(()=>{this._spinner.hide(),this.initText=""},n=>console.log(n)):this._examAdminClient.create(t).pipe((0,_.R)(this.unsubscribeAll)).subscribe(n=>{t.questions=n.folder?void 0:n.questions,t.selections_size=n.folder?void 0:n.selections_size,t.id=n.id,this._spinner.hide(),this.initText=""},n=>console.log(n)))}unselectExam(t){this.examCreationHidden&&this.onSelectExam.emit(this.selectedExam=null)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p),e.Y36(m.t2))},o.\u0275cmp=e.Xpm({type:o,selectors:[["exam-list"]],hostBindings:function(t,n){1&t&&e.NdJ("click",function(s){return n.unselectExam(s)},!1,e.evT)},inputs:{exams:"exams",newExam:"newExam",deleteActionClicked:"deleteActionClicked",examCreationHidden:"examCreationHidden"},outputs:{onSelectExam:"onSelectExam",onExamDeleted:"onExamDeleted"},features:[e.TTD],decls:6,vars:3,consts:[[1,"exam-list-container","container"],[1,"row"],["class","no-exams text-center",4,"ngIf"],[4,"ngIf"],[1,"no-exams","text-center"],[1,"fas","fa-file"],["class","header text-secondary",4,"ngIf"],["class","item-wrapper col-lg-3 col-md-4",4,"ngFor","ngForOf"],[1,"header","text-secondary"],[1,"item-wrapper","col-lg-3","col-md-4"],[1,"item","border",3,"click"],[1,"large-icon"],[1,"text-secondary","fa-solid","fa-folder"],[1,"title"],[3,"id","ngModel","focus","ngModelChange","blur"],[1,"text-primary","fa-solid","fa-file"]],template:function(t,n){1&t&&(e._UZ(0,"ngx-spinner"),e.TgZ(1,"div",0),e.TgZ(2,"div",1),e.YNc(3,T,2,0,"div",2),e.YNc(4,w,3,2,"ng-container",3),e.YNc(5,k,3,2,"ng-container",3),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",0==n.folders.length&&0==n.files.length),e.xp6(1),e.Q6J("ngIf",n.folders.length>0),e.xp6(1),e.Q6J("ngIf",n.files.length>0))},directives:[m.Ro,d.O5,d.sg,a.Fj,a.JJ,a.On],styles:[".exam-list-container[_ngcontent-%COMP%]{padding-top:125px}.exam-list-container[_ngcontent-%COMP%]   .link-to-solution[_ngcontent-%COMP%]{display:inline-block;text-decoration:none}.exam-list-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:relative;bottom:2px;border-style:none;display:inline-block;width:70%;background-color:inherit}.exam-list-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.exam-list-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:11px}.exam-list-container[_ngcontent-%COMP%]   .item-wrapper[_ngcontent-%COMP%]{padding:10px}.exam-list-container[_ngcontent-%COMP%]   .item-wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{border-radius:5px}.exam-list-container[_ngcontent-%COMP%]   .item-wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{cursor:pointer}.exam-list-container[_ngcontent-%COMP%]   .item-wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .large-icon[_ngcontent-%COMP%]{padding-bottom:25px;text-align:center;margin-top:44px}.exam-list-container[_ngcontent-%COMP%]   .item-wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .large-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:50px}.exam-list-container[_ngcontent-%COMP%]   .item-wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:18px 15px;margin-top:10px}.exam-list-container[_ngcontent-%COMP%]   .item-wrapper[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;margin-left:10px}.exam-list-container[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{background-color:#e8e8ff}.exam-list-container[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#0d6efd}.exam-list-container[_ngcontent-%COMP%]   .no-exams[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.exam-list-container[_ngcontent-%COMP%]   .no-exams[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:200px;color:#dee2e6}"]}),o})();function S(o,c){1&o&&(e.ynx(0),e._uU(1,"\u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0642\u0628\u0644 \u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u062d\u0627\u0644\u064a"),e.BQk())}function y(o,c){1&o&&(e.ynx(0),e._uU(1," \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0646\u0647\u0627\u064a\u0629 \u0642\u0628\u0644 \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0628\u062f\u0627\u064a\u0629 "),e.BQk())}function N(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",17),e.TgZ(1,"input",21),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(3).selectedExam.answer_shown=i}),e.qZA(),e.TgZ(2,"label",19),e._uU(3,"\u0627\u0638\u0647\u0627\u0631 \u0627\u0644\u0627\u062c\u0627\u0628\u0629"),e.qZA(),e.qZA()}if(2&o){const t=e.oxw(3);e.xp6(1),e.Q6J("ngModel",t.selectedExam.answer_shown)}}function Q(o,c){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",4),e.TgZ(2,"label",10),e._uU(3,"\u0627\u0644\u0639\u0646\u0648\u0627\u0646"),e.qZA(),e.TgZ(4,"input",11),e.NdJ("blur",function(){return e.CHM(t),e.oxw(2).onTitleBlur()})("ngModelChange",function(i){return e.CHM(t),e.oxw(2).selectedExam.title=i}),e.qZA(),e.qZA(),e.TgZ(5,"div",12),e.TgZ(6,"label",10),e._uU(7,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0628\u062f\u0627\u064a\u0629"),e.qZA(),e.TgZ(8,"input",13),e.NdJ("blur",function(){return e.CHM(t),e.oxw(2).onDateBlur()})("ngModelChange",function(i){return e.CHM(t),e.oxw(2).selectedExam.start_date=i}),e.qZA(),e.TgZ(9,"div",14),e._uU(10,"\u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0642\u0628\u0644 \u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u062d\u0627\u0644\u064a"),e.qZA(),e.qZA(),e.TgZ(11,"div",12),e.TgZ(12,"label",10),e._uU(13,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0646\u0647\u0627\u064a\u0629"),e.qZA(),e.TgZ(14,"input",15),e.NdJ("blur",function(){return e.CHM(t),e.oxw(2).onDateBlur()})("ngModelChange",function(i){return e.CHM(t),e.oxw(2).selectedExam.end_date=i}),e.qZA(),e.TgZ(15,"div",14),e.YNc(16,S,2,0,"ng-container",7),e.YNc(17,y,2,0,"ng-container",7),e.qZA(),e.qZA(),e.TgZ(18,"div",16),e.TgZ(19,"div",17),e.TgZ(20,"input",18),e.NdJ("change",function(i){return e.CHM(t),e.oxw(2).onExerciseChange(i)})("ngModelChange",function(i){return e.CHM(t),e.oxw(2).selectedExam.exercise=i}),e.qZA(),e.TgZ(21,"label",19),e._uU(22,"\u062a\u0645\u0631\u064a\u0646"),e.qZA(),e.qZA(),e.YNc(23,N,4,1,"div",20),e.qZA(),e.BQk()}if(2&o){const t=e.oxw(2);e.xp6(4),e.Q6J("ngModel",t.selectedExam.title),e.xp6(4),e.ekj("is-invalid",t.startDateBeforeCurrent),e.Q6J("ngModel",t.selectedExam.start_date),e.xp6(6),e.ekj("is-invalid",t.endDateBeforeCurrent||t.endDateBeforeStart),e.Q6J("ngModel",t.selectedExam.end_date),e.xp6(2),e.Q6J("ngIf",t.endDateBeforeCurrent),e.xp6(1),e.Q6J("ngIf",t.endDateBeforeStart&&!t.endDateBeforeCurrent),e.xp6(3),e.Q6J("ngModel",t.selectedExam.exercise),e.xp6(3),e.Q6J("ngIf",t.selectedExam.exercise)}}function H(o,c){if(1&o&&(e.TgZ(0,"option",34),e._uU(1),e.qZA()),2&o){const t=c.index;e.Q6J("value",t+1),e.xp6(1),e.hij(" ",t+1," ")}}function F(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",38),e.TgZ(1,"input",39),e.NdJ("click",function(){const s=e.CHM(t).index,l=e.oxw(2).index;return e.oxw(3).onRadioChoosed(l,s)})("ngModelChange",function(i){return e.CHM(t).$implicit.selected=i}),e.qZA(),e.TgZ(2,"textarea",36),e.NdJ("blur",function(){const s=e.CHM(t).index,l=e.oxw(2).index;return e.oxw(3).onSelectionBlur(l,s)})("ngModelChange",function(i){return e.CHM(t).$implicit.context=i}),e.qZA(),e.qZA()}if(2&o){const t=c.$implicit,n=c.index,i=e.oxw(2).index;e.xp6(1),e.Q6J("name","selection-selected"+i+n)("ngModel",t.selected)("value",!0),e.xp6(1),e.Q6J("name","selection"+i+n)("ngModel",t.context)}}function B(o,c){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",35),e.TgZ(2,"textarea",36),e.NdJ("blur",function(){e.CHM(t);const i=e.oxw().index;return e.oxw(3).onQuestionBlur(i)})("ngModelChange",function(i){return e.CHM(t),e.oxw().$implicit.context=i}),e.qZA(),e.qZA(),e.YNc(3,F,3,5,"div",37),e.BQk()}if(2&o){const t=e.oxw(),n=t.index,i=t.$implicit;e.xp6(2),e.Q6J("name","question"+n)("ngModel",i.context),e.xp6(1),e.Q6J("ngForOf",i.selections)}}function D(o,c){if(1&o&&(e.ynx(0),e.YNc(1,B,4,3,"ng-container",7),e.BQk()),2&o){const t=c.index,n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",t+1==n.questionNumber)}}function z(o,c){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",22),e.TgZ(2,"label",10),e._uU(3,"\u0631\u0642\u0645 \u0627\u0644\u0633\u0624\u0627\u0644"),e.qZA(),e.TgZ(4,"select",23),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).questionNumber=i}),e.YNc(5,H,2,2,"option",24),e.qZA(),e.qZA(),e.TgZ(6,"div",22),e.TgZ(7,"label",10),e._uU(8,"\u0639\u062f\u062f \u0627\u0644\u0627\u062e\u062a\u064a\u0627\u0631\u0627\u062a"),e.qZA(),e.TgZ(9,"input",25),e.NdJ("blur",function(){return e.CHM(t),e.oxw(2).changeSelectionsSize()})("ngModelChange",function(i){return e.CHM(t),e.oxw(2).selectedExam.selections_size=i}),e.qZA(),e.qZA(),e.TgZ(10,"div",26),e.TgZ(11,"ul"),e.TgZ(12,"li"),e.TgZ(13,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).addQuestion()}),e._UZ(14,"i",28),e.qZA(),e.qZA(),e.TgZ(15,"li"),e.TgZ(16,"button",29),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).removeCurrentQuestion()}),e._UZ(17,"i",30),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(18,D,2,1,"ng-container",31),e.TgZ(19,"div",26),e.TgZ(20,"ul"),e.TgZ(21,"li"),e.TgZ(22,"button",29),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).next()}),e._UZ(23,"i",32),e.qZA(),e.qZA(),e.TgZ(24,"li"),e.TgZ(25,"button",29),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).prev()}),e._UZ(26,"i",33),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&o){const t=e.oxw(2);e.xp6(4),e.Q6J("ngModel",t.questionNumber),e.xp6(1),e.Q6J("ngForOf",t.selectedExam.questions),e.xp6(4),e.Q6J("ngModel",t.selectedExam.selections_size),e.xp6(7),e.Q6J("disabled",1==t.selectedExam.questions.length),e.xp6(2),e.Q6J("ngForOf",t.selectedExam.questions),e.xp6(4),e.Q6J("disabled",t.questionNumber==t.selectedExam.questions.length),e.xp6(3),e.Q6J("disabled",1==t.questionNumber)}}function I(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"form",2),e.TgZ(1,"div",3),e.TgZ(2,"div",4),e.TgZ(3,"button",5),e.NdJ("click",function(){return e.CHM(t),e.oxw().settingsView=!0}),e._UZ(4,"i",6),e.qZA(),e.qZA(),e.YNc(5,Q,24,11,"ng-container",7),e.qZA(),e.TgZ(6,"div",8),e.TgZ(7,"div",4),e.TgZ(8,"button",5),e.NdJ("click",function(){return e.CHM(t),e.oxw().settingsView=!1}),e._UZ(9,"i",9),e.qZA(),e.qZA(),e.YNc(10,z,27,7,"ng-container",7),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("disabled",t.settingsView),e.xp6(1),e.ekj("text-secondary",t.settingsView),e.xp6(1),e.Q6J("ngIf",t.settingsView),e.xp6(3),e.Q6J("disabled",!t.settingsView),e.xp6(1),e.ekj("text-secondary",!t.settingsView),e.xp6(1),e.Q6J("ngIf",!t.settingsView)}}let Y=(()=>{class o{constructor(t,n){this._examAdminClient=t,this._spinner=n,this.selectedExam=null,this.selectedAction=null,this.onExamSaved=new e.vpe,this.settingsView=!0,this.initSelectedExam=null,this.questionNumber=1,this.startDateBeforeCurrent=!1,this.endDateBeforeCurrent=!1,this.endDateBeforeStart=!1,this.unsubscribeAll=new g.xQ}ngOnInit(){}ngOnChanges(t){if(t&&t.selectedExam&&this.selectedExam&&!this.selectedExam.folder&&(this.initSelectedExam=JSON.parse(JSON.stringify(this.selectedExam)),this.initSelectedExam.questions=JSON.parse(JSON.stringify(this.selectedExam.questions)),this.questionNumber=1),t&&t.selectedAction){if("save"==this.selectedAction){if(!this.dateExpirationValidation())return void this.onExamSaved.emit();this._spinner.show(void 0,{type:"ball-spin-clockwise",size:"medium",bdColor:"none"}),this._examAdminClient.editExam(Object.assign(Object.assign({},this.selectedExam),{index:void 0})).pipe((0,_.R)(this.unsubscribeAll)).subscribe(()=>{this._spinner.hide(),this.initSelectedExam=JSON.parse(JSON.stringify(this.selectedExam)),this.initSelectedExam.questions=JSON.parse(JSON.stringify(this.selectedExam.questions)),this.onExamSaved.emit()},n=>console.log(n))}"back"==this.selectedAction&&this.selectedExam&&!this.selectedExam.folder&&(this.selectedExam.title=this.initSelectedExam.title,this.selectedExam.start_date=this.initSelectedExam.start_date,this.selectedExam.end_date=this.initSelectedExam.end_date,this.selectedExam.exercise=this.initSelectedExam.exercise,this.selectedExam.answer_shown=this.initSelectedExam.answer_shown,this.selectedExam.selections_size=this.initSelectedExam.selections_size,this.selectedExam.questions=this.initSelectedExam.questions),"enter"==this.selectedAction&&this.selectedExam&&!this.selectedExam.folder&&(this.initSelectedExam=JSON.parse(JSON.stringify(this.selectedExam)),this.initSelectedExam.questions=JSON.parse(JSON.stringify(this.selectedExam.questions)),this.questionNumber=1)}}ngOnDestroy(){this.unsubscribeAll.next(),this.unsubscribeAll.complete()}addQuestion(){let t={context:"\u0628\u0644\u0627 \u0639\u0646\u0648\u0627\u0646",selections:[]};for(let n=0;n<this.selectedExam.selections_size;n++)t.selections.push({context:"\u0628\u0644\u0627 \u0639\u0646\u0648\u0627\u0646",selected:0==n});this.selectedExam.questions.push(t),this.questionNumber=this.selectedExam.questions.length}removeCurrentQuestion(){let t=this.questionNumber-1;this.selectedExam.questions.length==this.questionNumber&&(this.questionNumber--,t=this.questionNumber),this.selectedExam.questions.splice(t,1)}next(){this.questionNumber++}prev(){this.questionNumber--}onRadioChoosed(t,n){this.selectedExam.questions[t].selections.forEach((s,l)=>{s.selected=l==n})}changeSelectionsSize(){if(this.selectedExam.selections_size=this.selectedExam.selections_size<2?2:this.selectedExam.selections_size,this.selectedExam.selections_size=this.selectedExam.selections_size>6?6:this.selectedExam.selections_size,this.selectedExam.selections_size==this.selectedExam.questions[0].selections.length)return;let t=!1;this.selectedExam.questions.forEach(n=>{let i=n.selections.length;if(this.selectedExam.selections_size<i){for(let s=0;s<i-this.selectedExam.selections_size;s++)n.selections.pop().selected&&(t=!0);t&&(n.selections[0].selected=!0)}else for(let s=0;s<this.selectedExam.selections_size-i;s++)n.selections.push({context:"\u0628\u0644\u0627\u0639\u0646\u0648\u0646",selected:!1})})}onTitleBlur(){this.selectedExam.title=this.selectedExam.title?this.selectedExam.title:"\u0628\u0644\u0627 \u0639\u0646\u0648\u0627\u0646"}onDateBlur(){this.dateExpirationValidation(),(this.selectedExam.start_date||this.selectedExam.end_date)&&(this.selectedExam.exercise=!1,this.selectedExam.answer_shown=!1)}onExerciseChange(t){this.selectedExam.exercise&&(this.selectedExam.start_date="",this.selectedExam.end_date="")}onQuestionBlur(t){this.selectedExam.questions[t].context=this.selectedExam.questions[t].context?this.selectedExam.questions[t].context:"\u0628\u0644\u0627 \u0639\u0646\u0648\u0627\u0646"}onSelectionBlur(t,n){this.selectedExam.questions[t].selections[n].context=this.selectedExam.questions[t].selections[n].context?this.selectedExam.questions[t].selections[n].context:"\u0628\u0644\u0627 \u0639\u0646\u0648\u0627\u0646"}dateExpirationValidation(){return this.startDateBeforeCurrent=this.selectedExam.start_date&&new Date(this.selectedExam.start_date)<new Date,this.endDateBeforeCurrent=this.selectedExam.end_date&&new Date(this.selectedExam.end_date)<new Date,this.endDateBeforeStart=this.selectedExam.start_date&&this.selectedExam.end_date&&new Date(this.selectedExam.end_date)<=new Date(this.selectedExam.start_date),!this.startDateBeforeCurrent&&!this.endDateBeforeCurrent&&!this.endDateBeforeStart}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p),e.Y36(m.t2))},o.\u0275cmp=e.Xpm({type:o,selectors:[["exam-creation"]],inputs:{selectedExam:"selectedExam",selectedAction:"selectedAction"},outputs:{onExamSaved:"onExamSaved"},features:[e.TTD],decls:3,vars:1,consts:[[1,"exam-creation"],["class","col-lg-8 col-md-9 mx-auto",4,"ngIf"],[1,"col-lg-8","col-md-9","mx-auto"],[1,"settings","row"],[1,"mb-3","col-12"],[1,"title",3,"disabled","click"],[1,"fas","fa-gear","text-primary"],[4,"ngIf"],[1,"questions","row","mt-3"],[1,"text-primary","fas","fa-edit"],[1,"form-label"],["name","title","type","text",1,"form-control","form-control",3,"ngModel","blur","ngModelChange"],[1,"mb-3","col-md-6"],["name","start_date","type","datetime-local",1,"form-control",3,"ngModel","blur","ngModelChange"],[1,"invalid-feedback"],["name","end_date","type","datetime-local",1,"form-control",3,"ngModel","blur","ngModelChange"],[1,"col-12","mb-2"],[1,"form-check"],["type","checkbox","id","flexCheckDefault","name","exercise",1,"form-check-input",3,"ngModel","change","ngModelChange"],["for","flexCheckDefault",1,"form-check-label"],["class","form-check",4,"ngIf"],["type","checkbox","id","flexCheckDefault","name","answer_shown",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"col-md-6","mb-3"],["name","questions-numbering",1,"form-select",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["name","selection_size","type","number",1,"form-control",3,"ngModel","blur","ngModelChange"],[1,"buttons"],[3,"click"],[1,"fas","fa-plus","text-secondary"],[3,"disabled","click"],[1,"fas","fa-minus","text-secondary"],[4,"ngFor","ngForOf"],[1,"fas","fa-angle-right","text-secondary"],[1,"fas","fa-angle-left","text-secondary"],[3,"value"],[1,"question","col-12","mb-3"],[1,"form-control",3,"name","ngModel","blur","ngModelChange"],["class","selection col-md-6 mb-3",4,"ngFor","ngForOf"],[1,"selection","col-md-6","mb-3"],["type","radio",3,"name","ngModel","value","click","ngModelChange"]],template:function(t,n){1&t&&(e._UZ(0,"ngx-spinner"),e.TgZ(1,"div",0),e.YNc(2,I,11,8,"form",1),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngIf",n.selectedExam&&!n.selectedExam.folder))},directives:[m.Ro,d.O5,a._Y,a.JL,a.F,a.Fj,a.JJ,a.On,a.Wl,a.EJ,d.sg,a.wV,a.YN,a.Kr,a._],styles:[".exam-creation[_ngcontent-%COMP%]{padding-top:125px}@media (max-width: 576px){.exam-creation[_ngcontent-%COMP%]{padding:125px 30px 0}}.exam-creation[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:20px}.exam-creation[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .exam-creation[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]{border-radius:0}.exam-creation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0;list-style:none}.exam-creation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;padding-left:12px}.exam-creation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;border-style:none;background:none}.exam-creation[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{text-align:left}.exam-creation[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]{margin-left:10px;display:inline-block!important}.exam-creation[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:0}.exam-creation[_ngcontent-%COMP%]   .questions-navs[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{padding-left:5px}.exam-creation[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%], .exam-creation[_ngcontent-%COMP%]   .questions[_ngcontent-%COMP%]{border-right:1px solid #dee2e6!important}.exam-creation[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-style:none;padding:0;background:none;display:inline-block;text-align:center;position:relative;z-index:999;left:22px;background-color:#fff}.exam-creation[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px}"]}),o})(),U=(()=>{class o{constructor(t,n,i,s){this._spinner=t,this.cd=n,this._examAdminClient=i,this._title=s,this.selectedExam=null,this.actions=[],this.exams=[],this.filesTrace=[null],this.newExam=null,this.deleteActionClicked=!1,this.examCreationHidden=!0,this.selectedAction=null,this.unsubscribeAll=new g.xQ}ngOnInit(){this._spinner.show(void 0,{type:"ball-spin-clockwise",size:"medium",bdColor:"none"}),this._examAdminClient.getExams().pipe((0,_.R)(this.unsubscribeAll)).subscribe(t=>{this._spinner.hide(),this.exams=t}),this._title.setTitle("\u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u0627\u0645\u062a\u062d\u0627\u0646\u0627\u062a")}ngOnDestroy(){this.unsubscribeAll.next(),this.unsubscribeAll.complete()}onSelectExam(t){this.selectedExam=t,this.cd.detectChanges()}onSelectAction(t){var n;if(this.selectedAction=t,"delete"==t&&(this.deleteActionClicked=!0),"add-folder"==t){let i=this.filesTrace[this.filesTrace.length-1];this.newExam={folder:!0,title:"\u0628\u0644\u0627\u0639\u0646\u0648\u0627\u0646",exam_id:i?i.id:null}}if("add-exam"==t){let i=this.filesTrace[this.filesTrace.length-1];this.newExam={folder:!1,title:"\u0628\u0644\u0627\u0639\u0646\u0648\u0627\u0646",exam_id:i?i.id:null,questions:[]}}if("enter"==t&&(this.selectedExam&&!this.selectedExam.folder?this.examCreationHidden=!1:(this._spinner.show(void 0,{type:"ball-spin-clockwise",size:"medium",bdColor:"none"}),this._examAdminClient.getChildren(this.selectedExam.id).pipe((0,_.R)(this.unsubscribeAll)).subscribe(i=>{this._spinner.hide(),this.exams=i,this.filesTrace.push(this.selectedExam),this.actions[5].visible=!0,this.selectedExam=null}))),"back"==t)if(this.examCreationHidden){let i=null===(n=this.filesTrace[this.filesTrace.length-2])||void 0===n?void 0:n.id;this._spinner.show(void 0,{type:"ball-spin-clockwise",size:"medium",bdColor:"none"}),i?this._examAdminClient.getChildren(i).pipe((0,_.R)(this.unsubscribeAll)).subscribe(s=>{this._spinner.hide(),this.exams=s,this.filesTrace.pop(),this.actions[5].visible=!!i,this.selectedExam=null}):this._examAdminClient.getExams().pipe((0,_.R)(this.unsubscribeAll)).subscribe(s=>{this._spinner.hide(),this.exams=s,this.filesTrace.pop(),this.actions[5].visible=!1,this.selectedExam=null})}else this.examCreationHidden=!0,this.filesTrace.length>1&&(this.actions[5].visible=!0)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.t2),e.Y36(e.sBO),e.Y36(p),e.Y36(E.Dx))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-exam-administration"]],decls:7,vars:11,consts:[[1,"exam-administration-container"],[1,"fixed-section"],["currentPage","exam-admin"],[3,"selectedItem","actions","onSelectAction"],[3,"examCreationHidden","deleteActionClicked","newExam","exams","onExamDeleted","onSelectExam"],[3,"selectedAction","selectedExam","onExamSaved"]],template:function(t,n){1&t&&(e._UZ(0,"ngx-spinner"),e.TgZ(1,"div",0),e.TgZ(2,"div",1),e._UZ(3,"navbar",2),e.TgZ(4,"actions",3),e.NdJ("actions",function(s){return n.actions=s})("onSelectAction",function(s){return n.onSelectAction(s)}),e.qZA(),e.qZA(),e.TgZ(5,"exam-list",4),e.NdJ("onExamDeleted",function(){return n.deleteActionClicked=!1})("onSelectExam",function(s){return n.onSelectExam(s)}),e.qZA(),e.TgZ(6,"exam-creation",5),e.NdJ("onExamSaved",function(){return n.selectedAction=""}),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("selectedItem",n.selectedExam),e.xp6(1),e.ekj("hidden",!n.examCreationHidden),e.Q6J("examCreationHidden",n.examCreationHidden)("deleteActionClicked",n.deleteActionClicked)("newExam",n.newExam)("exams",n.exams),e.xp6(1),e.ekj("hidden",n.examCreationHidden),e.Q6J("selectedAction",n.selectedAction)("selectedExam",n.selectedExam))},directives:[m.Ro,A.S,Z,J,Y],styles:[".exam-administration-container[_ngcontent-%COMP%]   .fixed-section[_ngcontent-%COMP%]{position:fixed;background:white;width:100%;z-index:1000}.exam-administration-container[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none}"]}),o})();var $=r(7643),L=r(7189);const j=[{path:"",component:U}];let V=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.ez,h.Bz.forChild(j),$.W,L.l,m.ef,a.u5]]}),o})()}}]);