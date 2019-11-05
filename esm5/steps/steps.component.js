/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output } from '@angular/core';
import { EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { TdStepComponent } from './step.component';
/**
 * @record
 */
export function IStepChangeEvent() { }
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
export { StepMode };
var TdStepsComponent = /** @class */ (function () {
    function TdStepsComponent() {
        this._mode = StepMode.Vertical;
        /**
         * stepChange?: function
         * Method to be executed when [stepChange] event is emitted.
         * Emits an [IStepChangeEvent] implemented object.
         */
        this.stepChange = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'td-steps',
                    template: "<div *ngIf=\"isHorizontal()\" class=\"td-steps-header\">\n  <ng-template let-step let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"steps\">\n    <td-step-header\n      class=\"td-step-horizontal-header\"\n      (keydown.enter)=\"step.open()\"\n      [number]=\"index + 1\"\n      [active]=\"step.active\"\n      [disableRipple]=\"step.disableRipple\"\n      [disabled]=\"step.disabled\"\n      [state]=\"step.state\"\n      (click)=\"step.open()\"\n    >\n      <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n      <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{ step.label }}</ng-template>\n      <ng-template td-step-header-sublabel [ngIf]=\"true\">{{ step.sublabel | truncate: 30 }}</ng-template>\n    </td-step-header>\n    <span *ngIf=\"!last\" class=\"td-horizontal-line\"></span>\n  </ng-template>\n</div>\n<div *ngFor=\"let step of steps; let index = index; let last = last\" class=\"td-step\">\n  <td-step-header\n    class=\"td-step-vertical-header\"\n    (keydown.enter)=\"step.toggle()\"\n    [number]=\"index + 1\"\n    [active]=\"step.active\"\n    [disabled]=\"step.disabled\"\n    [disableRipple]=\"step.disableRipple\"\n    [state]=\"step.state\"\n    (click)=\"step.toggle()\"\n    *ngIf=\"isVertical()\"\n  >\n    <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n    <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{ step.label }}</ng-template>\n    <ng-template td-step-header-sublabel [ngIf]=\"true\">{{ step.sublabel }}</ng-template>\n  </td-step-header>\n  <ng-template [ngIf]=\"isVertical() || step.active || (!areStepsActive() && prevStep === step)\">\n    <td-step-body [active]=\"step.active\" [state]=\"step.state\">\n      <div *ngIf=\"isVertical()\" class=\"td-line-wrapper\">\n        <div *ngIf=\"!last\" class=\"td-vertical-line\"></div>\n      </div>\n      <ng-template td-step-body-content [cdkPortalOutlet]=\"step.stepContent\"></ng-template>\n      <ng-template td-step-body-actions [cdkPortalOutlet]=\"step.stepActions\"></ng-template>\n      <ng-template td-step-body-summary [cdkPortalOutlet]=\"step.stepSummary\"></ng-template>\n    </td-step-body>\n  </ng-template>\n</div>\n",
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
        stepChange: [{ type: Output }]
    };
    return TdStepsComponent;
}());
export { TdStepsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJzdGVwcy9zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRW5ELHNDQUdDOzs7SUFGQyxtQ0FBeUI7O0lBQ3pCLG9DQUEwQjs7OztJQUkxQixVQUFXLFVBQVU7SUFDckIsWUFBYSxZQUFZOzs7QUFHM0I7SUFBQTtRQVdVLFVBQUssR0FBYSxRQUFRLENBQUMsUUFBUSxDQUFDOzs7Ozs7UUFxQ2xDLGVBQVUsR0FBbUMsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFxRjlGLENBQUM7SUF2SEMsc0JBQ0ksMENBQVk7Ozs7O1FBRGhCLFVBQ2lCLEtBQWlDO1lBQ2hELElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdkI7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFPRCxzQkFDSSxrQ0FBSTs7OztRQU9SO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7UUFkRDs7O1dBR0c7Ozs7Ozs7UUFDSCxVQUNTLElBQWM7WUFDckIsSUFBSSxJQUFJLEtBQUssUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFR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LElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsVUFBVTtxQkFDbEI7O2lCQUNGOzs7K0JBTUUsZUFBZSxTQUFDLGVBQWU7dUJBaUIvQixLQUFLLFNBQUMsTUFBTTs2QkFpQlosTUFBTTs7SUFxRlQsdUJBQUM7Q0FBQSxBQXJJRCxJQXFJQztTQTVIWSxnQkFBZ0I7Ozs7OztJQUMzQix5Q0FBc0M7Ozs7O0lBQ3RDLGlDQUE0Qzs7Ozs7SUFDNUMsa0NBQTJDOztJQWEzQyxvQ0FBMEI7Ozs7Ozs7SUF1QjFCLHNDQUE0RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9zdGVwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0ZXBDaGFuZ2VFdmVudCB7XG4gIG5ld1N0ZXA6IFRkU3RlcENvbXBvbmVudDtcbiAgcHJldlN0ZXA6IFRkU3RlcENvbXBvbmVudDtcbn1cblxuZXhwb3J0IGVudW0gU3RlcE1vZGUge1xuICBWZXJ0aWNhbCA9ICd2ZXJ0aWNhbCcsXG4gIEhvcml6b250YWwgPSAnaG9yaXpvbnRhbCcsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXN0ZXBzJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcHMuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXBzLmNvbXBvbmVudC5odG1sJyxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3RkLXN0ZXBzJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGRTdGVwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX3N1YmNyaXB0aW9uczogU3Vic2NyaXB0aW9uW107XG4gIHByaXZhdGUgX21vZGU6IFN0ZXBNb2RlID0gU3RlcE1vZGUuVmVydGljYWw7XG4gIHByaXZhdGUgX3N0ZXBzOiBRdWVyeUxpc3Q8VGRTdGVwQ29tcG9uZW50PjtcblxuICBAQ29udGVudENoaWxkcmVuKFRkU3RlcENvbXBvbmVudClcbiAgc2V0IHN0ZXBzQ29udGVudChzdGVwczogUXVlcnlMaXN0PFRkU3RlcENvbXBvbmVudD4pIHtcbiAgICBpZiAoc3RlcHMpIHtcbiAgICAgIHRoaXMuX3N0ZXBzID0gc3RlcHM7XG4gICAgICB0aGlzLl9yZWdpc3RlclN0ZXBzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHN0ZXBzKCk6IFRkU3RlcENvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcHMudG9BcnJheSgpO1xuICB9XG4gIHByZXZTdGVwOiBUZFN0ZXBDb21wb25lbnQ7XG5cbiAgLyoqXG4gICAqIG1vZGU/OiBTdGVwTW9kZSBvciBbXCJ2ZXJ0aWNhbFwiIHwgXCJob3Jpem9udGFsXCJdXG4gICAqIERlZmluZXMgaWYgdGhlIG1vZGUgb2YgdGhlIFtUZFN0ZXBzQ29tcG9uZW50XS4gIERlZmF1bHRzIHRvIFtTdGVwTW9kZS5WZXJ0aWNhbCB8IFwidmVydGljYWxcIl1cbiAgICovXG4gIEBJbnB1dCgnbW9kZScpXG4gIHNldCBtb2RlKG1vZGU6IFN0ZXBNb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09IFN0ZXBNb2RlLkhvcml6b250YWwpIHtcbiAgICAgIHRoaXMuX21vZGUgPSBTdGVwTW9kZS5Ib3Jpem9udGFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tb2RlID0gU3RlcE1vZGUuVmVydGljYWw7XG4gICAgfVxuICB9XG4gIGdldCBtb2RlKCk6IFN0ZXBNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdGVwQ2hhbmdlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gW3N0ZXBDaGFuZ2VdIGV2ZW50IGlzIGVtaXR0ZWQuXG4gICAqIEVtaXRzIGFuIFtJU3RlcENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCkgc3RlcENoYW5nZTogRXZlbnRFbWl0dGVyPElTdGVwQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJU3RlcENoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBFeGVjdXRlZCBhZnRlciBjb250ZW50IGlzIGluaXRpYWxpemVkLCBsb29wcyB0aHJvdWdoIGFueSBbVGRTdGVwQ29tcG9uZW50XSBjaGlsZHJlbiBlbGVtZW50cyxcbiAgICogYXNzaWducyB0aGVtIGEgbnVtYmVyIGFuZCBzdWJzY3JpYmVzIGFzIGFuIG9ic2VydmVyIHRvIHRoZWlyIFthY3RpdmF0ZWRdIGV2ZW50LlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlZ2lzdGVyU3RlcHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZXMgZnJvbSBbVGRTdGVwQ29tcG9uZW50XSBjaGlsZHJlbiBlbGVtZW50cyB3aGVuIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXJlZ2lzdGVyU3RlcHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbbW9kZV0gZXF1YWxzIHRvIFtTdGVwTW9kZS5Ib3Jpem9udGFsIHwgJ2hvcml6b250YWwnXSwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgaXNIb3Jpem9udGFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tb2RlID09PSBTdGVwTW9kZS5Ib3Jpem9udGFsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgJ3RydWUnIGlmIFttb2RlXSBlcXVhbHMgdG8gW1N0ZXBNb2RlLlZlcnRpY2FsIHwgJ3ZlcnRpY2FsJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzVmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGUgPT09IFN0ZXBNb2RlLlZlcnRpY2FsO1xuICB9XG5cbiAgYXJlU3RlcHNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX3N0ZXBzLmZpbHRlcigoc3RlcDogVGRTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBzdGVwLmFjdGl2ZTtcbiAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBzIHByZXZpb3VzIGFuZCBuZXcgW1RkU3RlcENvbXBvbmVudF0gbnVtYmVycyBpbiBhbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIFtJU3RlcENoYW5nZUV2ZW50XVxuICAgKiBhbmQgZW1pdHMgW3N0ZXBDaGFuZ2VdIGV2ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfb25TdGVwU2VsZWN0aW9uKHN0ZXA6IFRkU3RlcENvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXZTdGVwICE9PSBzdGVwKSB7XG4gICAgICBjb25zdCBwcmV2U3RlcDogVGRTdGVwQ29tcG9uZW50ID0gdGhpcy5wcmV2U3RlcDtcbiAgICAgIHRoaXMucHJldlN0ZXAgPSBzdGVwO1xuICAgICAgY29uc3QgZXZlbnQ6IElTdGVwQ2hhbmdlRXZlbnQgPSB7XG4gICAgICAgIG5ld1N0ZXA6IHN0ZXAsXG4gICAgICAgIHByZXZTdGVwLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2RlYWN0aXZhdGVBbGxCdXQoc3RlcCk7XG4gICAgICB0aGlzLnN0ZXBDaGFuZ2UuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvb3BzIHRocm91Z2ggW1RkU3RlcENvbXBvbmVudF0gY2hpbGRyZW4gZWxlbWVudHMgYW5kIGRlYWN0aXZhdGVzIHRoZW0gaWdub3JpbmcgdGhlIG9uZSBwYXNzZWQgYXMgYW4gYXJndW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9kZWFjdGl2YXRlQWxsQnV0KGFjdGl2ZVN0ZXA6IFRkU3RlcENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3N0ZXBzXG4gICAgICAuZmlsdGVyKChzdGVwOiBUZFN0ZXBDb21wb25lbnQpID0+IHN0ZXAgIT09IGFjdGl2ZVN0ZXApXG4gICAgICAuZm9yRWFjaCgoc3RlcDogVGRTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIHN0ZXAuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZ2lzdGVyU3RlcHMoKTogdm9pZCB7XG4gICAgdGhpcy5fc3ViY3JpcHRpb25zID0gW107XG4gICAgdGhpcy5fc3RlcHMudG9BcnJheSgpLmZvckVhY2goKHN0ZXA6IFRkU3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBzdGVwLmFjdGl2YXRlZC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9vblN0ZXBTZWxlY3Rpb24oc3RlcCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3N1YmNyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9kZXJlZ2lzdGVyU3RlcHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YmNyaXB0aW9ucykge1xuICAgICAgdGhpcy5fc3ViY3JpcHRpb25zLmZvckVhY2goKHN1YnM6IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgICBzdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3N1YmNyaXB0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==