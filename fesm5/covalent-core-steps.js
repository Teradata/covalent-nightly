import { __extends } from 'tslib';
import { Component, Directive, Input, Output, TemplateRef, ViewChild, ViewContainerRef, ContentChild, EventEmitter, ContentChildren, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Optional, Renderer2, NgModule } from '@angular/core';
import { TemplatePortalDirective, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinDisableRipple, tdCollapseAnimation, CovalentCommonModule } from '@covalent/core/common';
import { Subject, merge, of } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Directionality } from '@angular/cdk/bidi';
import { RIGHT_ARROW, LEFT_ARROW } from '@angular/cdk/keycodes';
import { ViewportRuler, ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

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
        { type: Directive, args: [{
                    selector: '[td-step-label]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdStepLabelDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdStepLabelDirective;
}(TemplatePortalDirective));
var TdStepActionsDirective = /** @class */ (function (_super) {
    __extends(TdStepActionsDirective, _super);
    function TdStepActionsDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdStepActionsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-step-actions]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdStepActionsDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdStepActionsDirective;
}(TemplatePortalDirective));
var TdStepSummaryDirective = /** @class */ (function (_super) {
    __extends(TdStepSummaryDirective, _super);
    function TdStepSummaryDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdStepSummaryDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-step-summary]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdStepSummaryDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdStepSummaryDirective;
}(TemplatePortalDirective));
var TdStepBase = /** @class */ (function () {
    function TdStepBase() {
    }
    return TdStepBase;
}());
/* tslint:disable-next-line */
/** @type {?} */
var _TdStepMixinBase = mixinDisableRipple(mixinDisabled(TdStepBase));
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
        _this.onActivated = new EventEmitter();
        /**
         * deactivated?: function
         * Event emitted when [TdStepComponent] is deactivated.
         */
        _this.onDeactivated = new EventEmitter();
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
            this._setActive(coerceBooleanProperty(active));
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
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
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
        { type: Component, args: [{
                    selector: 'td-step',
                    inputs: ['disabled', 'disableRipple'],
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"
                }] }
    ];
    /** @nocollapse */
    TdStepComponent.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    TdStepComponent.propDecorators = {
        _content: [{ type: ViewChild, args: [TemplateRef,] }],
        stepLabel: [{ type: ContentChild, args: [TdStepLabelDirective,] }],
        stepActions: [{ type: ContentChild, args: [TdStepActionsDirective,] }],
        stepSummary: [{ type: ContentChild, args: [TdStepSummaryDirective,] }],
        label: [{ type: Input, args: ['label',] }],
        sublabel: [{ type: Input, args: ['sublabel',] }],
        active: [{ type: Input, args: ['active',] }],
        state: [{ type: Input, args: ['state',] }],
        onActivated: [{ type: Output, args: ['activated',] }],
        onDeactivated: [{ type: Output, args: ['deactivated',] }]
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
        this.onStepChange = new EventEmitter();
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
        { type: Component, args: [{
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
        stepsContent: [{ type: ContentChildren, args: [TdStepComponent,] }],
        mode: [{ type: Input, args: ['mode',] }],
        onStepChange: [{ type: Output, args: ['stepChange',] }]
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
var _TdStepHeaderMixinBase = mixinDisableRipple(mixinDisabled(TdStepHeaderBase));
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
        { type: Component, args: [{
                    selector: 'td-step-header',
                    inputs: ['disabled', 'disableRipple'],
                    template: "<div class=\"td-step-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled ? -1 : 0\">\n  <div class=\"td-circle\"\n      [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n      [class.mat-active]=\"active && !disabled\"\n      *ngIf=\"!isRequired() && !isComplete()\">\n    <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span>\n  </div>\n  <div class=\"td-complete\" *ngIf=\"isComplete()\">\n    <mat-icon class=\"mat-complete\">check_circle</mat-icon>\n  </div>\n  <div class=\"td-triangle\"\n      [class.bg-muted]=\"disabled\"\n      *ngIf=\"isRequired()\">\n    <mat-icon class=\"mat-warn\">warning</mat-icon>\n  </div>\n  <div class=\"td-step-label-wrapper\"\n        [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n        [class.mat-warn]=\"isRequired() && !disabled\">\n    <div class=\"td-step-label\">\n      <ng-content select=\"[td-step-header-label]\"></ng-content>\n    </div>\n    <div class=\"td-step-sublabel\">\n      <ng-content select=\"[td-step-header-sublabel]\"></ng-content>\n    </div>\n  </div>\n  <span class=\"td-step-header-separator\"></span>\n  <mat-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</mat-icon>\n</div>",
                    styles: [".td-step-header{position:relative;outline:0;min-width:120px;height:72px;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.td-step-header:hover:not(.mat-disabled){cursor:pointer}.td-step-header mat-icon.td-edit-icon{margin:0 8px}.td-step-header mat-icon.mat-warn{font-size:24px;height:24px;width:24px}.td-step-header mat-icon.mat-complete{position:relative;left:-2px;top:2px;font-size:28px;height:24px;width:24px}.td-step-header .td-circle{height:24px;width:24px;line-height:24px;border-radius:99%;text-align:center;-ms-flex:none;flex:none}.td-step-header .td-circle mat-icon{margin-top:2px;font-weight:700}.td-step-header .td-triangle>mat-icon{font-size:25px}::ng-deep :not([dir=rtl]) .td-step-header .td-circle,::ng-deep :not([dir=rtl]) .td-step-header .td-complete,::ng-deep :not([dir=rtl]) .td-step-header .td-triangle{margin-left:8px;margin-right:0}::ng-deep [dir=rtl] .td-step-header .td-circle,::ng-deep [dir=rtl] .td-step-header .td-complete,::ng-deep [dir=rtl] .td-step-header .td-triangle{margin-left:0;margin-right:8px}.td-step-header .td-circle,.td-step-header .td-complete{font-size:14px}.td-step-header .td-step-label-wrapper{padding-left:8px;padding-right:8px}.td-step-header .td-step-header-separator{-ms-flex:1;flex:1;box-sizing:border-box}"]
                }] }
    ];
    TdStepHeaderComponent.propDecorators = {
        number: [{ type: Input, args: ['number',] }],
        active: [{ type: Input, args: ['active',] }],
        state: [{ type: Input, args: ['state',] }]
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
         */
        function () {
            return this.contentRef &&
                (this.contentRef.nativeElement.children.length > 0 || !!this.contentRef.nativeElement.textContent.trim());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepBodyComponent.prototype, "hasActions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.actionsRef &&
                (this.actionsRef.nativeElement.children.length > 0 || !!this.actionsRef.nativeElement.textContent.trim());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepBodyComponent.prototype, "hasSummary", {
        get: /**
         * @return {?}
         */
        function () {
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
        { type: Component, args: [{
                    selector: 'td-step-body',
                    template: "<ng-content></ng-content>\n<div class=\"td-step-body\">\n  <div class=\"td-step-content-wrapper\"\n       [@tdCollapse]=\"!active\">\n    <div #contentRef cdkScrollable [class.td-step-content]=\"hasContent\">\n      <ng-content select=\"[td-step-body-content]\"></ng-content>\n    </div>\n    <div #actionsRef\n         [class.td-step-actions]=\"hasActions\">\n      <ng-content select=\"[td-step-body-actions]\"></ng-content>\n    </div>\n  </div>\n  <div #summaryRef\n       [@tdCollapse]=\"active || !isComplete()\"\n       [class.td-step-summary]=\"hasSummary\">\n    <ng-content select=\"[td-step-body-summary]\"></ng-content>\n  </div>\n</div>",
                    animations: [
                        tdCollapseAnimation,
                    ],
                    styles: [":host{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}:host .td-step-body{overflow-x:hidden;-ms-flex:1;flex:1;box-sizing:border-box}:host .td-step-body .td-step-content-wrapper.ng-animating,:host .td-step-body .td-step-summary.ng-animating{overflow:hidden}:host .td-step-body .td-step-content{overflow-x:auto}:host .td-step-body .td-step-actions{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}"]
                }] }
    ];
    TdStepBodyComponent.propDecorators = {
        contentRef: [{ type: ViewChild, args: ['contentRef', { read: ElementRef },] }],
        actionsRef: [{ type: ViewChild, args: ['actionsRef', { read: ElementRef },] }],
        summaryRef: [{ type: ViewChild, args: ['summaryRef', { read: ElementRef },] }],
        active: [{ type: Input, args: ['active',] }],
        state: [{ type: Input, args: ['state',] }]
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
            this._active = coerceBooleanProperty(active);
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
        { type: Component, args: [{
                    selector: '[td-step-link],[tdStepLink]',
                    template: "<td-step-header class=\"td-step-header-wrapper\"\n                [number]=\"number\"\n                [active]=\"active\"\n                [disableRipple]=\"disableRipple || disabled\"\n                [disabled]=\"disabled\" \n                [state]=\"state\">\n  <ng-template td-step-header-label [ngIf]=\"true\">{{label}}</ng-template>\n  <ng-template td-step-header-sublabel [ngIf]=\"true\">{{sublabel | truncate:30}}</ng-template>\n  <ng-content></ng-content>\n</td-step-header>",
                    inputs: ['disabled', 'disableRipple'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
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
    TdNavStepLinkComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    TdNavStepLinkComponent.propDecorators = {
        state: [{ type: Input, args: ['state',] }],
        label: [{ type: Input, args: ['label',] }],
        sublabel: [{ type: Input, args: ['sublabel',] }],
        active: [{ type: Input, args: ['active',] }]
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
        this._destroyed = new Subject();
        this._widthSubject = new Subject();
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
            var element = ((/** @type {?} */ (this._elementRef.nativeElement)));
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
        merge(this._widthSubject.asObservable().pipe(distinctUntilChanged()), this._viewportRuler.change(150), this._dir ? this._dir.change : of(undefined), this._steps.changes).pipe(takeUntil(this._destroyed)).subscribe(function () {
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
            case LEFT_ARROW:
                this._scrollHeader('before');
                event.preventDefault();
                break;
            case RIGHT_ARROW:
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
        function () { return this._scrollDistance; },
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
        { type: Component, args: [{
                    selector: 'nav[td-steps][horizontal]',
                    template: "<div class=\"td-steps-header\">\n  <div class=\"td-step-header-pagination td-step-header-pagination-before mat-elevation-z4\"\n        aria-hidden=\"true\"\n        mat-ripple [matRippleDisabled]=\"_disableScrollBefore\"\n        [class.td-step-header-pagination-disabled]=\"_disableScrollBefore\"\n        (click)=\"_scrollHeader('before')\">\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n  <div #stepListContainer class=\"td-steps-header-container\" (keydown)=\"_handleKeydown($event)\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"td-step-header-pagination td-step-header-pagination-after mat-elevation-z4\"\n        aria-hidden=\"true\"\n        mat-ripple [matRippleDisabled]=\"_disableScrollAfter\"\n        [class.td-step-header-pagination-disabled]=\"_disableScrollAfter\"\n        (click)=\"_scrollHeader('after')\">\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
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
    TdNavStepsHorizontalComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewportRuler },
        { type: Directionality, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    TdNavStepsHorizontalComponent.propDecorators = {
        _steps: [{ type: ContentChildren, args: [TdNavStepLinkComponent,] }],
        _stepListContainer: [{ type: ViewChild, args: ['stepListContainer',] }],
        _stepList: [{ type: ViewChild, args: ['stepList',] }]
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
        this._destroyed = new Subject();
    }
    /**
     * @return {?}
     */
    TdNavStepsVerticalComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._steps.changes.pipe(takeUntil(this._destroyed)).subscribe(function () {
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
        { type: Component, args: [{
                    selector: 'nav[td-steps][vertical]',
                    template: "<div class=\"td-steps-header\">\n  <div class=\"td-steps-header-container\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    /* tslint:disable-next-line */
                    host: {
                        class: 'td-steps td-steps-vertical',
                    },
                    styles: [".td-vertical-line-wrapper{position:relative}.td-vertical-line-wrapper .td-vertical-line{position:absolute;top:-16px;height:34px;border-left-width:1px;border-left-style:solid}::ng-deep :not([dir=rtl]) .td-vertical-line-wrapper .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line-wrapper .td-vertical-line{left:auto;right:20px}"]
                }] }
    ];
    /** @nocollapse */
    TdNavStepsVerticalComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    TdNavStepsVerticalComponent.propDecorators = {
        _steps: [{ type: ContentChildren, args: [TdNavStepLinkComponent,] }],
        _stepList: [{ type: ViewChild, args: ['stepList',] }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatIconModule,
                        MatRippleModule,
                        PortalModule,
                        ScrollDispatchModule,
                        CovalentCommonModule,
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

export { CovalentStepsModule, StepState, TdStepLabelDirective, TdStepActionsDirective, TdStepSummaryDirective, TdStepBase, _TdStepMixinBase, TdStepComponent, StepMode, TdStepsComponent, TdStepBodyComponent, TdStepHeaderBase, _TdStepHeaderMixinBase, TdStepHeaderComponent, TdNavStepLinkComponent as ɵb, TdNavStepsHorizontalComponent as ɵa, TdNavStepsVerticalComponent as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1zdGVwcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvc3RlcC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL3N0ZXBzL3N0ZXBzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvc3RlcC1oZWFkZXIvc3RlcC1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9zdGVwcy9zdGVwLWJvZHkvc3RlcC1ib2R5LmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvbmF2L25hdi1zdGVwLWxpbmsvbmF2LXN0ZXAtbGluay5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL3N0ZXBzL25hdi9uYXYtc3RlcHMtaG9yaXpvbnRhbC9uYXYtc3RlcHMtaG9yaXpvbnRhbC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL3N0ZXBzL25hdi9uYXYtc3RlcHMtdmVydGljYWwvbmF2LXN0ZXBzLXZlcnRpY2FsLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvc3RlcHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLFxuICAgICAgICAgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUsIFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCwgSUNhbkRpc2FibGVSaXBwbGUsIG1peGluRGlzYWJsZVJpcHBsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBlbnVtIFN0ZXBTdGF0ZSB7XG4gIE5vbmUgPSAnbm9uZScsXG4gIFJlcXVpcmVkID0gJ3JlcXVpcmVkJyxcbiAgQ29tcGxldGUgPSAnY29tcGxldGUnLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtc3RlcC1sYWJlbF1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkU3RlcExhYmVsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtc3RlcC1hY3Rpb25zXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRTdGVwQWN0aW9uc0RpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLXN0ZXAtc3VtbWFyeV1uZy10ZW1wbGF0ZScsXG59KVxuZXhwb3J0IGNsYXNzIFRkU3RlcFN1bW1hcnlEaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZFN0ZXBCYXNlIHt9XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZFN0ZXBNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVSaXBwbGUobWl4aW5EaXNhYmxlZChUZFN0ZXBCYXNlKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXN0ZXAnLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZGlzYWJsZVJpcHBsZSddLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkU3RlcENvbXBvbmVudCBleHRlbmRzIF9UZFN0ZXBNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkluaXQsIElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSB7XG5cbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3N0YXRlOiBTdGVwU3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcblxuICBwcml2YXRlIF9jb250ZW50UG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuICBnZXQgc3RlcENvbnRlbnQoKTogVGVtcGxhdGVQb3J0YWw8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRQb3J0YWw7XG4gIH1cblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBfY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChUZFN0ZXBMYWJlbERpcmVjdGl2ZSkgc3RlcExhYmVsOiBUZFN0ZXBMYWJlbERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChUZFN0ZXBBY3Rpb25zRGlyZWN0aXZlKSBzdGVwQWN0aW9uczogVGRTdGVwQWN0aW9uc0RpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChUZFN0ZXBTdW1tYXJ5RGlyZWN0aXZlKSBzdGVwU3VtbWFyeTogVGRTdGVwU3VtbWFyeURpcmVjdGl2ZTtcblxuICAvKipcbiAgICogbGFiZWw/OiBzdHJpbmdcbiAgICogU2V0cyBsYWJlbCBvZiBbVGRTdGVwQ29tcG9uZW50XSBoZWFkZXIuXG4gICAqIERlZmF1bHRzIHRvICdTdGVwICMnXG4gICAqL1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICogU2V0cyBzdWJsYWJlbCBvZiBbVGRTdGVwQ29tcG9uZW50XSBoZWFkZXIuXG4gICAqL1xuICBASW5wdXQoJ3N1YmxhYmVsJykgc3VibGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBUb2dnbGVzIFtUZFN0ZXBDb21wb25lbnRdIGJldHdlZW4gYWN0aXZlL2RlYWN0aXZlLlxuICAgKi9cbiAgQElucHV0KCdhY3RpdmUnKVxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NldEFjdGl2ZShjb2VyY2VCb29sZWFuUHJvcGVydHkoYWN0aXZlKSk7XG4gIH1cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0YXRlPzogU3RlcFN0YXRlIG9yIFsnbm9uZScgfCAncmVxdWlyZWQnIHwgJ2NvbXBsZXRlJ11cbiAgICogU2V0cyBzdGF0ZSBvZiBbVGRTdGVwQ29tcG9uZW50XSBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtTdGVwU3RhdGUuTm9uZSB8ICdub25lJ10uXG4gICAqL1xuICBASW5wdXQoJ3N0YXRlJylcbiAgc2V0IHN0YXRlKHN0YXRlOiBTdGVwU3RhdGUpIHtcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICBjYXNlIFN0ZXBTdGF0ZS5Db21wbGV0ZTpcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTdGVwU3RhdGUuQ29tcGxldGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTdGVwU3RhdGUuUmVxdWlyZWQ6XG4gICAgICAgIHRoaXMuX3N0YXRlID0gU3RlcFN0YXRlLlJlcXVpcmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX3N0YXRlID0gU3RlcFN0YXRlLk5vbmU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBnZXQgc3RhdGUoKTogU3RlcFN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogYWN0aXZhdGVkPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIFtUZFN0ZXBDb21wb25lbnRdIGlzIGFjdGl2YXRlZC5cbiAgICovXG4gIEBPdXRwdXQoJ2FjdGl2YXRlZCcpIG9uQWN0aXZhdGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIGRlYWN0aXZhdGVkPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIFtUZFN0ZXBDb21wb25lbnRdIGlzIGRlYWN0aXZhdGVkLlxuICAgKi9cbiAgQE91dHB1dCgnZGVhY3RpdmF0ZWQnKSBvbkRlYWN0aXZhdGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuX2NvbnRlbnQsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBhY3RpdmUgc3RhdGUgb2YgW1RkU3RlcENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICB0b2dnbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEFjdGl2ZSghdGhpcy5fYWN0aXZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBbVGRTdGVwQ29tcG9uZW50XVxuICAgKiByZXR1bnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIG9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEFjdGl2ZSh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgW1RkU3RlcENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBjbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0QWN0aXZlKGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLkNvbXBsZXRlIHwgJ2NvbXBsZXRlJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlID09PSBTdGVwU3RhdGUuQ29tcGxldGU7XG4gIH1cblxuICAvKiogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIGRpc2FibGVkIHZhbHVlIGNoYW5nZXMgKi9cbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHYgJiYgdGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX29uRGVhY3RpdmF0ZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNoYW5nZSBhY3RpdmUgc3RhdGUgaW50ZXJuYWxseSBhbmQgZW1pdCB0aGUgW29uQWN0aXZhdGVkXSBldmVudCBpZiAndHJ1ZScgb3IgW29uRGVhY3RpdmF0ZWRdXG4gICAqIGV2ZW50IGlmICdmYWxzZScuIChCbG9ja2VkIGlmIFtkaXNhYmxlZF0gaXMgJ3RydWUnKVxuICAgKiByZXR1cm5zIHRydWUgaWYgc3VjY2Vzc2Z1bGx5IGNoYW5nZWQgc3RhdGVcbiAgICovXG4gIHByaXZhdGUgX3NldEFjdGl2ZShuZXdBY3RpdmU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWN0aXZlICE9PSBuZXdBY3RpdmUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IG5ld0FjdGl2ZTtcbiAgICAgIGlmIChuZXdBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fb25BY3RpdmF0ZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX29uRGVhY3RpdmF0ZWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9vbkFjdGl2YXRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uQWN0aXZhdGVkLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uRGVhY3RpdmF0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkRlYWN0aXZhdGVkLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZFN0ZXBDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJU3RlcENoYW5nZUV2ZW50IHtcbiAgbmV3U3RlcDogVGRTdGVwQ29tcG9uZW50O1xuICBwcmV2U3RlcDogVGRTdGVwQ29tcG9uZW50O1xufVxuXG5leHBvcnQgZW51bSBTdGVwTW9kZSB7XG4gIFZlcnRpY2FsID0gJ3ZlcnRpY2FsJyxcbiAgSG9yaXpvbnRhbCA9ICdob3Jpem9udGFsJyxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtc3RlcHMnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwcy5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXBzLmNvbXBvbmVudC5odG1sJyxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3RkLXN0ZXBzJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGRTdGVwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgcHJpdmF0ZSBfc3ViY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXTtcbiAgcHJpdmF0ZSBfbW9kZTogU3RlcE1vZGUgPSBTdGVwTW9kZS5WZXJ0aWNhbDtcbiAgcHJpdmF0ZSBfc3RlcHM6IFF1ZXJ5TGlzdDxUZFN0ZXBDb21wb25lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRTdGVwQ29tcG9uZW50KVxuICBzZXQgc3RlcHNDb250ZW50KHN0ZXBzOiBRdWVyeUxpc3Q8VGRTdGVwQ29tcG9uZW50Pikge1xuICAgIGlmIChzdGVwcykge1xuICAgICAgdGhpcy5fc3RlcHMgPSBzdGVwcztcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3RlcHMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3RlcHMoKTogVGRTdGVwQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gIH1cbiAgcHJldlN0ZXA6IFRkU3RlcENvbXBvbmVudDtcblxuICAvKipcbiAgICogbW9kZT86IFN0ZXBNb2RlIG9yIFtcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIl1cbiAgICogRGVmaW5lcyBpZiB0aGUgbW9kZSBvZiB0aGUgW1RkU3RlcHNDb21wb25lbnRdLiAgRGVmYXVsdHMgdG8gW1N0ZXBNb2RlLlZlcnRpY2FsIHwgXCJ2ZXJ0aWNhbFwiXVxuICAgKi9cbiAgQElucHV0KCdtb2RlJylcbiAgc2V0IG1vZGUobW9kZTogU3RlcE1vZGUpIHtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgU3RlcE1vZGUuSG9yaXpvbnRhbDpcbiAgICAgICAgdGhpcy5fbW9kZSA9IFN0ZXBNb2RlLkhvcml6b250YWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fbW9kZSA9IFN0ZXBNb2RlLlZlcnRpY2FsO1xuICAgIH1cbiAgfVxuICBnZXQgbW9kZSgpOiBTdGVwTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICAvKipcbiAgICogc3RlcENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIFtvblN0ZXBDaGFuZ2VdIGV2ZW50IGlzIGVtaXR0ZWQuXG4gICAqIEVtaXRzIGFuIFtJU3RlcENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzdGVwQ2hhbmdlJykgb25TdGVwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SVN0ZXBDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElTdGVwQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVkIGFmdGVyIGNvbnRlbnQgaXMgaW5pdGlhbGl6ZWQsIGxvb3BzIHRocm91Z2ggYW55IFtUZFN0ZXBDb21wb25lbnRdIGNoaWxkcmVuIGVsZW1lbnRzLFxuICAgKiBhc3NpZ25zIHRoZW0gYSBudW1iZXIgYW5kIHN1YnNjcmliZXMgYXMgYW4gb2JzZXJ2ZXIgdG8gdGhlaXIgW29uQWN0aXZhdGVkXSBldmVudC5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZWdpc3RlclN0ZXBzKCk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmVzIGZyb20gW1RkU3RlcENvbXBvbmVudF0gY2hpbGRyZW4gZWxlbWVudHMgd2hlbiBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVyZWdpc3RlclN0ZXBzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW21vZGVdIGVxdWFscyB0byBbU3RlcE1vZGUuSG9yaXpvbnRhbCB8ICdob3Jpem9udGFsJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzSG9yaXpvbnRhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZSA9PT0gU3RlcE1vZGUuSG9yaXpvbnRhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbbW9kZV0gZXF1YWxzIHRvIFtTdGVwTW9kZS5WZXJ0aWNhbCB8ICd2ZXJ0aWNhbCddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc1ZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tb2RlID09PSBTdGVwTW9kZS5WZXJ0aWNhbDtcbiAgfVxuXG4gIGFyZVN0ZXBzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGVwcy5maWx0ZXIoKHN0ZXA6IFRkU3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgcmV0dXJuIHN0ZXAuYWN0aXZlO1xuICAgIH0pLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHMgcHJldmlvdXMgYW5kIG5ldyBbVGRTdGVwQ29tcG9uZW50XSBudW1iZXJzIGluIGFuIG9iamVjdCB0aGF0IGltcGxlbWVudHMgW0lTdGVwQ2hhbmdlRXZlbnRdXG4gICAqIGFuZCBlbWl0cyBbb25TdGVwQ2hhbmdlXSBldmVudC5cbiAgICovXG4gIHByaXZhdGUgX29uU3RlcFNlbGVjdGlvbihzdGVwOiBUZFN0ZXBDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmV2U3RlcCAhPT0gc3RlcCkge1xuICAgICAgbGV0IHByZXZTdGVwOiBUZFN0ZXBDb21wb25lbnQgPSB0aGlzLnByZXZTdGVwO1xuICAgICAgdGhpcy5wcmV2U3RlcCA9IHN0ZXA7XG4gICAgICBsZXQgZXZlbnQ6IElTdGVwQ2hhbmdlRXZlbnQgPSB7XG4gICAgICAgIG5ld1N0ZXA6IHN0ZXAsXG4gICAgICAgIHByZXZTdGVwOiBwcmV2U3RlcCxcbiAgICAgIH07XG4gICAgICB0aGlzLl9kZWFjdGl2YXRlQWxsQnV0KHN0ZXApO1xuICAgICAgdGhpcy5vblN0ZXBDaGFuZ2UuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvb3BzIHRocm91Z2ggW1RkU3RlcENvbXBvbmVudF0gY2hpbGRyZW4gZWxlbWVudHMgYW5kIGRlYWN0aXZhdGVzIHRoZW0gaWdub3JpbmcgdGhlIG9uZSBwYXNzZWQgYXMgYW4gYXJndW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9kZWFjdGl2YXRlQWxsQnV0KGFjdGl2ZVN0ZXA6IFRkU3RlcENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3N0ZXBzLmZpbHRlcigoc3RlcDogVGRTdGVwQ29tcG9uZW50KSA9PiBzdGVwICE9PSBhY3RpdmVTdGVwKVxuICAgIC5mb3JFYWNoKChzdGVwOiBUZFN0ZXBDb21wb25lbnQpID0+IHtcbiAgICAgIHN0ZXAuYWN0aXZlID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWdpc3RlclN0ZXBzKCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YmNyaXB0aW9ucyA9IFtdO1xuICAgIHRoaXMuX3N0ZXBzLnRvQXJyYXkoKS5mb3JFYWNoKChzdGVwOiBUZFN0ZXBDb21wb25lbnQpID0+IHtcbiAgICAgIGxldCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IHN0ZXAub25BY3RpdmF0ZWQuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fb25TdGVwU2VsZWN0aW9uKHN0ZXApO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zdWJjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVyZWdpc3RlclN0ZXBzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdWJjcmlwdGlvbnMpIHtcbiAgICAgIHRoaXMuX3N1YmNyaXB0aW9ucy5mb3JFYWNoKChzdWJzOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgc3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zdWJjcmlwdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkLCBJQ2FuRGlzYWJsZVJpcHBsZSwgbWl4aW5EaXNhYmxlUmlwcGxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuaW1wb3J0IHsgU3RlcFN0YXRlIH0gZnJvbSAnLi4vc3RlcC5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgVGRTdGVwSGVhZGVyQmFzZSB7fVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRTdGVwSGVhZGVyTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlUmlwcGxlKG1peGluRGlzYWJsZWQoVGRTdGVwSGVhZGVyQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1zdGVwLWhlYWRlcicsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICdkaXNhYmxlUmlwcGxlJ10sXG4gIHN0eWxlVXJsczogWycuL3N0ZXAtaGVhZGVyLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFN0ZXBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBfVGRTdGVwSGVhZGVyTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcblxuICAvKipcbiAgICogTnVtYmVyIGFzc2lnbmVkIHRvIFtUZFN0ZXBIZWFkZXJDb21wb25lbnRdLlxuICAgKi9cbiAgQElucHV0KCdudW1iZXInKSBudW1iZXI6IG51bWJlcjtcblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBTZXRzIGZvciBhY3RpdmUvaW5hY3RpdmUgc3RhdGVzIG9uIGhlYWRlci5cbiAgICovXG4gIEBJbnB1dCgnYWN0aXZlJykgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBzdGF0ZT86IFN0ZXBTdGF0ZSBvciBbJ25vbmUnIHwgJ3JlcXVpcmVkJyB8ICdjb21wbGV0ZSddXG4gICAqIFNldHMgc3R5bGVzIGZvciBzdGF0ZSBvZiBoZWFkZXIuXG4gICAqIERlZmF1bHRzIHRvIFtTdGVwU3RhdGUuTm9uZSB8ICdub25lJ10uXG4gICAqL1xuICBASW5wdXQoJ3N0YXRlJykgc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLkNvbXBsZXRlIHwgJ2NvbXBsZXRlJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0ZXBTdGF0ZS5Db21wbGV0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLlJlcXVpcmVkIHwgJ3JlcXVpcmVkJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0ZXBTdGF0ZS5SZXF1aXJlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0ZXBTdGF0ZSB9IGZyb20gJy4uL3N0ZXAuY29tcG9uZW50JztcblxuaW1wb3J0IHsgdGRDb2xsYXBzZUFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXN0ZXAtYm9keScsXG4gIHN0eWxlVXJsczogWycuL3N0ZXAtYm9keS5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAtYm9keS5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0ZENvbGxhcHNlQW5pbWF0aW9uLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZFN0ZXBCb2R5Q29tcG9uZW50IHtcblxuICBAVmlld0NoaWxkKCdjb250ZW50UmVmJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGNvbnRlbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IGhhc0NvbnRlbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudFJlZiAmJlxuICAgICAgICAgICh0aGlzLmNvbnRlbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwIHx8ICEhdGhpcy5jb250ZW50UmVmLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2FjdGlvbnNSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYWN0aW9uc1JlZjogRWxlbWVudFJlZjtcblxuICBnZXQgaGFzQWN0aW9ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zUmVmICYmXG4gICAgICAgICAgKHRoaXMuYWN0aW9uc1JlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgISF0aGlzLmFjdGlvbnNSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnc3VtbWFyeVJlZicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzdW1tYXJ5UmVmOiBFbGVtZW50UmVmO1xuXG4gIGdldCBoYXNTdW1tYXJ5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN1bW1hcnlSZWYgJiZcbiAgICAgICAgICAodGhpcy5zdW1tYXJ5UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fCAhIXRoaXMuc3VtbWFyeVJlZi5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSk7XG4gIH1cblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBTZXRzIGZvciBhY3RpdmUvaW5hY3RpdmUgc3RhdGVzIG9uIGJvZHkuXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogc3RhdGU/OiBTdGVwU3RhdGUgb3IgWydub25lJyB8ICdyZXF1aXJlZCcgfCAnY29tcGxldGUnXVxuICAgKiBTZXRzIHN0eWxlcyBmb3Igc3RhdGUgb2YgYm9keS5cbiAgICogRGVmYXVsdHMgdG8gW1N0ZXBTdGF0ZS5Ob25lIHwgJ25vbmUnXS5cbiAgICovXG4gIEBJbnB1dCgnc3RhdGUnKSBzdGF0ZTogU3RlcFN0YXRlID0gU3RlcFN0YXRlLk5vbmU7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgJ3RydWUnIGlmIFtzdGF0ZV0gZXF1YWxzIHRvIFtTdGVwU3RhdGUuQ29tcGxldGUgfCAnY29tcGxldGUnXSwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgaXNDb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gU3RlcFN0YXRlLkNvbXBsZXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcbmltcG9ydCB7IF9UZFN0ZXBNaXhpbkJhc2UsIFN0ZXBTdGF0ZSB9IGZyb20gJy4uLy4uL3N0ZXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW3RkLXN0ZXAtbGlua10sW3RkU3RlcExpbmtdJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LXN0ZXAtbGluay5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LXN0ZXAtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICdkaXNhYmxlUmlwcGxlJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgICdbYXR0ci50YWJpbmRleF0nOiAnZGlzYWJsZWQgPyAtMSA6IDAnLFxuICAgICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQgfHwgbnVsbCcsXG4gICAgJ1tjbGFzcy5tYXQtZGlzYWJsZWRdJzogJ2Rpc2FibGVkIHx8IG51bGwnLFxuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGROYXZTdGVwTGlua0NvbXBvbmVudCBleHRlbmRzIF9UZFN0ZXBNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ2FuRGlzYWJsZSwgSUNhbkRpc2FibGVSaXBwbGUge1xuXG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zdGF0ZTogU3RlcFN0YXRlID0gU3RlcFN0YXRlLk5vbmU7XG5cbiAgLy8gTnVtYmVyIHRvIGRpc3BsYXkgaW4gc3RlcCBoZWFkZXJcbiAgbnVtYmVyOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIHN0YXRlPzogU3RlcFN0YXRlIG9yIFsnbm9uZScgfCAncmVxdWlyZWQnIHwgJ2NvbXBsZXRlJ11cbiAgICogU2V0cyBzdGF0ZSBvZiBjb21wb25lbnQgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbU3RlcFN0YXRlLk5vbmUgfCAnbm9uZSddLlxuICAgKi9cbiAgQElucHV0KCdzdGF0ZScpXG4gIHNldCBzdGF0ZShzdGF0ZTogU3RlcFN0YXRlKSB7XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgY2FzZSBTdGVwU3RhdGUuQ29tcGxldGU6XG4gICAgICAgIHRoaXMuX3N0YXRlID0gU3RlcFN0YXRlLkNvbXBsZXRlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU3RlcFN0YXRlLlJlcXVpcmVkOlxuICAgICAgICB0aGlzLl9zdGF0ZSA9IFN0ZXBTdGF0ZS5SZXF1aXJlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9zdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZ2V0IHN0YXRlKCk6IFN0ZXBTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIGxhYmVsPzogc3RyaW5nXG4gICAqIExhYmVsIHRvIGRpc3BsYXkgaW4gc3RlcCBoZWFkZXJcbiAgICogRGVmYXVsdHMgdG8gZW1wdHlcbiAgICovXG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzdWJsYWJlbD86IHN0cmluZ1xuICAgKiBTdWJsYWJlbCB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gICAqIERlZmF1bHRzIHRvIGVtcHR5XG4gICAqL1xuICBASW5wdXQoJ3N1YmxhYmVsJykgc3VibGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBUb2dnbGVzIGNvbXBvbmVudCBiZXR3ZWVuIGFjdGl2ZS9kZWFjdGl2ZS5cbiAgICovXG4gIEBJbnB1dCgnYWN0aXZlJylcbiAgc2V0IGFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY3RpdmUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoYWN0aXZlKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIF9oYW5kbGVDbGljayhjbGljazogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgY2xpY2sucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNsaWNrLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9wdGlvbmFsLCBDb250ZW50Q2hpbGRyZW4sIFZpZXdDaGlsZCwgUXVlcnlMaXN0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBcbiAgICAgICAgIEFmdGVyQ29udGVudEluaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgUklHSFRfQVJST1csIExFRlRfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgVmlld3BvcnRSdWxlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuXG5pbXBvcnQgeyBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi4vbmF2LXN0ZXAtbGluay9uYXYtc3RlcC1saW5rLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIGRpcmVjdGlvbnMgdGhhdCBzY3JvbGxpbmcgY2FuIGdvIGluIHdoZW4gdGhlIGhlYWRlcidzIHRhYnMgZXhjZWVkIHRoZSBoZWFkZXIgd2lkdGguICdBZnRlcidcbiAqIHdpbGwgc2Nyb2xsIHRoZSBoZWFkZXIgdG93YXJkcyB0aGUgZW5kIG9mIHRoZSB0YWJzIGxpc3QgYW5kICdiZWZvcmUnIHdpbGwgc2Nyb2xsIHRvd2FyZHMgdGhlXG4gKiBiZWdpbm5pbmcgb2YgdGhlIGxpc3QuXG4gKi9cbmV4cG9ydCB0eXBlIFNjcm9sbERpcmVjdGlvbiA9ICdhZnRlcicgfCAnYmVmb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmF2W3RkLXN0ZXBzXVtob3Jpem9udGFsXScsXG4gIHN0eWxlVXJsczogWycuL25hdi1zdGVwcy1ob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtc3RlcHMtaG9yaXpvbnRhbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndGQtc3RlcHMgdGQtc3RlcHMtaG9yaXpvbnRhbCcsXG4gICAgJ1tjbGFzcy50ZC1zdGVwLWhlYWRlci1wYWdpbmF0aW9uLWNvbnRyb2xzLWVuYWJsZWRdJzogJ19zaG93UGFnaW5hdGlvbkNvbnRyb2xzJyxcbiAgICAnW2NsYXNzLnRkLXN0ZXAtaGVhZGVyLXJ0bF0nOiBcIl9nZXRMYXlvdXREaXJlY3Rpb24oKSA9PSAncnRsJ1wiLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdlN0ZXBzSG9yaXpvbnRhbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc2VwYXJhdG9yczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgX3Njcm9sbERpc3RhbmNlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9zY3JvbGxEaXN0YW5jZUNoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogV2hldGhlciB0aGUgY29udHJvbHMgZm9yIHBhZ2luYXRpb24gc2hvdWxkIGJlIGRpc3BsYXllZCAqL1xuICBfc2hvd1BhZ2luYXRpb25Db250cm9sczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzdGVwIGxpc3QgY2FuIGJlIHNjcm9sbGVkIG1vcmUgdG93YXJkcyB0aGUgZW5kLiAqL1xuICBfZGlzYWJsZVNjcm9sbEFmdGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKiogV2hldGhlciB0aGUgc3RlcCBsaXN0IGNhbiBiZSBzY3JvbGxlZCBtb3JlIHRvd2FyZHMgdGhlIGJlZ2lubmluZy4gKi9cbiAgX2Rpc2FibGVTY3JvbGxCZWZvcmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vIGFsbCB0aGUgc3ViIGNvbXBvbmVudHMsIHdoaWNoIGFyZSB0aGUgaW5kaXZpZHVhbCBzdGVwc1xuICBAQ29udGVudENoaWxkcmVuKFRkTmF2U3RlcExpbmtDb21wb25lbnQpIF9zdGVwczogUXVlcnlMaXN0PFRkTmF2U3RlcExpbmtDb21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGQoJ3N0ZXBMaXN0Q29udGFpbmVyJykgX3N0ZXBMaXN0Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzdGVwTGlzdCcpIF9zdGVwTGlzdDogRWxlbWVudFJlZjtcblxuICAvKlxuICAqIEN1cnJlbnQgd2lkdGggb2YgdGhlIGVsZW1lbnQgY29udGFpbmVyXG4gICovXG4gIGdldCBuYXRpdmVFbGVtZW50V2lkdGgoKTogbnVtYmVyIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cbiAgICAvLyBOZWVkIHRvIHRha2UgaW50byBhY2NvdW50IGJvcmRlciwgbWFyZ2luIGFuZCBwYWRkaW5nIHRoYXQgbWlnaHQgYmUgYXJvdW5kIGFsbCB0aGUgY3J1bWJzXG4gICAgbGV0IHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgbGV0IGJvcmRlckxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlckxlZnQsIDEwKTtcbiAgICBsZXQgYm9yZGVyUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlclJpZ2h0LCAxMCk7XG4gICAgbGV0IG1hcmdpbkxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpbkxlZnQsIDEwKTtcbiAgICBsZXQgbWFyZ2luUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0LCAxMCk7XG4gICAgbGV0IHBhZGRpbmdMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nTGVmdCwgMTApO1xuICAgIGxldCBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdSaWdodCwgMTApO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBib3JkZXJMZWZ0IC0gYm9yZGVyUmlnaHQgLSBtYXJnaW5MZWZ0IC0gbWFyZ2luUmlnaHQgLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIG1lcmdlKFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApLFxuICAgICAgdGhpcy5fdmlld3BvcnRSdWxlci5jaGFuZ2UoMTUwKSxcbiAgICAgIHRoaXMuX2RpciA/IHRoaXMuX2Rpci5jaGFuZ2UgOiBvZih1bmRlZmluZWQpLFxuICAgICAgdGhpcy5fc3RlcHMuY2hhbmdlcyxcbiAgICApLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9jb25maWd1cmVTdGVwcygpO1xuICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jb25maWd1cmVTdGVwcygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQodGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkKSB7XG4gICAgICB0aGlzLl91cGRhdGVTdGVwU2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgIHRoaXMuX3Njcm9sbERpc3RhbmNlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gcmlnaHQgYW5kIGxlZnQga2V5IGV2ZW50cyB0byBtb3ZlIHRoZSB0aGUgdmlld3BvcnQuXG4gICAqL1xuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgICB0aGlzLl9zY3JvbGxIZWFkZXIoJ2JlZm9yZScpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICAgIHRoaXMuX3Njcm9sbEhlYWRlcignYWZ0ZXInKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdmlldyB3aGV0aGVyIHBhZ2luYXRpb24gc2hvdWxkIGJlIGVuYWJsZWQgb3Igbm90LlxuICAgKi9cbiAgdXBkYXRlUGFnaW5hdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGVja1BhZ2luYXRpb25FbmFibGVkKCk7XG4gICAgdGhpcy5fY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xuICAgIHRoaXMuX3VwZGF0ZVN0ZXBTY3JvbGxQb3NpdGlvbigpO1xuICB9XG5cbiAgLyoqIFRoZSBsYXlvdXQgZGlyZWN0aW9uIG9mIHRoZSBjb250YWluaW5nIGFwcC4gKi9cbiAgX2dldExheW91dERpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXIgJiYgdGhpcy5fZGlyLnZhbHVlID09PSAncnRsJyA/ICdydGwnIDogJ2x0cic7XG4gIH1cblxuICAgIC8qKiBQZXJmb3JtcyB0aGUgQ1NTIHRyYW5zZm9ybWF0aW9uIG9uIHRoZSBzdGVwIGxpc3QgdGhhdCB3aWxsIGNhdXNlIHRoZSBsaXN0IHRvIHNjcm9sbC4gKi9cbiAgX3VwZGF0ZVN0ZXBTY3JvbGxQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCB0cmFuc2xhdGVYOiBudW1iZXIgPSB0aGlzLl9nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicgPyAtdGhpcy5zY3JvbGxEaXN0YW5jZSA6IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XG4gICAgLy8gTW92ZSBzdGVwIGxpc3QgdGhlIGFtb3VudCBvZiBwaXhlbHMgc2Nyb2xsZWRcbiAgICB0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7TWF0aC5yb3VuZCh0cmFuc2xhdGVYKX1weClgO1xuXG4gICAgLy8gU2V0dGluZyB0aGUgYHRyYW5zZm9ybWAgb24gSUUgd2lsbCBjaGFuZ2UgdGhlIHNjcm9sbCBvZmZzZXQgb2YgdGhlIHBhcmVudCwgY2F1c2luZyB0aGVcbiAgICAvLyBwb3NpdGlvbiB0byBiZSB0aHJvd24gb2ZmIGluIHNvbWUgY2FzZXMuIFdlIGhhdmUgdG8gcmVzZXQgaXQgb3Vyc2VsdmVzIHRvIGVuc3VyZSB0aGF0XG4gICAgLy8gaXQgZG9lc24ndCBnZXQgdGhyb3duIG9mZi5cbiAgICBpZiAodGhpcy5fZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdsdHInKSB7XG4gICAgICB0aGlzLl9zdGVwTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGVwTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB0aGlzLl9nZXRNYXhTY3JvbGxEaXN0YW5jZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgdGhhdCB0aGUgc3RlcCBoZWFkZXIgc2hvdWxkIGJlIHRyYW5zZm9ybWVkIGluIHRoZSBYLWF4aXMuICovXG4gIGdldCBzY3JvbGxEaXN0YW5jZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2Nyb2xsRGlzdGFuY2U7IH1cbiAgc2V0IHNjcm9sbERpc3RhbmNlKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3Njcm9sbERpc3RhbmNlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5fZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKSwgdikpO1xuXG4gICAgLy8gTWFyayB0aGF0IHRoZSBzY3JvbGwgZGlzdGFuY2UgaGFzIGNoYW5nZWQgc28gdGhhdCBhZnRlciB0aGUgdmlldyBpcyBjaGVja2VkLCB0aGUgQ1NTXG4gICAgLy8gdHJhbnNmb3JtYXRpb24gY2FuIG1vdmUgdGhlIGhlYWRlci5cbiAgICB0aGlzLl9zY3JvbGxEaXN0YW5jZUNoYW5nZWQgPSB0cnVlO1xuICAgIHRoaXMuX2NoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgc3RlcCBsaXN0IGluIHRoZSAnYmVmb3JlJyBvciAnYWZ0ZXInIGRpcmVjdGlvbiAodG93YXJkcyB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0IG9yXG4gICAqIHRoZSBlbmQgb2YgdGhlIGxpc3QsIHJlc3BlY3RpdmVseSkuXG4gICAqL1xuICBfc2Nyb2xsSGVhZGVyKHNjcm9sbERpcjogU2Nyb2xsRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgLy8gTW92ZSB0aGUgc2Nyb2xsIGRpc3RhbmNlIG9uZS1oYWxmIHRoZSBsZW5ndGggb2YgdGhlIHN0ZXAgbGlzdCdzIHZpZXdwb3J0LlxuICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgKz0gKHNjcm9sbERpciA9PT0gJ2JlZm9yZScgPyAtMSA6IDEpICogdGhpcy5fc3RlcExpc3RDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAvIDI7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgd2hldGhlciB0aGUgcGFnaW5hdGlvbiBjb250cm9scyBzaG91bGQgYmUgZGlzcGxheWVkLiBJZiB0aGUgc2Nyb2xsIHdpZHRoIG9mIHRoZVxuICAgKiBzdGVwIGxpc3QgaXMgd2lkZXIgdGhhbiB0aGUgc2l6ZSBvZiB0aGUgaGVhZGVyIGNvbnRhaW5lciwgdGhlbiB0aGUgcGFnaW5hdGlvbiBjb250cm9scyBzaG91bGRcbiAgICogYmUgc2hvd24uXG4gICAqL1xuICBfY2hlY2tQYWdpbmF0aW9uRW5hYmxlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0VuYWJsZWQ6IGJvb2xlYW4gPVxuICAgICAgICB0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoID4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgPSAwO1xuICAgIH1cblxuICAgIGlmIChpc0VuYWJsZWQgIT09IHRoaXMuX3Nob3dQYWdpbmF0aW9uQ29udHJvbHMpIHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3dQYWdpbmF0aW9uQ29udHJvbHMgPSBpc0VuYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgd2hldGhlciB0aGUgYmVmb3JlIGFuZCBhZnRlciBjb250cm9scyBzaG91bGQgYmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICogSWYgdGhlIGhlYWRlciBpcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0IChzY3JvbGwgZGlzdGFuY2UgaXMgZXF1YWwgdG8gMCkgdGhlbiBkaXNhYmxlIHRoZVxuICAgKiBiZWZvcmUgYnV0dG9uLiBJZiB0aGUgaGVhZGVyIGlzIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3QgKHNjcm9sbCBkaXN0YW5jZSBpcyBlcXVhbCB0byB0aGVcbiAgICogbWF4aW11bSBkaXN0YW5jZSB3ZSBjYW4gc2Nyb2xsKSwgdGhlbiBkaXNhYmxlIHRoZSBhZnRlciBidXR0b24uXG4gICAqL1xuICBfY2hlY2tTY3JvbGxpbmdDb250cm9scygpOiB2b2lkIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgcGFnaW5hdGlvbiBhcnJvd3Mgc2hvdWxkIGJlIGFjdGl2YXRlZC5cbiAgICB0aGlzLl9kaXNhYmxlU2Nyb2xsQmVmb3JlID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gMDtcbiAgICB0aGlzLl9kaXNhYmxlU2Nyb2xsQWZ0ZXIgPSB0aGlzLnNjcm9sbERpc3RhbmNlID09PSB0aGlzLl9nZXRNYXhTY3JvbGxEaXN0YW5jZSgpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hhdCBpcyB0aGUgbWF4aW11bSBsZW5ndGggaW4gcGl4ZWxzIHRoYXQgY2FuIGJlIHNldCBmb3IgdGhlIHNjcm9sbCBkaXN0YW5jZS4gVGhpc1xuICAgKiBpcyBlcXVhbCB0byB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRoZSBzdGVwIGxpc3QgY29udGFpbmVyIGFuZCBzdGVwIGhlYWRlciBjb250YWluZXIuXG4gICAqL1xuICBfZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMuX3N0ZXBMaXN0Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggLSB0aGlzLl9zdGVwTGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoKSB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3RlcCBsaW5lIHNlcGFyYXRvcnMgYW5kIGRpc3BsYXkgbnVtYmVyc1xuICAgKi9cbiAgcHJpdmF0ZSBfY29uZmlndXJlU3RlcHMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2VwYXJhdG9ycy5mb3JFYWNoKChzZXBhcmF0b3I6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LCBzZXBhcmF0b3IpO1xuICAgIH0pO1xuICAgIGxldCBzdGVwc0FycmF5OiBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50W10gPSB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gICAgLy8gc2V0IHRoZSBpbmRleCBudW1iZXIgb2YgdGhlIHN0ZXAgc28gY2FuIGRpc3BsYXkgdGhhdCBudW1iZXIgaW4gY2lyY2xlXG4gICAgc3RlcHNBcnJheS5mb3JFYWNoKChzdGVwOiBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaW5kZXggPiAwICYmIGluZGV4IDwgc3RlcHNBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHNlcGFyYXRvcjogYW55ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNlcGFyYXRvciwgJ3RkLWhvcml6b250YWwtbGluZScpO1xuICAgICAgICB0aGlzLl9zZXBhcmF0b3JzLnB1c2goc2VwYXJhdG9yKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX3N0ZXBMaXN0Lm5hdGl2ZUVsZW1lbnQsIHNlcGFyYXRvciwgc3RlcC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgc3RlcC5udW1iZXIgPSBpbmRleCArIDE7XG4gICAgfSk7XG4gICAgXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIFZpZXdDaGlsZCwgUXVlcnlMaXN0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBcbiAgICAgICAgIEFmdGVyQ29udGVudEluaXQsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi4vbmF2LXN0ZXAtbGluay9uYXYtc3RlcC1saW5rLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIGRpcmVjdGlvbnMgdGhhdCBzY3JvbGxpbmcgY2FuIGdvIGluIHdoZW4gdGhlIGhlYWRlcidzIHRhYnMgZXhjZWVkIHRoZSBoZWFkZXIgd2lkdGguICdBZnRlcidcbiAqIHdpbGwgc2Nyb2xsIHRoZSBoZWFkZXIgdG93YXJkcyB0aGUgZW5kIG9mIHRoZSB0YWJzIGxpc3QgYW5kICdiZWZvcmUnIHdpbGwgc2Nyb2xsIHRvd2FyZHMgdGhlXG4gKiBiZWdpbm5pbmcgb2YgdGhlIGxpc3QuXG4gKi9cbmV4cG9ydCB0eXBlIFNjcm9sbERpcmVjdGlvbiA9ICdhZnRlcicgfCAnYmVmb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmF2W3RkLXN0ZXBzXVt2ZXJ0aWNhbF0nLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtc3RlcHMtdmVydGljYWwuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1zdGVwcy12ZXJ0aWNhbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndGQtc3RlcHMgdGQtc3RlcHMtdmVydGljYWwnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdlN0ZXBzVmVydGljYWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3NlcGFyYXRvcnM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvLyBhbGwgdGhlIHN1YiBjb21wb25lbnRzLCB3aGljaCBhcmUgdGhlIGluZGl2aWR1YWwgc3RlcHNcbiAgQENvbnRlbnRDaGlsZHJlbihUZE5hdlN0ZXBMaW5rQ29tcG9uZW50KSBfc3RlcHM6IFF1ZXJ5TGlzdDxUZE5hdlN0ZXBMaW5rQ29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkKCdzdGVwTGlzdCcpIF9zdGVwTGlzdDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGVwcy5jaGFuZ2VzLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9jb25maWd1cmVTdGVwcygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fY29uZmlndXJlU3RlcHMoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGVwIGxpbmUgc2VwYXJhdG9ycyBhbmQgZGlzcGxheSBudW1iZXJzXG4gICAqL1xuICBwcml2YXRlIF9jb25maWd1cmVTdGVwcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXBhcmF0b3JzLmZvckVhY2goKHNlcGFyYXRvcjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuX3N0ZXBMaXN0Lm5hdGl2ZUVsZW1lbnQsIHNlcGFyYXRvcik7XG4gICAgfSk7XG4gICAgbGV0IHN0ZXBzQXJyYXk6IFRkTmF2U3RlcExpbmtDb21wb25lbnRbXSA9IHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgICAvLyBzZXQgdGhlIGluZGV4IG51bWJlciBvZiB0aGUgc3RlcCBzbyBjYW4gZGlzcGxheSB0aGF0IG51bWJlciBpbiBjaXJjbGVcbiAgICBzdGVwc0FycmF5LmZvckVhY2goKHN0ZXA6IFRkTmF2U3RlcExpbmtDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPCBzdGVwc0FycmF5Lmxlbmd0aCkge1xuICAgICAgICBsZXQgc2VwYXJhdG9yOiBhbnkgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3Moc2VwYXJhdG9yLCAndGQtdmVydGljYWwtbGluZS13cmFwcGVyJyk7XG4gICAgICAgIGxldCBzZXBhcmF0b3JDaGlsZDogYW55ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNlcGFyYXRvckNoaWxkLCAndGQtdmVydGljYWwtbGluZScpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZChzZXBhcmF0b3IsIHNlcGFyYXRvckNoaWxkKTtcbiAgICAgICAgdGhpcy5fc2VwYXJhdG9ycy5wdXNoKHNlcGFyYXRvcik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9zdGVwTGlzdC5uYXRpdmVFbGVtZW50LCBzZXBhcmF0b3IsIHN0ZXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHN0ZXAubnVtYmVyID0gaW5kZXggKyAxO1xuICAgIH0pO1xuICAgIFxuICB9XG5cbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IFNjcm9sbERpc3BhdGNoTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5cbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3ZhbGVudENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbi8vIFN0ZXBzXG5pbXBvcnQgeyBUZFN0ZXBzQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRTdGVwSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwLWhlYWRlci9zdGVwLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRTdGVwQm9keUNvbXBvbmVudCB9IGZyb20gJy4vc3RlcC1ib2R5L3N0ZXAtYm9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRTdGVwQ29tcG9uZW50LCBUZFN0ZXBMYWJlbERpcmVjdGl2ZSwgVGRTdGVwQWN0aW9uc0RpcmVjdGl2ZSxcbiAgICAgICAgIFRkU3RlcFN1bW1hcnlEaXJlY3RpdmUgfSBmcm9tICcuL3N0ZXAuY29tcG9uZW50JztcblxuLy8gTmF2IFN0ZXBzXG5pbXBvcnQgeyBUZE5hdlN0ZXBzSG9yaXpvbnRhbENvbXBvbmVudCB9IGZyb20gJy4vbmF2L25hdi1zdGVwcy1ob3Jpem9udGFsL25hdi1zdGVwcy1ob3Jpem9udGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZE5hdlN0ZXBzVmVydGljYWxDb21wb25lbnQgfSBmcm9tICcuL25hdi9uYXYtc3RlcHMtdmVydGljYWwvbmF2LXN0ZXBzLXZlcnRpY2FsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9uYXYvbmF2LXN0ZXAtbGluay9uYXYtc3RlcC1saW5rLmNvbXBvbmVudCc7XG5cbmNvbnN0IFREX1NURVBTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRTdGVwc0NvbXBvbmVudCxcbiAgVGRTdGVwQ29tcG9uZW50LFxuICBUZFN0ZXBIZWFkZXJDb21wb25lbnQsXG4gIFRkU3RlcEJvZHlDb21wb25lbnQsXG4gIFRkU3RlcExhYmVsRGlyZWN0aXZlLFxuICBUZFN0ZXBBY3Rpb25zRGlyZWN0aXZlLFxuICBUZFN0ZXBTdW1tYXJ5RGlyZWN0aXZlLFxuICBUZE5hdlN0ZXBzSG9yaXpvbnRhbENvbXBvbmVudCxcbiAgVGROYXZTdGVwc1ZlcnRpY2FsQ29tcG9uZW50LFxuICBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50LFxuXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgICBTY3JvbGxEaXNwYXRjaE1vZHVsZSxcbiAgICBDb3ZhbGVudENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfU1RFUFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9TVEVQUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRTdGVwc01vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJt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