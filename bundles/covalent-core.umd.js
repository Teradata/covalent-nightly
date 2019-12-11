(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/cdk/coercion'), require('@angular/cdk/bidi'), require('@angular/cdk/portal'), require('@angular/platform-browser'), require('rxjs'), require('rxjs/operators'), require('@angular/forms'), require('@angular/animations'), require('@covalent/core/common'), require('@angular/material/input'), require('@angular/material/autocomplete'), require('@angular/material/chips'), require('@angular/cdk/keycodes'), require('@angular/material/core'), require('@angular/material/checkbox'), require('@angular/material/tooltip'), require('@angular/material/dialog'), require('@angular/cdk/drag-drop'), require('rxjs/internal/observable/fromEvent'), require('@angular/common/http'), require('@angular/cdk/scrolling'), require('@angular/material/sidenav'), require('@angular/material/toolbar'), require('@angular/material/card'), require('@angular/material/divider'), require('@angular/router'), require('@angular/cdk/overlay'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/menu'), require('@angular/material/tabs'), require('@angular/material/list'), require('@covalent/core/expansion-panel')) :
    typeof define === 'function' && define.amd ? define('@covalent/core', ['exports', '@angular/core', '@angular/common', '@angular/material/icon', '@angular/material/button', '@angular/cdk/coercion', '@angular/cdk/bidi', '@angular/cdk/portal', '@angular/platform-browser', 'rxjs', 'rxjs/operators', '@angular/forms', '@angular/animations', '@covalent/core/common', '@angular/material/input', '@angular/material/autocomplete', '@angular/material/chips', '@angular/cdk/keycodes', '@angular/material/core', '@angular/material/checkbox', '@angular/material/tooltip', '@angular/material/dialog', '@angular/cdk/drag-drop', 'rxjs/internal/observable/fromEvent', '@angular/common/http', '@angular/cdk/scrolling', '@angular/material/sidenav', '@angular/material/toolbar', '@angular/material/card', '@angular/material/divider', '@angular/router', '@angular/cdk/overlay', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/menu', '@angular/material/tabs', '@angular/material/list', '@covalent/core/expansion-panel'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = {}), global.ng.core, global.ng.common, global.ng.material.icon, global.ng.material.button, global.ng.cdk.coercion, global.ng.cdk.bidi, global.ng.cdk.portal, global.ng.platformBrowser, global.rxjs, global.rxjs.operators, global.ng.forms, global.ng.animations, global.covalent.core.common, global.ng.material.input, global.ng.material.autocomplete, global.ng.material.chips, global.ng.cdk.keycodes, global.ng.material.core, global.ng.material.checkbox, global.ng.material.tooltip, global.ng.material.dialog, global.ng.cdk['drag-drop'], global.rxjs['internal/observable/fromEvent'], global.ng.common.http, global.ng.cdk.scrolling, global.ng.material.sidenav, global.ng.material.toolbar, global.ng.material.card, global.ng.material.divider, global.ng.router, global.ng.cdk.overlay, global.ng.material['progress-bar'], global.ng.material['progress-spinner'], global.ng.material.menu, global.ng.material.tabs, global.ng.material.list, global.covalent.core['expansion-panel']));
}(this, (function (exports, core, common, icon, button, coercion, bidi, portal, platformBrowser, rxjs, operators, forms, animations, common$1, input, autocomplete, chips, keycodes, core$1, checkbox, tooltip, dialog, dragDrop, fromEvent, http, scrolling, sidenav, toolbar, card, divider, router, overlay, progressBar, progressSpinner, menu, tabs, list, expansionPanel) { 'use strict';

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
    /**
     * @record
     */
    function IPageChangeEvent() { }
    if (false) {
        /** @type {?} */
        IPageChangeEvent.prototype.page;
        /** @type {?} */
        IPageChangeEvent.prototype.maxPage;
        /** @type {?} */
        IPageChangeEvent.prototype.pageSize;
        /** @type {?} */
        IPageChangeEvent.prototype.total;
        /** @type {?} */
        IPageChangeEvent.prototype.fromRow;
        /** @type {?} */
        IPageChangeEvent.prototype.toRow;
    }
    var TdPagingBarComponent = /** @class */ (function () {
        function TdPagingBarComponent(_dir, _changeDetectorRef) {
            this._dir = _dir;
            this._changeDetectorRef = _changeDetectorRef;
            this._pageSize = 50;
            this._total = 0;
            this._page = 1;
            this._fromRow = 1;
            this._toRow = 1;
            this._initialized = false;
            this._pageLinks = [];
            this._pageLinkCount = 0;
            // special case when 2 pageLinks, detect when hit end of pages so can lead in correct direction
            this._hitEnd = false;
            // special case when 2 pageLinks, detect when hit start of pages so can lead in correct direction
            this._hitStart = false;
            /**
             * firstLast?: boolean
             * Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'
             */
            this.firstLast = true;
            /**
             * initialPage?: number
             * Sets starting page for the paging bar. Defaults to '1'
             */
            this.initialPage = 1;
            /**
             * change?: function
             * Method to be executed when page size changes or any button is clicked in the paging bar.
             * Emits an [IPageChangeEvent] implemented object.
             */
            this.change = new core.EventEmitter();
        }
        Object.defineProperty(TdPagingBarComponent.prototype, "pageLinkCount", {
            get: /**
             * @return {?}
             */
            function () {
                return this._pageLinkCount;
            },
            /**
             * pageLinkCount?: number
             * Amount of page navigation links for the paging bar. Defaults to '0'
             */
            set: /**
             * pageLinkCount?: number
             * Amount of page navigation links for the paging bar. Defaults to '0'
             * @param {?} pageLinkCount
             * @return {?}
             */
            function (pageLinkCount) {
                this._pageLinkCount = coercion.coerceNumberProperty(pageLinkCount);
                this._calculatePageLinks();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "pageSize", {
            get: /**
             * @return {?}
             */
            function () {
                return this._pageSize;
            },
            /**
             * pageSize?: number
             * Selected page size for the pagination. Defaults 50.
             */
            set: /**
             * pageSize?: number
             * Selected page size for the pagination. Defaults 50.
             * @param {?} pageSize
             * @return {?}
             */
            function (pageSize) {
                this._pageSize = coercion.coerceNumberProperty(pageSize);
                this._page = 1;
                if (this._initialized) {
                    this._handleOnChange();
                }
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "total", {
            get: /**
             * @return {?}
             */
            function () {
                return this._total;
            },
            /**
             * total: number
             * Total rows for the pagination.
             */
            set: /**
             * total: number
             * Total rows for the pagination.
             * @param {?} total
             * @return {?}
             */
            function (total) {
                this._total = coercion.coerceNumberProperty(total);
                this._calculateRows();
                this._calculatePageLinks();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "pageLinks", {
            /**
             * pageLinks: number[]
             * Returns the pageLinks in an array
             */
            get: /**
             * pageLinks: number[]
             * Returns the pageLinks in an array
             * @return {?}
             */
            function () {
                return this._pageLinks;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "range", {
            /**
             * range: string
             * Returns the range of the rows.
             */
            get: /**
             * range: string
             * Returns the range of the rows.
             * @return {?}
             */
            function () {
                return (!this._toRow ? 0 : this._fromRow) + "-" + this._toRow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "page", {
            /**
             * page: number
             * Returns the current page.
             */
            get: /**
             * page: number
             * Returns the current page.
             * @return {?}
             */
            function () {
                return this._page;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "maxPage", {
            /**
             * page: number
             * Returns the max page for the current pageSize and total.
             */
            get: /**
             * page: number
             * Returns the max page for the current pageSize and total.
             * @return {?}
             */
            function () {
                return Math.ceil(this._total / this._pageSize);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "isRTL", {
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
        TdPagingBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._page = coercion.coerceNumberProperty(this.initialPage);
            this._calculateRows();
            this._calculatePageLinks();
            this._initialized = true;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * navigateToPage?: function
         * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
         */
        /**
         * navigateToPage?: function
         * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
         * @param {?} page
         * @return {?}
         */
        TdPagingBarComponent.prototype.navigateToPage = /**
         * navigateToPage?: function
         * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (page === 1 || (page >= 1 && page <= this.maxPage)) {
                this._page = coercion.coerceNumberProperty(Math.floor(page));
                this._handleOnChange();
                return true;
            }
            return false;
        };
        /**
         * firstPage?: function
         * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
         */
        /**
         * firstPage?: function
         * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        TdPagingBarComponent.prototype.firstPage = /**
         * firstPage?: function
         * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        function () {
            return this.navigateToPage(1);
        };
        /**
         * prevPage?: function
         * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
         */
        /**
         * prevPage?: function
         * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        TdPagingBarComponent.prototype.prevPage = /**
         * prevPage?: function
         * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        function () {
            return this.navigateToPage(this._page - 1);
        };
        /**
         * nextPage?: function
         * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
         */
        /**
         * nextPage?: function
         * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        TdPagingBarComponent.prototype.nextPage = /**
         * nextPage?: function
         * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        function () {
            return this.navigateToPage(this._page + 1);
        };
        /**
         * lastPage?: function
         * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
         */
        /**
         * lastPage?: function
         * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        TdPagingBarComponent.prototype.lastPage = /**
         * lastPage?: function
         * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        function () {
            return this.navigateToPage(this.maxPage);
        };
        /**
         * @return {?}
         */
        TdPagingBarComponent.prototype.isMinPage = /**
         * @return {?}
         */
        function () {
            return this._page <= 1;
        };
        /**
         * @return {?}
         */
        TdPagingBarComponent.prototype.isMaxPage = /**
         * @return {?}
         */
        function () {
            return this._page >= this.maxPage;
        };
        /**
         * @private
         * @return {?}
         */
        TdPagingBarComponent.prototype._calculateRows = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var top = this._pageSize * this._page;
            this._fromRow = this._pageSize * (this._page - 1) + 1;
            this._toRow = this._total > top ? top : this._total;
        };
        /**
         * _calculatePageLinks?: function
         * Calculates the page links that should be shown to the user based on the current state of the paginator
         */
        /**
         * _calculatePageLinks?: function
         * Calculates the page links that should be shown to the user based on the current state of the paginator
         * @private
         * @return {?}
         */
        TdPagingBarComponent.prototype._calculatePageLinks = /**
         * _calculatePageLinks?: function
         * Calculates the page links that should be shown to the user based on the current state of the paginator
         * @private
         * @return {?}
         */
        function () {
            // special case when 2 pageLinks, detect when hit end of pages so can lead in correct direction
            if (this.isMaxPage()) {
                this._hitEnd = true;
                this._hitStart = false;
            }
            // special case when 2 pageLinks, detect when hit start of pages so can lead in correct direction
            if (this.isMinPage()) {
                this._hitEnd = false;
                this._hitStart = true;
            }
            // If the pageLinkCount goes above max possible pages based on perpage setting then reset it to maxPage
            /** @type {?} */
            var actualPageLinkCount = this.pageLinkCount;
            if (this.pageLinkCount > this.maxPage) {
                actualPageLinkCount = this.maxPage;
            }
            // reset the pageLinks array
            this._pageLinks = [];
            // fill in the array with the pageLinks based on the current selected page
            /** @type {?} */
            var middlePageLinks = Math.floor(actualPageLinkCount / 2);
            for (var x = 0; x < actualPageLinkCount; x++) {
                // don't go past the maxPage in the pageLinks
                // have to handle even and odd pageLinkCounts differently so can still lead to the next numbers
                if ((actualPageLinkCount % 2 === 0 && this.page + middlePageLinks > this.maxPage) ||
                    (actualPageLinkCount % 2 !== 0 && this.page + middlePageLinks >= this.maxPage)) {
                    this._pageLinks[x] = this.maxPage - (actualPageLinkCount - (x + 1));
                    // if the selected page is after the middle then set that page as middle and get the correct balance on left and right
                    // special handling when there are only 2 pageLinks to just drop to next if block so can lead to next numbers when moving to right
                    // when moving to the left then go into this block
                }
                else if ((actualPageLinkCount > 2 || (actualPageLinkCount <= 2 && this._hitEnd)) &&
                    this.page - middlePageLinks > 0) {
                    this._pageLinks[x] = this.page - middlePageLinks + x;
                    // if the selected page is before the middle then set the pages based on the x index leading up to and after selected page
                }
                else if (this.page - middlePageLinks <= 0) {
                    this._pageLinks[x] = x + 1;
                    // other wise just set the array in order starting from the selected page
                }
                else {
                    this._pageLinks[x] = this.page + x;
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        TdPagingBarComponent.prototype._handleOnChange = /**
         * @private
         * @return {?}
         */
        function () {
            this._calculateRows();
            this._calculatePageLinks();
            /** @type {?} */
            var event = {
                page: this._page,
                maxPage: this.maxPage,
                pageSize: this._pageSize,
                total: this._total,
                fromRow: this._fromRow,
                toRow: this._toRow,
            };
            this._changeDetectorRef.markForCheck();
            this.change.emit(event);
        };
        TdPagingBarComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'td-paging-bar',
                        template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\">\n  <ng-content></ng-content>\n  <div class=\"td-paging-bar-navigation\">\n    <button\n      mat-icon-button\n      class=\"td-paging-bar-first-page\"\n      type=\"button\"\n      *ngIf=\"firstLast\"\n      [disabled]=\"isMinPage()\"\n      (click)=\"firstPage()\"\n    >\n      <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon>\n    </button>\n    <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\">\n      <button\n        class=\"td-paging-bar-link-page\"\n        mat-icon-button\n        type=\"button\"\n        [color]=\"page === link ? 'accent' : undefined\"\n        (click)=\"navigateToPage(link)\"\n      >\n        {{ link }}\n      </button>\n    </ng-template>\n    <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon>\n    </button>\n    <button\n      mat-icon-button\n      class=\"td-paging-bar-last-page\"\n      type=\"button\"\n      *ngIf=\"firstLast\"\n      [disabled]=\"isMaxPage()\"\n      (click)=\"lastPage()\"\n    >\n      <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon>\n    </button>\n  </div>\n</div>\n",
                        styles: [":host{display:block}:host .td-paging-bar{height:48px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-paging-bar ::ng-deep>*{margin:0 10px}:host .td-paging-bar [mat-icon-button]{font-size:12px;font-weight:400}"]
                    }] }
        ];
        /** @nocollapse */
        TdPagingBarComponent.ctorParameters = function () { return [
            { type: bidi.Dir, decorators: [{ type: core.Optional }] },
            { type: core.ChangeDetectorRef }
        ]; };
        TdPagingBarComponent.propDecorators = {
            firstLast: [{ type: core.Input }],
            initialPage: [{ type: core.Input }],
            pageLinkCount: [{ type: core.Input, args: ['pageLinkCount',] }],
            pageSize: [{ type: core.Input, args: ['pageSize',] }],
            total: [{ type: core.Input, args: ['total',] }],
            change: [{ type: core.Output }]
        };
        return TdPagingBarComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._pageSize;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._total;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._page;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._fromRow;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._toRow;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._initialized;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._pageLinks;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._pageLinkCount;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._hitEnd;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._hitStart;
        /**
         * firstLast?: boolean
         * Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'
         * @type {?}
         */
        TdPagingBarComponent.prototype.firstLast;
        /**
         * initialPage?: number
         * Sets starting page for the paging bar. Defaults to '1'
         * @type {?}
         */
        TdPagingBarComponent.prototype.initialPage;
        /**
         * change?: function
         * Method to be executed when page size changes or any button is clicked in the paging bar.
         * Emits an [IPageChangeEvent] implemented object.
         * @type {?}
         */
        TdPagingBarComponent.prototype.change;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._dir;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentPagingModule = /** @class */ (function () {
        function CovalentPagingModule() {
        }
        CovalentPagingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, icon.MatIconModule, button.MatButtonModule],
                        declarations: [TdPagingBarComponent],
                        exports: [TdPagingBarComponent],
                    },] }
        ];
        return CovalentPagingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

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
            _rowTemplate: [{ type: core.ContentChild, args: [TdVirtualScrollRowDirective, { static: false },] }],
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var TdNotificationCountPositionY = {
        Top: 'top',
        Bottom: 'bottom',
        Center: 'center',
    };
    /** @enum {string} */
    var TdNotificationCountPositionX = {
        Before: 'before',
        After: 'after',
        Center: 'center',
    };
    /** @type {?} */
    var DEFAULT_NOTIFICATION_LIMIT = 99;
    var TdNotificationCountComponent = /** @class */ (function () {
        function TdNotificationCountComponent() {
            this._notifications = 0;
            this._limit = DEFAULT_NOTIFICATION_LIMIT;
            /**
             * color?: "primary" | "accent" | "warn"
             * Sets the theme color of the notification tip. Defaults to "warn"
             */
            this.color = 'warn';
        }
        Object.defineProperty(TdNotificationCountComponent.prototype, "positionX", {
            get: /**
             * @return {?}
             */
            function () {
                return this._positionX;
            },
            /**
             * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
             * Sets the X position of the notification tip.
             * Defaults to "after" if it has content, else 'center'.
             */
            set: /**
             * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
             * Sets the X position of the notification tip.
             * Defaults to "after" if it has content, else 'center'.
             * @param {?} positionX
             * @return {?}
             */
            function (positionX) {
                this._positionX = positionX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "positionY", {
            get: /**
             * @return {?}
             */
            function () {
                return this._positionY;
            },
            /**
             * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
             * Sets the Y position of the notification tip.
             * Defaults to "top" if it has content, else 'center'.
             */
            set: /**
             * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
             * Sets the Y position of the notification tip.
             * Defaults to "top" if it has content, else 'center'.
             * @param {?} positionY
             * @return {?}
             */
            function (positionY) {
                this._positionY = positionY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "notifications", {
            /**
             * notifications?: number | boolean
             * Number for the notification count. Shows component only if the input is a positive number or 'true'
             */
            set: /**
             * notifications?: number | boolean
             * Number for the notification count. Shows component only if the input is a positive number or 'true'
             * @param {?} notifications
             * @return {?}
             */
            function (notifications) {
                this._notifications = notifications;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "limit", {
            /**
             * limit?: number
             * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
             */
            set: /**
             * limit?: number
             * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
             * @param {?} limit
             * @return {?}
             */
            function (limit) {
                this._limit = limit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "hideHost", {
            get: /**
             * @return {?}
             */
            function () {
                return !this.show && !this._hasContent();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "noCount", {
            /**
             * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
             * Makes the notification tip show without a count.
             */
            get: /**
             * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
             * Makes the notification tip show without a count.
             * @return {?}
             */
            function () {
                return this._notifications === true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "notificationsDisplay", {
            /**
             * Notification display string when a count is available.
             * Anything over 99 gets set as 99+
             */
            get: /**
             * Notification display string when a count is available.
             * Anything over 99 gets set as 99+
             * @return {?}
             */
            function () {
                if (this._notifications > this._limit) {
                    return this._limit + "+";
                }
                return this._notifications.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "show", {
            /**
             * Shows notification tip only when [notifications] is true or a positive integer.
             */
            get: /**
             * Shows notification tip only when [notifications] is true or a positive integer.
             * @return {?}
             */
            function () {
                return this._notifications === true || (!isNaN((/** @type {?} */ (this._notifications))) && this._notifications > 0);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
         */
        /**
         * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
         * @return {?}
         */
        TdNotificationCountComponent.prototype.ngAfterContentInit = /**
         * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
         * @return {?}
         */
        function () {
            if (!this._positionX) {
                this.positionX = this._hasContent() ? TdNotificationCountPositionX.After : TdNotificationCountPositionX.Center;
            }
            if (!this._positionY) {
                this.positionY = this._hasContent() ? TdNotificationCountPositionY.Top : TdNotificationCountPositionY.Center;
            }
        };
        /**
         * Method to check if element has any kind of content (elements or text)
         */
        /**
         * Method to check if element has any kind of content (elements or text)
         * @private
         * @return {?}
         */
        TdNotificationCountComponent.prototype._hasContent = /**
         * Method to check if element has any kind of content (elements or text)
         * @private
         * @return {?}
         */
        function () {
            if (this.content) {
                /** @type {?} */
                var contentElement = this.content.nativeElement;
                return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
            }
            return false;
        };
        TdNotificationCountComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-notification-count',
                        template: "<div #content class=\"td-notification-content\">\n  <ng-content></ng-content>\n</div>\n<div\n  *ngIf=\"show\"\n  class=\"td-notification-count mat-{{ color }}\"\n  [class.td-notification-top]=\"positionY === 'top'\"\n  [class.td-notification-bottom]=\"positionY === 'bottom'\"\n  [class.td-notification-before]=\"positionX === 'before'\"\n  [class.td-notification-after]=\"positionX === 'after'\"\n  [class.td-notification-center-y]=\"positionY === 'center'\"\n  [class.td-notification-center-x]=\"positionX === 'center'\"\n  [class.td-notification-no-count]=\"noCount\"\n>\n  {{ noCount ? '' : notificationsDisplay }}\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{position:relative;display:block;text-align:center;min-width:40px;height:40px}:host.td-notification-hidden{min-width:0}.td-notification-count{line-height:21px;width:20px;height:20px;position:absolute;font-size:10px;font-weight:600;border-radius:50%;z-index:1}.td-notification-count.td-notification-center-x{margin-left:auto;margin-right:auto;left:0;right:0}.td-notification-count.td-notification-center-y{margin-top:auto;margin-bottom:auto;top:0;bottom:0}.td-notification-count.td-notification-top{top:0}.td-notification-count.td-notification-bottom{bottom:0}.td-notification-count.td-notification-before{left:0}.td-notification-count.td-notification-after{right:0}.td-notification-count.td-notification-no-count{width:8px;height:8px}.td-notification-count.td-notification-no-count.td-notification-top{top:8px}.td-notification-count.td-notification-no-count.td-notification-bottom{bottom:8px}.td-notification-count.td-notification-no-count.td-notification-before{left:8px}.td-notification-count.td-notification-no-count.td-notification-after{right:8px}::ng-deep [dir=rtl] .td-notification-count.td-notification-before{right:0;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-after{left:0;right:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-before{right:8px;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-after{left:8px;right:auto}.td-notification-content,.td-notification-content ::ng-deep>*{line-height:40px}"]
                    }] }
        ];
        TdNotificationCountComponent.propDecorators = {
            content: [{ type: core.ViewChild, args: ['content', { static: true },] }],
            color: [{ type: core.Input }],
            positionX: [{ type: core.Input }],
            positionY: [{ type: core.Input }],
            notifications: [{ type: core.Input }],
            limit: [{ type: core.Input }],
            hideHost: [{ type: core.HostBinding, args: ['class.td-notification-hidden',] }]
        };
        return TdNotificationCountComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdNotificationCountComponent.prototype._notifications;
        /**
         * @type {?}
         * @private
         */
        TdNotificationCountComponent.prototype._positionY;
        /**
         * @type {?}
         * @private
         */
        TdNotificationCountComponent.prototype._positionX;
        /**
         * @type {?}
         * @private
         */
        TdNotificationCountComponent.prototype._limit;
        /**
         * Div content wrapper of `ng-content`.
         * @type {?}
         */
        TdNotificationCountComponent.prototype.content;
        /**
         * color?: "primary" | "accent" | "warn"
         * Sets the theme color of the notification tip. Defaults to "warn"
         * @type {?}
         */
        TdNotificationCountComponent.prototype.color;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_NOTIFICATIONS = [TdNotificationCountComponent];
    var CovalentNotificationsModule = /** @class */ (function () {
        function CovalentNotificationsModule() {
        }
        CovalentNotificationsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TD_NOTIFICATIONS],
                        exports: [TD_NOTIFICATIONS],
                    },] }
        ];
        return CovalentNotificationsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdAutoTrimDirective = /** @class */ (function () {
        function TdAutoTrimDirective(_model) {
            this._model = _model;
        }
        /**
         * Listens to host's (blur) event and trims value.
         */
        /**
         * Listens to host's (blur) event and trims value.
         * @param {?} event
         * @return {?}
         */
        TdAutoTrimDirective.prototype.onBlur = /**
         * Listens to host's (blur) event and trims value.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this._model && this._model.value && typeof this._model.value === 'string') {
                this._model.update.emit(this._model.value.trim());
            }
        };
        TdAutoTrimDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdAutoTrim]',
                    },] }
        ];
        /** @nocollapse */
        TdAutoTrimDirective.ctorParameters = function () { return [
            { type: forms.NgModel, decorators: [{ type: core.Optional }, { type: core.Host }] }
        ]; };
        TdAutoTrimDirective.propDecorators = {
            onBlur: [{ type: core.HostListener, args: ['blur', ['$event'],] }]
        };
        return TdAutoTrimDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdAutoTrimDirective.prototype._model;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IFsDocument() { }
    if (false) {
        /** @type {?} */
        IFsDocument.prototype.fullscreenElement;
        /** @type {?} */
        IFsDocument.prototype.webkitFullscreenElement;
        /** @type {?} */
        IFsDocument.prototype.mozFullscreenElement;
        /** @type {?} */
        IFsDocument.prototype.msFullscreenElement;
        /** @type {?} */
        IFsDocument.prototype.webkitExitFullscreen;
        /** @type {?} */
        IFsDocument.prototype.mozCancelFullScreen;
        /** @type {?} */
        IFsDocument.prototype.msExitFullscreen;
    }
    var TdFullscreenDirective = /** @class */ (function () {
        function TdFullscreenDirective(_document, _el) {
            this._document = _document;
            this._el = _el;
            this.fullScreenIsActive = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        TdFullscreenDirective.prototype.fsChangeHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.fullScreenIsActive = event.srcElement === this._getFullScreenElement();
        };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype.toggleFullScreen = /**
         * @return {?}
         */
        function () {
            this._getFullScreenElement() === this._el.nativeElement ? this.exitFullScreen() : this.enterFullScreen();
        };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype.enterFullScreen = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            var nativeElement = this._el.nativeElement;
            /** @type {?} */
            var enterFullScreenMap = {
                requestFullscreen: (/**
                 * @return {?}
                 */
                function () { return nativeElement.requestFullscreen(); }),
                // Chrome
                webkitRequestFullscreen: (/**
                 * @return {?}
                 */
                function () { return nativeElement.webkitRequestFullscreen(); }),
                // Safari
                mozRequestFullScreen: (/**
                 * @return {?}
                 */
                function () { return nativeElement.mozRequestFullScreen(); }),
                // Firefox
                msRequestFullscreen: (/**
                 * @return {?}
                 */
                function () { return nativeElement.msRequestFullscreen(); }),
            };
            try {
                for (var _b = __values(Object.keys(enterFullScreenMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var handler = _c.value;
                    if (nativeElement[handler]) {
                        enterFullScreenMap[handler]();
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype.exitFullScreen = /**
         * @return {?}
         */
        function () {
            var e_2, _a;
            var _b = this, _document = _b._document, nativeElement = _b._el.nativeElement;
            /** @type {?} */
            var exitFullScreenMap = {
                exitFullscreen: (/**
                 * @return {?}
                 */
                function () { return _document.exitFullscreen(); }),
                // Chrome
                webkitExitFullscreen: (/**
                 * @return {?}
                 */
                function () { return _document.webkitExitFullscreen(); }),
                // Safari
                mozCancelFullScreen: (/**
                 * @return {?}
                 */
                function () { return _document.mozCancelFullScreen(); }),
                // Firefox
                msExitFullscreen: (/**
                 * @return {?}
                 */
                function () { return _document.msExitFullscreen(); }),
            };
            try {
                for (var _c = __values(Object.keys(exitFullScreenMap)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var handler = _d.value;
                    if (_document[handler] && this._getFullScreenElement() === nativeElement) {
                        exitFullScreenMap[handler]();
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        /**
         * @private
         * @return {?}
         */
        TdFullscreenDirective.prototype._getFullScreenElement = /**
         * @private
         * @return {?}
         */
        function () {
            var e_3, _a;
            var _document = this._document;
            /** @type {?} */
            var tdFullScreenElementMap = {
                fullscreenElement: (/**
                 * @return {?}
                 */
                function () { return _document.fullscreenElement; }),
                // Chrome, Opera
                webkitFullscreenElement: (/**
                 * @return {?}
                 */
                function () { return _document.webkitFullscreenElement; }),
                // Safari
                mozFullscreenElement: (/**
                 * @return {?}
                 */
                function () { return _document.mozFullscreenElement; }),
                // Firefox
                msFullscreenElement: (/**
                 * @return {?}
                 */
                function () { return _document.msFullscreenElement; }),
            };
            try {
                for (var _b = __values(Object.keys(tdFullScreenElementMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var props = _c.value;
                    if (_document[props]) {
                        return _document[props];
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        TdFullscreenDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdFullScreen]',
                        exportAs: 'tdFullScreen',
                    },] }
        ];
        /** @nocollapse */
        TdFullscreenDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.ElementRef }
        ]; };
        TdFullscreenDirective.propDecorators = {
            fsChangeHandler: [{ type: core.HostListener, args: ['document:fullscreenchange', ['$event'],] }, { type: core.HostListener, args: ['document:webkitfullscreenchange', ['$event'],] }, { type: core.HostListener, args: ['document:mozfullscreenchange', ['$event'],] }, { type: core.HostListener, args: ['document:msfullscreenchange', ['$event'],] }]
        };
        return TdFullscreenDirective;
    }());
    if (false) {
        /** @type {?} */
        TdFullscreenDirective.prototype.fullScreenIsActive;
        /**
         * @type {?}
         * @private
         */
        TdFullscreenDirective.prototype._document;
        /**
         * @type {?}
         * @private
         */
        TdFullscreenDirective.prototype._el;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdTimeAgoPipe = /** @class */ (function () {
        function TdTimeAgoPipe() {
        }
        /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
        TdTimeAgoPipe.prototype.transform = /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
        function (time, reference) {
            // Convert time to date object if not already
            time = new Date(time);
            /** @type {?} */
            var ref = new Date(reference);
            // If not a valid timestamp, return 'Invalid Date'
            if (!time.getTime()) {
                return 'Invalid Date';
            }
            // For unit testing, we need to be able to declare a static start time
            // for calculations, or else speed of tests can bork.
            /** @type {?} */
            var startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
            /** @type {?} */
            var diff = Math.floor((startTime - time.getTime()) / 1000);
            if (diff < 2) {
                return '1 second ago';
            }
            if (diff < 60) {
                return Math.floor(diff) + ' seconds ago';
            }
            // Minutes
            diff = diff / 60;
            if (diff < 2) {
                return '1 minute ago';
            }
            if (diff < 60) {
                return Math.floor(diff) + ' minutes ago';
            }
            // Hours
            diff = diff / 60;
            if (diff < 2) {
                return '1 hour ago';
            }
            if (diff < 24) {
                return Math.floor(diff) + ' hours ago';
            }
            // Days
            diff = diff / 24;
            if (diff < 2) {
                return '1 day ago';
            }
            if (diff < 30) {
                return Math.floor(diff) + ' days ago';
            }
            // Months
            diff = diff / 30;
            if (diff < 2) {
                return '1 month ago';
            }
            if (diff < 12) {
                return Math.floor(diff) + ' months ago';
            }
            // Years
            diff = diff / 12;
            if (diff < 2) {
                return '1 year ago';
            }
            else {
                return Math.floor(diff) + ' years ago';
            }
        };
        TdTimeAgoPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'timeAgo',
                    },] }
        ];
        return TdTimeAgoPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdTimeDifferencePipe = /** @class */ (function () {
        function TdTimeDifferencePipe() {
        }
        /**
         * @param {?} start
         * @param {?=} end
         * @return {?}
         */
        TdTimeDifferencePipe.prototype.transform = /**
         * @param {?} start
         * @param {?=} end
         * @return {?}
         */
        function (start, end) {
            /** @type {?} */
            var startTime = new Date(start);
            /** @type {?} */
            var endTime;
            if (end !== undefined) {
                endTime = new Date(end);
            }
            else {
                endTime = new Date();
            }
            if (!startTime.getTime() || !endTime.getTime()) {
                return 'Invalid Date';
            }
            /** @type {?} */
            var diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
            /** @type {?} */
            var days = Math.floor(diff / (60 * 60 * 24));
            diff = diff - days * (60 * 60 * 24);
            /** @type {?} */
            var hours = Math.floor(diff / (60 * 60));
            diff = diff - hours * (60 * 60);
            /** @type {?} */
            var minutes = Math.floor(diff / 60);
            diff -= minutes * 60;
            /** @type {?} */
            var seconds = diff;
            /** @type {?} */
            var pad = '00';
            /** @type {?} */
            var daysFormatted = '';
            if (days > 0 && days < 2) {
                daysFormatted = ' day - ';
            }
            else if (days > 1) {
                daysFormatted = ' days - ';
            }
            return ((days > 0 ? days + daysFormatted : daysFormatted) +
                pad.substring(0, pad.length - (hours + '').length) +
                hours +
                ':' +
                pad.substring(0, pad.length - (minutes + '').length) +
                minutes +
                ':' +
                pad.substring(0, pad.length - (seconds + '').length) +
                seconds);
        };
        TdTimeDifferencePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'timeDifference',
                    },] }
        ];
        return TdTimeDifferencePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdTimeUntilPipe = /** @class */ (function () {
        function TdTimeUntilPipe() {
        }
        /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
        TdTimeUntilPipe.prototype.transform = /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
        function (time, reference) {
            // Convert time to date object if not already
            time = new Date(time);
            /** @type {?} */
            var ref = new Date(reference);
            // If not a valid timestamp, return 'Invalid Date'
            if (!time.getTime()) {
                return 'Invalid Date';
            }
            // For unit testing, we need to be able to declare a static start time
            // for calculations, or else speed of tests can bork.
            /** @type {?} */
            var startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
            /** @type {?} */
            var diff = Math.floor((time.getTime() - startTime) / 1000);
            if (diff < 2) {
                return 'in 1 second';
            }
            if (diff < 60) {
                return 'in ' + Math.floor(diff) + ' seconds';
            }
            // Minutes
            diff = diff / 60;
            if (diff < 2) {
                return 'in 1 minute';
            }
            if (diff < 60) {
                return 'in ' + Math.floor(diff) + ' minutes';
            }
            // Hours
            diff = diff / 60;
            if (diff < 2) {
                return 'in 1 hour';
            }
            if (diff < 24) {
                return 'in ' + Math.floor(diff) + ' hours';
            }
            // Days
            diff = diff / 24;
            if (diff < 2) {
                return 'in 1 day';
            }
            if (diff < 30) {
                return 'in ' + Math.floor(diff) + ' days';
            }
            // Months
            diff = diff / 30;
            if (diff < 2) {
                return 'in 1 month';
            }
            if (diff < 12) {
                return 'in ' + Math.floor(diff) + ' months';
            }
            // Years
            diff = diff / 12;
            if (diff < 2) {
                return 'in 1 year';
            }
            else {
                return 'in ' + Math.floor(diff) + ' years';
            }
        };
        TdTimeUntilPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'timeUntil',
                    },] }
        ];
        return TdTimeUntilPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdBytesPipe = /** @class */ (function () {
        function TdBytesPipe() {
        }
        /* `bytes` needs to be `any` or TypeScript complains
        Tried both `number` and `number | string` */
        /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
        /**
         * @param {?} bytes
         * @param {?=} precision
         * @return {?}
         */
        TdBytesPipe.prototype.transform = /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
        /**
         * @param {?} bytes
         * @param {?=} precision
         * @return {?}
         */
        function (bytes, precision) {
            if (precision === void 0) { precision = 2; }
            if (bytes === 0) {
                return '0 B';
            }
            else if (isNaN(parseInt(bytes, 10))) {
                /* If not a valid number, return 'Invalid Number' */
                return 'Invalid Number';
            }
            /** @type {?} */
            var k = 1024;
            /** @type {?} */
            var sizes = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
            /** @type {?} */
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            // if less than 1
            if (i < 0) {
                return 'Invalid Number';
            }
            return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
        };
        TdBytesPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'bytes',
                    },] }
        ];
        return TdBytesPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDecimalBytesPipe = /** @class */ (function () {
        function TdDecimalBytesPipe() {
        }
        /* `bytes` needs to be `any` or TypeScript complains
        Tried both `number` and `number | string` */
        /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
        /**
         * @param {?} bytes
         * @param {?=} precision
         * @return {?}
         */
        TdDecimalBytesPipe.prototype.transform = /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
        /**
         * @param {?} bytes
         * @param {?=} precision
         * @return {?}
         */
        function (bytes, precision) {
            if (precision === void 0) { precision = 2; }
            if (bytes === 0) {
                return '0 B';
            }
            else if (isNaN(parseInt(bytes, 10))) {
                /* If not a valid number, return 'Invalid Number' */
                return 'Invalid Number';
            }
            /** @type {?} */
            var k = 1000;
            /** @type {?} */
            var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            /** @type {?} */
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            // if less than 1
            if (i < 0) {
                return 'Invalid Number';
            }
            return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
        };
        TdDecimalBytesPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'decimalBytes',
                    },] }
        ];
        return TdDecimalBytesPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDigitsPipe = /** @class */ (function () {
        function TdDigitsPipe(_locale) {
            if (_locale === void 0) { _locale = 'en'; }
            this._locale = _locale;
            this._decimalPipe = new common.DecimalPipe(this._locale);
        }
        /* `digits` needs to be type `digits: any` or TypeScript complains */
        /* `digits` needs to be type `digits: any` or TypeScript complains */
        /**
         * @param {?} digits
         * @param {?=} precision
         * @return {?}
         */
        TdDigitsPipe.prototype.transform = /* `digits` needs to be type `digits: any` or TypeScript complains */
        /**
         * @param {?} digits
         * @param {?=} precision
         * @return {?}
         */
        function (digits, precision) {
            if (precision === void 0) { precision = 1; }
            if (digits === 0) {
                return '0';
            }
            else if (isNaN(parseInt(digits, 10))) {
                /* If not a valid number, return the value */
                return digits;
            }
            else if (digits < 1) {
                return this._decimalPipe.transform(digits.toFixed(precision));
            }
            /** @type {?} */
            var k = 1000;
            /** @type {?} */
            var sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
            /** @type {?} */
            var i = Math.floor(Math.log(digits) / Math.log(k));
            /** @type {?} */
            var size = sizes[i];
            return (this._decimalPipe.transform(parseFloat((digits / Math.pow(k, i)).toFixed(precision))) + (size ? ' ' + size : ''));
        };
        TdDigitsPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'digits',
                    },] }
        ];
        /** @nocollapse */
        TdDigitsPipe.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
        ]; };
        return TdDigitsPipe;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdDigitsPipe.prototype._decimalPipe;
        /**
         * @type {?}
         * @private
         */
        TdDigitsPipe.prototype._locale;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdTruncatePipe = /** @class */ (function () {
        function TdTruncatePipe() {
        }
        /**
         * @param {?} text
         * @param {?} length
         * @return {?}
         */
        TdTruncatePipe.prototype.transform = /**
         * @param {?} text
         * @param {?} length
         * @return {?}
         */
        function (text, length) {
            if (typeof text !== 'string') {
                return '';
            }
            // Truncate
            /** @type {?} */
            var truncated = text.substr(0, length);
            if (text.length > length) {
                if (truncated.lastIndexOf(' ') > 0) {
                    truncated = truncated.trim();
                }
                truncated += '…';
            }
            return truncated;
        };
        TdTruncatePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'truncate',
                    },] }
        ];
        return TdTruncatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_DIRECTIVES = [TdAutoTrimDirective, TdFullscreenDirective];
    // Validators
    /** @type {?} */
    var TD_VALIDATORS = [];
    /** @type {?} */
    var TD_PIPES = [
        TdTimeAgoPipe,
        TdTimeDifferencePipe,
        TdTimeUntilPipe,
        TdBytesPipe,
        TdDecimalBytesPipe,
        TdDigitsPipe,
        TdTruncatePipe,
    ];
    /**
     * Services
     */
    var CovalentCommonModule = /** @class */ (function () {
        function CovalentCommonModule() {
        }
        CovalentCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [forms.FormsModule, common.CommonModule],
                        declarations: [TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                        exports: [forms.FormsModule, common.CommonModule, TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                    },] }
        ];
        return CovalentCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IRotateAnimation() { }
    if (false) {
        /** @type {?|undefined} */
        IRotateAnimation.prototype.degrees;
        /** @type {?|undefined} */
        IRotateAnimation.prototype.ease;
    }
    /**
     * const tdRotateAnimation
     *
     * Parameter Options:
     * * degressStart: Degrees of rotation that the dom object will end up in during the "false" state
     * * degreesEnd: Degrees of rotation that the dom object will end up in during the "true" state
     * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerates and decelerates. Defaults to ease-in.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a rotation animation.
     *
     * usage: [\@tdRotate]="{ value: true | false, params: { degreesEnd: 90 }}"
     * @type {?}
     */
    var tdRotateAnimation = animations.trigger('tdRotate', [
        animations.state('0', animations.style({
            transform: 'rotate({{ degressStart }}deg)',
        }), { params: { degressStart: 0 } }),
        animations.state('1', animations.style({
            transform: 'rotate({{ degreesEnd }}deg)',
        }), { params: { degreesEnd: 180 } }),
        animations.transition('0 <=> 1', [animations.group([animations.query('@*', animations.animateChild(), { optional: true }), animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}')])], { params: { duration: 250, delay: '0', ease: 'ease-in' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ICollapseAnimation() { }
    if (false) {
        /** @type {?|undefined} */
        ICollapseAnimation.prototype.easeOnClose;
        /** @type {?|undefined} */
        ICollapseAnimation.prototype.easeOnOpen;
    }
    /**
     * const tdCollapseAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * easeOnClose: Animation accelerates and decelerates when closing. Defaults to ease-in.
     * * easeOnOpen: Animation accelerates and decelerates when opening. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a collapse/expand animation.
     *
     * usage: [\@tdCollapse]="{ value: true | false, params: { duration: 500 }}"
     * @type {?}
     */
    var tdCollapseAnimation = animations.trigger('tdCollapse', [
        animations.state('1', animations.style({
            height: '0',
            overflow: 'hidden',
        })),
        animations.state('0', animations.style({
            height: animations.AUTO_STYLE,
            overflow: animations.AUTO_STYLE,
        })),
        animations.transition('0 => 1', [
            animations.style({
                overflow: 'hidden',
                height: animations.AUTO_STYLE,
            }),
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.style({
                    height: '0',
                    overflow: 'hidden',
                })),
            ]),
        ], { params: { duration: 150, delay: '0', ease: 'ease-in' } }),
        animations.transition('1 => 0', [
            animations.style({
                height: '0',
                overflow: 'hidden',
            }),
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.style({
                    overflow: 'hidden',
                    height: animations.AUTO_STYLE,
                })),
            ]),
        ], { params: { duration: 150, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IFadeInOutAnimation() { }
    if (false) {
        /** @type {?|undefined} */
        IFadeInOutAnimation.prototype.easeOnIn;
        /** @type {?|undefined} */
        IFadeInOutAnimation.prototype.easeOnOut;
    }
    /**
     * const tdFadeInOutAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * easeOnIn: Animation accelerates and decelerates when fading in. Defaults to ease-in.
     * * easeOnOut: Animation accelerates and decelerates when fading out. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a fade animation.
     *
     * usage: [\@tdFadeInOut]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdFadeInOutAnimation = animations.trigger('tdFadeInOut', [
        animations.state('0', animations.style({
            opacity: '0',
            visibility: 'hidden',
        })),
        animations.state('1', animations.style({
            opacity: animations.AUTO_STYLE,
            visibility: animations.AUTO_STYLE,
        })),
        animations.transition('0 => 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ easeOnIn }}'),
            ]),
        ], { params: { duration: 150, delay: '0', easeOnIn: 'ease-in' } }),
        animations.transition('1 => 0', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ easeOnOut }}'),
            ]),
        ], { params: { duration: 150, delay: '0', easeOnOut: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * const tdBounceAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a bounce animation.
     *
     * usage: [\@tdBounce]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdBounceAnimation = animations.trigger('tdBounce', [
        animations.state('0', animations.style({
            transform: 'translate3d(0, 0, 0)',
        })),
        animations.state('1', animations.style({
            transform: 'translate3d(0, 0, 0)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transform: 'translate3d(0, 0, 0)',
                        offset: 0,
                    }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transform: 'translate3d(0, 0, 0)',
                        offset: 0.2,
                    }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                        transform: 'translate3d(0, -30px, 0)',
                        offset: 0.4,
                    }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                        transform: 'translate3d(0, -30px, 0)',
                        offset: 0.43,
                    }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transform: 'translate3d(0, 0, 0)',
                        offset: 0.53,
                    }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
                        transform: 'translate3d(0, -15px, 0)',
                        offset: 0.7,
                    }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transform: 'translate3d(0, 0, 0)',
                        offset: 0.8,
                    }),
                    animations.style({ transform: 'translate3d(0, -4px, 0)', offset: 0.9 }),
                    animations.style({
                        animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        transform: 'translate3d(0, 0, 0)',
                        offset: 1.0,
                    }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * const tdFlashAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a flash animation.
     *
     * usage: [\@tdFlash]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdFlashAnimation = animations.trigger('tdFlash', [
        animations.state('0', animations.style({
            opacity: 1,
        })),
        animations.state('1', animations.style({
            opacity: 1,
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ opacity: 1, offset: 0 }),
                    animations.style({ opacity: 0, offset: 0.25 }),
                    animations.style({ opacity: 1, offset: 0.5 }),
                    animations.style({ opacity: 0, offset: 0.75 }),
                    animations.style({ opacity: 1, offset: 1.0 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * const tdHeadshakeAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a headshake animation.
     *
     * usage: [\@tdHeadshake]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdHeadshakeAnimation = animations.trigger('tdHeadshake', [
        animations.state('0', animations.style({
            transform: 'translateX(0)',
        })),
        animations.state('1', animations.style({
            transform: 'translateX(0)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ transform: 'translateX(0)', offset: 0 }),
                    animations.style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
                    animations.style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
                    animations.style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
                    animations.style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
                    animations.style({ transform: 'translateX(0)', offset: 0.5 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * const tdJelloAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a jello animation.
     *
     * usage: [\@tdJello]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdJelloAnimation = animations.trigger('tdJello', [
        animations.state('0', animations.style({
            transform: 'none',
        })),
        animations.state('1', animations.style({
            transform: 'none',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ transform: 'none', offset: 0 }),
                    animations.style({ transform: 'none', offset: 0.011 }),
                    animations.style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
                    animations.style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
                    animations.style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
                    animations.style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
                    animations.style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
                    animations.style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
                    animations.style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * const tdPulseAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a pulse animation.
     *
     * usage: [\@tdPulse]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdPulseAnimation = animations.trigger('tdPulse', [
        animations.state('0', animations.style({
            transform: 'scale3d(1, 1, 1)',
        })),
        animations.state('1', animations.style({
            transform: 'scale3d(1, 1, 1)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                    animations.style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                    animations.style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var noop = (/**
     * @return {?}
     */
    function () {
        // empty method
    });
    var ɵ0 = noop;
    /**
     * @record
     */
    function IControlValueAccessor() { }
    if (false) {
        /** @type {?} */
        IControlValueAccessor.prototype.value;
        /** @type {?} */
        IControlValueAccessor.prototype.valueChanges;
        /** @type {?} */
        IControlValueAccessor.prototype.onChange;
        /** @type {?} */
        IControlValueAccessor.prototype.onTouched;
    }
    /**
     * @record
     */
    function IHasChangeDetectorRef() { }
    if (false) {
        /** @type {?} */
        IHasChangeDetectorRef.prototype._changeDetectorRef;
    }
    /**
     * Mixin to augment a component with ngModel support.
     * @template T
     * @param {?} base
     * @param {?=} initialValue
     * @return {?}
     */
    function mixinControlValueAccessor(base, initialValue) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._value = initialValue instanceof Array ? Object.assign([], initialValue) : initialValue;
                _this.onChange = (/**
                 * @param {?} _
                 * @return {?}
                 */
                function (_) { return noop; });
                _this.onTouched = (/**
                 * @return {?}
                 */
                function () { return noop; });
                _this._subjectValueChanges = new rxjs.Subject();
                _this.valueChanges = _this._subjectValueChanges.asObservable();
                return _this;
            }
            Object.defineProperty(class_1.prototype, "value", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return this._value;
                },
                set: /**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) {
                    if (v !== this._value) {
                        this._value = v;
                        this.onChange(v);
                        this._changeDetectorRef.markForCheck();
                        this._subjectValueChanges.next(v);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {?} value
             * @return {?}
             */
            class_1.prototype.writeValue = /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.value = value;
                this._changeDetectorRef.markForCheck();
            };
            /**
             * @param {?} fn
             * @return {?}
             */
            class_1.prototype.registerOnChange = /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this.onChange = fn;
            };
            /**
             * @param {?} fn
             * @return {?}
             */
            class_1.prototype.registerOnTouched = /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this.onTouched = fn;
            };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Interface to implement when applying the disabled mixin
     * @record
     */
    function ICanDisable() { }
    if (false) {
        /** @type {?} */
        ICanDisable.prototype.disabled;
        /**
         * @param {?} v
         * @return {?}
         */
        ICanDisable.prototype.onDisabledChange = function (v) { };
    }
    /**
     * Mixin to augment a component or directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinDisabled(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._disabled = false;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "disabled", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return this._disabled;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    /** @type {?} */
                    var newValue = coercion.coerceBooleanProperty(value);
                    if (this._disabled !== newValue) {
                        this._disabled = newValue;
                        this.onDisabledChange(this._disabled);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {?} v
             * @return {?}
             */
            class_1.prototype.onDisabledChange = /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
            };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Interface to implement when applying the disabled mixin
     * @record
     */
    function ICanDisableRipple() { }
    if (false) {
        /** @type {?} */
        ICanDisableRipple.prototype.disableRipple;
        /**
         * @param {?} v
         * @return {?}
         */
        ICanDisableRipple.prototype.onDisableRippleChange = function (v) { };
    }
    /**
     * Mixin to augment a component or directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinDisableRipple(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._disableRipple = false;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "disableRipple", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return this._disableRipple;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    /** @type {?} */
                    var newValue = coercion.coerceBooleanProperty(value);
                    if (this._disableRipple !== newValue) {
                        this._disableRipple = newValue;
                        this.onDisableRippleChange(this._disableRipple);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {?} v
             * @return {?}
             */
            class_1.prototype.onDisableRippleChange = /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
            };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentValidators = /** @class */ (function () {
        function CovalentValidators() {
        }
        /**
         * @param {?} minValue
         * @return {?}
         */
        CovalentValidators.min = /**
         * @param {?} minValue
         * @return {?}
         */
        function (minValue) {
            // tslint:disable-next-line:prefer-immediate-return
            /** @type {?} */
            var func = (/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                if (!!forms.Validators.required(c) || (!minValue && minValue !== 0)) {
                    return undefined;
                }
                /** @type {?} */
                var v = c.value;
                return v < minValue ? { min: { minValue: minValue, actualValue: v } } : undefined;
            });
            return func;
        };
        /**
         * @param {?} maxValue
         * @return {?}
         */
        CovalentValidators.max = /**
         * @param {?} maxValue
         * @return {?}
         */
        function (maxValue) {
            // tslint:disable-next-line:prefer-immediate-return
            /** @type {?} */
            var func = (/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                if (!!forms.Validators.required(c) || (!maxValue && maxValue !== 0)) {
                    return undefined;
                }
                /** @type {?} */
                var v = c.value;
                return v > maxValue ? { max: { maxValue: maxValue, actualValue: v } } : undefined;
            });
            return func;
        };
        /**
         * @param {?} c
         * @return {?}
         */
        CovalentValidators.numberRequired = /**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            return Number.isNaN(c.value) ? { required: true } : undefined;
        };
        return CovalentValidators;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Assign a text value to the system clipboard. Note: Due to browser
     * security restrictions, the copy will only succeed if this method
     * is invoked as a result of a user action (eg. user button click).
     *
     * @param {?} value text value to be assigned to clipboard.
     * @return {?} boolean indicating success/failure of copy operation.
     */
    function copyToClipboard(value) {
        // Create a temporary textarea element and append to DOM
        /** @type {?} */
        var fakeTextArea = document.createElement('textarea');
        document.body.appendChild(fakeTextArea);
        // Assign value to be copied to clipboard
        fakeTextArea.value = value;
        fakeTextArea.select();
        // Copy to clipboard
        /** @type {?} */
        var success = document.execCommand('copy');
        // Remove temporary textarea
        document.body.removeChild(fakeTextArea);
        // Return boolean indicating if exec command succeeded
        return success;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Conversion function that takes an array of objects and converts
     * them to CSV format. Custom key and line separators can be specified.
     *
     * @param {?} objects list of strings in JSON format or actual objects
     * @param {?=} keySeparator optional parameter to specify custom value separator
     * @param {?=} lineSeparator optional parameter to specify custom end of line separator
     * @return {?} CSV formatted string
     */
    function convertObjectsToCSV(objects, keySeparator, lineSeparator) {
        if (keySeparator === void 0) { keySeparator = ','; }
        if (lineSeparator === void 0) { lineSeparator = '\r\n'; }
        if (!objects) {
            return '';
        }
        /** @type {?} */
        var outputString = '';
        // Iterate through array, creating one output line per object
        objects.forEach((/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        function (value, key) {
            var e_1, _a;
            /** @type {?} */
            var line = '';
            try {
                for (var _b = __values(Object.keys(objects[key])), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var index = _c.value;
                    if (line !== '') {
                        line += keySeparator;
                    }
                    if (objects[key][index] === null || objects[key][index] === undefined) {
                        objects[key][index] = '';
                    }
                    line += objects[key][index];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            outputString += "" + line + lineSeparator;
        }));
        // Append header row identifying keys into output
        if (objects[0]) {
            /** @type {?} */
            var headers = Object.keys(objects[0]).join(keySeparator);
            outputString = "" + headers + lineSeparator + outputString;
        }
        return outputString;
    }
    /**
     * Conversion function that takes a CSV representation
     * of objects and converts them to JSON.
     * The first row in the input must be the object keys.
     * Custom key separator and line separator can be specified.
     * Indentation size for output JSON can be specified.
     *
     * @param {?} csv list of strings in JSON format or actual objects
     * @param {?=} keySeparator optional parameter to specify custom value separator
     * @param {?=} lineSeparator optional parameter to specify custom end of line separator
     * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2.
     * @return {?} JSON formatted string
     */
    function convertCSVToJSON(csv, keySeparator, lineSeparator, indent) {
        if (keySeparator === void 0) { keySeparator = ','; }
        if (lineSeparator === void 0) { lineSeparator = '\r\n'; }
        if (indent === void 0) { indent = 2; }
        if (!csv) {
            return '';
        }
        /** @type {?} */
        var csvArray = csv.split(lineSeparator);
        // Input CSV must have a minimum of two rows
        if (csvArray.length < 2) {
            return '';
        }
        /** @type {?} */
        var newObjects = [];
        // Extract object keys from header row
        /** @type {?} */
        var keys = csvArray[0].split(keySeparator);
        // Iterate through array, creating one output line per object
        for (var i = 1; i < csvArray.length; i++) {
            /** @type {?} */
            var newObject = {};
            /** @type {?} */
            var values = csvArray[i].split(keySeparator);
            if (values.length !== keys.length) {
                continue;
            }
            for (var j = 0; j < keys.length; j++) {
                newObject[keys[j]] = values[j];
            }
            newObjects.push(newObject);
        }
        return formatJSON(newObjects, indent);
    }
    /**
     * Convert object to JSON using stringify. Indentation size for output JSON can be specified.
     *
     * @param {?} json object to be converted
     * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2.
     * @return {?}
     */
    function formatJSON(json, indent) {
        if (indent === void 0) { indent = 2; }
        return JSON.stringify(json, undefined, indent);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Download CSV content to the specified file with .csv extension
     * appended to the provided base file name.
     *
     * @param {?} fileBaseName base name of destination file
     * @param {?} csv CSV contents
     * @return {?}
     */
    function downloadCSV(fileBaseName, csv) {
        downloadFile(fileBaseName + ".csv", csv, 'text/csv');
    }
    /**
     * Download JSON content to the specified file with .json extension
     * appended to the provided base file name.
     *
     * @param {?} fileBaseName base name of destination file
     * @param {?} json JSON contents
     * @param {?=} format indicates if JSON should be prettied
     * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2
     * @return {?}
     */
    function downloadJSON(fileBaseName, json, format, indent) {
        if (format === void 0) { format = false; }
        if (indent === void 0) { indent = 2; }
        downloadFile(fileBaseName + ".json", format ? formatJSON(JSON.parse(json), indent) : json, 'application/json');
    }
    /**
     * Convert objects to CSV format and download to file with .csv
     * extension appended to the provided base file name. Custom key
     * separator and line separator can be specified.
     *
     * @param {?} fileBaseName base name of destination file
     * @param {?} objects object array to be converted to CSV format
     *   prior to writing to download destination
     * @param {?=} keySeparator optional parameter to specify custom value separator
     * @param {?=} lineSeparator optional parameter to specify custom end of line separator
     * @return {?}
     */
    function downloadObjectsToCSV(fileBaseName, objects, keySeparator, lineSeparator) {
        if (keySeparator === void 0) { keySeparator = ','; }
        if (lineSeparator === void 0) { lineSeparator = '\r\n'; }
        downloadFile(fileBaseName + ".csv", convertObjectsToCSV(objects, keySeparator, lineSeparator), 'text/csv');
    }
    /**
     * Convert objects to JSON format and download to file with .json
     * extension appended to the provided base file name.
     *
     * @param {?} fileBaseName base name of destination file
     * @param {?} objects object array to be converted to JSON format
     *   prior to writing to download destination
     * @param {?=} indent optional parameter indicating space indentation for pretty output. Default is 2
     * @return {?}
     */
    function downloadObjectsToJSON(fileBaseName, objects, indent) {
        if (indent === void 0) { indent = 2; }
        downloadFile(fileBaseName + ".json", formatJSON(objects, indent), 'application/json');
    }
    /**
     * Download string content to the specified file with desired mime type.
     *
     * @param {?} fileName full filename (including appropriate extension) of destination file
     * @param {?} contents string contents to be written to download destination
     * @param {?=} mimeType mime type appropriate to file content to support consumption of destination file
     * @return {?}
     */
    function downloadFile(fileName, contents, mimeType) {
        if (mimeType === void 0) { mimeType = 'text/plain'; }
        if (!fileName || !contents) {
            return;
        }
        // Create blob object and assign URL
        /** @type {?} */
        var blob = new Blob([contents], { type: mimeType });
        /** @type {?} */
        var url = window.URL.createObjectURL(blob);
        // Construct anchor for URL, append to DOM, click and cleanup.
        /** @type {?} */
        var a = document.createElement('a');
        a.setAttribute('style', 'display: none');
        a.setAttribute('download', fileName);
        a.href = url;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Read file as UTF-8 text. Return string contents on read completion.
     *
     * @param {?} file filename or File object
     * @return {?} promise that resolves to file content string
     */
    function readFile(file) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            /** @type {?} */
            var reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = (/**
             * @return {?}
             */
            function () {
                resolve((/** @type {?} */ (reader.result)));
            });
        }));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdMessageContainerDirective = /** @class */ (function () {
        function TdMessageContainerDirective(viewContainer) {
            this.viewContainer = viewContainer;
        }
        TdMessageContainerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdMessageContainer]',
                    },] }
        ];
        /** @nocollapse */
        TdMessageContainerDirective.ctorParameters = function () { return [
            { type: core.ViewContainerRef }
        ]; };
        return TdMessageContainerDirective;
    }());
    if (false) {
        /** @type {?} */
        TdMessageContainerDirective.prototype.viewContainer;
    }
    var TdMessageComponent = /** @class */ (function () {
        function TdMessageComponent(_renderer, _changeDetectorRef, _elementRef) {
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._opened = true;
            this._hidden = false;
            this._animating = false;
            this._initialized = false;
            /**
             * icon?: string
             *
             * The icon to be displayed before the title.
             * Defaults to `info_outline` icon
             */
            this.icon = 'info_outline';
            this._renderer.addClass(this._elementRef.nativeElement, 'td-message');
        }
        Object.defineProperty(TdMessageComponent.prototype, "collapsedAnimation", {
            /**
             * Binding host to tdCollapse animation
             */
            get: /**
             * Binding host to tdCollapse animation
             * @return {?}
             */
            function () {
                return { value: !this._opened, duration: 100 };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "hidden", {
            /**
             * Binding host to display style when hidden
             */
            get: /**
             * Binding host to display style when hidden
             * @return {?}
             */
            function () {
                return this._hidden ? 'none' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () {
                return this._color;
            },
            /**
             * color?: primary | accent | warn
             *
             * Sets the color of the message.
             * Can also use any material color: purple | light-blue, etc.
             */
            set: /**
             * color?: primary | accent | warn
             *
             * Sets the color of the message.
             * Can also use any material color: purple | light-blue, etc.
             * @param {?} color
             * @return {?}
             */
            function (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._renderer.removeClass(this._elementRef.nativeElement, 'bgc-' + this._color + '-100');
                this._renderer.removeClass(this._elementRef.nativeElement, 'tc-' + this._color + '-700');
                if (color === 'primary' || color === 'accent' || color === 'warn') {
                    this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + color);
                }
                else {
                    this._renderer.addClass(this._elementRef.nativeElement, 'bgc-' + color + '-100');
                    this._renderer.addClass(this._elementRef.nativeElement, 'tc-' + color + '-700');
                }
                this._color = color;
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "opened", {
            get: /**
             * @return {?}
             */
            function () {
                return this._opened;
            },
            /**
             * opened?: boolean
             *
             * Shows or hiddes the message depending on its value.
             * Defaults to 'true'.
             */
            set: /**
             * opened?: boolean
             *
             * Shows or hiddes the message depending on its value.
             * Defaults to 'true'.
             * @param {?} opened
             * @return {?}
             */
            function (opened) {
                if (this._initialized) {
                    if (opened) {
                        this.open();
                    }
                    else {
                        this.close();
                    }
                }
                else {
                    this._opened = opened;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Detach element when close animation is finished to set animating state to false
         * hidden state to true and detach element from DOM
         */
        /**
         * Detach element when close animation is finished to set animating state to false
         * hidden state to true and detach element from DOM
         * @return {?}
         */
        TdMessageComponent.prototype.animationDoneListener = /**
         * Detach element when close animation is finished to set animating state to false
         * hidden state to true and detach element from DOM
         * @return {?}
         */
        function () {
            if (!this._opened) {
                this._hidden = true;
                this._detach();
            }
            this._animating = false;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Initializes the component and attaches the content.
         */
        /**
         * Initializes the component and attaches the content.
         * @return {?}
         */
        TdMessageComponent.prototype.ngAfterViewInit = /**
         * Initializes the component and attaches the content.
         * @return {?}
         */
        function () {
            var _this = this;
            Promise.resolve(undefined).then((/**
             * @return {?}
             */
            function () {
                if (_this._opened) {
                    _this._attach();
                }
                _this._initialized = true;
            }));
        };
        /**
         * Renders the message on screen
         * Validates if there is an animation currently and if its already opened
         */
        /**
         * Renders the message on screen
         * Validates if there is an animation currently and if its already opened
         * @return {?}
         */
        TdMessageComponent.prototype.open = /**
         * Renders the message on screen
         * Validates if there is an animation currently and if its already opened
         * @return {?}
         */
        function () {
            if (!this._opened && !this._animating) {
                this._opened = true;
                this._attach();
                this._startAnimationState();
            }
        };
        /**
         * Removes the message content from screen.
         * Validates if there is an animation currently and if its already closed
         */
        /**
         * Removes the message content from screen.
         * Validates if there is an animation currently and if its already closed
         * @return {?}
         */
        TdMessageComponent.prototype.close = /**
         * Removes the message content from screen.
         * Validates if there is an animation currently and if its already closed
         * @return {?}
         */
        function () {
            if (this._opened && !this._animating) {
                this._opened = false;
                this._startAnimationState();
            }
        };
        /**
         * Toggles between open and close depending on state.
         */
        /**
         * Toggles between open and close depending on state.
         * @return {?}
         */
        TdMessageComponent.prototype.toggle = /**
         * Toggles between open and close depending on state.
         * @return {?}
         */
        function () {
            if (this._opened) {
                this.close();
            }
            else {
                this.open();
            }
        };
        /**
         * Method to set the state before starting an animation
         */
        /**
         * Method to set the state before starting an animation
         * @private
         * @return {?}
         */
        TdMessageComponent.prototype._startAnimationState = /**
         * Method to set the state before starting an animation
         * @private
         * @return {?}
         */
        function () {
            this._animating = true;
            this._hidden = false;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Method to attach template to DOM
         */
        /**
         * Method to attach template to DOM
         * @private
         * @return {?}
         */
        TdMessageComponent.prototype._attach = /**
         * Method to attach template to DOM
         * @private
         * @return {?}
         */
        function () {
            this._childElement.viewContainer.createEmbeddedView(this._template);
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Method to detach template from DOM
         */
        /**
         * Method to detach template from DOM
         * @private
         * @return {?}
         */
        TdMessageComponent.prototype._detach = /**
         * Method to detach template from DOM
         * @private
         * @return {?}
         */
        function () {
            this._childElement.viewContainer.clear();
            this._changeDetectorRef.markForCheck();
        };
        TdMessageComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-message',
                        template: "<div tdMessageContainer></div>\n<ng-template>\n  <div class=\"td-message-wrapper\">\n    <mat-icon class=\"td-message-icon\">{{ icon }}</mat-icon>\n    <div class=\"td-message-labels\">\n      <div *ngIf=\"label\" class=\"td-message-label\">{{ label }}</div>\n      <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{ sublabel }}</div>\n    </div>\n    <ng-content select=\"[td-message-actions]\"></ng-content>\n  </div>\n</ng-template>\n",
                        animations: [common$1.tdCollapseAnimation],
                        styles: [":host{display:block}:host .td-message-wrapper{padding:8px 16px;min-height:52px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-message-wrapper .td-message-labels{-webkit-box-flex:1;-ms-flex:1;flex:1}.td-message-icon{margin-right:16px}::ng-deep [dir=rtl] .td-message-icon{margin-left:16px;margin-right:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdMessageComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef }
        ]; };
        TdMessageComponent.propDecorators = {
            _childElement: [{ type: core.ViewChild, args: [TdMessageContainerDirective, { static: true },] }],
            _template: [{ type: core.ViewChild, args: [core.TemplateRef, { static: false },] }],
            collapsedAnimation: [{ type: core.HostBinding, args: ['@tdCollapse',] }],
            hidden: [{ type: core.HostBinding, args: ['style.display',] }],
            label: [{ type: core.Input }],
            sublabel: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            color: [{ type: core.Input, args: ['color',] }],
            opened: [{ type: core.Input, args: ['opened',] }],
            animationDoneListener: [{ type: core.HostListener, args: ['@tdCollapse.done',] }]
        };
        return TdMessageComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._color;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._opened;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._hidden;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._animating;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._initialized;
        /** @type {?} */
        TdMessageComponent.prototype._childElement;
        /** @type {?} */
        TdMessageComponent.prototype._template;
        /**
         * label: string
         *
         * Sets the label of the message.
         * @type {?}
         */
        TdMessageComponent.prototype.label;
        /**
         * sublabel?: string
         *
         * Sets the sublabel of the message.
         * @type {?}
         */
        TdMessageComponent.prototype.sublabel;
        /**
         * icon?: string
         *
         * The icon to be displayed before the title.
         * Defaults to `info_outline` icon
         * @type {?}
         */
        TdMessageComponent.prototype.icon;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_MESSAGE = [TdMessageComponent, TdMessageContainerDirective];
    var CovalentMessageModule = /** @class */ (function () {
        function CovalentMessageModule() {
        }
        CovalentMessageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, icon.MatIconModule],
                        declarations: [TD_MESSAGE],
                        exports: [TD_MESSAGE],
                    },] }
        ];
        return CovalentMessageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdChipDirective = /** @class */ (function (_super) {
        __extends(TdChipDirective, _super);
        function TdChipDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdChipDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-chip]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdChipDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        return TdChipDirective;
    }(portal.TemplatePortalDirective));
    var TdAutocompleteOptionDirective = /** @class */ (function (_super) {
        __extends(TdAutocompleteOptionDirective, _super);
        function TdAutocompleteOptionDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdAutocompleteOptionDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-autocomplete-option]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdAutocompleteOptionDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        return TdAutocompleteOptionDirective;
    }(portal.TemplatePortalDirective));
    var TdChipsBase = /** @class */ (function () {
        function TdChipsBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdChipsBase;
    }());
    if (false) {
        /** @type {?} */
        TdChipsBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdChipsMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdChipsBase), []);
    var TdChipsComponent = /** @class */ (function (_super) {
        __extends(TdChipsComponent, _super);
        function TdChipsComponent(_elementRef, _renderer, _document, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._elementRef = _elementRef;
            _this._renderer = _renderer;
            _this._document = _document;
            _this._outsideClickSubs = rxjs.Subscription.EMPTY;
            _this._inputValueChangesSubs = rxjs.Subscription.EMPTY;
            _this._isMousedown = false;
            _this._length = 0;
            _this._stacked = false;
            _this._requireMatch = false;
            _this._color = 'primary';
            _this._inputPosition = 'after';
            _this._chipAddition = true;
            _this._chipRemoval = true;
            _this._focused = false;
            _this._required = false;
            _this._tabIndex = 0;
            _this._touchendDebounce = 100;
            _this._internalClick = false;
            _this._internalActivateOption = false;
            /**
             * FormControl for the matInput element.
             */
            _this.inputControl = new forms.FormControl();
            /**
             * debounce?: number
             * Debounce timeout between keypresses. Defaults to 200.
             */
            _this.debounce = 200;
            /**
             * add?: function
             * Method to be executed when a chip is added.
             * Sends chip value as event.
             */
            _this.add = new core.EventEmitter();
            /**
             * remove?: function
             * Method to be executed when a chip is removed.
             * Sends chip value as event.
             */
            _this.remove = new core.EventEmitter();
            /**
             * inputChange?: function
             * Method to be executed when the value in the autocomplete input changes.
             * Sends string value as event.
             */
            _this.inputChange = new core.EventEmitter();
            /**
             * chipFocus?: function
             * Method to be executed when a chip is focused.
             * Sends chip value as event.
             */
            _this.chipFocus = new core.EventEmitter();
            /**
             * blur?: function
             * Method to be executed when a chip is blurred.
             * Sends chip value as event.
             */
            _this.chipBlur = new core.EventEmitter();
            /**
             * compareWith? function
             * Function used to check whether a chip value already exists.
             * Defaults to strict equality comparison ===
             */
            _this.compareWith = (/**
             * @param {?} o1
             * @param {?} o2
             * @return {?}
             */
            function (o1, o2) {
                return o1 === o2;
            });
            _this._renderer.addClass(_this._elementRef.nativeElement, 'mat-' + _this._color);
            return _this;
        }
        Object.defineProperty(TdChipsComponent.prototype, "focused", {
            /**
             * Flag that is true when autocomplete is focused.
             */
            get: /**
             * Flag that is true when autocomplete is focused.
             * @return {?}
             */
            function () {
                return this._focused;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () {
                return this._items;
            },
            /**
             * items?: any[]
             * Renders the `mat-autocomplete` with the provided list to display as options.
             */
            set: /**
             * items?: any[]
             * Renders the `mat-autocomplete` with the provided list to display as options.
             * @param {?} items
             * @return {?}
             */
            function (items) {
                this._items = items;
                this._setFirstOptionActive();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "stacked", {
            get: /**
             * @return {?}
             */
            function () {
                return this._stacked;
            },
            /**
             * stacked?: boolean
             * Set stacked or horizontal chips depending on value.
             * Defaults to false.
             */
            set: /**
             * stacked?: boolean
             * Set stacked or horizontal chips depending on value.
             * Defaults to false.
             * @param {?} stacked
             * @return {?}
             */
            function (stacked) {
                this._stacked = coercion.coerceBooleanProperty(stacked);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "inputPosition", {
            get: /**
             * @return {?}
             */
            function () {
                return this._inputPosition;
            },
            /**
             * inputPosition?: 'before' | 'after'
             * Set input position before or after the chips.
             * Defaults to 'after'.
             */
            set: /**
             * inputPosition?: 'before' | 'after'
             * Set input position before or after the chips.
             * Defaults to 'after'.
             * @param {?} inputPosition
             * @return {?}
             */
            function (inputPosition) {
                this._inputPosition = inputPosition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "requireMatch", {
            get: /**
             * @return {?}
             */
            function () {
                return this._requireMatch;
            },
            /**
             * requireMatch?: boolean
             * Blocks custom inputs and only allows selections from the autocomplete list.
             */
            set: /**
             * requireMatch?: boolean
             * Blocks custom inputs and only allows selections from the autocomplete list.
             * @param {?} requireMatch
             * @return {?}
             */
            function (requireMatch) {
                this._requireMatch = coercion.coerceBooleanProperty(requireMatch);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "required", {
            get: /**
             * @return {?}
             */
            function () {
                return this._required;
            },
            /**
             * required?: boolean
             * Value is set to true if at least one chip is needed
             * Defaults to false
             */
            set: /**
             * required?: boolean
             * Value is set to true if at least one chip is needed
             * Defaults to false
             * @param {?} required
             * @return {?}
             */
            function (required) {
                this._required = coercion.coerceBooleanProperty(required);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "chipAddition", {
            get: /**
             * @return {?}
             */
            function () {
                return this._chipAddition;
            },
            /**
             * chipAddition?: boolean
             * Disables the ability to add chips. When setting disabled as true, this will be overriden.
             * Defaults to true.
             */
            set: /**
             * chipAddition?: boolean
             * Disables the ability to add chips. When setting disabled as true, this will be overriden.
             * Defaults to true.
             * @param {?} chipAddition
             * @return {?}
             */
            function (chipAddition) {
                this._chipAddition = chipAddition;
                this._toggleInput();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "canAddChip", {
            /**
             * Checks if not in disabled state and if chipAddition is set to 'true'
             * States if a chip can be added and if the input is available
             */
            get: /**
             * Checks if not in disabled state and if chipAddition is set to 'true'
             * States if a chip can be added and if the input is available
             * @return {?}
             */
            function () {
                return this.chipAddition && !this.disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "chipRemoval", {
            get: /**
             * @return {?}
             */
            function () {
                return this._chipRemoval;
            },
            /**
             * chipRemoval?: boolean
             * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
             * When setting disabled as true, this will be overriden to false.
             */
            set: /**
             * chipRemoval?: boolean
             * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
             * When setting disabled as true, this will be overriden to false.
             * @param {?} chipRemoval
             * @return {?}
             */
            function (chipRemoval) {
                this._chipRemoval = chipRemoval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "canRemoveChip", {
            /**
             * Checks if not in disabled state and if chipRemoval is set to 'true'
             * States if a chip can be removed
             */
            get: /**
             * Checks if not in disabled state and if chipRemoval is set to 'true'
             * States if a chip can be removed
             * @return {?}
             */
            function () {
                return this.chipRemoval && !this.disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "displayPlaceHolder", {
            /**
             * returns the display placeholder
             */
            get: /**
             * returns the display placeholder
             * @return {?}
             */
            function () {
                if (!this.canAddChip) {
                    return '';
                }
                return this._required ? this.placeholder + " *" : this.placeholder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () {
                return this._color;
            },
            /**
             * color?: 'primary' | 'accent' | 'warn'
             * Sets the color for the input and focus/selected state of the chips.
             * Defaults to 'primary'
             */
            set: /**
             * color?: 'primary' | 'accent' | 'warn'
             * Sets the color for the input and focus/selected state of the chips.
             * Defaults to 'primary'
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
        Object.defineProperty(TdChipsComponent.prototype, "tabIndex", {
            /**
             * Hostbinding to set the a11y of the TdChipsComponent depending on its state
             */
            get: /**
             * Hostbinding to set the a11y of the TdChipsComponent depending on its state
             * @return {?}
             */
            function () {
                return this.disabled ? -1 : this._tabIndex;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listens to host focus event to act on it
         */
        /**
         * Listens to host focus event to act on it
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.focusListener = /**
         * Listens to host focus event to act on it
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // should only focus if its not via mousedown to prevent clashing with autocomplete
            if (!this._isMousedown) {
                this.focus();
            }
            event.preventDefault();
        };
        /**
         * Listens to host mousedown event to act on it
         */
        /**
         * Listens to host mousedown event to act on it
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.mousedownListener = /**
         * Listens to host mousedown event to act on it
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var _this = this;
            // sets a flag to know if there was a mousedown and then it returns it back to false
            this._isMousedown = true;
            rxjs.timer()
                .toPromise()
                .then((/**
             * @return {?}
             */
            function () {
                _this._isMousedown = false;
            }));
        };
        /**
         * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
         * doesnt close automatically.
         */
        /**
         * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
         * doesnt close automatically.
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.clickListener = /**
         * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
         * doesnt close automatically.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var clickTarget = (/** @type {?} */ (event.target));
            if (clickTarget === this._elementRef.nativeElement || clickTarget.className.indexOf('td-chips-wrapper') > -1) {
                this.focus();
                event.preventDefault();
                event.stopPropagation();
            }
        };
        /**
         * Listens to host keydown event to act on it depending on the keypress
         */
        /**
         * Listens to host keydown event to act on it depending on the keypress
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.keydownListener = /**
         * Listens to host keydown event to act on it depending on the keypress
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var _this = this;
            switch (event.keyCode) {
                case keycodes.TAB:
                    // if tabing out, then unfocus the component
                    rxjs.timer()
                        .toPromise()
                        .then((/**
                     * @return {?}
                     */
                    function () {
                        _this.removeFocusedState();
                    }));
                    break;
                case keycodes.ESCAPE:
                    if (this._inputChild.focused) {
                        this._nativeInput.nativeElement.blur();
                        this.removeFocusedState();
                        this._closeAutocomplete();
                    }
                    else {
                        this.focus();
                    }
                    break;
                default:
                // default
            }
        };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._inputValueChangesSubs = this.inputControl.valueChanges
                .pipe(operators.debounceTime(this.debounce))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.inputChange.emit(value ? value : '');
            }));
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this._watchOutsideClick();
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
        function () {
            // Throw onChange event only if array changes size.
            if (this.value && this.value.length !== this._length) {
                this._length = this.value.length;
                this.onChange(this.value);
            }
        };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._outsideClickSubs.unsubscribe();
            this._inputValueChangesSubs.unsubscribe();
        };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype._setInternalClick = /**
         * @return {?}
         */
        function () {
            this._internalClick = true;
        };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdChipsComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._toggleInput();
        };
        /**
         * Method that is executed when trying to create a new chip from the autocomplete.
         * It check if [requireMatch] is enabled, and tries to add the first active option
         * else if just adds the value thats on the input
         * returns 'true' if successful, 'false' if it fails.
         */
        /**
         * Method that is executed when trying to create a new chip from the autocomplete.
         * It check if [requireMatch] is enabled, and tries to add the first active option
         * else if just adds the value thats on the input
         * returns 'true' if successful, 'false' if it fails.
         * @return {?}
         */
        TdChipsComponent.prototype._handleAddChip = /**
         * Method that is executed when trying to create a new chip from the autocomplete.
         * It check if [requireMatch] is enabled, and tries to add the first active option
         * else if just adds the value thats on the input
         * returns 'true' if successful, 'false' if it fails.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value;
            if (this.requireMatch) {
                /** @type {?} */
                var selectedOptions = this._options.toArray().filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return option.active;
                }));
                if (selectedOptions.length > 0) {
                    value = selectedOptions[0].value;
                    selectedOptions[0].setInactiveStyles();
                }
                if (!value) {
                    return false;
                }
            }
            else {
                // if there is a selection, then use that
                // else use the input value as chip
                if (this._autocompleteTrigger.activeOption) {
                    value = this._autocompleteTrigger.activeOption.value;
                    this._autocompleteTrigger.activeOption.setInactiveStyles();
                }
                else {
                    value = this._inputChild.value;
                    if (value.trim() === '') {
                        return false;
                    }
                }
            }
            return this.addChip(value);
        };
        /**
         * Method thats exectuted when trying to add a value as chip
         * returns 'true' if successful, 'false' if it fails.
         */
        /**
         * Method thats exectuted when trying to add a value as chip
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} value
         * @return {?}
         */
        TdChipsComponent.prototype.addChip = /**
         * Method thats exectuted when trying to add a value as chip
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /**
             * add a debounce ms delay when reopening the autocomplete to give it time
             * to rerender the next list and at the correct spot
             */
            var _this = this;
            this._closeAutocomplete();
            rxjs.timer(this.debounce)
                .toPromise()
                .then((/**
             * @return {?}
             */
            function () {
                _this.setFocusedState();
                _this._setFirstOptionActive();
                _this._openAutocomplete();
            }));
            this.inputControl.setValue('');
            // check if value is already part of the model
            if (this.value.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.compareWith(item, value); })) > -1) {
                return false;
            }
            this.value.push(value);
            this.add.emit(value);
            this.onChange(this.value);
            this._changeDetectorRef.markForCheck();
            return true;
        };
        /**
         * Method that is executed when trying to remove a chip.
         * returns 'true' if successful, 'false' if it fails.
         */
        /**
         * Method that is executed when trying to remove a chip.
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} index
         * @return {?}
         */
        TdChipsComponent.prototype.removeChip = /**
         * Method that is executed when trying to remove a chip.
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** @type {?} */
            var removedValues = this.value.splice(index, 1);
            if (removedValues.length === 0) {
                return false;
            }
            /**
             * Checks if deleting last single chip, to focus input afterwards
             * Else check if its not the last chip of the list to focus the next one.
             */
            if (index === this._totalChips - 1 && index === 0) {
                this._inputChild.focus();
            }
            else if (index < this._totalChips - 1) {
                this._focusChip(index + 1);
            }
            else if (index > 0) {
                this._focusChip(index - 1);
            }
            this.remove.emit(removedValues[0]);
            this.onChange(this.value);
            this.inputControl.setValue('');
            this._changeDetectorRef.markForCheck();
            return true;
        };
        /**
         * Sets blur of chip and sends out event
         */
        /**
         * Sets blur of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        TdChipsComponent.prototype._handleChipBlur = /**
         * Sets blur of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        function (event, value) {
            this.chipBlur.emit(value);
        };
        /**
         * Sets focus of chip and sends out event
         */
        /**
         * Sets focus of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        TdChipsComponent.prototype._handleChipFocus = /**
         * Sets focus of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        function (event, value) {
            this.setFocusedState();
            this.chipFocus.emit(value);
        };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype._handleFocus = /**
         * @return {?}
         */
        function () {
            this.setFocusedState();
            this._setFirstOptionActive();
            return true;
        };
        /**
         * Sets focus state of the component
         */
        /**
         * Sets focus state of the component
         * @return {?}
         */
        TdChipsComponent.prototype.setFocusedState = /**
         * Sets focus state of the component
         * @return {?}
         */
        function () {
            if (!this.disabled) {
                this._focused = true;
                this._tabIndex = -1;
                this._changeDetectorRef.markForCheck();
            }
        };
        /**
         * Removes focus state of the component
         */
        /**
         * Removes focus state of the component
         * @return {?}
         */
        TdChipsComponent.prototype.removeFocusedState = /**
         * Removes focus state of the component
         * @return {?}
         */
        function () {
            this._focused = false;
            this._tabIndex = 0;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Programmatically focus the input or first chip. Since its the component entry point
         * depending if a user can add or remove chips
         */
        /**
         * Programmatically focus the input or first chip. Since its the component entry point
         * depending if a user can add or remove chips
         * @return {?}
         */
        TdChipsComponent.prototype.focus = /**
         * Programmatically focus the input or first chip. Since its the component entry point
         * depending if a user can add or remove chips
         * @return {?}
         */
        function () {
            if (this.canAddChip) {
                this._inputChild.focus();
            }
            else if (!this.disabled) {
                this._focusFirstChip();
            }
        };
        /**
         * Passes relevant input key presses.
         */
        /**
         * Passes relevant input key presses.
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype._inputKeydown = /**
         * Passes relevant input key presses.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.keyCode) {
                case keycodes.UP_ARROW:
                    /**
                     * Since the first item is highlighted on [requireMatch], we need to inactivate it
                     * when pressing the up key
                     */
                    if (this.requireMatch) {
                        /** @type {?} */
                        var length_1 = this._options.length;
                        if (length_1 > 1 && this._options.toArray()[0].active && this._internalActivateOption) {
                            this._options.toArray()[0].setInactiveStyles();
                            this._internalActivateOption = false;
                            // prevent default window scrolling
                            event.preventDefault();
                        }
                    }
                    break;
                case keycodes.LEFT_ARROW:
                case keycodes.DELETE:
                case keycodes.BACKSPACE:
                    this._closeAutocomplete();
                    /** Check to see if input is empty when pressing left arrow to move to the last chip */
                    if (!this._inputChild.value) {
                        this._focusLastChip();
                        // prevent default window scrolling
                        event.preventDefault();
                    }
                    break;
                case keycodes.RIGHT_ARROW:
                    this._closeAutocomplete();
                    /** Check to see if input is empty when pressing right arrow to move to the first chip */
                    if (!this._inputChild.value) {
                        this._focusFirstChip();
                        // prevent default window scrolling
                        event.preventDefault();
                    }
                    break;
                default:
                // default
            }
        };
        /**
         * Passes relevant chip key presses.
         */
        /**
         * Passes relevant chip key presses.
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        TdChipsComponent.prototype._chipKeydown = /**
         * Passes relevant chip key presses.
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        function (event, index) {
            switch (event.keyCode) {
                case keycodes.DELETE:
                case keycodes.BACKSPACE:
                    /** Check to see if we can delete a chip */
                    if (this.canRemoveChip) {
                        this.removeChip(index);
                    }
                    break;
                case keycodes.UP_ARROW:
                case keycodes.LEFT_ARROW:
                    /**
                     * Check to see if left/down arrow was pressed while focusing the first chip to focus input next
                     * Also check if input should be focused
                     */
                    if (index === 0) {
                        // only try to target input if pressing left
                        if (this.canAddChip && event.keyCode === keycodes.LEFT_ARROW) {
                            this._inputChild.focus();
                        }
                        else {
                            this._focusLastChip();
                        }
                    }
                    else if (index > 0) {
                        this._focusChip(index - 1);
                    }
                    // prevent default window scrolling
                    event.preventDefault();
                    break;
                case keycodes.DOWN_ARROW:
                case keycodes.RIGHT_ARROW:
                    /**
                     * Check to see if right/up arrow was pressed while focusing the last chip to focus input next
                     * Also check if input should be focused
                     */
                    if (index === this._totalChips - 1) {
                        // only try to target input if pressing right
                        if (this.canAddChip && event.keyCode === keycodes.RIGHT_ARROW) {
                            this._inputChild.focus();
                        }
                        else {
                            this._focusFirstChip();
                        }
                    }
                    else if (index < this._totalChips - 1) {
                        this._focusChip(index + 1);
                    }
                    // prevent default window scrolling
                    event.preventDefault();
                    break;
                default:
                // default
            }
        };
        /**
         * Method to remove from display the value added from the autocomplete since it goes directly as chip.
         */
        /**
         * Method to remove from display the value added from the autocomplete since it goes directly as chip.
         * @return {?}
         */
        TdChipsComponent.prototype._removeInputDisplay = /**
         * Method to remove from display the value added from the autocomplete since it goes directly as chip.
         * @return {?}
         */
        function () {
            return '';
        };
        /**
         * Method to open the autocomplete manually if its not already opened
         */
        /**
         * Method to open the autocomplete manually if its not already opened
         * @return {?}
         */
        TdChipsComponent.prototype._openAutocomplete = /**
         * Method to open the autocomplete manually if its not already opened
         * @return {?}
         */
        function () {
            if (!this._autocompleteTrigger.panelOpen) {
                this._autocompleteTrigger.openPanel();
                this._changeDetectorRef.markForCheck();
            }
        };
        /**
         * Method to close the autocomplete manually if its not already closed
         */
        /**
         * Method to close the autocomplete manually if its not already closed
         * @return {?}
         */
        TdChipsComponent.prototype._closeAutocomplete = /**
         * Method to close the autocomplete manually if its not already closed
         * @return {?}
         */
        function () {
            if (this._autocompleteTrigger.panelOpen) {
                this._autocompleteTrigger.closePanel();
                this._changeDetectorRef.markForCheck();
            }
        };
        Object.defineProperty(TdChipsComponent.prototype, "_totalChips", {
            /**
             * Get total of chips
             */
            get: /**
             * Get total of chips
             * @return {?}
             */
            function () {
                /** @type {?} */
                var chips = this._chipsChildren.toArray();
                return chips.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method to focus a desired chip by index
         */
        /**
         * Method to focus a desired chip by index
         * @private
         * @param {?} index
         * @return {?}
         */
        TdChipsComponent.prototype._focusChip = /**
         * Method to focus a desired chip by index
         * @private
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** check to see if index exists in the array before focusing */
            if (index > -1 && this._totalChips > index) {
                this._chipsChildren.toArray()[index].focus();
            }
        };
        /** Method to focus first chip */
        /**
         * Method to focus first chip
         * @private
         * @return {?}
         */
        TdChipsComponent.prototype._focusFirstChip = /**
         * Method to focus first chip
         * @private
         * @return {?}
         */
        function () {
            this._focusChip(0);
        };
        /** Method to focus last chip */
        /**
         * Method to focus last chip
         * @private
         * @return {?}
         */
        TdChipsComponent.prototype._focusLastChip = /**
         * Method to focus last chip
         * @private
         * @return {?}
         */
        function () {
            this._focusChip(this._totalChips - 1);
        };
        /**
         * Method to toggle the disable state of input
         * Checks if not in disabled state and if chipAddition is set to 'true'
         */
        /**
         * Method to toggle the disable state of input
         * Checks if not in disabled state and if chipAddition is set to 'true'
         * @private
         * @return {?}
         */
        TdChipsComponent.prototype._toggleInput = /**
         * Method to toggle the disable state of input
         * Checks if not in disabled state and if chipAddition is set to 'true'
         * @private
         * @return {?}
         */
        function () {
            if (this.canAddChip) {
                this.inputControl.enable();
            }
            else {
                this.inputControl.disable();
            }
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Sets first option as active to let the user know which one will be added when pressing enter
         * Only if [requireMatch] has been set
         */
        /**
         * Sets first option as active to let the user know which one will be added when pressing enter
         * Only if [requireMatch] has been set
         * @private
         * @return {?}
         */
        TdChipsComponent.prototype._setFirstOptionActive = /**
         * Sets first option as active to let the user know which one will be added when pressing enter
         * Only if [requireMatch] has been set
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.requireMatch) {
                // need to use a timer here to wait until the autocomplete has been opened (end of queue)
                rxjs.timer()
                    .toPromise()
                    .then((/**
                 * @return {?}
                 */
                function () {
                    if (_this.focused && _this._options && _this._options.length > 0) {
                        // clean up of previously active options
                        _this._options.toArray().forEach((/**
                         * @param {?} option
                         * @return {?}
                         */
                        function (option) {
                            option.setInactiveStyles();
                        }));
                        // set the first one as active
                        _this._options.toArray()[0].setActiveStyles();
                        _this._internalActivateOption = true;
                        _this._changeDetectorRef.markForCheck();
                    }
                }));
            }
        };
        /**
         * Watches clicks outside of the component to remove the focus
         * The autocomplete panel is considered inside the component so we
         * need to use a flag to find out when its clicked.
         */
        /**
         * Watches clicks outside of the component to remove the focus
         * The autocomplete panel is considered inside the component so we
         * need to use a flag to find out when its clicked.
         * @private
         * @return {?}
         */
        TdChipsComponent.prototype._watchOutsideClick = /**
         * Watches clicks outside of the component to remove the focus
         * The autocomplete panel is considered inside the component so we
         * need to use a flag to find out when its clicked.
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._document) {
                this._outsideClickSubs = rxjs.merge(rxjs.fromEvent(this._document, 'click'), rxjs.fromEvent(this._document, 'touchend'))
                    .pipe(operators.debounceTime(this._touchendDebounce), operators.filter((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    /** @type {?} */
                    var clickTarget = (/** @type {?} */ (event.target));
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this._internalClick = false;
                    }));
                    return (_this.focused &&
                        clickTarget !== _this._elementRef.nativeElement &&
                        !_this._elementRef.nativeElement.contains(clickTarget) &&
                        !_this._internalClick);
                })))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    if (_this.focused) {
                        _this._autocompleteTrigger.closePanel();
                        _this.removeFocusedState();
                        _this.onTouched();
                        _this._changeDetectorRef.markForCheck();
                    }
                }));
            }
            return undefined;
        };
        TdChipsComponent.decorators = [
            { type: core.Component, args: [{
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdChipsComponent; })),
                                multi: true,
                            },
                        ],
                        selector: 'td-chips',
                        inputs: ['disabled', 'value'],
                        template: "<div\n  class=\"td-chips-wrapper\"\n  [class.td-chips-stacked]=\"stacked\"\n  [class.td-chips-input-before-position]=\"inputPosition === 'before'\"\n>\n  <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\">\n    <mat-basic-chip\n      [class.td-chip-disabled]=\"disabled\"\n      [class.td-chip-after-pad]=\"!canRemoveChip\"\n      [disableRipple]=\"true\"\n      [color]=\"color\"\n      (keydown)=\"_chipKeydown($event, index)\"\n      (blur)=\"_handleChipBlur($event, chip)\"\n      (focus)=\"_handleChipFocus($event, chip)\"\n    >\n      <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\">\n        <span class=\"td-chip-content\">\n          <span *ngIf=\"!_chipTemplate?.templateRef\">{{ chip }}</span>\n          <ng-template\n            *ngIf=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutlet]=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutletContext]=\"{ chip: chip }\"\n          ></ng-template>\n        </span>\n        <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\">\n          cancel\n        </mat-icon>\n      </div>\n    </mat-basic-chip>\n  </ng-template>\n  <mat-form-field\n    floatLabel=\"never\"\n    class=\"td-chips-form-field\"\n    [style.width.px]=\"canAddChip ? null : 0\"\n    [style.height.px]=\"canAddChip ? null : 0\"\n    [color]=\"color\"\n  >\n    <input\n      matInput\n      #input\n      [tabIndex]=\"-1\"\n      [matAutocomplete]=\"autocomplete\"\n      [formControl]=\"inputControl\"\n      [placeholder]=\"displayPlaceHolder\"\n      (keydown)=\"_inputKeydown($event)\"\n      (keyup.enter)=\"_handleAddChip()\"\n      (focus)=\"_handleFocus()\"\n    />\n  </mat-form-field>\n  <mat-autocomplete\n    #autocomplete=\"matAutocomplete\"\n    [displayWith]=\"_removeInputDisplay\"\n    (optionSelected)=\"addChip($event.option.value)\"\n  >\n    <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\">\n      <mat-option (click)=\"_setInternalClick()\" [value]=\"item\">\n        <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{ item }}</span>\n        <ng-template\n          *ngIf=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutletContext]=\"{ option: item }\"\n        ></ng-template>\n      </mat-option>\n    </ng-template>\n  </mat-autocomplete>\n</div>\n<div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\" [class.mat-disabled]=\"disabled\">\n  <span class=\"mat-form-field-ripple\" [class.mat-focused]=\"focused\"></span>\n</div>\n<ng-content></ng-content>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;padding:0 5px;min-height:48px}:host .td-chips-wrapper{min-height:42px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}:host .td-chips-wrapper.td-chips-stacked .mat-basic-chip,:host .td-chips-wrapper.td-chips-stacked .td-chips-form-field{width:100%}:host .td-chips-wrapper.td-chips-input-before-position .td-chips-form-field{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}:host .td-chip,:host .td-chip>.td-chip-content{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;min-width:0}:host .td-chip.td-chip-stacked,:host .td-chip>.td-chip-content.td-chip-stacked{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host ::ng-deep .mat-form-field-wrapper{padding-bottom:2px}:host ::ng-deep .mat-basic-chip{display:inline-block;cursor:default;border-radius:16px;margin:8px 8px 0 0;box-sizing:border-box;max-width:100%;position:relative}html[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip{min-height:32px;line-height:32px;font-size:13px;padding:0 0 0 12px}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{display:inline-block;-webkit-box-ordinal-group:-19;-ms-flex-order:-20;order:-20;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;height:32px;width:32px;margin:0 8px 0 -12px;border-radius:50%;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 12px 0 0}html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal{margin:0 4px;font-size:21px;line-height:22px}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover{cursor:pointer}:host ::ng-deep .td-chips-stacked .mat-basic-chip{margin:4px 0}:host ::ng-deep .td-chips-stacked .mat-basic-chip:first-of-type{margin:8px 0 4px}:host ::ng-deep .td-chips-stacked .mat-basic-chip:last-of-type{margin:4px 0 8px}:host .mat-form-field-underline{position:relative;height:1px;width:100%;bottom:0}:host .mat-form-field-underline.mat-disabled{background-position:0;bottom:-4px;background-color:transparent}:host .mat-form-field-underline .mat-form-field-ripple{position:absolute;height:2px;top:0;width:100%;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-transform:scaleX(.5);-ms-transform:scaleX(.5);transform:scaleX(.5);visibility:hidden;opacity:0;-webkit-transition:background-color .3s cubic-bezier(.55,0,.55,.2);transition:background-color .3s cubic-bezier(.55,0,.55,.2)}:host .mat-form-field-underline .mat-form-field-ripple.mat-focused{visibility:visible;opacity:1;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);-webkit-transition:background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear;transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear}:host.ng-invalid .mat-form-field-underline .mat-form-field-ripple{visibility:visible;opacity:1;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);-webkit-transition:background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear;transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear}:host ::ng-deep mat-form-field .mat-form-field-underline{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdChipsComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.ChangeDetectorRef }
        ]; };
        TdChipsComponent.propDecorators = {
            _nativeInput: [{ type: core.ViewChild, args: ['input', { static: true },] }],
            _inputChild: [{ type: core.ViewChild, args: [input.MatInput, { static: true },] }],
            _autocompleteTrigger: [{ type: core.ViewChild, args: [autocomplete.MatAutocompleteTrigger, { static: true },] }],
            _chipsChildren: [{ type: core.ViewChildren, args: [chips.MatChip,] }],
            _chipTemplate: [{ type: core.ContentChild, args: [TdChipDirective, { static: false },] }],
            _autocompleteOptionTemplate: [{ type: core.ContentChild, args: [TdAutocompleteOptionDirective, { static: false },] }],
            _options: [{ type: core.ViewChildren, args: [core$1.MatOption,] }],
            items: [{ type: core.Input, args: ['items',] }],
            stacked: [{ type: core.Input, args: ['stacked',] }],
            inputPosition: [{ type: core.Input, args: ['inputPosition',] }],
            requireMatch: [{ type: core.Input, args: ['requireMatch',] }],
            required: [{ type: core.Input, args: ['required',] }],
            chipAddition: [{ type: core.Input, args: ['chipAddition',] }],
            chipRemoval: [{ type: core.Input, args: ['chipRemoval',] }],
            placeholder: [{ type: core.Input }],
            debounce: [{ type: core.Input }],
            color: [{ type: core.Input, args: ['color',] }],
            add: [{ type: core.Output }],
            remove: [{ type: core.Output }],
            inputChange: [{ type: core.Output }],
            chipFocus: [{ type: core.Output }],
            chipBlur: [{ type: core.Output }],
            tabIndex: [{ type: core.HostBinding, args: ['attr.tabindex',] }],
            compareWith: [{ type: core.Input }],
            focusListener: [{ type: core.HostListener, args: ['focus', ['$event'],] }],
            mousedownListener: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }],
            clickListener: [{ type: core.HostListener, args: ['click', ['$event'],] }],
            keydownListener: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
        };
        return TdChipsComponent;
    }(_TdChipsMixinBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._outsideClickSubs;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._inputValueChangesSubs;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._isMousedown;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._items;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._length;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._stacked;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._requireMatch;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._color;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._inputPosition;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._chipAddition;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._chipRemoval;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._focused;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._required;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._tabIndex;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._touchendDebounce;
        /** @type {?} */
        TdChipsComponent.prototype._internalClick;
        /** @type {?} */
        TdChipsComponent.prototype._internalActivateOption;
        /** @type {?} */
        TdChipsComponent.prototype._nativeInput;
        /** @type {?} */
        TdChipsComponent.prototype._inputChild;
        /** @type {?} */
        TdChipsComponent.prototype._autocompleteTrigger;
        /** @type {?} */
        TdChipsComponent.prototype._chipsChildren;
        /** @type {?} */
        TdChipsComponent.prototype._chipTemplate;
        /** @type {?} */
        TdChipsComponent.prototype._autocompleteOptionTemplate;
        /** @type {?} */
        TdChipsComponent.prototype._options;
        /**
         * FormControl for the matInput element.
         * @type {?}
         */
        TdChipsComponent.prototype.inputControl;
        /**
         * placeholder?: string
         * Placeholder for the autocomplete input.
         * @type {?}
         */
        TdChipsComponent.prototype.placeholder;
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 200.
         * @type {?}
         */
        TdChipsComponent.prototype.debounce;
        /**
         * add?: function
         * Method to be executed when a chip is added.
         * Sends chip value as event.
         * @type {?}
         */
        TdChipsComponent.prototype.add;
        /**
         * remove?: function
         * Method to be executed when a chip is removed.
         * Sends chip value as event.
         * @type {?}
         */
        TdChipsComponent.prototype.remove;
        /**
         * inputChange?: function
         * Method to be executed when the value in the autocomplete input changes.
         * Sends string value as event.
         * @type {?}
         */
        TdChipsComponent.prototype.inputChange;
        /**
         * chipFocus?: function
         * Method to be executed when a chip is focused.
         * Sends chip value as event.
         * @type {?}
         */
        TdChipsComponent.prototype.chipFocus;
        /**
         * blur?: function
         * Method to be executed when a chip is blurred.
         * Sends chip value as event.
         * @type {?}
         */
        TdChipsComponent.prototype.chipBlur;
        /**
         * compareWith? function
         * Function used to check whether a chip value already exists.
         * Defaults to strict equality comparison ===
         * @type {?}
         */
        TdChipsComponent.prototype.compareWith;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._document;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentChipsModule = /** @class */ (function () {
        function CovalentChipsModule() {
        }
        CovalentChipsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [forms.ReactiveFormsModule, common.CommonModule, input.MatInputModule, icon.MatIconModule, chips.MatChipsModule, autocomplete.MatAutocompleteModule],
                        declarations: [TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective],
                        exports: [TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective],
                    },] }
        ];
        return CovalentChipsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDataTableColumnRowComponent = /** @class */ (function () {
        function TdDataTableColumnRowComponent(_elementRef, _renderer) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
        }
        TdDataTableColumnRowComponent.decorators = [
            { type: core.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'tr[td-data-table-column-row]',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableColumnRowComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return TdDataTableColumnRowComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        TdDataTableColumnRowComponent.prototype._elementRef;
        /**
         * @type {?}
         * @protected
         */
        TdDataTableColumnRowComponent.prototype._renderer;
    }
    var TdDataTableRowComponent = /** @class */ (function () {
        function TdDataTableRowComponent(_elementRef, _renderer) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._selected = false;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
        }
        Object.defineProperty(TdDataTableRowComponent.prototype, "selected", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selected;
            },
            set: /**
             * @param {?} selected
             * @return {?}
             */
            function (selected) {
                if (selected) {
                    this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
                }
                else {
                    this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
                }
                this._selected = selected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableRowComponent.prototype, "height", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var height = 48;
                if (this._elementRef.nativeElement) {
                    height = ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
                }
                return height;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listening to click event to explicitly focus the row element.
         */
        /**
         * Listening to click event to explicitly focus the row element.
         * @return {?}
         */
        TdDataTableRowComponent.prototype.clickListener = /**
         * Listening to click event to explicitly focus the row element.
         * @return {?}
         */
        function () {
            this.focus();
        };
        /**
         * @return {?}
         */
        TdDataTableRowComponent.prototype.focus = /**
         * @return {?}
         */
        function () {
            this._elementRef.nativeElement.focus();
        };
        TdDataTableRowComponent.decorators = [
            { type: core.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'tr[td-data-table-row]',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableRowComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        TdDataTableRowComponent.propDecorators = {
            selected: [{ type: core.Input, args: ['selected',] }],
            clickListener: [{ type: core.HostListener, args: ['click',] }]
        };
        return TdDataTableRowComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdDataTableRowComponent.prototype._selected;
        /**
         * @type {?}
         * @private
         */
        TdDataTableRowComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdDataTableRowComponent.prototype._renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDataTableTemplateDirective = /** @class */ (function (_super) {
        __extends(TdDataTableTemplateDirective, _super);
        function TdDataTableTemplateDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdDataTableTemplateDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[tdDataTableTemplate]ng-template' },] }
        ];
        /** @nocollapse */
        TdDataTableTemplateDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        TdDataTableTemplateDirective.propDecorators = {
            tdDataTableTemplate: [{ type: core.Input }]
        };
        return TdDataTableTemplateDirective;
    }(portal.TemplatePortalDirective));
    if (false) {
        /** @type {?} */
        TdDataTableTemplateDirective.prototype.tdDataTableTemplate;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var TdDataTableSortingOrder = {
        Ascending: 'ASC',
        Descending: 'DESC',
    };
    /**
     * @record
     */
    function ITdDataTableColumnWidth() { }
    if (false) {
        /** @type {?|undefined} */
        ITdDataTableColumnWidth.prototype.min;
        /** @type {?|undefined} */
        ITdDataTableColumnWidth.prototype.max;
    }
    /**
     * @record
     */
    function ITdDataTableColumn() { }
    if (false) {
        /** @type {?} */
        ITdDataTableColumn.prototype.name;
        /** @type {?} */
        ITdDataTableColumn.prototype.label;
        /** @type {?|undefined} */
        ITdDataTableColumn.prototype.tooltip;
        /** @type {?|undefined} */
        ITdDataTableColumn.prototype.numeric;
        /** @type {?|undefined} */
        ITdDataTableColumn.prototype.format;
        /** @type {?|undefined} */
        ITdDataTableColumn.prototype.nested;
        /** @type {?|undefined} */
        ITdDataTableColumn.prototype.sortable;
        /** @type {?|undefined} */
        ITdDataTableColumn.prototype.hidden;
        /** @type {?|undefined} */
        ITdDataTableColumn.prototype.filter;
        /** @type {?|undefined} */
        ITdDataTableColumn.prototype.width;
    }
    /**
     * @record
     */
    function ITdDataTableSelectEvent() { }
    if (false) {
        /** @type {?} */
        ITdDataTableSelectEvent.prototype.row;
        /** @type {?} */
        ITdDataTableSelectEvent.prototype.selected;
        /** @type {?} */
        ITdDataTableSelectEvent.prototype.index;
    }
    /**
     * @record
     */
    function ITdDataTableSelectAllEvent() { }
    if (false) {
        /** @type {?} */
        ITdDataTableSelectAllEvent.prototype.rows;
        /** @type {?} */
        ITdDataTableSelectAllEvent.prototype.selected;
    }
    /**
     * @record
     */
    function ITdDataTableRowClickEvent() { }
    if (false) {
        /** @type {?} */
        ITdDataTableRowClickEvent.prototype.row;
        /** @type {?} */
        ITdDataTableRowClickEvent.prototype.index;
    }
    /**
     * @record
     */
    function IInternalColumnWidth() { }
    if (false) {
        /** @type {?} */
        IInternalColumnWidth.prototype.value;
        /** @type {?} */
        IInternalColumnWidth.prototype.limit;
        /** @type {?} */
        IInternalColumnWidth.prototype.index;
        /** @type {?|undefined} */
        IInternalColumnWidth.prototype.min;
        /** @type {?|undefined} */
        IInternalColumnWidth.prototype.max;
    }
    /**
     * Constant to set the rows offset before and after the viewport
     * @type {?}
     */
    var TD_VIRTUAL_OFFSET$1 = 2;
    /**
     * Constant to set default row height if none is provided
     * @type {?}
     */
    var TD_VIRTUAL_DEFAULT_ROW_HEIGHT = 48;
    var TdDataTableBase = /** @class */ (function () {
        function TdDataTableBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdDataTableBase;
    }());
    if (false) {
        /** @type {?} */
        TdDataTableBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdDataTableMixinBase = common$1.mixinControlValueAccessor(TdDataTableBase, []);
    var TdDataTableComponent = /** @class */ (function (_super) {
        __extends(TdDataTableComponent, _super);
        function TdDataTableComponent(_document, _elementRef, _domSanitizer, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._document = _document;
            _this._elementRef = _elementRef;
            _this._domSanitizer = _domSanitizer;
            _this._hostWidth = 0;
            /**
             * manually resizable columns
             */
            _this._resizableColumns = false;
            _this._columnClientX = 0;
            _this._onColumnResize = new rxjs.Subject();
            _this._widths = [];
            _this._onResize = new rxjs.Subject();
            _this._scrollHorizontalOffset = 0;
            _this._onHorizontalScroll = new rxjs.Subject();
            _this._onVerticalScroll = new rxjs.Subject();
            // Array of cached row heights to allow dynamic row heights
            _this._rowHeightCache = [];
            // Total pseudo height of all the elements
            _this._totalHeight = 0;
            // Total host height for the viewport
            _this._hostHeight = 0;
            // Scrolled vertical pixels
            _this._scrollVerticalOffset = 0;
            // Variables that set from and to which rows will be rendered
            _this._fromRow = 0;
            _this._toRow = 0;
            _this._selectable = false;
            _this._clickable = false;
            _this._multiple = true;
            _this._allSelected = false;
            _this._indeterminate = false;
            /**
             * sorting
             */
            _this._sortable = false;
            _this._sortOrder = TdDataTableSortingOrder.Ascending;
            /**
             * shift select
             */
            _this._shiftPreviouslyPressed = false;
            _this._lastSelectedIndex = -1;
            _this._firstSelectedIndex = -1;
            _this._firstCheckboxValue = false;
            /**
             * template fetching support
             */
            _this._templateMap = new Map();
            /**
             * sortChange?: function
             * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
             * Emits an [ITdDataTableSortChangeEvent] implemented object.
             */
            _this.sortChange = new core.EventEmitter();
            /**
             * rowSelect?: function
             * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
             * Emits an [ITdDataTableSelectEvent] implemented object.
             */
            _this.rowSelect = new core.EventEmitter();
            /**
             * rowClick?: function
             * Event emitted when a row is clicked.
             * Emits an [ITdDataTableRowClickEvent] implemented object.
             */
            _this.rowClick = new core.EventEmitter();
            /**
             * selectAll?: function
             * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
             * Emits an [ITdDataTableSelectAllEvent] implemented object.
             */
            _this.selectAll = new core.EventEmitter();
            /**
             * compareWith?: function(row, model): boolean
             * Allows custom comparison between row and model to see if row is selected or not
             * Default comparation is by reference
             */
            _this.compareWith = (/**
             * @param {?} row
             * @param {?} model
             * @return {?}
             */
            function (row, model) {
                return row === model;
            });
            return _this;
        }
        Object.defineProperty(TdDataTableComponent.prototype, "resizingColumn", {
            get: /**
             * @return {?}
             */
            function () {
                return this._resizingColumn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "hostWidth", {
            get: /**
             * @return {?}
             */
            function () {
                // if the checkboxes are rendered, we need to remove their width
                // from the total width to calculate properly
                if (this.selectable) {
                    return this._hostWidth - 42;
                }
                return this._hostWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "offsetTransform", {
            /**
             * Returns the offset style with a proper calculation on how much it should move
             * over the y axis of the total height
             */
            get: /**
             * Returns the offset style with a proper calculation on how much it should move
             * over the y axis of the total height
             * @return {?}
             */
            function () {
                return this._offsetTransform;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "totalHeight", {
            /**
             * Returns the assumed total height of the rows
             */
            get: /**
             * Returns the assumed total height of the rows
             * @return {?}
             */
            function () {
                return this._totalHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "fromRow", {
            /**
             * Returns the initial row to render in the viewport
             */
            get: /**
             * Returns the initial row to render in the viewport
             * @return {?}
             */
            function () {
                return this._fromRow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "toRow", {
            /**
             * Returns the last row to render in the viewport
             */
            get: /**
             * Returns the last row to render in the viewport
             * @return {?}
             */
            function () {
                return this._toRow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "columnsLeftScroll", {
            /**
             * Returns scroll position to reposition column headers
             */
            get: /**
             * Returns scroll position to reposition column headers
             * @return {?}
             */
            function () {
                return this._scrollHorizontalOffset * -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "allSelected", {
            /**
             * Returns true if all values are selected.
             */
            get: /**
             * Returns true if all values are selected.
             * @return {?}
             */
            function () {
                return this._allSelected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "indeterminate", {
            /**
             * Returns true if all values are not deselected
             * and at least one is.
             */
            get: /**
             * Returns true if all values are not deselected
             * and at least one is.
             * @return {?}
             */
            function () {
                return this._indeterminate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data;
            },
            /**
             * data?: {[key: string]: any}[]
             * Sets the data to be rendered as rows.
             */
            set: /**
             * data?: {[key: string]: any}[]
             * Sets the data to be rendered as rows.
             * @param {?} data
             * @return {?}
             */
            function (data) {
                var _this = this;
                this._data = data;
                this._rowHeightCache = [];
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this.refresh();
                    // scroll back to the top if the data has changed
                    _this._scrollableDiv.nativeElement.scrollTop = 0;
                }));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "virtualData", {
            get: /**
             * @return {?}
             */
            function () {
                return this._virtualData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "columns", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                if (this._columns) {
                    return this._columns;
                }
                if (this.hasData) {
                    this._columns = [];
                    // if columns is undefined, use key in [data] rows as name and label for column headers.
                    /** @type {?} */
                    var row = this._data[0];
                    Object.keys(row).forEach((/**
                     * @param {?} k
                     * @return {?}
                     */
                    function (k) {
                        if (!_this._columns.find((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) { return c.name === k; }))) {
                            _this._columns.push({ name: k, label: k });
                        }
                    }));
                    return this._columns;
                }
                else {
                    return [];
                }
            },
            /**
             * columns?: ITdDataTableColumn[]
             * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
             * Defaults to [data] keys.
             */
            set: /**
             * columns?: ITdDataTableColumn[]
             * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
             * Defaults to [data] keys.
             * @param {?} cols
             * @return {?}
             */
            function (cols) {
                this._columns = cols;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "resizableColumns", {
            get: /**
             * @return {?}
             */
            function () {
                return this._resizableColumns;
            },
            /**
             * resizableColumns?: boolean
             * Enables manual column resize.
             * Defaults to 'false'
             */
            set: /**
             * resizableColumns?: boolean
             * Enables manual column resize.
             * Defaults to 'false'
             * @param {?} resizableColumns
             * @return {?}
             */
            function (resizableColumns) {
                this._resizableColumns = coercion.coerceBooleanProperty(resizableColumns);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "selectable", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectable;
            },
            /**
             * selectable?: boolean
             * Enables row selection events, hover and selected row states.
             * Defaults to 'false'
             */
            set: /**
             * selectable?: boolean
             * Enables row selection events, hover and selected row states.
             * Defaults to 'false'
             * @param {?} selectable
             * @return {?}
             */
            function (selectable) {
                this._selectable = coercion.coerceBooleanProperty(selectable);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "clickable", {
            get: /**
             * @return {?}
             */
            function () {
                return this._clickable;
            },
            /**
             * clickable?: boolean
             * Enables row click events, hover.
             * Defaults to 'false'
             */
            set: /**
             * clickable?: boolean
             * Enables row click events, hover.
             * Defaults to 'false'
             * @param {?} clickable
             * @return {?}
             */
            function (clickable) {
                this._clickable = coercion.coerceBooleanProperty(clickable);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "multiple", {
            get: /**
             * @return {?}
             */
            function () {
                return this._multiple;
            },
            /**
             * multiple?: boolean
             * Enables multiple row selection. [selectable] needs to be enabled.
             * Defaults to 'false'
             */
            set: /**
             * multiple?: boolean
             * Enables multiple row selection. [selectable] needs to be enabled.
             * Defaults to 'false'
             * @param {?} multiple
             * @return {?}
             */
            function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "sortable", {
            get: /**
             * @return {?}
             */
            function () {
                return this._sortable;
            },
            /**
             * sortable?: boolean
             * Enables sorting events, sort icons and active column states.
             * Defaults to 'false'
             */
            set: /**
             * sortable?: boolean
             * Enables sorting events, sort icons and active column states.
             * Defaults to 'false'
             * @param {?} sortable
             * @return {?}
             */
            function (sortable) {
                this._sortable = coercion.coerceBooleanProperty(sortable);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "sortBy", {
            /**
             * sortBy?: string
             * Sets the active sort column. [sortable] needs to be enabled.
             */
            set: /**
             * sortBy?: string
             * Sets the active sort column. [sortable] needs to be enabled.
             * @param {?} columnName
             * @return {?}
             */
            function (columnName) {
                if (!columnName) {
                    return;
                }
                /** @type {?} */
                var column = this.columns.find((/**
                 * @param {?} c
                 * @return {?}
                 */
                function (c) { return c.name === columnName; }));
                if (!column) {
                    throw new Error('[sortBy] must be a valid column name');
                }
                this._sortBy = column;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "sortByColumn", {
            get: /**
             * @return {?}
             */
            function () {
                return this._sortBy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "sortOrder", {
            /**
             * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
             * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
             * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
             */
            set: /**
             * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
             * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
             * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
             * @param {?} order
             * @return {?}
             */
            function (order) {
                /** @type {?} */
                var sortOrder = order ? order.toUpperCase() : 'ASC';
                if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
                    throw new Error('[sortOrder] must be empty, ASC or DESC');
                }
                this._sortOrder = sortOrder === 'ASC' ? TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "sortOrderEnum", {
            get: /**
             * @return {?}
             */
            function () {
                return this._sortOrder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "hasData", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data && this._data.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Initialize observable for resize and scroll events
         */
        /**
         * Initialize observable for resize and scroll events
         * @return {?}
         */
        TdDataTableComponent.prototype.ngOnInit = /**
         * Initialize observable for resize and scroll events
         * @return {?}
         */
        function () {
            var _this = this;
            // initialize observable for resize calculations
            this._resizeSubs = this._onResize.asObservable().subscribe((/**
             * @return {?}
             */
            function () {
                if (_this._rows) {
                    _this._rows.toArray().forEach((/**
                     * @param {?} row
                     * @param {?} index
                     * @return {?}
                     */
                    function (row, index) {
                        _this._rowHeightCache[_this.fromRow + index] = row.height + 1;
                    }));
                }
                _this._calculateWidths();
                _this._calculateVirtualRows();
            }));
            // initialize observable for column resize calculations
            this._columnResizeSubs = this._onColumnResize
                .asObservable()
                .pipe(operators.debounceTime(0))
                .subscribe((/**
             * @param {?} clientX
             * @return {?}
             */
            function (clientX) {
                _this._columnClientX = clientX;
                _this._calculateWidths();
                _this._changeDetectorRef.markForCheck();
            }));
            // initialize observable for scroll column header reposition
            this._horizontalScrollSubs = this._onHorizontalScroll.asObservable().subscribe((/**
             * @param {?} horizontalScroll
             * @return {?}
             */
            function (horizontalScroll) {
                _this._scrollHorizontalOffset = horizontalScroll;
                _this._changeDetectorRef.markForCheck();
            }));
            // initialize observable for virtual scroll rendering
            this._verticalScrollSubs = this._onVerticalScroll.asObservable().subscribe((/**
             * @param {?} verticalScroll
             * @return {?}
             */
            function (verticalScroll) {
                _this._scrollVerticalOffset = verticalScroll;
                _this._calculateVirtualRows();
                _this._changeDetectorRef.markForCheck();
            }));
            this._valueChangesSubs = this.valueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.refresh();
            }));
        };
        /**
         * Loads templates and sets them in a map for faster access.
         */
        /**
         * Loads templates and sets them in a map for faster access.
         * @return {?}
         */
        TdDataTableComponent.prototype.ngAfterContentInit = /**
         * Loads templates and sets them in a map for faster access.
         * @return {?}
         */
        function () {
            var e_1, _a;
            try {
                for (var _b = __values(this._templates.toArray()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var template = _c.value;
                    this._templateMap.set(template.tdDataTableTemplate, template.templateRef);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * Checks hosts native elements widths to see if it has changed (resize check)
         */
        /**
         * Checks hosts native elements widths to see if it has changed (resize check)
         * @return {?}
         */
        TdDataTableComponent.prototype.ngAfterContentChecked = /**
         * Checks hosts native elements widths to see if it has changed (resize check)
         * @return {?}
         */
        function () {
            var _this = this;
            // check if the scroll has been reset when element is hidden
            if (this._scrollVerticalOffset - this._scrollableDiv.nativeElement.scrollTop > 5) {
                // scroll back to the top if element has been reset
                this._onVerticalScroll.next(0);
            }
            if (this._elementRef.nativeElement) {
                /** @type {?} */
                var newHostWidth_1 = this._elementRef.nativeElement.getBoundingClientRect().width;
                // if the width has changed then we throw a resize event.
                if (this._hostWidth !== newHostWidth_1) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this._hostWidth = newHostWidth_1;
                        _this._onResize.next();
                    }), 0);
                }
            }
            if (this._scrollableDiv.nativeElement) {
                /** @type {?} */
                var newHostHeight = this._scrollableDiv.nativeElement.getBoundingClientRect().height;
                // if the height of the viewport has changed, then we mark for check
                if (this._hostHeight !== newHostHeight) {
                    this._hostHeight = newHostHeight;
                    this._calculateVirtualRows();
                    this._changeDetectorRef.markForCheck();
                }
            }
        };
        /**
         * Registers to an observable that checks if all rows have been rendered
         * so we can start calculating the widths
         */
        /**
         * Registers to an observable that checks if all rows have been rendered
         * so we can start calculating the widths
         * @return {?}
         */
        TdDataTableComponent.prototype.ngAfterViewInit = /**
         * Registers to an observable that checks if all rows have been rendered
         * so we can start calculating the widths
         * @return {?}
         */
        function () {
            var _this = this;
            this._rowsChangedSubs = this._rows.changes.pipe(operators.debounceTime(0)).subscribe((/**
             * @return {?}
             */
            function () {
                _this._onResize.next();
            }));
            this._calculateVirtualRows();
        };
        /**
         * Unsubscribes observables when data table is destroyed
         */
        /**
         * Unsubscribes observables when data table is destroyed
         * @return {?}
         */
        TdDataTableComponent.prototype.ngOnDestroy = /**
         * Unsubscribes observables when data table is destroyed
         * @return {?}
         */
        function () {
            if (this._resizeSubs) {
                this._resizeSubs.unsubscribe();
            }
            if (this._columnResizeSubs) {
                this._columnResizeSubs.unsubscribe();
            }
            if (this._horizontalScrollSubs) {
                this._horizontalScrollSubs.unsubscribe();
            }
            if (this._verticalScrollSubs) {
                this._verticalScrollSubs.unsubscribe();
            }
            if (this._rowsChangedSubs) {
                this._rowsChangedSubs.unsubscribe();
            }
            if (this._valueChangesSubs) {
                this._valueChangesSubs.unsubscribe();
            }
        };
        /**
         * Method that gets executed every time there is a scroll event
         * Calls the scroll observable
         */
        /**
         * Method that gets executed every time there is a scroll event
         * Calls the scroll observable
         * @param {?} event
         * @return {?}
         */
        TdDataTableComponent.prototype.handleScroll = /**
         * Method that gets executed every time there is a scroll event
         * Calls the scroll observable
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var element = (/** @type {?} */ (event.target));
            if (element) {
                /** @type {?} */
                var horizontalScroll = element.scrollLeft;
                if (this._scrollHorizontalOffset !== horizontalScroll) {
                    this._onHorizontalScroll.next(horizontalScroll);
                }
                /** @type {?} */
                var verticalScroll = element.scrollTop;
                if (this._scrollVerticalOffset !== verticalScroll) {
                    this._onVerticalScroll.next(verticalScroll);
                }
            }
        };
        /**
         * Returns the width needed for the columns via index
         */
        /**
         * Returns the width needed for the columns via index
         * @param {?} index
         * @return {?}
         */
        TdDataTableComponent.prototype.getColumnWidth = /**
         * Returns the width needed for the columns via index
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this._widths[index]) {
                return this._widths[index].value;
            }
            return undefined;
        };
        /**
         * @param {?} column
         * @param {?} value
         * @return {?}
         */
        TdDataTableComponent.prototype.getCellValue = /**
         * @param {?} column
         * @param {?} value
         * @return {?}
         */
        function (column, value) {
            if (column.nested === undefined || column.nested) {
                return this._getNestedValue(column.name, value);
            }
            return value[column.name];
        };
        /**
         * Getter method for template references
         */
        /**
         * Getter method for template references
         * @param {?} name
         * @return {?}
         */
        TdDataTableComponent.prototype.getTemplateRef = /**
         * Getter method for template references
         * @param {?} name
         * @return {?}
         */
        function (name) {
            return this._templateMap.get(name);
        };
        /**
         * Clears model (ngModel) of component by removing all values in array.
         */
        /**
         * Clears model (ngModel) of component by removing all values in array.
         * @return {?}
         */
        TdDataTableComponent.prototype.clearModel = /**
         * Clears model (ngModel) of component by removing all values in array.
         * @return {?}
         */
        function () {
            this.value.splice(0, this.value.length);
        };
        /**
         * Refreshes data table and rerenders [data] and [columns]
         */
        /**
         * Refreshes data table and rerenders [data] and [columns]
         * @return {?}
         */
        TdDataTableComponent.prototype.refresh = /**
         * Refreshes data table and rerenders [data] and [columns]
         * @return {?}
         */
        function () {
            this._calculateVirtualRows();
            this._calculateWidths();
            this._calculateCheckboxState();
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Selects or clears all rows depending on 'checked' value.
         */
        /**
         * Selects or clears all rows depending on 'checked' value.
         * @param {?} checked
         * @return {?}
         */
        TdDataTableComponent.prototype._selectAll = /**
         * Selects or clears all rows depending on 'checked' value.
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            var _this = this;
            /** @type {?} */
            var toggledRows = [];
            if (checked) {
                this._data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    // skiping already selected rows
                    if (!_this.isRowSelected(row)) {
                        _this.value.push(row);
                        // checking which ones are being toggled
                        toggledRows.push(row);
                    }
                }));
                this._allSelected = true;
                this._indeterminate = true;
            }
            else {
                this._data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    // checking which ones are being toggled
                    if (_this.isRowSelected(row)) {
                        toggledRows.push(row);
                        /** @type {?} */
                        var modelRow = _this.value.filter((/**
                         * @param {?} val
                         * @return {?}
                         */
                        function (val) {
                            return _this.compareWith(row, val);
                        }))[0];
                        /** @type {?} */
                        var index = _this.value.indexOf(modelRow);
                        if (index > -1) {
                            _this.value.splice(index, 1);
                        }
                    }
                }));
                this._allSelected = false;
                this._indeterminate = false;
            }
            this.selectAll.emit({ rows: toggledRows, selected: checked });
            this.onChange(this.value);
        };
        /**
         * Checks if row is selected
         */
        /**
         * Checks if row is selected
         * @param {?} row
         * @return {?}
         */
        TdDataTableComponent.prototype.isRowSelected = /**
         * Checks if row is selected
         * @param {?} row
         * @return {?}
         */
        function (row) {
            var _this = this;
            // compare items by [compareWith] function
            return this.value
                ? this.value.filter((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    return _this.compareWith(row, val);
                })).length > 0
                : false;
        };
        /**
         * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
         * handles cntrl clicks and shift clicks for multi-select
         */
        /**
         * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
         * handles cntrl clicks and shift clicks for multi-select
         * @param {?} row
         * @param {?} event
         * @param {?} currentSelected
         * @return {?}
         */
        TdDataTableComponent.prototype.select = /**
         * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
         * handles cntrl clicks and shift clicks for multi-select
         * @param {?} row
         * @param {?} event
         * @param {?} currentSelected
         * @return {?}
         */
        function (row, event, currentSelected) {
            if (this.selectable) {
                this.blockEvent(event);
                // Check to see if Shift key is selected and need to select everything in between
                /** @type {?} */
                var mouseEvent = (/** @type {?} */ (event));
                if (this.multiple && mouseEvent && mouseEvent.shiftKey && this._lastSelectedIndex > -1) {
                    /** @type {?} */
                    var firstIndex = currentSelected;
                    /** @type {?} */
                    var lastIndex = this._lastSelectedIndex;
                    if (currentSelected > this._lastSelectedIndex) {
                        firstIndex = this._lastSelectedIndex;
                        lastIndex = currentSelected;
                    }
                    // if clicking a checkbox behind the initial check, then toggle all selections expect the initial checkbox
                    // else the checkboxes clicked are all after the initial one
                    if ((this._firstSelectedIndex >= currentSelected && this._lastSelectedIndex > this._firstSelectedIndex) ||
                        (this._firstSelectedIndex <= currentSelected && this._lastSelectedIndex < this._firstSelectedIndex)) {
                        for (var i = firstIndex; i <= lastIndex; i++) {
                            if (this._firstSelectedIndex !== i) {
                                this._doSelection(this._data[i], i);
                            }
                        }
                    }
                    else if (this._firstSelectedIndex > currentSelected || this._firstSelectedIndex < currentSelected) {
                        // change indexes depending on where the next checkbox is selected (before or after)
                        if (this._firstSelectedIndex > currentSelected) {
                            lastIndex--;
                        }
                        else if (this._firstSelectedIndex < currentSelected) {
                            firstIndex++;
                        }
                        for (var i = firstIndex; i <= lastIndex; i++) {
                            /** @type {?} */
                            var rowSelected = this.isRowSelected(this._data[i]);
                            // if row is selected and first checkbox was selected
                            // or if row was unselected and first checkbox was unselected
                            // we ignore the toggle
                            if ((this._firstCheckboxValue && !rowSelected) || (!this._firstCheckboxValue && rowSelected)) {
                                this._doSelection(this._data[i], i);
                            }
                            else if (this._shiftPreviouslyPressed &&
                                ((currentSelected >= this._firstSelectedIndex && currentSelected <= this._lastSelectedIndex) ||
                                    (currentSelected <= this._firstSelectedIndex && currentSelected >= this._lastSelectedIndex))) {
                                // else if the checkbox selected was in the middle of the last selection and the first selection
                                // then we undo the selections
                                this._doSelection(this._data[i], i);
                            }
                        }
                    }
                    this._shiftPreviouslyPressed = true;
                    // if shift wasnt pressed, then we take the element checked as the first row
                    // incase the next click uses shift
                }
                else if (mouseEvent && !mouseEvent.shiftKey) {
                    this._firstCheckboxValue = this._doSelection(row, currentSelected);
                    this._shiftPreviouslyPressed = false;
                    this._firstSelectedIndex = currentSelected;
                }
                this._lastSelectedIndex = currentSelected;
            }
        };
        /**
         * Overrides the onselectstart method of the document so other text on the page
         * doesn't get selected when doing shift selections.
         */
        /**
         * Overrides the onselectstart method of the document so other text on the page
         * doesn't get selected when doing shift selections.
         * @return {?}
         */
        TdDataTableComponent.prototype.disableTextSelection = /**
         * Overrides the onselectstart method of the document so other text on the page
         * doesn't get selected when doing shift selections.
         * @return {?}
         */
        function () {
            if (this._document) {
                this._document.onselectstart = (/**
                 * @return {?}
                 */
                function () {
                    return false;
                });
            }
        };
        /**
         * Resets the original onselectstart method.
         */
        /**
         * Resets the original onselectstart method.
         * @return {?}
         */
        TdDataTableComponent.prototype.enableTextSelection = /**
         * Resets the original onselectstart method.
         * @return {?}
         */
        function () {
            if (this._document) {
                this._document.onselectstart = undefined;
            }
        };
        /**
         * emits the onRowClickEvent when a row is clicked
         * if clickable is true and selectable is false then select the row
         */
        /**
         * emits the onRowClickEvent when a row is clicked
         * if clickable is true and selectable is false then select the row
         * @param {?} row
         * @param {?} index
         * @param {?} event
         * @return {?}
         */
        TdDataTableComponent.prototype.handleRowClick = /**
         * emits the onRowClickEvent when a row is clicked
         * if clickable is true and selectable is false then select the row
         * @param {?} row
         * @param {?} index
         * @param {?} event
         * @return {?}
         */
        function (row, index, event) {
            if (this.clickable) {
                // ignoring linting rules here because attribute it actually null or not there
                // can't check for undefined
                /** @type {?} */
                var srcElement = event.srcElement || event.currentTarget;
                /** @type {?} */
                var element = (/** @type {?} */ (event.target));
                /* tslint:disable-next-line */
                if (srcElement.getAttribute('stopRowClick') === null && element.tagName.toLowerCase() !== 'mat-pseudo-checkbox') {
                    this.rowClick.emit({
                        row: row,
                        index: index,
                    });
                }
            }
        };
        /**
         * Method handle for sort click event in column headers.
         */
        /**
         * Method handle for sort click event in column headers.
         * @param {?} column
         * @return {?}
         */
        TdDataTableComponent.prototype.handleSort = /**
         * Method handle for sort click event in column headers.
         * @param {?} column
         * @return {?}
         */
        function (column) {
            if (this._sortBy === column) {
                this._sortOrder =
                    this._sortOrder === TdDataTableSortingOrder.Ascending
                        ? TdDataTableSortingOrder.Descending
                        : TdDataTableSortingOrder.Ascending;
            }
            else {
                this._sortBy = column;
                this._sortOrder = TdDataTableSortingOrder.Ascending;
            }
            this.sortChange.next({ name: this._sortBy.name, order: this._sortOrder });
        };
        /**
         * Handle all keyup events when focusing a data table row
         */
        /**
         * Handle all keyup events when focusing a data table row
         * @param {?} event
         * @param {?} row
         * @param {?} index
         * @return {?}
         */
        TdDataTableComponent.prototype._rowKeyup = /**
         * Handle all keyup events when focusing a data table row
         * @param {?} event
         * @param {?} row
         * @param {?} index
         * @return {?}
         */
        function (event, row, index) {
            switch (event.keyCode) {
                case keycodes.ENTER:
                case keycodes.SPACE:
                    /** if user presses enter or space, the row should be selected */
                    if (this.selectable) {
                        this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                    }
                    break;
                case keycodes.UP_ARROW:
                    /**
                     * if users presses the up arrow, we focus the prev row
                     * unless its the first row
                     */
                    if (index > 0) {
                        this._rows.toArray()[index - 1].focus();
                    }
                    this.blockEvent(event);
                    if (this.selectable && this.multiple && event.shiftKey && this.fromRow + index >= 0) {
                        this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                    }
                    break;
                case keycodes.DOWN_ARROW:
                    /**
                     * if users presses the down arrow, we focus the next row
                     * unless its the last row
                     */
                    if (index < this._rows.toArray().length - 1) {
                        this._rows.toArray()[index + 1].focus();
                    }
                    this.blockEvent(event);
                    if (this.selectable && this.multiple && event.shiftKey && this.fromRow + index < this._data.length) {
                        this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                    }
                    break;
                default:
                // default
            }
        };
        /**
         * Sets column index of the dragged column and initial clientX of column
         */
        /**
         * Sets column index of the dragged column and initial clientX of column
         * @param {?} index
         * @param {?} event
         * @return {?}
         */
        TdDataTableComponent.prototype._handleStartColumnDrag = /**
         * Sets column index of the dragged column and initial clientX of column
         * @param {?} index
         * @param {?} event
         * @return {?}
         */
        function (index, event) {
            this._columnClientX = event.clientX;
            this._resizingColumn = index;
        };
        /**
         * Calculates new width depending on new clientX of dragger column
         */
        /**
         * Calculates new width depending on new clientX of dragger column
         * @param {?} event
         * @return {?}
         */
        TdDataTableComponent.prototype._handleColumnDrag = /**
         * Calculates new width depending on new clientX of dragger column
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // check if there was been a separator clicked for resize
            if (this._resizingColumn !== undefined && event.clientX > 0) {
                /** @type {?} */
                var xPosition = event.clientX;
                // checks if the separator is being moved to try and resize the column, else dont do anything
                if (xPosition > 0 && this._columnClientX > 0 && xPosition - this._columnClientX !== 0) {
                    // calculate the new width depending if making the column bigger or smaller
                    /** @type {?} */
                    var proposedManualWidth = this._widths[this._resizingColumn].value + (xPosition - this._columnClientX);
                    // if the proposed new width is less than the projected min width of the column, use projected min width
                    if (proposedManualWidth < this._colElements.toArray()[this._resizingColumn].projectedWidth) {
                        proposedManualWidth = this._colElements.toArray()[this._resizingColumn].projectedWidth;
                    }
                    this.columns[this._resizingColumn].width = proposedManualWidth;
                    // update new x position for the resized column
                    this._onColumnResize.next(xPosition);
                }
            }
        };
        /**
         * Ends dragged flags
         */
        /**
         * Ends dragged flags
         * @return {?}
         */
        TdDataTableComponent.prototype._handleEndColumnDrag = /**
         * Ends dragged flags
         * @return {?}
         */
        function () {
            this._columnClientX = undefined;
            this._resizingColumn = undefined;
        };
        /**
         * Method to prevent the default events
         */
        /**
         * Method to prevent the default events
         * @param {?} event
         * @return {?}
         */
        TdDataTableComponent.prototype.blockEvent = /**
         * Method to prevent the default events
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
        };
        /**
         * @private
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        TdDataTableComponent.prototype._getNestedValue = /**
         * @private
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        function (name, value) {
            if (!(value instanceof Object) || !name) {
                return value;
            }
            if (name.indexOf('.') > -1) {
                /** @type {?} */
                var splitName = name.split(/\.(.+)/, 2);
                return this._getNestedValue(splitName[1], value[splitName[0]]);
            }
            else {
                return value[name];
            }
        };
        /**
         * Does the actual Row Selection
         */
        /**
         * Does the actual Row Selection
         * @private
         * @param {?} row
         * @param {?} rowIndex
         * @return {?}
         */
        TdDataTableComponent.prototype._doSelection = /**
         * Does the actual Row Selection
         * @private
         * @param {?} row
         * @param {?} rowIndex
         * @return {?}
         */
        function (row, rowIndex) {
            var _this = this;
            /** @type {?} */
            var wasSelected = this.isRowSelected(row);
            if (!wasSelected) {
                if (!this._multiple) {
                    this.clearModel();
                }
                this.value.push(row);
            }
            else {
                // compare items by [compareWith] function
                row = this.value.filter((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    return _this.compareWith(row, val);
                }))[0];
                /** @type {?} */
                var index = this.value.indexOf(row);
                if (index > -1) {
                    this.value.splice(index, 1);
                }
            }
            this._calculateCheckboxState();
            this.rowSelect.emit({ row: row, index: rowIndex, selected: !wasSelected });
            this.onChange(this.value);
            return !wasSelected;
        };
        /**
         * Calculate all the state of all checkboxes
         */
        /**
         * Calculate all the state of all checkboxes
         * @private
         * @return {?}
         */
        TdDataTableComponent.prototype._calculateCheckboxState = /**
         * Calculate all the state of all checkboxes
         * @private
         * @return {?}
         */
        function () {
            var e_2, _a;
            var _this = this;
            if (this._data) {
                this._allSelected = typeof this._data.find((/**
                 * @param {?} d
                 * @return {?}
                 */
                function (d) { return !_this.isRowSelected(d); })) === 'undefined';
                this._indeterminate = false;
                try {
                    for (var _b = __values(this._data), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var row = _c.value;
                        if (!this.isRowSelected(row)) {
                            continue;
                        }
                        this._indeterminate = true;
                        break;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        };
        /**
         * Calculates the widths for columns and cells depending on content
         */
        /**
         * Calculates the widths for columns and cells depending on content
         * @private
         * @return {?}
         */
        TdDataTableComponent.prototype._calculateWidths = /**
         * Calculates the widths for columns and cells depending on content
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._colElements && this._colElements.length) {
                this._widths = [];
                this._colElements.forEach((/**
                 * @param {?} col
                 * @param {?} index
                 * @return {?}
                 */
                function (col, index) {
                    _this._adjustColumnWidth(index, _this._calculateWidth());
                }));
                this._adjustColumnWidhts();
                this._changeDetectorRef.markForCheck();
            }
        };
        /**
         * Adjusts columns after calculation to see if they need to be recalculated.
         */
        /**
         * Adjusts columns after calculation to see if they need to be recalculated.
         * @private
         * @return {?}
         */
        TdDataTableComponent.prototype._adjustColumnWidhts = /**
         * Adjusts columns after calculation to see if they need to be recalculated.
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var fixedTotalWidth = 0;
            // get the number of total columns that have flexible widths (not fixed or hidden)
            /** @type {?} */
            var flexibleWidths = this._widths.filter((/**
             * @param {?} width
             * @param {?} index
             * @return {?}
             */
            function (width, index) {
                if (_this.columns[index].hidden) {
                    return false;
                }
                if (width.limit || width.max || width.min) {
                    fixedTotalWidth += width.value;
                }
                return !width.limit && !width.max && !width.min;
            })).length;
            // calculate how much pixes are left that could be spread across
            // the flexible columns
            /** @type {?} */
            var recalculateHostWidth = 0;
            if (fixedTotalWidth < this.hostWidth) {
                recalculateHostWidth = this.hostWidth - fixedTotalWidth;
            }
            // if we have flexible columns and pixels to spare on them
            // we try and spread the pixels across them
            if (flexibleWidths && recalculateHostWidth) {
                /** @type {?} */
                var newValue_1 = Math.floor(recalculateHostWidth / flexibleWidths);
                /** @type {?} */
                var adjustedNumber_1 = 0;
                // adjust the column widths with the spread pixels
                this._widths.forEach((/**
                 * @param {?} colWidth
                 * @return {?}
                 */
                function (colWidth) {
                    if ((_this._widths[colWidth.index].max && _this._widths[colWidth.index].value > newValue_1) ||
                        (_this._widths[colWidth.index].min && _this._widths[colWidth.index].value < newValue_1) ||
                        !_this._widths[colWidth.index].limit) {
                        _this._adjustColumnWidth(colWidth.index, newValue_1);
                        adjustedNumber_1++;
                    }
                }));
                // if there are still columns that need to be recalculated, we start over
                /** @type {?} */
                var newFlexibleWidths = this._widths.filter((/**
                 * @param {?} width
                 * @return {?}
                 */
                function (width) {
                    return !width.limit && !width.max;
                })).length;
                if (newFlexibleWidths !== adjustedNumber_1 && newFlexibleWidths !== flexibleWidths) {
                    this._adjustColumnWidhts();
                }
            }
        };
        /**
         * Adjusts a single column to see if it can be recalculated
         */
        /**
         * Adjusts a single column to see if it can be recalculated
         * @private
         * @param {?} index
         * @param {?} value
         * @return {?}
         */
        TdDataTableComponent.prototype._adjustColumnWidth = /**
         * Adjusts a single column to see if it can be recalculated
         * @private
         * @param {?} index
         * @param {?} value
         * @return {?}
         */
        function (index, value) {
            this._widths[index] = {
                value: value,
                index: index,
                limit: false,
                min: false,
                max: false,
            };
            // flag to see if we need to skip the min width projection
            // depending if a width or min width has been provided
            /** @type {?} */
            var skipMinWidthProjection = false;
            if (this.columns[index]) {
                // if the provided width has min/max, then we check to see if we need to set it
                if (typeof this.columns[index].width === 'object') {
                    /** @type {?} */
                    var widthOpts = (/** @type {?} */ (this.columns[index].width));
                    // if the column width is less than the configured min, we override it
                    skipMinWidthProjection = widthOpts && !!widthOpts.min;
                    if (widthOpts && widthOpts.min >= this._widths[index].value) {
                        this._widths[index].value = widthOpts.min;
                        this._widths[index].min = true;
                        // if the column width is more than the configured max, we override it
                    }
                    else if (widthOpts && widthOpts.max <= this._widths[index].value) {
                        this._widths[index].value = widthOpts.max;
                        this._widths[index].max = true;
                    }
                    // if it has a fixed width, then we just set it
                }
                else if (typeof this.columns[index].width === 'number') {
                    this._widths[index].value = (/** @type {?} */ (this.columns[index].width));
                    skipMinWidthProjection = this._widths[index].limit = true;
                }
            }
            // if there wasn't any width or min width provided, we set a min to what the column width min should be
            if (!skipMinWidthProjection && this._widths[index].value < this._colElements.toArray()[index].projectedWidth) {
                this._widths[index].value = this._colElements.toArray()[index].projectedWidth;
                this._widths[index].min = true;
                this._widths[index].limit = false;
            }
        };
        /**
         * Generic method to calculate column width
         */
        /**
         * Generic method to calculate column width
         * @private
         * @return {?}
         */
        TdDataTableComponent.prototype._calculateWidth = /**
         * Generic method to calculate column width
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var renderedColumns = this.columns.filter((/**
             * @param {?} col
             * @return {?}
             */
            function (col) { return !col.hidden; }));
            return Math.floor(this.hostWidth / renderedColumns.length);
        };
        /**
         * Method to calculate the rows to be rendered in the viewport
         */
        /**
         * Method to calculate the rows to be rendered in the viewport
         * @private
         * @return {?}
         */
        TdDataTableComponent.prototype._calculateVirtualRows = /**
         * Method to calculate the rows to be rendered in the viewport
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var scrolledRows = 0;
            if (this._data) {
                this._totalHeight = 0;
                /** @type {?} */
                var rowHeightSum_1 = 0;
                // loop through all rows to see if we have their height cached
                // and sum them all to calculate the total height
                this._data.forEach((/**
                 * @param {?} d
                 * @param {?} i
                 * @return {?}
                 */
                function (d, i) {
                    // iterate through all rows at first and assume all
                    // rows are the same height as the first one
                    if (!_this._rowHeightCache[i]) {
                        _this._rowHeightCache[i] = _this._rowHeightCache[0] || TD_VIRTUAL_DEFAULT_ROW_HEIGHT;
                    }
                    rowHeightSum_1 += _this._rowHeightCache[i];
                    // check how many rows have been scrolled
                    if (_this._scrollVerticalOffset - rowHeightSum_1 > 0) {
                        scrolledRows++;
                    }
                }));
                this._totalHeight = rowHeightSum_1;
                // set the initial row to be rendered taking into account the row offset
                /** @type {?} */
                var fromRow = scrolledRows - TD_VIRTUAL_OFFSET$1;
                this._fromRow = fromRow > 0 ? fromRow : 0;
                /** @type {?} */
                var hostHeight = this._hostHeight;
                /** @type {?} */
                var index = 0;
                // calculate how many rows can fit in the viewport
                while (hostHeight > 0) {
                    hostHeight -= this._rowHeightCache[this.fromRow + index];
                    index++;
                }
                // set the last row to be rendered taking into account the row offset
                /** @type {?} */
                var range = index - 1 + TD_VIRTUAL_OFFSET$1 * 2;
                /** @type {?} */
                var toRow = range + this.fromRow;
                // if last row is greater than the total length, then we use the total length
                if (isFinite(toRow) && toRow > this._data.length) {
                    toRow = this._data.length;
                }
                else if (!isFinite(toRow)) {
                    toRow = TD_VIRTUAL_OFFSET$1;
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
            // calculate the proper offset depending on how many rows have been scrolled
            if (scrolledRows > TD_VIRTUAL_OFFSET$1) {
                for (var index = 0; index < this.fromRow; index++) {
                    offset += this._rowHeightCache[index];
                }
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
        TdDataTableComponent.decorators = [
            { type: core.Component, args: [{
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdDataTableComponent; })),
                                multi: true,
                            },
                        ],
                        selector: 'td-data-table',
                        template: "<table td-data-table [style.left.px]=\"columnsLeftScroll\" [class.mat-selectable]=\"selectable\">\n  <thead class=\"td-data-table-head\" (dragover)=\"_handleColumnDrag($event)\">\n    <tr td-data-table-column-row>\n      <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\">\n        <mat-checkbox\n          #checkBoxAll\n          *ngIf=\"multiple\"\n          [disabled]=\"!hasData\"\n          [indeterminate]=\"indeterminate && !allSelected && hasData\"\n          [checked]=\"allSelected && hasData\"\n          (click)=\"blockEvent($event); _selectAll(!checkBoxAll.checked)\"\n          (keyup.enter)=\"_selectAll(!checkBoxAll.checked)\"\n          (keyup.space)=\"_selectAll(!checkBoxAll.checked)\"\n          (keydown.space)=\"blockEvent($event)\"\n        ></mat-checkbox>\n      </th>\n      <th\n        td-data-table-column\n        #columnElement\n        *ngFor=\"let column of columns; let i = index; let last = last\"\n        [style.min-width.px]=\"getColumnWidth(i)\"\n        [style.max-width.px]=\"getColumnWidth(i)\"\n        [name]=\"column.name\"\n        [numeric]=\"column.numeric\"\n        [active]=\"(column.sortable || sortable) && column === sortByColumn\"\n        [sortable]=\"column.sortable || (sortable && column.sortable !== false)\"\n        [sortOrder]=\"sortOrderEnum\"\n        [hidden]=\"column.hidden\"\n        (sortChange)=\"handleSort(column)\"\n      >\n        <span [matTooltip]=\"column.tooltip\">{{ column.label }}</span>\n        <span\n          td-column-resizer\n          *ngIf=\"resizableColumns\"\n          draggable=\"true\"\n          class=\"td-data-table-column-resizer\"\n          [class.td-resizing]=\"i === resizingColumn\"\n          (mousedown)=\"_handleStartColumnDrag(i, $event)\"\n          (dragstart)=\"$event?.dataTransfer?.setData('text', '')\"\n          (drag)=\"_handleColumnDrag($event)\"\n          (dragend)=\"_handleEndColumnDrag()\"\n          (mouseup)=\"_handleEndColumnDrag()\"\n        >\n          <span class=\"td-data-table-column-separator\"></span>\n        </span>\n      </th>\n    </tr>\n  </thead>\n</table>\n<div #scrollableDiv class=\"td-data-table-scrollable\" (scroll)=\"handleScroll($event)\">\n  <div [style.height.px]=\"totalHeight\"></div>\n  <table\n    td-data-table\n    [style.transform]=\"offsetTransform\"\n    [style.position]=\"'absolute'\"\n    [class.mat-selectable]=\"selectable\"\n    [class.mat-clickable]=\"clickable\"\n  >\n    <tbody class=\"td-data-table-body\">\n      <tr\n        td-data-table-row\n        #dtRow\n        [tabIndex]=\"selectable ? 0 : -1\"\n        [selected]=\"(clickable || selectable) && isRowSelected(row)\"\n        *ngFor=\"let row of virtualData; let rowIndex = index\"\n        (click)=\"handleRowClick(row, fromRow + rowIndex, $event)\"\n        (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\"\n        (keydown.space)=\"blockEvent($event)\"\n        (keydown.shift.space)=\"blockEvent($event)\"\n        (keydown.shift)=\"disableTextSelection()\"\n        (keyup.shift)=\"enableTextSelection()\"\n      >\n        <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\">\n          <mat-pseudo-checkbox\n            [state]=\"dtRow.selected ? 'checked' : 'unchecked'\"\n            (mousedown)=\"disableTextSelection()\"\n            (mouseup)=\"enableTextSelection()\"\n            stopRowClick\n            (click)=\"select(row, $event, fromRow + rowIndex)\"\n          ></mat-pseudo-checkbox>\n        </td>\n        <td\n          td-data-table-cell\n          [numeric]=\"column.numeric\"\n          [hidden]=\"column.hidden\"\n          *ngFor=\"let column of columns; let i = index\"\n          [style.min-width.px]=\"getColumnWidth(i)\"\n          [style.max-width.px]=\"getColumnWidth(i)\"\n        >\n          <span *ngIf=\"!getTemplateRef(column.name)\">\n            {{ column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row) }}\n          </span>\n          <ng-template\n            *ngIf=\"getTemplateRef(column.name)\"\n            [ngTemplateOutlet]=\"getTemplateRef(column.name)\"\n            [ngTemplateOutletContext]=\"{\n              value: getCellValue(column, row),\n              row: row,\n              column: column.name,\n              index: rowIndex\n            }\"\n          ></ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-content></ng-content>\n",
                        inputs: ['value'],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;overflow:hidden}:host .td-data-table-scrollable{position:relative;overflow:auto;height:calc(100% - 56px)}.td-data-table-column-resizer{right:0;width:6px;cursor:col-resize}.td-data-table-column-resizer,.td-data-table-column-resizer .td-data-table-column-separator{position:absolute;height:100%;top:0}.td-data-table-column-resizer .td-data-table-column-separator{left:2px}.td-data-table-column-resizer.td-resizing{cursor:-webkit-grabbing}table.td-data-table{width:auto!important}table.td-data-table.mat-selectable tbody>tr.td-data-table-row{-webkit-transition:background-color .2s;transition:background-color .2s}table.td-data-table.mat-selectable .td-data-table-column:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:first-child>.td-data-table-column-content-wrapper{width:18px;min-width:18px;padding:0 24px}table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-left:0}[dir=rtl] table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-right:0;padding-left:28px}table.td-data-table td.mat-checkbox-cell,table.td-data-table th.mat-checkbox-column{min-width:42px;width:42px;font-size:0!important}table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox,table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox{width:18px;height:18px}::ng-deep table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after,::ng-deep table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after{width:11px!important;height:4px!important}table.td-data-table td.mat-checkbox-cell mat-checkbox ::ng-deep .mat-checkbox-inner-container,table.td-data-table th.mat-checkbox-column mat-checkbox ::ng-deep .mat-checkbox-inner-container{width:18px;height:18px;margin:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.ElementRef },
            { type: platformBrowser.DomSanitizer },
            { type: core.ChangeDetectorRef }
        ]; };
        TdDataTableComponent.propDecorators = {
            _templates: [{ type: core.ContentChildren, args: [TdDataTableTemplateDirective, { descendants: true },] }],
            _scrollableDiv: [{ type: core.ViewChild, args: ['scrollableDiv', { static: true },] }],
            _colElements: [{ type: core.ViewChildren, args: ['columnElement',] }],
            _rows: [{ type: core.ViewChildren, args: [TdDataTableRowComponent,] }],
            data: [{ type: core.Input, args: ['data',] }],
            columns: [{ type: core.Input, args: ['columns',] }],
            resizableColumns: [{ type: core.Input, args: ['resizableColumns',] }],
            selectable: [{ type: core.Input, args: ['selectable',] }],
            clickable: [{ type: core.Input, args: ['clickable',] }],
            multiple: [{ type: core.Input, args: ['multiple',] }],
            sortable: [{ type: core.Input, args: ['sortable',] }],
            sortBy: [{ type: core.Input, args: ['sortBy',] }],
            sortOrder: [{ type: core.Input, args: ['sortOrder',] }],
            sortChange: [{ type: core.Output }],
            rowSelect: [{ type: core.Output }],
            rowClick: [{ type: core.Output }],
            selectAll: [{ type: core.Output }],
            compareWith: [{ type: core.Input }]
        };
        return TdDataTableComponent;
    }(_TdDataTableMixinBase));
    if (false) {
        /**
         * responsive width calculations
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._resizeSubs;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._rowsChangedSubs;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._hostWidth;
        /**
         * manually resizable columns
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._resizableColumns;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._columnClientX;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._columnResizeSubs;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._resizingColumn;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._onColumnResize;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._widths;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._onResize;
        /**
         * column header reposition and viewpoort
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._verticalScrollSubs;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._horizontalScrollSubs;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._scrollHorizontalOffset;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._onHorizontalScroll;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._onVerticalScroll;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._rowHeightCache;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._totalHeight;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._hostHeight;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._scrollVerticalOffset;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._offsetTransform;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._fromRow;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._toRow;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._valueChangesSubs;
        /**
         * internal attributes
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._data;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._virtualData;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._columns;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._selectable;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._clickable;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._multiple;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._allSelected;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._indeterminate;
        /**
         * sorting
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._sortable;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._sortBy;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._sortOrder;
        /**
         * shift select
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._shiftPreviouslyPressed;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._lastSelectedIndex;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._firstSelectedIndex;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._firstCheckboxValue;
        /**
         * template fetching support
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._templateMap;
        /** @type {?} */
        TdDataTableComponent.prototype._templates;
        /** @type {?} */
        TdDataTableComponent.prototype._scrollableDiv;
        /** @type {?} */
        TdDataTableComponent.prototype._colElements;
        /** @type {?} */
        TdDataTableComponent.prototype._rows;
        /**
         * sortChange?: function
         * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
         * Emits an [ITdDataTableSortChangeEvent] implemented object.
         * @type {?}
         */
        TdDataTableComponent.prototype.sortChange;
        /**
         * rowSelect?: function
         * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectEvent] implemented object.
         * @type {?}
         */
        TdDataTableComponent.prototype.rowSelect;
        /**
         * rowClick?: function
         * Event emitted when a row is clicked.
         * Emits an [ITdDataTableRowClickEvent] implemented object.
         * @type {?}
         */
        TdDataTableComponent.prototype.rowClick;
        /**
         * selectAll?: function
         * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectAllEvent] implemented object.
         * @type {?}
         */
        TdDataTableComponent.prototype.selectAll;
        /**
         * compareWith?: function(row, model): boolean
         * Allows custom comparison between row and model to see if row is selected or not
         * Default comparation is by reference
         * @type {?}
         */
        TdDataTableComponent.prototype.compareWith;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._document;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdDataTableComponent.prototype._domSanitizer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ITdDataTableSortChangeEvent() { }
    if (false) {
        /** @type {?} */
        ITdDataTableSortChangeEvent.prototype.order;
        /** @type {?} */
        ITdDataTableSortChangeEvent.prototype.name;
    }
    var TdDataTableColumnComponent = /** @class */ (function () {
        function TdDataTableColumnComponent(_elementRef, _renderer) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._sortOrder = TdDataTableSortingOrder.Ascending;
            /**
             * name?: string
             * Sets unique column [name] for [sortable] events.
             */
            this.name = '';
            /**
             * sortable?: boolean
             * Enables sorting events, sort icons and active column states.
             * Defaults to 'false'
             */
            this.sortable = false;
            /**
             * active?: boolean
             * Sets column to active state when 'true'.
             * Defaults to 'false'
             */
            this.active = false;
            /**
             * numeric?: boolean
             * Makes column follow the numeric data-table specs and sort icon.
             * Defaults to 'false'
             */
            this.numeric = false;
            /**
             * sortChange?: function
             * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
             * Emits an [ITdDataTableSortChangeEvent] implemented object.
             */
            this.sortChange = new core.EventEmitter();
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column');
        }
        Object.defineProperty(TdDataTableColumnComponent.prototype, "projectedWidth", {
            get: /**
             * @return {?}
             */
            function () {
                if (this._columnContent && this._columnContent.nativeElement) {
                    return ((/** @type {?} */ (this._columnContent.nativeElement))).getBoundingClientRect().width;
                }
                return 100;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "sortOrder", {
            /**
             * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
             * Sets the sort order of column.
             * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
             */
            set: /**
             * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
             * Sets the sort order of column.
             * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
             * @param {?} order
             * @return {?}
             */
            function (order) {
                /** @type {?} */
                var sortOrder = order ? order.toUpperCase() : 'ASC';
                if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
                    throw new Error('[sortOrder] must be empty, ASC or DESC');
                }
                this._sortOrder = sortOrder === 'ASC' ? TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "bindClickable", {
            get: /**
             * @return {?}
             */
            function () {
                return this.sortable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "bingSortable", {
            get: /**
             * @return {?}
             */
            function () {
                return this.sortable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "bindActive", {
            get: /**
             * @return {?}
             */
            function () {
                return this.active;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "bindNumeric", {
            get: /**
             * @return {?}
             */
            function () {
                return this.numeric;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listening to click event on host to throw a sort event
         */
        /**
         * Listening to click event on host to throw a sort event
         * @return {?}
         */
        TdDataTableColumnComponent.prototype.handleClick = /**
         * Listening to click event on host to throw a sort event
         * @return {?}
         */
        function () {
            if (this.sortable) {
                this.sortChange.emit({ name: this.name, order: this._sortOrder });
            }
        };
        /**
         * @return {?}
         */
        TdDataTableColumnComponent.prototype.isAscending = /**
         * @return {?}
         */
        function () {
            return this._sortOrder === TdDataTableSortingOrder.Ascending;
        };
        /**
         * @return {?}
         */
        TdDataTableColumnComponent.prototype.isDescending = /**
         * @return {?}
         */
        function () {
            return this._sortOrder === TdDataTableSortingOrder.Descending;
        };
        TdDataTableColumnComponent.decorators = [
            { type: core.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'th[td-data-table-column]',
                        template: "<span #columnContent class=\"td-data-table-heading\">\n  <mat-icon\n    class=\"td-data-table-sort-icon\"\n    *ngIf=\"sortable && numeric\"\n    [class.mat-asc]=\"isAscending()\"\n    [class.mat-desc]=\"isDescending()\"\n  >\n    arrow_upward\n  </mat-icon>\n  <span>\n    <ng-content></ng-content>\n  </span>\n  <mat-icon\n    class=\"td-data-table-sort-icon\"\n    *ngIf=\"sortable && !numeric\"\n    [class.mat-asc]=\"isAscending()\"\n    [class.mat-desc]=\"isDescending()\"\n  >\n    arrow_upward\n  </mat-icon>\n</span>\n<ng-content select=\"[td-column-resizer]\"></ng-content>\n",
                        styles: [":host{white-space:nowrap;position:relative;padding:0;vertical-align:middle;text-align:left}:host>.td-data-table-heading{padding:0 28px}:host:first-child>.td-data-table-heading{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host mat-icon{height:16px;width:16px;font-size:16px!important;line-height:16px!important}:host mat-icon.td-data-table-sort-icon{opacity:0;-webkit-transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;position:absolute;top:0}:host mat-icon.td-data-table-sort-icon.mat-asc{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}:host mat-icon.td-data-table-sort-icon.mat-desc{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}:host.mat-active.mat-sortable mat-icon.td-data-table-sort-icon,:host:hover.mat-sortable mat-icon.td-data-table-sort-icon{opacity:1}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host .td-data-table-heading{display:inline-block;position:relative}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:-22px;margin-right:initial}html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:6px;margin-right:initial}html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableColumnComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        TdDataTableColumnComponent.propDecorators = {
            _columnContent: [{ type: core.ViewChild, args: ['columnContent', { read: core.ElementRef, static: true },] }],
            name: [{ type: core.Input }],
            sortable: [{ type: core.Input }],
            active: [{ type: core.Input }],
            numeric: [{ type: core.Input }],
            sortOrder: [{ type: core.Input, args: ['sortOrder',] }],
            sortChange: [{ type: core.Output }],
            bindClickable: [{ type: core.HostBinding, args: ['class.mat-clickable',] }],
            bingSortable: [{ type: core.HostBinding, args: ['class.mat-sortable',] }],
            bindActive: [{ type: core.HostBinding, args: ['class.mat-active',] }],
            bindNumeric: [{ type: core.HostBinding, args: ['class.mat-numeric',] }],
            handleClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return TdDataTableColumnComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdDataTableColumnComponent.prototype._sortOrder;
        /** @type {?} */
        TdDataTableColumnComponent.prototype._columnContent;
        /**
         * name?: string
         * Sets unique column [name] for [sortable] events.
         * @type {?}
         */
        TdDataTableColumnComponent.prototype.name;
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         * @type {?}
         */
        TdDataTableColumnComponent.prototype.sortable;
        /**
         * active?: boolean
         * Sets column to active state when 'true'.
         * Defaults to 'false'
         * @type {?}
         */
        TdDataTableColumnComponent.prototype.active;
        /**
         * numeric?: boolean
         * Makes column follow the numeric data-table specs and sort icon.
         * Defaults to 'false'
         * @type {?}
         */
        TdDataTableColumnComponent.prototype.numeric;
        /**
         * sortChange?: function
         * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
         * Emits an [ITdDataTableSortChangeEvent] implemented object.
         * @type {?}
         */
        TdDataTableColumnComponent.prototype.sortChange;
        /**
         * @type {?}
         * @private
         */
        TdDataTableColumnComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdDataTableColumnComponent.prototype._renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDataTableCellComponent = /** @class */ (function () {
        function TdDataTableCellComponent(_elementRef, _renderer) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            /**
             * numeric?: boolean
             * Makes cell follow the numeric data-table specs.
             * Defaults to 'false'
             */
            this.numeric = false;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-cell');
        }
        Object.defineProperty(TdDataTableCellComponent.prototype, "align", {
            get: /**
             * @return {?}
             */
            function () {
                return this._align;
            },
            /**
             * align?: 'start' | 'center' | 'end'
             * Makes cell content align on demand
             * Defaults to 'left', overrides numeric
             */
            set: /**
             * align?: 'start' | 'center' | 'end'
             * Makes cell content align on demand
             * Defaults to 'left', overrides numeric
             * @param {?} align
             * @return {?}
             */
            function (align) {
                this._align = align;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableCellComponent.prototype, "bindNumeric", {
            get: /**
             * @return {?}
             */
            function () {
                return this.numeric;
            },
            enumerable: true,
            configurable: true
        });
        TdDataTableCellComponent.decorators = [
            { type: core.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'td[td-data-table-cell]',
                        template: "<div\n  class=\"td-data-table-cell-content-wrapper\"\n  [class.td-data-table-cell-numeric]=\"numeric\"\n  [class.td-data-table-cell-align-center]=\"align === 'center'\"\n  [class.td-data-table-cell-align-end]=\"align === 'end'\"\n  [class.td-data-table-cell-align-start]=\"align === 'start'\"\n>\n  <ng-content></ng-content>\n</div>\n",
                        styles: [":host{vertical-align:middle;text-align:left;padding:0}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>.td-data-table-cell-content-wrapper{padding:0 28px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-numeric{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host:first-child>.td-data-table-cell-content-wrapper{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableCellComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        TdDataTableCellComponent.propDecorators = {
            numeric: [{ type: core.Input }],
            align: [{ type: core.Input }],
            bindNumeric: [{ type: core.HostBinding, args: ['class.mat-numeric',] }]
        };
        return TdDataTableCellComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdDataTableCellComponent.prototype._align;
        /**
         * numeric?: boolean
         * Makes cell follow the numeric data-table specs.
         * Defaults to 'false'
         * @type {?}
         */
        TdDataTableCellComponent.prototype.numeric;
        /**
         * @type {?}
         * @private
         */
        TdDataTableCellComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdDataTableCellComponent.prototype._renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDataTableTableComponent = /** @class */ (function () {
        function TdDataTableTableComponent(_elementRef, _renderer) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table');
        }
        TdDataTableTableComponent.decorators = [
            { type: core.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'table[td-data-table]',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host{width:100%;position:relative;border-spacing:0;overflow:hidden;border-collapse:collapse}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableTableComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return TdDataTableTableComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdDataTableTableComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdDataTableTableComponent.prototype._renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_DATA_TABLE = [
        TdDataTableComponent,
        TdDataTableTemplateDirective,
        TdDataTableColumnComponent,
        TdDataTableCellComponent,
        TdDataTableRowComponent,
        TdDataTableColumnRowComponent,
        TdDataTableTableComponent,
    ];
    var CovalentDataTableModule = /** @class */ (function () {
        function CovalentDataTableModule() {
        }
        CovalentDataTableModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, checkbox.MatCheckboxModule, tooltip.MatTooltipModule, icon.MatIconModule, core$1.MatPseudoCheckboxModule],
                        declarations: [TD_DATA_TABLE],
                        exports: [TD_DATA_TABLE],
                    },] }
        ];
        return CovalentDataTableModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDataTableService = /** @class */ (function () {
        function TdDataTableService() {
        }
        /**
         * params:
         * - data: any[]
         * - searchTerm: string
         * - ignoreCase: boolean = false
         * - excludedColumns: string[] = []
         *
         * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
         */
        /**
         * params:
         * - data: any[]
         * - searchTerm: string
         * - ignoreCase: boolean = false
         * - excludedColumns: string[] = []
         *
         * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
         * @param {?} data
         * @param {?} searchTerm
         * @param {?=} ignoreCase
         * @param {?=} excludedColumns
         * @return {?}
         */
        TdDataTableService.prototype.filterData = /**
         * params:
         * - data: any[]
         * - searchTerm: string
         * - ignoreCase: boolean = false
         * - excludedColumns: string[] = []
         *
         * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
         * @param {?} data
         * @param {?} searchTerm
         * @param {?=} ignoreCase
         * @param {?=} excludedColumns
         * @return {?}
         */
        function (data, searchTerm, ignoreCase, excludedColumns) {
            if (ignoreCase === void 0) { ignoreCase = false; }
            /** @type {?} */
            var filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
            if (filter) {
                data = data.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    /** @type {?} */
                    var res = Object.keys(item).find((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) {
                        if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                            /** @type {?} */
                            var preItemValue = '' + item[key];
                            /** @type {?} */
                            var itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                            return itemValue.indexOf(filter) > -1;
                        }
                    }));
                    return typeof res !== 'undefined';
                }));
            }
            return data;
        };
        /**
         * params:
         * - data: any[]
         * - sortBy: string
         * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
         *
         * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
         */
        /**
         * params:
         * - data: any[]
         * - sortBy: string
         * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
         *
         * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
         * @param {?} data
         * @param {?} sortBy
         * @param {?=} sortOrder
         * @return {?}
         */
        TdDataTableService.prototype.sortData = /**
         * params:
         * - data: any[]
         * - sortBy: string
         * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
         *
         * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
         * @param {?} data
         * @param {?} sortBy
         * @param {?=} sortOrder
         * @return {?}
         */
        function (data, sortBy, sortOrder) {
            if (sortOrder === void 0) { sortOrder = TdDataTableSortingOrder.Ascending; }
            if (sortBy) {
                data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
                data.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) {
                    /** @type {?} */
                    var compA = a[sortBy];
                    /** @type {?} */
                    var compB = b[sortBy];
                    /** @type {?} */
                    var direction = 0;
                    if (!Number.isNaN(Number.parseFloat(compA)) && !Number.isNaN(Number.parseFloat(compB))) {
                        direction = Number.parseFloat(compA) - Number.parseFloat(compB);
                    }
                    else {
                        if (compA < compB) {
                            direction = -1;
                        }
                        else if (compA > compB) {
                            direction = 1;
                        }
                    }
                    return direction * (sortOrder === TdDataTableSortingOrder.Descending ? -1 : 1);
                }));
            }
            return data;
        };
        /**
         * params:
         * - data: any[]
         * - fromRow: number
         * - toRow: : number
         *
         * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
         */
        /**
         * params:
         * - data: any[]
         * - fromRow: number
         * - toRow: : number
         *
         * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
         * @param {?} data
         * @param {?} fromRow
         * @param {?} toRow
         * @return {?}
         */
        TdDataTableService.prototype.pageData = /**
         * params:
         * - data: any[]
         * - fromRow: number
         * - toRow: : number
         *
         * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
         * @param {?} data
         * @param {?} fromRow
         * @param {?} toRow
         * @return {?}
         */
        function (data, fromRow, toRow) {
            if (fromRow >= 1) {
                data = data.slice(fromRow - 1, toRow);
            }
            return data;
        };
        TdDataTableService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ TdDataTableService.ɵprov = core.ɵɵdefineInjectable({ factory: function TdDataTableService_Factory() { return new TdDataTableService(); }, token: TdDataTableService, providedIn: "root" });
        return TdDataTableService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

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
    /**
     * @record
     * @template T
     */
    function IDraggableRefs() { }
    if (false) {
        /** @type {?} */
        IDraggableRefs.prototype.matDialogRef;
        /** @type {?} */
        IDraggableRefs.prototype.dragRefSubject;
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
            var matDialogRef = this._dialogService.open(component, config);
            /** @type {?} */
            var dragRefSubject = new rxjs.Subject();
            /** @type {?} */
            var CDK_OVERLAY_PANE_SELECTOR = '.cdk-overlay-pane';
            /** @type {?} */
            var CDK_OVERLAY_CONTAINER_SELECTOR = '.cdk-overlay-container';
            matDialogRef.afterOpened().subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var dialogElement = (/** @type {?} */ (_this._document.getElementById(matDialogRef.id)));
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
                dragRefSubject.next(draggableElement);
            }));
            return { matDialogRef: matDialogRef, dragRefSubject: dragRefSubject };
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var corners = {
        topRight: 'topRight',
        bottomRight: 'bottomRight',
        bottomLeft: 'bottomLeft',
        topLeft: 'topLeft',
    };
    /** @enum {string} */
    var cursors = {
        nesw: 'nesw-resize',
        nwse: 'nwse-resize',
    };
    /** @enum {string} */
    var verticalAlignment = {
        top: 'top',
        bottom: 'bottom',
    };
    /** @enum {string} */
    var horizontalAlignment = {
        right: 'right',
        left: 'left',
    };
    /** @type {?} */
    var cornerWidth = '16px';
    /** @type {?} */
    var offset = '0px';
    /** @type {?} */
    var minWidth = 200;
    /** @type {?} */
    var minHeight = 200;
    /**
     * @param {?} sizeString
     * @return {?}
     */
    function getPixels(sizeString) {
        return parseFloat((sizeString || '').replace('px', ''));
    }
    /**
     * @param {?} min
     * @param {?} num
     * @param {?} max
     * @return {?}
     */
    function clamp(min, num, max) {
        return Math.min(Math.max(num, min), max);
    }
    var ResizableDraggableDialog = /** @class */ (function () {
        function ResizableDraggableDialog(_document, _renderer2, _dialogRef, _dragRef) {
            this._document = _document;
            this._renderer2 = _renderer2;
            this._dialogRef = _dialogRef;
            this._dragRef = _dragRef;
            this.cornerElements = [];
            this.pointerDownSubs = [];
            this._initialPositionReset();
            this._attachCorners();
        }
        /**
         * @return {?}
         */
        ResizableDraggableDialog.prototype.attach = /**
         * @return {?}
         */
        function () {
            this.detach();
            this._attachCorners();
        };
        /**
         * @return {?}
         */
        ResizableDraggableDialog.prototype.detach = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.pointerDownSubs.forEach((/**
             * @param {?} sub
             * @return {?}
             */
            function (sub) { return sub.unsubscribe(); }));
            this.pointerDownSubs = [];
            this.cornerElements.forEach((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) { return _this._renderer2.removeChild(_this._getDialogWrapper(), elem); }));
            this.cornerElements = [];
        };
        /**
         * @private
         * @return {?}
         */
        ResizableDraggableDialog.prototype._getDialogWrapper = /**
         * @private
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ (this._document.getElementById(this._dialogRef.id))) || {}).parentElement;
        };
        /**
         * @private
         * @return {?}
         */
        ResizableDraggableDialog.prototype._getViewportDimensions = /**
         * @private
         * @return {?}
         */
        function () {
            return this._getDialogWrapper().parentElement.getBoundingClientRect();
        };
        /**
         * @private
         * @return {?}
         */
        ResizableDraggableDialog.prototype._getDialogWrapperDimensions = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var dimensions = getComputedStyle(this._getDialogWrapper());
            return {
                width: getPixels(dimensions.width),
                height: getPixels(dimensions.height),
            };
        };
        /**
         * @private
         * @return {?}
         */
        ResizableDraggableDialog.prototype._initialPositionReset = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this._getViewportDimensions(), viewportWidth = _a.right, viewportHeight = _a.bottom;
            var _b = this._getDialogWrapperDimensions(), width = _b.width, height = _b.height;
            var _c = this._getDialogWrapper().style, originalDialogRight = _c.marginRight, originalDialogLeft = _c.marginLeft, originalDialogBottom = _c.marginBottom, originalDialogTop = _c.marginTop;
            /** @type {?} */
            var x;
            if (originalDialogLeft) {
                x = getPixels(originalDialogLeft);
            }
            else if (originalDialogRight) {
                x = viewportWidth - getPixels(originalDialogRight) - width;
            }
            else {
                x = (viewportWidth - width) / 2;
            }
            /** @type {?} */
            var y;
            if (originalDialogTop) {
                y = getPixels(originalDialogTop);
            }
            else if (originalDialogBottom) {
                y = viewportHeight - getPixels(originalDialogBottom) - height;
            }
            else {
                y = (viewportHeight - height) / 2;
            }
            // use drag ref's mechanisms for positioning instead of the dialog's
            this._dialogRef.updatePosition({ top: '0px', right: '0px', bottom: '0px', left: '0px' });
            this._dragRef.setFreeDragPosition({ x: x, y: y });
        };
        /**
         * @private
         * @return {?}
         */
        ResizableDraggableDialog.prototype._attachCorners = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            Object.values(corners).forEach((/**
             * @param {?} corner
             * @return {?}
             */
            function (corner) {
                /** @type {?} */
                var element = _this._renderer2.createElement('div');
                _this.cornerElements = __spread(_this.cornerElements, [element]);
                _this._renderer2.setStyle(element, 'position', 'absolute');
                _this._renderer2.setStyle(element, 'width', cornerWidth);
                _this._renderer2.setStyle(element, 'height', cornerWidth);
                _this._renderer2.appendChild(_this._getDialogWrapper(), element);
                /** @type {?} */
                var cursor;
                /** @type {?} */
                var topBottom;
                /** @type {?} */
                var rightLeft;
                if (corner === corners.topRight) {
                    cursor = cursors.nesw;
                    topBottom = verticalAlignment.top;
                    rightLeft = horizontalAlignment.right;
                }
                else if (corner === corners.bottomRight) {
                    cursor = cursors.nwse;
                    topBottom = verticalAlignment.bottom;
                    rightLeft = horizontalAlignment.right;
                    /** @type {?} */
                    var icon = _this._renderer2.createElement('i');
                    _this._renderer2.addClass(icon, 'material-icons');
                    _this._renderer2.appendChild(icon, _this._renderer2.createText('filter_list'));
                    _this._renderer2.appendChild(element, icon);
                    _this._renderer2.setStyle(icon, 'transform', "rotate(" + 315 + "deg) translate(0px, " + offset + ")");
                    _this._renderer2.setStyle(icon, 'font-size', cornerWidth);
                }
                else if (corner === corners.bottomLeft) {
                    cursor = cursors.nesw;
                    topBottom = verticalAlignment.bottom;
                    rightLeft = horizontalAlignment.left;
                }
                else if (corner === corners.topLeft) {
                    cursor = cursors.nwse;
                    topBottom = verticalAlignment.top;
                    rightLeft = horizontalAlignment.left;
                }
                _this._renderer2.setStyle(element, topBottom, offset);
                _this._renderer2.setStyle(element, rightLeft, offset);
                _this._renderer2.setStyle(element, 'cursor', cursor);
                /** @type {?} */
                var pointerDownSub = fromEvent.fromEvent(element, 'pointerdown').subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this._handleMouseDown(event, corner);
                }));
                _this.pointerDownSubs = __spread(_this.pointerDownSubs, [pointerDownSub]);
            }));
        };
        /**
         * @private
         * @param {?} event
         * @param {?} corner
         * @return {?}
         */
        ResizableDraggableDialog.prototype._handleMouseDown = /**
         * @private
         * @param {?} event
         * @param {?} corner
         * @return {?}
         */
        function (event, corner) {
            var _this = this;
            var _a = this._getDialogWrapperDimensions(), originalWidth = _a.width, originalHeight = _a.height;
            /** @type {?} */
            var originalMouseX = event.pageX;
            /** @type {?} */
            var originalMouseY = event.pageY;
            var _b = this._dragRef.getFreeDragPosition(), currentTransformX = _b.x, currentTransformY = _b.y;
            var _c = this._getDialogWrapper().getBoundingClientRect(), distanceFromBottom = _c.bottom, distanceFromRight = _c.right;
            var _d = this._getViewportDimensions(), viewportWidth = _d.right, viewportHeight = _d.bottom;
            /** @type {?} */
            var mouseMoveSub = fromEvent.fromEvent(window, 'pointermove').subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                e.preventDefault(); // prevent highlighting of text when dragging
                // prevent highlighting of text when dragging
                /** @type {?} */
                var yDelta = clamp(0, e.pageY, viewportHeight) - originalMouseY;
                /** @type {?} */
                var xDelta = clamp(0, e.pageX, viewportWidth) - originalMouseX;
                /** @type {?} */
                var newHeight;
                /** @type {?} */
                var newWidth;
                /** @type {?} */
                var newTransformY = 0;
                /** @type {?} */
                var newTransformX = 0;
                // top right
                if (corner === corners.topRight) {
                    newHeight = clamp(minHeight, originalHeight - yDelta, viewportHeight);
                    newWidth = clamp(minWidth, originalWidth + xDelta, viewportWidth);
                    newTransformY = clamp(0, currentTransformY + yDelta, distanceFromBottom - newHeight);
                    newTransformX = currentTransformX;
                }
                // bottom right
                else if (corner === corners.bottomRight) {
                    newHeight = clamp(minHeight, originalHeight + yDelta, viewportHeight);
                    newWidth = clamp(minWidth, originalWidth + xDelta, viewportWidth);
                    newTransformY = currentTransformY;
                    newTransformX = currentTransformX;
                }
                // bottom left
                else if (corner === corners.bottomLeft) {
                    newHeight = clamp(minHeight, originalHeight + yDelta, viewportHeight);
                    newWidth = clamp(minWidth, originalWidth - xDelta, viewportWidth);
                    newTransformY = currentTransformY;
                    newTransformX = clamp(0, currentTransformX + xDelta, distanceFromRight - newWidth);
                }
                // top left
                else if (corner === corners.topLeft) {
                    newHeight = clamp(minHeight, originalHeight - yDelta, viewportHeight);
                    newWidth = clamp(minWidth, originalWidth - xDelta, viewportWidth);
                    newTransformX = clamp(0, currentTransformX + xDelta, distanceFromRight - newWidth);
                    newTransformY = clamp(0, currentTransformY + yDelta, distanceFromBottom - newHeight);
                }
                _this._dialogRef.updateSize(newWidth + "px", newHeight + "px");
                _this._dragRef.setFreeDragPosition({
                    x: newTransformX,
                    y: newTransformY,
                });
            }));
            /** @type {?} */
            var mouseUpSub = rxjs.merge(fromEvent.fromEvent(window, 'pointerup'), fromEvent.fromEvent(window, 'pointercancel')).subscribe((/**
             * @return {?}
             */
            function () {
                mouseMoveSub.unsubscribe();
                mouseUpSub.unsubscribe();
            }));
        };
        return ResizableDraggableDialog;
    }());
    if (false) {
        /** @type {?} */
        ResizableDraggableDialog.prototype.cornerElements;
        /** @type {?} */
        ResizableDraggableDialog.prototype.pointerDownSubs;
        /**
         * @type {?}
         * @private
         */
        ResizableDraggableDialog.prototype._document;
        /**
         * @type {?}
         * @private
         */
        ResizableDraggableDialog.prototype._renderer2;
        /**
         * @type {?}
         * @private
         */
        ResizableDraggableDialog.prototype._dialogRef;
        /**
         * @type {?}
         * @private
         */
        ResizableDraggableDialog.prototype._dragRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdExpansionPanelHeaderDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelHeaderDirective, _super);
        function TdExpansionPanelHeaderDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdExpansionPanelHeaderDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-expansion-panel-header]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdExpansionPanelHeaderDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        return TdExpansionPanelHeaderDirective;
    }(portal.TemplatePortalDirective));
    var TdExpansionPanelLabelDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelLabelDirective, _super);
        function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdExpansionPanelLabelDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-expansion-panel-label]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdExpansionPanelLabelDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        return TdExpansionPanelLabelDirective;
    }(portal.TemplatePortalDirective));
    var TdExpansionPanelSublabelDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelSublabelDirective, _super);
        function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdExpansionPanelSublabelDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-expansion-panel-sublabel]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdExpansionPanelSublabelDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        return TdExpansionPanelSublabelDirective;
    }(portal.TemplatePortalDirective));
    var TdExpansionPanelSummaryComponent = /** @class */ (function () {
        function TdExpansionPanelSummaryComponent() {
        }
        TdExpansionPanelSummaryComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-expansion-summary',
                        template: '<ng-content></ng-content>'
                    }] }
        ];
        return TdExpansionPanelSummaryComponent;
    }());
    var TdExpansionPanelBase = /** @class */ (function () {
        function TdExpansionPanelBase() {
        }
        return TdExpansionPanelBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdExpansionPanelMixinBase = common$1.mixinDisableRipple(common$1.mixinDisabled(TdExpansionPanelBase));
    var TdExpansionPanelComponent = /** @class */ (function (_super) {
        __extends(TdExpansionPanelComponent, _super);
        function TdExpansionPanelComponent(_renderer, _elementRef) {
            var _this = _super.call(this) || this;
            _this._renderer = _renderer;
            _this._elementRef = _elementRef;
            _this._expand = false;
            /**
             * expanded?: function
             * Event emitted when [TdExpansionPanelComponent] is expanded.
             */
            _this.expanded = new core.EventEmitter();
            /**
             * collapsed?: function
             * Event emitted when [TdExpansionPanelComponent] is collapsed.
             */
            _this.collapsed = new core.EventEmitter();
            _this._renderer.addClass(_this._elementRef.nativeElement, 'td-expansion-panel');
            return _this;
        }
        Object.defineProperty(TdExpansionPanelComponent.prototype, "expand", {
            get: /**
             * @return {?}
             */
            function () {
                return this._expand;
            },
            /**
             * expand?: boolean
             * Toggles [TdExpansionPanelComponent] between expand/collapse.
             */
            set: /**
             * expand?: boolean
             * Toggles [TdExpansionPanelComponent] between expand/collapse.
             * @param {?} expand
             * @return {?}
             */
            function (expand) {
                this._setExpand(coercion.coerceBooleanProperty(expand));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method executed when [TdExpansionPanelComponent] is clicked.
         */
        /**
         * Method executed when [TdExpansionPanelComponent] is clicked.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.clickEvent = /**
         * Method executed when [TdExpansionPanelComponent] is clicked.
         * @return {?}
         */
        function () {
            this._setExpand(!this._expand);
        };
        /**
         * Toggle expand state of [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Toggle expand state of [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.toggle = /**
         * Toggle expand state of [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        function () {
            return this._setExpand(!this._expand);
        };
        /**
         * Opens [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Opens [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.open = /**
         * Opens [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        function () {
            return this._setExpand(true);
        };
        /**
         * Closes [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Closes [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.close = /**
         * Closes [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        function () {
            return this._setExpand(false);
        };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v && this._expand) {
                this._expand = false;
                this._onCollapsed();
            }
        };
        /**
         * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
         * event if 'false'. (Blocked if [disabled] is 'true')
         */
        /**
         * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * @private
         * @param {?} newExpand
         * @return {?}
         */
        TdExpansionPanelComponent.prototype._setExpand = /**
         * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * @private
         * @param {?} newExpand
         * @return {?}
         */
        function (newExpand) {
            if (this.disabled) {
                return false;
            }
            if (this._expand !== newExpand) {
                this._expand = newExpand;
                if (newExpand) {
                    this._renderer.addClass(this._elementRef.nativeElement, 'td-expanded');
                    this._onExpanded();
                }
                else {
                    this._renderer.removeClass(this._elementRef.nativeElement, 'td-expanded');
                    this._onCollapsed();
                }
                return true;
            }
            return false;
        };
        /**
         * @private
         * @return {?}
         */
        TdExpansionPanelComponent.prototype._onExpanded = /**
         * @private
         * @return {?}
         */
        function () {
            this.expanded.emit();
        };
        /**
         * @private
         * @return {?}
         */
        TdExpansionPanelComponent.prototype._onCollapsed = /**
         * @private
         * @return {?}
         */
        function () {
            this.collapsed.emit();
        };
        TdExpansionPanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-expansion-panel',
                        template: "<div\n  class=\"td-expansion-panel-header\"\n  [class.mat-disabled]=\"disabled\"\n  matRipple\n  [matRippleDisabled]=\"disabled || disableRipple\"\n  [tabIndex]=\"disabled ? -1 : 0\"\n  (keydown.enter)=\"clickEvent()\"\n  (click)=\"clickEvent()\"\n>\n  <ng-template [cdkPortalOutlet]=\"expansionPanelHeader\"></ng-template>\n  <div class=\"td-expansion-panel-header-content\" [class.mat-disabled]=\"disabled\" *ngIf=\"!expansionPanelHeader\">\n    <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelLabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelLabel\">{{ label }}</ng-template>\n    </div>\n    <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelSublabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelSublabel\">{{ sublabel }}</ng-template>\n    </div>\n    <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon>\n  </div>\n</div>\n<div class=\"td-expansion-content\" [@tdCollapse]=\"!expand\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-expansion-summary\" [@tdCollapse]=\"expand\">\n  <ng-content select=\"td-expansion-summary\"></ng-content>\n</div>\n",
                        inputs: ['disabled', 'disableRipple'],
                        animations: [common$1.tdCollapseAnimation, common$1.tdRotateAnimation],
                        styles: [":host{display:block}:host .td-expansion-panel-header{position:relative;outline:0}:host .td-expansion-panel-header:focus:not(.mat-disabled),:host .td-expansion-panel-header:hover:not(.mat-disabled){cursor:pointer}:host .td-expansion-panel-header .td-expansion-panel-header-content{height:48px;padding:0 24px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-expansion-content.ng-animating,:host .td-expansion-summary.ng-animating{overflow:hidden}.td-expansion-label,.td-expansion-sublabel{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:16px}::ng-deep [dir=rtl] .td-expansion-label,::ng-deep [dir=rtl] .td-expansion-sublabel{margin-left:16px;margin-right:inherit}"]
                    }] }
        ];
        /** @nocollapse */
        TdExpansionPanelComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdExpansionPanelComponent.propDecorators = {
            expansionPanelHeader: [{ type: core.ContentChild, args: [TdExpansionPanelHeaderDirective, { static: false },] }],
            expansionPanelLabel: [{ type: core.ContentChild, args: [TdExpansionPanelLabelDirective, { static: false },] }],
            expansionPanelSublabel: [{ type: core.ContentChild, args: [TdExpansionPanelSublabelDirective, { static: false },] }],
            label: [{ type: core.Input }],
            sublabel: [{ type: core.Input }],
            expand: [{ type: core.Input, args: ['expand',] }],
            expanded: [{ type: core.Output }],
            collapsed: [{ type: core.Output }]
        };
        return TdExpansionPanelComponent;
    }(_TdExpansionPanelMixinBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelComponent.prototype._expand;
        /** @type {?} */
        TdExpansionPanelComponent.prototype.expansionPanelHeader;
        /** @type {?} */
        TdExpansionPanelComponent.prototype.expansionPanelLabel;
        /** @type {?} */
        TdExpansionPanelComponent.prototype.expansionPanelSublabel;
        /**
         * label?: string
         * Sets label of [TdExpansionPanelComponent] header.
         * Defaults to 'Click to expand'
         * @type {?}
         */
        TdExpansionPanelComponent.prototype.label;
        /**
         * sublabel?: string
         * Sets sublabel of [TdExpansionPanelComponent] header.
         * @type {?}
         */
        TdExpansionPanelComponent.prototype.sublabel;
        /**
         * expanded?: function
         * Event emitted when [TdExpansionPanelComponent] is expanded.
         * @type {?}
         */
        TdExpansionPanelComponent.prototype.expanded;
        /**
         * collapsed?: function
         * Event emitted when [TdExpansionPanelComponent] is collapsed.
         * @type {?}
         */
        TdExpansionPanelComponent.prototype.collapsed;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelComponent.prototype._elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdExpansionPanelGroupComponent = /** @class */ (function () {
        function TdExpansionPanelGroupComponent(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._multi = false;
            this._lastOpenedPanels = [];
            this._destroyed = new rxjs.Subject();
            this._stopWatchingPanels = new rxjs.Subject();
            this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
        }
        Object.defineProperty(TdExpansionPanelGroupComponent.prototype, "multi", {
            /**
             * multi?: boolean
             * Sets whether multiple panels can be opened at a given time.
             * Set to false for accordion mode.
             * Defaults to false.
             */
            set: /**
             * multi?: boolean
             * Sets whether multiple panels can be opened at a given time.
             * Set to false for accordion mode.
             * Defaults to false.
             * @param {?} multi
             * @return {?}
             */
            function (multi) {
                this._multi = coercion.coerceBooleanProperty(multi);
                if (this._multi === false && this._lastOpenedPanels.length > 0) {
                    this._closeAllExcept(this._lastOpenedPanels[this._lastOpenedPanels.length - 1]);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._destroyed.next(true);
            this._destroyed.unsubscribe();
            this._stopWatchingPanels.next(true);
            this._stopWatchingPanels.unsubscribe();
        };
        /**
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this._multi) {
                /** @type {?} */
                var openedPanels = this.expansionPanels.filter((/**
                 * @param {?} expansionPanel
                 * @return {?}
                 */
                function (expansionPanel) { return expansionPanel.expand; }));
                /** @type {?} */
                var numOpenedPanels = openedPanels.length;
                if (numOpenedPanels > 1) {
                    this._closeAllExcept(openedPanels[numOpenedPanels - 1]);
                }
            }
            this._attachListeners(this.expansionPanels);
            this.expansionPanels.changes
                .pipe(operators.takeUntil(this._destroyed))
                .subscribe((/**
             * @param {?} expansionPanels
             * @return {?}
             */
            function (expansionPanels) {
                _this._stopWatchingPanels.next(true);
                _this._stopWatchingPanels.unsubscribe();
                _this._stopWatchingPanels = new rxjs.Subject();
                _this._attachListeners(expansionPanels);
            }));
        };
        /**
         * Opens all expansion panels, only if multi set set to true.
         */
        /**
         * Opens all expansion panels, only if multi set set to true.
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.openAll = /**
         * Opens all expansion panels, only if multi set set to true.
         * @return {?}
         */
        function () {
            if (this._multi) {
                this.expansionPanels.forEach((/**
                 * @param {?} expansionPanel
                 * @return {?}
                 */
                function (expansionPanel) {
                    expansionPanel.open();
                }));
            }
        };
        /**
         * Closes all expansion panels
         */
        /**
         * Closes all expansion panels
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.closeAll = /**
         * Closes all expansion panels
         * @return {?}
         */
        function () {
            this.expansionPanels.forEach((/**
             * @param {?} expansionPanel
             * @return {?}
             */
            function (expansionPanel) {
                expansionPanel.close();
            }));
        };
        /**
         * @private
         * @param {?} expansionPanels
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype._attachListeners = /**
         * @private
         * @param {?} expansionPanels
         * @return {?}
         */
        function (expansionPanels) {
            var _this = this;
            this._lastOpenedPanels = [];
            expansionPanels.forEach((/**
             * @param {?} expansionPanel
             * @return {?}
             */
            function (expansionPanel) {
                expansionPanel.expanded.pipe(operators.takeUntil(_this._stopWatchingPanels)).subscribe((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                    if (indexOfPanel !== -1) {
                        _this._lastOpenedPanels.splice(indexOfPanel, 1);
                    }
                    _this._lastOpenedPanels.push(expansionPanel);
                    if (!_this._multi) {
                        _this._closeAllExcept(expansionPanel);
                    }
                }));
                expansionPanel.collapsed.pipe(operators.takeUntil(_this._stopWatchingPanels)).subscribe((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                    if (indexOfPanel !== -1) {
                        _this._lastOpenedPanels.splice(indexOfPanel, 1);
                    }
                }));
            }));
        };
        /**
         * @private
         * @param {?} expansionPanel
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype._closeAllExcept = /**
         * @private
         * @param {?} expansionPanel
         * @return {?}
         */
        function (expansionPanel) {
            this.expansionPanels.forEach((/**
             * @param {?} panel
             * @return {?}
             */
            function (panel) {
                if (panel !== expansionPanel) {
                    panel.close();
                }
            }));
        };
        TdExpansionPanelGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-expansion-panel-group',
                        template: "<ng-content></ng-content>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TdExpansionPanelGroupComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdExpansionPanelGroupComponent.propDecorators = {
            multi: [{ type: core.Input, args: ['multi',] }],
            expansionPanels: [{ type: core.ContentChildren, args: [TdExpansionPanelComponent, { descendants: true },] }]
        };
        return TdExpansionPanelGroupComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelGroupComponent.prototype._multi;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelGroupComponent.prototype._lastOpenedPanels;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelGroupComponent.prototype._destroyed;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelGroupComponent.prototype._stopWatchingPanels;
        /** @type {?} */
        TdExpansionPanelGroupComponent.prototype.expansionPanels;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelGroupComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelGroupComponent.prototype._elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_EXPANSION_PANEL = [
        TdExpansionPanelGroupComponent,
        TdExpansionPanelComponent,
        TdExpansionPanelHeaderDirective,
        TdExpansionPanelLabelDirective,
        TdExpansionPanelSublabelDirective,
        TdExpansionPanelSummaryComponent,
    ];
    var CovalentExpansionPanelModule = /** @class */ (function () {
        function CovalentExpansionPanelModule() {
        }
        CovalentExpansionPanelModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, core$1.MatRippleModule, icon.MatIconModule, portal.PortalModule],
                        declarations: [TD_EXPANSION_PANEL],
                        exports: [TD_EXPANSION_PANEL],
                    },] }
        ];
        return CovalentExpansionPanelModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdFileSelectDirective = /** @class */ (function () {
        function TdFileSelectDirective(model) {
            this.model = model;
            this._multiple = false;
            /**
             * fileSelect?: function
             * Event emitted when a file or files are selected in host [HTMLInputElement].
             * Emits a [FileList | File] object.
             * Alternative to not use [(ngModel)].
             */
            this.fileSelect = new core.EventEmitter();
        }
        Object.defineProperty(TdFileSelectDirective.prototype, "multiple", {
            /**
             * multiple?: boolean
             * Sets whether multiple files can be selected at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             */
            set: /**
             * multiple?: boolean
             * Sets whether multiple files can be selected at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             * @param {?} multiple
             * @return {?}
             */
            function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileSelectDirective.prototype, "multipleBinding", {
            /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             */
            get: /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             * @return {?}
             */
            function () {
                return this._multiple ? '' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'fileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'fileSelect' event.
         */
        /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'fileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'fileSelect' event.
         * @param {?} event
         * @return {?}
         */
        TdFileSelectDirective.prototype.onChange = /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'fileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'fileSelect' event.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.target instanceof HTMLInputElement) {
                /** @type {?} */
                var fileInputEl = event.target;
                /** @type {?} */
                var files = fileInputEl.files;
                if (files.length) {
                    /** @type {?} */
                    var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                    this.model ? this.model.update.emit(value) : this.fileSelect.emit(value);
                }
            }
        };
        TdFileSelectDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdFileSelect]',
                    },] }
        ];
        /** @nocollapse */
        TdFileSelectDirective.ctorParameters = function () { return [
            { type: forms.NgModel, decorators: [{ type: core.Optional }, { type: core.Host }] }
        ]; };
        TdFileSelectDirective.propDecorators = {
            multiple: [{ type: core.Input, args: ['multiple',] }],
            fileSelect: [{ type: core.Output }],
            multipleBinding: [{ type: core.HostBinding, args: ['attr.multiple',] }],
            onChange: [{ type: core.HostListener, args: ['change', ['$event'],] }]
        };
        return TdFileSelectDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdFileSelectDirective.prototype._multiple;
        /**
         * fileSelect?: function
         * Event emitted when a file or files are selected in host [HTMLInputElement].
         * Emits a [FileList | File] object.
         * Alternative to not use [(ngModel)].
         * @type {?}
         */
        TdFileSelectDirective.prototype.fileSelect;
        /**
         * @type {?}
         * @private
         */
        TdFileSelectDirective.prototype.model;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdFileDropBase = /** @class */ (function () {
        function TdFileDropBase() {
        }
        return TdFileDropBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileDropMixinBase = common$1.mixinDisabled(TdFileDropBase);
    var TdFileDropDirective = /** @class */ (function (_super) {
        __extends(TdFileDropDirective, _super);
        function TdFileDropDirective(_renderer, _element) {
            var _this = _super.call(this) || this;
            _this._renderer = _renderer;
            _this._element = _element;
            _this._multiple = false;
            /**
             * fileDrop?: function
             * Event emitted when a file or files are dropped in host element after being validated.
             * Emits a [FileList | File] object.
             */
            _this.fileDrop = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileDropDirective.prototype, "multiple", {
            /**
             * multiple?: boolean
             * Sets whether multiple files can be dropped at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             */
            set: /**
             * multiple?: boolean
             * Sets whether multiple files can be dropped at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             * @param {?} multiple
             * @return {?}
             */
            function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileDropDirective.prototype, "multipleBinding", {
            /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             */
            get: /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             * @return {?}
             */
            function () {
                return this._multiple ? '' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileDropDirective.prototype, "disabledBinding", {
            /**
             * Binds native 'disabled' attribute if [disabled] property is 'true'.
             */
            get: /**
             * Binds native 'disabled' attribute if [disabled] property is 'true'.
             * @return {?}
             */
            function () {
                return this.disabled ? '' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listens to 'drop' host event to get validated transfer items.
         * Emits the 'fileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Stops event propagation and default action from browser for 'drop' event.
         */
        /**
         * Listens to 'drop' host event to get validated transfer items.
         * Emits the 'fileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Stops event propagation and default action from browser for 'drop' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDrop = /**
         * Listens to 'drop' host event to get validated transfer items.
         * Emits the 'fileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Stops event propagation and default action from browser for 'drop' event.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!this.disabled) {
                /** @type {?} */
                var transfer = ((/** @type {?} */ (event))).dataTransfer;
                /** @type {?} */
                var files = transfer.files;
                if (files.length) {
                    /** @type {?} */
                    var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                    this.fileDrop.emit(value);
                }
            }
            this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
            this._stopEvent(event);
        };
        /**
         * Listens to 'dragover' host event to validate transfer items.
         * Checks if 'multiple' attr exists in host to allow multiple file drops.
         * Stops event propagation and default action from browser for 'dragover' event.
         */
        /**
         * Listens to 'dragover' host event to validate transfer items.
         * Checks if 'multiple' attr exists in host to allow multiple file drops.
         * Stops event propagation and default action from browser for 'dragover' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDragOver = /**
         * Listens to 'dragover' host event to validate transfer items.
         * Checks if 'multiple' attr exists in host to allow multiple file drops.
         * Stops event propagation and default action from browser for 'dragover' event.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var transfer = ((/** @type {?} */ (event))).dataTransfer;
            transfer.dropEffect = this._typeCheck(transfer.types);
            if (this.disabled ||
                (!this._multiple && ((transfer.items && transfer.items.length > 1) || ((/** @type {?} */ (transfer))).mozItemCount > 1))) {
                transfer.dropEffect = 'none';
            }
            else {
                transfer.dropEffect = 'copy';
            }
            this._stopEvent(event);
        };
        /**
         * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
         * Stops event propagation and default action from browser for 'dragenter' event.
         */
        /**
         * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
         * Stops event propagation and default action from browser for 'dragenter' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDragEnter = /**
         * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
         * Stops event propagation and default action from browser for 'dragenter' event.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!this.disabled) {
                this._renderer.addClass(this._element.nativeElement, 'drop-zone');
            }
            this._stopEvent(event);
        };
        /**
         * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
         * Stops event propagation and default action from browser for 'dragleave' event.
         */
        /**
         * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
         * Stops event propagation and default action from browser for 'dragleave' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDragLeave = /**
         * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
         * Stops event propagation and default action from browser for 'dragleave' event.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
            this._stopEvent(event);
        };
        /**
         * Validates if the transfer item types are 'Files'.
         */
        /**
         * Validates if the transfer item types are 'Files'.
         * @private
         * @param {?} types
         * @return {?}
         */
        TdFileDropDirective.prototype._typeCheck = /**
         * Validates if the transfer item types are 'Files'.
         * @private
         * @param {?} types
         * @return {?}
         */
        function (types) {
            /** @type {?} */
            var dropEffect = 'none';
            if (types &&
                ((((/** @type {?} */ (types))).contains && ((/** @type {?} */ (types))).contains('Files')) ||
                    (((/** @type {?} */ (types))).indexOf && ((/** @type {?} */ (types))).indexOf('Files') !== -1))) {
                dropEffect = 'copy';
            }
            return dropEffect;
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype._stopEvent = /**
         * @private
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        TdFileDropDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdFileDrop]',
                        inputs: ['disabled'],
                    },] }
        ];
        /** @nocollapse */
        TdFileDropDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        TdFileDropDirective.propDecorators = {
            multiple: [{ type: core.Input, args: ['multiple',] }],
            fileDrop: [{ type: core.Output }],
            multipleBinding: [{ type: core.HostBinding, args: ['attr.multiple',] }],
            disabledBinding: [{ type: core.HostBinding, args: ['attr.disabled',] }],
            onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
            onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
            onDragEnter: [{ type: core.HostListener, args: ['dragenter', ['$event'],] }],
            onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }]
        };
        return TdFileDropDirective;
    }(_TdFileDropMixinBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdFileDropDirective.prototype._multiple;
        /**
         * fileDrop?: function
         * Event emitted when a file or files are dropped in host element after being validated.
         * Emits a [FileList | File] object.
         * @type {?}
         */
        TdFileDropDirective.prototype.fileDrop;
        /**
         * @type {?}
         * @private
         */
        TdFileDropDirective.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdFileDropDirective.prototype._element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdFileInputLabelDirective = /** @class */ (function (_super) {
        __extends(TdFileInputLabelDirective, _super);
        function TdFileInputLabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdFileInputLabelDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-file-input-label]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdFileInputLabelDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        return TdFileInputLabelDirective;
    }(portal.TemplatePortalDirective));
    var TdFileInputBase = /** @class */ (function () {
        function TdFileInputBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdFileInputBase;
    }());
    if (false) {
        /** @type {?} */
        TdFileInputBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileInputMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdFileInputBase));
    var TdFileInputComponent = /** @class */ (function (_super) {
        __extends(TdFileInputComponent, _super);
        function TdFileInputComponent(_renderer, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._renderer = _renderer;
            _this._multiple = false;
            /**
             * select?: function
             * Event emitted a file is selected
             * Emits a [File | FileList] object.
             */
            _this.select = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileInputComponent.prototype, "inputElement", {
            get: /**
             * @return {?}
             */
            function () {
                return this._inputElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileInputComponent.prototype, "multiple", {
            get: /**
             * @return {?}
             */
            function () {
                return this._multiple;
            },
            /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
             */
            set: /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
             * @param {?} multiple
             * @return {?}
             */
            function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method executed when a file is selected.
         */
        /**
         * Method executed when a file is selected.
         * @param {?} files
         * @return {?}
         */
        TdFileInputComponent.prototype.handleSelect = /**
         * Method executed when a file is selected.
         * @param {?} files
         * @return {?}
         */
        function (files) {
            this.writeValue(files);
            this.select.emit(files);
        };
        /**
         * Used to clear the selected files from the [TdFileInputComponent].
         */
        /**
         * Used to clear the selected files from the [TdFileInputComponent].
         * @return {?}
         */
        TdFileInputComponent.prototype.clear = /**
         * Used to clear the selected files from the [TdFileInputComponent].
         * @return {?}
         */
        function () {
            this.writeValue(undefined);
            this._renderer.setProperty(this.inputElement, 'value', '');
        };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdFileInputComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v) {
                this.clear();
            }
        };
        /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         */
        /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
        TdFileInputComponent.prototype.setDisabledState = /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        TdFileInputComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdFileInputComponent; })),
                                multi: true,
                            },
                        ],
                        selector: 'td-file-input',
                        inputs: ['disabled', 'value'],
                        template: "<div>\n  <button\n    mat-raised-button\n    class=\"td-file-input\"\n    type=\"button\"\n    [color]=\"color\"\n    [multiple]=\"multiple\"\n    [disabled]=\"disabled\"\n    (keyup.enter)=\"fileInput.click()\"\n    (click)=\"fileInput.click()\"\n    (fileDrop)=\"handleSelect($event)\"\n    tdFileDrop\n  >\n    <ng-content></ng-content>\n  </button>\n  <input\n    #fileInput\n    class=\"td-file-input-hidden\"\n    type=\"file\"\n    [attr.accept]=\"accept\"\n    (fileSelect)=\"handleSelect($event)\"\n    [multiple]=\"multiple\"\n    [disabled]=\"disabled\"\n    tdFileSelect\n  />\n</div>\n",
                        styles: [":host .td-file-input{padding-left:8px;padding-right:8px}:host input.td-file-input-hidden{display:none}:host .drop-zone{border-radius:3px}:host .drop-zone *{pointer-events:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdFileInputComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        TdFileInputComponent.propDecorators = {
            _inputElement: [{ type: core.ViewChild, args: ['fileInput', { static: true },] }],
            color: [{ type: core.Input }],
            multiple: [{ type: core.Input, args: ['multiple',] }],
            accept: [{ type: core.Input }],
            select: [{ type: core.Output }]
        };
        return TdFileInputComponent;
    }(_TdFileInputMixinBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdFileInputComponent.prototype._multiple;
        /**
         * The native `<input type="file"> element
         * @type {?}
         */
        TdFileInputComponent.prototype._inputElement;
        /**
         * color?: 'accent' | 'primary' | 'warn'
         * Sets button color. Uses same color palette accepted as [MatButton].
         * @type {?}
         */
        TdFileInputComponent.prototype.color;
        /**
         * accept?: string
         * Sets files accepted when opening the file browser dialog.
         * Same as 'accept' attribute in <input/> element.
         * @type {?}
         */
        TdFileInputComponent.prototype.accept;
        /**
         * select?: function
         * Event emitted a file is selected
         * Emits a [File | FileList] object.
         * @type {?}
         */
        TdFileInputComponent.prototype.select;
        /**
         * @type {?}
         * @private
         */
        TdFileInputComponent.prototype._renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdFileUploadBase = /** @class */ (function () {
        function TdFileUploadBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdFileUploadBase;
    }());
    if (false) {
        /** @type {?} */
        TdFileUploadBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileUploadMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdFileUploadBase));
    var TdFileUploadComponent = /** @class */ (function (_super) {
        __extends(TdFileUploadComponent, _super);
        function TdFileUploadComponent(_changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._multiple = false;
            _this._required = false;
            /**
             * defaultColor?: 'accent' | 'primary' | 'warn'
             * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
             */
            _this.defaultColor = 'primary';
            /**
             * activeColor?: 'accent' | 'primary' | 'warn'
             * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
             */
            _this.activeColor = 'accent';
            /**
             * cancelColor?: 'accent' | 'primary' | 'warn'
             * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
             */
            _this.cancelColor = 'warn';
            /**
             * select?: function
             * Event emitted when a file is selected.
             * Emits a [File | FileList] object.
             */
            _this.select = new core.EventEmitter();
            /**
             * upload?: function
             * Event emitted when upload button is clicked.
             * Emits a [File | FileList] object.
             */
            _this.upload = new core.EventEmitter();
            /**
             * cancel?: function
             * Event emitted when cancel button is clicked.
             */
            _this.cancel = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
            get: /**
             * @return {?}
             */
            function () {
                return this._multiple;
            },
            /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
             */
            set: /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
             * @param {?} multiple
             * @return {?}
             */
            function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileUploadComponent.prototype, "required", {
            get: /**
             * @return {?}
             */
            function () {
                return this._required;
            },
            /**
             * required?: boolean
             * Forces at least one file upload.
             * Defaults to 'false'
             */
            set: /**
             * required?: boolean
             * Forces at least one file upload.
             * Defaults to 'false'
             * @param {?} required
             * @return {?}
             */
            function (required) {
                this._required = coercion.coerceBooleanProperty(required);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method executed when upload button is clicked.
         */
        /**
         * Method executed when upload button is clicked.
         * @return {?}
         */
        TdFileUploadComponent.prototype.uploadPressed = /**
         * Method executed when upload button is clicked.
         * @return {?}
         */
        function () {
            if (this.value) {
                this.upload.emit(this.value);
            }
        };
        /**
         * Method executed when a file is selected.
         */
        /**
         * Method executed when a file is selected.
         * @param {?} value
         * @return {?}
         */
        TdFileUploadComponent.prototype.handleSelect = /**
         * Method executed when a file is selected.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.value = value;
            this.select.emit(value);
        };
        /**
         * Methods executed when cancel button is clicked.
         * Clears files.
         */
        /**
         * Methods executed when cancel button is clicked.
         * Clears files.
         * @return {?}
         */
        TdFileUploadComponent.prototype._cancel = /**
         * Methods executed when cancel button is clicked.
         * Clears files.
         * @return {?}
         */
        function () {
            this.value = undefined;
            this.cancel.emit();
            // check if the file input is rendered before clearing it
            if (this.fileInput) {
                this.fileInput.clear();
            }
        };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdFileUploadComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v) {
                this._cancel();
            }
        };
        TdFileUploadComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdFileUploadComponent; })),
                                multi: true,
                            },
                        ],
                        selector: 'td-file-upload',
                        inputs: ['disabled', 'value'],
                        template: "<td-file-input\n  *ngIf=\"!value\"\n  [(ngModel)]=\"value\"\n  [multiple]=\"multiple\"\n  [disabled]=\"disabled\"\n  [accept]=\"accept\"\n  [color]=\"defaultColor\"\n  (select)=\"handleSelect($event)\"\n>\n  <ng-template [cdkPortalOutlet]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button\n    #fileUpload\n    class=\"td-file-upload\"\n    mat-raised-button\n    type=\"button\"\n    [color]=\"activeColor\"\n    (keyup.delete)=\"_cancel()\"\n    (keyup.backspace)=\"_cancel()\"\n    (keyup.escape)=\"_cancel()\"\n    (click)=\"uploadPressed()\"\n  >\n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button type=\"button\" class=\"td-file-upload-cancel\" [color]=\"cancelColor\" (click)=\"_cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>\n",
                        styles: [".td-file-upload{padding-left:8px;padding-right:8px}.td-file-upload-cancel{height:24px;width:24px;position:relative;top:24px;left:-12px}::ng-deep [dir=rtl] .td-file-upload-cancel{right:-12px;left:0}.td-file-upload-cancel mat-icon{border-radius:12px;vertical-align:baseline}.drop-zone{border-radius:3px}.drop-zone *{pointer-events:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdFileUploadComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        TdFileUploadComponent.propDecorators = {
            fileInput: [{ type: core.ViewChild, args: [TdFileInputComponent, { static: false },] }],
            inputLabel: [{ type: core.ContentChild, args: [TdFileInputLabelDirective, { static: false },] }],
            defaultColor: [{ type: core.Input }],
            activeColor: [{ type: core.Input }],
            cancelColor: [{ type: core.Input }],
            multiple: [{ type: core.Input, args: ['multiple',] }],
            required: [{ type: core.Input, args: ['required',] }],
            accept: [{ type: core.Input }],
            select: [{ type: core.Output }],
            upload: [{ type: core.Output }],
            cancel: [{ type: core.Output }]
        };
        return TdFileUploadComponent;
    }(_TdFileUploadMixinBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdFileUploadComponent.prototype._multiple;
        /**
         * @type {?}
         * @private
         */
        TdFileUploadComponent.prototype._required;
        /** @type {?} */
        TdFileUploadComponent.prototype.fileInput;
        /** @type {?} */
        TdFileUploadComponent.prototype.inputLabel;
        /**
         * defaultColor?: 'accent' | 'primary' | 'warn'
         * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
         * @type {?}
         */
        TdFileUploadComponent.prototype.defaultColor;
        /**
         * activeColor?: 'accent' | 'primary' | 'warn'
         * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
         * @type {?}
         */
        TdFileUploadComponent.prototype.activeColor;
        /**
         * cancelColor?: 'accent' | 'primary' | 'warn'
         * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
         * @type {?}
         */
        TdFileUploadComponent.prototype.cancelColor;
        /**
         * accept?: string
         * Sets files accepted when opening the file browser dialog.
         * Same as 'accept' attribute in <input/> element.
         * @type {?}
         */
        TdFileUploadComponent.prototype.accept;
        /**
         * select?: function
         * Event emitted when a file is selected.
         * Emits a [File | FileList] object.
         * @type {?}
         */
        TdFileUploadComponent.prototype.select;
        /**
         * upload?: function
         * Event emitted when upload button is clicked.
         * Emits a [File | FileList] object.
         * @type {?}
         */
        TdFileUploadComponent.prototype.upload;
        /**
         * cancel?: function
         * Event emitted when cancel button is clicked.
         * @type {?}
         */
        TdFileUploadComponent.prototype.cancel;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_FILE = [
        TdFileSelectDirective,
        TdFileDropDirective,
        TdFileUploadComponent,
        TdFileInputComponent,
        TdFileInputLabelDirective,
    ];
    var CovalentFileModule = /** @class */ (function () {
        function CovalentFileModule() {
        }
        CovalentFileModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [forms.FormsModule, common.CommonModule, icon.MatIconModule, button.MatButtonModule, portal.PortalModule],
                        declarations: [TD_FILE],
                        exports: [TD_FILE],
                    },] }
        ];
        return CovalentFileModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @deprecated should be removed in favor of IUploadInit
     * \@breaking-change 3.0.0
     * @record
     */
    function IUploadOptions() { }
    if (false) {
        /** @type {?} */
        IUploadOptions.prototype.url;
        /** @type {?} */
        IUploadOptions.prototype.method;
        /** @type {?|undefined} */
        IUploadOptions.prototype.file;
        /** @type {?|undefined} */
        IUploadOptions.prototype.headers;
        /** @type {?|undefined} */
        IUploadOptions.prototype.formData;
    }
    /**
     * @record
     */
    function IUploadExtras() { }
    if (false) {
        /** @type {?|undefined} */
        IUploadExtras.prototype.headers;
        /** @type {?|undefined} */
        IUploadExtras.prototype.params;
    }
    var TdFileService = /** @class */ (function () {
        /**
         * Creates a new instance
         * @param _http the http client instance
         * @breaking-change 3.0.0 remove 'Optional' decorator once the legay upload method is removed
         */
        function TdFileService(_http) {
            this._http = _http;
            this._progressSubject = new rxjs.Subject();
            this._progressObservable = this._progressSubject.asObservable();
        }
        Object.defineProperty(TdFileService.prototype, "progress", {
            /**
             * Gets progress observable to keep track of the files being uploaded.
             * Needs to be supported by backend.
             */
            get: /**
             * Gets progress observable to keep track of the files being uploaded.
             * Needs to be supported by backend.
             * @return {?}
             */
            function () {
                return this._progressObservable;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Uploads a file to URL.
         */
        /**
         * Uploads a file to URL.
         * @param {?} url
         * @param {?} method
         * @param {?} body
         * @param {?=} __3
         * @return {?}
         */
        TdFileService.prototype.send = /**
         * Uploads a file to URL.
         * @param {?} url
         * @param {?} method
         * @param {?} body
         * @param {?=} __3
         * @return {?}
         */
        function (url, method, body, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, headers = _b.headers, params = _b.params;
            if (!this._http) {
                throw new Error('The HttpClient module needs to be imported at root module level');
            }
            /** @type {?} */
            var req = new http.HttpRequest(method.toUpperCase(), url, body, {
                reportProgress: true,
                headers: new http.HttpHeaders(headers || {}),
                params: new http.HttpParams({ fromObject: params || {} }),
            });
            return this._http.request(req).pipe(operators.tap((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.handleEvent(event); })));
        };
        /**
         * params:
         * - options: IUploadOptions {
         *     url: string,
         *     method: 'post' | 'put',
         *     file?: File,
         *     headers?: {[key: string]: string},
         *     formData?: FormData
         * }
         *
         * Uses underlying [XMLHttpRequest] to upload a file to a url.
         * @deprecated use send instead
         * @breaking-change 3.0.0
         */
        /**
         * params:
         * - options: IUploadOptions {
         *     url: string,
         *     method: 'post' | 'put',
         *     file?: File,
         *     headers?: {[key: string]: string},
         *     formData?: FormData
         * }
         *
         * Uses underlying [XMLHttpRequest] to upload a file to a url.
         * @deprecated use send instead
         * \@breaking-change 3.0.0
         * @param {?} options
         * @return {?}
         */
        TdFileService.prototype.upload = /**
         * params:
         * - options: IUploadOptions {
         *     url: string,
         *     method: 'post' | 'put',
         *     file?: File,
         *     headers?: {[key: string]: string},
         *     formData?: FormData
         * }
         *
         * Uses underlying [XMLHttpRequest] to upload a file to a url.
         * @deprecated use send instead
         * \@breaking-change 3.0.0
         * @param {?} options
         * @return {?}
         */
        function (options) {
            var _this = this;
            return new rxjs.Observable((/**
             * @param {?} subscriber
             * @return {?}
             */
            function (subscriber) {
                var e_1, _a;
                /** @type {?} */
                var xhr = new XMLHttpRequest();
                /** @type {?} */
                var formData = new FormData();
                if (options.file !== undefined) {
                    formData.append('file', options.file);
                }
                else if (options.formData !== undefined) {
                    formData = options.formData;
                }
                else {
                    return subscriber.error('For [IUploadOptions] you have to set either the [file] or the [formData] property.');
                }
                xhr.upload.onprogress = (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    /** @type {?} */
                    var progress = 0;
                    if (event.lengthComputable) {
                        progress = Math.round((event.loaded / event.total) * 100);
                    }
                    _this._progressSubject.next(progress);
                });
                xhr.onreadystatechange = (/**
                 * @return {?}
                 */
                function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            subscriber.next(xhr.response);
                            subscriber.complete();
                        }
                        else {
                            subscriber.error(xhr.response);
                        }
                    }
                });
                xhr.open(options.method, options.url, true);
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                if (options.headers) {
                    try {
                        for (var _b = __values(Object.keys(options.headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var key = _c.value;
                            xhr.setRequestHeader(key, options.headers[key]);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                xhr.send(formData);
            }));
        };
        /**
         * @private
         * @template T
         * @param {?} event
         * @return {?}
         */
        TdFileService.prototype.handleEvent = /**
         * @private
         * @template T
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case http.HttpEventType.Sent:
                    this._progressSubject.next(0);
                    break;
                case http.HttpEventType.UploadProgress:
                    this._progressSubject.next(Math.round((100 * event.loaded) / event.total));
                    break;
                case http.HttpEventType.Response:
                    this._progressSubject.next(100);
                    break;
                default:
                    break;
            }
        };
        TdFileService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: CovalentFileModule,
                    },] }
        ];
        /** @nocollapse */
        TdFileService.ctorParameters = function () { return [
            { type: http.HttpClient, decorators: [{ type: core.Optional }] }
        ]; };
        /** @nocollapse */ TdFileService.ɵprov = core.ɵɵdefineInjectable({ factory: function TdFileService_Factory() { return new TdFileService(core.ɵɵinject(http.HttpClient, 8)); }, token: TdFileService, providedIn: CovalentFileModule });
        return TdFileService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdFileService.prototype._progressSubject;
        /**
         * @type {?}
         * @private
         */
        TdFileService.prototype._progressObservable;
        /**
         * @type {?}
         * @private
         */
        TdFileService.prototype._http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdJsonFormatterComponent = /** @class */ (function () {
        function TdJsonFormatterComponent(_changeDetectorRef, _dir) {
            this._changeDetectorRef = _changeDetectorRef;
            this._dir = _dir;
            this._open = false;
            this._levelsOpen = 0;
        }
        Object.defineProperty(TdJsonFormatterComponent.prototype, "levelsOpen", {
            get: /**
             * @return {?}
             */
            function () {
                return this._levelsOpen;
            },
            /**
             * levelsOpen?: number
             * Levels opened by default when JS object is formatted and rendered.
             */
            set: /**
             * levelsOpen?: number
             * Levels opened by default when JS object is formatted and rendered.
             * @param {?} levelsOpen
             * @return {?}
             */
            function (levelsOpen) {
                if (!Number.isInteger(levelsOpen)) {
                    throw new Error('[levelsOpen] needs to be an integer.');
                }
                this._levelsOpen = levelsOpen;
                this._open = levelsOpen > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "open", {
            get: /**
             * @return {?}
             */
            function () {
                return this._open;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "key", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var elipsis = this._key && this._key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
                return this._key ? this._key.substring(0, TdJsonFormatterComponent.KEY_MAX_LENGTH) + elipsis : this._key;
            },
            /**
             * key?: string
             * Tag to be displayed next to formatted object.
             */
            set: /**
             * key?: string
             * Tag to be displayed next to formatted object.
             * @param {?} key
             * @return {?}
             */
            function (key) {
                this._key = key;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data;
            },
            /**
             * data: any
             * JS object to be formatted.
             */
            set: /**
             * data: any
             * JS object to be formatted.
             * @param {?} data
             * @return {?}
             */
            function (data) {
                this._data = data;
                this.parseChildren();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "children", {
            get: /**
             * @return {?}
             */
            function () {
                return this._children;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "isRTL", {
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
         * Refreshes json-formatter and rerenders [data]
         */
        /**
         * Refreshes json-formatter and rerenders [data]
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.refresh = /**
         * Refreshes json-formatter and rerenders [data]
         * @return {?}
         */
        function () {
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Toggles collapse/expanded state of component.
         */
        /**
         * Toggles collapse/expanded state of component.
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.toggle = /**
         * Toggles collapse/expanded state of component.
         * @return {?}
         */
        function () {
            this._open = !this._open;
        };
        /**
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.isObject = /**
         * @return {?}
         */
        function () {
            return this.getType(this._data) === 'object';
        };
        /**
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.isArray = /**
         * @return {?}
         */
        function () {
            return Array.isArray(this._data);
        };
        /**
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.hasChildren = /**
         * @return {?}
         */
        function () {
            return this._children && this._children.length > 0;
        };
        /**
         * Gets parsed value depending on value type.
         */
        /**
         * Gets parsed value depending on value type.
         * @param {?} value
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.getValue = /**
         * Gets parsed value depending on value type.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var type = this.getType(value);
            if (type === 'undefined' || type === 'null') {
                return type;
            }
            else if (type === 'date') {
                value = new Date(value).toString();
            }
            else if (type === 'string') {
                value = '"' + value + '"';
            }
            else if (type === 'function') {
                // Remove content of the function
                return (value
                    .toString()
                    .replace(/[\r\n]/g, '')
                    .replace(/\{.*\}/, '') + '{…}');
            }
            else if (Array.isArray(value)) {
                return this.getObjectName() + ' [' + value.length + ']';
            }
            return value;
        };
        /**
         * Gets type of object.
         * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
         */
        /**
         * Gets type of object.
         * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
         * @param {?} object
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.getType = /**
         * Gets type of object.
         * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
         * @param {?} object
         * @return {?}
         */
        function (object) {
            if (typeof object === 'object') {
                if (!object) {
                    return 'null';
                }
                if (Array.isArray(object)) {
                    return 'object';
                }
                /** @type {?} */
                var date = new Date(object);
                if (Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())) {
                    return 'date';
                }
            }
            return typeof object;
        };
        /**
         * Generates string representation depending if its an object or function.
         * see: http://stackoverflow.com/a/332429
         */
        /**
         * Generates string representation depending if its an object or function.
         * see: http://stackoverflow.com/a/332429
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.getObjectName = /**
         * Generates string representation depending if its an object or function.
         * see: http://stackoverflow.com/a/332429
         * @return {?}
         */
        function () {
            /** @type {?} */
            var object = this._data;
            if (this.isObject() && !object.constructor) {
                return 'Object';
            }
            /** @type {?} */
            var funcNameRegex = /function (.{1,})\(/;
            /** @type {?} */
            var results = funcNameRegex.exec(object.constructor.toString());
            if (results && results.length > 1) {
                return results[1];
            }
            else {
                return '';
            }
        };
        /**
         * Creates preview of nodes children to render in tooltip depending if its an array or an object.
         */
        /**
         * Creates preview of nodes children to render in tooltip depending if its an array or an object.
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.getPreview = /**
         * Creates preview of nodes children to render in tooltip depending if its an array or an object.
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var previewData;
            /** @type {?} */
            var startChar = '{ ';
            /** @type {?} */
            var endChar = ' }';
            if (this.isArray()) {
                /** @type {?} */
                var previewArray = this._data.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
                previewData = previewArray.map((/**
                 * @param {?} obj
                 * @return {?}
                 */
                function (obj) {
                    return _this.getValue(obj);
                }));
                startChar = '[';
                endChar = ']';
            }
            else {
                /** @type {?} */
                var previewKeys = this._children.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
                previewData = previewKeys.map((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    return key + ': ' + _this.getValue(_this._data[key]);
                }));
            }
            /** @type {?} */
            var previewString = previewData.join(', ');
            /** @type {?} */
            var ellipsis = previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
                previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH
                ? '…'
                : '';
            return (startChar + previewString.substring(0, TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH) + ellipsis + endChar);
        };
        /**
         * @private
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.parseChildren = /**
         * @private
         * @return {?}
         */
        function () {
            var e_1, _a;
            if (this.isObject()) {
                this._children = [];
                try {
                    for (var _b = __values(Object.keys(this._data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        this._children.push(key);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        };
        /**
         * Max length for property names. Any names bigger than this get trunctated.
         */
        TdJsonFormatterComponent.KEY_MAX_LENGTH = 30;
        /**
         * Max length for preview string. Any names bigger than this get trunctated.
         */
        TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH = 80;
        /**
         * Max tooltip preview elements.
         */
        TdJsonFormatterComponent.PREVIEW_LIMIT = 5;
        TdJsonFormatterComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'td-json-formatter',
                        template: "<div class=\"td-json-formatter-wrapper\">\n  <a\n    class=\"td-key\"\n    [class.td-key-node]=\"hasChildren()\"\n    [class.td-key-leaf]=\"!hasChildren()\"\n    [tabIndex]=\"isObject() ? 0 : -1\"\n    (keydown.enter)=\"toggle()\"\n    (click)=\"toggle()\"\n  >\n    <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">\n      {{ open ? 'keyboard_arrow_down' : isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right' }}\n    </mat-icon>\n    <span *ngIf=\"key\" class=\"key\">{{ key }}:</span>\n    <span class=\"value\">\n      <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\">\n        <span class=\"td-object-name\">{{ getObjectName() }}</span>\n        <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{ data.length }}]</span>\n      </span>\n      <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{ getValue(data) }}</span>\n    </span>\n  </a>\n  <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\">\n    <ng-template let-key ngFor [ngForOf]=\"children\">\n      <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter>\n    </ng-template>\n  </div>\n</div>\n",
                        animations: [common$1.tdCollapseAnimation],
                        styles: [":host{display:block}.td-json-formatter-wrapper{padding-top:2px;padding-bottom:2px}.td-json-formatter-wrapper .td-key{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.td-json-formatter-wrapper .td-key.td-key-node:hover{cursor:pointer}.td-json-formatter-wrapper .td-object-children.ng-animating{overflow:hidden}.td-json-formatter-wrapper .td-object-children .td-key,.td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:24px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-right:24px;padding-left:0}.td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,.td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:48px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-right:48px;padding-left:0}.td-json-formatter-wrapper .value{margin-left:5px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .value{padding-right:5px;padding-left:0}.td-json-formatter-wrapper .value .td-empty{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper .value .date,.td-json-formatter-wrapper .value .string{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdJsonFormatterComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: bidi.Dir, decorators: [{ type: core.Optional }] }
        ]; };
        TdJsonFormatterComponent.propDecorators = {
            levelsOpen: [{ type: core.Input, args: ['levelsOpen',] }],
            key: [{ type: core.Input, args: ['key',] }],
            data: [{ type: core.Input, args: ['data',] }]
        };
        return TdJsonFormatterComponent;
    }());
    if (false) {
        /**
         * Max length for property names. Any names bigger than this get trunctated.
         * @type {?}
         * @private
         */
        TdJsonFormatterComponent.KEY_MAX_LENGTH;
        /**
         * Max length for preview string. Any names bigger than this get trunctated.
         * @type {?}
         * @private
         */
        TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH;
        /**
         * Max tooltip preview elements.
         * @type {?}
         * @private
         */
        TdJsonFormatterComponent.PREVIEW_LIMIT;
        /**
         * @type {?}
         * @private
         */
        TdJsonFormatterComponent.prototype._key;
        /**
         * @type {?}
         * @private
         */
        TdJsonFormatterComponent.prototype._data;
        /**
         * @type {?}
         * @private
         */
        TdJsonFormatterComponent.prototype._children;
        /**
         * @type {?}
         * @private
         */
        TdJsonFormatterComponent.prototype._open;
        /**
         * @type {?}
         * @private
         */
        TdJsonFormatterComponent.prototype._levelsOpen;
        /**
         * @type {?}
         * @private
         */
        TdJsonFormatterComponent.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        TdJsonFormatterComponent.prototype._dir;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentJsonFormatterModule = /** @class */ (function () {
        function CovalentJsonFormatterModule() {
        }
        CovalentJsonFormatterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, tooltip.MatTooltipModule, icon.MatIconModule],
                        declarations: [TdJsonFormatterComponent],
                        exports: [TdJsonFormatterComponent],
                    },] }
        ];
        return CovalentJsonFormatterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

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
                        template: "<div class=\"td-layout-nav-wrapper\">\n  <mat-toolbar [color]=\"color\">\n    <ng-content select=\"[td-menu-button]\"></ng-content>\n    <span\n      *ngIf=\"icon || logo || toolbarTitle\"\n      [class.cursor-pointer]=\"routerEnabled\"\n      (click)=\"handleNavigationClick()\"\n      class=\"td-layout-nav-toolbar-content\"\n    >\n      <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"toolbarTitle\">{{ toolbarTitle }}</span>\n    </span>\n    <ng-content select=\"[td-toolbar-content]\"></ng-content>\n  </mat-toolbar>\n  <div class=\"td-layout-nav-content\" cdkScrollable>\n    <ng-content></ng-content>\n  </div>\n  <ng-content select=\"td-layout-footer\"></ng-content>\n</div>\n",
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
                        template: "<div class=\"td-layout-nav-list-wrapper\">\n  <mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-nav-list\">\n    <mat-sidenav\n      #sidenav\n      position=\"start\"\n      [mode]=\"mode\"\n      [opened]=\"opened\"\n      [disableClose]=\"disableClose\"\n      [style.max-width]=\"sidenavWidth\"\n      [style.min-width]=\"sidenavWidth\"\n    >\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-menu-button]\"></ng-content>\n        <span\n          *ngIf=\"icon || logo || toolbarTitle\"\n          class=\"td-layout-nav-list-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\"\n        >\n          <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n          <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n          <span *ngIf=\"toolbarTitle\">{{ toolbarTitle }}</span>\n        </span>\n        <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content select=\"[td-sidenav-content]\"></ng-content>\n      </div>\n    </mat-sidenav>\n    <div class=\"td-layout-nav-list-main\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"td-layout-footer-inner\"></ng-content>\n    </div>\n  </mat-sidenav-container>\n</div>\n<ng-content select=\"td-layout-footer\"></ng-content>\n",
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
                        template: "<mat-toolbar [color]=\"color\"></mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div\n    class=\"td-layout-card-over\"\n    [style.max-width.%]=\"cardWidth\"\n    [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n    [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n    [style.-webkit-box-flex]=\"1\"\n  >\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{ cardTitle }}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{ cardSubtitle }}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var LoadingType = {
        Circular: 'circular',
        Linear: 'linear',
    };
    /** @enum {string} */
    var LoadingMode = {
        Determinate: 'determinate',
        Indeterminate: 'indeterminate',
    };
    /** @enum {string} */
    var LoadingStrategy = {
        Overlay: 'overlay',
        Replace: 'replace',
    };
    /** @enum {string} */
    var LoadingStyle = {
        FullScreen: 'fullscreen',
        Overlay: 'overlay',
        None: 'none',
    };
    /** @type {?} */
    var TD_CIRCLE_DIAMETER = 100;
    var TdLoadingComponent = /** @class */ (function () {
        function TdLoadingComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._animationIn = new rxjs.Subject();
            this._animationOut = new rxjs.Subject();
            this._mode = LoadingMode.Indeterminate;
            this._defaultMode = LoadingMode.Indeterminate;
            this._value = 0;
            this._circleDiameter = TD_CIRCLE_DIAMETER;
            /**
             * Flag for animation
             */
            this.animation = false;
            this.style = LoadingStyle.None;
            /**
             * type: LoadingType
             * Sets type of [TdLoadingComponent] rendered.
             */
            this.type = LoadingType.Circular;
            /**
             * color: primary' | 'accent' | 'warn'
             * Sets theme color of [TdLoadingComponent] rendered.
             */
            this.color = 'primary';
        }
        Object.defineProperty(TdLoadingComponent.prototype, "mode", {
            get: /**
             * @return {?}
             */
            function () {
                return this._mode;
            },
            /**
             * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
             */
            set: /**
             * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
             * @param {?} mode
             * @return {?}
             */
            function (mode) {
                this._defaultMode = mode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLoadingComponent.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            /**
             * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
             */
            set: /**
             * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._value = value;
                // Check for changes for `OnPush` change detection
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
        function () {
            // When overlay is used and the host width has a value greater than 1px
            // set the circle diameter when possible incase the loading component was rendered in a hidden state
            if (this.isOverlay() && this._hostHeight() > 1 && this.animation) {
                this._setCircleDiameter();
                this._changeDetectorRef.markForCheck();
            }
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.getHeight = /**
         * @return {?}
         */
        function () {
            // Ignore height if style is `overlay` or `fullscreen`.
            // Add height if child elements have a height and style is `none`, else return default height.
            if (this.isOverlay() || this.isFullScreen()) {
                return undefined;
            }
            else {
                return this.height ? this.height + "px" : '150px';
            }
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.getCircleDiameter = /**
         * @return {?}
         */
        function () {
            return this._circleDiameter;
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.getCircleStrokeWidth = /**
         * @return {?}
         */
        function () {
            // we calculate the stroke width by setting it as 10% of its diameter
            /** @type {?} */
            var strokeWidth = this.getCircleDiameter() / 10;
            return Math.abs(strokeWidth);
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isCircular = /**
         * @return {?}
         */
        function () {
            return this.type === LoadingType.Circular;
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isLinear = /**
         * @return {?}
         */
        function () {
            return this.type === LoadingType.Linear;
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isFullScreen = /**
         * @return {?}
         */
        function () {
            return this.style === LoadingStyle.FullScreen;
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isOverlay = /**
         * @return {?}
         */
        function () {
            return this.style === LoadingStyle.Overlay;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        TdLoadingComponent.prototype.animationComplete = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // Check to see if its "in" or "out" animation to execute the proper callback
            if (!event.fromState) {
                this.inAnimationCompleted();
            }
            else {
                this.outAnimationCompleted();
            }
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.inAnimationCompleted = /**
         * @return {?}
         */
        function () {
            this._animationIn.next();
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.outAnimationCompleted = /**
         * @return {?}
         */
        function () {
            /* little hack to reset the loader value and animation before removing it from DOM
             * else, the loader will appear with prev value when its registered again
             * and will do an animation going prev value to 0.
             */
            this.value = 0;
            // Check for changes for `OnPush` change detection
            this._changeDetectorRef.markForCheck();
            this._animationOut.next();
        };
        /**
         * Starts in animation and returns an observable for completition event.
         */
        /**
         * Starts in animation and returns an observable for completition event.
         * @return {?}
         */
        TdLoadingComponent.prototype.startInAnimation = /**
         * Starts in animation and returns an observable for completition event.
         * @return {?}
         */
        function () {
            /* need to switch back to the selected mode, so we have saved it in another variable
             *  and then recover it. (issue with protractor)
             */
            this._mode = this._defaultMode;
            // Set values before the animations starts
            this._setCircleDiameter();
            // Check for changes for `OnPush` change detection
            this.animation = true;
            this._changeDetectorRef.markForCheck();
            return this._animationIn.asObservable();
        };
        /**
         * Starts out animation and returns an observable for completition event.
         */
        /**
         * Starts out animation and returns an observable for completition event.
         * @return {?}
         */
        TdLoadingComponent.prototype.startOutAnimation = /**
         * Starts out animation and returns an observable for completition event.
         * @return {?}
         */
        function () {
            this.animation = false;
            /* need to switch back and forth from determinate/indeterminate so the setInterval()
             * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
             */
            this._mode = LoadingMode.Determinate;
            // Check for changes for `OnPush` change detection
            this._changeDetectorRef.markForCheck();
            return this._animationOut.asObservable();
        };
        /**
         * Calculate the proper diameter for the circle and set it
         */
        /**
         * Calculate the proper diameter for the circle and set it
         * @private
         * @return {?}
         */
        TdLoadingComponent.prototype._setCircleDiameter = /**
         * Calculate the proper diameter for the circle and set it
         * @private
         * @return {?}
         */
        function () {
            // we set a default diameter of 100 since this is the default in material
            /** @type {?} */
            var diameter = TD_CIRCLE_DIAMETER;
            // if height is provided, then we take that as diameter
            if (this.height) {
                diameter = this.height;
                // else if its not provided, then we take the host height
            }
            else if (this.height === undefined) {
                diameter = this._hostHeight();
            }
            // if the diameter is over TD_CIRCLE_DIAMETER, we set TD_CIRCLE_DIAMETER
            if (!!diameter && diameter <= TD_CIRCLE_DIAMETER) {
                this._circleDiameter = Math.floor(diameter);
            }
            else {
                this._circleDiameter = TD_CIRCLE_DIAMETER;
            }
        };
        /**
         * Returns the host height of the loading component
         */
        /**
         * Returns the host height of the loading component
         * @private
         * @return {?}
         */
        TdLoadingComponent.prototype._hostHeight = /**
         * Returns the host height of the loading component
         * @private
         * @return {?}
         */
        function () {
            if ((/** @type {?} */ (this._elementRef.nativeElement))) {
                return ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
            }
            return 0;
        };
        TdLoadingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-loading',
                        template: "<div\n  class=\"td-loading-wrapper\"\n  [style.min-height]=\"getHeight()\"\n  [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n  [class.td-overlay]=\"isOverlay() || isFullScreen()\"\n  [class.td-fullscreen]=\"isFullScreen()\"\n>\n  <div\n    [@tdFadeInOut]=\"animation\"\n    (@tdFadeInOut.done)=\"animationComplete($event)\"\n    [style.min-height]=\"getHeight()\"\n    class=\"td-loading\"\n  >\n    <mat-progress-spinner\n      *ngIf=\"isCircular()\"\n      [mode]=\"mode\"\n      [value]=\"value\"\n      [color]=\"color\"\n      [diameter]=\"getCircleDiameter()\"\n      [strokeWidth]=\"getCircleStrokeWidth()\"\n    ></mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" [mode]=\"mode\" [value]=\"value\" [color]=\"color\"></mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>\n",
                        animations: [common$1.tdFadeInOutAnimation],
                        styles: [".td-loading-wrapper{position:relative;display:block}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1}.td-loading-wrapper.td-overlay .td-loading{position:absolute;margin:0;top:0;left:0;right:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{position:absolute;top:0;left:0;right:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdLoadingComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        return TdLoadingComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._animationIn;
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._animationOut;
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._mode;
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._defaultMode;
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._value;
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._circleDiameter;
        /**
         * Flag for animation
         * @type {?}
         */
        TdLoadingComponent.prototype.animation;
        /**
         * Content injected into loading component.
         * @type {?}
         */
        TdLoadingComponent.prototype.content;
        /** @type {?} */
        TdLoadingComponent.prototype.style;
        /**
         * height: number
         * Sets height of [TdLoadingComponent].
         * @type {?}
         */
        TdLoadingComponent.prototype.height;
        /**
         * type: LoadingType
         * Sets type of [TdLoadingComponent] rendered.
         * @type {?}
         */
        TdLoadingComponent.prototype.type;
        /**
         * color: primary' | 'accent' | 'warn'
         * Sets theme color of [TdLoadingComponent] rendered.
         * @type {?}
         */
        TdLoadingComponent.prototype.color;
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IInternalLoadingOptions() { }
    if (false) {
        /** @type {?|undefined} */
        IInternalLoadingOptions.prototype.height;
        /** @type {?|undefined} */
        IInternalLoadingOptions.prototype.style;
    }
    /**
     * @record
     */
    function ILoadingRef() { }
    if (false) {
        /** @type {?} */
        ILoadingRef.prototype.observable;
        /** @type {?} */
        ILoadingRef.prototype.componentRef;
        /** @type {?|undefined} */
        ILoadingRef.prototype.subject;
        /** @type {?|undefined} */
        ILoadingRef.prototype.times;
    }
    /**
     * NOTE: \@internal usage only.
     */
    var TdLoadingFactory = /** @class */ (function () {
        function TdLoadingFactory(_componentFactoryResolver, _overlay, _injector) {
            this._componentFactoryResolver = _componentFactoryResolver;
            this._overlay = _overlay;
            this._injector = _injector;
        }
        /**
         * Uses material `Overlay` services to create a DOM element and attach the loading component
         * into it. Leveraging the state and configuration from it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         */
        /**
         * Uses material `Overlay` services to create a DOM element and attach the loading component
         * into it. Leveraging the state and configuration from it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @return {?}
         */
        TdLoadingFactory.prototype.createFullScreenComponent = /**
         * Uses material `Overlay` services to create a DOM element and attach the loading component
         * into it. Leveraging the state and configuration from it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @return {?}
         */
        function (options) {
            var _this = this;
            ((/** @type {?} */ (options))).height = undefined;
            ((/** @type {?} */ (options))).style = LoadingStyle.FullScreen;
            /** @type {?} */
            var loadingRef = this._initializeContext();
            /** @type {?} */
            var loading = false;
            /** @type {?} */
            var overlayRef;
            loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe((/**
             * @param {?} registered
             * @return {?}
             */
            function (registered) {
                if (registered > 0 && !loading) {
                    loading = true;
                    overlayRef = _this._createOverlay();
                    loadingRef.componentRef = overlayRef.attach(new portal.ComponentPortal(TdLoadingComponent));
                    _this._mapOptions(options, loadingRef.componentRef.instance);
                    loadingRef.componentRef.instance.startInAnimation();
                    loadingRef.componentRef.changeDetectorRef.detectChanges();
                }
                else if (registered <= 0 && loading) {
                    loading = false;
                    /** @type {?} */
                    var subs_1 = loadingRef.componentRef.instance.startOutAnimation().subscribe((/**
                     * @return {?}
                     */
                    function () {
                        subs_1.unsubscribe();
                        loadingRef.componentRef.destroy();
                        overlayRef.detach();
                        overlayRef.dispose();
                    }));
                }
            }));
            return loadingRef;
        };
        /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Leverages TemplatePortals from material to inject the template inside of it so it fits
         * perfectly when overlaying it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         */
        /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Leverages TemplatePortals from material to inject the template inside of it so it fits
         * perfectly when overlaying it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @return {?}
         */
        TdLoadingFactory.prototype.createOverlayComponent = /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Leverages TemplatePortals from material to inject the template inside of it so it fits
         * perfectly when overlaying it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @return {?}
         */
        function (options, viewContainerRef, templateRef) {
            ((/** @type {?} */ (options))).height = undefined;
            ((/** @type {?} */ (options))).style = LoadingStyle.Overlay;
            /** @type {?} */
            var loadingRef = this._createComponent(options);
            /** @type {?} */
            var loading = false;
            loadingRef.componentRef.instance.content = new portal.TemplatePortal(templateRef, viewContainerRef);
            viewContainerRef.clear();
            viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
            loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe((/**
             * @param {?} registered
             * @return {?}
             */
            function (registered) {
                if (registered > 0 && !loading) {
                    loading = true;
                    loadingRef.componentRef.instance.startInAnimation();
                }
                else if (registered <= 0 && loading) {
                    loading = false;
                    loadingRef.componentRef.instance.startOutAnimation();
                }
            }));
            return loadingRef;
        };
        /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Replaces the template with the loading component depending if it was registered or resolved.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         */
        /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Replaces the template with the loading component depending if it was registered or resolved.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @param {?} context
         * @return {?}
         */
        TdLoadingFactory.prototype.createReplaceComponent = /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Replaces the template with the loading component depending if it was registered or resolved.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @param {?} context
         * @return {?}
         */
        function (options, viewContainerRef, templateRef, context) {
            /** @type {?} */
            var nativeElement = (/** @type {?} */ (templateRef.elementRef.nativeElement));
            ((/** @type {?} */ (options))).height = nativeElement.nextElementSibling
                ? nativeElement.nextElementSibling.scrollHeight
                : undefined;
            ((/** @type {?} */ (options))).style = LoadingStyle.None;
            /** @type {?} */
            var loadingRef = this._createComponent(options);
            /** @type {?} */
            var loading = false;
            // passing context so when the template is attached, we can keep the reference of the variables
            /** @type {?} */
            var contentRef = viewContainerRef.createEmbeddedView(templateRef, context);
            loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe((/**
             * @param {?} registered
             * @return {?}
             */
            function (registered) {
                if (registered > 0 && !loading) {
                    loading = true;
                    // detach the content and attach the loader if loader is there
                    /** @type {?} */
                    var index = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
                    if (index < 0) {
                        viewContainerRef.detach(viewContainerRef.indexOf(contentRef));
                        viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                    }
                    loadingRef.componentRef.instance.startInAnimation();
                }
                else if (registered <= 0 && loading) {
                    loading = false;
                    /** @type {?} */
                    var subs_2 = loadingRef.componentRef.instance.startOutAnimation().subscribe((/**
                     * @return {?}
                     */
                    function () {
                        subs_2.unsubscribe();
                        // detach loader and attach the content if content is there
                        /** @type {?} */
                        var index = viewContainerRef.indexOf(contentRef);
                        if (index < 0) {
                            viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.componentRef.hostView));
                            viewContainerRef.insert(contentRef, 0);
                        }
                        /**
                         * Need to call "markForCheck" and "detectChanges" on attached template, so its detected by parent component when attached
                         * with "OnPush" change detection
                         */
                        contentRef.detectChanges();
                        contentRef.markForCheck();
                    }));
                }
            }));
            return loadingRef;
        };
        /**
         * Creates a fullscreen overlay for the loading usage.
         */
        /**
         * Creates a fullscreen overlay for the loading usage.
         * @private
         * @return {?}
         */
        TdLoadingFactory.prototype._createOverlay = /**
         * Creates a fullscreen overlay for the loading usage.
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var state = new overlay.OverlayConfig();
            state.hasBackdrop = false;
            state.positionStrategy = this._overlay
                .position()
                .global()
                .centerHorizontally()
                .centerVertically();
            return this._overlay.create(state);
        };
        /**
         * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
         */
        /**
         * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
         * @private
         * @param {?} options
         * @return {?}
         */
        TdLoadingFactory.prototype._createComponent = /**
         * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
         * @private
         * @param {?} options
         * @return {?}
         */
        function (options) {
            /** @type {?} */
            var compRef = this._initializeContext();
            compRef.componentRef = this._componentFactoryResolver
                .resolveComponentFactory(TdLoadingComponent)
                .create(this._injector);
            this._mapOptions(options, compRef.componentRef.instance);
            return compRef;
        };
        /**
         * Initialize context for loading component.
         */
        /**
         * Initialize context for loading component.
         * @private
         * @return {?}
         */
        TdLoadingFactory.prototype._initializeContext = /**
         * Initialize context for loading component.
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var subject = new rxjs.Subject();
            return {
                observable: subject.asObservable(),
                subject: subject,
                componentRef: undefined,
                times: 0,
            };
        };
        /**
         * Maps configuration to the loading component instance.
         */
        /**
         * Maps configuration to the loading component instance.
         * @private
         * @param {?} options
         * @param {?} instance
         * @return {?}
         */
        TdLoadingFactory.prototype._mapOptions = /**
         * Maps configuration to the loading component instance.
         * @private
         * @param {?} options
         * @param {?} instance
         * @return {?}
         */
        function (options, instance) {
            instance.style = options.style;
            if (options.type !== undefined) {
                instance.type = options.type;
            }
            if (options.height !== undefined) {
                instance.height = options.height;
            }
            if (options.mode !== undefined) {
                instance.mode = options.mode;
            }
            if (options.color !== undefined) {
                instance.color = options.color;
            }
        };
        TdLoadingFactory.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TdLoadingFactory.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: overlay.Overlay },
            { type: core.Injector }
        ]; };
        return TdLoadingFactory;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdLoadingFactory.prototype._componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        TdLoadingFactory.prototype._overlay;
        /**
         * @type {?}
         * @private
         */
        TdLoadingFactory.prototype._injector;
    }
    /**
     * @param {?} parent
     * @param {?} componentFactoryResolver
     * @param {?} overlay
     * @param {?} injector
     * @return {?}
     */
    function LOADING_FACTORY_PROVIDER_FACTORY(parent, componentFactoryResolver, overlay, injector) {
        return parent || new TdLoadingFactory(componentFactoryResolver, overlay, injector);
    }
    /** @type {?} */
    var LOADING_FACTORY_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdLoadingFactory,
        deps: [[new core.Optional(), new core.SkipSelf(), TdLoadingFactory], core.ComponentFactoryResolver, overlay.Overlay, core.Injector],
        useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ITdLoadingConfig() { }
    if (false) {
        /** @type {?} */
        ITdLoadingConfig.prototype.name;
        /** @type {?|undefined} */
        ITdLoadingConfig.prototype.type;
        /** @type {?|undefined} */
        ITdLoadingConfig.prototype.mode;
        /** @type {?|undefined} */
        ITdLoadingConfig.prototype.color;
    }
    var TdLoadingConfig = /** @class */ (function () {
        function TdLoadingConfig(config) {
            this.name = config.name;
            if (!this.name) {
                throw Error('Name is required for [TdLoading] configuration.');
            }
            this.mode = config.mode ? config.mode : LoadingMode.Indeterminate;
            this.type = config.type ? config.type : LoadingType.Circular;
            this.color = config.color ? config.color : 'primary';
        }
        return TdLoadingConfig;
    }());
    if (false) {
        /** @type {?} */
        TdLoadingConfig.prototype.name;
        /** @type {?} */
        TdLoadingConfig.prototype.type;
        /** @type {?} */
        TdLoadingConfig.prototype.mode;
        /** @type {?} */
        TdLoadingConfig.prototype.color;
    }
    /**
     * @record
     */
    function ITdLoadingDirectiveConfig() { }
    if (false) {
        /** @type {?|undefined} */
        ITdLoadingDirectiveConfig.prototype.strategy;
    }
    var TdLoadingDirectiveConfig = /** @class */ (function (_super) {
        __extends(TdLoadingDirectiveConfig, _super);
        function TdLoadingDirectiveConfig(config) {
            var _this = _super.call(this, config) || this;
            _this.strategy = config.strategy ? config.strategy : LoadingStrategy.Replace;
            return _this;
        }
        return TdLoadingDirectiveConfig;
    }(TdLoadingConfig));
    if (false) {
        /** @type {?} */
        TdLoadingDirectiveConfig.prototype.name;
        /** @type {?} */
        TdLoadingDirectiveConfig.prototype.type;
        /** @type {?} */
        TdLoadingDirectiveConfig.prototype.mode;
        /** @type {?} */
        TdLoadingDirectiveConfig.prototype.strategy;
    }
    var TdLoadingService = /** @class */ (function () {
        function TdLoadingService(_loadingFactory) {
            this._loadingFactory = _loadingFactory;
            this._context = {};
            this._timeouts = {};
            this.create({
                name: 'td-loading-main',
            });
        }
        /**
         * params:
         * - config: ILoadingDirectiveConfig
         * - viewContainerRef: ViewContainerRef
         * - templateRef: TemplateRef<Object>
         *
         * Creates an replace loading mask and attaches it to the viewContainerRef.
         * Replaces the templateRef with the mask when a request is registered on it.
         *
         * NOTE: @internal usage only.
         */
        /**
         * params:
         * - config: ILoadingDirectiveConfig
         * - viewContainerRef: ViewContainerRef
         * - templateRef: TemplateRef<Object>
         *
         * Creates an replace loading mask and attaches it to the viewContainerRef.
         * Replaces the templateRef with the mask when a request is registered on it.
         *
         * NOTE: \@internal usage only.
         * @param {?} config
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @param {?} context
         * @return {?}
         */
        TdLoadingService.prototype.createComponent = /**
         * params:
         * - config: ILoadingDirectiveConfig
         * - viewContainerRef: ViewContainerRef
         * - templateRef: TemplateRef<Object>
         *
         * Creates an replace loading mask and attaches it to the viewContainerRef.
         * Replaces the templateRef with the mask when a request is registered on it.
         *
         * NOTE: \@internal usage only.
         * @param {?} config
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @param {?} context
         * @return {?}
         */
        function (config, viewContainerRef, templateRef, context) {
            /** @type {?} */
            var directiveConfig = new TdLoadingDirectiveConfig(config);
            if (this._context[directiveConfig.name]) {
                throw Error("Name duplication: [TdLoading] directive has a name conflict with " + directiveConfig.name + ".");
            }
            if (directiveConfig.strategy === LoadingStrategy.Overlay) {
                this._context[directiveConfig.name] = this._loadingFactory.createOverlayComponent(directiveConfig, viewContainerRef, templateRef);
            }
            else {
                this._context[directiveConfig.name] = this._loadingFactory.createReplaceComponent(directiveConfig, viewContainerRef, templateRef, context);
            }
            return this._context[directiveConfig.name];
        };
        /**
         * params:
         * - config: ITdLoadingConfig
         *
         * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
         * Only displayed when the mask has a request registered on it.
         */
        /**
         * params:
         * - config: ITdLoadingConfig
         *
         * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
         * Only displayed when the mask has a request registered on it.
         * @param {?} config
         * @return {?}
         */
        TdLoadingService.prototype.create = /**
         * params:
         * - config: ITdLoadingConfig
         *
         * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
         * Only displayed when the mask has a request registered on it.
         * @param {?} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var fullscreenConfig = new TdLoadingConfig(config);
            this.removeComponent(fullscreenConfig.name);
            this._context[fullscreenConfig.name] = this._loadingFactory.createFullScreenComponent(fullscreenConfig);
        };
        /**
         * params:
         * - name: string
         *
         * Removes `loading` component from service context.
         */
        /**
         * params:
         * - name: string
         *
         * Removes `loading` component from service context.
         * @param {?} name
         * @return {?}
         */
        TdLoadingService.prototype.removeComponent = /**
         * params:
         * - name: string
         *
         * Removes `loading` component from service context.
         * @param {?} name
         * @return {?}
         */
        function (name) {
            if (this._context[name]) {
                this._context[name].subject.unsubscribe();
                if (this._context[name].componentRef) {
                    this._context[name].componentRef.destroy();
                }
                this._context[name] = undefined;
                delete this._context[name];
            }
        };
        /**
         * params:
         * - name: string
         * - registers?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass registers argument to set a number of register calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.register()
         */
        /**
         * params:
         * - name: string
         * - registers?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass registers argument to set a number of register calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.register()
         * @param {?=} name
         * @param {?=} registers
         * @return {?}
         */
        TdLoadingService.prototype.register = /**
         * params:
         * - name: string
         * - registers?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass registers argument to set a number of register calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.register()
         * @param {?=} name
         * @param {?=} registers
         * @return {?}
         */
        function (name, registers) {
            var _this = this;
            if (name === void 0) { name = 'td-loading-main'; }
            if (registers === void 0) { registers = 1; }
            // try registering into the service if the loading component has been instanciated or if it exists.
            if (this._context[name]) {
                registers = registers < 1 ? 1 : registers;
                this._context[name].times += registers;
                this._context[name].subject.next(this._context[name].times);
                return true;
            }
            else {
                // if it doesnt exist, set a timeout so its registered after change detection happens
                // this in case "register" occured on the `ngOnInit` lifehook cycle.
                if (!this._timeouts[name]) {
                    this._timeouts[name] = setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.register(name, registers);
                    }));
                }
                else {
                    // if it timeout occured and still doesnt exist, it means the tiemout wasnt needed so we clear it.
                    this._clearTimeout(name);
                }
            }
            return false;
        };
        /**
         * params:
         * - name: string
         * - resolves?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass resolves argument to set a number of resolve calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolve()
         */
        /**
         * params:
         * - name: string
         * - resolves?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass resolves argument to set a number of resolve calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolve()
         * @param {?=} name
         * @param {?=} resolves
         * @return {?}
         */
        TdLoadingService.prototype.resolve = /**
         * params:
         * - name: string
         * - resolves?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass resolves argument to set a number of resolve calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolve()
         * @param {?=} name
         * @param {?=} resolves
         * @return {?}
         */
        function (name, resolves) {
            if (name === void 0) { name = 'td-loading-main'; }
            if (resolves === void 0) { resolves = 1; }
            // clear timeout if the loading component is "resolved" before its "registered"
            this._clearTimeout(name);
            if (this._context[name]) {
                resolves = resolves < 1 ? 1 : resolves;
                if (this._context[name].times > 0) {
                    /** @type {?} */
                    var times = this._context[name].times;
                    times -= resolves;
                    this._context[name].times = times < 0 ? 0 : times;
                }
                this._context[name].subject.next(this._context[name].times);
                return true;
            }
            return false;
        };
        /**
         * params:
         * - name: string
         * returns: true if successful
         *
         * Resolves all request for the loading mask referenced by the name parameter.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolveAll()
         */
        /**
         * params:
         * - name: string
         * returns: true if successful
         *
         * Resolves all request for the loading mask referenced by the name parameter.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolveAll()
         * @param {?=} name
         * @return {?}
         */
        TdLoadingService.prototype.resolveAll = /**
         * params:
         * - name: string
         * returns: true if successful
         *
         * Resolves all request for the loading mask referenced by the name parameter.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolveAll()
         * @param {?=} name
         * @return {?}
         */
        function (name) {
            if (name === void 0) { name = 'td-loading-main'; }
            // clear timeout if the loading component is "resolved" before its "registered"
            this._clearTimeout(name);
            if (this._context[name]) {
                this._context[name].times = 0;
                this._context[name].subject.next(this._context[name].times);
                return true;
            }
            return false;
        };
        /**
         * params:
         * - name: string
         * - value: number
         * returns: true if successful
         *
         * Set value on a loading mask referenced by the name parameter.
         * Usage only available if its mode is 'determinate' and if loading is showing.
         */
        /**
         * params:
         * - name: string
         * - value: number
         * returns: true if successful
         *
         * Set value on a loading mask referenced by the name parameter.
         * Usage only available if its mode is 'determinate' and if loading is showing.
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        TdLoadingService.prototype.setValue = /**
         * params:
         * - name: string
         * - value: number
         * returns: true if successful
         *
         * Set value on a loading mask referenced by the name parameter.
         * Usage only available if its mode is 'determinate' and if loading is showing.
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        function (name, value) {
            if (this._context[name]) {
                /** @type {?} */
                var instance = this._context[name].componentRef.instance;
                if (instance.mode === LoadingMode.Determinate && instance.animation) {
                    instance.value = value;
                    return true;
                }
            }
            return false;
        };
        /**
         * Clears timeout linked to the name.
         * @param name Name of the loading component to be cleared
         */
        /**
         * Clears timeout linked to the name.
         * @private
         * @param {?} name Name of the loading component to be cleared
         * @return {?}
         */
        TdLoadingService.prototype._clearTimeout = /**
         * Clears timeout linked to the name.
         * @private
         * @param {?} name Name of the loading component to be cleared
         * @return {?}
         */
        function (name) {
            clearTimeout(this._timeouts[name]);
            delete this._timeouts[name];
        };
        TdLoadingService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TdLoadingService.ctorParameters = function () { return [
            { type: TdLoadingFactory }
        ]; };
        return TdLoadingService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdLoadingService.prototype._context;
        /**
         * @type {?}
         * @private
         */
        TdLoadingService.prototype._timeouts;
        /**
         * @type {?}
         * @private
         */
        TdLoadingService.prototype._loadingFactory;
    }
    /**
     * @param {?} parent
     * @param {?} loadingFactory
     * @return {?}
     */
    function LOADING_PROVIDER_FACTORY(parent, loadingFactory) {
        return parent || new TdLoadingService(loadingFactory);
    }
    /** @type {?} */
    var LOADING_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdLoadingService,
        deps: [[new core.Optional(), new core.SkipSelf(), TdLoadingService], TdLoadingFactory],
        useFactory: LOADING_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Context class for variable reference
     */
    var   /**
     * Context class for variable reference
     */
    TdLoadingContext = /** @class */ (function () {
        function TdLoadingContext() {
            this.$implicit = undefined;
            this.tdLoading = undefined;
        }
        return TdLoadingContext;
    }());
    if (false) {
        /** @type {?} */
        TdLoadingContext.prototype.$implicit;
        /** @type {?} */
        TdLoadingContext.prototype.tdLoading;
    }
    // Constant for generation of the id for the next component
    /** @type {?} */
    var TD_LOADING_NEXT_ID = 0;
    var TdLoadingDirective = /** @class */ (function () {
        function TdLoadingDirective(_viewContainerRef, _templateRef, _loadingService) {
            this._viewContainerRef = _viewContainerRef;
            this._templateRef = _templateRef;
            this._loadingService = _loadingService;
            this._context = new TdLoadingContext();
            /**
             * tdLoadingColor?: "primary" | "accent" | "warn"
             * Sets the theme color of the loading component. Defaults to "primary"
             */
            this.color = 'primary';
        }
        Object.defineProperty(TdLoadingDirective.prototype, "name", {
            /**
             * tdLoading: string
             * Name reference of the loading mask, used to register/resolve requests to the mask.
             */
            set: /**
             * tdLoading: string
             * Name reference of the loading mask, used to register/resolve requests to the mask.
             * @param {?} name
             * @return {?}
             */
            function (name) {
                if (!this._name && name) {
                    this._name = name;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLoadingDirective.prototype, "until", {
            /**
             * tdLoadingUntil?: any
             * If its null, undefined or false it will be used to register requests to the mask.
             * Else if its any value that can be resolved as true, it will resolve the mask.
             * [name] is optional when using [until], but can still be used to register/resolve it manually.
             */
            set: /**
             * tdLoadingUntil?: any
             * If its null, undefined or false it will be used to register requests to the mask.
             * Else if its any value that can be resolved as true, it will resolve the mask.
             * [name] is optional when using [until], but can still be used to register/resolve it manually.
             * @param {?} until
             * @return {?}
             */
            function (until) {
                if (!this._name) {
                    this._name = 'td-loading-until-' + TD_LOADING_NEXT_ID++;
                }
                this._context.$implicit = this._context.tdLoading = until;
                if (!until) {
                    this._loadingService.register(this._name);
                }
                else {
                    this._loadingService.resolveAll(this._name);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLoadingDirective.prototype, "type", {
            /**
             * tdLoadingType?: LoadingType or ['linear' | 'circular']
             * Sets the type of loading mask depending on value.
             * Defaults to [LoadingType.Circular | 'circular'].
             */
            set: /**
             * tdLoadingType?: LoadingType or ['linear' | 'circular']
             * Sets the type of loading mask depending on value.
             * Defaults to [LoadingType.Circular | 'circular'].
             * @param {?} type
             * @return {?}
             */
            function (type) {
                if (type === LoadingType.Linear) {
                    this._type = LoadingType.Linear;
                }
                else {
                    this._type = LoadingType.Circular;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLoadingDirective.prototype, "mode", {
            /**
             * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
             * Sets the mode of loading mask depending on value.
             * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
             */
            set: /**
             * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
             * Sets the mode of loading mask depending on value.
             * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
             * @param {?} mode
             * @return {?}
             */
            function (mode) {
                if (mode === LoadingMode.Determinate) {
                    this._mode = LoadingMode.Determinate;
                }
                else {
                    this._mode = LoadingMode.Indeterminate;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLoadingDirective.prototype, "strategy", {
            /**
             * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
             * Sets the strategy of loading mask depending on value.
             * Defaults to [LoadingMode.Replace | 'replace'].
             */
            set: /**
             * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
             * Sets the strategy of loading mask depending on value.
             * Defaults to [LoadingMode.Replace | 'replace'].
             * @param {?} strategy
             * @return {?}
             */
            function (strategy) {
                if (strategy === LoadingStrategy.Overlay) {
                    this._strategy = LoadingStrategy.Overlay;
                }
                else {
                    this._strategy = LoadingStrategy.Replace;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Registers component in the DOM, so it will be available when calling resolve/register.
         */
        /**
         * Registers component in the DOM, so it will be available when calling resolve/register.
         * @return {?}
         */
        TdLoadingDirective.prototype.ngOnInit = /**
         * Registers component in the DOM, so it will be available when calling resolve/register.
         * @return {?}
         */
        function () {
            this._registerComponent();
        };
        /**
         * Remove component when directive is destroyed.
         */
        /**
         * Remove component when directive is destroyed.
         * @return {?}
         */
        TdLoadingDirective.prototype.ngOnDestroy = /**
         * Remove component when directive is destroyed.
         * @return {?}
         */
        function () {
            this._loadingService.removeComponent(this._name);
            this._loadingRef = undefined;
        };
        /**
         * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
         * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
         */
        /**
         * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
         * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
         * @private
         * @return {?}
         */
        TdLoadingDirective.prototype._registerComponent = /**
         * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
         * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
         * @private
         * @return {?}
         */
        function () {
            if (!this._name) {
                throw new Error('Name is needed to register loading directive');
            }
            // Check if `TdLoadingComponent` has been created before trying to add one again.
            // There is a weird edge case when using `[routerLinkActive]` that calls the `ngOnInit` twice in a row
            if (!this._loadingRef) {
                this._loadingRef = this._loadingService.createComponent({
                    name: this._name,
                    type: this._type,
                    mode: this._mode,
                    color: this.color,
                    strategy: this._strategy,
                }, this._viewContainerRef, this._templateRef, this._context);
            }
        };
        TdLoadingDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdLoading]',
                    },] }
        ];
        /** @nocollapse */
        TdLoadingDirective.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: core.TemplateRef },
            { type: TdLoadingService }
        ]; };
        TdLoadingDirective.propDecorators = {
            name: [{ type: core.Input, args: ['tdLoading',] }],
            until: [{ type: core.Input, args: ['tdLoadingUntil',] }],
            type: [{ type: core.Input, args: ['tdLoadingType',] }],
            mode: [{ type: core.Input, args: ['tdLoadingMode',] }],
            strategy: [{ type: core.Input, args: ['tdLoadingStrategy',] }],
            color: [{ type: core.Input, args: ['tdLoadingColor',] }]
        };
        return TdLoadingDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._context;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._type;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._mode;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._strategy;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._name;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._loadingRef;
        /**
         * tdLoadingColor?: "primary" | "accent" | "warn"
         * Sets the theme color of the loading component. Defaults to "primary"
         * @type {?}
         */
        TdLoadingDirective.prototype.color;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._viewContainerRef;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._templateRef;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._loadingService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_LOADING = [TdLoadingComponent, TdLoadingDirective];
    /** @type {?} */
    var TD_LOADING_ENTRY_COMPONENTS = [TdLoadingComponent];
    var CovalentLoadingModule = /** @class */ (function () {
        function CovalentLoadingModule() {
        }
        CovalentLoadingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, progressBar.MatProgressBarModule, progressSpinner.MatProgressSpinnerModule, overlay.OverlayModule, portal.PortalModule],
                        declarations: [TD_LOADING],
                        exports: [TD_LOADING],
                        providers: [LOADING_FACTORY_PROVIDER, LOADING_PROVIDER],
                        entryComponents: [TD_LOADING_ENTRY_COMPONENTS],
                    },] }
        ];
        return CovalentLoadingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdMediaService = /** @class */ (function () {
        function TdMediaService(_ngZone) {
            var _this = this;
            this._ngZone = _ngZone;
            this._resizing = false;
            this._queryMap = new Map();
            this._querySources = {};
            this._queryObservables = {};
            this._queryMap.set('xs', '(max-width: 599px)');
            this._queryMap.set('gt-xs', '(min-width: 600px)');
            this._queryMap.set('sm', '(min-width: 600px) and (max-width: 959px)');
            this._queryMap.set('gt-sm', '(min-width: 960px)');
            this._queryMap.set('md', '(min-width: 960px) and (max-width: 1279px)');
            this._queryMap.set('gt-md', '(min-width: 1280px)');
            this._queryMap.set('lg', '(min-width: 1280px) and (max-width: 1919px)');
            this._queryMap.set('gt-lg', '(min-width: 1920px)');
            this._queryMap.set('xl', '(min-width: 1920px)');
            this._queryMap.set('landscape', '(orientation: landscape)');
            this._queryMap.set('portrait', '(orientation: portrait)');
            this._queryMap.set('print', 'print');
            this._resizing = false;
            // we make sure that the resize checking happend outside of Angular since it happens often
            this._globalSubscription = this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return rxjs.fromEvent(window, 'resize').subscribe((/**
                 * @return {?}
                 */
                function () {
                    // way to prevent the resize event from triggering the match media if there is already one event running already.
                    if (!_this._resizing) {
                        _this._resizing = true;
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this._onResize();
                            _this._resizing = false;
                        }), 100);
                    }
                }));
            }));
        }
        /**
         * Deregisters a query so its stops being notified or used.
         */
        /**
         * Deregisters a query so its stops being notified or used.
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype.deregisterQuery = /**
         * Deregisters a query so its stops being notified or used.
         * @param {?} query
         * @return {?}
         */
        function (query) {
            if (this._queryMap.get(query.toLowerCase())) {
                query = this._queryMap.get(query.toLowerCase());
            }
            this._querySources[query].unsubscribe();
            delete this._querySources[query];
            delete this._queryObservables[query];
        };
        /**
         * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
         */
        /**
         * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype.query = /**
         * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
         * @param {?} query
         * @return {?}
         */
        function (query) {
            if (this._queryMap.get(query.toLowerCase())) {
                query = this._queryMap.get(query.toLowerCase());
            }
            return this._ngZone.run((/**
             * @return {?}
             */
            function () {
                return matchMedia(query).matches;
            }));
        };
        /**
         * Registers a media query and returns an [Observable] that will re-evaluate and
         * return if the given media query matches on window resize.
         * Note: don't forget to unsubscribe from [Observable] when finished watching.
         */
        /**
         * Registers a media query and returns an [Observable] that will re-evaluate and
         * return if the given media query matches on window resize.
         * Note: don't forget to unsubscribe from [Observable] when finished watching.
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype.registerQuery = /**
         * Registers a media query and returns an [Observable] that will re-evaluate and
         * return if the given media query matches on window resize.
         * Note: don't forget to unsubscribe from [Observable] when finished watching.
         * @param {?} query
         * @return {?}
         */
        function (query) {
            if (this._queryMap.get(query.toLowerCase())) {
                query = this._queryMap.get(query.toLowerCase());
            }
            if (!this._querySources[query]) {
                this._querySources[query] = new rxjs.BehaviorSubject(matchMedia(query).matches);
                this._queryObservables[query] = this._querySources[query].asObservable();
            }
            return this._queryObservables[query];
        };
        /**
         * Trigger a match media event on all subscribed observables.
         */
        /**
         * Trigger a match media event on all subscribed observables.
         * @return {?}
         */
        TdMediaService.prototype.broadcast = /**
         * Trigger a match media event on all subscribed observables.
         * @return {?}
         */
        function () {
            this._onResize();
        };
        /**
         * @private
         * @return {?}
         */
        TdMediaService.prototype._onResize = /**
         * @private
         * @return {?}
         */
        function () {
            var e_1, _a;
            var _this = this;
            var _loop_1 = function (query) {
                this_1._ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this._matchMediaTrigger(query);
                }));
            };
            var this_1 = this;
            try {
                for (var _b = __values(Object.keys(this._querySources)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var query = _c.value;
                    _loop_1(query);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * @private
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype._matchMediaTrigger = /**
         * @private
         * @param {?} query
         * @return {?}
         */
        function (query) {
            this._querySources[query].next(matchMedia(query).matches);
        };
        TdMediaService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        TdMediaService.ctorParameters = function () { return [
            { type: core.NgZone }
        ]; };
        /** @nocollapse */ TdMediaService.ɵprov = core.ɵɵdefineInjectable({ factory: function TdMediaService_Factory() { return new TdMediaService(core.ɵɵinject(core.NgZone)); }, token: TdMediaService, providedIn: "root" });
        return TdMediaService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdMediaService.prototype._resizing;
        /**
         * @type {?}
         * @private
         */
        TdMediaService.prototype._globalSubscription;
        /**
         * @type {?}
         * @private
         */
        TdMediaService.prototype._queryMap;
        /**
         * @type {?}
         * @private
         */
        TdMediaService.prototype._querySources;
        /**
         * @type {?}
         * @private
         */
        TdMediaService.prototype._queryObservables;
        /**
         * @type {?}
         * @private
         */
        TdMediaService.prototype._ngZone;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdMediaToggleDirective = /** @class */ (function () {
        function TdMediaToggleDirective(_renderer, _elementRef, _mediaService) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._mediaService = _mediaService;
            this._matches = false;
            this._attributes = {};
            this._styles = {};
            this._classes = [];
        }
        Object.defineProperty(TdMediaToggleDirective.prototype, "query", {
            /**
             * tdMediaToggle: string
             * Media query used to evaluate screen/window size.
             * Toggles attributes, classes and styles if media query is matched.
             */
            set: /**
             * tdMediaToggle: string
             * Media query used to evaluate screen/window size.
             * Toggles attributes, classes and styles if media query is matched.
             * @param {?} query
             * @return {?}
             */
            function (query) {
                if (!query) {
                    throw new Error('Query needed for [tdMediaToggle] directive.');
                }
                this._query = query;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMediaToggleDirective.prototype, "attributes", {
            /**
             * mediaAttributes: {[key: string]: string}
             * Attributes to be toggled when media query matches.
             */
            set: /**
             * mediaAttributes: {[key: string]: string}
             * Attributes to be toggled when media query matches.
             * @param {?} attributes
             * @return {?}
             */
            function (attributes) {
                this._attributes = attributes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMediaToggleDirective.prototype, "classes", {
            /**
             * mediaClasses: string[]
             * CSS Classes to be toggled when media query matches.
             */
            set: /**
             * mediaClasses: string[]
             * CSS Classes to be toggled when media query matches.
             * @param {?} classes
             * @return {?}
             */
            function (classes) {
                this._classes = classes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMediaToggleDirective.prototype, "styles", {
            /**
             * mediaStyles: {[key: string]: string}
             * CSS Styles to be toggled when media query matches.
             */
            set: /**
             * mediaStyles: {[key: string]: string}
             * CSS Styles to be toggled when media query matches.
             * @param {?} styles
             * @return {?}
             */
            function (styles) {
                this._styles = styles;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._mediaChange(this._mediaService.query(this._query));
            this._subscription = this._mediaService.registerQuery(this._query).subscribe((/**
             * @param {?} matches
             * @return {?}
             */
            function (matches) {
                _this._mediaChange(matches);
            }));
        };
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this._subscription) {
                this._subscription.unsubscribe();
            }
        };
        /**
         * @private
         * @param {?} matches
         * @return {?}
         */
        TdMediaToggleDirective.prototype._mediaChange = /**
         * @private
         * @param {?} matches
         * @return {?}
         */
        function (matches) {
            this._matches = matches;
            this._changeAttributes();
            this._changeClasses();
            this._changeStyles();
        };
        /**
         * @private
         * @return {?}
         */
        TdMediaToggleDirective.prototype._changeAttributes = /**
         * @private
         * @return {?}
         */
        function () {
            for (var attr in this._attributes) {
                if (this._matches) {
                    this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
                }
                else {
                    this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        TdMediaToggleDirective.prototype._changeClasses = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this._classes.forEach((/**
             * @param {?} className
             * @return {?}
             */
            function (className) {
                if (_this._matches) {
                    _this._renderer.addClass(_this._elementRef.nativeElement, className);
                }
                else {
                    _this._renderer.removeClass(_this._elementRef.nativeElement, className);
                }
            }));
        };
        /**
         * @private
         * @return {?}
         */
        TdMediaToggleDirective.prototype._changeStyles = /**
         * @private
         * @return {?}
         */
        function () {
            for (var style in this._styles) {
                if (this._matches) {
                    this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
                }
                else {
                    this._renderer.removeStyle(this._elementRef.nativeElement, style);
                }
            }
        };
        TdMediaToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdMediaToggle]',
                    },] }
        ];
        /** @nocollapse */
        TdMediaToggleDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: TdMediaService }
        ]; };
        TdMediaToggleDirective.propDecorators = {
            query: [{ type: core.Input, args: ['tdMediaToggle',] }],
            attributes: [{ type: core.Input, args: ['mediaAttributes',] }],
            classes: [{ type: core.Input, args: ['mediaClasses',] }],
            styles: [{ type: core.Input, args: ['mediaStyles',] }]
        };
        return TdMediaToggleDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._subscription;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._query;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._matches;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._attributes;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._styles;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._classes;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._mediaService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_MEDIA = [TdMediaToggleDirective];
    var CovalentMediaModule = /** @class */ (function () {
        function CovalentMediaModule() {
        }
        CovalentMediaModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TD_MEDIA],
                        exports: [TD_MEDIA],
                    },] }
        ];
        return CovalentMediaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdMenuComponent = /** @class */ (function () {
        function TdMenuComponent() {
        }
        TdMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-menu',
                        template: "<ng-content select=\"[td-menu-header]\"></ng-content>\n<mat-divider></mat-divider>\n<div class=\"td-menu-content\">\n  <ng-content></ng-content>\n</div>\n<mat-divider></mat-divider>\n<ng-content select=\"[td-menu-footer]\"></ng-content>\n",
                        styles: [":host{margin-top:-8px;margin-bottom:-8px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host ::ng-deep [td-menu-header]{padding:8px;text-align:center}:host ::ng-deep mat-list a[mat-list-item].mat-2-line,:host ::ng-deep mat-list mat-list-item.mat-2-line,:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line,:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line,:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line,:host ::ng-deep mat-nav-list mat-list-item.mat-2-line,:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line,:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line{height:auto}:host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content,:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content{height:auto;padding:8px}:host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text{padding-right:0}[dir=rtl] :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text{padding-left:0;padding-right:16px}:host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine]{margin-top:4px}.td-menu-content{max-height:calc(50vh);overflow-y:auto}"]
                    }] }
        ];
        return TdMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_MENU = [TdMenuComponent];
    var CovalentMenuModule = /** @class */ (function () {
        function CovalentMenuModule() {
        }
        CovalentMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, menu.MatMenuModule, divider.MatDividerModule],
                        declarations: [TD_MENU],
                        exports: [TD_MENU],
                    },] }
        ];
        return CovalentMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdBreadcrumbComponent = /** @class */ (function () {
        function TdBreadcrumbComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._displayCrumb = true;
            this._width = 0;
            // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
            this.separatorIcon = 'chevron_right';
            // Should show the right chevron or not before the label
            this._displayIcon = true;
        }
        Object.defineProperty(TdBreadcrumbComponent.prototype, "displayCrumb", {
            get: /**
             * @return {?}
             */
            function () {
                return this._displayCrumb;
            },
            /**
             * Whether to display the crumb or not
             */
            set: /**
             * Whether to display the crumb or not
             * @param {?} shouldDisplay
             * @return {?}
             */
            function (shouldDisplay) {
                this._displayCrumb = shouldDisplay;
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbComponent.prototype, "width", {
            /**
             * Width of the DOM element of the crumb
             */
            get: /**
             * Width of the DOM element of the crumb
             * @return {?}
             */
            function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbComponent.prototype, "displayBinding", {
            /**
             * Gets the display style of the crumb
             */
            get: /**
             * Gets the display style of the crumb
             * @return {?}
             */
            function () {
                // Set the display to none on the component, just in case the end user is hiding
                // and showing them instead of the component doing itself for reasons like responsive
                return this._displayCrumb ? undefined : 'none';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdBreadcrumbComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // set the width from the actual rendered DOM element
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._width = ((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().width;
                _this._changeDetectorRef.markForCheck();
            }));
        };
        /**
         * Stop click propagation when clicking on icon
         */
        /**
         * Stop click propagation when clicking on icon
         * @param {?} event
         * @return {?}
         */
        TdBreadcrumbComponent.prototype._handleIconClick = /**
         * Stop click propagation when clicking on icon
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.stopPropagation();
            event.preventDefault();
        };
        TdBreadcrumbComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-breadcrumb, a[td-breadcrumb]',
                        template: "<ng-content></ng-content>\n<mat-icon\n  *ngIf=\"_displayIcon\"\n  class=\"td-breadcrumb-separator-icon\"\n  [style.cursor]=\"'default'\"\n  (click)=\"_handleIconClick($event)\"\n>\n  {{ separatorIcon }}\n</mat-icon>\n",
                        /* tslint:disable-next-line */
                        host: {
                            class: 'mat-button td-breadcrumb',
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host.td-breadcrumb{display:inline-block;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host.td-breadcrumb ::ng-deep>*{margin:0 10px}:host .td-breadcrumb-separator-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdBreadcrumbComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        TdBreadcrumbComponent.propDecorators = {
            displayBinding: [{ type: core.HostBinding, args: ['style.display',] }]
        };
        return TdBreadcrumbComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbComponent.prototype._displayCrumb;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbComponent.prototype._width;
        /** @type {?} */
        TdBreadcrumbComponent.prototype.separatorIcon;
        /** @type {?} */
        TdBreadcrumbComponent.prototype._displayIcon;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbComponent.prototype._changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdBreadcrumbsComponent = /** @class */ (function () {
        function TdBreadcrumbsComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._resizeSubscription = rxjs.Subscription.EMPTY;
            this._widthSubject = new rxjs.Subject();
            this._resizing = false;
            // the list of hidden breadcrumbs not shown right now (responsive)
            this.hiddenBreadcrumbs = [];
            /**
             * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
             */
            this.separatorIcon = 'chevron_right';
        }
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._resizeSubscription = rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(10)), this._widthSubject.asObservable().pipe(operators.distinctUntilChanged())).subscribe((/**
             * @return {?}
             */
            function () {
                if (!_this._resizing) {
                    _this._resizing = true;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this._calculateVisibility();
                        _this._resizing = false;
                        _this._changeDetectorRef.markForCheck();
                    }), 100);
                }
            }));
        };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
        function () {
            if (this._elementRef && this._elementRef.nativeElement) {
                this._widthSubject.next(this.nativeElementWidth);
            }
        };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            this.setCrumbIcons();
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._resizeSubscription.unsubscribe();
        };
        Object.defineProperty(TdBreadcrumbsComponent.prototype, "nativeElementWidth", {
            /*
             * Current width of the element container
             */
            get: /*
               * Current width of the element container
               */
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = (/** @type {?} */ (this._elementRef.nativeElement));
                // Need to take into account border, margin and padding that might be around all the crumbs
                /** @type {?} */
                var style = window.getComputedStyle(element);
                /** @type {?} */
                var borderLeft = parseInt(style.borderLeft, 10);
                /** @type {?} */
                var borderRight = parseInt(style.borderRight, 10);
                /** @type {?} */
                var marginLeft = parseInt(style.marginLeft, 10);
                /** @type {?} */
                var marginRight = parseInt(style.marginRight, 10);
                /** @type {?} */
                var paddingLeft = parseInt(style.paddingLeft, 10);
                /** @type {?} */
                var paddingRight = parseInt(style.paddingRight, 10);
                return (element.getBoundingClientRect().width -
                    borderLeft -
                    borderRight -
                    marginLeft -
                    marginRight -
                    paddingLeft -
                    paddingRight);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbsComponent.prototype, "count", {
            /**
             * The total count of individual breadcrumbs
             */
            get: /**
             * The total count of individual breadcrumbs
             * @return {?}
             */
            function () {
                return this._breadcrumbs ? this._breadcrumbs.length : 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Set the crumb icon separators
         */
        /**
         * Set the crumb icon separators
         * @private
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.setCrumbIcons = /**
         * Set the crumb icon separators
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var breadcrumbArray = this._breadcrumbs.toArray();
            if (breadcrumbArray.length > 0) {
                // don't show the icon on the last breadcrumb
                breadcrumbArray[breadcrumbArray.length - 1]._displayIcon = false;
            }
            breadcrumbArray.forEach((/**
             * @param {?} breadcrumb
             * @return {?}
             */
            function (breadcrumb) {
                breadcrumb.separatorIcon = _this.separatorIcon;
            }));
        };
        /**
         * @private
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype._calculateVisibility = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var crumbsArray = this._breadcrumbs.toArray();
            /** @type {?} */
            var crumbWidthSum = 0;
            /** @type {?} */
            var hiddenCrumbs = [];
            // loop through crumbs in reverse order to calculate which ones should be removed
            for (var i = crumbsArray.length - 1; i >= 0; i--) {
                /** @type {?} */
                var breadcrumb = crumbsArray[i];
                // if crumb exceeds width, then we skip it from the sum and add it into the hiddencrumbs array
                // and hide it
                if (crumbWidthSum + breadcrumb.width > this.nativeElementWidth) {
                    breadcrumb.displayCrumb = false;
                    hiddenCrumbs.push(breadcrumb);
                }
                else {
                    // else we show it
                    breadcrumb.displayCrumb = true;
                }
                crumbWidthSum += breadcrumb.width;
            }
            this.hiddenBreadcrumbs = hiddenCrumbs;
            this._changeDetectorRef.markForCheck();
        };
        TdBreadcrumbsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-breadcrumbs',
                        template: "<ng-content></ng-content>\n",
                        /* tslint:disable-next-line */
                        host: {
                            class: 'td-breadcrumbs',
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;width:100%}:host.td-breadcrumbs{white-space:nowrap}"]
                    }] }
        ];
        /** @nocollapse */
        TdBreadcrumbsComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        TdBreadcrumbsComponent.propDecorators = {
            _breadcrumbs: [{ type: core.ContentChildren, args: [TdBreadcrumbComponent, { descendants: true },] }],
            separatorIcon: [{ type: core.Input }]
        };
        return TdBreadcrumbsComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbsComponent.prototype._resizeSubscription;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbsComponent.prototype._widthSubject;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbsComponent.prototype._resizing;
        /** @type {?} */
        TdBreadcrumbsComponent.prototype._breadcrumbs;
        /** @type {?} */
        TdBreadcrumbsComponent.prototype.hiddenBreadcrumbs;
        /**
         * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
         * @type {?}
         */
        TdBreadcrumbsComponent.prototype.separatorIcon;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbsComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbsComponent.prototype._changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentBreadcrumbsModule = /** @class */ (function () {
        function CovalentBreadcrumbsModule() {
        }
        CovalentBreadcrumbsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, icon.MatIconModule],
                        declarations: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
                        exports: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
                    },] }
        ];
        return CovalentBreadcrumbsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var StepState = {
        None: 'none',
        Required: 'required',
        Complete: 'complete',
    };
    var TdStepLabelDirective = /** @class */ (function (_super) {
        __extends(TdStepLabelDirective, _super);
        function TdStepLabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdStepLabelDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-step-label]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdStepLabelDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        return TdStepLabelDirective;
    }(portal.TemplatePortalDirective));
    var TdStepActionsDirective = /** @class */ (function (_super) {
        __extends(TdStepActionsDirective, _super);
        function TdStepActionsDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdStepActionsDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-step-actions]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdStepActionsDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        return TdStepActionsDirective;
    }(portal.TemplatePortalDirective));
    var TdStepSummaryDirective = /** @class */ (function (_super) {
        __extends(TdStepSummaryDirective, _super);
        function TdStepSummaryDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdStepSummaryDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-step-summary]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdStepSummaryDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        return TdStepSummaryDirective;
    }(portal.TemplatePortalDirective));
    var TdStepBase = /** @class */ (function () {
        function TdStepBase() {
        }
        return TdStepBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdStepMixinBase = common$1.mixinDisableRipple(common$1.mixinDisabled(TdStepBase));
    var TdStepComponent = /** @class */ (function (_super) {
        __extends(TdStepComponent, _super);
        function TdStepComponent(_viewContainerRef) {
            var _this = _super.call(this) || this;
            _this._viewContainerRef = _viewContainerRef;
            _this._active = false;
            _this._state = StepState.None;
            /**
             * activated?: function
             * Event emitted when [TdStepComponent] is activated.
             */
            _this.activated = new core.EventEmitter();
            /**
             * deactivated?: function
             * Event emitted when [TdStepComponent] is deactivated.
             */
            _this.deactivated = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdStepComponent.prototype, "stepContent", {
            get: /**
             * @return {?}
             */
            function () {
                return this._contentPortal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepComponent.prototype, "active", {
            get: /**
             * @return {?}
             */
            function () {
                return this._active;
            },
            /**
             * active?: boolean
             * Toggles [TdStepComponent] between active/deactive.
             */
            set: /**
             * active?: boolean
             * Toggles [TdStepComponent] between active/deactive.
             * @param {?} active
             * @return {?}
             */
            function (active) {
                this._setActive(coercion.coerceBooleanProperty(active));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepComponent.prototype, "state", {
            get: /**
             * @return {?}
             */
            function () {
                return this._state;
            },
            /**
             * state?: StepState or ['none' | 'required' | 'complete']
             * Sets state of [TdStepComponent] depending on value.
             * Defaults to [StepState.None | 'none'].
             */
            set: /**
             * state?: StepState or ['none' | 'required' | 'complete']
             * Sets state of [TdStepComponent] depending on value.
             * Defaults to [StepState.None | 'none'].
             * @param {?} state
             * @return {?}
             */
            function (state) {
                switch (state) {
                    case StepState.Complete:
                        this._state = StepState.Complete;
                        break;
                    case StepState.Required:
                        this._state = StepState.Required;
                        break;
                    default:
                        this._state = StepState.None;
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdStepComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._contentPortal = new portal.TemplatePortal(this._content, this._viewContainerRef);
        };
        /**
         * Toggle active state of [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Toggle active state of [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdStepComponent.prototype.toggle = /**
         * Toggle active state of [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        function () {
            return this._setActive(!this._active);
        };
        /**
         * Opens [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Opens [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdStepComponent.prototype.open = /**
         * Opens [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        function () {
            return this._setActive(true);
        };
        /**
         * Closes [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Closes [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdStepComponent.prototype.close = /**
         * Closes [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        function () {
            return this._setActive(false);
        };
        /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         */
        /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         * @return {?}
         */
        TdStepComponent.prototype.isComplete = /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         * @return {?}
         */
        function () {
            return this._state === StepState.Complete;
        };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdStepComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v && this._active) {
                this._active = false;
                this._onDeactivated();
            }
        };
        /**
         * Method to change active state internally and emit the [activated] event if 'true' or [deactivated]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * returns true if successfully changed state
         */
        /**
         * Method to change active state internally and emit the [activated] event if 'true' or [deactivated]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * returns true if successfully changed state
         * @private
         * @param {?} newActive
         * @return {?}
         */
        TdStepComponent.prototype._setActive = /**
         * Method to change active state internally and emit the [activated] event if 'true' or [deactivated]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * returns true if successfully changed state
         * @private
         * @param {?} newActive
         * @return {?}
         */
        function (newActive) {
            if (this.disabled) {
                return false;
            }
            if (this._active !== newActive) {
                this._active = newActive;
                if (newActive) {
                    this._onActivated();
                }
                else {
                    this._onDeactivated();
                }
                return true;
            }
            return false;
        };
        /**
         * @private
         * @return {?}
         */
        TdStepComponent.prototype._onActivated = /**
         * @private
         * @return {?}
         */
        function () {
            this.activated.emit();
        };
        /**
         * @private
         * @return {?}
         */
        TdStepComponent.prototype._onDeactivated = /**
         * @private
         * @return {?}
         */
        function () {
            this.deactivated.emit();
        };
        TdStepComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-step',
                        inputs: ['disabled', 'disableRipple'],
                        template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        TdStepComponent.ctorParameters = function () { return [
            { type: core.ViewContainerRef }
        ]; };
        TdStepComponent.propDecorators = {
            _content: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }],
            stepLabel: [{ type: core.ContentChild, args: [TdStepLabelDirective, { static: false },] }],
            stepActions: [{ type: core.ContentChild, args: [TdStepActionsDirective, { static: false },] }],
            stepSummary: [{ type: core.ContentChild, args: [TdStepSummaryDirective, { static: false },] }],
            label: [{ type: core.Input }],
            sublabel: [{ type: core.Input }],
            active: [{ type: core.Input, args: ['active',] }],
            state: [{ type: core.Input, args: ['state',] }],
            activated: [{ type: core.Output }],
            deactivated: [{ type: core.Output }]
        };
        return TdStepComponent;
    }(_TdStepMixinBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdStepComponent.prototype._active;
        /**
         * @type {?}
         * @private
         */
        TdStepComponent.prototype._state;
        /**
         * @type {?}
         * @private
         */
        TdStepComponent.prototype._contentPortal;
        /** @type {?} */
        TdStepComponent.prototype._content;
        /** @type {?} */
        TdStepComponent.prototype.stepLabel;
        /** @type {?} */
        TdStepComponent.prototype.stepActions;
        /** @type {?} */
        TdStepComponent.prototype.stepSummary;
        /**
         * label?: string
         * Sets label of [TdStepComponent] header.
         * Defaults to 'Step #'
         * @type {?}
         */
        TdStepComponent.prototype.label;
        /**
         * sublabel?: string
         * Sets sublabel of [TdStepComponent] header.
         * @type {?}
         */
        TdStepComponent.prototype.sublabel;
        /**
         * activated?: function
         * Event emitted when [TdStepComponent] is activated.
         * @type {?}
         */
        TdStepComponent.prototype.activated;
        /**
         * deactivated?: function
         * Event emitted when [TdStepComponent] is deactivated.
         * @type {?}
         */
        TdStepComponent.prototype.deactivated;
        /**
         * @type {?}
         * @private
         */
        TdStepComponent.prototype._viewContainerRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IStepChangeEvent() { }
    if (false) {
        /** @type {?} */
        IStepChangeEvent.prototype.newStep;
        /** @type {?} */
        IStepChangeEvent.prototype.prevStep;
    }
    /** @enum {string} */
    var StepMode = {
        Vertical: 'vertical',
        Horizontal: 'horizontal',
    };
    var TdStepsComponent = /** @class */ (function () {
        function TdStepsComponent() {
            this._mode = StepMode.Vertical;
            /**
             * stepChange?: function
             * Method to be executed when [stepChange] event is emitted.
             * Emits an [IStepChangeEvent] implemented object.
             */
            this.stepChange = new core.EventEmitter();
        }
        Object.defineProperty(TdStepsComponent.prototype, "stepsContent", {
            set: /**
             * @param {?} steps
             * @return {?}
             */
            function (steps) {
                if (steps) {
                    this._steps = steps;
                    this._registerSteps();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepsComponent.prototype, "steps", {
            get: /**
             * @return {?}
             */
            function () {
                return this._steps.toArray();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepsComponent.prototype, "mode", {
            get: /**
             * @return {?}
             */
            function () {
                return this._mode;
            },
            /**
             * mode?: StepMode or ["vertical" | "horizontal"]
             * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
             */
            set: /**
             * mode?: StepMode or ["vertical" | "horizontal"]
             * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
             * @param {?} mode
             * @return {?}
             */
            function (mode) {
                if (mode === StepMode.Horizontal) {
                    this._mode = StepMode.Horizontal;
                }
                else {
                    this._mode = StepMode.Vertical;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Executed after content is initialized, loops through any [TdStepComponent] children elements,
         * assigns them a number and subscribes as an observer to their [activated] event.
         */
        /**
         * Executed after content is initialized, loops through any [TdStepComponent] children elements,
         * assigns them a number and subscribes as an observer to their [activated] event.
         * @return {?}
         */
        TdStepsComponent.prototype.ngAfterContentInit = /**
         * Executed after content is initialized, loops through any [TdStepComponent] children elements,
         * assigns them a number and subscribes as an observer to their [activated] event.
         * @return {?}
         */
        function () {
            this._registerSteps();
        };
        /**
         * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
         */
        /**
         * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
         * @return {?}
         */
        TdStepsComponent.prototype.ngOnDestroy = /**
         * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
         * @return {?}
         */
        function () {
            this._deregisterSteps();
        };
        /**
         * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
         */
        /**
         * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
         * @return {?}
         */
        TdStepsComponent.prototype.isHorizontal = /**
         * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
         * @return {?}
         */
        function () {
            return this._mode === StepMode.Horizontal;
        };
        /**
         * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
         */
        /**
         * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
         * @return {?}
         */
        TdStepsComponent.prototype.isVertical = /**
         * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
         * @return {?}
         */
        function () {
            return this._mode === StepMode.Vertical;
        };
        /**
         * @return {?}
         */
        TdStepsComponent.prototype.areStepsActive = /**
         * @return {?}
         */
        function () {
            return (this._steps.filter((/**
             * @param {?} step
             * @return {?}
             */
            function (step) {
                return step.active;
            })).length > 0);
        };
        /**
         * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
         * and emits [stepChange] event.
         */
        /**
         * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
         * and emits [stepChange] event.
         * @private
         * @param {?} step
         * @return {?}
         */
        TdStepsComponent.prototype._onStepSelection = /**
         * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
         * and emits [stepChange] event.
         * @private
         * @param {?} step
         * @return {?}
         */
        function (step) {
            if (this.prevStep !== step) {
                /** @type {?} */
                var prevStep = this.prevStep;
                this.prevStep = step;
                /** @type {?} */
                var event_1 = {
                    newStep: step,
                    prevStep: prevStep,
                };
                this._deactivateAllBut(step);
                this.stepChange.emit(event_1);
            }
        };
        /**
         * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
         */
        /**
         * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
         * @private
         * @param {?} activeStep
         * @return {?}
         */
        TdStepsComponent.prototype._deactivateAllBut = /**
         * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
         * @private
         * @param {?} activeStep
         * @return {?}
         */
        function (activeStep) {
            this._steps
                .filter((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step !== activeStep; }))
                .forEach((/**
             * @param {?} step
             * @return {?}
             */
            function (step) {
                step.active = false;
            }));
        };
        /**
         * @private
         * @return {?}
         */
        TdStepsComponent.prototype._registerSteps = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this._subcriptions = [];
            this._steps.toArray().forEach((/**
             * @param {?} step
             * @return {?}
             */
            function (step) {
                /** @type {?} */
                var subscription = step.activated.asObservable().subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this._onStepSelection(step);
                }));
                _this._subcriptions.push(subscription);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        TdStepsComponent.prototype._deregisterSteps = /**
         * @private
         * @return {?}
         */
        function () {
            if (this._subcriptions) {
                this._subcriptions.forEach((/**
                 * @param {?} subs
                 * @return {?}
                 */
                function (subs) {
                    subs.unsubscribe();
                }));
                this._subcriptions = undefined;
            }
        };
        TdStepsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-steps',
                        template: "<div *ngIf=\"isHorizontal()\" class=\"td-steps-header\">\n  <ng-template let-step let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"steps\">\n    <td-step-header\n      class=\"td-step-horizontal-header\"\n      (keydown.enter)=\"step.open()\"\n      [number]=\"index + 1\"\n      [active]=\"step.active\"\n      [disableRipple]=\"step.disableRipple\"\n      [disabled]=\"step.disabled\"\n      [state]=\"step.state\"\n      (click)=\"step.open()\"\n    >\n      <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n      <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{ step.label }}</ng-template>\n      <ng-template td-step-header-sublabel [ngIf]=\"true\">{{ step.sublabel | truncate: 30 }}</ng-template>\n    </td-step-header>\n    <span *ngIf=\"!last\" class=\"td-horizontal-line\"></span>\n  </ng-template>\n</div>\n<div *ngFor=\"let step of steps; let index = index; let last = last\" class=\"td-step\">\n  <td-step-header\n    class=\"td-step-vertical-header\"\n    (keydown.enter)=\"step.toggle()\"\n    [number]=\"index + 1\"\n    [active]=\"step.active\"\n    [disabled]=\"step.disabled\"\n    [disableRipple]=\"step.disableRipple\"\n    [state]=\"step.state\"\n    (click)=\"step.toggle()\"\n    *ngIf=\"isVertical()\"\n  >\n    <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n    <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{ step.label }}</ng-template>\n    <ng-template td-step-header-sublabel [ngIf]=\"true\">{{ step.sublabel }}</ng-template>\n  </td-step-header>\n  <ng-template [ngIf]=\"isVertical() || step.active || (!areStepsActive() && prevStep === step)\">\n    <td-step-body [active]=\"step.active\" [state]=\"step.state\">\n      <div *ngIf=\"isVertical()\" class=\"td-line-wrapper\">\n        <div *ngIf=\"!last\" class=\"td-vertical-line\"></div>\n      </div>\n      <ng-template td-step-body-content [cdkPortalOutlet]=\"step.stepContent\"></ng-template>\n      <ng-template td-step-body-actions [cdkPortalOutlet]=\"step.stepActions\"></ng-template>\n      <ng-template td-step-body-summary [cdkPortalOutlet]=\"step.stepSummary\"></ng-template>\n    </td-step-body>\n  </ng-template>\n</div>\n",
                        /* tslint:disable-next-line */
                        host: {
                            class: 'td-steps',
                        },
                        styles: [".td-line-wrapper,.td-step{position:relative}.td-steps-header{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.td-line-wrapper{width:24px;min-height:1px}.td-horizontal-line{border-bottom-width:1px;border-bottom-style:solid;height:1px;position:relative;top:36px;min-width:15px;-webkit-box-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}::ng-deep :not([dir=rtl]) .td-horizontal-line{left:-6px;right:-3px}::ng-deep [dir=rtl] .td-horizontal-line{left:-3px;right:-6px}.td-vertical-line{position:absolute;bottom:-16px;top:-16px;border-left-width:1px;border-left-style:solid}::ng-deep :not([dir=rtl]) .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line{left:auto;right:20px}"]
                    }] }
        ];
        TdStepsComponent.propDecorators = {
            stepsContent: [{ type: core.ContentChildren, args: [TdStepComponent, { descendants: true },] }],
            mode: [{ type: core.Input, args: ['mode',] }],
            stepChange: [{ type: core.Output }]
        };
        return TdStepsComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdStepsComponent.prototype._subcriptions;
        /**
         * @type {?}
         * @private
         */
        TdStepsComponent.prototype._mode;
        /**
         * @type {?}
         * @private
         */
        TdStepsComponent.prototype._steps;
        /** @type {?} */
        TdStepsComponent.prototype.prevStep;
        /**
         * stepChange?: function
         * Method to be executed when [stepChange] event is emitted.
         * Emits an [IStepChangeEvent] implemented object.
         * @type {?}
         */
        TdStepsComponent.prototype.stepChange;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdStepHeaderBase = /** @class */ (function () {
        function TdStepHeaderBase() {
        }
        return TdStepHeaderBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdStepHeaderMixinBase = common$1.mixinDisableRipple(common$1.mixinDisabled(TdStepHeaderBase));
    var TdStepHeaderComponent = /** @class */ (function (_super) {
        __extends(TdStepHeaderComponent, _super);
        function TdStepHeaderComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * state?: StepState or ['none' | 'required' | 'complete']
             * Sets styles for state of header.
             * Defaults to [StepState.None | 'none'].
             */
            _this.state = StepState.None;
            return _this;
        }
        /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         */
        /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         * @return {?}
         */
        TdStepHeaderComponent.prototype.isComplete = /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         * @return {?}
         */
        function () {
            return this.state === StepState.Complete;
        };
        /**
         * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
         */
        /**
         * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
         * @return {?}
         */
        TdStepHeaderComponent.prototype.isRequired = /**
         * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
         * @return {?}
         */
        function () {
            return this.state === StepState.Required;
        };
        TdStepHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-step-header',
                        inputs: ['disabled', 'disableRipple'],
                        template: "<div\n  class=\"td-step-header\"\n  [class.mat-disabled]=\"disabled\"\n  matRipple\n  [matRippleDisabled]=\"disabled || disableRipple\"\n  [tabIndex]=\"disabled ? -1 : tabIndex || 0\"\n>\n  <div\n    class=\"td-circle\"\n    [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n    [class.mat-active]=\"active && !disabled\"\n    *ngIf=\"!isRequired() && !isComplete()\"\n  >\n    <span *ngIf=\"active || !isComplete()\">{{ number || '' }}</span>\n  </div>\n  <div class=\"td-complete\" *ngIf=\"isComplete()\">\n    <mat-icon class=\"mat-complete\">check_circle</mat-icon>\n  </div>\n  <div class=\"td-triangle\" [class.bg-muted]=\"disabled\" *ngIf=\"isRequired()\">\n    <mat-icon class=\"mat-warn\">warning</mat-icon>\n  </div>\n  <div\n    class=\"td-step-label-wrapper\"\n    [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n    [class.mat-warn]=\"isRequired() && !disabled\"\n  >\n    <div class=\"td-step-label\">\n      <ng-content select=\"[td-step-header-label]\"></ng-content>\n    </div>\n    <div class=\"td-step-sublabel\">\n      <ng-content select=\"[td-step-header-sublabel]\"></ng-content>\n    </div>\n  </div>\n  <span class=\"td-step-header-separator\"></span>\n  <mat-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</mat-icon>\n</div>\n",
                        styles: [".td-step-header{position:relative;outline:0;min-width:120px;height:72px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.td-step-header:hover:not(.mat-disabled){cursor:pointer}.td-step-header mat-icon.td-edit-icon{margin:0 8px}.td-step-header mat-icon.mat-warn{font-size:24px;height:24px;width:24px}.td-step-header mat-icon.mat-complete{position:relative;left:-2px;top:2px;font-size:28px;height:24px;width:24px}.td-step-header .td-circle{height:24px;width:24px;line-height:24px;border-radius:99%;text-align:center;-webkit-box-flex:0;-ms-flex:none;flex:none}.td-step-header .td-circle mat-icon{margin-top:2px;font-weight:700}.td-step-header .td-triangle>mat-icon{font-size:25px}::ng-deep :not([dir=rtl]) .td-step-header .td-circle,::ng-deep :not([dir=rtl]) .td-step-header .td-complete,::ng-deep :not([dir=rtl]) .td-step-header .td-triangle{margin-left:8px;margin-right:0}::ng-deep [dir=rtl] .td-step-header .td-circle,::ng-deep [dir=rtl] .td-step-header .td-complete,::ng-deep [dir=rtl] .td-step-header .td-triangle{margin-left:0;margin-right:8px}.td-step-header .td-circle,.td-step-header .td-complete{font-size:14px}.td-step-header .td-step-label-wrapper{padding-left:8px;padding-right:8px}.td-step-header .td-step-header-separator{-webkit-box-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}"]
                    }] }
        ];
        TdStepHeaderComponent.propDecorators = {
            number: [{ type: core.Input }],
            active: [{ type: core.Input }],
            state: [{ type: core.Input }],
            tabIndex: [{ type: core.Input }]
        };
        return TdStepHeaderComponent;
    }(_TdStepHeaderMixinBase));
    if (false) {
        /**
         * Number assigned to [TdStepHeaderComponent].
         * @type {?}
         */
        TdStepHeaderComponent.prototype.number;
        /**
         * active?: boolean
         * Sets for active/inactive states on header.
         * @type {?}
         */
        TdStepHeaderComponent.prototype.active;
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of header.
         * Defaults to [StepState.None | 'none'].
         * @type {?}
         */
        TdStepHeaderComponent.prototype.state;
        /**
         * tabIndex?: number
         * tabIndex of the step header for a11y
         * @type {?}
         */
        TdStepHeaderComponent.prototype.tabIndex;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdStepBodyComponent = /** @class */ (function () {
        function TdStepBodyComponent() {
            /**
             * state?: StepState or ['none' | 'required' | 'complete']
             * Sets styles for state of body.
             * Defaults to [StepState.None | 'none'].
             */
            this.state = StepState.None;
        }
        Object.defineProperty(TdStepBodyComponent.prototype, "hasContent", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.contentRef &&
                    (this.contentRef.nativeElement.children.length > 0 || !!this.contentRef.nativeElement.textContent.trim()));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepBodyComponent.prototype, "hasActions", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.actionsRef &&
                    (this.actionsRef.nativeElement.children.length > 0 || !!this.actionsRef.nativeElement.textContent.trim()));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepBodyComponent.prototype, "hasSummary", {
            get: /**
             * @return {?}
             */
            function () {
                return (this.summaryRef &&
                    (this.summaryRef.nativeElement.children.length > 0 || !!this.summaryRef.nativeElement.textContent.trim()));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         */
        /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         * @return {?}
         */
        TdStepBodyComponent.prototype.isComplete = /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         * @return {?}
         */
        function () {
            return this.state === StepState.Complete;
        };
        TdStepBodyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-step-body',
                        template: "<ng-content></ng-content>\n<div class=\"td-step-body\">\n  <div class=\"td-step-content-wrapper\" [@tdCollapse]=\"!active\">\n    <div #contentRef cdkScrollable [class.td-step-content]=\"hasContent\">\n      <ng-content select=\"[td-step-body-content]\"></ng-content>\n    </div>\n    <div #actionsRef [class.td-step-actions]=\"hasActions\">\n      <ng-content select=\"[td-step-body-actions]\"></ng-content>\n    </div>\n  </div>\n  <div #summaryRef [@tdCollapse]=\"active || !isComplete()\" [class.td-step-summary]=\"hasSummary\">\n    <ng-content select=\"[td-step-body-summary]\"></ng-content>\n  </div>\n</div>\n",
                        animations: [common$1.tdCollapseAnimation],
                        styles: [":host{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}:host .td-step-body{overflow-x:hidden;-webkit-box-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}:host .td-step-body .td-step-content-wrapper.ng-animating,:host .td-step-body .td-step-summary.ng-animating{overflow:hidden}:host .td-step-body .td-step-content{overflow-x:auto}:host .td-step-body .td-step-actions{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}"]
                    }] }
        ];
        TdStepBodyComponent.propDecorators = {
            contentRef: [{ type: core.ViewChild, args: ['contentRef', { read: core.ElementRef, static: true },] }],
            actionsRef: [{ type: core.ViewChild, args: ['actionsRef', { read: core.ElementRef, static: true },] }],
            summaryRef: [{ type: core.ViewChild, args: ['summaryRef', { read: core.ElementRef, static: true },] }],
            active: [{ type: core.Input }],
            state: [{ type: core.Input }]
        };
        return TdStepBodyComponent;
    }());
    if (false) {
        /** @type {?} */
        TdStepBodyComponent.prototype.contentRef;
        /** @type {?} */
        TdStepBodyComponent.prototype.actionsRef;
        /** @type {?} */
        TdStepBodyComponent.prototype.summaryRef;
        /**
         * active?: boolean
         * Sets for active/inactive states on body.
         * @type {?}
         */
        TdStepBodyComponent.prototype.active;
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of body.
         * Defaults to [StepState.None | 'none'].
         * @type {?}
         */
        TdStepBodyComponent.prototype.state;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdNavStepLinkComponent = /** @class */ (function (_super) {
        __extends(TdNavStepLinkComponent, _super);
        function TdNavStepLinkComponent(_changeDetectorRef, elementRef) {
            var _this = _super.call(this) || this;
            _this._changeDetectorRef = _changeDetectorRef;
            _this.elementRef = elementRef;
            _this._active = false;
            _this._state = StepState.None;
            return _this;
        }
        Object.defineProperty(TdNavStepLinkComponent.prototype, "state", {
            get: /**
             * @return {?}
             */
            function () {
                return this._state;
            },
            /**
             * state?: StepState or ['none' | 'required' | 'complete']
             * Sets state of component depending on value.
             * Defaults to [StepState.None | 'none'].
             */
            set: /**
             * state?: StepState or ['none' | 'required' | 'complete']
             * Sets state of component depending on value.
             * Defaults to [StepState.None | 'none'].
             * @param {?} state
             * @return {?}
             */
            function (state) {
                switch (state) {
                    case StepState.Complete:
                        this._state = StepState.Complete;
                        break;
                    case StepState.Required:
                        this._state = StepState.Required;
                        break;
                    default:
                        this._state = StepState.None;
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavStepLinkComponent.prototype, "active", {
            get: /**
             * @return {?}
             */
            function () {
                return this._active;
            },
            /**
             * active?: boolean
             * Toggles component between active/deactive.
             */
            set: /**
             * active?: boolean
             * Toggles component between active/deactive.
             * @param {?} active
             * @return {?}
             */
            function (active) {
                this._active = coercion.coerceBooleanProperty(active);
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} click
         * @return {?}
         */
        TdNavStepLinkComponent.prototype._handleClick = /**
         * @param {?} click
         * @return {?}
         */
        function (click) {
            if (this.disabled) {
                click.preventDefault();
                click.stopImmediatePropagation();
            }
        };
        TdNavStepLinkComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[td-step-link],[tdStepLink]',
                        template: "<td-step-header\n  class=\"td-step-header-wrapper\"\n  [tabIndex]=\"-1\"\n  [number]=\"number\"\n  [active]=\"active\"\n  [disableRipple]=\"disableRipple || disabled\"\n  [disabled]=\"disabled\"\n  [state]=\"state\"\n>\n  <ng-template td-step-header-label [ngIf]=\"true\">{{ label }}</ng-template>\n  <ng-template td-step-header-sublabel [ngIf]=\"true\">{{ sublabel | truncate: 30 }}</ng-template>\n  <ng-content></ng-content>\n</td-step-header>\n",
                        inputs: ['disabled', 'disableRipple'],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        host: {
                            '[class.td-step-link]': 'true',
                            '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
                            '[attr.disabled]': 'disabled || null',
                            '[class.mat-disabled]': 'disabled || null',
                            '(click)': '_handleClick($event)',
                        },
                        styles: [":host{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host.mat-disabled{pointer-events:none}:host .td-step-header-wrapper{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavStepLinkComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef }
        ]; };
        TdNavStepLinkComponent.propDecorators = {
            state: [{ type: core.Input, args: ['state',] }],
            label: [{ type: core.Input }],
            sublabel: [{ type: core.Input }],
            active: [{ type: core.Input, args: ['active',] }],
            tabIndex: [{ type: core.Input }]
        };
        return TdNavStepLinkComponent;
    }(_TdStepMixinBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdNavStepLinkComponent.prototype._active;
        /**
         * @type {?}
         * @private
         */
        TdNavStepLinkComponent.prototype._state;
        /** @type {?} */
        TdNavStepLinkComponent.prototype.number;
        /**
         * label?: string
         * Label to display in step header
         * Defaults to empty
         * @type {?}
         */
        TdNavStepLinkComponent.prototype.label;
        /**
         * sublabel?: string
         * Sublabel to display in step header
         * Defaults to empty
         * @type {?}
         */
        TdNavStepLinkComponent.prototype.sublabel;
        /**
         * tabIndex?: number
         * tabIndex for component
         * @type {?}
         */
        TdNavStepLinkComponent.prototype.tabIndex;
        /**
         * @type {?}
         * @private
         */
        TdNavStepLinkComponent.prototype._changeDetectorRef;
        /** @type {?} */
        TdNavStepLinkComponent.prototype.elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdNavStepsHorizontalComponent = /** @class */ (function () {
        function TdNavStepsHorizontalComponent(_elementRef, _viewportRuler, _dir, _renderer, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._viewportRuler = _viewportRuler;
            this._dir = _dir;
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._separators = [];
            /**
             * Emits when the component is destroyed.
             */
            this._destroyed = new rxjs.Subject();
            this._widthSubject = new rxjs.Subject();
            this._scrollDistance = 0;
            this._scrollDistanceChanged = false;
            /**
             * Whether the controls for pagination should be displayed
             */
            this._showPaginationControls = false;
            /**
             * Whether the step list can be scrolled more towards the end.
             */
            this._disableScrollAfter = true;
            /**
             * Whether the step list can be scrolled more towards the beginning.
             */
            this._disableScrollBefore = true;
        }
        Object.defineProperty(TdNavStepsHorizontalComponent.prototype, "nativeElementWidth", {
            /*
             * Current width of the element container
             */
            get: /*
               * Current width of the element container
               */
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = (/** @type {?} */ (this._elementRef.nativeElement));
                // Need to take into account border, margin and padding that might be around all the crumbs
                /** @type {?} */
                var style = window.getComputedStyle(element);
                /** @type {?} */
                var borderLeft = parseInt(style.borderLeft, 10);
                /** @type {?} */
                var borderRight = parseInt(style.borderRight, 10);
                /** @type {?} */
                var marginLeft = parseInt(style.marginLeft, 10);
                /** @type {?} */
                var marginRight = parseInt(style.marginRight, 10);
                /** @type {?} */
                var paddingLeft = parseInt(style.paddingLeft, 10);
                /** @type {?} */
                var paddingRight = parseInt(style.paddingRight, 10);
                return (element.getBoundingClientRect().width -
                    borderLeft -
                    borderRight -
                    marginLeft -
                    marginRight -
                    paddingLeft -
                    paddingRight);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            rxjs.merge(this._widthSubject.asObservable().pipe(operators.distinctUntilChanged()), this._viewportRuler.change(150), this._dir ? this._dir.change : rxjs.of(undefined), this._steps.changes)
                .pipe(operators.takeUntil(this._destroyed))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this._configureSteps();
                _this.updatePagination();
                _this._changeDetectorRef.markForCheck();
            }));
            this._configureSteps();
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
        function () {
            if (this._elementRef && this._elementRef.nativeElement) {
                this._widthSubject.next(this.nativeElementWidth);
            }
            if (this._scrollDistanceChanged) {
                this._updateStepScrollPosition();
                this._scrollDistanceChanged = false;
                this._changeDetectorRef.markForCheck();
            }
        };
        /**
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._destroyed.next();
            this._destroyed.complete();
        };
        /**
         * Listen to right and left key events to move the the viewport.
         */
        /**
         * Listen to right and left key events to move the the viewport.
         * @param {?} event
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._handleKeydown = /**
         * Listen to right and left key events to move the the viewport.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.keyCode) {
                case keycodes.LEFT_ARROW:
                    this._scrollHeader('before');
                    event.preventDefault();
                    break;
                case keycodes.RIGHT_ARROW:
                    this._scrollHeader('after');
                    event.preventDefault();
                    break;
                default:
                // do something
            }
        };
        /**
         * Updates the view whether pagination should be enabled or not.
         */
        /**
         * Updates the view whether pagination should be enabled or not.
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype.updatePagination = /**
         * Updates the view whether pagination should be enabled or not.
         * @return {?}
         */
        function () {
            this._checkPaginationEnabled();
            this._checkScrollingControls();
            this._updateStepScrollPosition();
        };
        /** The layout direction of the containing app. */
        /**
         * The layout direction of the containing app.
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._getLayoutDirection = /**
         * The layout direction of the containing app.
         * @return {?}
         */
        function () {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        };
        /** Performs the CSS transformation on the step list that will cause the list to scroll. */
        /**
         * Performs the CSS transformation on the step list that will cause the list to scroll.
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._updateStepScrollPosition = /**
         * Performs the CSS transformation on the step list that will cause the list to scroll.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var translateX = this._getLayoutDirection() === 'ltr' ? -this.scrollDistance : this.scrollDistance;
            // Move step list the amount of pixels scrolled
            this._stepList.nativeElement.style.transform = "translateX(" + Math.round(translateX) + "px)";
            // Setting the `transform` on IE will change the scroll offset of the parent, causing the
            // position to be thrown off in some cases. We have to reset it ourselves to ensure that
            // it doesn't get thrown off.
            if (this._getLayoutDirection() === 'ltr') {
                this._stepListContainer.nativeElement.scrollLeft = 0;
            }
            else {
                this._stepListContainer.nativeElement.scrollLeft = this._getMaxScrollDistance();
            }
        };
        Object.defineProperty(TdNavStepsHorizontalComponent.prototype, "scrollDistance", {
            /** Sets the distance in pixels that the step header should be transformed in the X-axis. */
            get: /**
             * Sets the distance in pixels that the step header should be transformed in the X-axis.
             * @return {?}
             */
            function () {
                return this._scrollDistance;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), v));
                // Mark that the scroll distance has changed so that after the view is checked, the CSS
                // transformation can move the header.
                this._scrollDistanceChanged = true;
                this._checkScrollingControls();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
         * the end of the list, respectively).
         */
        /**
         * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
         * the end of the list, respectively).
         * @param {?} scrollDir
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._scrollHeader = /**
         * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
         * the end of the list, respectively).
         * @param {?} scrollDir
         * @return {?}
         */
        function (scrollDir) {
            // Move the scroll distance one-half the length of the step list's viewport.
            this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this._stepListContainer.nativeElement.offsetWidth) / 2;
        };
        /**
         * Evaluate whether the pagination controls should be displayed. If the scroll width of the
         * step list is wider than the size of the header container, then the pagination controls should
         * be shown.
         */
        /**
         * Evaluate whether the pagination controls should be displayed. If the scroll width of the
         * step list is wider than the size of the header container, then the pagination controls should
         * be shown.
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._checkPaginationEnabled = /**
         * Evaluate whether the pagination controls should be displayed. If the scroll width of the
         * step list is wider than the size of the header container, then the pagination controls should
         * be shown.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isEnabled = this._stepList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
            if (!isEnabled) {
                this.scrollDistance = 0;
            }
            if (isEnabled !== this._showPaginationControls) {
                this._changeDetectorRef.markForCheck();
            }
            this._showPaginationControls = isEnabled;
        };
        /**
         * Evaluate whether the before and after controls should be enabled or disabled.
         * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
         * before button. If the header is at the end of the list (scroll distance is equal to the
         * maximum distance we can scroll), then disable the after button.
         */
        /**
         * Evaluate whether the before and after controls should be enabled or disabled.
         * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
         * before button. If the header is at the end of the list (scroll distance is equal to the
         * maximum distance we can scroll), then disable the after button.
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._checkScrollingControls = /**
         * Evaluate whether the before and after controls should be enabled or disabled.
         * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
         * before button. If the header is at the end of the list (scroll distance is equal to the
         * maximum distance we can scroll), then disable the after button.
         * @return {?}
         */
        function () {
            // Check if the pagination arrows should be activated.
            this._disableScrollBefore = this.scrollDistance === 0;
            this._disableScrollAfter = this.scrollDistance === this._getMaxScrollDistance();
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the step list container and step header container.
         */
        /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the step list container and step header container.
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._getMaxScrollDistance = /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the step list container and step header container.
         * @return {?}
         */
        function () {
            return this._stepList.nativeElement.scrollWidth - this._stepListContainer.nativeElement.offsetWidth || 0;
        };
        /**
         * Set the step line separators and display numbers
         */
        /**
         * Set the step line separators and display numbers
         * @private
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._configureSteps = /**
         * Set the step line separators and display numbers
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this._separators.forEach((/**
             * @param {?} separator
             * @return {?}
             */
            function (separator) {
                _this._renderer.removeChild(_this._stepList.nativeElement, separator);
            }));
            /** @type {?} */
            var stepsArray = this._steps.toArray();
            // set the index number of the step so can display that number in circle
            stepsArray.forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) {
                if (index > 0 && index < stepsArray.length) {
                    /** @type {?} */
                    var separator = _this._renderer.createElement('div');
                    _this._renderer.addClass(separator, 'td-horizontal-line');
                    _this._separators.push(separator);
                    _this._renderer.insertBefore(_this._stepList.nativeElement, separator, step.elementRef.nativeElement);
                }
                step.number = index + 1;
            }));
        };
        TdNavStepsHorizontalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nav[td-steps][horizontal]',
                        template: "<div class=\"td-steps-header\">\n  <div\n    class=\"td-step-header-pagination td-step-header-pagination-before mat-elevation-z4\"\n    aria-hidden=\"true\"\n    mat-ripple\n    [matRippleDisabled]=\"_disableScrollBefore\"\n    [class.td-step-header-pagination-disabled]=\"_disableScrollBefore\"\n    (click)=\"_scrollHeader('before')\"\n  >\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n  <div #stepListContainer class=\"td-steps-header-container\" (keydown)=\"_handleKeydown($event)\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div\n    class=\"td-step-header-pagination td-step-header-pagination-after mat-elevation-z4\"\n    aria-hidden=\"true\"\n    mat-ripple\n    [matRippleDisabled]=\"_disableScrollAfter\"\n    [class.td-step-header-pagination-disabled]=\"_disableScrollAfter\"\n    (click)=\"_scrollHeader('after')\"\n  >\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        host: {
                            'class': 'td-steps td-steps-horizontal',
                            '[class.td-step-header-pagination-controls-enabled]': '_showPaginationControls',
                            '[class.td-step-header-rtl]': "_getLayoutDirection() == 'rtl'",
                        },
                        styles: [":host{width:100%;display:block}.td-steps-header,.td-steps-header-list{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.td-steps-header-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow:hidden;z-index:1}.td-steps-header-list{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.35,0,.25,1);transition:transform .5s cubic-bezier(.35,0,.25,1),-webkit-transform .5s cubic-bezier(.35,0,.25,1);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.td-step-header-pagination{position:relative;display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:32px;cursor:pointer;z-index:2}:host.td-step-header-pagination-controls-enabled .td-step-header-pagination{display:-webkit-box;display:-ms-flexbox;display:flex}.td-step-header-pagination-before,:host.td-step-header-rtl .td-step-header-pagination-after{padding-left:4px}.td-step-header-pagination-before .td-step-header-pagination-chevron,:host.td-step-header-rtl .td-step-header-pagination-after .td-step-header-pagination-chevron{-webkit-transform:rotate(-135deg);-ms-transform:rotate(-135deg);transform:rotate(-135deg)}.td-step-header-pagination-after,:host.td-step-header-rtl .td-step-header-pagination-before{padding-right:4px}.td-step-header-pagination-after .td-step-header-pagination-chevron,:host.td-step-header-rtl .td-step-header-pagination-before .td-step-header-pagination-chevron{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.td-step-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.td-step-header-pagination-disabled{box-shadow:none;cursor:default}.td-horizontal-line{border-bottom-width:1px;border-bottom-style:solid;height:1px;min-width:20px;-webkit-box-flex:1;-ms-flex:1;flex:1;box-sizing:border-box}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavStepsHorizontalComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: scrolling.ViewportRuler },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        TdNavStepsHorizontalComponent.propDecorators = {
            _steps: [{ type: core.ContentChildren, args: [TdNavStepLinkComponent, { descendants: true },] }],
            _stepListContainer: [{ type: core.ViewChild, args: ['stepListContainer', { static: true },] }],
            _stepList: [{ type: core.ViewChild, args: ['stepList', { static: true },] }]
        };
        return TdNavStepsHorizontalComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdNavStepsHorizontalComponent.prototype._separators;
        /**
         * Emits when the component is destroyed.
         * @type {?}
         * @private
         */
        TdNavStepsHorizontalComponent.prototype._destroyed;
        /**
         * @type {?}
         * @private
         */
        TdNavStepsHorizontalComponent.prototype._widthSubject;
        /**
         * @type {?}
         * @private
         */
        TdNavStepsHorizontalComponent.prototype._scrollDistance;
        /**
         * @type {?}
         * @private
         */
        TdNavStepsHorizontalComponent.prototype._scrollDistanceChanged;
        /**
         * Whether the controls for pagination should be displayed
         * @type {?}
         */
        TdNavStepsHorizontalComponent.prototype._showPaginationControls;
        /**
         * Whether the step list can be scrolled more towards the end.
         * @type {?}
         */
        TdNavStepsHorizontalComponent.prototype._disableScrollAfter;
        /**
         * Whether the step list can be scrolled more towards the beginning.
         * @type {?}
         */
        TdNavStepsHorizontalComponent.prototype._disableScrollBefore;
        /** @type {?} */
        TdNavStepsHorizontalComponent.prototype._steps;
        /** @type {?} */
        TdNavStepsHorizontalComponent.prototype._stepListContainer;
        /** @type {?} */
        TdNavStepsHorizontalComponent.prototype._stepList;
        /**
         * @type {?}
         * @private
         */
        TdNavStepsHorizontalComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdNavStepsHorizontalComponent.prototype._viewportRuler;
        /**
         * @type {?}
         * @private
         */
        TdNavStepsHorizontalComponent.prototype._dir;
        /**
         * @type {?}
         * @private
         */
        TdNavStepsHorizontalComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdNavStepsHorizontalComponent.prototype._changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdNavStepsVerticalComponent = /** @class */ (function () {
        function TdNavStepsVerticalComponent(_renderer, _changeDetectorRef) {
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._separators = [];
            /**
             * Emits when the component is destroyed.
             */
            this._destroyed = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        TdNavStepsVerticalComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._steps.changes.pipe(operators.takeUntil(this._destroyed)).subscribe((/**
             * @return {?}
             */
            function () {
                _this._configureSteps();
                _this._changeDetectorRef.markForCheck();
            }));
            this._configureSteps();
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @return {?}
         */
        TdNavStepsVerticalComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._destroyed.next();
            this._destroyed.complete();
        };
        /**
         * Set the step line separators and display numbers
         */
        /**
         * Set the step line separators and display numbers
         * @private
         * @return {?}
         */
        TdNavStepsVerticalComponent.prototype._configureSteps = /**
         * Set the step line separators and display numbers
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this._separators.forEach((/**
             * @param {?} separator
             * @return {?}
             */
            function (separator) {
                _this._renderer.removeChild(_this._stepList.nativeElement, separator);
            }));
            /** @type {?} */
            var stepsArray = this._steps.toArray();
            // set the index number of the step so can display that number in circle
            stepsArray.forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) {
                if (index > 0 && index < stepsArray.length) {
                    /** @type {?} */
                    var separator = _this._renderer.createElement('div');
                    _this._renderer.addClass(separator, 'td-vertical-line-wrapper');
                    /** @type {?} */
                    var separatorChild = _this._renderer.createElement('div');
                    _this._renderer.addClass(separatorChild, 'td-vertical-line');
                    _this._renderer.appendChild(separator, separatorChild);
                    _this._separators.push(separator);
                    _this._renderer.insertBefore(_this._stepList.nativeElement, separator, step.elementRef.nativeElement);
                }
                step.number = index + 1;
            }));
        };
        TdNavStepsVerticalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nav[td-steps][vertical]',
                        template: "<div class=\"td-steps-header\">\n  <div class=\"td-steps-header-container\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        host: {
                            class: 'td-steps td-steps-vertical',
                        },
                        styles: [".td-vertical-line-wrapper{position:relative}.td-vertical-line-wrapper .td-vertical-line{position:absolute;top:-16px;height:34px;border-left-width:1px;border-left-style:solid}::ng-deep :not([dir=rtl]) .td-vertical-line-wrapper .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line-wrapper .td-vertical-line{left:auto;right:20px}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavStepsVerticalComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        TdNavStepsVerticalComponent.propDecorators = {
            _steps: [{ type: core.ContentChildren, args: [TdNavStepLinkComponent, { descendants: true },] }],
            _stepList: [{ type: core.ViewChild, args: ['stepList', { static: true },] }]
        };
        return TdNavStepsVerticalComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdNavStepsVerticalComponent.prototype._separators;
        /**
         * Emits when the component is destroyed.
         * @type {?}
         * @private
         */
        TdNavStepsVerticalComponent.prototype._destroyed;
        /** @type {?} */
        TdNavStepsVerticalComponent.prototype._steps;
        /** @type {?} */
        TdNavStepsVerticalComponent.prototype._stepList;
        /**
         * @type {?}
         * @private
         */
        TdNavStepsVerticalComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdNavStepsVerticalComponent.prototype._changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_STEPS = [
        TdStepsComponent,
        TdStepComponent,
        TdStepHeaderComponent,
        TdStepBodyComponent,
        TdStepLabelDirective,
        TdStepActionsDirective,
        TdStepSummaryDirective,
        TdNavStepsHorizontalComponent,
        TdNavStepsVerticalComponent,
        TdNavStepLinkComponent,
    ];
    var CovalentStepsModule = /** @class */ (function () {
        function CovalentStepsModule() {
        }
        CovalentStepsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, icon.MatIconModule, core$1.MatRippleModule, portal.PortalModule, scrolling.ScrollingModule, common$1.CovalentCommonModule],
                        declarations: [TD_STEPS],
                        exports: [TD_STEPS],
                    },] }
        ];
        return CovalentStepsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdTabOptionBase = /** @class */ (function () {
        function TdTabOptionBase(_viewContainerRef, _changeDetectorRef) {
            this._viewContainerRef = _viewContainerRef;
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdTabOptionBase;
    }());
    if (false) {
        /** @type {?} */
        TdTabOptionBase.prototype._viewContainerRef;
        /** @type {?} */
        TdTabOptionBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdTabOptionMixinBase = common$1.mixinDisabled(TdTabOptionBase);
    var TdTabOptionComponent = /** @class */ (function (_super) {
        __extends(TdTabOptionComponent, _super);
        function TdTabOptionComponent(_viewContainerRef, _changeDetectorRef) {
            return _super.call(this, _viewContainerRef, _changeDetectorRef) || this;
        }
        Object.defineProperty(TdTabOptionComponent.prototype, "content", {
            get: /**
             * @return {?}
             */
            function () {
                return this._contentPortal;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdTabOptionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._contentPortal = new portal.TemplatePortal(this._content, this._viewContainerRef);
        };
        TdTabOptionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-tab-option',
                        template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        inputs: ['disabled'],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TdTabOptionComponent.ctorParameters = function () { return [
            { type: core.ViewContainerRef },
            { type: core.ChangeDetectorRef }
        ]; };
        TdTabOptionComponent.propDecorators = {
            _content: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }],
            value: [{ type: core.Input }]
        };
        return TdTabOptionComponent;
    }(_TdTabOptionMixinBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdTabOptionComponent.prototype._contentPortal;
        /** @type {?} */
        TdTabOptionComponent.prototype._content;
        /**
         * Value to which the option will be binded to.
         * @type {?}
         */
        TdTabOptionComponent.prototype.value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdTabSelectBase = /** @class */ (function () {
        function TdTabSelectBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdTabSelectBase;
    }());
    if (false) {
        /** @type {?} */
        TdTabSelectBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdTabSelectMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(common$1.mixinDisableRipple(TdTabSelectBase)));
    var TdTabSelectComponent = /** @class */ (function (_super) {
        __extends(TdTabSelectComponent, _super);
        function TdTabSelectComponent(_changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._subs = [];
            _this._values = [];
            _this._selectedIndex = 0;
            _this._stretchTabs = false;
            /**
             * Event that emits whenever the raw value of the select changes. This is here primarily
             * to facilitate the two-way binding for the `value` input.
             */
            _this.valueChange = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdTabSelectComponent.prototype, "selectedIndex", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectedIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdTabSelectComponent.prototype, "tabOptions", {
            get: /**
             * @return {?}
             */
            function () {
                return this._tabOptions ? this._tabOptions.toArray() : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdTabSelectComponent.prototype, "stretchTabs", {
            get: /**
             * @return {?}
             */
            function () {
                return this._stretchTabs;
            },
            /**
             * Makes the tabs stretch to fit the parent container.
             */
            set: /**
             * Makes the tabs stretch to fit the parent container.
             * @param {?} stretchTabs
             * @return {?}
             */
            function (stretchTabs) {
                this._stretchTabs = coercion.coerceBooleanProperty(stretchTabs);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // subscribe to check if value changes and update the selectedIndex internally.
            this._subs.push(this.valueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this._setValue(value);
            })));
        };
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // subscribe to listen to any tab changes.
            this._refreshValues();
            this._subs.push(this._tabOptions.changes.subscribe((/**
             * @return {?}
             */
            function () {
                _this._refreshValues();
            })));
            // initialize value
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this._setValue(_this.value);
            }));
        };
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this._subs && this._subs.length) {
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
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         */
        /**
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         * @param {?} selectedIndex
         * @return {?}
         */
        TdTabSelectComponent.prototype.selectedIndexChange = /**
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         * @param {?} selectedIndex
         * @return {?}
         */
        function (selectedIndex) {
            this._selectedIndex = selectedIndex;
            /** @type {?} */
            var value = this._values[selectedIndex];
            this.value = value;
            this.valueChange.emit(value);
            this.onChange(value);
        };
        /**
         * Refresh the values array whenever the number of tabs gets updated
         */
        /**
         * Refresh the values array whenever the number of tabs gets updated
         * @private
         * @return {?}
         */
        TdTabSelectComponent.prototype._refreshValues = /**
         * Refresh the values array whenever the number of tabs gets updated
         * @private
         * @return {?}
         */
        function () {
            this._values = this.tabOptions.map((/**
             * @param {?} tabOption
             * @return {?}
             */
            function (tabOption) {
                return tabOption.value;
            }));
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         */
        /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         * @private
         * @param {?} value
         * @return {?}
         */
        TdTabSelectComponent.prototype._setValue = /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var index = this._values.indexOf(value);
            if (index > -1) {
                this._selectedIndex = index;
            }
            else {
                this.value = this._values.length ? this._values[0] : undefined;
                this._selectedIndex = 0;
            }
            this._changeDetectorRef.markForCheck();
        };
        TdTabSelectComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdTabSelectComponent; })),
                                multi: true,
                            },
                        ],
                        selector: 'td-tab-select',
                        template: "<mat-tab-group\n  [attr.mat-stretch-tabs]=\"stretchTabs ? true : undefined\"\n  [backgroundColor]=\"backgroundColor\"\n  [color]=\"color\"\n  [disableRipple]=\"disableRipple\"\n  [selectedIndex]=\"selectedIndex\"\n  (selectedIndexChange)=\"selectedIndexChange($event)\"\n>\n  <ng-template let-tabOption ngFor [ngForOf]=\"tabOptions\">\n    <mat-tab [disabled]=\"tabOption.disabled || disabled\">\n      <ng-template matTabLabel>\n        <ng-template *ngIf=\"tabOption.content\" [cdkPortalOutlet]=\"tabOption.content\"></ng-template>\n      </ng-template>\n    </mat-tab>\n  </ng-template>\n</mat-tab-group>\n",
                        /* tslint:disable-next-line */
                        inputs: ['value', 'disabled', 'disableRipple'],
                        styles: [":host::ng-deep>.mat-tab-group>.mat-tab-body-wrapper{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdTabSelectComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        TdTabSelectComponent.propDecorators = {
            _tabOptions: [{ type: core.ContentChildren, args: [TdTabOptionComponent, { descendants: true },] }],
            stretchTabs: [{ type: core.Input, args: ['stretchTabs',] }],
            color: [{ type: core.Input }],
            backgroundColor: [{ type: core.Input }],
            valueChange: [{ type: core.Output }]
        };
        return TdTabSelectComponent;
    }(_TdTabSelectMixinBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdTabSelectComponent.prototype._subs;
        /**
         * @type {?}
         * @private
         */
        TdTabSelectComponent.prototype._values;
        /**
         * @type {?}
         * @private
         */
        TdTabSelectComponent.prototype._selectedIndex;
        /**
         * @type {?}
         * @private
         */
        TdTabSelectComponent.prototype._stretchTabs;
        /**
         * Gets all tab option children
         * @type {?}
         */
        TdTabSelectComponent.prototype._tabOptions;
        /**
         * Color of the tab group.
         * @type {?}
         */
        TdTabSelectComponent.prototype.color;
        /**
         * Background color of the tab group.
         * @type {?}
         */
        TdTabSelectComponent.prototype.backgroundColor;
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * @type {?}
         */
        TdTabSelectComponent.prototype.valueChange;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentTabSelectModule = /** @class */ (function () {
        function CovalentTabSelectModule() {
        }
        CovalentTabSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TdTabSelectComponent, TdTabOptionComponent],
                        // directives, components, and pipes owned by this NgModule
                        imports: [
                            /** Angular Modules */
                            common.CommonModule,
                            forms.FormsModule,
                            /** Material Modules */
                            portal.PortalModule,
                            tabs.MatTabsModule,
                        ],
                        // modules needed to run this module
                        exports: [TdTabSelectComponent, TdTabOptionComponent],
                    },] }
        ];
        return CovalentTabSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ITdNavNode() { }
    if (false) {
        /** @type {?} */
        ITdNavNode.prototype.label;
        /** @type {?|undefined} */
        ITdNavNode.prototype.show;
    }
    /**
     * @record
     */
    function ITdNavHeader() { }
    if (false) {
        /** @type {?} */
        ITdNavHeader.prototype.children;
    }
    /**
     * @record
     */
    function ITdNavExpansion() { }
    if (false) {
        /** @type {?|undefined} */
        ITdNavExpansion.prototype.collapsable;
    }
    /**
     * @record
     */
    function ITdLink() { }
    if (false) {
        /** @type {?} */
        ITdLink.prototype.link;
        /** @type {?} */
        ITdLink.prototype.icon;
    }
    /** @type {?} */
    var nextUniqueId = 0;
    var TdNavLinksComponent = /** @class */ (function () {
        function TdNavLinksComponent() {
            this._uniqueId = "td-nav-links-" + ++nextUniqueId;
            this._collapsedSet = new Set();
            this.id = this._uniqueId;
            /**
             * Event trigger after a navigation click
             */
            this.afterNavigation = new core.EventEmitter();
        }
        /**
         * @param {?} link
         * @return {?}
         */
        TdNavLinksComponent.prototype._linkClicked = /**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            this.afterNavigation.emit(link);
        };
        /**
         * @param {?} link
         * @return {?}
         */
        TdNavLinksComponent.prototype._href = /**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            return link.link && ((/** @type {?} */ (link.link))).href;
        };
        /**
         * @param {?} link
         * @return {?}
         */
        TdNavLinksComponent.prototype._routerLink = /**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            return link.link && ((/** @type {?} */ (link.link))).routerLink;
        };
        /**
         * @param link
         * Toggles expand/collapse state of expansion link.
         * Only applied when `collapsable` is true
         */
        /**
         * @param {?} link
         * Toggles expand/collapse state of expansion link.
         * Only applied when `collapsable` is true
         * @return {?}
         */
        TdNavLinksComponent.prototype._toggle = /**
         * @param {?} link
         * Toggles expand/collapse state of expansion link.
         * Only applied when `collapsable` is true
         * @return {?}
         */
        function (link) {
            if (this._isCollapsed(link)) {
                this._collapsedSet.delete(link);
            }
            else {
                this._collapsedSet.add(link);
            }
        };
        /**
         * @param link
         * Returns true if the state of provided expansion link is collapsed.
         */
        /**
         * @param {?} link
         * Returns true if the state of provided expansion link is collapsed.
         * @return {?}
         */
        TdNavLinksComponent.prototype._isCollapsed = /**
         * @param {?} link
         * Returns true if the state of provided expansion link is collapsed.
         * @return {?}
         */
        function (link) {
            return this._collapsedSet.has(link);
        };
        TdNavLinksComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-nav-links',
                        template: "<mat-nav-list dense *ngIf=\"links && links.length > 0\">\n  <ng-template ngFor [ngForOf]=\"links\" let-link let-linkIndex=\"index\">\n    <ng-container *ngIf=\"link.show === undefined || link.show\">\n      <ng-container *ngIf=\"link.children?.length && !link.link\">\n        <h3\n          [class.td-nav-link-cursor]=\"link.collapsable\"\n          matSubheader\n          matRipple\n          [matRippleDisabled]=\"!link.collapsable\"\n          (click)=\"link.collapsable && _toggle(link)\"\n        >\n          <mat-icon *ngIf=\"link.icon\" [fontSet]=\"link.icon?.fontSet\">{{ link.icon?.name }}</mat-icon>\n          <span [style.width.%]=\"100\">{{ link.label }}</span>\n          <mat-icon [@tdRotate]=\"!_isCollapsed(link)\" *ngIf=\"link.collapsable\">\n            keyboard_arrow_down\n          </mat-icon>\n        </h3>\n        <td-nav-links\n          [id]=\"id + '-' + linkIndex\"\n          [@tdCollapse]=\"!!_isCollapsed(link)\"\n          [links]=\"link.children\"\n        ></td-nav-links>\n      </ng-container>\n      <ng-container *ngIf=\"link.link\">\n        <a\n          mat-list-item\n          *ngIf=\"_href(link)\"\n          [href]=\"_href(link)\"\n          [target]=\"link.link.openInNewTab ? '_blank' : undefined\"\n          id=\"{{ id }}-{{ linkIndex }}\"\n          class=\"td-nav-link\"\n          (click)=\"_linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.icon?.fontSet\">{{ link.icon?.name }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n          <mat-icon *ngIf=\"link.link.openInNewTab\">\n            launch\n          </mat-icon>\n        </a>\n        <a\n          mat-list-item\n          *ngIf=\"_routerLink(link)\"\n          [routerLink]=\"_routerLink(link)\"\n          [target]=\"link.link.openInNewTab ? '_blank' : undefined\"\n          id=\"{{ id }}-{{ linkIndex }}\"\n          class=\"td-nav-link\"\n          (click)=\"_linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.icon?.fontSet\">{{ link.icon?.name }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n          <mat-icon *ngIf=\"link.link.openInNewTab\">\n            launch\n          </mat-icon>\n        </a>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</mat-nav-list>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        animations: [common$1.tdCollapseAnimation, common$1.tdRotateAnimation],
                        styles: [":host{display:block}:host .mat-nav-list.mat-list-base{padding-top:2px}:host .mat-nav-list.mat-list-base .td-nav-link-cursor{cursor:pointer}:host .mat-nav-list.mat-list-base .mat-list-item{height:40px}:host .mat-icon{margin-right:0}"]
                    }] }
        ];
        TdNavLinksComponent.propDecorators = {
            id: [{ type: core.Input }],
            links: [{ type: core.Input }],
            afterNavigation: [{ type: core.Output }]
        };
        return TdNavLinksComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdNavLinksComponent.prototype._uniqueId;
        /**
         * @type {?}
         * @private
         */
        TdNavLinksComponent.prototype._collapsedSet;
        /** @type {?} */
        TdNavLinksComponent.prototype.id;
        /**
         * Links to be rendered by component.
         * @type {?}
         */
        TdNavLinksComponent.prototype.links;
        /**
         * Event trigger after a navigation click
         * @type {?}
         */
        TdNavLinksComponent.prototype.afterNavigation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentNavLinksModule = /** @class */ (function () {
        function CovalentNavLinksModule() {
        }
        CovalentNavLinksModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TdNavLinksComponent],
                        // directives, components, and pipes owned by this NgModule
                        exports: [TdNavLinksComponent],
                        imports: [
                            common.CommonModule,
                            common$1.CovalentCommonModule,
                            expansionPanel.CovalentExpansionPanelModule,
                            core$1.MatRippleModule,
                            menu.MatMenuModule,
                            list.MatListModule,
                            icon.MatIconModule,
                            divider.MatDividerModule,
                            router.RouterModule,
                        ],
                    },] }
        ];
        return CovalentNavLinksModule;
    }());

    exports.CovalentBreadcrumbsModule = CovalentBreadcrumbsModule;
    exports.CovalentChipsModule = CovalentChipsModule;
    exports.CovalentCommonModule = CovalentCommonModule;
    exports.CovalentDataTableModule = CovalentDataTableModule;
    exports.CovalentDialogsModule = CovalentDialogsModule;
    exports.CovalentExpansionPanelModule = CovalentExpansionPanelModule;
    exports.CovalentFileModule = CovalentFileModule;
    exports.CovalentJsonFormatterModule = CovalentJsonFormatterModule;
    exports.CovalentLayoutModule = CovalentLayoutModule;
    exports.CovalentLoadingModule = CovalentLoadingModule;
    exports.CovalentMediaModule = CovalentMediaModule;
    exports.CovalentMenuModule = CovalentMenuModule;
    exports.CovalentMessageModule = CovalentMessageModule;
    exports.CovalentNavLinksModule = CovalentNavLinksModule;
    exports.CovalentNotificationsModule = CovalentNotificationsModule;
    exports.CovalentPagingModule = CovalentPagingModule;
    exports.CovalentSearchModule = CovalentSearchModule;
    exports.CovalentStepsModule = CovalentStepsModule;
    exports.CovalentTabSelectModule = CovalentTabSelectModule;
    exports.CovalentValidators = CovalentValidators;
    exports.CovalentVirtualScrollModule = CovalentVirtualScrollModule;
    exports.DEFAULT_NOTIFICATION_LIMIT = DEFAULT_NOTIFICATION_LIMIT;
    exports.LOADING_FACTORY_PROVIDER = LOADING_FACTORY_PROVIDER;
    exports.LOADING_FACTORY_PROVIDER_FACTORY = LOADING_FACTORY_PROVIDER_FACTORY;
    exports.LOADING_PROVIDER = LOADING_PROVIDER;
    exports.LOADING_PROVIDER_FACTORY = LOADING_PROVIDER_FACTORY;
    exports.LayoutToggle = LayoutToggle;
    exports.LayoutToggleBase = LayoutToggleBase;
    exports.LoadingMode = LoadingMode;
    exports.LoadingStrategy = LoadingStrategy;
    exports.LoadingStyle = LoadingStyle;
    exports.LoadingType = LoadingType;
    exports.ResizableDraggableDialog = ResizableDraggableDialog;
    exports.StepMode = StepMode;
    exports.StepState = StepState;
    exports.TD_CIRCLE_DIAMETER = TD_CIRCLE_DIAMETER;
    exports.TdAlertDialogComponent = TdAlertDialogComponent;
    exports.TdAutoTrimDirective = TdAutoTrimDirective;
    exports.TdAutocompleteOptionDirective = TdAutocompleteOptionDirective;
    exports.TdBreadcrumbComponent = TdBreadcrumbComponent;
    exports.TdBreadcrumbsComponent = TdBreadcrumbsComponent;
    exports.TdBytesPipe = TdBytesPipe;
    exports.TdChipDirective = TdChipDirective;
    exports.TdChipsBase = TdChipsBase;
    exports.TdChipsComponent = TdChipsComponent;
    exports.TdConfirmDialogComponent = TdConfirmDialogComponent;
    exports.TdDataTableBase = TdDataTableBase;
    exports.TdDataTableCellComponent = TdDataTableCellComponent;
    exports.TdDataTableColumnComponent = TdDataTableColumnComponent;
    exports.TdDataTableColumnRowComponent = TdDataTableColumnRowComponent;
    exports.TdDataTableComponent = TdDataTableComponent;
    exports.TdDataTableRowComponent = TdDataTableRowComponent;
    exports.TdDataTableService = TdDataTableService;
    exports.TdDataTableSortingOrder = TdDataTableSortingOrder;
    exports.TdDataTableTableComponent = TdDataTableTableComponent;
    exports.TdDataTableTemplateDirective = TdDataTableTemplateDirective;
    exports.TdDecimalBytesPipe = TdDecimalBytesPipe;
    exports.TdDialogActionsDirective = TdDialogActionsDirective;
    exports.TdDialogComponent = TdDialogComponent;
    exports.TdDialogContentDirective = TdDialogContentDirective;
    exports.TdDialogService = TdDialogService;
    exports.TdDialogTitleDirective = TdDialogTitleDirective;
    exports.TdDigitsPipe = TdDigitsPipe;
    exports.TdExpansionPanelBase = TdExpansionPanelBase;
    exports.TdExpansionPanelComponent = TdExpansionPanelComponent;
    exports.TdExpansionPanelGroupComponent = TdExpansionPanelGroupComponent;
    exports.TdExpansionPanelHeaderDirective = TdExpansionPanelHeaderDirective;
    exports.TdExpansionPanelLabelDirective = TdExpansionPanelLabelDirective;
    exports.TdExpansionPanelSublabelDirective = TdExpansionPanelSublabelDirective;
    exports.TdExpansionPanelSummaryComponent = TdExpansionPanelSummaryComponent;
    exports.TdFileDropBase = TdFileDropBase;
    exports.TdFileDropDirective = TdFileDropDirective;
    exports.TdFileInputBase = TdFileInputBase;
    exports.TdFileInputComponent = TdFileInputComponent;
    exports.TdFileInputLabelDirective = TdFileInputLabelDirective;
    exports.TdFileSelectDirective = TdFileSelectDirective;
    exports.TdFileService = TdFileService;
    exports.TdFileUploadBase = TdFileUploadBase;
    exports.TdFileUploadComponent = TdFileUploadComponent;
    exports.TdFullscreenDirective = TdFullscreenDirective;
    exports.TdJsonFormatterComponent = TdJsonFormatterComponent;
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
    exports.TdLoadingComponent = TdLoadingComponent;
    exports.TdLoadingConfig = TdLoadingConfig;
    exports.TdLoadingContext = TdLoadingContext;
    exports.TdLoadingDirective = TdLoadingDirective;
    exports.TdLoadingDirectiveConfig = TdLoadingDirectiveConfig;
    exports.TdLoadingFactory = TdLoadingFactory;
    exports.TdLoadingService = TdLoadingService;
    exports.TdMediaService = TdMediaService;
    exports.TdMediaToggleDirective = TdMediaToggleDirective;
    exports.TdMenuComponent = TdMenuComponent;
    exports.TdMessageComponent = TdMessageComponent;
    exports.TdMessageContainerDirective = TdMessageContainerDirective;
    exports.TdNavLinksComponent = TdNavLinksComponent;
    exports.TdNavStepLinkComponent = TdNavStepLinkComponent;
    exports.TdNavStepsHorizontalComponent = TdNavStepsHorizontalComponent;
    exports.TdNavStepsVerticalComponent = TdNavStepsVerticalComponent;
    exports.TdNavigationDrawerComponent = TdNavigationDrawerComponent;
    exports.TdNavigationDrawerMenuDirective = TdNavigationDrawerMenuDirective;
    exports.TdNavigationDrawerToolbarDirective = TdNavigationDrawerToolbarDirective;
    exports.TdNotificationCountComponent = TdNotificationCountComponent;
    exports.TdNotificationCountPositionX = TdNotificationCountPositionX;
    exports.TdNotificationCountPositionY = TdNotificationCountPositionY;
    exports.TdPagingBarComponent = TdPagingBarComponent;
    exports.TdPromptDialogComponent = TdPromptDialogComponent;
    exports.TdSearchBoxBase = TdSearchBoxBase;
    exports.TdSearchBoxComponent = TdSearchBoxComponent;
    exports.TdSearchInputBase = TdSearchInputBase;
    exports.TdSearchInputComponent = TdSearchInputComponent;
    exports.TdStepActionsDirective = TdStepActionsDirective;
    exports.TdStepBase = TdStepBase;
    exports.TdStepBodyComponent = TdStepBodyComponent;
    exports.TdStepComponent = TdStepComponent;
    exports.TdStepHeaderBase = TdStepHeaderBase;
    exports.TdStepHeaderComponent = TdStepHeaderComponent;
    exports.TdStepLabelDirective = TdStepLabelDirective;
    exports.TdStepSummaryDirective = TdStepSummaryDirective;
    exports.TdStepsComponent = TdStepsComponent;
    exports.TdTabOptionBase = TdTabOptionBase;
    exports.TdTabOptionComponent = TdTabOptionComponent;
    exports.TdTabSelectBase = TdTabSelectBase;
    exports.TdTabSelectComponent = TdTabSelectComponent;
    exports.TdTimeAgoPipe = TdTimeAgoPipe;
    exports.TdTimeDifferencePipe = TdTimeDifferencePipe;
    exports.TdTimeUntilPipe = TdTimeUntilPipe;
    exports.TdTruncatePipe = TdTruncatePipe;
    exports.TdVirtualScrollContainerComponent = TdVirtualScrollContainerComponent;
    exports.TdVirtualScrollRowDirective = TdVirtualScrollRowDirective;
    exports._TdChipsMixinBase = _TdChipsMixinBase;
    exports._TdDataTableMixinBase = _TdDataTableMixinBase;
    exports._TdExpansionPanelMixinBase = _TdExpansionPanelMixinBase;
    exports._TdFileDropMixinBase = _TdFileDropMixinBase;
    exports._TdFileInputMixinBase = _TdFileInputMixinBase;
    exports._TdFileUploadMixinBase = _TdFileUploadMixinBase;
    exports._TdLayoutToggleMixinBase = _TdLayoutToggleMixinBase;
    exports._TdSearchBoxMixinBase = _TdSearchBoxMixinBase;
    exports._TdSearchInputMixinBase = _TdSearchInputMixinBase;
    exports._TdStepHeaderMixinBase = _TdStepHeaderMixinBase;
    exports._TdStepMixinBase = _TdStepMixinBase;
    exports._TdTabOptionMixinBase = _TdTabOptionMixinBase;
    exports._TdTabSelectMixinBase = _TdTabSelectMixinBase;
    exports.convertCSVToJSON = convertCSVToJSON;
    exports.convertObjectsToCSV = convertObjectsToCSV;
    exports.copyToClipboard = copyToClipboard;
    exports.downloadCSV = downloadCSV;
    exports.downloadFile = downloadFile;
    exports.downloadJSON = downloadJSON;
    exports.downloadObjectsToCSV = downloadObjectsToCSV;
    exports.downloadObjectsToJSON = downloadObjectsToJSON;
    exports.formatJSON = formatJSON;
    exports.mixinControlValueAccessor = mixinControlValueAccessor;
    exports.mixinDisableRipple = mixinDisableRipple;
    exports.mixinDisabled = mixinDisabled;
    exports.readFile = readFile;
    exports.tdBounceAnimation = tdBounceAnimation;
    exports.tdCollapseAnimation = tdCollapseAnimation;
    exports.tdFadeInOutAnimation = tdFadeInOutAnimation;
    exports.tdFlashAnimation = tdFlashAnimation;
    exports.tdHeadshakeAnimation = tdHeadshakeAnimation;
    exports.tdJelloAnimation = tdJelloAnimation;
    exports.tdPulseAnimation = tdPulseAnimation;
    exports.tdRotateAnimation = tdRotateAnimation;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core.umd.js.map
