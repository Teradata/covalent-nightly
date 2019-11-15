(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/dialog'), require('@angular/material/input'), require('@angular/material/button'), require('@angular/cdk/drag-drop')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/dialogs', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/dialog', '@angular/material/input', '@angular/material/button', '@angular/cdk/drag-drop'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.dialogs = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.dialog, global.ng.material.input, global.ng.material.button, global.ng.cdk['drag-drop']));
}(this, (function (exports, core, common, forms, dialog, input, button, dragDrop) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDialogTitleDirective = /** @class */ (function () {
        function TdDialogTitleDirective() {
        }
        TdDialogTitleDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'td-dialog-title' },] }
        ];
        return TdDialogTitleDirective;
    }());
    var TdDialogContentDirective = /** @class */ (function () {
        function TdDialogContentDirective() {
        }
        TdDialogContentDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'td-dialog-content' },] }
        ];
        return TdDialogContentDirective;
    }());
    var TdDialogActionsDirective = /** @class */ (function () {
        function TdDialogActionsDirective() {
        }
        TdDialogActionsDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'td-dialog-actions' },] }
        ];
        return TdDialogActionsDirective;
    }());
    var TdDialogComponent = /** @class */ (function () {
        function TdDialogComponent() {
        }
        /**
         * @return {?}
         */
        TdDialogComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            if (this.dialogTitle.length > 1) {
                throw new Error('Duplicate td-dialog-title component at in td-dialog.');
            }
            if (this.dialogContent.length > 1) {
                throw new Error('Duplicate td-dialog-content component at in td-dialog.');
            }
            if (this.dialogActions.length > 1) {
                throw new Error('Duplicate td-dialog-actions component at in td-dialog.');
            }
        };
        TdDialogComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-dialog',
                        template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>\n",
                        styles: [".td-dialog-title{margin-top:0;margin-bottom:20px}.td-dialog-content{margin-bottom:16px}.td-dialog-actions{position:relative;top:16px;left:16px}::ng-deep [dir=rtl] .td-dialog-actions{right:16px;left:auto}:host{display:block}:host .td-dialog-actions{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host .td-dialog-actions .td-dialog-spacer{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-dialog-actions ::ng-deep button{text-transform:uppercase;margin-left:8px;padding-left:8px;padding-right:8px;min-width:64px}[dir=rtl] :host .td-dialog-actions ::ng-deep button{margin-right:8px;margin-left:inherit}"]
                    }] }
        ];
        TdDialogComponent.propDecorators = {
            dialogTitle: [{ type: core.ContentChildren, args: [TdDialogTitleDirective, { descendants: true },] }],
            dialogContent: [{ type: core.ContentChildren, args: [TdDialogContentDirective, { descendants: true },] }],
            dialogActions: [{ type: core.ContentChildren, args: [TdDialogActionsDirective, { descendants: true },] }]
        };
        return TdDialogComponent;
    }());
    if (false) {
        /** @type {?} */
        TdDialogComponent.prototype.dialogTitle;
        /** @type {?} */
        TdDialogComponent.prototype.dialogContent;
        /** @type {?} */
        TdDialogComponent.prototype.dialogActions;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdAlertDialogComponent = /** @class */ (function () {
        function TdAlertDialogComponent(_dialogRef) {
            this._dialogRef = _dialogRef;
            this.closeButton = 'CLOSE';
        }
        /**
         * @return {?}
         */
        TdAlertDialogComponent.prototype.close = /**
         * @return {?}
         */
        function () {
            this._dialogRef.close();
        };
        TdAlertDialogComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-alert-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{ closeButton }}</button>\n  </td-dialog-actions>\n</td-dialog>\n",
                        styles: [".td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdAlertDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef }
        ]; };
        return TdAlertDialogComponent;
    }());
    if (false) {
        /** @type {?} */
        TdAlertDialogComponent.prototype.title;
        /** @type {?} */
        TdAlertDialogComponent.prototype.message;
        /** @type {?} */
        TdAlertDialogComponent.prototype.closeButton;
        /**
         * @type {?}
         * @private
         */
        TdAlertDialogComponent.prototype._dialogRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdConfirmDialogComponent = /** @class */ (function () {
        function TdConfirmDialogComponent(_dialogRef) {
            this._dialogRef = _dialogRef;
            this.cancelButton = 'CANCEL';
            this.acceptButton = 'ACCEPT';
        }
        /**
         * @return {?}
         */
        TdConfirmDialogComponent.prototype.cancel = /**
         * @return {?}
         */
        function () {
            this._dialogRef.close(false);
        };
        /**
         * @return {?}
         */
        TdConfirmDialogComponent.prototype.accept = /**
         * @return {?}
         */
        function () {
            this._dialogRef.close(true);
        };
        TdConfirmDialogComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-confirm-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button mat-button color=\"accent\" #acceptBtn (keydown.arrowleft)=\"closeBtn.focus()\" (click)=\"accept()\">\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                        styles: [".td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdConfirmDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef }
        ]; };
        return TdConfirmDialogComponent;
    }());
    if (false) {
        /** @type {?} */
        TdConfirmDialogComponent.prototype.title;
        /** @type {?} */
        TdConfirmDialogComponent.prototype.message;
        /** @type {?} */
        TdConfirmDialogComponent.prototype.cancelButton;
        /** @type {?} */
        TdConfirmDialogComponent.prototype.acceptButton;
        /**
         * @type {?}
         * @private
         */
        TdConfirmDialogComponent.prototype._dialogRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdPromptDialogComponent = /** @class */ (function () {
        function TdPromptDialogComponent(_dialogRef) {
            this._dialogRef = _dialogRef;
            this.cancelButton = 'CANCEL';
            this.acceptButton = 'ACCEPT';
        }
        /**
         * @return {?}
         */
        TdPromptDialogComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // focus input once everything is rendered and good to go
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                ((/** @type {?} */ (_this._input.nativeElement))).focus();
            }));
        };
        /**
         * Method executed when input is focused
         * Selects all text
         */
        /**
         * Method executed when input is focused
         * Selects all text
         * @return {?}
         */
        TdPromptDialogComponent.prototype.handleInputFocus = /**
         * Method executed when input is focused
         * Selects all text
         * @return {?}
         */
        function () {
            ((/** @type {?} */ (this._input.nativeElement))).select();
        };
        /**
         * @return {?}
         */
        TdPromptDialogComponent.prototype.cancel = /**
         * @return {?}
         */
        function () {
            this._dialogRef.close();
        };
        /**
         * @return {?}
         */
        TdPromptDialogComponent.prototype.accept = /**
         * @return {?}
         */
        function () {
            this._dialogRef.close(this.value);
        };
        TdPromptDialogComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-prompt-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input\n            matInput\n            #input\n            (focus)=\"handleInputFocus()\"\n            (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n            [(ngModel)]=\"value\"\n            name=\"value\"\n            required\n          />\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button #closeBtn (keydown.arrowright)=\"acceptBtn.focus()\" (click)=\"cancel()\">{{ cancelButton }}</button>\n    <button\n      mat-button\n      color=\"accent\"\n      #acceptBtn\n      (keydown.arrowleft)=\"closeBtn.focus()\"\n      [disabled]=\"!form.valid\"\n      (click)=\"accept()\"\n    >\n      {{ acceptButton }}\n    </button>\n  </td-dialog-actions>\n</td-dialog>\n",
                        styles: [".td-dialog-input-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}.td-dialog-input-wrapper .td-dialog-input{-webkit-box-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}.td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdPromptDialogComponent.ctorParameters = function () { return [
            { type: dialog.MatDialogRef }
        ]; };
        TdPromptDialogComponent.propDecorators = {
            _input: [{ type: core.ViewChild, args: ['input', { static: true },] }]
        };
        return TdPromptDialogComponent;
    }());
    if (false) {
        /** @type {?} */
        TdPromptDialogComponent.prototype.title;
        /** @type {?} */
        TdPromptDialogComponent.prototype.message;
        /** @type {?} */
        TdPromptDialogComponent.prototype.value;
        /** @type {?} */
        TdPromptDialogComponent.prototype.cancelButton;
        /** @type {?} */
        TdPromptDialogComponent.prototype.acceptButton;
        /** @type {?} */
        TdPromptDialogComponent.prototype._input;
        /**
         * @type {?}
         * @private
         */
        TdPromptDialogComponent.prototype._dialogRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_DIALOGS = [
        TdAlertDialogComponent,
        TdConfirmDialogComponent,
        TdPromptDialogComponent,
        TdDialogComponent,
        TdDialogTitleDirective,
        TdDialogActionsDirective,
        TdDialogContentDirective,
    ];
    /** @type {?} */
    var TD_DIALOGS_ENTRY_COMPONENTS = [
        TdAlertDialogComponent,
        TdConfirmDialogComponent,
        TdPromptDialogComponent,
    ];
    var CovalentDialogsModule = /** @class */ (function () {
        function CovalentDialogsModule() {
        }
        CovalentDialogsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [forms.FormsModule, common.CommonModule, dialog.MatDialogModule, input.MatInputModule, button.MatButtonModule],
                        declarations: [TD_DIALOGS],
                        exports: [TD_DIALOGS],
                        entryComponents: [TD_DIALOGS_ENTRY_COMPONENTS],
                    },] }
        ];
        return CovalentDialogsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IDialogConfig() { }
    if (false) {
        /** @type {?|undefined} */
        IDialogConfig.prototype.title;
        /** @type {?} */
        IDialogConfig.prototype.message;
    }
    /**
     * @record
     */
    function IAlertConfig() { }
    if (false) {
        /** @type {?|undefined} */
        IAlertConfig.prototype.closeButton;
    }
    /**
     * @record
     */
    function IConfirmConfig() { }
    if (false) {
        /** @type {?|undefined} */
        IConfirmConfig.prototype.acceptButton;
        /** @type {?|undefined} */
        IConfirmConfig.prototype.cancelButton;
    }
    /**
     * @record
     */
    function IPromptConfig() { }
    if (false) {
        /** @type {?|undefined} */
        IPromptConfig.prototype.value;
    }
    /**
     * @record
     * @template T
     */
    function IDraggableConfig() { }
    if (false) {
        /** @type {?} */
        IDraggableConfig.prototype.component;
        /** @type {?|undefined} */
        IDraggableConfig.prototype.config;
        /** @type {?|undefined} */
        IDraggableConfig.prototype.dragHandleSelectors;
        /** @type {?|undefined} */
        IDraggableConfig.prototype.draggableClass;
    }
    var TdDialogService = /** @class */ (function () {
        function TdDialogService(_document, _dialogService, _dragDrop, rendererFactory) {
            this._document = _document;
            this._dialogService = _dialogService;
            this._dragDrop = _dragDrop;
            this.rendererFactory = rendererFactory;
            this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
        }
        /**
         * params:
         * - component: ComponentType<T>
         * - config: MatDialogConfig
         * Wrapper function over the open() method in MatDialog.
         * Opens a modal dialog containing the given component.
         */
        /**
         * params:
         * - component: ComponentType<T>
         * - config: MatDialogConfig
         * Wrapper function over the open() method in MatDialog.
         * Opens a modal dialog containing the given component.
         * @template T
         * @param {?} component
         * @param {?=} config
         * @return {?}
         */
        TdDialogService.prototype.open = /**
         * params:
         * - component: ComponentType<T>
         * - config: MatDialogConfig
         * Wrapper function over the open() method in MatDialog.
         * Opens a modal dialog containing the given component.
         * @template T
         * @param {?} component
         * @param {?=} config
         * @return {?}
         */
        function (component, config) {
            return this._dialogService.open(component, config);
        };
        /**
         * Wrapper function over the closeAll() method in MatDialog.
         * Closes all of the currently-open dialogs.
         */
        /**
         * Wrapper function over the closeAll() method in MatDialog.
         * Closes all of the currently-open dialogs.
         * @return {?}
         */
        TdDialogService.prototype.closeAll = /**
         * Wrapper function over the closeAll() method in MatDialog.
         * Closes all of the currently-open dialogs.
         * @return {?}
         */
        function () {
            this._dialogService.closeAll();
        };
        /**
         * params:
         * - config: IAlertConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     closeButton?: string;
         * }
         *
         * Opens an alert dialog with the provided config.
         * Returns an MatDialogRef<TdAlertDialogComponent> object.
         */
        /**
         * params:
         * - config: IAlertConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     closeButton?: string;
         * }
         *
         * Opens an alert dialog with the provided config.
         * Returns an MatDialogRef<TdAlertDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype.openAlert = /**
         * params:
         * - config: IAlertConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     closeButton?: string;
         * }
         *
         * Opens an alert dialog with the provided config.
         * Returns an MatDialogRef<TdAlertDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var dialogConfig = this._createConfig(config);
            /** @type {?} */
            var dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
            /** @type {?} */
            var alertDialogComponent = dialogRef.componentInstance;
            alertDialogComponent.title = config.title;
            alertDialogComponent.message = config.message;
            if (config.closeButton) {
                alertDialogComponent.closeButton = config.closeButton;
            }
            return dialogRef;
        };
        /**
         * params:
         * - config: IConfirmConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a confirm dialog with the provided config.
         * Returns an MatDialogRef<TdConfirmDialogComponent> object.
         */
        /**
         * params:
         * - config: IConfirmConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a confirm dialog with the provided config.
         * Returns an MatDialogRef<TdConfirmDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype.openConfirm = /**
         * params:
         * - config: IConfirmConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a confirm dialog with the provided config.
         * Returns an MatDialogRef<TdConfirmDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var dialogConfig = this._createConfig(config);
            /** @type {?} */
            var dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
            /** @type {?} */
            var confirmDialogComponent = dialogRef.componentInstance;
            confirmDialogComponent.title = config.title;
            confirmDialogComponent.message = config.message;
            if (config.acceptButton) {
                confirmDialogComponent.acceptButton = config.acceptButton;
            }
            if (config.cancelButton) {
                confirmDialogComponent.cancelButton = config.cancelButton;
            }
            return dialogRef;
        };
        /**
         * params:
         * - config: IPromptConfig {
         *     message: string;
         *     title?: string;
         *     value?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a prompt dialog with the provided config.
         * Returns an MatDialogRef<TdPromptDialogComponent> object.
         */
        /**
         * params:
         * - config: IPromptConfig {
         *     message: string;
         *     title?: string;
         *     value?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a prompt dialog with the provided config.
         * Returns an MatDialogRef<TdPromptDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype.openPrompt = /**
         * params:
         * - config: IPromptConfig {
         *     message: string;
         *     title?: string;
         *     value?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a prompt dialog with the provided config.
         * Returns an MatDialogRef<TdPromptDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var dialogConfig = this._createConfig(config);
            /** @type {?} */
            var dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
            /** @type {?} */
            var promptDialogComponent = dialogRef.componentInstance;
            promptDialogComponent.title = config.title;
            promptDialogComponent.message = config.message;
            promptDialogComponent.value = config.value;
            if (config.acceptButton) {
                promptDialogComponent.acceptButton = config.acceptButton;
            }
            if (config.cancelButton) {
                promptDialogComponent.cancelButton = config.cancelButton;
            }
            return dialogRef;
        };
        /**
         * Opens a draggable dialog containing the given component.
         */
        /**
         * Opens a draggable dialog containing the given component.
         * @template T
         * @param {?} __0
         * @return {?}
         */
        TdDialogService.prototype.openDraggable = /**
         * Opens a draggable dialog containing the given component.
         * @template T
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _this = this;
            var component = _a.component, config = _a.config, dragHandleSelectors = _a.dragHandleSelectors, draggableClass = _a.draggableClass;
            /** @type {?} */
            var dialogRef = this._dialogService.open(component, config);
            /** @type {?} */
            var CDK_OVERLAY_PANE_SELECTOR = '.cdk-overlay-pane';
            /** @type {?} */
            var CDK_OVERLAY_CONTAINER_SELECTOR = '.cdk-overlay-container';
            dialogRef.afterOpened().subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var dialogElement = (/** @type {?} */ (_this._document.getElementById(dialogRef.id)));
                /** @type {?} */
                var draggableElement = _this._dragDrop.createDrag(dialogElement);
                if (draggableClass) {
                    /** @type {?} */
                    var childComponent = dialogElement.firstElementChild;
                    _this._renderer2.addClass(childComponent, draggableClass);
                }
                if (dragHandleSelectors && dragHandleSelectors.length) {
                    /** @type {?} */
                    var dragHandles = dragHandleSelectors.reduce((/**
                     * @param {?} acc
                     * @param {?} curr
                     * @return {?}
                     */
                    function (acc, curr) { return __spread(acc, Array.from(dialogElement.querySelectorAll(curr))); }), []);
                    if (dragHandles.length > 0) {
                        draggableElement.withHandles((/** @type {?} */ (dragHandles)));
                    }
                }
                /** @type {?} */
                var rootElement = dialogElement.closest(CDK_OVERLAY_PANE_SELECTOR);
                if (rootElement) {
                    draggableElement.withRootElement((/** @type {?} */ (rootElement)));
                }
                /** @type {?} */
                var boundaryElement = dialogElement.closest(CDK_OVERLAY_CONTAINER_SELECTOR);
                if (boundaryElement) {
                    draggableElement.withBoundaryElement((/** @type {?} */ (boundaryElement)));
                }
            }));
            return dialogRef;
        };
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype._createConfig = /**
         * @private
         * @param {?} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var dialogConfig = new dialog.MatDialogConfig();
            dialogConfig.width = '400px';
            Object.assign(dialogConfig, config);
            return dialogConfig;
        };
        TdDialogService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: CovalentDialogsModule,
                    },] }
        ];
        /** @nocollapse */
        TdDialogService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: dialog.MatDialog },
            { type: dragDrop.DragDrop },
            { type: core.RendererFactory2 }
        ]; };
        /** @nocollapse */ TdDialogService.ɵprov = core.ɵɵdefineInjectable({ factory: function TdDialogService_Factory() { return new TdDialogService(core.ɵɵinject(common.DOCUMENT), core.ɵɵinject(dialog.MatDialog), core.ɵɵinject(dragDrop.DragDrop), core.ɵɵinject(core.RendererFactory2)); }, token: TdDialogService, providedIn: CovalentDialogsModule });
        return TdDialogService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdDialogService.prototype._renderer2;
        /**
         * @type {?}
         * @private
         */
        TdDialogService.prototype._document;
        /**
         * @type {?}
         * @private
         */
        TdDialogService.prototype._dialogService;
        /**
         * @type {?}
         * @private
         */
        TdDialogService.prototype._dragDrop;
        /**
         * @type {?}
         * @private
         */
        TdDialogService.prototype.rendererFactory;
    }

    exports.CovalentDialogsModule = CovalentDialogsModule;
    exports.TdAlertDialogComponent = TdAlertDialogComponent;
    exports.TdConfirmDialogComponent = TdConfirmDialogComponent;
    exports.TdDialogActionsDirective = TdDialogActionsDirective;
    exports.TdDialogComponent = TdDialogComponent;
    exports.TdDialogContentDirective = TdDialogContentDirective;
    exports.TdDialogService = TdDialogService;
    exports.TdDialogTitleDirective = TdDialogTitleDirective;
    exports.TdPromptDialogComponent = TdPromptDialogComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-dialogs.umd.js.map
