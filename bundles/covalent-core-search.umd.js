(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/input'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/animations'), require('@angular/cdk/bidi'), require('rxjs/operators'), require('@covalent/core/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/search', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/input', '@angular/material/icon', '@angular/material/button', '@angular/animations', '@angular/cdk/bidi', 'rxjs/operators', '@covalent/core/common'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.search = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.input, global.ng.material.icon, global.ng.material.button, global.ng.animations, global.ng.cdk.bidi, global.rxjs.operators, global.covalent.core.common));
}(this, (function (exports, core, common, forms, input, icon, button, animations, bidi, operators, common$1) { 'use strict';

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
    var TdSearchInputBase = /** @class */ (function () {
        function TdSearchInputBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdSearchInputBase;
    }());
    if (false) {
        /** @type {?} */
        TdSearchInputBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdSearchInputMixinBase = common$1.mixinControlValueAccessor(TdSearchInputBase);
    var TdSearchInputComponent = /** @class */ (function (_super) {
        __extends(TdSearchInputComponent, _super);
        function TdSearchInputComponent(_dir, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._dir = _dir;
            /**
             * showUnderline?: boolean
             * Sets if the input underline should be visible. Defaults to 'false'.
             */
            _this.showUnderline = false;
            /**
             * debounce?: number
             * Debounce timeout between keypresses. Defaults to 400.
             */
            _this.debounce = 400;
            /**
             * clearIcon?: string
             * The icon used to clear the search input.
             * Defaults to 'cancel' icon.
             */
            _this.clearIcon = 'cancel';
            /**
             * searchDebounce: function($event)
             * Event emitted after the [debounce] timeout.
             */
            _this.searchDebounce = new core.EventEmitter();
            /**
             * search: function($event)
             * Event emitted after the key enter has been pressed.
             */
            _this.search = new core.EventEmitter();
            /**
             * clear: function()
             * Event emitted after the clear icon has been clicked.
             */
            _this.clear = new core.EventEmitter();
            /**
             * blur: function()
             * Event emitted after the blur event has been called in underlying input.
             */
            _this.blur = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdSearchInputComponent.prototype, "isRTL", {
            get: /**
             * @return {?}
             */
            function () {
                if (this._dir) {
                    return this._dir.dir === 'rtl';
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdSearchInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._input.ngControl.valueChanges
                .pipe(operators.debounceTime(this.debounce), operators.skip(1))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this._searchTermChanged(value);
            }));
        };
        /**
         * Method to focus to underlying input.
         */
        /**
         * Method to focus to underlying input.
         * @return {?}
         */
        TdSearchInputComponent.prototype.focus = /**
         * Method to focus to underlying input.
         * @return {?}
         */
        function () {
            this._input.focus();
        };
        /**
         * @return {?}
         */
        TdSearchInputComponent.prototype.handleBlur = /**
         * @return {?}
         */
        function () {
            this.blur.emit();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        TdSearchInputComponent.prototype.stopPropagation = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.stopPropagation();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        TdSearchInputComponent.prototype.handleSearch = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.stopPropagation(event);
            this.search.emit(this.value);
        };
        /**
         * Method to clear the underlying input.
         */
        /**
         * Method to clear the underlying input.
         * @return {?}
         */
        TdSearchInputComponent.prototype.clearSearch = /**
         * Method to clear the underlying input.
         * @return {?}
         */
        function () {
            this.value = '';
            this._changeDetectorRef.markForCheck();
            this.clear.emit();
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        TdSearchInputComponent.prototype._searchTermChanged = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.searchDebounce.emit(value);
        };
        TdSearchInputComponent.decorators = [
            { type: core.Component, args: [{
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdSearchInputComponent; })),
                                multi: true,
                            },
                        ],
                        selector: 'td-search-input',
                        template: "<div class=\"td-search-input\">\n  <mat-form-field\n    class=\"td-search-input-field\"\n    [class.mat-hide-underline]=\"!showUnderline\"\n    [appearance]=\"appearance\"\n    floatLabel=\"never\"\n  >\n    <input\n      matInput\n      #searchElement\n      type=\"search\"\n      [(ngModel)]=\"value\"\n      [placeholder]=\"placeholder\"\n      (blur)=\"handleBlur()\"\n      (search)=\"stopPropagation($event)\"\n      (keyup.enter)=\"handleSearch($event)\"\n    />\n    <span matSuffix *ngIf=\"appearance === 'fill' || appearance === 'outline' || appearance === 'standard'\">\n      <ng-template [ngTemplateOutlet]=\"clearButton\"></ng-template>\n    </span>\n  </mat-form-field>\n  <ng-template *ngIf=\"!appearance || appearance === 'legacy'\" [ngTemplateOutlet]=\"clearButton\"></ng-template>\n</div>\n<ng-template #clearButton>\n  <button\n    mat-icon-button\n    class=\"td-search-input-clear\"\n    type=\"button\"\n    [@searchState]=\"searchElement.value ? 'show' : isRTL ? 'hide-left' : 'hide-right'\"\n    (click)=\"clearSearch()\"\n  >\n    <mat-icon>{{ clearIcon }}</mat-icon>\n  </button>\n</ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        inputs: ['value'],
                        animations: [
                            animations.trigger('searchState', [
                                animations.state('hide-left', animations.style({
                                    transform: 'translateX(-150%)',
                                    display: 'none',
                                })),
                                animations.state('hide-right', animations.style({
                                    transform: 'translateX(150%)',
                                    display: 'none',
                                })),
                                animations.state('show', animations.style({
                                    transform: 'translateX(0%)',
                                    display: 'block',
                                })),
                                animations.transition('* => show', animations.animate('200ms ease-in')),
                                animations.transition('show => *', animations.animate('200ms ease-out')),
                            ]),
                        ],
                        styles: [":host .td-search-input{overflow-x:hidden;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-search-input .td-search-input-field{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-outline .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-flex{height:52px}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-underline{bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-infix{bottom:.4em}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-underline{bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-legacy .mat-form-field-infix{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}:host .td-search-input ::ng-deep mat-form-field .mat-input-element{caret-color:currentColor}:host .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline{display:none}:host .td-search-input .td-search-input-clear{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}"]
                    }] }
        ];
        /** @nocollapse */
        TdSearchInputComponent.ctorParameters = function () { return [
            { type: bidi.Dir, decorators: [{ type: core.Optional }] },
            { type: core.ChangeDetectorRef }
        ]; };
        TdSearchInputComponent.propDecorators = {
            _input: [{ type: core.ViewChild, args: [input.MatInput, { static: true },] }],
            appearance: [{ type: core.Input }],
            showUnderline: [{ type: core.Input }],
            debounce: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            clearIcon: [{ type: core.Input }],
            searchDebounce: [{ type: core.Output }],
            search: [{ type: core.Output }],
            clear: [{ type: core.Output }],
            blur: [{ type: core.Output }]
        };
        return TdSearchInputComponent;
    }(_TdSearchInputMixinBase));
    if (false) {
        /** @type {?} */
        TdSearchInputComponent.prototype._input;
        /**
         * appearance?: MatFormFieldAppearance
         * Appearance style for the underlying input component.
         * @type {?}
         */
        TdSearchInputComponent.prototype.appearance;
        /**
         * showUnderline?: boolean
         * Sets if the input underline should be visible. Defaults to 'false'.
         * @type {?}
         */
        TdSearchInputComponent.prototype.showUnderline;
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 400.
         * @type {?}
         */
        TdSearchInputComponent.prototype.debounce;
        /**
         * placeholder?: string
         * Placeholder for the underlying input component.
         * @type {?}
         */
        TdSearchInputComponent.prototype.placeholder;
        /**
         * clearIcon?: string
         * The icon used to clear the search input.
         * Defaults to 'cancel' icon.
         * @type {?}
         */
        TdSearchInputComponent.prototype.clearIcon;
        /**
         * searchDebounce: function($event)
         * Event emitted after the [debounce] timeout.
         * @type {?}
         */
        TdSearchInputComponent.prototype.searchDebounce;
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         * @type {?}
         */
        TdSearchInputComponent.prototype.search;
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         * @type {?}
         */
        TdSearchInputComponent.prototype.clear;
        /**
         * blur: function()
         * Event emitted after the blur event has been called in underlying input.
         * @type {?}
         */
        TdSearchInputComponent.prototype.blur;
        /**
         * @type {?}
         * @private
         */
        TdSearchInputComponent.prototype._dir;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdSearchBoxBase = /** @class */ (function () {
        function TdSearchBoxBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdSearchBoxBase;
    }());
    if (false) {
        /** @type {?} */
        TdSearchBoxBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdSearchBoxMixinBase = common$1.mixinControlValueAccessor(TdSearchBoxBase);
    var TdSearchBoxComponent = /** @class */ (function (_super) {
        __extends(TdSearchBoxComponent, _super);
        function TdSearchBoxComponent(_changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._searchVisible = false;
            /**
             * backIcon?: string
             * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
             * Defaults to 'search' icon.
             */
            _this.backIcon = 'search';
            /**
             * searchIcon?: string
             * The icon used to open/focus the search toggle.
             * Defaults to 'search' icon.
             */
            _this.searchIcon = 'search';
            /**
             * clearIcon?: string
             * The icon used to clear the search input.
             * Defaults to 'cancel' icon.
             */
            _this.clearIcon = 'cancel';
            /**
             * showUnderline?: boolean
             * Sets if the input underline should be visible. Defaults to 'false'.
             */
            _this.showUnderline = false;
            /**
             * debounce?: number
             * Debounce timeout between keypresses. Defaults to 400.
             */
            _this.debounce = 400;
            /**
             * alwaysVisible?: boolean
             * Sets if the input should always be visible. Defaults to 'false'.
             */
            _this.alwaysVisible = false;
            /**
             * searchDebounce: function($event)
             * Event emitted after the [debounce] timeout.
             */
            _this.searchDebounce = new core.EventEmitter();
            /**
             * search: function($event)
             * Event emitted after the key enter has been pressed.
             */
            _this.search = new core.EventEmitter();
            /**
             * clear: function()
             * Event emitted after the clear icon has been clicked.
             */
            _this.clear = new core.EventEmitter();
            /**
             * blur: function()
             * Event emitted after the blur event has been called in underlying input.
             */
            _this.blur = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdSearchBoxComponent.prototype, "searchVisible", {
            get: /**
             * @return {?}
             */
            function () {
                return this._searchVisible;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method executed when the search icon is clicked.
         */
        /**
         * Method executed when the search icon is clicked.
         * @return {?}
         */
        TdSearchBoxComponent.prototype.searchClicked = /**
         * Method executed when the search icon is clicked.
         * @return {?}
         */
        function () {
            if (!this.alwaysVisible && this._searchVisible) {
                this.value = '';
                this.handleClear();
            }
            else if (this.alwaysVisible || !this._searchVisible) {
                this._searchInput.focus();
            }
            this.toggleVisibility();
        };
        /**
         * @return {?}
         */
        TdSearchBoxComponent.prototype.toggleVisibility = /**
         * @return {?}
         */
        function () {
            this._searchVisible = !this._searchVisible;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TdSearchBoxComponent.prototype.handleSearchDebounce = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.searchDebounce.emit(value);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        TdSearchBoxComponent.prototype.handleSearch = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.search.emit(value);
        };
        /**
         * @return {?}
         */
        TdSearchBoxComponent.prototype.handleClear = /**
         * @return {?}
         */
        function () {
            this.clear.emit();
        };
        /**
         * @return {?}
         */
        TdSearchBoxComponent.prototype.handleBlur = /**
         * @return {?}
         */
        function () {
            this.blur.emit();
        };
        TdSearchBoxComponent.decorators = [
            { type: core.Component, args: [{
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdSearchBoxComponent; })),
                                multi: true,
                            },
                        ],
                        selector: 'td-search-box',
                        template: "<div class=\"td-search-box\">\n  <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\">\n    <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{ backIcon }}</mat-icon>\n    <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{ searchIcon }}</mat-icon>\n  </button>\n  <td-search-input\n    #searchInput\n    [@inputState]=\"alwaysVisible || searchVisible\"\n    [debounce]=\"debounce\"\n    [(ngModel)]=\"value\"\n    [showUnderline]=\"showUnderline\"\n    [placeholder]=\"placeholder\"\n    [clearIcon]=\"clearIcon\"\n    (searchDebounce)=\"handleSearchDebounce($event)\"\n    (search)=\"handleSearch($event)\"\n    (clear)=\"handleClear(); toggleVisibility()\"\n    (blur)=\"handleBlur()\"\n  ></td-search-input>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        inputs: ['value'],
                        animations: [
                            animations.trigger('inputState', [
                                animations.state('0', animations.style({
                                    width: '0%',
                                    margin: '0px',
                                })),
                                animations.state('1', animations.style({
                                    width: '100%',
                                    margin: animations.AUTO_STYLE,
                                })),
                                animations.transition('0 => 1', animations.animate('200ms ease-in')),
                                animations.transition('1 => 0', animations.animate('200ms ease-out')),
                            ]),
                        ],
                        styles: [":host{display:block}.td-search-box{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.td-search-box .td-search-icon{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.td-search-box td-search-input{margin-left:12px}::ng-deep [dir=rtl] .td-search-box td-search-input{margin-right:12px;margin-left:0!important}.td-search-box td-search-input ::ng-deep .mat-form.field.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1em}"]
                    }] }
        ];
        /** @nocollapse */
        TdSearchBoxComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        TdSearchBoxComponent.propDecorators = {
            _searchInput: [{ type: core.ViewChild, args: [TdSearchInputComponent, { static: true },] }],
            backIcon: [{ type: core.Input }],
            searchIcon: [{ type: core.Input }],
            clearIcon: [{ type: core.Input }],
            showUnderline: [{ type: core.Input }],
            debounce: [{ type: core.Input }],
            alwaysVisible: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            searchDebounce: [{ type: core.Output }],
            search: [{ type: core.Output }],
            clear: [{ type: core.Output }],
            blur: [{ type: core.Output }]
        };
        return TdSearchBoxComponent;
    }(_TdSearchBoxMixinBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdSearchBoxComponent.prototype._searchVisible;
        /** @type {?} */
        TdSearchBoxComponent.prototype._searchInput;
        /**
         * backIcon?: string
         * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
         * Defaults to 'search' icon.
         * @type {?}
         */
        TdSearchBoxComponent.prototype.backIcon;
        /**
         * searchIcon?: string
         * The icon used to open/focus the search toggle.
         * Defaults to 'search' icon.
         * @type {?}
         */
        TdSearchBoxComponent.prototype.searchIcon;
        /**
         * clearIcon?: string
         * The icon used to clear the search input.
         * Defaults to 'cancel' icon.
         * @type {?}
         */
        TdSearchBoxComponent.prototype.clearIcon;
        /**
         * showUnderline?: boolean
         * Sets if the input underline should be visible. Defaults to 'false'.
         * @type {?}
         */
        TdSearchBoxComponent.prototype.showUnderline;
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 400.
         * @type {?}
         */
        TdSearchBoxComponent.prototype.debounce;
        /**
         * alwaysVisible?: boolean
         * Sets if the input should always be visible. Defaults to 'false'.
         * @type {?}
         */
        TdSearchBoxComponent.prototype.alwaysVisible;
        /**
         * placeholder?: string
         * Placeholder for the underlying input component.
         * @type {?}
         */
        TdSearchBoxComponent.prototype.placeholder;
        /**
         * searchDebounce: function($event)
         * Event emitted after the [debounce] timeout.
         * @type {?}
         */
        TdSearchBoxComponent.prototype.searchDebounce;
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         * @type {?}
         */
        TdSearchBoxComponent.prototype.search;
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         * @type {?}
         */
        TdSearchBoxComponent.prototype.clear;
        /**
         * blur: function()
         * Event emitted after the blur event has been called in underlying input.
         * @type {?}
         */
        TdSearchBoxComponent.prototype.blur;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentSearchModule = /** @class */ (function () {
        function CovalentSearchModule() {
        }
        CovalentSearchModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [forms.FormsModule, common.CommonModule, input.MatInputModule, icon.MatIconModule, button.MatButtonModule],
                        declarations: [TdSearchInputComponent, TdSearchBoxComponent],
                        exports: [TdSearchInputComponent, TdSearchBoxComponent],
                    },] }
        ];
        return CovalentSearchModule;
    }());

    exports.CovalentSearchModule = CovalentSearchModule;
    exports.TdSearchBoxBase = TdSearchBoxBase;
    exports.TdSearchBoxComponent = TdSearchBoxComponent;
    exports.TdSearchInputBase = TdSearchInputBase;
    exports.TdSearchInputComponent = TdSearchInputComponent;
    exports._TdSearchBoxMixinBase = _TdSearchBoxMixinBase;
    exports._TdSearchInputMixinBase = _TdSearchInputMixinBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-search.umd.js.map
