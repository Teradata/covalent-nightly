(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/scrolling'), require('@angular/material/sidenav'), require('@angular/material/toolbar'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/card'), require('@angular/material/divider'), require('@covalent/core/common'), require('@angular/router'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/layout', ['exports', '@angular/core', '@angular/common', '@angular/cdk/scrolling', '@angular/material/sidenav', '@angular/material/toolbar', '@angular/material/button', '@angular/material/icon', '@angular/material/card', '@angular/material/divider', '@covalent/core/common', '@angular/router', '@angular/platform-browser'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.layout = {}), global.ng.core, global.ng.common, global.ng.cdk.scrolling, global.ng.material.sidenav, global.ng.material.toolbar, global.ng.material.button, global.ng.material.icon, global.ng.material.card, global.ng.material.divider, global.covalent.core.common, global.ng.router, global.ng.platformBrowser));
}(this, (function (exports, core, common, scrolling, sidenav, toolbar, button, icon, card, divider, common$1, router, platformBrowser) { 'use strict';

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
    var TdLayoutComponent = /** @class */ (function () {
        function TdLayoutComponent() {
            /**
             * mode?: 'side', 'push' or 'over'
             *
             * The mode or styling of the sidenav.
             * Defaults to "over".
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.mode = 'over';
            /**
             * opened?: boolean
             *
             * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
             * Defaults to "false".
             *
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.opened = false;
            /**
             * sidenavWidth?: string
             *
             * Sets the "width" of the sidenav in either "px" or "%"
             * Defaults to "320px".
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.sidenavWidth = '320px';
            /**
             * containerAutosize?: boolean
             *
             * Sets "autosize" of the sidenav-container.
             * Defaults to "false".
             *
             * See documentation for more info and potential performance risks.
             *
             * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
             */
            this.containerAutosize = false;
        }
        Object.defineProperty(TdLayoutComponent.prototype, "disableClose", {
            /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             */
            get: /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             * @return {?}
             */
            function () {
                return this.mode === 'side';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutComponent.prototype.toggle = /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        function () {
            return this.sidenav.toggle(!this.sidenav.opened);
        };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutComponent.prototype.open = /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        function () {
            return this.sidenav.open();
        };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutComponent.prototype.close = /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        function () {
            return this.sidenav.close();
        };
        TdLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-layout',
                        template: "<mat-sidenav-container fullscreen [autosize]=\"containerAutosize\">\n  <mat-sidenav\n    #sidenav\n    class=\"td-layout-sidenav\"\n    [mode]=\"mode\"\n    [opened]=\"opened\"\n    [style.max-width]=\"sidenavWidth\"\n    [style.min-width]=\"sidenavWidth\"\n    [disableClose]=\"disableClose\"\n  >\n    <ng-content select=\"td-navigation-drawer\"></ng-content>\n    <ng-content select=\"[td-sidenav-content]\"></ng-content>\n  </mat-sidenav>\n  <ng-content></ng-content>\n</mat-sidenav-container>\n",
                        styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host ::ng-deep>mat-sidenav-container .mat-drawer>.mat-drawer-inner-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]
                    }] }
        ];
        TdLayoutComponent.propDecorators = {
            sidenav: [{ type: core.ViewChild, args: [sidenav.MatSidenav, { static: true },] }],
            mode: [{ type: core.Input }],
            opened: [{ type: core.Input }],
            sidenavWidth: [{ type: core.Input }],
            containerAutosize: [{ type: core.Input }]
        };
        return TdLayoutComponent;
    }());
    if (false) {
        /** @type {?} */
        TdLayoutComponent.prototype.sidenav;
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "over".
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         * @type {?}
         */
        TdLayoutComponent.prototype.mode;
        /**
         * opened?: boolean
         *
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "false".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         * @type {?}
         */
        TdLayoutComponent.prototype.opened;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "320px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         * @type {?}
         */
        TdLayoutComponent.prototype.sidenavWidth;
        /**
         * containerAutosize?: boolean
         *
         * Sets "autosize" of the sidenav-container.
         * Defaults to "false".
         *
         * See documentation for more info and potential performance risks.
         *
         * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
         * @type {?}
         */
        TdLayoutComponent.prototype.containerAutosize;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ILayoutTogglable() { }
    if (false) {
        /** @type {?} */
        ILayoutTogglable.prototype.opened;
        /** @type {?} */
        ILayoutTogglable.prototype.sidenav;
        /**
         * @return {?}
         */
        ILayoutTogglable.prototype.toggle = function () { };
        /**
         * @return {?}
         */
        ILayoutTogglable.prototype.open = function () { };
        /**
         * @return {?}
         */
        ILayoutTogglable.prototype.close = function () { };
    }
    var LayoutToggleBase = /** @class */ (function () {
        function LayoutToggleBase() {
        }
        return LayoutToggleBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdLayoutToggleMixinBase = common$1.mixinDisabled(LayoutToggleBase);
    /**
     * @abstract
     */
    var LayoutToggle = /** @class */ (function (_super) {
        __extends(LayoutToggle, _super);
        function LayoutToggle(_layout, _renderer, _elementRef) {
            var _this = _super.call(this) || this;
            _this._layout = _layout;
            _this._renderer = _renderer;
            _this._elementRef = _elementRef;
            _this._initialized = false;
            _this._hideWhenOpened = false;
            // if layout has not been provided
            // show warn message
            if (!_this._layout) {
                _this._noLayoutMessage();
            }
            _this._renderer.addClass(_this._elementRef.nativeElement, 'td-layout-menu-button');
            return _this;
        }
        Object.defineProperty(LayoutToggle.prototype, "hideWhenOpened", {
            /**
             * hideWhenOpened?: boolean
             * When this is set to true, the host will be hidden when
             * the sidenav is opened.
             */
            set: /**
             * hideWhenOpened?: boolean
             * When this is set to true, the host will be hidden when
             * the sidenav is opened.
             * @param {?} hideWhenOpened
             * @return {?}
             */
            function (hideWhenOpened) {
                this._hideWhenOpened = hideWhenOpened;
                if (this._initialized) {
                    this._toggleVisibility();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LayoutToggle.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._initialized = true;
            if (this._layout && this._layout.sidenav) {
                this._toggleSubs = this._layout.sidenav._animationStarted.subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this._toggleVisibility();
                }));
            }
            // execute toggleVisibility since the onOpenStart and onCloseStart
            // methods might not be executed always when the element is rendered
            this._toggleVisibility();
        };
        /**
         * @return {?}
         */
        LayoutToggle.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this._toggleSubs) {
                this._toggleSubs.unsubscribe();
                this._toggleSubs = undefined;
            }
        };
        /**
         * Listens to host click event to trigger the layout toggle
         */
        /**
         * Listens to host click event to trigger the layout toggle
         * @param {?} event
         * @return {?}
         */
        LayoutToggle.prototype.clickListener = /**
         * Listens to host click event to trigger the layout toggle
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            if (!this.disabled) {
                // if layout has been provided, try triggering the click on it
                // else show warn message
                if (this._layout && this._layout.open) {
                    this.onClick();
                }
                else {
                    this._noLayoutMessage();
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        LayoutToggle.prototype._toggleVisibility = /**
         * @private
         * @return {?}
         */
        function () {
            if (this._layout) {
                if (this._layout.sidenav.opened && this._hideWhenOpened) {
                    this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
                }
                else {
                    this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        LayoutToggle.prototype._noLayoutMessage = /**
         * @private
         * @return {?}
         */
        function () {
            /* tslint:disable-next-line */
            console.warn('Covalent: Parent layout not found for layout toggle directive');
        };
        LayoutToggle.propDecorators = {
            hideWhenOpened: [{ type: core.Input, args: ['hideWhenOpened',] }],
            clickListener: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return LayoutToggle;
    }(_TdLayoutToggleMixinBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        LayoutToggle.prototype._toggleSubs;
        /**
         * @type {?}
         * @private
         */
        LayoutToggle.prototype._initialized;
        /**
         * @type {?}
         * @private
         */
        LayoutToggle.prototype._hideWhenOpened;
        /**
         * @type {?}
         * @protected
         */
        LayoutToggle.prototype._layout;
        /**
         * @type {?}
         * @private
         */
        LayoutToggle.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        LayoutToggle.prototype._elementRef;
        /**
         * @abstract
         * @return {?}
         */
        LayoutToggle.prototype.onClick = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdLayoutToggleDirective = /** @class */ (function (_super) {
        __extends(TdLayoutToggleDirective, _super);
        function TdLayoutToggleDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutToggleDirective.prototype, "tdLayoutToggle", {
            set: /**
             * @param {?} tdLayoutToggle
             * @return {?}
             */
            function (tdLayoutToggle) {
                this.disabled = !((/** @type {?} */ (tdLayoutToggle)) === '' || tdLayoutToggle);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutToggleDirective.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this._layout.toggle();
        };
        TdLayoutToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutToggle]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutToggleDirective.ctorParameters = function () { return [
            { type: TdLayoutComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdLayoutComponent; })),] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdLayoutToggleDirective.propDecorators = {
            tdLayoutToggle: [{ type: core.Input, args: ['tdLayoutToggle',] }]
        };
        return TdLayoutToggleDirective;
    }(LayoutToggle));
    var TdLayoutCloseDirective = /** @class */ (function (_super) {
        __extends(TdLayoutCloseDirective, _super);
        function TdLayoutCloseDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutCloseDirective.prototype, "tdLayoutClose", {
            set: /**
             * @param {?} tdLayoutClose
             * @return {?}
             */
            function (tdLayoutClose) {
                this.disabled = !((/** @type {?} */ (tdLayoutClose)) === '' || tdLayoutClose);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutCloseDirective.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this._layout.close();
        };
        TdLayoutCloseDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutClose]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutCloseDirective.ctorParameters = function () { return [
            { type: TdLayoutComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdLayoutComponent; })),] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdLayoutCloseDirective.propDecorators = {
            tdLayoutClose: [{ type: core.Input, args: ['tdLayoutClose',] }]
        };
        return TdLayoutCloseDirective;
    }(LayoutToggle));
    var TdLayoutOpenDirective = /** @class */ (function (_super) {
        __extends(TdLayoutOpenDirective, _super);
        function TdLayoutOpenDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutOpenDirective.prototype, "tdLayoutClose", {
            set: /**
             * @param {?} tdLayoutOpen
             * @return {?}
             */
            function (tdLayoutOpen) {
                this.disabled = !((/** @type {?} */ (tdLayoutOpen)) === '' || tdLayoutOpen);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutOpenDirective.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this._layout.open();
        };
        TdLayoutOpenDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutOpen]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutOpenDirective.ctorParameters = function () { return [
            { type: TdLayoutComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdLayoutComponent; })),] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdLayoutOpenDirective.propDecorators = {
            tdLayoutClose: [{ type: core.Input, args: ['tdLayoutOpen',] }]
        };
        return TdLayoutOpenDirective;
    }(LayoutToggle));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdLayoutNavComponent = /** @class */ (function () {
        function TdLayoutNavComponent(_router) {
            this._router = _router;
            /**
             * color?: 'accent' | 'primary' | 'warn'
             *
             * toolbar color option: primary | accent | warn.
             * If [color] is not set, primary is used.
             */
            this.color = 'primary';
        }
        Object.defineProperty(TdLayoutNavComponent.prototype, "routerEnabled", {
            /**
             * Checks if router was injected.
             */
            get: /**
             * Checks if router was injected.
             * @return {?}
             */
            function () {
                return !!this._router && !!this.navigationRoute;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavComponent.prototype.handleNavigationClick = /**
         * @return {?}
         */
        function () {
            if (this.routerEnabled) {
                this._router.navigateByUrl(this.navigationRoute);
            }
        };
        TdLayoutNavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-layout-nav',
                        template: "<div class=\"td-layout-nav-wrapper\">\n  <mat-toolbar class=\"td-layout-toolbar\" [color]=\"color\">\n    <ng-content select=\"[td-menu-button]\"></ng-content>\n    <span\n      *ngIf=\"icon || logo || toolbarTitle\"\n      [class.cursor-pointer]=\"routerEnabled\"\n      (click)=\"handleNavigationClick()\"\n      class=\"td-layout-nav-toolbar-content\"\n    >\n      <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"toolbarTitle\">{{ toolbarTitle }}</span>\n    </span>\n    <ng-content select=\"[td-toolbar-content]\"></ng-content>\n  </mat-toolbar>\n  <div class=\"td-layout-nav-content\" cdkScrollable>\n    <ng-content></ng-content>\n  </div>\n  <ng-content select=\"td-layout-footer\"></ng-content>\n</div>\n",
                        styles: [".td-menu-button{margin-left:0}::ng-deep [dir=rtl] .td-menu-button{margin-right:0;margin-left:6px}:host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host .td-layout-nav-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%}:host .td-layout-nav-wrapper .td-layout-nav-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-layout-nav-wrapper .td-layout-nav-content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}"]
                    }] }
        ];
        /** @nocollapse */
        TdLayoutNavComponent.ctorParameters = function () { return [
            { type: router.Router, decorators: [{ type: core.Optional }] }
        ]; };
        TdLayoutNavComponent.propDecorators = {
            toolbarTitle: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            logo: [{ type: core.Input }],
            color: [{ type: core.Input }],
            navigationRoute: [{ type: core.Input }]
        };
        return TdLayoutNavComponent;
    }());
    if (false) {
        /**
         * toolbarTitle?: string
         *
         * Title set in toolbar.
         * @type {?}
         */
        TdLayoutNavComponent.prototype.toolbarTitle;
        /**
         * icon?: string
         *
         * icon name to be displayed before the title
         * @type {?}
         */
        TdLayoutNavComponent.prototype.icon;
        /**
         * logo?: string
         *
         * logo icon name to be displayed before the title.
         * If [icon] is set, then this will not be shown.
         * @type {?}
         */
        TdLayoutNavComponent.prototype.logo;
        /**
         * color?: 'accent' | 'primary' | 'warn'
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         * @type {?}
         */
        TdLayoutNavComponent.prototype.color;
        /**
         * navigationRoute?: string
         *
         * option to set the combined route for the icon, logo, and toolbarTitle.
         * @type {?}
         */
        TdLayoutNavComponent.prototype.navigationRoute;
        /**
         * @type {?}
         * @private
         */
        TdLayoutNavComponent.prototype._router;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdLayoutNavListComponent = /** @class */ (function () {
        function TdLayoutNavListComponent(_router) {
            this._router = _router;
            /**
             * color?: 'accent' | 'primary' | 'warn'
             *
             * toolbar color option: primary | accent | warn.
             * If [color] is not set, primary is used.
             */
            this.color = 'primary';
            /**
             * mode?: 'side', 'push' or 'over'
             *
             * The mode or styling of the sidenav.
             * Defaults to "side".
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.mode = 'side';
            /**
             * opened?: boolean
             * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
             * Defaults to "true".
             *
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.opened = true;
            /**
             * sidenavWidth?: string
             *
             * Sets the "width" of the sidenav in either "px" or "%"
             * Defaults to "350px".
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.sidenavWidth = '350px';
            /**
             * containerAutosize?: boolean
             *
             * Sets "autosize" of the sidenav-container.
             * Defaults to "false".
             *
             * See documentation for more info and potential performance risks.
             *
             * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
             */
            this.containerAutosize = false;
        }
        Object.defineProperty(TdLayoutNavListComponent.prototype, "disableClose", {
            /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             */
            get: /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             * @return {?}
             */
            function () {
                return this.mode === 'side';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLayoutNavListComponent.prototype, "routerEnabled", {
            /**
             * Checks if router was injected.
             */
            get: /**
             * Checks if router was injected.
             * @return {?}
             */
            function () {
                return !!this._router && !!this.navigationRoute;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.handleNavigationClick = /**
         * @return {?}
         */
        function () {
            if (this.routerEnabled) {
                this._router.navigateByUrl(this.navigationRoute);
            }
        };
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.toggle = /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        function () {
            return this.sidenav.toggle(!this.sidenav.opened);
        };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.open = /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        function () {
            return this.sidenav.open();
        };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.close = /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        function () {
            return this.sidenav.close();
        };
        TdLayoutNavListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-layout-nav-list',
                        template: "<div class=\"td-layout-nav-list-wrapper\">\n  <mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-nav-list\">\n    <mat-sidenav\n      #sidenav\n      position=\"start\"\n      [mode]=\"mode\"\n      [opened]=\"opened\"\n      [disableClose]=\"disableClose\"\n      [style.max-width]=\"sidenavWidth\"\n      [style.min-width]=\"sidenavWidth\"\n    >\n      <mat-toolbar class=\"td-layout-toolbar\" [color]=\"color\">\n        <ng-content select=\"[td-menu-button]\"></ng-content>\n        <span\n          *ngIf=\"icon || logo || toolbarTitle\"\n          class=\"td-layout-nav-list-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\"\n        >\n          <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n          <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n          <span *ngIf=\"toolbarTitle\">{{ toolbarTitle }}</span>\n        </span>\n        <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content select=\"[td-sidenav-content]\"></ng-content>\n      </div>\n    </mat-sidenav>\n    <div class=\"td-layout-nav-list-main\">\n      <mat-toolbar class=\"td-layout-toolbar\" [color]=\"color\">\n        <ng-content select=\"[td-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"td-layout-footer-inner\"></ng-content>\n    </div>\n  </mat-sidenav-container>\n</div>\n<ng-content select=\"td-layout-footer\"></ng-content>\n",
                        styles: [":host{margin:0;width:100%;min-height:100%;height:100%;overflow:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-right:0}[dir=rtl] :host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-left:0}:host .td-layout-nav-list-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-layout-nav-list-wrapper .td-layout-nav-list-content{text-align:start;-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closed,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closing,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opened,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opening{box-shadow:none}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer>.mat-drawer-inner-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]
                    }] }
        ];
        /** @nocollapse */
        TdLayoutNavListComponent.ctorParameters = function () { return [
            { type: router.Router, decorators: [{ type: core.Optional }] }
        ]; };
        TdLayoutNavListComponent.propDecorators = {
            sidenav: [{ type: core.ViewChild, args: [sidenav.MatSidenav, { static: true },] }],
            toolbarTitle: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            logo: [{ type: core.Input }],
            color: [{ type: core.Input }],
            mode: [{ type: core.Input }],
            opened: [{ type: core.Input }],
            sidenavWidth: [{ type: core.Input }],
            containerAutosize: [{ type: core.Input }],
            navigationRoute: [{ type: core.Input }]
        };
        return TdLayoutNavListComponent;
    }());
    if (false) {
        /** @type {?} */
        TdLayoutNavListComponent.prototype.sidenav;
        /**
         * toolbarTitle?: string
         *
         * Title set in toolbar.
         * @type {?}
         */
        TdLayoutNavListComponent.prototype.toolbarTitle;
        /**
         * icon?: string
         * icon name to be displayed before the title
         * @type {?}
         */
        TdLayoutNavListComponent.prototype.icon;
        /**
         * logo?: string
         *
         * logo icon name to be displayed before the title.
         * If [icon] is set, then this will not be shown.
         * @type {?}
         */
        TdLayoutNavListComponent.prototype.logo;
        /**
         * color?: 'accent' | 'primary' | 'warn'
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         * @type {?}
         */
        TdLayoutNavListComponent.prototype.color;
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "side".
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         * @type {?}
         */
        TdLayoutNavListComponent.prototype.mode;
        /**
         * opened?: boolean
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         * @type {?}
         */
        TdLayoutNavListComponent.prototype.opened;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "350px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         * @type {?}
         */
        TdLayoutNavListComponent.prototype.sidenavWidth;
        /**
         * containerAutosize?: boolean
         *
         * Sets "autosize" of the sidenav-container.
         * Defaults to "false".
         *
         * See documentation for more info and potential performance risks.
         *
         * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
         * @type {?}
         */
        TdLayoutNavListComponent.prototype.containerAutosize;
        /**
         * navigationRoute?: string
         *
         * option to set the combined route for the icon, logo, and toolbarTitle.
         * @type {?}
         */
        TdLayoutNavListComponent.prototype.navigationRoute;
        /**
         * @type {?}
         * @private
         */
        TdLayoutNavListComponent.prototype._router;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdLayoutNavListToggleDirective = /** @class */ (function (_super) {
        __extends(TdLayoutNavListToggleDirective, _super);
        function TdLayoutNavListToggleDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", {
            set: /**
             * @param {?} tdLayoutNavListToggle
             * @return {?}
             */
            function (tdLayoutNavListToggle) {
                this.disabled = !((/** @type {?} */ (tdLayoutNavListToggle)) === '' || tdLayoutNavListToggle);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListToggleDirective.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this._layout.toggle();
        };
        TdLayoutNavListToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutNavListToggle]',
                        inputs: ['hideWhenOpened'],
                    },] }
        ];
        /** @nocollapse */
        TdLayoutNavListToggleDirective.ctorParameters = function () { return [
            { type: TdLayoutNavListComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdLayoutNavListComponent; })),] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdLayoutNavListToggleDirective.propDecorators = {
            tdLayoutNavListToggle: [{ type: core.Input, args: ['tdLayoutNavListToggle',] }]
        };
        return TdLayoutNavListToggleDirective;
    }(LayoutToggle));
    var TdLayoutNavListCloseDirective = /** @class */ (function (_super) {
        __extends(TdLayoutNavListCloseDirective, _super);
        function TdLayoutNavListCloseDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", {
            set: /**
             * @param {?} tdLayoutNavListClose
             * @return {?}
             */
            function (tdLayoutNavListClose) {
                this.disabled = !((/** @type {?} */ (tdLayoutNavListClose)) === '' || tdLayoutNavListClose);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListCloseDirective.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this._layout.close();
        };
        TdLayoutNavListCloseDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutNavListClose]',
                        inputs: ['hideWhenOpened'],
                    },] }
        ];
        /** @nocollapse */
        TdLayoutNavListCloseDirective.ctorParameters = function () { return [
            { type: TdLayoutNavListComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdLayoutNavListComponent; })),] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdLayoutNavListCloseDirective.propDecorators = {
            tdLayoutNavListClose: [{ type: core.Input, args: ['tdLayoutNavListClose',] }]
        };
        return TdLayoutNavListCloseDirective;
    }(LayoutToggle));
    var TdLayoutNavListOpenDirective = /** @class */ (function (_super) {
        __extends(TdLayoutNavListOpenDirective, _super);
        function TdLayoutNavListOpenDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", {
            set: /**
             * @param {?} tdLayoutNavListOpen
             * @return {?}
             */
            function (tdLayoutNavListOpen) {
                this.disabled = !((/** @type {?} */ (tdLayoutNavListOpen)) === '' || tdLayoutNavListOpen);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListOpenDirective.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this._layout.open();
        };
        TdLayoutNavListOpenDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutNavListOpen]',
                        inputs: ['hideWhenOpened'],
                    },] }
        ];
        /** @nocollapse */
        TdLayoutNavListOpenDirective.ctorParameters = function () { return [
            { type: TdLayoutNavListComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdLayoutNavListComponent; })),] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdLayoutNavListOpenDirective.propDecorators = {
            tdLayoutNavListOpen: [{ type: core.Input, args: ['tdLayoutNavListOpen',] }]
        };
        return TdLayoutNavListOpenDirective;
    }(LayoutToggle));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdLayoutCardOverComponent = /** @class */ (function () {
        function TdLayoutCardOverComponent() {
            /**
             * cardWidth?: string
             *
             * Card flex width in %.
             * Defaults to 70%.
             */
            this.cardWidth = 70;
            /**
             * color?: 'accent' | 'primary' | 'warn'
             *
             * toolbar color option: primary | accent | warn.
             * If [color] is not set, primary is used.
             */
            this.color = 'primary';
        }
        TdLayoutCardOverComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-layout-card-over',
                        template: "<mat-toolbar class=\"td-layout-toolbar\" [color]=\"color\"></mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div\n    class=\"td-layout-card-over\"\n    [style.max-width.%]=\"cardWidth\"\n    [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n    [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n    [style.-webkit-box-flex]=\"1\"\n  >\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{ cardTitle }}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{ cardSubtitle }}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
                        styles: [":host{position:relative;display:block;z-index:2;width:100%;min-height:100%;height:100%}:host [td-after-card]{display:block}.td-layout-card-over-wrapper{margin:-64px 0;width:100%;min-height:100%;height:100%}@media (min-width:600px){.td-layout-card-over-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.td-layout-card-over-wrapper .td-layout-card-over{max-height:100%;box-sizing:border-box}}@media (max-width:599px){.td-layout-card-over-wrapper .td-layout-card-over{max-width:100%!important}}"]
                    }] }
        ];
        TdLayoutCardOverComponent.propDecorators = {
            cardTitle: [{ type: core.Input }],
            cardSubtitle: [{ type: core.Input }],
            cardWidth: [{ type: core.Input }],
            color: [{ type: core.Input }]
        };
        return TdLayoutCardOverComponent;
    }());
    if (false) {
        /**
         * cardTitle?: string
         *
         * Title set in card.
         * @type {?}
         */
        TdLayoutCardOverComponent.prototype.cardTitle;
        /**
         * cardSubtitle?: string
         *
         * Subtitle set in card.
         * @type {?}
         */
        TdLayoutCardOverComponent.prototype.cardSubtitle;
        /**
         * cardWidth?: string
         *
         * Card flex width in %.
         * Defaults to 70%.
         * @type {?}
         */
        TdLayoutCardOverComponent.prototype.cardWidth;
        /**
         * color?: 'accent' | 'primary' | 'warn'
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         * @type {?}
         */
        TdLayoutCardOverComponent.prototype.color;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdLayoutManageListComponent = /** @class */ (function () {
        function TdLayoutManageListComponent() {
            /**
             * mode?: 'side', 'push' or 'over'
             *
             * The mode or styling of the sidenav.
             * Defaults to "side".
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.mode = 'side';
            /**
             * opened?: boolean
             *
             * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
             * Defaults to "true".
             *
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.opened = true;
            /**
             * sidenavWidth?: string
             *
             * Sets the "width" of the sidenav in either "px" or "%"
             * Defaults to "257px".
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.sidenavWidth = '257px';
            /**
             * containerAutosize?: boolean
             *
             * Sets "autosize" of the sidenav-container.
             * Defaults to "false".
             *
             * See documentation for more info and potential performance risks.
             *
             * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
             */
            this.containerAutosize = false;
        }
        Object.defineProperty(TdLayoutManageListComponent.prototype, "disableClose", {
            /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             */
            get: /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             * @return {?}
             */
            function () {
                return this.mode === 'side';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutManageListComponent.prototype.toggle = /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        function () {
            return this.sidenav.toggle(!this.sidenav.opened);
        };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutManageListComponent.prototype.open = /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        function () {
            return this.sidenav.open();
        };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutManageListComponent.prototype.close = /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        function () {
            return this.sidenav.close();
        };
        TdLayoutManageListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-layout-manage-list',
                        template: "<mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-manage-list\">\n  <mat-sidenav\n    #sidenav\n    position=\"start\"\n    [mode]=\"mode\"\n    [opened]=\"opened\"\n    [disableClose]=\"disableClose\"\n    [style.max-width]=\"sidenavWidth\"\n    [style.min-width]=\"sidenavWidth\"\n  >\n    <ng-content select=\"mat-toolbar[td-sidenav-content]\"></ng-content>\n    <div class=\"td-layout-manage-list-sidenav\" cdkScrollable>\n      <ng-content select=\"[td-sidenav-content]\"></ng-content>\n    </div>\n  </mat-sidenav>\n  <div class=\"td-layout-manage-list-main\">\n    <ng-content select=\"mat-toolbar\"></ng-content>\n    <div class=\"td-layout-manage-list-content\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <ng-content select=\"td-layout-footer-inner\"></ng-content>\n  </div>\n</mat-sidenav-container>\n",
                        styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host mat-sidenav-container.td-layout-manage-list{-webkit-box-flex:1;-ms-flex:1;flex:1}:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-closed,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-closing,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-opened,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-opening{box-shadow:0 1px 3px 0 rgba(0,0,0,.2)}:host .td-layout-manage-list-sidenav{text-align:start;-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-manage-list-main{margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host .td-layout-manage-list-main .td-layout-manage-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-ms-flex:1;flex:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host ::ng-deep mat-nav-list a[mat-list-item] .mat-list-item-content{font-size:14px}:host ::ng-deep .mat-toolbar{font-weight:400}"]
                    }] }
        ];
        TdLayoutManageListComponent.propDecorators = {
            sidenav: [{ type: core.ViewChild, args: [sidenav.MatSidenav, { static: true },] }],
            mode: [{ type: core.Input }],
            opened: [{ type: core.Input }],
            sidenavWidth: [{ type: core.Input }],
            containerAutosize: [{ type: core.Input }]
        };
        return TdLayoutManageListComponent;
    }());
    if (false) {
        /** @type {?} */
        TdLayoutManageListComponent.prototype.sidenav;
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "side".
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         * @type {?}
         */
        TdLayoutManageListComponent.prototype.mode;
        /**
         * opened?: boolean
         *
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         * @type {?}
         */
        TdLayoutManageListComponent.prototype.opened;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "257px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         * @type {?}
         */
        TdLayoutManageListComponent.prototype.sidenavWidth;
        /**
         * containerAutosize?: boolean
         *
         * Sets "autosize" of the sidenav-container.
         * Defaults to "false".
         *
         * See documentation for more info and potential performance risks.
         *
         * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
         * @type {?}
         */
        TdLayoutManageListComponent.prototype.containerAutosize;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdLayoutManageListToggleDirective = /** @class */ (function (_super) {
        __extends(TdLayoutManageListToggleDirective, _super);
        function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", {
            set: /**
             * @param {?} tdLayoutManageListToggle
             * @return {?}
             */
            function (tdLayoutManageListToggle) {
                this.disabled = !((/** @type {?} */ (tdLayoutManageListToggle)) === '' || tdLayoutManageListToggle);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutManageListToggleDirective.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this._layout.toggle();
        };
        TdLayoutManageListToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutManageListToggle]',
                        inputs: ['hideWhenOpened'],
                    },] }
        ];
        /** @nocollapse */
        TdLayoutManageListToggleDirective.ctorParameters = function () { return [
            { type: TdLayoutManageListComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdLayoutManageListComponent; })),] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdLayoutManageListToggleDirective.propDecorators = {
            tdLayoutManageListToggle: [{ type: core.Input, args: ['tdLayoutManageListToggle',] }]
        };
        return TdLayoutManageListToggleDirective;
    }(LayoutToggle));
    var TdLayoutManageListCloseDirective = /** @class */ (function (_super) {
        __extends(TdLayoutManageListCloseDirective, _super);
        function TdLayoutManageListCloseDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", {
            set: /**
             * @param {?} tdLayoutManageListClose
             * @return {?}
             */
            function (tdLayoutManageListClose) {
                this.disabled = !((/** @type {?} */ (tdLayoutManageListClose)) === '' || tdLayoutManageListClose);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutManageListCloseDirective.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this._layout.close();
        };
        TdLayoutManageListCloseDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutManageListClose]',
                        inputs: ['hideWhenOpened'],
                    },] }
        ];
        /** @nocollapse */
        TdLayoutManageListCloseDirective.ctorParameters = function () { return [
            { type: TdLayoutManageListComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdLayoutManageListComponent; })),] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdLayoutManageListCloseDirective.propDecorators = {
            tdLayoutManageListClose: [{ type: core.Input, args: ['tdLayoutManageListClose',] }]
        };
        return TdLayoutManageListCloseDirective;
    }(LayoutToggle));
    var TdLayoutManageListOpenDirective = /** @class */ (function (_super) {
        __extends(TdLayoutManageListOpenDirective, _super);
        function TdLayoutManageListOpenDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", {
            set: /**
             * @param {?} tdLayoutManageListOpen
             * @return {?}
             */
            function (tdLayoutManageListOpen) {
                this.disabled = !((/** @type {?} */ (tdLayoutManageListOpen)) === '' || tdLayoutManageListOpen);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutManageListOpenDirective.prototype.onClick = /**
         * @return {?}
         */
        function () {
            this._layout.open();
        };
        TdLayoutManageListOpenDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLayoutManageListOpen]',
                        inputs: ['hideWhenOpened'],
                    },] }
        ];
        /** @nocollapse */
        TdLayoutManageListOpenDirective.ctorParameters = function () { return [
            { type: TdLayoutManageListComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdLayoutManageListComponent; })),] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdLayoutManageListOpenDirective.propDecorators = {
            tdLayoutManageListOpen: [{ type: core.Input, args: ['tdLayoutManageListOpen',] }]
        };
        return TdLayoutManageListOpenDirective;
    }(LayoutToggle));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdLayoutFooterComponent = /** @class */ (function () {
        function TdLayoutFooterComponent(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
        }
        Object.defineProperty(TdLayoutFooterComponent.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () {
                return this._color;
            },
            /**
             * color?: 'accent' | 'primary' | 'warn'
             *
             * Optional color option: primary | accent | warn.
             */
            set: /**
             * color?: 'accent' | 'primary' | 'warn'
             *
             * Optional color option: primary | accent | warn.
             * @param {?} color
             * @return {?}
             */
            function (color) {
                if (color) {
                    this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                    this._color = color;
                    this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
                }
            },
            enumerable: true,
            configurable: true
        });
        TdLayoutFooterComponent.decorators = [
            { type: core.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'td-layout-footer,td-layout-footer-inner',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host{display:block;padding:10px 16px}"]
                    }] }
        ];
        /** @nocollapse */
        TdLayoutFooterComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdLayoutFooterComponent.propDecorators = {
            color: [{ type: core.Input, args: ['color',] }]
        };
        return TdLayoutFooterComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdLayoutFooterComponent.prototype._color;
        /**
         * @type {?}
         * @private
         */
        TdLayoutFooterComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdLayoutFooterComponent.prototype._elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdNavigationDrawerMenuDirective = /** @class */ (function () {
        function TdNavigationDrawerMenuDirective() {
        }
        TdNavigationDrawerMenuDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-navigation-drawer-menu]',
                    },] }
        ];
        return TdNavigationDrawerMenuDirective;
    }());
    var TdNavigationDrawerToolbarDirective = /** @class */ (function () {
        function TdNavigationDrawerToolbarDirective() {
        }
        TdNavigationDrawerToolbarDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-navigation-drawer-toolbar]',
                    },] }
        ];
        return TdNavigationDrawerToolbarDirective;
    }());
    var TdNavigationDrawerComponent = /** @class */ (function () {
        function TdNavigationDrawerComponent(_layout, _router, _sanitize) {
            this._layout = _layout;
            this._router = _router;
            this._sanitize = _sanitize;
            this._menuToggled = false;
        }
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "menuToggled", {
            get: /**
             * @return {?}
             */
            function () {
                return this._menuToggled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "isMenuAvailable", {
            /**
             * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
             */
            get: /**
             * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
             * @return {?}
             */
            function () {
                return this._drawerMenu ? this._drawerMenu.length > 0 : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "isCustomToolbar", {
            /**
             * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
             */
            get: /**
             * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
             * @return {?}
             */
            function () {
                return this._toolbar ? this._toolbar.length > 0 : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "isBackgroundAvailable", {
            /**
             * Checks if there is a background image for the toolbar.
             */
            get: /**
             * Checks if there is a background image for the toolbar.
             * @return {?}
             */
            function () {
                return !!this._backgroundImage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundUrl", {
            /**
             * backgroundUrl?: SafeResourceUrl
             *
             * image to be displayed as the background of the toolbar.
             * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
             */
            set: /**
             * backgroundUrl?: SafeResourceUrl
             *
             * image to be displayed as the background of the toolbar.
             * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
             * @param {?} backgroundUrl
             * @return {?}
             */
            function (backgroundUrl) {
                if (backgroundUrl) {
                    /** @type {?} */
                    var sanitizedUrl = this._sanitize.sanitize(core.SecurityContext.RESOURCE_URL, backgroundUrl);
                    this._backgroundImage = this._sanitize.sanitize(core.SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundImage", {
            get: /**
             * @return {?}
             */
            function () {
                return this._backgroundImage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "routerEnabled", {
            /**
             * Checks if router was injected.
             */
            get: /**
             * Checks if router was injected.
             * @return {?}
             */
            function () {
                return !!this._router && !!this.navigationRoute;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._closeSubscription = this._layout.sidenav.openedChange.subscribe((/**
             * @param {?} opened
             * @return {?}
             */
            function (opened) {
                if (!opened) {
                    _this._menuToggled = false;
                }
            }));
        };
        /**
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this._closeSubscription) {
                this._closeSubscription.unsubscribe();
                this._closeSubscription = undefined;
            }
        };
        /**
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.toggleMenu = /**
         * @return {?}
         */
        function () {
            if (this.isMenuAvailable) {
                this._menuToggled = !this._menuToggled;
            }
        };
        /**
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.handleNavigationClick = /**
         * @return {?}
         */
        function () {
            if (this.routerEnabled) {
                this._router.navigateByUrl(this.navigationRoute);
                this.close();
            }
        };
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.toggle = /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        function () {
            return this._layout.toggle();
        };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.open = /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        function () {
            return this._layout.open();
        };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.close = /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        function () {
            return this._layout.close();
        };
        TdNavigationDrawerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-navigation-drawer',
                        template: "<mat-toolbar\n  [color]=\"color\"\n  [style.background-image]=\"backgroundImage\"\n  [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n  class=\"td-nagivation-drawer-toolbar\"\n>\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div\n      *ngIf=\"icon || logo || sidenavTitle || avatar\"\n      class=\"td-navigation-drawer-toolbar-content\"\n      [class.cursor-pointer]=\"routerEnabled\"\n      (click)=\"handleNavigationClick()\"\n    >\n      <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <img *ngIf=\"avatar && !logo && !icon\" class=\"td-nagivation-drawer-toolbar-avatar\" [attr.src]=\"avatar\" />\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{ sidenavTitle }}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{ name }}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\" href *ngIf=\"email || name\" (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{ email || name }}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                        animations: [common$1.tdCollapseAnimation],
                        styles: [":host{width:100%}:host .td-navigation-drawer-content.ng-animating,:host .td-navigation-drawer-menu-content.ng-animating{overflow:hidden}:host mat-toolbar{padding:16px}:host mat-toolbar.td-toolbar-background{background-repeat:no-repeat;background-size:cover}:host mat-toolbar.td-nagivation-drawer-toolbar{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:auto!important;display:block!important}:host mat-toolbar .td-navigation-drawer-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host mat-toolbar .td-navigation-drawer-toolbar-content .td-nagivation-drawer-toolbar-avatar{border-radius:50%;height:60px;width:60px;margin:0 12px 12px 0}:host mat-toolbar .td-navigation-drawer-toolbar-content .td-navigation-drawer-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host mat-toolbar .td-navigation-drawer-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host mat-toolbar .td-navigation-drawer-menu-toggle{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{-webkit-box-flex:1;-ms-flex:1;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{height:24px;line-height:24px;width:24px}:host>div{overflow:hidden}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavigationDrawerComponent.ctorParameters = function () { return [
            { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdLayoutComponent; })),] }] },
            { type: router.Router, decorators: [{ type: core.Optional }] },
            { type: platformBrowser.DomSanitizer }
        ]; };
        TdNavigationDrawerComponent.propDecorators = {
            _drawerMenu: [{ type: core.ContentChildren, args: [TdNavigationDrawerMenuDirective, { descendants: true },] }],
            _toolbar: [{ type: core.ContentChildren, args: [TdNavigationDrawerToolbarDirective, { descendants: true },] }],
            sidenavTitle: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            logo: [{ type: core.Input }],
            avatar: [{ type: core.Input }],
            color: [{ type: core.Input }],
            navigationRoute: [{ type: core.Input }],
            backgroundUrl: [{ type: core.Input, args: ['backgroundUrl',] }],
            name: [{ type: core.Input }],
            email: [{ type: core.Input }]
        };
        return TdNavigationDrawerComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdNavigationDrawerComponent.prototype._closeSubscription;
        /**
         * @type {?}
         * @private
         */
        TdNavigationDrawerComponent.prototype._menuToggled;
        /**
         * @type {?}
         * @private
         */
        TdNavigationDrawerComponent.prototype._backgroundImage;
        /** @type {?} */
        TdNavigationDrawerComponent.prototype._drawerMenu;
        /** @type {?} */
        TdNavigationDrawerComponent.prototype._toolbar;
        /**
         * sidenavTitle?: string
         * Title set in sideNav.
         * @type {?}
         */
        TdNavigationDrawerComponent.prototype.sidenavTitle;
        /**
         * icon?: string
         *
         * icon name to be displayed before the title
         * @type {?}
         */
        TdNavigationDrawerComponent.prototype.icon;
        /**
         * logo?: string
         *
         * logo icon name to be displayed before the title.
         * If [icon] is set, then this will not be shown.
         * @type {?}
         */
        TdNavigationDrawerComponent.prototype.logo;
        /**
         * avatar?: string
         *
         * avatar url to be displayed before the title
         * If [icon] or [logo] are set, then this will not be shown.
         * @type {?}
         */
        TdNavigationDrawerComponent.prototype.avatar;
        /**
         * color?: 'accent' | 'primary' | 'warn'
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, default is used.
         * @type {?}
         */
        TdNavigationDrawerComponent.prototype.color;
        /**
         * navigationRoute?: string
         *
         * option to set the combined route for the icon, logo, and sidenavTitle.
         * @type {?}
         */
        TdNavigationDrawerComponent.prototype.navigationRoute;
        /**
         * name?: string
         *
         * string to be displayed as part of the navigation drawer sublabel.
         * if [email] is not set, then [name] will be the toggle menu text.
         * @type {?}
         */
        TdNavigationDrawerComponent.prototype.name;
        /**
         * email?: string
         *
         * string to be displayed as part of the navigation drawer sublabel in the [toggle] menu text.
         * if [email] and [name] are not set, then the toggle menu is not rendered.
         * @type {?}
         */
        TdNavigationDrawerComponent.prototype.email;
        /**
         * @type {?}
         * @private
         */
        TdNavigationDrawerComponent.prototype._layout;
        /**
         * @type {?}
         * @private
         */
        TdNavigationDrawerComponent.prototype._router;
        /**
         * @type {?}
         * @private
         */
        TdNavigationDrawerComponent.prototype._sanitize;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_LAYOUTS = [
        TdLayoutComponent,
        TdLayoutToggleDirective,
        TdLayoutCloseDirective,
        TdLayoutOpenDirective,
        TdLayoutNavComponent,
        TdLayoutNavListComponent,
        TdLayoutNavListToggleDirective,
        TdLayoutNavListCloseDirective,
        TdLayoutNavListOpenDirective,
        TdLayoutCardOverComponent,
        TdLayoutManageListComponent,
        TdLayoutManageListToggleDirective,
        TdLayoutManageListCloseDirective,
        TdLayoutManageListOpenDirective,
        TdLayoutFooterComponent,
        TdNavigationDrawerComponent,
        TdNavigationDrawerMenuDirective,
        TdNavigationDrawerToolbarDirective,
    ];
    var CovalentLayoutModule = /** @class */ (function () {
        function CovalentLayoutModule() {
        }
        CovalentLayoutModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            scrolling.ScrollingModule,
                            sidenav.MatSidenavModule,
                            toolbar.MatToolbarModule,
                            button.MatButtonModule,
                            icon.MatIconModule,
                            card.MatCardModule,
                            divider.MatDividerModule,
                        ],
                        declarations: [TD_LAYOUTS],
                        exports: [TD_LAYOUTS],
                    },] }
        ];
        return CovalentLayoutModule;
    }());

    exports.CovalentLayoutModule = CovalentLayoutModule;
    exports.LayoutToggle = LayoutToggle;
    exports.LayoutToggleBase = LayoutToggleBase;
    exports.TdLayoutCardOverComponent = TdLayoutCardOverComponent;
    exports.TdLayoutCloseDirective = TdLayoutCloseDirective;
    exports.TdLayoutComponent = TdLayoutComponent;
    exports.TdLayoutFooterComponent = TdLayoutFooterComponent;
    exports.TdLayoutManageListCloseDirective = TdLayoutManageListCloseDirective;
    exports.TdLayoutManageListComponent = TdLayoutManageListComponent;
    exports.TdLayoutManageListOpenDirective = TdLayoutManageListOpenDirective;
    exports.TdLayoutManageListToggleDirective = TdLayoutManageListToggleDirective;
    exports.TdLayoutNavComponent = TdLayoutNavComponent;
    exports.TdLayoutNavListCloseDirective = TdLayoutNavListCloseDirective;
    exports.TdLayoutNavListComponent = TdLayoutNavListComponent;
    exports.TdLayoutNavListOpenDirective = TdLayoutNavListOpenDirective;
    exports.TdLayoutNavListToggleDirective = TdLayoutNavListToggleDirective;
    exports.TdLayoutOpenDirective = TdLayoutOpenDirective;
    exports.TdLayoutToggleDirective = TdLayoutToggleDirective;
    exports.TdNavigationDrawerComponent = TdNavigationDrawerComponent;
    exports.TdNavigationDrawerMenuDirective = TdNavigationDrawerMenuDirective;
    exports.TdNavigationDrawerToolbarDirective = TdNavigationDrawerToolbarDirective;
    exports._TdLayoutToggleMixinBase = _TdLayoutToggleMixinBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-layout.umd.js.map
