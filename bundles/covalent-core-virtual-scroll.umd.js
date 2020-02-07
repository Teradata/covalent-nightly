(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/portal'), require('@angular/platform-browser'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/virtual-scroll', ['exports', '@angular/core', '@angular/common', '@angular/cdk/portal', '@angular/platform-browser', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['virtual-scroll'] = {}), global.ng.core, global.ng.common, global.ng.cdk.portal, global.ng.platformBrowser, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common, portal, platformBrowser, rxjs, operators) { 'use strict';

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
    var TdVirtualScrollRowDirective = /** @class */ (function (_super) {
        __extends(TdVirtualScrollRowDirective, _super);
        function TdVirtualScrollRowDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdVirtualScrollRowDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[tdVirtualScrollRow]' },] }
        ];
        /** @nocollapse */
        TdVirtualScrollRowDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        return TdVirtualScrollRowDirective;
    }(portal.TemplatePortalDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_VIRTUAL_OFFSET = 2;
    /** @type {?} */
    var SCROLL_DEBOUNCE = 200;
    /**
     * @record
     */
    function ITdVirtualScrollBottomEvent() { }
    if (false) {
        /** @type {?} */
        ITdVirtualScrollBottomEvent.prototype.lastRow;
        /** @type {?} */
        ITdVirtualScrollBottomEvent.prototype.lastIndex;
    }
    var TdVirtualScrollContainerComponent = /** @class */ (function () {
        function TdVirtualScrollContainerComponent(_elementRef, _domSanitizer, _renderer, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._domSanitizer = _domSanitizer;
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._subs = [];
            this._bottom = new rxjs.Subject();
            this._initialized = false;
            this._totalHeight = 0;
            this._hostHeight = 0;
            this._scrollVerticalOffset = 0;
            this._fromRow = 0;
            this._toRow = 0;
            /**
             * bottom: function
             * Method to be executed when user scrolled to the last item of the list.
             * An [ITdVirtualScrollBottomEvent] event is emitted
             */
            this.bottom = new core.EventEmitter();
            /**
             * trackBy?: TrackByFunction
             * This accepts the same trackBy function [ngFor] does.
             * https://angular.io/api/core/TrackByFunction
             */
            this.trackBy = (/**
             * @param {?} index
             * @param {?} item
             * @return {?}
             */
            function (index, item) {
                return item;
            });
        }
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data;
            },
            /**
             * data: any[]
             * List of items to virtually iterate on.
             */
            set: /**
             * data: any[]
             * List of items to virtually iterate on.
             * @param {?} data
             * @return {?}
             */
            function (data) {
                this._data = data;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "virtualData", {
            get: /**
             * @return {?}
             */
            function () {
                return this._virtualData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "rowHeight", {
            get: /**
             * @return {?}
             */
            function () {
                if (this._rows && this._rows.toArray()[0]) {
                    return this._rows.toArray()[0].nativeElement.getBoundingClientRect().height;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "totalHeight", {
            get: /**
             * @return {?}
             */
            function () {
                return this._totalHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "fromRow", {
            get: /**
             * @return {?}
             */
            function () {
                return this._fromRow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "toRow", {
            get: /**
             * @return {?}
             */
            function () {
                return this._toRow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "offsetTransform", {
            get: /**
             * @return {?}
             */
            function () {
                return this._offsetTransform;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._subs.push(this._rows.changes.subscribe((/**
             * @return {?}
             */
            function () {
                _this._calculateVirtualRows();
            })));
            this._initialized = true;
            this._calculateVirtualRows();
            this._subs.push(this._bottom.pipe(operators.debounceTime(SCROLL_DEBOUNCE)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.bottom.emit({
                    lastRow: _this._data[_this._data.length - 1],
                    lastIndex: _this.toRow,
                });
            })));
        };
        /**
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var newHostHeight = this._elementRef.nativeElement.getBoundingClientRect().height;
            if (this._hostHeight !== newHostHeight) {
                this._hostHeight = newHostHeight;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
            }
        };
        /**
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this._subs) {
                this._subs.forEach((/**
                 * @param {?} sub
                 * @return {?}
                 */
                function (sub) {
                    sub.unsubscribe();
                }));
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.handleScroll = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var element = (/** @type {?} */ (event.target));
            if (element) {
                /** @type {?} */
                var verticalScroll = element.scrollTop;
                if (this._scrollVerticalOffset !== verticalScroll) {
                    this._scrollVerticalOffset = verticalScroll;
                    if (this._initialized) {
                        this._calculateVirtualRows();
                    }
                }
                if (this._initialized && this._data.length * this.rowHeight - (verticalScroll + this._hostHeight) === 0) {
                    // check to see if bottom was hit to throw the bottom event
                    this._bottom.next();
                }
            }
        };
        /**
         * Method to refresh and recalculate the virtual rows
         * e.g. after changing the [data] content
         */
        /**
         * Method to refresh and recalculate the virtual rows
         * e.g. after changing the [data] content
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.refresh = /**
         * Method to refresh and recalculate the virtual rows
         * e.g. after changing the [data] content
         * @return {?}
         */
        function () {
            this._calculateVirtualRows();
        };
        /**
         * Method to scroll to a specific row of the list.
         */
        /**
         * Method to scroll to a specific row of the list.
         * @param {?} row
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.scrollTo = /**
         * Method to scroll to a specific row of the list.
         * @param {?} row
         * @return {?}
         */
        function (row) {
            this._elementRef.nativeElement.scrollTop = row * this.rowHeight;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Method to scroll to the start of the list.
         */
        /**
         * Method to scroll to the start of the list.
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.scrollToStart = /**
         * Method to scroll to the start of the list.
         * @return {?}
         */
        function () {
            this.scrollTo(0);
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Method to scroll to the end of the list.
         */
        /**
         * Method to scroll to the end of the list.
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.scrollToEnd = /**
         * Method to scroll to the end of the list.
         * @return {?}
         */
        function () {
            this.scrollTo(this.totalHeight / this.rowHeight);
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @private
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype._calculateVirtualRows = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._data) {
                this._totalHeight = this._data.length * this.rowHeight;
                /** @type {?} */
                var fromRow = Math.floor(this._scrollVerticalOffset / this.rowHeight) - TD_VIRTUAL_OFFSET;
                this._fromRow = fromRow > 0 ? fromRow : 0;
                /** @type {?} */
                var range = Math.floor(this._hostHeight / this.rowHeight) + TD_VIRTUAL_OFFSET * 2;
                /** @type {?} */
                var toRow = range + this.fromRow;
                if (isFinite(toRow) && toRow > this._data.length) {
                    toRow = this._data.length;
                }
                else if (!isFinite(toRow)) {
                    toRow = TD_VIRTUAL_OFFSET;
                }
                this._toRow = toRow;
            }
            else {
                this._totalHeight = 0;
                this._fromRow = 0;
                this._toRow = 0;
            }
            /** @type {?} */
            var offset = 0;
            if (this._scrollVerticalOffset > TD_VIRTUAL_OFFSET * this.rowHeight) {
                offset = this.fromRow * this.rowHeight;
            }
            this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
            if (this._data) {
                this._virtualData = this.data.slice(this.fromRow, this.toRow);
            }
            // mark for check at the end of the queue so we are sure
            // that the changes will be marked
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this._changeDetectorRef.markForCheck();
            }));
        };
        TdVirtualScrollContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-virtual-scroll-container',
                        template: "<div [style.height.px]=\"totalHeight\"></div>\n<div [style.transform]=\"offsetTransform\" [style.position]=\"'absolute'\" [style.width.%]=\"100\">\n  <ng-template let-row let-index=\"index\" ngFor [ngForOf]=\"virtualData\" [ngForTrackBy]=\"trackBy\">\n    <div #rowElement [style.width.%]=\"100\">\n      <ng-template\n        *ngIf=\"_rowTemplate\"\n        [ngTemplateOutlet]=\"_rowTemplate.templateRef\"\n        [ngTemplateOutletContext]=\"{\n          row: row,\n          index: fromRow + index,\n          first: fromRow + index === 0,\n          last: fromRow + index === data.length - 1,\n          odd: (fromRow + index + 1) % 2 === 1,\n          even: (fromRow + index + 1) % 2 === 0\n        }\"\n      ></ng-template>\n    </div>\n  </ng-template>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;height:100%;width:100%;overflow:auto;position:relative}"]
                    }] }
        ];
        /** @nocollapse */
        TdVirtualScrollContainerComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: platformBrowser.DomSanitizer },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        TdVirtualScrollContainerComponent.propDecorators = {
            data: [{ type: core.Input, args: ['data',] }],
            bottom: [{ type: core.Output }],
            _rows: [{ type: core.ViewChildren, args: ['rowElement',] }],
            _rowTemplate: [{ type: core.ContentChild, args: [TdVirtualScrollRowDirective,] }],
            trackBy: [{ type: core.Input }],
            handleScroll: [{ type: core.HostListener, args: ['scroll', ['$event'],] }]
        };
        return TdVirtualScrollContainerComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._subs;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._bottom;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._initialized;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._totalHeight;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._hostHeight;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._scrollVerticalOffset;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._offsetTransform;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._fromRow;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._toRow;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._data;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._virtualData;
        /**
         * bottom: function
         * Method to be executed when user scrolled to the last item of the list.
         * An [ITdVirtualScrollBottomEvent] event is emitted
         * @type {?}
         */
        TdVirtualScrollContainerComponent.prototype.bottom;
        /** @type {?} */
        TdVirtualScrollContainerComponent.prototype._rows;
        /** @type {?} */
        TdVirtualScrollContainerComponent.prototype._rowTemplate;
        /**
         * trackBy?: TrackByFunction
         * This accepts the same trackBy function [ngFor] does.
         * https://angular.io/api/core/TrackByFunction
         * @type {?}
         */
        TdVirtualScrollContainerComponent.prototype.trackBy;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._domSanitizer;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdVirtualScrollContainerComponent.prototype._changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_VIRTUAL_SCROLL = [TdVirtualScrollRowDirective, TdVirtualScrollContainerComponent];
    var CovalentVirtualScrollModule = /** @class */ (function () {
        function CovalentVirtualScrollModule() {
        }
        CovalentVirtualScrollModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TD_VIRTUAL_SCROLL],
                        exports: [TD_VIRTUAL_SCROLL],
                    },] }
        ];
        return CovalentVirtualScrollModule;
    }());

    exports.CovalentVirtualScrollModule = CovalentVirtualScrollModule;
    exports.TdVirtualScrollContainerComponent = TdVirtualScrollContainerComponent;
    exports.TdVirtualScrollRowDirective = TdVirtualScrollRowDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-virtual-scroll.umd.js.map
