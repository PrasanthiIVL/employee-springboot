webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/actions/employee.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_EMPLOYEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_EMPLOYEE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_EMPLOYEE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RESET_EMPLOYEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ResetEmployee; });
var GET_EMPLOYEE = "Employee Get";
var GET_EMPLOYEE_SUCCESS = "Employee Get Success";
var GET_EMPLOYEE_FAIL = "Employee Get Fail";
var RESET_EMPLOYEE = "Employee Reset";
var GetEmployee = (function () {
    function GetEmployee(payload) {
        this.payload = payload;
        this.type = GET_EMPLOYEE;
    }
    return GetEmployee;
}());

var ResetEmployee = (function () {
    function ResetEmployee() {
        this.type = RESET_EMPLOYEE;
    }
    return ResetEmployee;
}());

//# sourceMappingURL=employee.actions.js.map

/***/ }),

/***/ "../../../../../src/app/actions/employee.list.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_EMPLOYEES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GET_EMPLOYEES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_EMPLOYEES_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_EMPLOYEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_EMPLOYEE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_EMPLOYEE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DELETE_EMPLOYEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DELETE_EMPLOYEE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DELETE_EMPLOYEE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return MODIFY_EMPLOYEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return MODIFY_EMPLOYEE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return MODIFY_EMPLOYEE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GetEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DeleteEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ModifyEmployee; });
var GET_EMPLOYEES = "Employee Get All";
var GET_EMPLOYEES_SUCCESS = "Employee Get All Success";
var GET_EMPLOYEES_FAIL = "Employee Get All Fail";
var ADD_EMPLOYEE = "Employee Add";
var ADD_EMPLOYEE_SUCCESS = "Employee Add Success";
var ADD_EMPLOYEE_FAIL = "Employee Add Fail";
var DELETE_EMPLOYEE = "Employee Delete";
var DELETE_EMPLOYEE_SUCCESS = "Employee Delete Success";
var DELETE_EMPLOYEE_FAIL = "Employee Delete Fail";
var MODIFY_EMPLOYEE = "Employee Modify";
var MODIFY_EMPLOYEE_SUCCESS = "Employee Modify Success";
var MODIFY_EMPLOYEE_FAIL = "Employee Modify Fail";
var GetEmployees = (function () {
    function GetEmployees() {
        this.type = GET_EMPLOYEES;
    }
    return GetEmployees;
}());

var AddEmployee = (function () {
    function AddEmployee(payload) {
        this.payload = payload;
        this.type = ADD_EMPLOYEE;
    }
    return AddEmployee;
}());

var DeleteEmployee = (function () {
    function DeleteEmployee(payload) {
        this.payload = payload;
        this.type = DELETE_EMPLOYEE;
    }
    return DeleteEmployee;
}());

var ModifyEmployee = (function () {
    function ModifyEmployee(payload) {
        this.payload = payload;
        this.type = MODIFY_EMPLOYEE;
    }
    return ModifyEmployee;
}());

