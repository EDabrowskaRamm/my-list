webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startpage_startpage_component__ = __webpack_require__("../../../../../src/app/startpage/startpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: 'startpage', component: __WEBPACK_IMPORTED_MODULE_2__startpage_startpage_component__["a" /* StartpageComponent */] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */] },
    { path: '', redirectTo: '/startpage', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__startpage_startpage_component__["a" /* StartpageComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.show = true;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__startpage_startpage_component__ = __webpack_require__("../../../../../src/app/startpage/startpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_service__ = __webpack_require__("../../../../../src/app/list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__startpage_startpage_component__["a" /* StartpageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__list_service__["a" /* ListService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListService = (function () {
    function ListService() {
        this.items = [];
        this.completedTasks = [];
    }
    // get all items from 1 todo array
    ListService.prototype.getAllItems = function (items) {
        if (localStorage.getItem('items') === null ||
            localStorage.getItem('items') === '' ||
            localStorage.getItem('items') === undefined) {
            localStorage.setItem('items', this.items.toString());
        }
        else {
            this.items = (localStorage.getItem('items')).split(',');
        }
        return this.items;
    };
    // add list items
    ListService.prototype.addItem = function (input) {
        this.items.push(input);
        localStorage.setItem('items', this.items.toString());
        return this.items;
    };
    // remove list item
    ListService.prototype.removeItem = function (item) {
        this.items = this.items.filter(function (j) { return j !== item; });
        localStorage.setItem('items', this.items.toString());
        return this.items;
    };
    // get initial edited input value
    ListService.prototype.getInitVal = function ($event) {
        return this.initialValue = this.items.indexOf($event.target.value);
    };
    // remove old and add new edited item
    ListService.prototype.editToDoItem = function ($event) {
        this.newEditedValue = $event.target.value;
        this.items.splice(this.initialValue, 1);
        localStorage.setItem('items', this.items.toString());
        this.items.splice(this.initialValue, 0, this.newEditedValue);
        localStorage.setItem('items', this.items.toString());
        return this.items;
    };
    // get all completed tasks
    ListService.prototype.getAllCompletedItems = function (items) {
        if (localStorage.getItem('completedTasks') === null ||
            localStorage.getItem('completedTasks') === '' ||
            localStorage.getItem('completedTasks') === undefined) {
            localStorage.setItem('completedTasks', this.completedTasks.toString());
        }
        else {
            this.completedTasks = (localStorage.getItem('completedTasks')).split(',');
        }
        return this.completedTasks;
    };
    // add completed tasks to completed array and remove them from todo array
    ListService.prototype.addCompletedItem = function () {
        localStorage.setItem('completedTasks', this.completedTasks.toString());
        localStorage.setItem('items', this.items.toString());
        return this.completedTasks;
    };
    // remove list item
    ListService.prototype.removeCompletedItem = function (task) {
        this.completedTasks = this.completedTasks.filter(function (j) { return j !== task; });
        localStorage.setItem('completedTasks', this.completedTasks.toString());
        return this.completedTasks;
    };
    // add edited task to todo array and remove it from completed array
    ListService.prototype.addEditedItem = function () {
        localStorage.setItem('items', this.items.toString());
        localStorage.setItem('completedTasks', this.completedTasks.toString());
        return this.items;
    };
    // get initial edited input value
    ListService.prototype.getInitValComp = function ($event) {
        return this.initialValueComp = this.completedTasks.indexOf($event.target.value);
    };
    // remove old and add new edited item
    ListService.prototype.editToDoItemComp = function ($event) {
        this.newEditedValueComp = $event.target.value;
        this.completedTasks.splice(this.initialValueComp, 1);
        localStorage.setItem('completedTasks', this.completedTasks.toString());
        this.completedTasks.splice(this.initialValueComp, 0, this.newEditedValueComp);
        localStorage.setItem('completedTasks', this.completedTasks.toString());
        return this.completedTasks;
    };
    return ListService;
}());
ListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ListService);

//# sourceMappingURL=list.service.js.map

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand logo\" routerLink=\"/startpage\">ToDo</a>\n  </div>  \n</nav>\n<div class=\"jumbotronLike\">\n  <div class=\"container\">\n    <!-- <div class=\"row\">\n      <div class=\"col-md-4 offset-md-4\">\n        <h3>Add new list</h3>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"List title\" class=\"form-control\">     \n          <a href=\"#\" class=\"hbtn hb-border-top-br3 hpill hpad2 hbor2\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add\n          </a>\n        </div>\n      </div>\n    </div> -->\n    <div class=\"row justify-content-center\">\n      <div class=\"col-sm-12 col-md-8 col-lg-6\">\n        <div class=\"card\">\n          <div class=\"card-header text-center\">\n            {{ title }}\n          </div>\n          <div class=\"input-group\">\n            <input type=\"text\" placeholder=\"New item\" class=\"form-control\" #input \n                  (keyup.enter)=\"add(input.value); input.value='' \" \n                  (blur)=\"add(input.value); input.value='' \">    \n            <a href=\"#\" class=\"hbtn hb-fill-bottom-rev-bg-br hpad2 hbor2\" (click)=\"add(input.value)\">\n              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add\n            </a> \n          </div>      \n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\" \n                *ngFor=\"let item of items; let i = index\"> \n              <label class=\"label\">\n                <input class=\"label__checkbox\" type=\"checkbox\" value=\"{{ i }}\" (click)=\"complete($event.target)\"/>\n                <span class=\"label__text\">\n                  <span class=\"label__check\">\n                    <i class=\"fa fa-check icon\"></i>\n                  </span>\n                </span>\n              </label>\n              <input type=\"text\" #itemText value=\"{{ item }}\" (focus)=\"initVal($event)\" (keyup.enter)=\"valuechange($event)\">\n              <label class=\"del\">\n                <input class=\"del__checkbox\" type=\"checkbox\" value=\"{{ i }}\" (click)=\"remove(item)\"/>\n                <span class=\"del__text\">\n                  <span class=\"del__check\">\n                    <i class=\"fa fa-times icon\"></i>\n                  </span>\n                </span>\n              </label>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-5 justify-content-center\">\n      <div class=\"col-sm-12 col-md-8 col-lg-6\">    \n        <div class=\"card completed\" *ngIf=\"completedTasks.length > 0\">\n          <div class=\"card-header text-center\">\n            {{ completeTitle }}\n          </div>     \n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\" \n                *ngFor=\"let task of completedTasks; let j = index\"> \n              <label class=\"label\">\n                <input class=\"label__checkbox\" type=\"checkbox\" value=\"{{ j }}\" (click)=\"edit($event.target)\"/>\n                <span class=\"label__text\">\n                  <span class=\"label__check\">\n                    <i class=\"fa fa-check icon\"></i>\n                  </span>\n                </span>\n              </label>\n              <input type=\"text\" #itemText value=\"{{ task }}\" (focus)=\"initValComp($event)\" (keyup.enter)=\"valuechangeComp($event)\">\n              <label class=\"del\">\n                <input class=\"del__checkbox\" type=\"checkbox\" value=\"{{ j }}\" (click)=\"removeComplete(task)\"/>\n                <span class=\"del__text\">\n                  <span class=\"del__check\">\n                    <i class=\"fa fa-times icon\"></i>\n                  </span>\n                </span>\n              </label>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: #34495e;\n  color: white; }\n  .navbar .logo {\n    font-family: 'Pacifico', cursive !important;\n    font-size: 2.5rem;\n    color: white;\n    padding-top: 0;\n    padding-bottom: 0; }\n\n.hbtn {\n  position: relative;\n  box-sizing: border-box;\n  display: inline-block;\n  overflow: hidden;\n  padding: 8px 20px;\n  text-align: center;\n  border: 2px solid #c0392b;\n  text-decoration: none;\n  background-color: #c0392b;\n  color: white;\n  white-space: nowrap;\n  z-index: 0; }\n\n.hbtn i {\n  padding-right: 8px; }\n\n.hb-fill-bottom-rev-bg-br::before {\n  position: absolute;\n  content: \"\";\n  background: #c0392b;\n  transition-duration: 0.3s;\n  z-index: -1;\n  top: 0px;\n  right: auto;\n  bottom: auto;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  border: 2px solid #c0392b; }\n\n.hb-fill-bottom-rev-bg-br:hover::before {\n  width: 100%;\n  height: 0px;\n  opacity: 1; }\n\n.hb-fill-bottom-rev-bg-br:hover {\n  background: white;\n  color: #c0392b;\n  transition: all 0.3s ease; }\n\n.hpad2 {\n  padding: 12px 24px !important; }\n\n.hbor2 {\n  border-width: 2px; }\n\n.hbor2::before {\n  border-width: 2px !important; }\n\na:active, a:focus {\n  text-decoration: none;\n  color: white; }\n\n.list-group-item input {\n  margin-right: 1rem; }\n\n.list-group-item .label + input {\n  margin-right: 0;\n  border: none; }\n  .list-group-item .label + input:active, .list-group-item .label + input:focus {\n    border: none;\n    outline: none;\n    border-bottom: 1px solid #c0392b; }\n\n.list-group-item .striked {\n  text-decoration: line-through; }\n\n.list-group-item .label__checkbox {\n  display: none; }\n\n.list-group-item .label__check {\n  display: inline-block;\n  border-radius: 50%;\n  border: 5px solid rgba(0, 0, 0, 0.1);\n  background: white;\n  vertical-align: middle;\n  margin-right: 20px;\n  width: 2em;\n  height: 2em;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  transition: border .3s ease; }\n  .list-group-item .label__check i.icon {\n    opacity: 0.2;\n    font-size: 'calc(1rem + 1vw)';\n    color: transparent;\n    transition: opacity .3s .1s ease;\n    -webkit-text-stroke: 3px rgba(0, 0, 0, 0.5); }\n  .list-group-item .label__check:hover {\n    border: 5px solid #c0392b; }\n\n.list-group-item .label__checkbox:checked + .label__text .label__check {\n  -webkit-animation: check 0.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;\n          animation: check 0.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards; }\n  .list-group-item .label__checkbox:checked + .label__text .label__check .icon {\n    opacity: 1;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    color: white;\n    -webkit-text-stroke: 0;\n    -webkit-animation: icon 0.3s cubic-bezier(1, 0.008, 0.565, 1.65) 0.1s 1 forwards;\n            animation: icon 0.3s cubic-bezier(1, 0.008, 0.565, 1.65) 0.1s 1 forwards; }\n\n.list-group-item .center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n@-webkit-keyframes icon {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes icon {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes check {\n  0% {\n    opacity: 0.1;\n    background: rgba(0, 0, 0, 0.2); }\n  10% {\n    opacity: 0.2;\n    background: rgba(0, 0, 0, 0.2); }\n  12% {\n    opacity: 0.4;\n    background: rgba(0, 0, 0, 0.1); }\n  50% {\n    background: #c0392b;\n    opacity: 0.6; }\n  100% {\n    background: #c0392b;\n    opacity: 1; } }\n\n@keyframes check {\n  0% {\n    opacity: 0.1;\n    background: rgba(0, 0, 0, 0.2); }\n  10% {\n    opacity: 0.2;\n    background: rgba(0, 0, 0, 0.2); }\n  12% {\n    opacity: 0.4;\n    background: rgba(0, 0, 0, 0.1); }\n  50% {\n    background: #c0392b;\n    opacity: 0.6; }\n  100% {\n    background: #c0392b;\n    opacity: 1; } }\n\n.list-group-item .del {\n  margin-left: auto; }\n  .list-group-item .del .del__checkbox {\n    display: none; }\n  .list-group-item .del .del__check {\n    display: inline-block;\n    border-radius: 50%;\n    border: 5px solid rgba(0, 0, 0, 0.1);\n    background: white;\n    vertical-align: middle;\n    margin-right: 20px;\n    width: 2em;\n    height: 2em;\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    transition: border .3s ease; }\n    .list-group-item .del .del__check i.icon {\n      opacity: 0.2;\n      font-size: 'calc(1rem + 1vw)';\n      color: transparent;\n      transition: opacity .3s .1s ease;\n      -webkit-text-stroke: 3px rgba(0, 0, 0, 0.5); }\n    .list-group-item .del .del__check:hover {\n      border: 5px solid #c0392b; }\n  .list-group-item .del .del__checkbox:checked + .del__text .del__check {\n    -webkit-animation: check 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;\n            animation: check 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards; }\n    .list-group-item .del .del__checkbox:checked + .del__text .del__check .icon {\n      opacity: 1;\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      color: white;\n      -webkit-text-stroke: 0;\n      -webkit-animation: icon 0.1s cubic-bezier(1, 0.008, 0.565, 1.65) 1 forwards;\n              animation: icon 0.1s cubic-bezier(1, 0.008, 0.565, 1.65) 1 forwards; }\n  .list-group-item .del .center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n@keyframes icon {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes check {\n  0% {\n    opacity: 0.1;\n    background: rgba(0, 0, 0, 0.2); }\n  10% {\n    opacity: 0.2;\n    background: rgba(0, 0, 0, 0.2); }\n  12% {\n    opacity: 0.4;\n    background: rgba(0, 0, 0, 0.1); }\n  50% {\n    background: #c0392b;\n    opacity: 0.6; }\n  100% {\n    background: #c0392b;\n    opacity: 1; } }\n\n.card {\n  border-bottom-color: transparent; }\n  .card .card-header {\n    font-size: 1.5rem;\n    font-family: 'Pacifico', cursive;\n    color: #34495e; }\n\n.completed .list-group-item input {\n  color: gray;\n  text-decoration: line-through; }\n  .completed .list-group-item input:focus, .completed .list-group-item input:active {\n    color: black;\n    text-decoration: none; }\n\n.jumbotronLike {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n  background-color: #eaecee;\n  height: 100%; }\n\n.input-group input:focus, .input-group input:active {\n  box-shadow: none; }\n\n.list-group.list-group-flush input[type=text] {\n  width: 70%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_service__ = __webpack_require__("../../../../../src/app/list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent(_service) {
        this._service = _service;
        // todo list
        this.title = 'To do';
        this.items = [];
        // completed list
        this.completeTitle = 'Done';
        this.show = false;
        this.completedTasks = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.items = this._service.getAllItems(this.items);
        this.completedTasks = this._service.getAllCompletedItems(this.completedTasks);
    };
    // add list items to todo list
    ListComponent.prototype.add = function (input) {
        if (input) {
            this.items = this._service.addItem(input);
        }
    };
    // remove list item from todo list
    ListComponent.prototype.remove = function (item) {
        var _this = this;
        return setTimeout(function () { return _this.items = _this._service.removeItem(item); }, 300);
    };
    // get initial input value to edit
    ListComponent.prototype.initVal = function ($event) {
        this.initialValue = this._service.getInitVal($event);
    };
    // edit item in todo list
    ListComponent.prototype.valuechange = function ($event) {
        return this.items = this._service.editToDoItem($event);
    };
    // add completed item to completed list and remove from todo list
    ListComponent.prototype.complete = function ($event) {
        var completedValue = $event.parentElement.nextElementSibling.value;
        this.items.splice(this.items.indexOf(completedValue), 1);
        this.completedTasks.push(completedValue);
        return this.completedTasks = this._service.addCompletedItem();
    };
    // remove completed tasks
    ListComponent.prototype.removeComplete = function (task) {
        var _this = this;
        return setTimeout(function () {
            return _this.completedTasks = _this._service.removeCompletedItem(task);
        }, 300);
    };
    // edit completed task and put it to todo
    ListComponent.prototype.edit = function ($event) {
        var editedValue = $event.parentElement.nextElementSibling.value;
        this.completedTasks.splice(this.completedTasks.indexOf(editedValue), 1);
        this.items.push(editedValue);
        return this.items = this._service.addEditedItem();
    };
    // get initial input value to edit in completed list
    ListComponent.prototype.initValComp = function ($event) {
        this.initialValueComp = this._service.getInitValComp($event);
    };
    // edit item in completed list
    ListComponent.prototype.valuechangeComp = function ($event) {
        return this.completedTasks = this._service.editToDoItemComp($event);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__list_service__["a" /* ListService */]) === "function" && _a || Object])
], ListComponent);

