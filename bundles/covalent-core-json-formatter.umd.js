(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/tooltip'), require('@angular/material/icon'), require('@angular/cdk/bidi'), require('@covalent/core/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/json-formatter', ['exports', '@angular/core', '@angular/common', '@angular/material/tooltip', '@angular/material/icon', '@angular/cdk/bidi', '@covalent/core/common'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['json-formatter'] = {}), global.ng.core, global.ng.common, global.ng.material.tooltip, global.ng.material.icon, global.ng.cdk.bidi, global.covalent.core.common));
}(this, (function (exports, core, common, tooltip, icon, bidi, common$1) { 'use strict';

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

    exports.CovalentJsonFormatterModule = CovalentJsonFormatterModule;
    exports.TdJsonFormatterComponent = TdJsonFormatterComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-json-formatter.umd.js.map
