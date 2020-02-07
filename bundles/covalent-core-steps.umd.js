(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/material/icon'), require('@angular/material/core'), require('@covalent/core/common'), require('@angular/cdk/coercion'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/bidi'), require('@angular/cdk/keycodes')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/steps', ['exports', '@angular/core', '@angular/common', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/material/icon', '@angular/material/core', '@covalent/core/common', '@angular/cdk/coercion', 'rxjs', 'rxjs/operators', '@angular/cdk/bidi', '@angular/cdk/keycodes'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.steps = {}), global.ng.core, global.ng.common, global.ng.cdk.portal, global.ng.cdk.scrolling, global.ng.material.icon, global.ng.material.core, global.covalent.core.common, global.ng.cdk.coercion, global.rxjs, global.rxjs.operators, global.ng.cdk.bidi, global.ng.cdk.keycodes));
}(this, (function (exports, core, common, portal, scrolling, icon, core$1, common$1, coercion, rxjs, operators, bidi, keycodes) { 'use strict';

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
            stepLabel: [{ type: core.ContentChild, args: [TdStepLabelDirective,] }],
            stepActions: [{ type: core.ContentChild, args: [TdStepActionsDirective,] }],
            stepSummary: [{ type: core.ContentChild, args: [TdStepSummaryDirective,] }],
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

    exports.CovalentStepsModule = CovalentStepsModule;
    exports.StepMode = StepMode;
    exports.StepState = StepState;
    exports.TdNavStepLinkComponent = TdNavStepLinkComponent;
    exports.TdNavStepsHorizontalComponent = TdNavStepsHorizontalComponent;
    exports.TdNavStepsVerticalComponent = TdNavStepsVerticalComponent;
    exports.TdStepActionsDirective = TdStepActionsDirective;
    exports.TdStepBase = TdStepBase;
    exports.TdStepBodyComponent = TdStepBodyComponent;
    exports.TdStepComponent = TdStepComponent;
    exports.TdStepHeaderBase = TdStepHeaderBase;
    exports.TdStepHeaderComponent = TdStepHeaderComponent;
    exports.TdStepLabelDirective = TdStepLabelDirective;
    exports.TdStepSummaryDirective = TdStepSummaryDirective;
    exports.TdStepsComponent = TdStepsComponent;
    exports._TdStepHeaderMixinBase = _TdStepHeaderMixinBase;
    exports._TdStepMixinBase = _TdStepMixinBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-steps.umd.js.map