var _a;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/startpage/startpage.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand logo\">ToDo</a>\n    <span>\n      <a class=\"navbar-brand about\" routerLink=\"/list\">Go to app</a>\n      <a class=\"navbar-brand about\" (click)=\"scrollTo(target)\">Tell me more</a>\n    </span>\n  </div>  \n</nav>\n<section class=\"parallax text-center\">\n  <span>\n    <h1>My simple ToDo app</h1>\n    <a class=\"hbtn hb-fill-bottom-bg hbor2\" routerLink=\"/list\">\n      <i class=\"fa fa-sticky-note-o\" aria-hidden=\"true\"></i> Try it\n    </a>\n  </span>\n</section>\n<section class=\"features\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-12 text-center\">\n        <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis ex voluptates esse corporis beatae quidem eligendi temporibus? \n          Blanditiis earum nulla totam, odio eum vel. Quam sit aliquam temporibus praesentium.</p>\n      </div>     \n      <div class=\"col-md-4 col-sm-12 text-center\">\n        <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis ex voluptates esse corporis beatae quidem eligendi temporibus? \n          Blanditiis earum nulla totam, odio eum vel. Quam sit aliquam temporibus praesentium.</p>\n      </div> \n      <div class=\"col-md-4 col-sm-12 text-center\">\n        <i class=\"fa fa-lightbulb-o\" aria-hidden=\"true\"></i>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis ex voluptates esse corporis beatae quidem eligendi temporibus? \n          Blanditiis earum nulla totam, odio eum vel. Quam sit aliquam temporibus praesentium.</p>\n      </div>    \n    </div> \n  </div>  \n</section>\n<section class=\"about\" #target>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <p><span class=\"lead\">Forget about sticky notes!!</span><br>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis ex voluptates esse corporis beatae quidem eligendi temporibus? \n          Blanditiis earum nulla totam, odio eum vel. Quam sit aliquam temporibus praesentium.\n        </p>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <div class=\"img img-fluid\" alt=\"stickyNotes\"></div>\n      </div>\n    </div>\n  </div>\n</section>\n<footer class=\"text-center\"> 2017</footer>\n"