//# sourceMappingURL=employee.list.actions.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active{\n\tfont-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<div class = \"row\">\n\t  <div class = \"com-sm-12\">\n\t\t <nav class=\"navbar navbar-default\">\t\t    \n\t\t \t<ul class=\"nav navbar-nav\">\n\t\t      <li><a routerLink = \"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a></li>\n\t\t      <li><a routerLink = \"/employee\" routerLinkActive=\"active\">Employees</a></li>\n\t\t    </ul>\n\t\t    <ul class=\"nav navbar-nav navbar-right\">\n\t\t      <li  *ngIf = \"!isSignedIn()\" ><a routerLink = \"/auth\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Sign-in</a></li>\n  \t\t      <li style = \"cursor: pointer;\" *ngIf = \"isSignedIn()\"><a (click) = \"logout()\"> Logout</a></li>\n\t\t    </ul>\n\t\t </nav> \n\t  </div>\n\t</div>\n\n\t<br><br><br>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_employee_list_actions__ = __webpack_require__("../../../../../src/app/actions/employee.list.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(employeeStore, router) {
        this.employeeStore = employeeStore;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.employeeStore.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_employee_list_actions__["l" /* GetEmployees */]());
        this.employees = this.employeeStore.select('employees');
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl("/auth");
    };
    AppComponent.prototype.isSignedIn = function () {
        return (localStorage.getItem('token') !== null);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_employee_employee_component__ = __webpack_require__("../../../../../src/app/components/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_auth_auth_component__ = __webpack_require__("../../../../../src/app/components/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__effects_employee_list_effects__ = __webpack_require__("../../../../../src/app/effects/employee.list.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__effects_employee_effects__ = __webpack_require__("../../../../../src/app/effects/employee.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_reducers__ = __webpack_require__("../../../../../src/app/app.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Components




//Services


//Effects


//Others


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_employee_employee_component__["a" /* EmployeeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_auth_auth_component__["a" /* AuthComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_routes__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["c" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_15__app_reducers__["a" /* default */]),
            __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_13__effects_employee_list_effects__["a" /* EmployeeListEffects */]),
            __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_14__effects_employee_effects__["a" /* EmployeeEffects */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose__ = __webpack_require__("../../../../@ngrx/core/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_employee_list_reducer__ = __webpack_require__("../../../../../src/app/reducers/employee.list.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_employee_reducer__ = __webpack_require__("../../../../../src/app/reducers/employee.reducer.ts");




/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* combineReducers */])({
    employees: __WEBPACK_IMPORTED_MODULE_2__reducers_employee_list_reducer__["a" /* default */],
    employee: __WEBPACK_IMPORTED_MODULE_3__reducers_employee_reducer__["a" /* default */]
}));
//# sourceMappingURL=app.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_employee_employee_component__ = __webpack_require__("../../../../../src/app/components/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_auth_component__ = __webpack_require__("../../../../../src/app/components/auth/auth.component.ts");



var AppRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'employee',
        component: __WEBPACK_IMPORTED_MODULE_1__components_employee_employee_component__["a" /* EmployeeComponent */]
    },
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_2__components_auth_auth_component__["a" /* AuthComponent */]
    },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.alert {\n    background: #f2edda;\n    padding: 7px;\n    font-size: .9em;\n    margin-bottom: 20px;\n    display: inline-block;\n    -webkit-animation: 2s alertAnim forwards;\n            animation: 2s alertAnim forwards;\n}\n\n@-webkit-keyframes alertAnim {\n    from {\n        opacity:0;\n        -webkit-transform: translateY(-20px);\n                transform: translateY(-20px);\n    }\n    to {\n        opacity:1;\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}\n\n@keyframes alertAnim {\n    from {\n        opacity:0;\n        -webkit-transform: translateY(-20px);\n                transform: translateY(-20px);\n    }\n    to {\n        opacity:1;\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}\n\n.green{\n    color: green;   \n}\n\n.red{\n    color:red;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"row\">\n\t  <ul class=\"nav nav-tabs\">\n\t    <li class=\"active\"><a data-toggle=\"tab\" href=\"#signin\">Login</a></li>\n\t    <li><a data-toggle=\"tab\" href=\"#signup\">Register</a></li>\n\t  </ul>\n\n\t  <div class=\"tab-content\">\n\t    <div id=\"signin\" class=\"tab-pane fade in active\">\n\t\t    <div class=\"col-sm-6\">\n\t\t\t\t<h2> Sign-In </h2>\n\t\t\t\t<hr>\n\t\t\t\t<form [formGroup] = \"signInForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t    <input type=\"email\" class=\"form-control\" name=\"email\" name=\"email\" formControlName=\"email\" [(ngModel)] = \"userSignIn.email\">\n\t\t\t\t\t    <div class=\"alert\" *ngIf=\"!signInForm.controls['email'].valid && signInForm.controls['email'].touched\"> Please enter a valid email </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    <label for=\"password\">Password</label>\n\t\t\t\t\t    <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" [(ngModel)] = \"userSignIn.password\">\n\t\t\t\t\t    <div class=\"alert\" *ngIf=\"!signInForm.controls['password'].valid && signInForm.controls['password'].touched\"> This is required </div>\n\t\t\t\t\t</div><br>\n\t\t\t      <input type=\"button\" class = \"btn btn-primary\" value = \"Login\" (click) = \"signin()\"  [disabled]=\"!signInForm.valid\">\n\t\t\t      <input type=\"button\" class = \"btn btn-warning\" value = \"Reset\">\n\t\t\t    </form>\n\t\t\t</div>\n\t    </div>\n\t    <div id=\"signup\" class=\"tab-pane fade\">\n\t\t\t<div class = \"col-sm-6\">\n\t\t\t\t<h2> Sign-up </h2>\n\t\t\t\t<hr>\n\t\t\t\t<form [formGroup] = \"signUpForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t    <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\" [(ngModel)] = \"userSignUp.email\">\n\t\t\t\t\t    <div class=\"alert\" *ngIf=\"!signUpForm.controls['email'].valid && signUpForm.controls['email'].touched\"> Please enter valid email </div>\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    <label for=\"password\">Password</label>\n\t\t\t\t\t    <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" [(ngModel)] = \"userSignUp.password\">\n\t\t\t\t\t    <div class=\"alert\" *ngIf=\"!signUpForm.controls['password'].valid && signUpForm.controls['password'].touched\"> This is required </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    <label for=\"password2\">Retype password</label>\n\t\t\t\t\t    <input type=\"password\" class=\"form-control\" name=\"password2\" formControlName=\"password2\" [(ngModel)] = \"password2\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"alert\" *ngIf=\"userSignUp.password != password2 && signUpForm.controls['password2'].dirty\"> Password didn't match </div><br>\n\t\t\t      <input type=\"button\" class = \"btn btn-primary\" (click) = \"addUser()\" value = \"Register\" [disabled]=\"!signUpForm.valid || userSignUp.password != password2 \">\n\t\t\t      <input type=\"button\" class = \"btn btn-warning\" value = \"Cancel\">\n\t\t\t    </form>\n\t\t\t    <br>\n\t\t\t    <div [ngClass] = \"myClass\" >  {{signUpMessage}} </div>\n\t\t\t</div>\n\t    </div>\n\t  </div>\n\t\n\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthComponent = (function () {
    function AuthComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.signUpMessage = "";
        this.myClass = 'green';
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.userSignIn = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]("", "", "");
        this.resetSignInForm();
        this.userSignUp = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]("", "", "");
        this.resetSignUpForm();
    };
    AuthComponent.prototype.resetUserSignIn = function () {
        this.userSignIn = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]("", "", "");
    };
    AuthComponent.prototype.resetSignInForm = function () {
        this.signInForm = this.fb.group({
            'email': [this.userSignIn.email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/)])],
            'password': [this.userSignIn.password, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    AuthComponent.prototype.signin = function () {
        var _this = this;
        this.authService.signin(this.userSignIn).subscribe(function (data) {
            // console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this.router.navigateByUrl('/employee');
        }, function (err) {
            console.log(err);
        });
        this.resetUserSignIn();
        this.resetSignInForm;
    };
    AuthComponent.prototype.resetUserSignUp = function () {
        this.userSignUp = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]("", "", "");
    };
    AuthComponent.prototype.resetSignUpForm = function () {
        this.signUpForm = this.fb.group({
            'email': [this.userSignUp.email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/)])],
            'password': [this.userSignUp.password, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'password2': [""]
        });
    };
    AuthComponent.prototype.addUser = function () {
        var _this = this;
        if (this.userSignUp.password == this.password2) {
            this.authService.addUser(this.userSignUp).subscribe(function (user) {
                console.log(user);
                _this.signUpMessage = "Successfully Registered. Please Sign-in to continue";
                _this.myClass = 'green';
            }, function (err) {
                console.log(err);
                _this.signUpMessage = "Couldn't Register. Please try again";
                _this.myClass = 'red';
            });
        }
        else {
            this.signUpMessage = "Retype password didn't match the given password";
        }
        this.resetUserSignUp();
        this.resetSignUpForm();
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/components/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], AuthComponent);

