"use strict";(self.webpackChunkexam_ui=self.webpackChunkexam_ui||[]).push([[741],{741:(F,m,t)=>{t.r(m),t.d(m,{SignupModule:()=>U});var p=t(8583),e=t(665),d=t(7709),g=t(6782),f=t(446),u=t(639),c=t(959),A=t(8128),s=t(72),Z=t(9075),a=t(6653);function h(i,r){1&i&&(u.ynx(0),u._uU(1," \u0627\u062e\u062a\u0627\u0631 \u0628\u0631\u064a\u062f \u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a "),u.BQk())}function v(i,r){1&i&&(u.ynx(0),u._uU(1," \u0647\u0630\u0627 \u0627\u0644\u0628\u0631\u064a\u062f \u063a\u064a\u0631 \u0635\u0627\u0644\u062d "),u.BQk())}function _(i,r){1&i&&(u.ynx(0),u._uU(1," \u0627\u062f\u062e\u0644 \u0628\u0631\u064a\u062f \u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0641\u0631\u064a\u062f "),u.BQk())}function T(i,r){1&i&&(u.ynx(0),u._uU(1," \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0636\u0639\u064a\u0641\u0629 "),u.BQk())}function b(i,r){1&i&&(u.ynx(0),u._uU(1," \u0627\u062f\u062e\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 "),u.BQk())}function x(i,r){1&i&&(u.ynx(0),u._uU(1," \u0627\u062f\u062e\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0631\u0629 \u0627\u062e\u0631\u0649 "),u.BQk())}function q(i,r){1&i&&(u.ynx(0),u._uU(1," \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u0629 "),u.BQk())}const C=[{path:"",component:(()=>{class i{constructor(o,n,l,w,y,E){this._formBuilder=o,this._authClient=n,this._token=l,this._spinner=w,this._title=y,this._router=E,this.form=new e.cw({}),this.passwordHidden=!0,this.submitted=!1,this.emailExist=!1,this.unsubscribeAll=new d.xQ}get first_name(){return this.form.get("first_name")}get last_name(){return this.form.get("last_name")}get email(){return this.form.get("email")}get password(){return this.form.get("password")}get password_confirmation(){return this.form.get("password_confirmation")}ngOnInit(){this.form=this._formBuilder.group({first_name:["",[e.kI.required]],last_name:["",[e.kI.required]],email:["",[e.kI.required,e.kI.email]],password:["",[e.kI.required,e.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]],password_confirmation:["",[e.kI.required]]},{validator:f.t}),this._title.setTitle("\u062a\u0633\u062c\u064a\u0644 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f")}ngOnDestroy(){this.unsubscribeAll.next(),this.unsubscribeAll.complete()}register(){this.emailExist=!1,this.submitted=!0,this.form.invalid?this.form.markAllAsTouched():(this._spinner.show(void 0,{type:"ball-spin-clockwise",size:"medium",bdColor:"none"}),this._authClient.signup(this.form.value).pipe((0,g.R)(this.unsubscribeAll)).subscribe(o=>{this._token.set(o.access_token),this._spinner.hide(),this._router.navigate(["auth/verify-email"])},o=>{console.log(o),this._spinner.hide(),this.emailExist=o.error.errors.email}))}}return i.\u0275fac=function(o){return new(o||i)(u.Y36(e.qu),u.Y36(c.$),u.Y36(A.B),u.Y36(s.t2),u.Y36(Z.Dx),u.Y36(a.F0))},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-signup"]],decls:63,vars:20,consts:[[1,"signup-box","border","col-md-7","m-auto","mt-5"],[1,"row"],[1,"main","col-lg-7"],[1,"header"],[3,"formGroup"],[1,"mb-3","col-md-6"],[1,"form-label"],["formControlName","first_name","type","text",1,"form-control"],[1,"invalid-feedback"],["formControlName","last_name","type","text",1,"form-control"],[1,"mb-3"],["formControlName","email","type","text",1,"form-control"],[4,"ngIf"],[1,"col-md-6"],["formControlName","password",1,"form-control",3,"type"],["formControlName","password_confirmation",1,"form-control",3,"type"],[1,"password-hint","mt-1","mb-3"],[1,"form-check"],["type","checkbox","value","","id","flexCheckDefault",1,"form-check-input",3,"change"],["for","flexCheckDefault",1,"form-check-label"],[1,"footer","row","mt-5"],[1,"col-6"],["routerLink","/auth/login"],[1,"confirm","col-6"],[1,"btn","btn-primary",3,"click"],[1,"image","col-lg-5","d-none","d-lg-block","text-center"],["src","assets/images/exam.jpg"]],template:function(o,n){1&o&&(u._UZ(0,"ngx-spinner"),u.TgZ(1,"div",0),u.TgZ(2,"div",1),u.TgZ(3,"div",2),u.TgZ(4,"div",3),u.TgZ(5,"h1"),u._uU(6,"\u0627\u0636\u0641 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f"),u.qZA(),u.TgZ(7,"div"),u._uU(8,"\u0644\u062a\u0633\u062a\u0645\u0631 \u0641\u064a \u0627\u0644\u062a\u0637\u0628\u064a\u0642"),u.qZA(),u.qZA(),u.TgZ(9,"form",4),u.TgZ(10,"div",1),u.TgZ(11,"div",5),u.TgZ(12,"label",6),u._uU(13,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644"),u.qZA(),u._UZ(14,"input",7),u.TgZ(15,"div",8),u._uU(16," \u0627\u062f\u062e\u0644 \u0627\u0644\u0627\u0633\u0645 "),u.qZA(),u.qZA(),u.TgZ(17,"div",5),u.TgZ(18,"label",6),u._uU(19,"\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629"),u.qZA(),u._UZ(20,"input",9),u.TgZ(21,"div",8),u._uU(22," \u0627\u062f\u062e\u0644 \u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629 "),u.qZA(),u.qZA(),u.qZA(),u.TgZ(23,"div",10),u.TgZ(24,"label",6),u._uU(25,"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"),u.qZA(),u._UZ(26,"input",11),u.TgZ(27,"div",8),u.YNc(28,h,2,0,"ng-container",12),u.YNc(29,v,2,0,"ng-container",12),u.YNc(30,_,2,0,"ng-container",12),u.qZA(),u.qZA(),u.TgZ(31,"div",1),u.TgZ(32,"div",13),u.TgZ(33,"label",6),u._uU(34,"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"),u.qZA(),u._UZ(35,"input",14),u.TgZ(36,"div",8),u.YNc(37,T,2,0,"ng-container",12),u.YNc(38,b,2,0,"ng-container",12),u.qZA(),u.qZA(),u.TgZ(39,"div",13),u.TgZ(40,"label",6),u._uU(41,"\u0627\u0644\u062a\u0627\u0643\u064a\u062f"),u.qZA(),u._UZ(42,"input",15),u.TgZ(43,"div",8),u.YNc(44,x,2,0,"ng-container",12),u.YNc(45,q,2,0,"ng-container",12),u.qZA(),u.qZA(),u.TgZ(46,"div",16),u._uU(47," \u0627\u0633\u062a\u062e\u062f\u0645 8 \u0623\u062d\u0631\u0641 \u0623\u0648 \u0623\u0643\u062b\u0631 \u0645\u0639 \u0645\u0632\u064a\u062c \u0645\u0646 \u0627\u0644\u0623\u062d\u0631\u0641 \u0648\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0648\u0627\u0644\u0631\u0645\u0648\u0632 "),u.qZA(),u.qZA(),u.TgZ(48,"div",17),u.TgZ(49,"input",18),u.NdJ("change",function(){return n.passwordHidden=!n.passwordHidden}),u.qZA(),u.TgZ(50,"label",19),u._uU(51," \u0627\u0638\u0647\u0627\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 "),u.qZA(),u.qZA(),u.qZA(),u.TgZ(52,"div",20),u.TgZ(53,"div",21),u.TgZ(54,"a",22),u._uU(55,"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u062f\u0644\u0627 \u0645\u0646 \u0630\u0644\u0643"),u.qZA(),u.qZA(),u.TgZ(56,"div",23),u.TgZ(57,"button",24),u.NdJ("click",function(){return n.register()}),u._uU(58,"\u062a\u0627\u0643\u064a\u062f"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(59,"div",25),u._UZ(60,"img",26),u.TgZ(61,"div"),u._uU(62,"\u062d\u0633\u0627\u0628 \u0648\u0627\u062d\u062f \u064a\u0645\u0643\u0646\u0643 \u0645\u0646 \u0627\u0644\u062f\u062e\u0648\u0644 \u0627\u0644\u0649 \u0645\u062c\u062a\u0645\u0639 \u0627\u0644\u0627\u0645\u062a\u062d\u0627\u0646\u0627\u062a"),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&o&&(u.xp6(9),u.Q6J("formGroup",n.form),u.xp6(5),u.ekj("is-invalid",n.first_name.invalid&&n.submitted),u.xp6(6),u.ekj("is-invalid",n.last_name.invalid&&n.submitted),u.xp6(6),u.ekj("is-invalid",(n.email.invalid||n.emailExist)&&n.submitted),u.xp6(2),u.Q6J("ngIf",n.email.hasError("required")),u.xp6(1),u.Q6J("ngIf",n.email.hasError("email")),u.xp6(1),u.Q6J("ngIf",n.emailExist),u.xp6(5),u.ekj("is-invalid",n.password.invalid&&n.submitted),u.Q6J("type",n.passwordHidden?"password":"text"),u.xp6(2),u.Q6J("ngIf",n.password.hasError("pattern")),u.xp6(1),u.Q6J("ngIf",n.password.hasError("required")),u.xp6(4),u.ekj("is-invalid",(n.password_confirmation.invalid||n.form.hasError("notMatch"))&&n.submitted),u.Q6J("type",n.passwordHidden?"password":"text"),u.xp6(2),u.Q6J("ngIf",n.password_confirmation.hasError("required")),u.xp6(1),u.Q6J("ngIf",n.form.hasError("notMatch")&&!n.password_confirmation.hasError("required")))},directives:[s.Ro,e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,p.O5,a.yS],styles:[".signup-box{border:1px solid #dee2e6;border-radius:8px;padding:36px}@media (max-width: 767px){.signup-box{border:none!important}}.signup-box .header{margin-bottom:22px}.signup-box .password-hint{font-size:14px;color:#5f6368}.signup-box .footer a{display:inline-block;margin-top:3px;text-decoration:none}.signup-box .footer .confirm{text-align:left}.signup-box .image{position:relative;top:60px}.signup-box .image img{width:70%;margin-left:55px}\n"],encapsulation:2}),i})()}];let U=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=u.oAB({type:i}),i.\u0275inj=u.cJS({imports:[[p.ez,a.Bz.forChild(C),e.UX,s.ef]]}),i})()}}]);