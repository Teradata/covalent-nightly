(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/scrolling'), require('@angular/material/sidenav'), require('@angular/material/toolbar'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/card'), require('@angular/material/divider'), require('@covalent/core/common'), require('@angular/router'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/layout', ['exports', '@angular/core', '@angular/common', '@angular/cdk/scrolling', '@angular/material/sidenav', '@angular/material/toolbar', '@angular/material/button', '@angular/material/icon', '@angular/material/card', '@angular/material/divider', '@covalent/core/common', '@angular/router', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.layout = {}), global.ng.core, global.ng.common, global.ng.cdk.scrolling, global.ng.material.sidenav, global.ng.material.toolbar, global.ng.material.button, global.ng.material.icon, global.ng.material.card, global.ng.material.divider, global.covalent.core.common, global.ng.router, global.ng.platformBrowser));
}(this, (function (exports, core, common$1, scrolling, sidenav, toolbar, button, icon, card, divider, common, router, platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: layout.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
             * @return {?}
             */
            get: function () {
                return this.mode === 'side';
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutComponent.prototype.toggle = function () {
            return this.sidenav.toggle(!this.sidenav.opened);
        };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutComponent.prototype.open = function () {
            return this.sidenav.open();
        };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutComponent.prototype.close = function () {
            return this.sidenav.close();
        };
        return TdLayoutComponent;
    }());
    TdLayoutComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-layout',
                    template: "<mat-sidenav-container fullscreen [autosize]=\"containerAutosize\">\n  <mat-sidenav\n    #sidenav\n    class=\"td-layout-sidenav\"\n    [mode]=\"mode\"\n    [opened]=\"opened\"\n    [style.max-width]=\"sidenavWidth\"\n    [style.min-width]=\"sidenavWidth\"\n    [disableClose]=\"disableClose\"\n  >\n    <ng-content select=\"td-navigation-drawer\"></ng-content>\n    <ng-content select=\"[td-sidenav-content]\"></ng-content>\n  </mat-sidenav>\n  <ng-content></ng-content>\n</mat-sidenav-container>\n",
                    styles: [":host{display:-ms-flexbox;display:flex;height:100%;margin:0;min-height:100%;overflow:hidden;width:100%}:host ::ng-deep>mat-sidenav-container .mat-drawer>.mat-drawer-inner-container{-ms-flex-direction:column;display:-ms-flexbox;display:flex;flex-direction:column}"]
                }] }
    ];
    TdLayoutComponent.propDecorators = {
        sidenav: [{ type: core.ViewChild, args: [sidenav.MatSidenav, { static: true },] }],
        mode: [{ type: core.Input }],
        opened: [{ type: core.Input }],
        sidenavWidth: [{ type: core.Input }],
        containerAutosize: [{ type: core.Input }]
    };
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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
    var _TdLayoutToggleMixinBase = common.mixinDisabled(LayoutToggleBase);
    /**
     * @abstract
     */
    var BaseLayoutToggleDirective = /** @class */ (function (_super) {
        __extends(BaseLayoutToggleDirective, _super);
        /**
         * @param {?} _layout
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function BaseLayoutToggleDirective(_layout, _renderer, _elementRef) {
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
        Object.defineProperty(BaseLayoutToggleDirective.prototype, "hideWhenOpened", {
            /**
             * hideWhenOpened?: boolean
             * When this is set to true, the host will be hidden when
             * the sidenav is opened.
             * @param {?} hideWhenOpened
             * @return {?}
             */
            set: function (hideWhenOpened) {
                this._hideWhenOpened = hideWhenOpened;
                if (this._initialized) {
                    this._toggleVisibility();
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        BaseLayoutToggleDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._initialized = true;
            if (this._layout && this._layout.sidenav) {
                this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(( /**
                 * @return {?}
                 */function () {
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
        BaseLayoutToggleDirective.prototype.ngOnDestroy = function () {
            if (this._toggleSubs) {
                this._toggleSubs.unsubscribe();
                this._toggleSubs = undefined;
            }
        };
        /**
         * Listens to host click event to trigger the layout toggle
         * @param {?} event
         * @return {?}
         */
        BaseLayoutToggleDirective.prototype.clickListener = function (event) {
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
        BaseLayoutToggleDirective.prototype._toggleVisibility = function () {
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
        BaseLayoutToggleDirective.prototype._noLayoutMessage = function () {
            /* tslint:disable-next-line */
            console.warn('Covalent: Parent layout not found for layout toggle directive');
        };
        return BaseLayoutToggleDirective;
    }(_TdLayoutToggleMixinBase));
    BaseLayoutToggleDirective.decorators = [
        { type: core.Directive }
    ];
    /** @nocollapse */
    BaseLayoutToggleDirective.ctorParameters = function () { return [
        { type: undefined },
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    BaseLayoutToggleDirective.propDecorators = {
        hideWhenOpened: [{ type: core.Input, args: ['hideWhenOpened',] }],
        clickListener: [{ type: core.HostListener, args: ['click', ['$event'],] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        BaseLayoutToggleDirective.prototype._toggleSubs;
        /**
         * @type {?}
         * @private
         */
        BaseLayoutToggleDirective.prototype._initialized;
        /**
         * @type {?}
         * @private
         */
        BaseLayoutToggleDirective.prototype._hideWhenOpened;
        /**
         * @type {?}
         * @protected
         */
        BaseLayoutToggleDirective.prototype._layout;
        /**
         * @type {?}
         * @private
         */
        BaseLayoutToggleDirective.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        BaseLayoutToggleDirective.prototype._elementRef;
        /**
         * @abstract
         * @return {?}
         */
        BaseLayoutToggleDirective.prototype.onClick = function () { };
    }

    var TdLayoutToggleDirective = /** @class */ (function (_super) {
        __extends(TdLayoutToggleDirective, _super);
        /**
         * @param {?} layout
         * @param {?} renderer
         * @param {?} elementRef
         */
        function TdLayoutToggleDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutToggleDirective.prototype, "tdLayoutToggle", {
            /**
             * @param {?} tdLayoutToggle
             * @return {?}
             */
            set: function (tdLayoutToggle) {
                this.disabled = !(( /** @type {?} */(tdLayoutToggle)) === '' || tdLayoutToggle);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutToggleDirective.prototype.onClick = function () {
            this._layout.toggle();
        };
        return TdLayoutToggleDirective;
    }(BaseLayoutToggleDirective));
    TdLayoutToggleDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdLayoutToggle]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutToggleDirective.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return TdLayoutComponent; })),] }] },
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    TdLayoutToggleDirective.propDecorators = {
        tdLayoutToggle: [{ type: core.Input, args: ['tdLayoutToggle',] }]
    };
    var TdLayoutCloseDirective = /** @class */ (function (_super) {
        __extends(TdLayoutCloseDirective, _super);
        /**
         * @param {?} layout
         * @param {?} renderer
         * @param {?} elementRef
         */
        function TdLayoutCloseDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutCloseDirective.prototype, "tdLayoutClose", {
            /**
             * @param {?} tdLayoutClose
             * @return {?}
             */
            set: function (tdLayoutClose) {
                this.disabled = !(( /** @type {?} */(tdLayoutClose)) === '' || tdLayoutClose);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutCloseDirective.prototype.onClick = function () {
            this._layout.close();
        };
        return TdLayoutCloseDirective;
    }(BaseLayoutToggleDirective));
    TdLayoutCloseDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdLayoutClose]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutCloseDirective.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return TdLayoutComponent; })),] }] },
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    TdLayoutCloseDirective.propDecorators = {
        tdLayoutClose: [{ type: core.Input, args: ['tdLayoutClose',] }]
    };
    var TdLayoutOpenDirective = /** @class */ (function (_super) {
        __extends(TdLayoutOpenDirective, _super);
        /**
         * @param {?} layout
         * @param {?} renderer
         * @param {?} elementRef
         */
        function TdLayoutOpenDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutOpenDirective.prototype, "tdLayoutClose", {
            /**
             * @param {?} tdLayoutOpen
             * @return {?}
             */
            set: function (tdLayoutOpen) {
                this.disabled = !(( /** @type {?} */(tdLayoutOpen)) === '' || tdLayoutOpen);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutOpenDirective.prototype.onClick = function () {
            this._layout.open();
        };
        return TdLayoutOpenDirective;
    }(BaseLayoutToggleDirective));
    TdLayoutOpenDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdLayoutOpen]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutOpenDirective.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return TdLayoutComponent; })),] }] },
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    TdLayoutOpenDirective.propDecorators = {
        tdLayoutClose: [{ type: core.Input, args: ['tdLayoutOpen',] }]
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: layout-nav/layout-nav.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdLayoutNavComponent = /** @class */ (function () {
        /**
         * @param {?} _router
         */
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
             * @return {?}
             */
            get: function () {
                return !!this._router && !!this.navigationRoute;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavComponent.prototype.handleNavigationClick = function () {
            if (this.routerEnabled) {
                this._router.navigateByUrl(this.navigationRoute);
            }
        };
        return TdLayoutNavComponent;
    }());
    TdLayoutNavComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-layout-nav',
                    template: "<div class=\"td-layout-nav-wrapper\">\n  <mat-toolbar class=\"td-layout-toolbar\" [color]=\"color\">\n    <ng-content select=\"[td-menu-button]\"></ng-content>\n    <span\n      *ngIf=\"icon || logo || toolbarTitle\"\n      [class.cursor-pointer]=\"routerEnabled\"\n      (click)=\"handleNavigationClick()\"\n      class=\"td-layout-nav-toolbar-content\"\n    >\n      <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"toolbarTitle\">{{ toolbarTitle }}</span>\n    </span>\n    <ng-content select=\"[td-toolbar-content]\"></ng-content>\n  </mat-toolbar>\n  <div class=\"td-layout-nav-content\" cdkScrollable>\n    <ng-content></ng-content>\n  </div>\n  <ng-content select=\"td-layout-footer\"></ng-content>\n</div>\n",
                    styles: [".td-menu-button{margin-left:0}::ng-deep [dir=rtl] .td-menu-button{margin-left:6px;margin-right:0}:host{overflow:hidden}:host,:host .td-layout-nav-wrapper{display:-ms-flexbox;display:flex;height:100%;margin:0;min-height:100%;width:100%}:host .td-layout-nav-wrapper{-ms-flex-direction:column;box-sizing:border-box;flex-direction:column}:host .td-layout-nav-wrapper .td-layout-nav-toolbar-content{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-start;max-width:100%}:host .td-layout-nav-wrapper .td-layout-nav-content{-ms-flex:1;-ms-flex-direction:column;-webkit-overflow-scrolling:touch;box-sizing:border-box;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;overflow:auto;position:relative}"]
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
     * Generated from: layout-nav-list/layout-nav-list.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdLayoutNavListComponent = /** @class */ (function () {
        /**
         * @param {?} _router
         */
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
             * @return {?}
             */
            get: function () {
                return this.mode === 'side';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdLayoutNavListComponent.prototype, "routerEnabled", {
            /**
             * Checks if router was injected.
             * @return {?}
             */
            get: function () {
                return !!this._router && !!this.navigationRoute;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.handleNavigationClick = function () {
            if (this.routerEnabled) {
                this._router.navigateByUrl(this.navigationRoute);
            }
        };
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.toggle = function () {
            return this.sidenav.toggle(!this.sidenav.opened);
        };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.open = function () {
            return this.sidenav.open();
        };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.close = function () {
            return this.sidenav.close();
        };
        return TdLayoutNavListComponent;
    }());
    TdLayoutNavListComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-layout-nav-list',
                    template: "<div class=\"td-layout-nav-list-wrapper\">\n  <mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-nav-list\">\n    <mat-sidenav\n      #sidenav\n      position=\"start\"\n      [mode]=\"mode\"\n      [opened]=\"opened\"\n      [disableClose]=\"disableClose\"\n      [style.max-width]=\"sidenavWidth\"\n      [style.min-width]=\"sidenavWidth\"\n    >\n      <mat-toolbar class=\"td-layout-toolbar\" [color]=\"color\">\n        <ng-content select=\"[td-menu-button]\"></ng-content>\n        <span\n          *ngIf=\"icon || logo || toolbarTitle\"\n          class=\"td-layout-nav-list-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\"\n        >\n          <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n          <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n          <span *ngIf=\"toolbarTitle\">{{ toolbarTitle }}</span>\n        </span>\n        <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content select=\"[td-sidenav-content]\"></ng-content>\n      </div>\n    </mat-sidenav>\n    <div class=\"td-layout-nav-list-main\">\n      <mat-toolbar class=\"td-layout-toolbar\" [color]=\"color\">\n        <ng-content select=\"[td-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"td-layout-footer-inner\"></ng-content>\n    </div>\n  </mat-sidenav-container>\n</div>\n<ng-content select=\"td-layout-footer\"></ng-content>\n",
                    styles: [":host{-ms-flex:1;-ms-flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;height:100%;margin:0;min-height:100%;overflow:hidden;width:100%}:host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-right:0}[dir=rtl] :host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-left:0}:host .td-layout-nav-list-wrapper{-ms-flex:1;-ms-flex-direction:column;-webkit-overflow-scrolling:touch;box-sizing:border-box;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;overflow:auto;position:relative}:host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-start;max-width:100%}:host .td-layout-nav-list-wrapper .td-layout-nav-list-content{-ms-flex:1;-webkit-overflow-scrolling:touch;display:block;flex:1;overflow:auto;position:relative;text-align:start}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main{-ms-flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:column;height:100%;margin:0;min-height:100%;overflow:auto;position:relative;width:100%}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content{-ms-flex:1;-webkit-overflow-scrolling:touch;display:block;flex:1;overflow:auto;position:relative}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list{-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closed,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closing,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opened,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opening{box-shadow:none}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer-content{-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer>.mat-drawer-inner-container{-ms-flex-direction:column;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:column}"]
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

    var TdLayoutNavListToggleDirective = /** @class */ (function (_super) {
        __extends(TdLayoutNavListToggleDirective, _super);
        /**
         * @param {?} layout
         * @param {?} renderer
         * @param {?} elementRef
         */
        function TdLayoutNavListToggleDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", {
            /**
             * @param {?} tdLayoutNavListToggle
             * @return {?}
             */
            set: function (tdLayoutNavListToggle) {
                this.disabled = !(( /** @type {?} */(tdLayoutNavListToggle)) === '' || tdLayoutNavListToggle);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListToggleDirective.prototype.onClick = function () {
            this._layout.toggle();
        };
        return TdLayoutNavListToggleDirective;
    }(BaseLayoutToggleDirective));
    TdLayoutNavListToggleDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdLayoutNavListToggle]',
                    inputs: ['hideWhenOpened'],
                },] }
    ];
    /** @nocollapse */
    TdLayoutNavListToggleDirective.ctorParameters = function () { return [
        { type: TdLayoutNavListComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return TdLayoutNavListComponent; })),] }] },
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    TdLayoutNavListToggleDirective.propDecorators = {
        tdLayoutNavListToggle: [{ type: core.Input, args: ['tdLayoutNavListToggle',] }]
    };
    var TdLayoutNavListCloseDirective = /** @class */ (function (_super) {
        __extends(TdLayoutNavListCloseDirective, _super);
        /**
         * @param {?} layout
         * @param {?} renderer
         * @param {?} elementRef
         */
        function TdLayoutNavListCloseDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", {
            /**
             * @param {?} tdLayoutNavListClose
             * @return {?}
             */
            set: function (tdLayoutNavListClose) {
                this.disabled = !(( /** @type {?} */(tdLayoutNavListClose)) === '' || tdLayoutNavListClose);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListCloseDirective.prototype.onClick = function () {
            this._layout.close();
        };
        return TdLayoutNavListCloseDirective;
    }(BaseLayoutToggleDirective));
    TdLayoutNavListCloseDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdLayoutNavListClose]',
                    inputs: ['hideWhenOpened'],
                },] }
    ];
    /** @nocollapse */
    TdLayoutNavListCloseDirective.ctorParameters = function () { return [
        { type: TdLayoutNavListComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return TdLayoutNavListComponent; })),] }] },
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    TdLayoutNavListCloseDirective.propDecorators = {
        tdLayoutNavListClose: [{ type: core.Input, args: ['tdLayoutNavListClose',] }]
    };
    var TdLayoutNavListOpenDirective = /** @class */ (function (_super) {
        __extends(TdLayoutNavListOpenDirective, _super);
        /**
         * @param {?} layout
         * @param {?} renderer
         * @param {?} elementRef
         */
        function TdLayoutNavListOpenDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", {
            /**
             * @param {?} tdLayoutNavListOpen
             * @return {?}
             */
            set: function (tdLayoutNavListOpen) {
                this.disabled = !(( /** @type {?} */(tdLayoutNavListOpen)) === '' || tdLayoutNavListOpen);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListOpenDirective.prototype.onClick = function () {
            this._layout.open();
        };
        return TdLayoutNavListOpenDirective;
    }(BaseLayoutToggleDirective));
    TdLayoutNavListOpenDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdLayoutNavListOpen]',
                    inputs: ['hideWhenOpened'],
                },] }
    ];
    /** @nocollapse */
    TdLayoutNavListOpenDirective.ctorParameters = function () { return [
        { type: TdLayoutNavListComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return TdLayoutNavListComponent; })),] }] },
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    TdLayoutNavListOpenDirective.propDecorators = {
        tdLayoutNavListOpen: [{ type: core.Input, args: ['tdLayoutNavListOpen',] }]
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: layout-card-over/layout-card-over.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return TdLayoutCardOverComponent;
    }());
    TdLayoutCardOverComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-layout-card-over',
                    template: "<mat-toolbar class=\"td-layout-toolbar\" [color]=\"color\"></mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div\n    class=\"td-layout-card-over\"\n    [style.max-width.%]=\"cardWidth\"\n    [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n    [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n    [style.-webkit-box-flex]=\"1\"\n  >\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{ cardTitle }}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{ cardSubtitle }}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
                    styles: [":host{height:100%;min-height:100%;position:relative;width:100%;z-index:2}:host,:host [td-after-card]{display:block}.td-layout-card-over-wrapper{height:100%;margin:-64px 0;min-height:100%;width:100%}@media (min-width:600px){.td-layout-card-over-wrapper{-ms-flex-align:start;-ms-flex-direction:row;-ms-flex-line-pack:start;-ms-flex-pack:center;align-content:flex-start;align-items:flex-start;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:center}.td-layout-card-over-wrapper .td-layout-card-over{box-sizing:border-box;max-height:100%}}@media (max-width:599px){.td-layout-card-over-wrapper .td-layout-card-over{max-width:100%!important}}"]
                }] }
    ];
    TdLayoutCardOverComponent.propDecorators = {
        cardTitle: [{ type: core.Input }],
        cardSubtitle: [{ type: core.Input }],
        cardWidth: [{ type: core.Input }],
        color: [{ type: core.Input }]
    };
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
     * Generated from: layout-manage-list/layout-manage-list.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
             * @return {?}
             */
            get: function () {
                return this.mode === 'side';
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutManageListComponent.prototype.toggle = function () {
            return this.sidenav.toggle(!this.sidenav.opened);
        };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutManageListComponent.prototype.open = function () {
            return this.sidenav.open();
        };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutManageListComponent.prototype.close = function () {
            return this.sidenav.close();
        };
        return TdLayoutManageListComponent;
    }());
    TdLayoutManageListComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-layout-manage-list',
                    template: "<mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-manage-list\">\n  <mat-sidenav\n    #sidenav\n    position=\"start\"\n    [mode]=\"mode\"\n    [opened]=\"opened\"\n    [disableClose]=\"disableClose\"\n    [style.max-width]=\"sidenavWidth\"\n    [style.min-width]=\"sidenavWidth\"\n  >\n    <ng-content select=\"mat-toolbar[td-sidenav-content]\"></ng-content>\n    <div class=\"td-layout-manage-list-sidenav\" cdkScrollable>\n      <ng-content select=\"[td-sidenav-content]\"></ng-content>\n    </div>\n  </mat-sidenav>\n  <div class=\"td-layout-manage-list-main\">\n    <ng-content select=\"mat-toolbar\"></ng-content>\n    <div class=\"td-layout-manage-list-content\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <ng-content select=\"td-layout-footer-inner\"></ng-content>\n  </div>\n</mat-sidenav-container>\n",
                    styles: [":host{display:-ms-flexbox;display:flex;height:100%;margin:0;min-height:100%;overflow:hidden;width:100%}:host mat-sidenav-container.td-layout-manage-list{-ms-flex:1;flex:1}:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-closed,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-closing,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-opened,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-opening{box-shadow:0 1px 3px 0 rgba(0,0,0,.2)}:host .td-layout-manage-list-sidenav{-ms-flex:1;-webkit-overflow-scrolling:touch;display:block;flex:1;overflow:auto;position:relative;text-align:start}:host .td-layout-manage-list-main{-ms-flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:column;height:100%;margin:0;min-height:100%;overflow:auto;position:relative;width:100%}:host .td-layout-manage-list-main .td-layout-manage-list-content{-ms-flex:1;-webkit-overflow-scrolling:touch;display:block;flex:1;overflow:auto;position:relative}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer-content{-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container{-ms-flex-direction:column;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:column}:host ::ng-deep mat-nav-list a[mat-list-item] .mat-list-item-content{font-size:14px}:host ::ng-deep .mat-toolbar{font-weight:400}"]
                }] }
    ];
    TdLayoutManageListComponent.propDecorators = {
        sidenav: [{ type: core.ViewChild, args: [sidenav.MatSidenav, { static: true },] }],
        mode: [{ type: core.Input }],
        opened: [{ type: core.Input }],
        sidenavWidth: [{ type: core.Input }],
        containerAutosize: [{ type: core.Input }]
    };
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

    var TdLayoutManageListToggleDirective = /** @class */ (function (_super) {
        __extends(TdLayoutManageListToggleDirective, _super);
        /**
         * @param {?} layout
         * @param {?} renderer
         * @param {?} elementRef
         */
        function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", {
            /**
             * @param {?} tdLayoutManageListToggle
             * @return {?}
             */
            set: function (tdLayoutManageListToggle) {
                this.disabled = !(( /** @type {?} */(tdLayoutManageListToggle)) === '' || tdLayoutManageListToggle);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutManageListToggleDirective.prototype.onClick = function () {
            this._layout.toggle();
        };
        return TdLayoutManageListToggleDirective;
    }(BaseLayoutToggleDirective));
    TdLayoutManageListToggleDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdLayoutManageListToggle]',
                    inputs: ['hideWhenOpened'],
                },] }
    ];
    /** @nocollapse */
    TdLayoutManageListToggleDirective.ctorParameters = function () { return [
        { type: TdLayoutManageListComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return TdLayoutManageListComponent; })),] }] },
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    TdLayoutManageListToggleDirective.propDecorators = {
        tdLayoutManageListToggle: [{ type: core.Input, args: ['tdLayoutManageListToggle',] }]
    };
    var TdLayoutManageListCloseDirective = /** @class */ (function (_super) {
        __extends(TdLayoutManageListCloseDirective, _super);
        /**
         * @param {?} layout
         * @param {?} renderer
         * @param {?} elementRef
         */
        function TdLayoutManageListCloseDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", {
            /**
             * @param {?} tdLayoutManageListClose
             * @return {?}
             */
            set: function (tdLayoutManageListClose) {
                this.disabled = !(( /** @type {?} */(tdLayoutManageListClose)) === '' || tdLayoutManageListClose);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutManageListCloseDirective.prototype.onClick = function () {
            this._layout.close();
        };
        return TdLayoutManageListCloseDirective;
    }(BaseLayoutToggleDirective));
    TdLayoutManageListCloseDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdLayoutManageListClose]',
                    inputs: ['hideWhenOpened'],
                },] }
    ];
    /** @nocollapse */
    TdLayoutManageListCloseDirective.ctorParameters = function () { return [
        { type: TdLayoutManageListComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return TdLayoutManageListComponent; })),] }] },
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    TdLayoutManageListCloseDirective.propDecorators = {
        tdLayoutManageListClose: [{ type: core.Input, args: ['tdLayoutManageListClose',] }]
    };
    var TdLayoutManageListOpenDirective = /** @class */ (function (_super) {
        __extends(TdLayoutManageListOpenDirective, _super);
        /**
         * @param {?} layout
         * @param {?} renderer
         * @param {?} elementRef
         */
        function TdLayoutManageListOpenDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", {
            /**
             * @param {?} tdLayoutManageListOpen
             * @return {?}
             */
            set: function (tdLayoutManageListOpen) {
                this.disabled = !(( /** @type {?} */(tdLayoutManageListOpen)) === '' || tdLayoutManageListOpen);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutManageListOpenDirective.prototype.onClick = function () {
            this._layout.open();
        };
        return TdLayoutManageListOpenDirective;
    }(BaseLayoutToggleDirective));
    TdLayoutManageListOpenDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdLayoutManageListOpen]',
                    inputs: ['hideWhenOpened'],
                },] }
    ];
    /** @nocollapse */
    TdLayoutManageListOpenDirective.ctorParameters = function () { return [
        { type: TdLayoutManageListComponent, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return TdLayoutManageListComponent; })),] }] },
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    TdLayoutManageListOpenDirective.propDecorators = {
        tdLayoutManageListOpen: [{ type: core.Input, args: ['tdLayoutManageListOpen',] }]
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: layout-footer/layout-footer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdLayoutFooterComponent = /** @class */ (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function TdLayoutFooterComponent(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
        }
        Object.defineProperty(TdLayoutFooterComponent.prototype, "color", {
            /**
             * @return {?}
             */
            get: function () {
                return this._color;
            },
            /**
             * color?: 'accent' | 'primary' | 'warn'
             *
             * Optional color option: primary | accent | warn.
             * @param {?} color
             * @return {?}
             */
            set: function (color) {
                if (color) {
                    this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                    this._color = color;
                    this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
                }
            },
            enumerable: false,
            configurable: true
        });
        return TdLayoutFooterComponent;
    }());
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
     * Generated from: navigation-drawer/navigation-drawer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdNavigationDrawerMenuDirective = /** @class */ (function () {
        function TdNavigationDrawerMenuDirective() {
        }
        return TdNavigationDrawerMenuDirective;
    }());
    TdNavigationDrawerMenuDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[td-navigation-drawer-menu]',
                },] }
    ];
    var TdNavigationDrawerToolbarDirective = /** @class */ (function () {
        function TdNavigationDrawerToolbarDirective() {
        }
        return TdNavigationDrawerToolbarDirective;
    }());
    TdNavigationDrawerToolbarDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[td-navigation-drawer-toolbar]',
                },] }
    ];
    var TdNavigationDrawerComponent = /** @class */ (function () {
        /**
         * @param {?} _layout
         * @param {?} _router
         * @param {?} _sanitize
         */
        function TdNavigationDrawerComponent(_layout, _router, _sanitize) {
            this._layout = _layout;
            this._router = _router;
            this._sanitize = _sanitize;
            this._menuToggled = false;
        }
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "menuToggled", {
            /**
             * @return {?}
             */
            get: function () {
                return this._menuToggled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "isMenuAvailable", {
            /**
             * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
             * @return {?}
             */
            get: function () {
                return this._drawerMenu ? this._drawerMenu.length > 0 : false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "isCustomToolbar", {
            /**
             * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
             * @return {?}
             */
            get: function () {
                return this._toolbar ? this._toolbar.length > 0 : false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "isBackgroundAvailable", {
            /**
             * Checks if there is a background image for the toolbar.
             * @return {?}
             */
            get: function () {
                return !!this._backgroundImage;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundUrl", {
            /**
             * backgroundUrl?: SafeResourceUrl
             *
             * image to be displayed as the background of the toolbar.
             * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
             * @param {?} backgroundUrl
             * @return {?}
             */
            set: function (backgroundUrl) {
                if (backgroundUrl) {
                    /** @type {?} */
                    var sanitizedUrl = this._sanitize.sanitize(core.SecurityContext.RESOURCE_URL, backgroundUrl);
                    this._backgroundImage = this._sanitize.sanitize(core.SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundImage", {
            /**
             * @return {?}
             */
            get: function () {
                return this._backgroundImage;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "routerEnabled", {
            /**
             * Checks if router was injected.
             * @return {?}
             */
            get: function () {
                return !!this._router && !!this.navigationRoute;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._closeSubscription = this._layout.sidenav.openedChange.subscribe(( /**
             * @param {?} opened
             * @return {?}
             */function (opened) {
                if (!opened) {
                    _this._menuToggled = false;
                }
            }));
        };
        /**
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.ngOnDestroy = function () {
            if (this._closeSubscription) {
                this._closeSubscription.unsubscribe();
                this._closeSubscription = undefined;
            }
        };
        /**
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.toggleMenu = function () {
            if (this.isMenuAvailable) {
                this._menuToggled = !this._menuToggled;
            }
        };
        /**
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.handleNavigationClick = function () {
            if (this.routerEnabled) {
                this._router.navigateByUrl(this.navigationRoute);
                this.close();
            }
        };
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.toggle = function () {
            return this._layout.toggle();
        };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.open = function () {
            return this._layout.open();
        };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.close = function () {
            return this._layout.close();
        };
        return TdNavigationDrawerComponent;
    }());
    TdNavigationDrawerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-navigation-drawer',
                    template: "<mat-toolbar\n  [color]=\"color\"\n  [style.background-image]=\"backgroundImage\"\n  [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n  class=\"td-nagivation-drawer-toolbar\"\n>\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div\n      *ngIf=\"icon || logo || sidenavTitle || avatar\"\n      class=\"td-navigation-drawer-toolbar-content\"\n      [class.cursor-pointer]=\"routerEnabled\"\n      (click)=\"handleNavigationClick()\"\n    >\n      <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <img *ngIf=\"avatar && !logo && !icon\" class=\"td-nagivation-drawer-toolbar-avatar\" [attr.src]=\"avatar\" />\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{ sidenavTitle }}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{ name }}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\" href *ngIf=\"email || name\" (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{ email || name }}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                    animations: [common.tdCollapseAnimation],
                    styles: [":host{width:100%}:host .td-navigation-drawer-content.ng-animating,:host .td-navigation-drawer-menu-content.ng-animating{overflow:hidden}:host mat-toolbar{padding:16px}:host mat-toolbar.td-toolbar-background{background-repeat:no-repeat;background-size:cover}:host mat-toolbar.td-nagivation-drawer-toolbar{-ms-flex-direction:column;display:block!important;flex-direction:column;height:auto!important}:host mat-toolbar .td-navigation-drawer-toolbar-content{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-start;max-width:100%}:host mat-toolbar .td-navigation-drawer-toolbar-content .td-nagivation-drawer-toolbar-avatar{border-radius:50%;height:60px;margin:0 12px 12px 0;width:60px}:host mat-toolbar .td-navigation-drawer-name,:host mat-toolbar .td-navigation-drawer-toolbar-content .td-navigation-drawer-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host mat-toolbar .td-navigation-drawer-menu-toggle{-ms-flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{-ms-flex:1;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{height:24px;line-height:24px;width:24px}:host>div{overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    TdNavigationDrawerComponent.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(( /**
                                         * @return {?}
                                         */function () { return TdLayoutComponent; })),] }] },
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
     * Generated from: layout.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return CovalentLayoutModule;
    }());
    CovalentLayoutModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common$1.CommonModule,
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

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: covalent-core-layout.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.BaseLayoutToggleDirective = BaseLayoutToggleDirective;
    exports.CovalentLayoutModule = CovalentLayoutModule;
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