var _a, _b, _c;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/employee/employee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table th{\n\tfont-size: 22px;\n\tpadding: 15px;\n}\n\ntable td{\n\tpadding: 20px;\n\tfont-size: 22px;\n}\n\ntable td button{\n\tfont-size: 12px;\n\tpadding:5px;\n}\n\n.alert {\n    background: #f2edda;\n    padding: 7px;\n    font-size: .9em;\n    margin-bottom: 20px;\n    display: inline-block;\n    -webkit-animation: 2s alertAnim forwards;\n            animation: 2s alertAnim forwards;\n}\n\n@-webkit-keyframes alertAnim {\n    from {\n        opacity:0;\n        -webkit-transform: translateY(-20px);\n                transform: translateY(-20px);\n    }\n    to {\n        opacity:1;\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}\n\n@keyframes alertAnim {\n    from {\n        opacity:0;\n        -webkit-transform: translateY(-20px);\n                transform: translateY(-20px);\n    }\n    to {\n        opacity:1;\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}\n\n/* The Modal (background) */\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1000; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%;\n}\n\n/* The Close Button */\n.close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\n\t<div class = \"row\"> \n\t\t<input type=\"button\" class = \"btn btn-primary\" value = \" + Add Employee\" (click)=\"getAddEmployeeForm()\" *ngIf=\"isSignedIn()\">\n\t</div> \n\n\t<div class = \"col-sm-12\">\n\t\t<div class = \"row\">\n\t\t<h3> List of Employees </h3>\n\t\t</div>\n\t\t<br>\n\t\t<table class = \"table-striped\">\n\t\t\t<thead>\n\t\t\t<tr class=\"row\">\n\t\t\t\t<th class = \"col-sm-3\">\n\t\t\t\t\tFirst Name\n\t\t\t\t</th>\n\t\t\t\t<th class = \"col-sm-3\">\n\t\t\t\t\tLast Name\n\t\t\t\t</th>\n\t\t\t\t<th class = \"col-sm-2\">\n\t\t\t\t\tSalary\n\t\t\t\t</th>\n\t\t\t\t<th class = \"col-sm-4\">\n\t\t\t\t\tOptions\n\t\t\t\t</th>\n\t\t\t</tr>\t\t\t\t\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let employee of employees | async; let i=index;\"  class=\"row\">\n\t\t\t\t\t<td class = \"col-sm-3\">\n\t\t\t\t\t\t{{employee.firstName}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class = \"col-sm-3\">\n\t\t\t\t\t\t{{employee.lastName}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class = \"col-sm-2\">\n\t\t\t\t\t\t{{employee.salary}}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class = \"col-sm-4\">\n\t\t\t\t\t\t<button (click)=\"deleteEmployee(employee._id,i)\"\n\t\t\t                class=\"btn btn-danger\" *ngIf=\"isSignedIn()\">\n\t\t\t\t\t          Delete\n\t\t\t\t\t    </button>\n\t\t\t\t\t    <button (click)=\"getEmployee(employee._id,i)\"\n\t\t\t\t\t                class=\"btn btn-warning\" *ngIf=\"isSignedIn()\">\n\t\t\t\t\t          Modify\n\t\t\t\t\t    </button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>\n\n<!-- The Modal -->\n<div id=\"myModal\" class=\"modal\" *ngIf=\"displayModal\">\n\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <a (click) = \"cancelOperation()\"> <span class=\"close\">&times;</span></a>\n    <div class = \"container\">\n    \t<div class = \"col-md-6\">\n\t\t\t<div class = \"row\">\n\t\t\t\t<h3 *ngIf=\"showModifyButton==false\"> Add Employee </h3>\n\t\t\t\t<h3 *ngIf=\"showModifyButton\"> Modify Employee </h3>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<form [formGroup]=\"rForm\" >\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"firstName\">First Name</label>\n\t\t\t\t    <input type=\"text\" class=\"form-control\" name=\"firstName\" formControlName=\"firstName\" [(ngModel)]=\"emp.firstName\">\n\t\t\t\t    <div class=\"alert\" *ngIf=\"!rForm.controls['firstName'].valid && rForm.controls['firstName'].touched\">{{ titleAlert }}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t    <label for=\"lastName\">Last Name</label>\n\t\t\t\t    <input type=\"text\" class=\"form-control\" name=\"lastName\" formControlName=\"lastName\" [(ngModel)]=\"emp.lastName\">\n\t\t\t\t    <div class=\"alert\" *ngIf=\"!rForm.controls['lastName'].valid && rForm.controls['lastName'].touched\">{{ titleAlert }}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t    <label for=\"salary\">Salary</label>\n\t\t\t\t    <input type=\"text\" class=\"form-control\" name=\"salary\" formControlName=\"salary\" [(ngModel)]=\"emp.salary\">\n\t\t\t\t    <div class=\"alert\" *ngIf=\"!rForm.controls['salary'].valid && rForm.controls['salary'].touched\">{{ titleAlert }}</div>\t    \n\t\t\t\t    <div class=\"alert\" *ngIf=\"!rForm.controls['salary'].valid && rForm.controls['salary'].dirty\">Enter a number</div>\n\n\t\t\t\t</div>\n\t\t      <input type=\"button\" class = \"btn btn-primary\" value = \"Add\" *ngIf=\"showModifyButton==false\" [disabled]=\"!rForm.valid\" (click)=\"addEmployee()\">\n\t\t      <input type=\"button\" class = \"btn btn-success\" value = \"Modify\" *ngIf=\"showModifyButton\" [disabled]=\"!rForm.valid\" (click)=\"modifyEmployee()\">\n\t\t      <button (click)=\"cancelOperation()\"  class=\"btn btn-warning\"> Cancel </button>\n\t\t    </form>\n\t\t</div>\n  \t</div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_employee_list_actions__ = __webpack_require__("../../../../../src/app/actions/employee.list.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_employee_actions__ = __webpack_require__("../../../../../src/app/actions/employee.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService, fb, employeeListStore, employeeStore) {
        this.employeeService = employeeService;
        this.fb = fb;
        this.employeeListStore = employeeListStore;
        this.employeeStore = employeeStore;
        this.index = -1;
        this.titleAlert = 'This field is required';
        this.showModifyButton = false;
        this.displayModal = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employees = this.employeeListStore.select('employees');
        this.employee = this.employeeStore.select('employee');
        this.employee.subscribe(function (employee) {
            _this.emp = employee;
        });
        this.resetForm();
        this.resetEmployee();
    };
    EmployeeComponent.prototype.resetForm = function () {
        this.rForm = this.fb.group({
            'firstName': [this.emp.firstName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'lastName': [this.emp.lastName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'salary': [this.emp.salary, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(/^[0-9]*$/)])],
        });
    };
    EmployeeComponent.prototype.resetEmployee = function () {
        this.employeeStore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_employee_actions__["f" /* ResetEmployee */]());
        this.emp = {
            _id: "",
            firstName: "",
            lastName: "",
            salary: 0
        };
    };
    EmployeeComponent.prototype.showModal = function () {
        this.displayModal = true;
    };
    EmployeeComponent.prototype.hideModal = function () {
        this.displayModal = false;
    };
    EmployeeComponent.prototype.cancelOperation = function () {
        this.resetEmployee();
        this.resetForm();
        this.hideModal();
    };
    EmployeeComponent.prototype.getAddEmployeeForm = function () {
        this.showModal();
        this.showModifyButton = false;
    };
    EmployeeComponent.prototype.isSignedIn = function () {
        return (localStorage.getItem('token') !== null);
    };
    EmployeeComponent.prototype.addEmployee = function () {
        this.employeeListStore.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_employee_list_actions__["d" /* AddEmployee */](this.emp));
        this.resetEmployee();
        this.resetForm();
        this.hideModal();
    };
    EmployeeComponent.prototype.getEmployee = function (id, i) {
        var _this = this;
        this.employeeStore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_employee_actions__["d" /* GetEmployee */](id));
        this.employee.subscribe(function (employee) {
            _this.emp = employee;
        });
        this.showModal();
        this.showModifyButton = true;
        this.index = i;
    };
    EmployeeComponent.prototype.modifyEmployee = function () {
        this.employeeListStore.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_employee_list_actions__["p" /* ModifyEmployee */]({ employee: this.emp, index: this.index }));
        this.showModifyButton = false;
        this.resetEmployee();
        this.resetForm();
        this.hideModal();
    };
    EmployeeComponent.prototype.deleteEmployee = function (id, i) {
        this.employeeListStore.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_employee_list_actions__["h" /* DeleteEmployee */]({ id: id, index: i }));
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-employee',
        template: __webpack_require__("../../../../../src/app/components/employee/employee.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/employee/employee.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_employee_service__["a" /* EmployeeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], EmployeeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=employee.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#content{\n\tfont-size: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\t<div id=\"content\">\n\t This is Home page\n\t</div>\n\t<!-- Number of Employees: {{ (employees | async).length }} -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(store) {
        this.store = store;
        this.employees = this.store.select('employees');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/effects/employee.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_employee_actions__ = __webpack_require__("../../../../../src/app/actions/employee.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EmployeeEffects = (function () {
    function EmployeeEffects(actions, employeeService) {
        var _this = this;
        this.actions = actions;
        this.employeeService = employeeService;
        this.get$ = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_employee_actions__["a" /* GET_EMPLOYEE */])
            .switchMap(function (action) { return _this.employeeService.getEmployee(action.payload); })
            .switchMap(function (employee) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_7__actions_employee_actions__["c" /* GET_EMPLOYEE_SUCCESS */], payload: employee });
        })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_7__actions_employee_actions__["b" /* GET_EMPLOYEE_FAIL */], payload: err });
        });
    }
    return EmployeeEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], EmployeeEffects.prototype, "get$", void 0);
EmployeeEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_employee_service__["a" /* EmployeeService */]) === "function" && _b || Object])
], EmployeeEffects);

var _a, _b;
//# sourceMappingURL=employee.effects.js.map

/***/ }),

/***/ "../../../../../src/app/effects/employee.list.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__ = __webpack_require__("../../../../../src/app/actions/employee.list.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EmployeeListEffects = (function () {
    function EmployeeListEffects(actions, employeeService) {
        var _this = this;
        this.actions = actions;
        this.employeeService = employeeService;
        this.get$ = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__["i" /* GET_EMPLOYEES */])
            .switchMap(function () { return _this.employeeService.getEmployees(); })
            .switchMap(function (res) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__["k" /* GET_EMPLOYEES_SUCCESS */], payload: res });
        })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__["j" /* GET_EMPLOYEES_FAIL */], payload: err });
        });
        this.add$ = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__["a" /* ADD_EMPLOYEE */])
            .switchMap(function (action) {
            // console.log("calling add route: "+ action.payload.firstName);
            return _this.employeeService.addEmployee(action.payload)
                .switchMap(function (employee) {
                // console.log("got Result " + employee);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__["c" /* ADD_EMPLOYEE_SUCCESS */], payload: employee });
            })
                .catch(function (err) {
                // console.log("got error: "+ err);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__["b" /* ADD_EMPLOYEE_FAIL */], payload: err });
            });
        });
        this.delete$ = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__["e" /* DELETE_EMPLOYEE */])
            .switchMap(function (action) {
            _this.index = action.payload.index;
            return _this.employeeService.deleteEmployee(action.payload.id)
                .switchMap(function (res) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__["g" /* DELETE_EMPLOYEE_SUCCESS */], payload: { result: res, index: _this.index } });
            })
                .catch(function (err) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__["f" /* DELETE_EMPLOYEE_FAIL */], payload: err });
            });
        });
        this.modify$ = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__["m" /* MODIFY_EMPLOYEE */])
            .switchMap(function (action) {
            _this.index = action.payload.index;
            return _this.employeeService.modifyEmployee(action.payload.employee)
                .switchMap(function (employee) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__["o" /* MODIFY_EMPLOYEE_SUCCESS */], payload: { employee: employee, index: _this.index } });
            })
                .catch(function (err) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: __WEBPACK_IMPORTED_MODULE_6__actions_employee_list_actions__["n" /* MODIFY_EMPLOYEE_FAIL */], payload: err });
            });
        });
    }
    return EmployeeListEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], EmployeeListEffects.prototype, "get$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], EmployeeListEffects.prototype, "add$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], EmployeeListEffects.prototype, "delete$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], EmployeeListEffects.prototype, "modify$", void 0);
EmployeeListEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_employee_service__["a" /* EmployeeService */]) === "function" && _b || Object])
], EmployeeListEffects);

var _a, _b;
//# sourceMappingURL=employee.list.effects.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, email, password) {
        this._id = _id;
        this.email = email;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/reducers/employee.list.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__ = __webpack_require__("../../../../../src/app/actions/employee.list.actions.ts");

var initialState = null;
/* harmony default export */ __webpack_exports__["a"] = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__["i" /* GET_EMPLOYEES */]:
            console.log(action.type);
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__["k" /* GET_EMPLOYEES_SUCCESS */]:
            console.log(action.type);
            console.log(action.payload);
            return action.payload;
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__["j" /* GET_EMPLOYEES_FAIL */]: {
            console.log(action.type);
            console.log(action.payload);
            return state;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__["a" /* ADD_EMPLOYEE */]:
            console.log(action.type);
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__["c" /* ADD_EMPLOYEE_SUCCESS */]:
            console.log(action.type);
            return state.concat(action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__["b" /* ADD_EMPLOYEE_FAIL */]:
            console.log(action.type);
            console.log(action.payload);
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__["e" /* DELETE_EMPLOYEE */]:
            console.log(action.type);
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__["g" /* DELETE_EMPLOYEE_SUCCESS */]:
            console.log(action.type);
            console.log(action.payload.result);
            var newState = state;
            newState.splice(action.payload.index, 1);
            return newState;
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__["f" /* DELETE_EMPLOYEE_FAIL */]:
            console.log(action.type);
            console.log(action.payload);
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__["m" /* MODIFY_EMPLOYEE */]:
            console.log(action.type);
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__["o" /* MODIFY_EMPLOYEE_SUCCESS */]:
            console.log(action.type);
            var modifiedState = state;
            modifiedState[action.payload.index] = action.payload.employee;
            return modifiedState;
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_list_actions__["n" /* MODIFY_EMPLOYEE_FAIL */]:
            console.log(action.type);
            console.log(action.payload);
            return state;
        default:
            return state;
    }
});
//# sourceMappingURL=employee.list.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/reducers/employee.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_employee_actions__ = __webpack_require__("../../../../../src/app/actions/employee.actions.ts");

