import * as tslib_1 from "tslib";
import { Component, Input, Output } from '@angular/core';
import { EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { TdStepComponent } from './step.component';
export var StepMode;
(function (StepMode) {
    StepMode[StepMode["Vertical"] = 'vertical'] = "Vertical";
    StepMode[StepMode["Horizontal"] = 'horizontal'] = "Horizontal";
})(StepMode || (StepMode = {}));
var TdStepsComponent = (function () {
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
        set: function (steps) {
            if (steps) {
                this._steps = steps;
                this._registerSteps();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepsComponent.prototype, "steps", {
        get: function () {
            return this._steps.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepsComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        /**
         * mode?: StepMode or ["vertical" | "horizontal"]
         * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
         */
        set: function (mode) {
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
    TdStepsComponent.prototype.ngAfterContentInit = function () {
        this._registerSteps();
    };
    /**
     * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
     */
    TdStepsComponent.prototype.ngOnDestroy = function () {
        this._deregisterSteps();
    };
    /**
     * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
     */
    TdStepsComponent.prototype.isHorizontal = function () {
        return this._mode === StepMode.Horizontal;
    };
    /**
     * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
     */
    TdStepsComponent.prototype.isVertical = function () {
        return this._mode === StepMode.Vertical;
    };
    TdStepsComponent.prototype.areStepsActive = function () {
        return this._steps.filter(function (step) {
            return step.active;
        }).length > 0;
    };
    /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [onStepChange] event.
     */
    TdStepsComponent.prototype._onStepSelection = function (step) {
        if (this.prevStep !== step) {
            var prevStep = this.prevStep;
            this.prevStep = step;
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
    TdStepsComponent.prototype._deactivateAllBut = function (activeStep) {
        this._steps.filter(function (step) { return step !== activeStep; })
            .forEach(function (step) {
            step.active = false;
        });
    };
    TdStepsComponent.prototype._registerSteps = function () {
        var _this = this;
        this._subcriptions = [];
        this._steps.toArray().forEach(function (step) {
            var subscription = step.onActivated.asObservable().subscribe(function () {
                _this._onStepSelection(step);
            });
            _this._subcriptions.push(subscription);
        });
    };
    TdStepsComponent.prototype._deregisterSteps = function () {
        if (this._subcriptions) {
            this._subcriptions.forEach(function (subs) {
                subs.unsubscribe();
            });
            this._subcriptions = undefined;
        }
    };
    tslib_1.__decorate([
        ContentChildren(TdStepComponent),
        tslib_1.__metadata("design:type", QueryList),
        tslib_1.__metadata("design:paramtypes", [QueryList])
    ], TdStepsComponent.prototype, "stepsContent", null);
    tslib_1.__decorate([
        Input('mode'),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], TdStepsComponent.prototype, "mode", null);
    tslib_1.__decorate([
        Output('stepChange'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdStepsComponent.prototype, "onStepChange", void 0);
    TdStepsComponent = tslib_1.__decorate([
        Component({
            selector: 'td-steps',
            styles: [".td-line-wrapper, .td-step { position: relative; } .td-steps-header { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; } .td-line-wrapper { width: 24px; min-height: 1px; } .td-horizontal-line { border-bottom-width: 1px; border-bottom-style: solid; height: 1px; position: relative; top: 36px; min-width: 15px; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-sizing: border-box; box-sizing: border-box; } ::ng-deep :not([dir='rtl']) .td-horizontal-line { left: -6px; right: -3px; } ::ng-deep [dir='rtl'] .td-horizontal-line { left: -3px; right: -6px; } .td-vertical-line { position: absolute; bottom: -16px; top: -16px; border-left-width: 1px; border-left-style: solid; } ::ng-deep :not([dir='rtl']) .td-vertical-line { left: 20px; right: auto; } ::ng-deep [dir='rtl'] .td-vertical-line { left: auto; right: 20px; } /*# sourceMappingURL=steps.component.css.map */ "],
            template: "<div *ngIf=\"isHorizontal()\" class=\"td-steps-header\"> <ng-template let-step let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"steps\"> <td-step-header class=\"td-step-horizontal-header\" (keydown.enter)=\"step.open()\" [number]=\"index + 1\" [active]=\"step.active\" [disableRipple]=\"step.disableRipple\" [disabled]=\"step.disabled\"  [state]=\"step.state\" (click)=\"step.open()\"> <ng-template td-step-header-label [cdkPortalHost]=\"step.stepLabel\"></ng-template> <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template> <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel | truncate:30}}</ng-template> </td-step-header> <span *ngIf=\"!last\" class=\"td-horizontal-line\"></span> </ng-template> </div> <div *ngFor=\"let step of steps; let index = index; let last = last\" class=\"td-step\"> <td-step-header class=\"td-step-vertical-header\" (keydown.enter)=\"step.toggle()\" [number]=\"index + 1\" [active]=\"step.active\"  [disabled]=\"step.disabled\" [disableRipple]=\"step.disableRipple\" [state]=\"step.state\" (click)=\"step.toggle()\" *ngIf=\"isVertical()\"> <ng-template td-step-header-label [cdkPortalHost]=\"step.stepLabel\"></ng-template> <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template> <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel}}</ng-template> </td-step-header> <ng-template [ngIf]=\"isVertical() || step.active || (!areStepsActive() && prevStep === step)\"> <td-step-body [active]=\"step.active\" [state]=\"step.state\"> <div *ngIf=\"isVertical()\" class=\"td-line-wrapper\"> <div *ngIf=\"!last\" class=\"td-vertical-line\"></div> </div> <ng-template td-step-body-content [cdkPortalHost]=\"step.stepContent\"></ng-template> <ng-template td-step-body-actions [cdkPortalHost]=\"step.stepActions\"></ng-template> <ng-template td-step-body-summary [cdkPortalHost]=\"step.stepSummary\"></ng-template> </td-step-body> </ng-template> </div> ",
        })
    ], TdStepsComponent);
    return TdStepsComponent;
}());
export { TdStepsComponent };
//# sourceMappingURL=steps.component.js.map