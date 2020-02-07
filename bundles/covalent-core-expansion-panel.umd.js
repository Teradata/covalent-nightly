(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/portal'), require('@angular/material/core'), require('@angular/material/icon'), require('@angular/cdk/coercion'), require('@covalent/core/common'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/expansion-panel', ['exports', '@angular/core', '@angular/common', '@angular/cdk/portal', '@angular/material/core', '@angular/material/icon', '@angular/cdk/coercion', '@covalent/core/common', 'rxjs/operators', 'rxjs'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['expansion-panel'] = {}), global.ng.core, global.ng.common, global.ng.cdk.portal, global.ng.material.core, global.ng.material.icon, global.ng.cdk.coercion, global.covalent.core.common, global.rxjs.operators, global.rxjs));
}(this, (function (exports, core, common, portal, core$1, icon, coercion, common$1, operators, rxjs) { 'use strict';

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
            expansionPanelHeader: [{ type: core.ContentChild, args: [TdExpansionPanelHeaderDirective,] }],
            expansionPanelLabel: [{ type: core.ContentChild, args: [TdExpansionPanelLabelDirective,] }],
            expansionPanelSublabel: [{ type: core.ContentChild, args: [TdExpansionPanelSublabelDirective,] }],
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

    exports.CovalentExpansionPanelModule = CovalentExpansionPanelModule;
    exports.TdExpansionPanelBase = TdExpansionPanelBase;
    exports.TdExpansionPanelComponent = TdExpansionPanelComponent;
    exports.TdExpansionPanelGroupComponent = TdExpansionPanelGroupComponent;
    exports.TdExpansionPanelHeaderDirective = TdExpansionPanelHeaderDirective;
    exports.TdExpansionPanelLabelDirective = TdExpansionPanelLabelDirective;
    exports.TdExpansionPanelSublabelDirective = TdExpansionPanelSublabelDirective;
    exports.TdExpansionPanelSummaryComponent = TdExpansionPanelSummaryComponent;
    exports._TdExpansionPanelMixinBase = _TdExpansionPanelMixinBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-expansion-panel.umd.js.map