var initialState = {
    _id: "",
    firstName: "",
    lastName: "",
    salary: 0
};
/* harmony default export */ __webpack_exports__["a"] = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_actions__["a" /* GET_EMPLOYEE */]:
            console.log(action.type);
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_actions__["c" /* GET_EMPLOYEE_SUCCESS */]:
            console.log(action.type);
            return action.payload;
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_actions__["b" /* GET_EMPLOYEE_FAIL */]:
            console.log(action.type);
            console.log(action.payload);
            return initialState;
        case __WEBPACK_IMPORTED_MODULE_0__actions_employee_actions__["e" /* RESET_EMPLOYEE */]:
            console.log(action.type);
            return initialState;
        default:
            return state;
    }
});
//# sourceMappingURL=employee.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.addUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8080/api/auth/signup', body, { headers: headers })
            .map(function (response) {
            return response.json().obj;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.signin = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8080/api/auth/signin', body, { headers: headers })
            .map(function (response) {
            //console.log(response.json().obj);
            return response.json().obj;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get('http://localhost:8080/api/employee')
            .map(function (response) {
            return response.json().obj;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        var body = JSON.stringify(employee);
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8080/api/employee' + token, body, { headers: headers })
            .map(function (response) {
            return response.json().obj;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    EmployeeService.prototype.modifyEmployee = function (employee) {
        var body = JSON.stringify(employee);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.put('http://localhost:8080/api/employee/' + employee._id + token, body, { headers: headers })
            .map(function (response) {
            return response.json().obj;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    EmployeeService.prototype.getEmployee = function (id) {
        /*const token = localStorage.getItem('token')
                            ? '?token='+localStorage.getItem('token')
                            : '';*/
        return this.http.get('http://localhost:8080/api/employee/' + id)
            .map(function (response) {
            return response.json().obj;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:8080/api/employee/' + id + token)
            .map(function (response) {
            return response.json().obj;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json()); });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EmployeeService);

var _a;
//# sourceMappingURL=employee.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map