/***/ }),

/***/ "../../../../../src/app/startpage/startpage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: #34495e;\n  color: white; }\n  .navbar .logo {\n    font-family: 'Pacifico', cursive !important;\n    font-size: 2.5rem;\n    color: white;\n    padding-top: 0;\n    padding-bottom: 0; }\n  .navbar .about {\n    cursor: pointer;\n    color: white;\n    font-size: 1rem; }\n    .navbar .about:hover {\n      color: #c0392b; }\n\n.parallax {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(" + __webpack_require__("../../../../../src/assets/thought-catalog.jpg") + ");\n  height: 500px;\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n  .parallax span {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n  .parallax h1 {\n    color: white;\n    font-size: 4.5rem;\n    margin-bottom: 1rem; }\n  .parallax .hbtn {\n    position: relative;\n    box-sizing: border-box;\n    display: inline-block;\n    overflow: hidden;\n    padding: 8px 20px;\n    margin: 0px 3px 6px;\n    text-align: center;\n    border: 2px solid white;\n    text-decoration: none;\n    color: white;\n    white-space: nowrap;\n    z-index: 0; }\n  .parallax .hbtn i {\n    padding-right: 8px; }\n  .parallax .hb-fill-bottom-bg::before {\n    position: absolute;\n    content: \"\";\n    background: white;\n    transition-duration: 0.3s;\n    z-index: -1;\n    top: 0px;\n    right: auto;\n    bottom: auto;\n    left: 0px;\n    width: 100%;\n    height: 0px;\n    opacity: 1; }\n  .parallax .hb-fill-bottom-bg:hover::before {\n    width: 100%;\n    height: 100%;\n    opacity: 1; }\n  .parallax .hb-fill-bottom-bg:hover {\n    color: black;\n    background: white;\n    transition: all 0.3s ease; }\n  .parallax .hbor2 {\n    border-width: 2px; }\n  .parallax .hbor2::before {\n    border-width: 2px !important; }\n  .parallax a {\n    font-size: 1.4rem; }\n    .parallax a:hover, .parallax a:active, .parallax a:focus {\n      text-decoration: none; }\n\n.features {\n  background-color: #eaecee; }\n  .features .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding-top: 3rem;\n    padding-bottom: 3rem; }\n    .features .container p {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      margin-right: 1.5rem;\n      color: #34495e; }\n    .features .container i {\n      margin-bottom: 1rem;\n      color: #c0392b;\n      font-size: 3.5rem; }\n\n.about .container {\n  margin: 3rem auto; }\n  .about .container p {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin-right: 1.5rem;\n    color: #34495e; }\n  .about .container .img {\n    background: url(" + __webpack_require__("../../../../../src/assets/sticky.jpg") + ");\n    height: 250px;\n    width: 100%;\n    background-size: 100% 100%; }\n\nfooter {\n  padding: .5rem;\n  background-color: #2c3e50;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/startpage/startpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var StartpageComponent = (function () {
    function StartpageComponent(_document) {
        this._document = _document;
    }
    StartpageComponent.prototype.ngOnInit = function () { };
    StartpageComponent.prototype.scrollTo = function (el) {
        document.documentElement.scrollTo({ top: 360, behavior: 'smooth' });
    };
    return StartpageComponent;
}());
StartpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-startpage',
        template: __webpack_require__("../../../../../src/app/startpage/startpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/startpage/startpage.component.scss")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object])
], StartpageComponent);

//# sourceMappingURL=startpage.component.js.map

/***/ }),

/***/ "../../../../../src/assets/sticky.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sticky.d7eeae4c38ac3aa8de10.jpg";

/***/ }),

/***/ "../../../../../src/assets/thought-catalog.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "thought-catalog.07fee525066c25bad23a.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map