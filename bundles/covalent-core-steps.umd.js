(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/portal'), require('@angular/cdk/coercion'), require('@covalent/core/common'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/bidi'), require('@angular/cdk/keycodes'), require('@angular/cdk/scrolling'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/steps', ['exports', '@angular/core', '@angular/cdk/portal', '@angular/cdk/coercion', '@covalent/core/common', 'rxjs', 'rxjs/operators', '@angular/cdk/bidi', '@angular/cdk/keycodes', '@angular/cdk/scrolling', '@angular/common', '@angular/material/icon', '@angular/material/core'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.steps = {}),global.ng.core,global.ng.cdk.portal,global.ng.cdk.coercion,global.covalent.core.common,global.rxjs,global.rxjs.operators,global.ng.cdk.bidi,global.ng.cdk.keycodes,global.ng.cdk.scrolling,global.ng.common,global.ng.material.icon,global.ng.material.core));
}(this, (function (exports,core,portal,coercion,common,rxjs,operators,bidi,keycodes,scrolling,common$1,icon,core$1) { 'use strict';

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        TdStepLabelDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: core.ViewContainerRef }
            ];
        };
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
        TdStepActionsDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: core.ViewContainerRef }
            ];
        };
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
        TdStepSummaryDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: core.ViewContainerRef }
            ];
        };
        return TdStepSummaryDirective;
    }(portal.TemplatePortalDirective));
    var TdStepBase = /** @class */ (function () {
        function TdStepBase() {
        }
        return TdStepBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdStepMixinBase = common.mixinDisableRipple(common.mixinDisabled(TdStepBase));
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
            _this.onActivated = new core.EventEmitter();
            /**
             * deactivated?: function
             * Event emitted when [TdStepComponent] is deactivated.
             */
            _this.onDeactivated = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdStepComponent.prototype, "stepContent", {
            get: /**
             * @return {?}
             */ function () {
                return this._contentPortal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepComponent.prototype, "active", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (active) {
                this._setActive(coercion.coerceBooleanProperty(active));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepComponent.prototype, "state", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (state) {
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
         * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * returns true if successfully changed state
         */
        /**
         * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * returns true if successfully changed state
         * @param {?} newActive
         * @return {?}
         */
        TdStepComponent.prototype._setActive = /**
         * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * returns true if successfully changed state
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
         * @return {?}
         */
        TdStepComponent.prototype._onActivated = /**
         * @return {?}
         */
            function () {
                this.onActivated.emit(undefined);
            };
        /**
         * @return {?}
         */
        TdStepComponent.prototype._onDeactivated = /**
         * @return {?}
         */
            function () {
                this.onDeactivated.emit(undefined);
            };
        TdStepComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-step',
                        inputs: ['disabled', 'disableRipple'],
                        template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"
                    }] }
        ];
        /** @nocollapse */
        TdStepComponent.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef }
            ];
        };
        TdStepComponent.propDecorators = {
            _content: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
            stepLabel: [{ type: core.ContentChild, args: [TdStepLabelDirective,] }],
            stepActions: [{ type: core.ContentChild, args: [TdStepActionsDirective,] }],
            stepSummary: [{ type: core.ContentChild, args: [TdStepSummaryDirective,] }],
            label: [{ type: core.Input, args: ['label',] }],
            sublabel: [{ type: core.Input, args: ['sublabel',] }],
            active: [{ type: core.Input, args: ['active',] }],
            state: [{ type: core.Input, args: ['state',] }],
            onActivated: [{ type: core.Output, args: ['activated',] }],
            onDeactivated: [{ type: core.Output, args: ['deactivated',] }]
        };
        return TdStepComponent;
    }(_TdStepMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
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
             * Method to be executed when [onStepChange] event is emitted.
             * Emits an [IStepChangeEvent] implemented object.
             */
            this.onStepChange = new core.EventEmitter();
        }
        Object.defineProperty(TdStepsComponent.prototype, "stepsContent", {
            set: /**
             * @param {?} steps
             * @return {?}
             */ function (steps) {
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
             */ function () {
                return this._steps.toArray();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepsComponent.prototype, "mode", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (mode) {
                switch (mode) {
                    case StepMode.Horizontal:
                        this._mode = StepMode.Horizontal;
                        break;
                    default:
                        this._mode = StepMode.Vertical;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Executed after content is initialized, loops through any [TdStepComponent] children elements,
         * assigns them a number and subscribes as an observer to their [onActivated] event.
         */
        /**
         * Executed after content is initialized, loops through any [TdStepComponent] children elements,
         * assigns them a number and subscribes as an observer to their [onActivated] event.
         * @return {?}
         */
        TdStepsComponent.prototype.ngAfterContentInit = /**
         * Executed after content is initialized, loops through any [TdStepComponent] children elements,
         * assigns them a number and subscribes as an observer to their [onActivated] event.
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
                return this._steps.filter(function (step) {
                    return step.active;
                }).length > 0;
            };
        /**
         * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
         * and emits [onStepChange] event.
         */
        /**
         * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
         * and emits [onStepChange] event.
         * @param {?} step
         * @return {?}
         */
        TdStepsComponent.prototype._onStepSelection = /**
         * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
         * and emits [onStepChange] event.
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
                    this.onStepChange.emit(event_1);
                }
            };
        /**
         * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
         */
        /**
         * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
         * @param {?} activeStep
         * @return {?}
         */
        TdStepsComponent.prototype._deactivateAllBut = /**
         * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
         * @param {?} activeStep
         * @return {?}
         */
            function (activeStep) {
                this._steps.filter(function (step) { return step !== activeStep; })
                    .forEach(function (step) {
                    step.active = false;
                });
            };
        /**
         * @return {?}
         */
        TdStepsComponent.prototype._registerSteps = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subcriptions = [];
                this._steps.toArray().forEach(function (step) {
                    /** @type {?} */
                    var subscription = step.onActivated.asObservable().subscribe(function () {
                        _this._onStepSelection(step);
                    });
                    _this._subcriptions.push(subscription);
                });
            };
        /**
         * @return {?}
         */
        TdStepsComponent.prototype._deregisterSteps = /**
         * @return {?}
         */
            function () {
                if (this._subcriptions) {
                    this._subcriptions.forEach(function (subs) {
                        subs.unsubscribe();
                    });
                    this._subcriptions = undefined;
                }
            };
        TdStepsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-steps',
                        template: "<div *ngIf=\"isHorizontal()\" class=\"td-steps-header\">\n  <ng-template let-step let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"steps\">\n    <td-step-header class=\"td-step-horizontal-header\"\n                    (keydown.enter)=\"step.open()\"\n                    [number]=\"index + 1\"\n                    [active]=\"step.active\"\n                    [disableRipple]=\"step.disableRipple\"\n                    [disabled]=\"step.disabled\" \n                    [state]=\"step.state\"\n                    (click)=\"step.open()\">\n      <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n      <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template>\n      <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel | truncate:30}}</ng-template>\n    </td-step-header>\n    <span *ngIf=\"!last\" class=\"td-horizontal-line\"></span>\n  </ng-template>\n</div>\n<div *ngFor=\"let step of steps; let index = index; let last = last\" class=\"td-step\">\n  <td-step-header class=\"td-step-vertical-header\"\n                  (keydown.enter)=\"step.toggle()\"\n                  [number]=\"index + 1\"\n                  [active]=\"step.active\" \n                  [disabled]=\"step.disabled\"\n                  [disableRipple]=\"step.disableRipple\"\n                  [state]=\"step.state\"\n                  (click)=\"step.toggle()\"\n                  *ngIf=\"isVertical()\">\n    <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n    <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template>\n    <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel}}</ng-template>\n  </td-step-header>\n  <ng-template [ngIf]=\"isVertical() || step.active || (!areStepsActive() && prevStep === step)\">\n    <td-step-body [active]=\"step.active\" [state]=\"step.state\">\n      <div *ngIf=\"isVertical()\" class=\"td-line-wrapper\">\n        <div *ngIf=\"!last\" class=\"td-vertical-line\"></div>\n      </div>\n      <ng-template td-step-body-content [cdkPortalOutlet]=\"step.stepContent\"></ng-template>\n      <ng-template td-step-body-actions [cdkPortalOutlet]=\"step.stepActions\"></ng-template>\n      <ng-template td-step-body-summary [cdkPortalOutlet]=\"step.stepSummary\"></ng-template>\n    </td-step-body>\n  </ng-template>\n</div>\n",
                        /* tslint:disable-next-line */
                        host: {
                            class: 'td-steps',
                        },
                        styles: [".td-line-wrapper,.td-step{position:relative}.td-steps-header{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.td-line-wrapper{width:24px;min-height:1px}.td-horizontal-line{border-bottom-width:1px;border-bottom-style:solid;height:1px;position:relative;top:36px;min-width:15px;-ms-flex:1;flex:1;box-sizing:border-box}::ng-deep :not([dir=rtl]) .td-horizontal-line{left:-6px;right:-3px}::ng-deep [dir=rtl] .td-horizontal-line{left:-3px;right:-6px}.td-vertical-line{position:absolute;bottom:-16px;top:-16px;border-left-width:1px;border-left-style:solid}::ng-deep :not([dir=rtl]) .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line{left:auto;right:20px}"]
                    }] }
        ];
        TdStepsComponent.propDecorators = {
            stepsContent: [{ type: core.ContentChildren, args: [TdStepComponent,] }],
            mode: [{ type: core.Input, args: ['mode',] }],
            onStepChange: [{ type: core.Output, args: ['stepChange',] }]
        };
        return TdStepsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdStepHeaderBase = /** @class */ (function () {
        function TdStepHeaderBase() {
        }
        return TdStepHeaderBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdStepHeaderMixinBase = common.mixinDisableRipple(common.mixinDisabled(TdStepHeaderBase));
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
                        template: "<div class=\"td-step-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled ? -1 : 0\">\n  <div class=\"td-circle\"\n      [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n      [class.mat-active]=\"active && !disabled\"\n      *ngIf=\"!isRequired() && !isComplete()\">\n    <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span>\n  </div>\n  <div class=\"td-complete\" *ngIf=\"isComplete()\">\n    <mat-icon class=\"mat-complete\">check_circle</mat-icon>\n  </div>\n  <div class=\"td-triangle\"\n      [class.bg-muted]=\"disabled\"\n      *ngIf=\"isRequired()\">\n    <mat-icon class=\"mat-warn\">warning</mat-icon>\n  </div>\n  <div class=\"td-step-label-wrapper\"\n        [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n        [class.mat-warn]=\"isRequired() && !disabled\">\n    <div class=\"td-step-label\">\n      <ng-content select=\"[td-step-header-label]\"></ng-content>\n    </div>\n    <div class=\"td-step-sublabel\">\n      <ng-content select=\"[td-step-header-sublabel]\"></ng-content>\n    </div>\n  </div>\n  <span class=\"td-step-header-separator\"></span>\n  <mat-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</mat-icon>\n</div>",
                        styles: [".td-step-header{position:relative;outline:0;min-width:120px;height:72px;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.td-step-header:hover:not(.mat-disabled){cursor:pointer}.td-step-header mat-icon.td-edit-icon{margin:0 8px}.td-step-header mat-icon.mat-warn{font-size:24px;height:24px;width:24px}.td-step-header mat-icon.mat-complete{position:relative;left:-2px;top:2px;font-size:28px;height:24px;width:24px}.td-step-header .td-circle{height:24px;width:24px;line-height:24px;border-radius:99%;text-align:center;-ms-flex:none;flex:none}.td-step-header .td-circle mat-icon{margin-top:2px;font-weight:700}.td-step-header .td-triangle>mat-icon{font-size:25px}::ng-deep :not([dir=rtl]) .td-step-header .td-circle,::ng-deep :not([dir=rtl]) .td-step-header .td-complete,::ng-deep :not([dir=rtl]) .td-step-header .td-triangle{margin-left:8px;margin-right:0}::ng-deep [dir=rtl] .td-step-header .td-circle,::ng-deep [dir=rtl] .td-step-header .td-complete,::ng-deep [dir=rtl] .td-step-header .td-triangle{margin-left:0;margin-right:8px}.td-step-header .td-circle,.td-step-header .td-complete{font-size:14px}.td-step-header .td-step-label-wrapper{padding-left:8px;padding-right:8px}.td-step-header .td-step-header-separator{-ms-flex:1;flex:1;box-sizing:border-box}"]
                    }] }
        ];
        TdStepHeaderComponent.propDecorators = {
            number: [{ type: core.Input, args: ['number',] }],
            active: [{ type: core.Input, args: ['active',] }],
            state: [{ type: core.Input, args: ['state',] }]
        };
        return TdStepHeaderComponent;
    }(_TdStepHeaderMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
             */ function () {
                return this.contentRef &&
                    (this.contentRef.nativeElement.children.length > 0 || !!this.contentRef.nativeElement.textContent.trim());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepBodyComponent.prototype, "hasActions", {
            get: /**
             * @return {?}
             */ function () {
                return this.actionsRef &&
                    (this.actionsRef.nativeElement.children.length > 0 || !!this.actionsRef.nativeElement.textContent.trim());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepBodyComponent.prototype, "hasSummary", {
            get: /**
             * @return {?}
             */ function () {
                return this.summaryRef &&
                    (this.summaryRef.nativeElement.children.length > 0 || !!this.summaryRef.nativeElement.textContent.trim());
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
                        template: "<ng-content></ng-content>\n<div class=\"td-step-body\">\n  <div class=\"td-step-content-wrapper\"\n       [@tdCollapse]=\"!active\">\n    <div #contentRef cdkScrollable [class.td-step-content]=\"hasContent\">\n      <ng-content select=\"[td-step-body-content]\"></ng-content>\n    </div>\n    <div #actionsRef\n         [class.td-step-actions]=\"hasActions\">\n      <ng-content select=\"[td-step-body-actions]\"></ng-content>\n    </div>\n  </div>\n  <div #summaryRef\n       [@tdCollapse]=\"active || !isComplete()\"\n       [class.td-step-summary]=\"hasSummary\">\n    <ng-content select=\"[td-step-body-summary]\"></ng-content>\n  </div>\n</div>",
                        animations: [
                            common.tdCollapseAnimation,
                        ],
                        styles: [":host{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}:host .td-step-body{overflow-x:hidden;-ms-flex:1;flex:1;box-sizing:border-box}:host .td-step-body .td-step-content-wrapper.ng-animating,:host .td-step-body .td-step-summary.ng-animating{overflow:hidden}:host .td-step-body .td-step-content{overflow-x:auto}:host .td-step-body .td-step-actions{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}"]
                    }] }
        ];
        TdStepBodyComponent.propDecorators = {
            contentRef: [{ type: core.ViewChild, args: ['contentRef', { read: core.ElementRef },] }],
            actionsRef: [{ type: core.ViewChild, args: ['actionsRef', { read: core.ElementRef },] }],
            summaryRef: [{ type: core.ViewChild, args: ['summaryRef', { read: core.ElementRef },] }],
            active: [{ type: core.Input, args: ['active',] }],
            state: [{ type: core.Input, args: ['state',] }]
        };
        return TdStepBodyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
             */ function () {
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
             */ function (state) {
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
             */ function () {
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
             */ function (active) {
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
                        template: "<td-step-header class=\"td-step-header-wrapper\"\n                [number]=\"number\"\n                [active]=\"active\"\n                [disableRipple]=\"disableRipple || disabled\"\n                [disabled]=\"disabled\" \n                [state]=\"state\">\n  <ng-template td-step-header-label [ngIf]=\"true\">{{label}}</ng-template>\n  <ng-template td-step-header-sublabel [ngIf]=\"true\">{{sublabel | truncate:30}}</ng-template>\n  <ng-content></ng-content>\n</td-step-header>",
                        inputs: ['disabled', 'disableRipple'],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        host: {
                            '[attr.tabindex]': 'disabled ? -1 : 0',
                            '[attr.disabled]': 'disabled || null',
                            '[class.mat-disabled]': 'disabled || null',
                            '(click)': '_handleClick($event)',
                        },
                        styles: [":host{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}:host.mat-disabled{pointer-events:none}:host .td-step-header-wrapper{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavStepLinkComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.ElementRef }
            ];
        };
        TdNavStepLinkComponent.propDecorators = {
            state: [{ type: core.Input, args: ['state',] }],
            label: [{ type: core.Input, args: ['label',] }],
            sublabel: [{ type: core.Input, args: ['sublabel',] }],
            active: [{ type: core.Input, args: ['active',] }]
        };
        return TdNavStepLinkComponent;
    }(_TdStepMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                var element = (( /** @type {?} */(this._elementRef.nativeElement)));
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
                return element.getBoundingClientRect().width - borderLeft - borderRight - marginLeft - marginRight - paddingLeft - paddingRight;
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
                rxjs.merge(this._widthSubject.asObservable().pipe(operators.distinctUntilChanged()), this._viewportRuler.change(150), this._dir ? this._dir.change : rxjs.of(undefined), this._steps.changes).pipe(operators.takeUntil(this._destroyed)).subscribe(function () {
                    _this._configureSteps();
                    _this.updatePagination();
                    _this._changeDetectorRef.markForCheck();
                });
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
             */ function () { return this._scrollDistance; },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
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
                this.scrollDistance += (scrollDir === 'before' ? -1 : 1) * this._stepListContainer.nativeElement.offsetWidth / 2;
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
                return (this._stepList.nativeElement.scrollWidth - this._stepListContainer.nativeElement.offsetWidth) || 0;
            };
        /**
         * Set the step line separators and display numbers
         */
        /**
         * Set the step line separators and display numbers
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._configureSteps = /**
         * Set the step line separators and display numbers
         * @return {?}
         */
            function () {
                var _this = this;
                this._separators.forEach(function (separator) {
                    _this._renderer.removeChild(_this._stepList.nativeElement, separator);
                });
                /** @type {?} */
                var stepsArray = this._steps.toArray();
                // set the index number of the step so can display that number in circle
                stepsArray.forEach(function (step, index) {
                    if (index > 0 && index < stepsArray.length) {
                        /** @type {?} */
                        var separator = _this._renderer.createElement('div');
                        _this._renderer.addClass(separator, 'td-horizontal-line');
                        _this._separators.push(separator);
                        _this._renderer.insertBefore(_this._stepList.nativeElement, separator, step.elementRef.nativeElement);
                    }
                    step.number = index + 1;
                });
            };
        TdNavStepsHorizontalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nav[td-steps][horizontal]',
                        template: "<div class=\"td-steps-header\">\n  <div class=\"td-step-header-pagination td-step-header-pagination-before mat-elevation-z4\"\n        aria-hidden=\"true\"\n        mat-ripple [matRippleDisabled]=\"_disableScrollBefore\"\n        [class.td-step-header-pagination-disabled]=\"_disableScrollBefore\"\n        (click)=\"_scrollHeader('before')\">\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n  <div #stepListContainer class=\"td-steps-header-container\" (keydown)=\"_handleKeydown($event)\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"td-step-header-pagination td-step-header-pagination-after mat-elevation-z4\"\n        aria-hidden=\"true\"\n        mat-ripple [matRippleDisabled]=\"_disableScrollAfter\"\n        [class.td-step-header-pagination-disabled]=\"_disableScrollAfter\"\n        (click)=\"_scrollHeader('after')\">\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        host: {
                            class: 'td-steps td-steps-horizontal',
                            '[class.td-step-header-pagination-controls-enabled]': '_showPaginationControls',
                            '[class.td-step-header-rtl]': "_getLayoutDirection() == 'rtl'",
                        },
                        styles: [":host{width:100%;display:block}.td-steps-header,.td-steps-header-list{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.td-steps-header-container{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;overflow:hidden;z-index:1}.td-steps-header-list{-ms-flex-positive:1;flex-grow:1;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1),-webkit-transform .5s cubic-bezier(.35,0,.25,1);-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:start}.td-step-header-pagination{position:relative;display:none;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-width:32px;cursor:pointer;z-index:2}:host.td-step-header-pagination-controls-enabled .td-step-header-pagination{display:-ms-flexbox;display:flex}.td-step-header-pagination-before,:host.td-step-header-rtl .td-step-header-pagination-after{padding-left:4px}.td-step-header-pagination-before .td-step-header-pagination-chevron,:host.td-step-header-rtl .td-step-header-pagination-after .td-step-header-pagination-chevron{-webkit-transform:rotate(-135deg);-ms-transform:rotate(-135deg);transform:rotate(-135deg)}.td-step-header-pagination-after,:host.td-step-header-rtl .td-step-header-pagination-before{padding-right:4px}.td-step-header-pagination-after .td-step-header-pagination-chevron,:host.td-step-header-rtl .td-step-header-pagination-before .td-step-header-pagination-chevron{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.td-step-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.td-step-header-pagination-disabled{box-shadow:none;cursor:default}.td-horizontal-line{border-bottom-width:1px;border-bottom-style:solid;height:1px;min-width:20px;-ms-flex:1;flex:1;box-sizing:border-box}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavStepsHorizontalComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: scrolling.ViewportRuler },
                { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdNavStepsHorizontalComponent.propDecorators = {
            _steps: [{ type: core.ContentChildren, args: [TdNavStepLinkComponent,] }],
            _stepListContainer: [{ type: core.ViewChild, args: ['stepListContainer',] }],
            _stepList: [{ type: core.ViewChild, args: ['stepList',] }]
        };
        return TdNavStepsHorizontalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                this._steps.changes.pipe(operators.takeUntil(this._destroyed)).subscribe(function () {
                    _this._configureSteps();
                    _this._changeDetectorRef.markForCheck();
                });
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
         * @return {?}
         */
        TdNavStepsVerticalComponent.prototype._configureSteps = /**
         * Set the step line separators and display numbers
         * @return {?}
         */
            function () {
                var _this = this;
                this._separators.forEach(function (separator) {
                    _this._renderer.removeChild(_this._stepList.nativeElement, separator);
                });
                /** @type {?} */
                var stepsArray = this._steps.toArray();
                // set the index number of the step so can display that number in circle
                stepsArray.forEach(function (step, index) {
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
                });
            };
        TdNavStepsVerticalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nav[td-steps][vertical]',
                        template: "<div class=\"td-steps-header\">\n  <div class=\"td-steps-header-container\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        host: {
                            class: 'td-steps td-steps-vertical',
                        },
                        styles: [".td-vertical-line-wrapper{position:relative}.td-vertical-line-wrapper .td-vertical-line{position:absolute;top:-16px;height:34px;border-left-width:1px;border-left-style:solid}::ng-deep :not([dir=rtl]) .td-vertical-line-wrapper .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line-wrapper .td-vertical-line{left:auto;right:20px}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavStepsVerticalComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdNavStepsVerticalComponent.propDecorators = {
            _steps: [{ type: core.ContentChildren, args: [TdNavStepLinkComponent,] }],
            _stepList: [{ type: core.ViewChild, args: ['stepList',] }]
        };
        return TdNavStepsVerticalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                        imports: [
                            common$1.CommonModule,
                            icon.MatIconModule,
                            core$1.MatRippleModule,
                            portal.PortalModule,
                            scrolling.ScrollDispatchModule,
                            common.CovalentCommonModule,
                        ],
                        declarations: [
                            TD_STEPS,
                        ],
                        exports: [
                            TD_STEPS,
                        ],
                    },] }
        ];
        return CovalentStepsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.CovalentStepsModule = CovalentStepsModule;
    exports.StepState = StepState;
    exports.TdStepLabelDirective = TdStepLabelDirective;
    exports.TdStepActionsDirective = TdStepActionsDirective;
    exports.TdStepSummaryDirective = TdStepSummaryDirective;
    exports.TdStepBase = TdStepBase;
    exports._TdStepMixinBase = _TdStepMixinBase;
    exports.TdStepComponent = TdStepComponent;
    exports.StepMode = StepMode;
    exports.TdStepsComponent = TdStepsComponent;
    exports.TdStepBodyComponent = TdStepBodyComponent;
    exports.TdStepHeaderBase = TdStepHeaderBase;
    exports._TdStepHeaderMixinBase = _TdStepHeaderMixinBase;
    exports.TdStepHeaderComponent = TdStepHeaderComponent;
    exports.ɵb = TdNavStepLinkComponent;
    exports.ɵa = TdNavStepsHorizontalComponent;
    exports.ɵc = TdNavStepsVerticalComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1zdGVwcy51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AY292YWxlbnQvY29yZS9zdGVwcy9zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvc3RlcHMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9zdGVwcy9zdGVwLWhlYWRlci9zdGVwLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL3N0ZXBzL3N0ZXAtYm9keS9zdGVwLWJvZHkuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9zdGVwcy9uYXYvbmF2LXN0ZXAtbGluay9uYXYtc3RlcC1saW5rLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvbmF2L25hdi1zdGVwcy1ob3Jpem9udGFsL25hdi1zdGVwcy1ob3Jpem9udGFsLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvbmF2L25hdi1zdGVwcy12ZXJ0aWNhbC9uYXYtc3RlcHMtdmVydGljYWwuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9zdGVwcy9zdGVwcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcbiAgICAgICAgIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQsIElDYW5EaXNhYmxlUmlwcGxlLCBtaXhpbkRpc2FibGVSaXBwbGUgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgZW51bSBTdGVwU3RhdGUge1xuICBOb25lID0gJ25vbmUnLFxuICBSZXF1aXJlZCA9ICdyZXF1aXJlZCcsXG4gIENvbXBsZXRlID0gJ2NvbXBsZXRlJyxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLXN0ZXAtbGFiZWxdbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFN0ZXBMYWJlbERpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLXN0ZXAtYWN0aW9uc11uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkU3RlcEFjdGlvbnNEaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1zdGVwLXN1bW1hcnldbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFN0ZXBTdW1tYXJ5RGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGRTdGVwQmFzZSB7fVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRTdGVwTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlUmlwcGxlKG1peGluRGlzYWJsZWQoVGRTdGVwQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1zdGVwJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2Rpc2FibGVSaXBwbGUnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFN0ZXBDb21wb25lbnQgZXh0ZW5kcyBfVGRTdGVwTWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBJQ2FuRGlzYWJsZSwgSUNhbkRpc2FibGVSaXBwbGUge1xuXG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zdGF0ZTogU3RlcFN0YXRlID0gU3RlcFN0YXRlLk5vbmU7XG5cbiAgcHJpdmF0ZSBfY29udGVudFBvcnRhbDogVGVtcGxhdGVQb3J0YWw8YW55PjtcbiAgZ2V0IHN0ZXBDb250ZW50KCk6IFRlbXBsYXRlUG9ydGFsPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50UG9ydGFsO1xuICB9XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgX2NvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoVGRTdGVwTGFiZWxEaXJlY3RpdmUpIHN0ZXBMYWJlbDogVGRTdGVwTGFiZWxEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRTdGVwQWN0aW9uc0RpcmVjdGl2ZSkgc3RlcEFjdGlvbnM6IFRkU3RlcEFjdGlvbnNEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRTdGVwU3VtbWFyeURpcmVjdGl2ZSkgc3RlcFN1bW1hcnk6IFRkU3RlcFN1bW1hcnlEaXJlY3RpdmU7XG5cbiAgLyoqXG4gICAqIGxhYmVsPzogc3RyaW5nXG4gICAqIFNldHMgbGFiZWwgb2YgW1RkU3RlcENvbXBvbmVudF0gaGVhZGVyLlxuICAgKiBEZWZhdWx0cyB0byAnU3RlcCAjJ1xuICAgKi9cbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHN1YmxhYmVsPzogc3RyaW5nXG4gICAqIFNldHMgc3VibGFiZWwgb2YgW1RkU3RlcENvbXBvbmVudF0gaGVhZGVyLlxuICAgKi9cbiAgQElucHV0KCdzdWJsYWJlbCcpIHN1YmxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogVG9nZ2xlcyBbVGRTdGVwQ29tcG9uZW50XSBiZXR3ZWVuIGFjdGl2ZS9kZWFjdGl2ZS5cbiAgICovXG4gIEBJbnB1dCgnYWN0aXZlJylcbiAgc2V0IGFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZXRBY3RpdmUoY29lcmNlQm9vbGVhblByb3BlcnR5KGFjdGl2ZSkpO1xuICB9XG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdGF0ZT86IFN0ZXBTdGF0ZSBvciBbJ25vbmUnIHwgJ3JlcXVpcmVkJyB8ICdjb21wbGV0ZSddXG4gICAqIFNldHMgc3RhdGUgb2YgW1RkU3RlcENvbXBvbmVudF0gZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbU3RlcFN0YXRlLk5vbmUgfCAnbm9uZSddLlxuICAgKi9cbiAgQElucHV0KCdzdGF0ZScpXG4gIHNldCBzdGF0ZShzdGF0ZTogU3RlcFN0YXRlKSB7XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgY2FzZSBTdGVwU3RhdGUuQ29tcGxldGU6XG4gICAgICAgIHRoaXMuX3N0YXRlID0gU3RlcFN0YXRlLkNvbXBsZXRlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU3RlcFN0YXRlLlJlcXVpcmVkOlxuICAgICAgICB0aGlzLl9zdGF0ZSA9IFN0ZXBTdGF0ZS5SZXF1aXJlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9zdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZ2V0IHN0YXRlKCk6IFN0ZXBTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIGFjdGl2YXRlZD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBbVGRTdGVwQ29tcG9uZW50XSBpcyBhY3RpdmF0ZWQuXG4gICAqL1xuICBAT3V0cHV0KCdhY3RpdmF0ZWQnKSBvbkFjdGl2YXRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBkZWFjdGl2YXRlZD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBbVGRTdGVwQ29tcG9uZW50XSBpcyBkZWFjdGl2YXRlZC5cbiAgICovXG4gIEBPdXRwdXQoJ2RlYWN0aXZhdGVkJykgb25EZWFjdGl2YXRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY29udGVudFBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLl9jb250ZW50LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgYWN0aXZlIHN0YXRlIG9mIFtUZFN0ZXBDb21wb25lbnRdXG4gICAqIHJldHVucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgdG9nZ2xlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXRBY3RpdmUoIXRoaXMuX2FjdGl2ZSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgW1RkU3RlcENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBvcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXRBY3RpdmUodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIFtUZFN0ZXBDb21wb25lbnRdXG4gICAqIHJldHVucyAndHJ1ZScgaWYgc3VjY2Vzc2Z1bCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgY2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW3N0YXRlXSBlcXVhbHMgdG8gW1N0ZXBTdGF0ZS5Db21wbGV0ZSB8ICdjb21wbGV0ZSddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc0NvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZSA9PT0gU3RlcFN0YXRlLkNvbXBsZXRlO1xuICB9XG5cbiAgLyoqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBkaXNhYmxlZCB2YWx1ZSBjaGFuZ2VzICovXG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh2ICYmIHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkRlYWN0aXZhdGVkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjaGFuZ2UgYWN0aXZlIHN0YXRlIGludGVybmFsbHkgYW5kIGVtaXQgdGhlIFtvbkFjdGl2YXRlZF0gZXZlbnQgaWYgJ3RydWUnIG9yIFtvbkRlYWN0aXZhdGVkXVxuICAgKiBldmVudCBpZiAnZmFsc2UnLiAoQmxvY2tlZCBpZiBbZGlzYWJsZWRdIGlzICd0cnVlJylcbiAgICogcmV0dXJucyB0cnVlIGlmIHN1Y2Nlc3NmdWxseSBjaGFuZ2VkIHN0YXRlXG4gICAqL1xuICBwcml2YXRlIF9zZXRBY3RpdmUobmV3QWN0aXZlOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FjdGl2ZSAhPT0gbmV3QWN0aXZlKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBuZXdBY3RpdmU7XG4gICAgICBpZiAobmV3QWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX29uQWN0aXZhdGVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vbkRlYWN0aXZhdGVkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25BY3RpdmF0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkFjdGl2YXRlZC5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBwcml2YXRlIF9vbkRlYWN0aXZhdGVkKCk6IHZvaWQge1xuICAgIHRoaXMub25EZWFjdGl2YXRlZC5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0ZXBDaGFuZ2VFdmVudCB7XG4gIG5ld1N0ZXA6IFRkU3RlcENvbXBvbmVudDtcbiAgcHJldlN0ZXA6IFRkU3RlcENvbXBvbmVudDtcbn1cblxuZXhwb3J0IGVudW0gU3RlcE1vZGUge1xuICBWZXJ0aWNhbCA9ICd2ZXJ0aWNhbCcsXG4gIEhvcml6b250YWwgPSAnaG9yaXpvbnRhbCcsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXN0ZXBzJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcHMuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwcy5jb21wb25lbnQuaHRtbCcsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBob3N0OiB7XG4gICAgY2xhc3M6ICd0ZC1zdGVwcycsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRkU3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIHByaXZhdGUgX3N1YmNyaXB0aW9uczogU3Vic2NyaXB0aW9uW107XG4gIHByaXZhdGUgX21vZGU6IFN0ZXBNb2RlID0gU3RlcE1vZGUuVmVydGljYWw7XG4gIHByaXZhdGUgX3N0ZXBzOiBRdWVyeUxpc3Q8VGRTdGVwQ29tcG9uZW50PjtcblxuICBAQ29udGVudENoaWxkcmVuKFRkU3RlcENvbXBvbmVudClcbiAgc2V0IHN0ZXBzQ29udGVudChzdGVwczogUXVlcnlMaXN0PFRkU3RlcENvbXBvbmVudD4pIHtcbiAgICBpZiAoc3RlcHMpIHtcbiAgICAgIHRoaXMuX3N0ZXBzID0gc3RlcHM7XG4gICAgICB0aGlzLl9yZWdpc3RlclN0ZXBzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHN0ZXBzKCk6IFRkU3RlcENvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICB9XG4gIHByZXZTdGVwOiBUZFN0ZXBDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIG1vZGU/OiBTdGVwTW9kZSBvciBbXCJ2ZXJ0aWNhbFwiIHwgXCJob3Jpem9udGFsXCJdXG4gICAqIERlZmluZXMgaWYgdGhlIG1vZGUgb2YgdGhlIFtUZFN0ZXBzQ29tcG9uZW50XS4gIERlZmF1bHRzIHRvIFtTdGVwTW9kZS5WZXJ0aWNhbCB8IFwidmVydGljYWxcIl1cbiAgICovXG4gIEBJbnB1dCgnbW9kZScpXG4gIHNldCBtb2RlKG1vZGU6IFN0ZXBNb2RlKSB7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIFN0ZXBNb2RlLkhvcml6b250YWw6XG4gICAgICAgIHRoaXMuX21vZGUgPSBTdGVwTW9kZS5Ib3Jpem9udGFsO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX21vZGUgPSBTdGVwTW9kZS5WZXJ0aWNhbDtcbiAgICB9XG4gIH1cbiAgZ2V0IG1vZGUoKTogU3RlcE1vZGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0ZXBDaGFuZ2U/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBbb25TdGVwQ2hhbmdlXSBldmVudCBpcyBlbWl0dGVkLlxuICAgKiBFbWl0cyBhbiBbSVN0ZXBDaGFuZ2VFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnc3RlcENoYW5nZScpIG9uU3RlcENoYW5nZTogRXZlbnRFbWl0dGVyPElTdGVwQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJU3RlcENoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBFeGVjdXRlZCBhZnRlciBjb250ZW50IGlzIGluaXRpYWxpemVkLCBsb29wcyB0aHJvdWdoIGFueSBbVGRTdGVwQ29tcG9uZW50XSBjaGlsZHJlbiBlbGVtZW50cyxcbiAgICogYXNzaWducyB0aGVtIGEgbnVtYmVyIGFuZCBzdWJzY3JpYmVzIGFzIGFuIG9ic2VydmVyIHRvIHRoZWlyIFtvbkFjdGl2YXRlZF0gZXZlbnQuXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVnaXN0ZXJTdGVwcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlcyBmcm9tIFtUZFN0ZXBDb21wb25lbnRdIGNoaWxkcmVuIGVsZW1lbnRzIHdoZW4gY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2RlcmVnaXN0ZXJTdGVwcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgJ3RydWUnIGlmIFttb2RlXSBlcXVhbHMgdG8gW1N0ZXBNb2RlLkhvcml6b250YWwgfCAnaG9yaXpvbnRhbCddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc0hvcml6b250YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUgPT09IFN0ZXBNb2RlLkhvcml6b250YWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW21vZGVdIGVxdWFscyB0byBbU3RlcE1vZGUuVmVydGljYWwgfCAndmVydGljYWwnXSwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgaXNWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZSA9PT0gU3RlcE1vZGUuVmVydGljYWw7XG4gIH1cblxuICBhcmVTdGVwc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcHMuZmlsdGVyKChzdGVwOiBUZFN0ZXBDb21wb25lbnQpID0+IHtcbiAgICAgIHJldHVybiBzdGVwLmFjdGl2ZTtcbiAgICB9KS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBzIHByZXZpb3VzIGFuZCBuZXcgW1RkU3RlcENvbXBvbmVudF0gbnVtYmVycyBpbiBhbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIFtJU3RlcENoYW5nZUV2ZW50XVxuICAgKiBhbmQgZW1pdHMgW29uU3RlcENoYW5nZV0gZXZlbnQuXG4gICAqL1xuICBwcml2YXRlIF9vblN0ZXBTZWxlY3Rpb24oc3RlcDogVGRTdGVwQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJldlN0ZXAgIT09IHN0ZXApIHtcbiAgICAgIGxldCBwcmV2U3RlcDogVGRTdGVwQ29tcG9uZW50ID0gdGhpcy5wcmV2U3RlcDtcbiAgICAgIHRoaXMucHJldlN0ZXAgPSBzdGVwO1xuICAgICAgbGV0IGV2ZW50OiBJU3RlcENoYW5nZUV2ZW50ID0ge1xuICAgICAgICBuZXdTdGVwOiBzdGVwLFxuICAgICAgICBwcmV2U3RlcDogcHJldlN0ZXAsXG4gICAgICB9O1xuICAgICAgdGhpcy5fZGVhY3RpdmF0ZUFsbEJ1dChzdGVwKTtcbiAgICAgIHRoaXMub25TdGVwQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb29wcyB0aHJvdWdoIFtUZFN0ZXBDb21wb25lbnRdIGNoaWxkcmVuIGVsZW1lbnRzIGFuZCBkZWFjdGl2YXRlcyB0aGVtIGlnbm9yaW5nIHRoZSBvbmUgcGFzc2VkIGFzIGFuIGFyZ3VtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfZGVhY3RpdmF0ZUFsbEJ1dChhY3RpdmVTdGVwOiBUZFN0ZXBDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGVwcy5maWx0ZXIoKHN0ZXA6IFRkU3RlcENvbXBvbmVudCkgPT4gc3RlcCAhPT0gYWN0aXZlU3RlcClcbiAgICAuZm9yRWFjaCgoc3RlcDogVGRTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICBzdGVwLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJTdGVwcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJjcmlwdGlvbnMgPSBbXTtcbiAgICB0aGlzLl9zdGVwcy50b0FycmF5KCkuZm9yRWFjaCgoc3RlcDogVGRTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICBsZXQgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBzdGVwLm9uQWN0aXZhdGVkLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX29uU3RlcFNlbGVjdGlvbihzdGVwKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc3ViY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2RlcmVnaXN0ZXJTdGVwcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3ViY3JpcHRpb25zKSB7XG4gICAgICB0aGlzLl9zdWJjcmlwdGlvbnMuZm9yRWFjaCgoc3ViczogU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc3ViY3JpcHRpb25zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCwgSUNhbkRpc2FibGVSaXBwbGUsIG1peGluRGlzYWJsZVJpcHBsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmltcG9ydCB7IFN0ZXBTdGF0ZSB9IGZyb20gJy4uL3N0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFRkU3RlcEhlYWRlckJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkU3RlcEhlYWRlck1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShtaXhpbkRpc2FibGVkKFRkU3RlcEhlYWRlckJhc2UpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtc3RlcC1oZWFkZXInLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZGlzYWJsZVJpcHBsZSddLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwLWhlYWRlci5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRTdGVwSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgX1RkU3RlcEhlYWRlck1peGluQmFzZSBpbXBsZW1lbnRzIElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSB7XG5cbiAgLyoqXG4gICAqIE51bWJlciBhc3NpZ25lZCB0byBbVGRTdGVwSGVhZGVyQ29tcG9uZW50XS5cbiAgICovXG4gIEBJbnB1dCgnbnVtYmVyJykgbnVtYmVyOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogU2V0cyBmb3IgYWN0aXZlL2luYWN0aXZlIHN0YXRlcyBvbiBoZWFkZXIuXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogc3RhdGU/OiBTdGVwU3RhdGUgb3IgWydub25lJyB8ICdyZXF1aXJlZCcgfCAnY29tcGxldGUnXVxuICAgKiBTZXRzIHN0eWxlcyBmb3Igc3RhdGUgb2YgaGVhZGVyLlxuICAgKiBEZWZhdWx0cyB0byBbU3RlcFN0YXRlLk5vbmUgfCAnbm9uZSddLlxuICAgKi9cbiAgQElucHV0KCdzdGF0ZScpIHN0YXRlOiBTdGVwU3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW3N0YXRlXSBlcXVhbHMgdG8gW1N0ZXBTdGF0ZS5Db21wbGV0ZSB8ICdjb21wbGV0ZSddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc0NvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBTdGVwU3RhdGUuQ29tcGxldGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW3N0YXRlXSBlcXVhbHMgdG8gW1N0ZXBTdGF0ZS5SZXF1aXJlZCB8ICdyZXF1aXJlZCddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc1JlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBTdGVwU3RhdGUuUmVxdWlyZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdGVwU3RhdGUgfSBmcm9tICcuLi9zdGVwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1zdGVwLWJvZHknLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwLWJvZHkuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwLWJvZHkuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdGRDb2xsYXBzZUFuaW1hdGlvbixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRTdGVwQm9keUNvbXBvbmVudCB7XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudFJlZicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjb250ZW50UmVmOiBFbGVtZW50UmVmO1xuXG4gIGdldCBoYXNDb250ZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRSZWYgJiZcbiAgICAgICAgICAodGhpcy5jb250ZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fCAhIXRoaXMuY29udGVudFJlZi5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSk7XG4gIH1cblxuICBAVmlld0NoaWxkKCdhY3Rpb25zUmVmJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGFjdGlvbnNSZWY6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IGhhc0FjdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uc1JlZiAmJlxuICAgICAgICAgICh0aGlzLmFjdGlvbnNSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwIHx8ICEhdGhpcy5hY3Rpb25zUmVmLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ3N1bW1hcnlSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc3VtbWFyeVJlZjogRWxlbWVudFJlZjtcblxuICBnZXQgaGFzU3VtbWFyeSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdW1tYXJ5UmVmICYmXG4gICAgICAgICAgKHRoaXMuc3VtbWFyeVJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgISF0aGlzLnN1bW1hcnlSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogU2V0cyBmb3IgYWN0aXZlL2luYWN0aXZlIHN0YXRlcyBvbiBib2R5LlxuICAgKi9cbiAgQElucHV0KCdhY3RpdmUnKSBhY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIHN0YXRlPzogU3RlcFN0YXRlIG9yIFsnbm9uZScgfCAncmVxdWlyZWQnIHwgJ2NvbXBsZXRlJ11cbiAgICogU2V0cyBzdHlsZXMgZm9yIHN0YXRlIG9mIGJvZHkuXG4gICAqIERlZmF1bHRzIHRvIFtTdGVwU3RhdGUuTm9uZSB8ICdub25lJ10uXG4gICAqL1xuICBASW5wdXQoJ3N0YXRlJykgc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLkNvbXBsZXRlIHwgJ2NvbXBsZXRlJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0ZXBTdGF0ZS5Db21wbGV0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIElucHV0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5pbXBvcnQgeyBfVGRTdGVwTWl4aW5CYXNlLCBTdGVwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGVwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1t0ZC1zdGVwLWxpbmtdLFt0ZFN0ZXBMaW5rXScsXG4gIHN0eWxlVXJsczogWycuL25hdi1zdGVwLWxpbmsuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1zdGVwLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZGlzYWJsZVJpcHBsZSddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ2Rpc2FibGVkID8gLTEgOiAwJyxcbiAgICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkIHx8IG51bGwnLFxuICAgICdbY2xhc3MubWF0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCB8fCBudWxsJyxcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2U3RlcExpbmtDb21wb25lbnQgZXh0ZW5kcyBfVGRTdGVwTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcblxuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8vIE51bWJlciB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gIG51bWJlcjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBzdGF0ZT86IFN0ZXBTdGF0ZSBvciBbJ25vbmUnIHwgJ3JlcXVpcmVkJyB8ICdjb21wbGV0ZSddXG4gICAqIFNldHMgc3RhdGUgb2YgY29tcG9uZW50IGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW1N0ZXBTdGF0ZS5Ob25lIHwgJ25vbmUnXS5cbiAgICovXG4gIEBJbnB1dCgnc3RhdGUnKVxuICBzZXQgc3RhdGUoc3RhdGU6IFN0ZXBTdGF0ZSkge1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgU3RlcFN0YXRlLkNvbXBsZXRlOlxuICAgICAgICB0aGlzLl9zdGF0ZSA9IFN0ZXBTdGF0ZS5Db21wbGV0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFN0ZXBTdGF0ZS5SZXF1aXJlZDpcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTdGVwU3RhdGUuUmVxdWlyZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGdldCBzdGF0ZSgpOiBTdGVwU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBsYWJlbD86IHN0cmluZ1xuICAgKiBMYWJlbCB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gICAqIERlZmF1bHRzIHRvIGVtcHR5XG4gICAqL1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICogU3VibGFiZWwgdG8gZGlzcGxheSBpbiBzdGVwIGhlYWRlclxuICAgKiBEZWZhdWx0cyB0byBlbXB0eVxuICAgKi9cbiAgQElucHV0KCdzdWJsYWJlbCcpIHN1YmxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogVG9nZ2xlcyBjb21wb25lbnQgYmV0d2VlbiBhY3RpdmUvZGVhY3RpdmUuXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZScpXG4gIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGFjdGl2ZSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBfaGFuZGxlQ2xpY2soY2xpY2s6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGNsaWNrLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjbGljay5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCwgQ29udGVudENoaWxkcmVuLCBWaWV3Q2hpbGQsIFF1ZXJ5TGlzdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgXG4gICAgICAgICBBZnRlckNvbnRlbnRJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QsIG1lcmdlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFJJR0hUX0FSUk9XLCBMRUZUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IFZpZXdwb3J0UnVsZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcblxuaW1wb3J0IHsgVGROYXZTdGVwTGlua0NvbXBvbmVudCB9IGZyb20gJy4uL25hdi1zdGVwLWxpbmsvbmF2LXN0ZXAtbGluay5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoZSBkaXJlY3Rpb25zIHRoYXQgc2Nyb2xsaW5nIGNhbiBnbyBpbiB3aGVuIHRoZSBoZWFkZXIncyB0YWJzIGV4Y2VlZCB0aGUgaGVhZGVyIHdpZHRoLiAnQWZ0ZXInXG4gKiB3aWxsIHNjcm9sbCB0aGUgaGVhZGVyIHRvd2FyZHMgdGhlIGVuZCBvZiB0aGUgdGFicyBsaXN0IGFuZCAnYmVmb3JlJyB3aWxsIHNjcm9sbCB0b3dhcmRzIHRoZVxuICogYmVnaW5uaW5nIG9mIHRoZSBsaXN0LlxuICovXG5leHBvcnQgdHlwZSBTY3JvbGxEaXJlY3Rpb24gPSAnYWZ0ZXInIHwgJ2JlZm9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25hdlt0ZC1zdGVwc11baG9yaXpvbnRhbF0nLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtc3RlcHMtaG9yaXpvbnRhbC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LXN0ZXBzLWhvcml6b250YWwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3RkLXN0ZXBzIHRkLXN0ZXBzLWhvcml6b250YWwnLFxuICAgICdbY2xhc3MudGQtc3RlcC1oZWFkZXItcGFnaW5hdGlvbi1jb250cm9scy1lbmFibGVkXSc6ICdfc2hvd1BhZ2luYXRpb25Db250cm9scycsXG4gICAgJ1tjbGFzcy50ZC1zdGVwLWhlYWRlci1ydGxdJzogXCJfZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT0gJ3J0bCdcIixcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwc0hvcml6b250YWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3NlcGFyYXRvcnM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBwcml2YXRlIF9zY3JvbGxEaXN0YW5jZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbnRyb2xzIGZvciBwYWdpbmF0aW9uIHNob3VsZCBiZSBkaXNwbGF5ZWQgKi9cbiAgX3Nob3dQYWdpbmF0aW9uQ29udHJvbHM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGUgc3RlcCBsaXN0IGNhbiBiZSBzY3JvbGxlZCBtb3JlIHRvd2FyZHMgdGhlIGVuZC4gKi9cbiAgX2Rpc2FibGVTY3JvbGxBZnRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHN0ZXAgbGlzdCBjYW4gYmUgc2Nyb2xsZWQgbW9yZSB0b3dhcmRzIHRoZSBiZWdpbm5pbmcuICovXG4gIF9kaXNhYmxlU2Nyb2xsQmVmb3JlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvLyBhbGwgdGhlIHN1YiBjb21wb25lbnRzLCB3aGljaCBhcmUgdGhlIGluZGl2aWR1YWwgc3RlcHNcbiAgQENvbnRlbnRDaGlsZHJlbihUZE5hdlN0ZXBMaW5rQ29tcG9uZW50KSBfc3RlcHM6IFF1ZXJ5TGlzdDxUZE5hdlN0ZXBMaW5rQ29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkKCdzdGVwTGlzdENvbnRhaW5lcicpIF9zdGVwTGlzdENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc3RlcExpc3QnKSBfc3RlcExpc3Q6IEVsZW1lbnRSZWY7XG5cbiAgLypcbiAgKiBDdXJyZW50IHdpZHRoIG9mIHRoZSBlbGVtZW50IGNvbnRhaW5lclxuICAqL1xuICBnZXQgbmF0aXZlRWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgLy8gTmVlZCB0byB0YWtlIGludG8gYWNjb3VudCBib3JkZXIsIG1hcmdpbiBhbmQgcGFkZGluZyB0aGF0IG1pZ2h0IGJlIGFyb3VuZCBhbGwgdGhlIGNydW1ic1xuICAgIGxldCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGxldCBib3JkZXJMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJMZWZ0LCAxMCk7XG4gICAgbGV0IGJvcmRlclJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5ib3JkZXJSaWdodCwgMTApO1xuICAgIGxldCBtYXJnaW5MZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCk7XG4gICAgbGV0IG1hcmdpblJpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5SaWdodCwgMTApO1xuICAgIGxldCBwYWRkaW5nTGVmdDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ0xlZnQsIDEwKTtcbiAgICBsZXQgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKTtcblxuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gYm9yZGVyTGVmdCAtIGJvcmRlclJpZ2h0IC0gbWFyZ2luTGVmdCAtIG1hcmdpblJpZ2h0IC0gcGFkZGluZ0xlZnQgLSBwYWRkaW5nUmlnaHQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcmVjdGlvbmFsaXR5LFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBtZXJnZShcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX3ZpZXdwb3J0UnVsZXIuY2hhbmdlKDE1MCksXG4gICAgICB0aGlzLl9kaXIgPyB0aGlzLl9kaXIuY2hhbmdlIDogb2YodW5kZWZpbmVkKSxcbiAgICAgIHRoaXMuX3N0ZXBzLmNoYW5nZXMsXG4gICAgKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fY29uZmlndXJlU3RlcHMoKTtcbiAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fY29uZmlndXJlU3RlcHMoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Njcm9sbERpc3RhbmNlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlU3RlcFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLl9zY3JvbGxEaXN0YW5jZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuIHRvIHJpZ2h0IGFuZCBsZWZ0IGtleSBldmVudHMgdG8gbW92ZSB0aGUgdGhlIHZpZXdwb3J0LlxuICAgKi9cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgdGhpcy5fc2Nyb2xsSGVhZGVyKCdiZWZvcmUnKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICB0aGlzLl9zY3JvbGxIZWFkZXIoJ2FmdGVyJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHZpZXcgd2hldGhlciBwYWdpbmF0aW9uIHNob3VsZCBiZSBlbmFibGVkIG9yIG5vdC5cbiAgICovXG4gIHVwZGF0ZVBhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fY2hlY2tQYWdpbmF0aW9uRW5hYmxlZCgpO1xuICAgIHRoaXMuX2NoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcbiAgICB0aGlzLl91cGRhdGVTdGVwU2Nyb2xsUG9zaXRpb24oKTtcbiAgfVxuXG4gIC8qKiBUaGUgbGF5b3V0IGRpcmVjdGlvbiBvZiB0aGUgY29udGFpbmluZyBhcHAuICovXG4gIF9nZXRMYXlvdXREaXJlY3Rpb24oKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyICYmIHRoaXMuX2Rpci52YWx1ZSA9PT0gJ3J0bCcgPyAncnRsJyA6ICdsdHInO1xuICB9XG5cbiAgICAvKiogUGVyZm9ybXMgdGhlIENTUyB0cmFuc2Zvcm1hdGlvbiBvbiB0aGUgc3RlcCBsaXN0IHRoYXQgd2lsbCBjYXVzZSB0aGUgbGlzdCB0byBzY3JvbGwuICovXG4gIF91cGRhdGVTdGVwU2Nyb2xsUG9zaXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgdHJhbnNsYXRlWDogbnVtYmVyID0gdGhpcy5fZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdsdHInID8gLXRoaXMuc2Nyb2xsRGlzdGFuY2UgOiB0aGlzLnNjcm9sbERpc3RhbmNlO1xuICAgIC8vIE1vdmUgc3RlcCBsaXN0IHRoZSBhbW91bnQgb2YgcGl4ZWxzIHNjcm9sbGVkXG4gICAgdGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke01hdGgucm91bmQodHJhbnNsYXRlWCl9cHgpYDtcblxuICAgIC8vIFNldHRpbmcgdGhlIGB0cmFuc2Zvcm1gIG9uIElFIHdpbGwgY2hhbmdlIHRoZSBzY3JvbGwgb2Zmc2V0IG9mIHRoZSBwYXJlbnQsIGNhdXNpbmcgdGhlXG4gICAgLy8gcG9zaXRpb24gdG8gYmUgdGhyb3duIG9mZiBpbiBzb21lIGNhc2VzLiBXZSBoYXZlIHRvIHJlc2V0IGl0IG91cnNlbHZlcyB0byBlbnN1cmUgdGhhdFxuICAgIC8vIGl0IGRvZXNuJ3QgZ2V0IHRocm93biBvZmYuXG4gICAgaWYgKHRoaXMuX2dldExheW91dERpcmVjdGlvbigpID09PSAnbHRyJykge1xuICAgICAgdGhpcy5fc3RlcExpc3RDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RlcExpc3RDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGhpcy5fZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZGlzdGFuY2UgaW4gcGl4ZWxzIHRoYXQgdGhlIHN0ZXAgaGVhZGVyIHNob3VsZCBiZSB0cmFuc2Zvcm1lZCBpbiB0aGUgWC1heGlzLiAqL1xuICBnZXQgc2Nyb2xsRGlzdGFuY2UoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3Njcm9sbERpc3RhbmNlOyB9XG4gIHNldCBzY3JvbGxEaXN0YW5jZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY3JvbGxEaXN0YW5jZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuX2dldE1heFNjcm9sbERpc3RhbmNlKCksIHYpKTtcblxuICAgIC8vIE1hcmsgdGhhdCB0aGUgc2Nyb2xsIGRpc3RhbmNlIGhhcyBjaGFuZ2VkIHNvIHRoYXQgYWZ0ZXIgdGhlIHZpZXcgaXMgY2hlY2tlZCwgdGhlIENTU1xuICAgIC8vIHRyYW5zZm9ybWF0aW9uIGNhbiBtb3ZlIHRoZSBoZWFkZXIuXG4gICAgdGhpcy5fc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIHN0ZXAgbGlzdCBpbiB0aGUgJ2JlZm9yZScgb3IgJ2FmdGVyJyBkaXJlY3Rpb24gKHRvd2FyZHMgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdCBvclxuICAgKiB0aGUgZW5kIG9mIHRoZSBsaXN0LCByZXNwZWN0aXZlbHkpLlxuICAgKi9cbiAgX3Njcm9sbEhlYWRlcihzY3JvbGxEaXI6IFNjcm9sbERpcmVjdGlvbik6IHZvaWQge1xuICAgIC8vIE1vdmUgdGhlIHNjcm9sbCBkaXN0YW5jZSBvbmUtaGFsZiB0aGUgbGVuZ3RoIG9mIHRoZSBzdGVwIGxpc3QncyB2aWV3cG9ydC5cbiAgICB0aGlzLnNjcm9sbERpc3RhbmNlICs9IChzY3JvbGxEaXIgPT09ICdiZWZvcmUnID8gLTEgOiAxKSAqIHRoaXMuX3N0ZXBMaXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLyAyO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHdoZXRoZXIgdGhlIHBhZ2luYXRpb24gY29udHJvbHMgc2hvdWxkIGJlIGRpc3BsYXllZC4gSWYgdGhlIHNjcm9sbCB3aWR0aCBvZiB0aGVcbiAgICogc3RlcCBsaXN0IGlzIHdpZGVyIHRoYW4gdGhlIHNpemUgb2YgdGhlIGhlYWRlciBjb250YWluZXIsIHRoZW4gdGhlIHBhZ2luYXRpb24gY29udHJvbHMgc2hvdWxkXG4gICAqIGJlIHNob3duLlxuICAgKi9cbiAgX2NoZWNrUGFnaW5hdGlvbkVuYWJsZWQoKTogdm9pZCB7XG4gICAgY29uc3QgaXNFbmFibGVkOiBib29sZWFuID1cbiAgICAgICAgdGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCA+IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgIGlmICghaXNFbmFibGVkKSB7XG4gICAgICB0aGlzLnNjcm9sbERpc3RhbmNlID0gMDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbmFibGVkICE9PSB0aGlzLl9zaG93UGFnaW5hdGlvbkNvbnRyb2xzKSB7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zaG93UGFnaW5hdGlvbkNvbnRyb2xzID0gaXNFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHdoZXRoZXIgdGhlIGJlZm9yZSBhbmQgYWZ0ZXIgY29udHJvbHMgc2hvdWxkIGJlIGVuYWJsZWQgb3IgZGlzYWJsZWQuXG4gICAqIElmIHRoZSBoZWFkZXIgaXMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdCAoc2Nyb2xsIGRpc3RhbmNlIGlzIGVxdWFsIHRvIDApIHRoZW4gZGlzYWJsZSB0aGVcbiAgICogYmVmb3JlIGJ1dHRvbi4gSWYgdGhlIGhlYWRlciBpcyBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0IChzY3JvbGwgZGlzdGFuY2UgaXMgZXF1YWwgdG8gdGhlXG4gICAqIG1heGltdW0gZGlzdGFuY2Ugd2UgY2FuIHNjcm9sbCksIHRoZW4gZGlzYWJsZSB0aGUgYWZ0ZXIgYnV0dG9uLlxuICAgKi9cbiAgX2NoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBhZ2luYXRpb24gYXJyb3dzIHNob3VsZCBiZSBhY3RpdmF0ZWQuXG4gICAgdGhpcy5fZGlzYWJsZVNjcm9sbEJlZm9yZSA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgPT09IDA7XG4gICAgdGhpcy5fZGlzYWJsZVNjcm9sbEFmdGVyID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gdGhpcy5fZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoYXQgaXMgdGhlIG1heGltdW0gbGVuZ3RoIGluIHBpeGVscyB0aGF0IGNhbiBiZSBzZXQgZm9yIHRoZSBzY3JvbGwgZGlzdGFuY2UuIFRoaXNcbiAgICogaXMgZXF1YWwgdG8gdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0aGUgc3RlcCBsaXN0IGNvbnRhaW5lciBhbmQgc3RlcCBoZWFkZXIgY29udGFpbmVyLlxuICAgKi9cbiAgX2dldE1heFNjcm9sbERpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICh0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoIC0gdGhpcy5fc3RlcExpc3RDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0ZXAgbGluZSBzZXBhcmF0b3JzIGFuZCBkaXNwbGF5IG51bWJlcnNcbiAgICovXG4gIHByaXZhdGUgX2NvbmZpZ3VyZVN0ZXBzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NlcGFyYXRvcnMuZm9yRWFjaCgoc2VwYXJhdG9yOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudCwgc2VwYXJhdG9yKTtcbiAgICB9KTtcbiAgICBsZXQgc3RlcHNBcnJheTogVGROYXZTdGVwTGlua0NvbXBvbmVudFtdID0gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICAgIC8vIHNldCB0aGUgaW5kZXggbnVtYmVyIG9mIHRoZSBzdGVwIHNvIGNhbiBkaXNwbGF5IHRoYXQgbnVtYmVyIGluIGNpcmNsZVxuICAgIHN0ZXBzQXJyYXkuZm9yRWFjaCgoc3RlcDogVGROYXZTdGVwTGlua0NvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGluZGV4ID4gMCAmJiBpbmRleCA8IHN0ZXBzQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGxldCBzZXBhcmF0b3I6IGFueSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzZXBhcmF0b3IsICd0ZC1ob3Jpem9udGFsLWxpbmUnKTtcbiAgICAgICAgdGhpcy5fc2VwYXJhdG9ycy5wdXNoKHNlcGFyYXRvcik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LCBzZXBhcmF0b3IsIHN0ZXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHN0ZXAubnVtYmVyID0gaW5kZXggKyAxO1xuICAgIH0pO1xuICAgIFxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBWaWV3Q2hpbGQsIFF1ZXJ5TGlzdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgXG4gICAgICAgICBBZnRlckNvbnRlbnRJbml0LCBSZW5kZXJlcjIsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGROYXZTdGVwTGlua0NvbXBvbmVudCB9IGZyb20gJy4uL25hdi1zdGVwLWxpbmsvbmF2LXN0ZXAtbGluay5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoZSBkaXJlY3Rpb25zIHRoYXQgc2Nyb2xsaW5nIGNhbiBnbyBpbiB3aGVuIHRoZSBoZWFkZXIncyB0YWJzIGV4Y2VlZCB0aGUgaGVhZGVyIHdpZHRoLiAnQWZ0ZXInXG4gKiB3aWxsIHNjcm9sbCB0aGUgaGVhZGVyIHRvd2FyZHMgdGhlIGVuZCBvZiB0aGUgdGFicyBsaXN0IGFuZCAnYmVmb3JlJyB3aWxsIHNjcm9sbCB0b3dhcmRzIHRoZVxuICogYmVnaW5uaW5nIG9mIHRoZSBsaXN0LlxuICovXG5leHBvcnQgdHlwZSBTY3JvbGxEaXJlY3Rpb24gPSAnYWZ0ZXInIHwgJ2JlZm9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25hdlt0ZC1zdGVwc11bdmVydGljYWxdJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LXN0ZXBzLXZlcnRpY2FsLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtc3RlcHMtdmVydGljYWwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3RkLXN0ZXBzIHRkLXN0ZXBzLXZlcnRpY2FsJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwc1ZlcnRpY2FsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zZXBhcmF0b3JzOiBIVE1MRWxlbWVudFtdID0gW107XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLy8gYWxsIHRoZSBzdWIgY29tcG9uZW50cywgd2hpY2ggYXJlIHRoZSBpbmRpdmlkdWFsIHN0ZXBzXG4gIEBDb250ZW50Q2hpbGRyZW4oVGROYXZTdGVwTGlua0NvbXBvbmVudCkgX3N0ZXBzOiBRdWVyeUxpc3Q8VGROYXZTdGVwTGlua0NvbXBvbmVudD47XG5cbiAgQFZpZXdDaGlsZCgnc3RlcExpc3QnKSBfc3RlcExpc3Q6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc3RlcHMuY2hhbmdlcy5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fY29uZmlndXJlU3RlcHMoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIHRoaXMuX2NvbmZpZ3VyZVN0ZXBzKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RlcCBsaW5lIHNlcGFyYXRvcnMgYW5kIGRpc3BsYXkgbnVtYmVyc1xuICAgKi9cbiAgcHJpdmF0ZSBfY29uZmlndXJlU3RlcHMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2VwYXJhdG9ycy5mb3JFYWNoKChzZXBhcmF0b3I6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LCBzZXBhcmF0b3IpO1xuICAgIH0pO1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50W10gPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgLy8gc2V0IHRoZSBpbmRleCBudW1iZXIgb2YgdGhlIHN0ZXAgc28gY2FuIGRpc3BsYXkgdGhhdCBudW1iZXIgaW4gY2lyY2xlXG4gICAgc3RlcHNBcnJheS5mb3JFYWNoKChzdGVwOiBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgc3RlcHNBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHNlcGFyYXRvcjogYW55ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNlcGFyYXRvciwgJ3RkLXZlcnRpY2FsLWxpbmUtd3JhcHBlcicpO1xuICAgICAgICBsZXQgc2VwYXJhdG9yQ2hpbGQ6IGFueSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzZXBhcmF0b3JDaGlsZCwgJ3RkLXZlcnRpY2FsLWxpbmUnKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yLCBzZXBhcmF0b3JDaGlsZCk7XG4gICAgICAgIHRoaXMuX3NlcGFyYXRvcnMucHVzaChzZXBhcmF0b3IpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fc3RlcExpc3QubmF0aXZlRWxlbWVudCwgc2VwYXJhdG9yLCBzdGVwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICBzdGVwLm51bWJlciA9IGluZGV4ICsgMTtcbiAgICB9KTtcbiAgICBcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBTY3JvbGxEaXNwYXRjaE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgQ292YWxlbnRDb21tb25Nb2R1bGUgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG4vLyBTdGVwc1xuaW1wb3J0IHsgVGRTdGVwc0NvbXBvbmVudCB9IGZyb20gJy4vc3RlcHMuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU3RlcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3RlcC1oZWFkZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU3RlcEJvZHlDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAtYm9keS9zdGVwLWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU3RlcENvbXBvbmVudCwgVGRTdGVwTGFiZWxEaXJlY3RpdmUsIFRkU3RlcEFjdGlvbnNEaXJlY3RpdmUsXG4gICAgICAgICBUZFN0ZXBTdW1tYXJ5RGlyZWN0aXZlIH0gZnJvbSAnLi9zdGVwLmNvbXBvbmVudCc7XG5cbi8vIE5hdiBTdGVwc1xuaW1wb3J0IHsgVGROYXZTdGVwc0hvcml6b250YWxDb21wb25lbnQgfSBmcm9tICcuL25hdi9uYXYtc3RlcHMtaG9yaXpvbnRhbC9uYXYtc3RlcHMtaG9yaXpvbnRhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGROYXZTdGVwc1ZlcnRpY2FsQ29tcG9uZW50IH0gZnJvbSAnLi9uYXYvbmF2LXN0ZXBzLXZlcnRpY2FsL25hdi1zdGVwcy12ZXJ0aWNhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGROYXZTdGVwTGlua0NvbXBvbmVudCB9IGZyb20gJy4vbmF2L25hdi1zdGVwLWxpbmsvbmF2LXN0ZXAtbGluay5jb21wb25lbnQnO1xuXG5jb25zdCBURF9TVEVQUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkU3RlcHNDb21wb25lbnQsXG4gIFRkU3RlcENvbXBvbmVudCxcbiAgVGRTdGVwSGVhZGVyQ29tcG9uZW50LFxuICBUZFN0ZXBCb2R5Q29tcG9uZW50LFxuICBUZFN0ZXBMYWJlbERpcmVjdGl2ZSxcbiAgVGRTdGVwQWN0aW9uc0RpcmVjdGl2ZSxcbiAgVGRTdGVwU3VtbWFyeURpcmVjdGl2ZSxcbiAgVGROYXZTdGVwc0hvcml6b250YWxDb21wb25lbnQsXG4gIFRkTmF2U3RlcHNWZXJ0aWNhbENvbXBvbmVudCxcbiAgVGROYXZTdGVwTGlua0NvbXBvbmVudCxcblxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGUsXG4gICAgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUsXG4gICAgQ292YWxlbnRDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX1NURVBTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfU1RFUFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50U3RlcHNNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJEaXJlY3RpdmUiLCJUZW1wbGF0ZVJlZiIsIlZpZXdDb250YWluZXJSZWYiLCJUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSIsIm1peGluRGlzYWJsZVJpcHBsZSIsIm1peGluRGlzYWJsZWQiLCJFdmVudEVtaXR0ZXIiLCJjb2VyY2VCb29sZWFuUHJvcGVydHkiLCJUZW1wbGF0ZVBvcnRhbCIsIkNvbXBvbmVudCIsIlZpZXdDaGlsZCIsIkNvbnRlbnRDaGlsZCIsIklucHV0IiwiT3V0cHV0IiwiQ29udGVudENoaWxkcmVuIiwidGRDb2xsYXBzZUFuaW1hdGlvbiIsIkVsZW1lbnRSZWYiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkNoYW5nZURldGVjdG9yUmVmIiwiU3ViamVjdCIsIm1lcmdlIiwiZGlzdGluY3RVbnRpbENoYW5nZWQiLCJvZiIsInRha2VVbnRpbCIsIkxFRlRfQVJST1ciLCJSSUdIVF9BUlJPVyIsIlZpZXdwb3J0UnVsZXIiLCJEaXJlY3Rpb25hbGl0eSIsIk9wdGlvbmFsIiwiUmVuZGVyZXIyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0UmlwcGxlTW9kdWxlIiwiUG9ydGFsTW9kdWxlIiwiU2Nyb2xsRGlzcGF0Y2hNb2R1bGUiLCJDb3ZhbGVudENvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUVGLGFBQWdCLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMxQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdkMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FB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