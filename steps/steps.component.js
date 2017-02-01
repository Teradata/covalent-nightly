var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    return TdStepsComponent;
}());
__decorate([
    ContentChildren(TdStepComponent),
    __metadata("design:type", QueryList),
    __metadata("design:paramtypes", [QueryList])
], TdStepsComponent.prototype, "stepsContent", null);
__decorate([
    Input('mode'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TdStepsComponent.prototype, "mode", null);
__decorate([
    Output('stepChange'),
    __metadata("design:type", EventEmitter)
], TdStepsComponent.prototype, "onStepChange", void 0);
TdStepsComponent = __decorate([
    Component({
        selector: 'td-steps',
        styles: [".td-line-wrapper, .td-step { position: relative; } .td-line-wrapper { width: 24px; min-height: 1px; } .td-horizontal-line { border-bottom-width: 1px; border-bottom-style: solid; height: 1px; position: relative; top: 36px; margin-left: -6px; margin-right: -3px; min-width: 15px; } .td-vertical-line { position: absolute; left: 20px; bottom: -16px; top: -16px; border-left-width: 1px; border-left-style: solid; } "],
        template: "<div *ngIf=\"isHorizontal()\" class=\"td-steps-header\" layout=\"row\" title> <template let-step let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"steps\"> <td-step-header class=\"td-step-horizontal-header\" (keydown.enter)=\"step.toggle()\" [number]=\"index + 1\" [active]=\"step.active\"  [disabled]=\"step.disabled\"  [state]=\"step.state\" (click)=\"step.toggle()\"> <template td-step-header-label [cdkPortalHost]=\"step.stepLabel\"></template> <template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</template> <template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel | truncate:30}}</template> </td-step-header> <span *ngIf=\"!last\" class=\"td-horizontal-line\" flex></span> </template> </div> <div *ngFor=\"let step of steps; let index = index; let last = last\" class=\"td-step\" layout=\"column\"> <td-step-header class=\"td-step-vertical-header\" (keydown.enter)=\"step.toggle()\" [number]=\"index + 1\" [active]=\"step.active\"  [disabled]=\"step.disabled\"  [state]=\"step.state\" (click)=\"step.toggle()\" *ngIf=\"isVertical()\"> <template td-step-header-label [cdkPortalHost]=\"step.stepLabel\"></template> <template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</template> <template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel}}</template> </td-step-header> <template [ngIf]=\"isVertical() || step.active || (!areStepsActive() && prevStep === step)\"> <td-step-body [active]=\"step.active\" [state]=\"step.state\"> <div *ngIf=\"isVertical()\" class=\"td-line-wrapper\"> <div *ngIf=\"!last\" class=\"td-vertical-line\"></div> </div> <template td-step-body-content [cdkPortalHost]=\"step.stepContent\"></template> <template td-step-body-actions [cdkPortalHost]=\"step.stepActions\"></template> <template td-step-body-summary [cdkPortalHost]=\"step.stepSummary\"></template> </td-step-body> </template> </div> ",
    })
], TdStepsComponent);
export { TdStepsComponent };
//# sourceMappingURL=steps.component.js.map