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
const StepMode = {
    Vertical: 'vertical',
    Horizontal: 'horizontal',
};
export { StepMode };
export class TdStepsComponent {
    constructor() {
        this._mode = StepMode.Vertical;
        /**
         * stepChange?: function
         * Method to be executed when [stepChange] event is emitted.
         * Emits an [IStepChangeEvent] implemented object.
         */
        this.stepChange = new EventEmitter();
    }
    /**
     * @param {?} steps
     * @return {?}
     */
    set stepsContent(steps) {
        if (steps) {
            this._steps = steps;
            this._registerSteps();
        }
    }
    /**
     * @return {?}
     */
    get steps() {
        return this._steps.toArray();
    }
    /**
     * mode?: StepMode or ["vertical" | "horizontal"]
     * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
        if (mode === StepMode.Horizontal) {
            this._mode = StepMode.Horizontal;
        }
        else {
            this._mode = StepMode.Vertical;
        }
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * Executed after content is initialized, loops through any [TdStepComponent] children elements,
     * assigns them a number and subscribes as an observer to their [activated] event.
     * @return {?}
     */
    ngAfterContentInit() {
        this._registerSteps();
    }
    /**
     * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this._deregisterSteps();
    }
    /**
     * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
     * @return {?}
     */
    isHorizontal() {
        return this._mode === StepMode.Horizontal;
    }
    /**
     * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
     * @return {?}
     */
    isVertical() {
        return this._mode === StepMode.Vertical;
    }
    /**
     * @return {?}
     */
    areStepsActive() {
        return (this._steps.filter((/**
         * @param {?} step
         * @return {?}
         */
        (step) => {
            return step.active;
        })).length > 0);
    }
    /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [stepChange] event.
     * @private
     * @param {?} step
     * @return {?}
     */
    _onStepSelection(step) {
        if (this.prevStep !== step) {
            /** @type {?} */
            const prevStep = this.prevStep;
            this.prevStep = step;
            /** @type {?} */
            const event = {
                newStep: step,
                prevStep,
            };
            this._deactivateAllBut(step);
            this.stepChange.emit(event);
        }
    }
    /**
     * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
     * @private
     * @param {?} activeStep
     * @return {?}
     */
    _deactivateAllBut(activeStep) {
        this._steps
            .filter((/**
         * @param {?} step
         * @return {?}
         */
        (step) => step !== activeStep))
            .forEach((/**
         * @param {?} step
         * @return {?}
         */
        (step) => {
            step.active = false;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _registerSteps() {
        this._subcriptions = [];
        this._steps.toArray().forEach((/**
         * @param {?} step
         * @return {?}
         */
        (step) => {
            /** @type {?} */
            const subscription = step.activated.asObservable().subscribe((/**
             * @return {?}
             */
            () => {
                this._onStepSelection(step);
            }));
            this._subcriptions.push(subscription);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _deregisterSteps() {
        if (this._subcriptions) {
            this._subcriptions.forEach((/**
             * @param {?} subs
             * @return {?}
             */
            (subs) => {
                subs.unsubscribe();
            }));
            this._subcriptions = undefined;
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJzdGVwcy9zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRW5ELHNDQUdDOzs7SUFGQyxtQ0FBeUI7O0lBQ3pCLG9DQUEwQjs7OztJQUkxQixVQUFXLFVBQVU7SUFDckIsWUFBYSxZQUFZOzs7QUFZM0IsTUFBTSxPQUFPLGdCQUFnQjtJQVQ3QjtRQVdVLFVBQUssR0FBYSxRQUFRLENBQUMsUUFBUSxDQUFDOzs7Ozs7UUFxQ2xDLGVBQVUsR0FBbUMsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFxRjlGLENBQUM7Ozs7O0lBdkhDLElBQ0ksWUFBWSxDQUFDLEtBQWlDO1FBQ2hELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7O0lBT0QsSUFDSSxJQUFJLENBQUMsSUFBYztRQUNyQixJQUFJLElBQUksS0FBSyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1NBQ2hDO0lBQ0gs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M0Msb0NBQTBCOzs7Ozs7O0lBdUIxQixzQ0FBNEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkU3RlcENvbXBvbmVudCB9IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTdGVwQ2hhbmdlRXZlbnQge1xuICBuZXdTdGVwOiBUZFN0ZXBDb21wb25lbnQ7XG4gIHByZXZTdGVwOiBUZFN0ZXBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCBlbnVtIFN0ZXBNb2RlIHtcbiAgVmVydGljYWwgPSAndmVydGljYWwnLFxuICBIb3Jpem9udGFsID0gJ2hvcml6b250YWwnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1zdGVwcycsXG4gIHN0eWxlVXJsczogWycuL3N0ZXBzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwcy5jb21wb25lbnQuaHRtbCcsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBob3N0OiB7XG4gICAgY2xhc3M6ICd0ZC1zdGVwcycsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRkU3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9zdWJjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdO1xuICBwcml2YXRlIF9tb2RlOiBTdGVwTW9kZSA9IFN0ZXBNb2RlLlZlcnRpY2FsO1xuICBwcml2YXRlIF9zdGVwczogUXVlcnlMaXN0PFRkU3RlcENvbXBvbmVudD47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZFN0ZXBDb21wb25lbnQpXG4gIHNldCBzdGVwc0NvbnRlbnQoc3RlcHM6IFF1ZXJ5TGlzdDxUZFN0ZXBDb21wb25lbnQ+KSB7XG4gICAgaWYgKHN0ZXBzKSB7XG4gICAgICB0aGlzLl9zdGVwcyA9IHN0ZXBzO1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdGVwcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdGVwcygpOiBUZFN0ZXBDb21wb25lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXBzLnRvQXJyYXkoKTtcbiAgfVxuICBwcmV2U3RlcDogVGRTdGVwQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBtb2RlPzogU3RlcE1vZGUgb3IgW1widmVydGljYWxcIiB8IFwiaG9yaXpvbnRhbFwiXVxuICAgKiBEZWZpbmVzIGlmIHRoZSBtb2RlIG9mIHRoZSBbVGRTdGVwc0NvbXBvbmVudF0uICBEZWZhdWx0cyB0byBbU3RlcE1vZGUuVmVydGljYWwgfCBcInZlcnRpY2FsXCJdXG4gICAqL1xuICBASW5wdXQoJ21vZGUnKVxuICBzZXQgbW9kZShtb2RlOiBTdGVwTW9kZSkge1xuICAgIGlmIChtb2RlID09PSBTdGVwTW9kZS5Ib3Jpem9udGFsKSB7XG4gICAgICB0aGlzLl9tb2RlID0gU3RlcE1vZGUuSG9yaXpvbnRhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbW9kZSA9IFN0ZXBNb2RlLlZlcnRpY2FsO1xuICAgIH1cbiAgfVxuICBnZXQgbW9kZSgpOiBTdGVwTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICAvKipcbiAgICogc3RlcENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIFtzdGVwQ2hhbmdlXSBldmVudCBpcyBlbWl0dGVkLlxuICAgKiBFbWl0cyBhbiBbSVN0ZXBDaGFuZ2VFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgpIHN0ZXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJU3RlcENoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVN0ZXBDaGFuZ2VFdmVudD4oKTtcblxuICAvKipcbiAgICogRXhlY3V0ZWQgYWZ0ZXIgY29udGVudCBpcyBpbml0aWFsaXplZCwgbG9vcHMgdGhyb3VnaCBhbnkgW1RkU3RlcENvbXBvbmVudF0gY2hpbGRyZW4gZWxlbWVudHMsXG4gICAqIGFzc2lnbnMgdGhlbSBhIG51bWJlciBhbmQgc3Vic2NyaWJlcyBhcyBhbiBvYnNlcnZlciB0byB0aGVpciBbYWN0aXZhdGVkXSBldmVudC5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZWdpc3RlclN0ZXBzKCk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmVzIGZyb20gW1RkU3RlcENvbXBvbmVudF0gY2hpbGRyZW4gZWxlbWVudHMgd2hlbiBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVyZWdpc3RlclN0ZXBzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW21vZGVdIGVxdWFscyB0byBbU3RlcE1vZGUuSG9yaXpvbnRhbCB8ICdob3Jpem9udGFsJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzSG9yaXpvbnRhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZSA9PT0gU3RlcE1vZGUuSG9yaXpvbnRhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbbW9kZV0gZXF1YWxzIHRvIFtTdGVwTW9kZS5WZXJ0aWNhbCB8ICd2ZXJ0aWNhbCddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc1ZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tb2RlID09PSBTdGVwTW9kZS5WZXJ0aWNhbDtcbiAgfVxuXG4gIGFyZVN0ZXBzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9zdGVwcy5maWx0ZXIoKHN0ZXA6IFRkU3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgICByZXR1cm4gc3RlcC5hY3RpdmU7XG4gICAgICB9KS5sZW5ndGggPiAwXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcyBwcmV2aW91cyBhbmQgbmV3IFtUZFN0ZXBDb21wb25lbnRdIG51bWJlcnMgaW4gYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyBbSVN0ZXBDaGFuZ2VFdmVudF1cbiAgICogYW5kIGVtaXRzIFtzdGVwQ2hhbmdlXSBldmVudC5cbiAgICovXG4gIHByaXZhdGUgX29uU3RlcFNlbGVjdGlvbihzdGVwOiBUZFN0ZXBDb21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmV2U3RlcCAhPT0gc3RlcCkge1xuICAgICAgY29uc3QgcHJldlN0ZXA6IFRkU3RlcENvbXBvbmVudCA9IHRoaXMucHJldlN0ZXA7XG4gICAgICB0aGlzLnByZXZTdGVwID0gc3RlcDtcbiAgICAgIGNvbnN0IGV2ZW50OiBJU3RlcENoYW5nZUV2ZW50ID0ge1xuICAgICAgICBuZXdTdGVwOiBzdGVwLFxuICAgICAgICBwcmV2U3RlcCxcbiAgICAgIH07XG4gICAgICB0aGlzLl9kZWFjdGl2YXRlQWxsQnV0KHN0ZXApO1xuICAgICAgdGhpcy5zdGVwQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb29wcyB0aHJvdWdoIFtUZFN0ZXBDb21wb25lbnRdIGNoaWxkcmVuIGVsZW1lbnRzIGFuZCBkZWFjdGl2YXRlcyB0aGVtIGlnbm9yaW5nIHRoZSBvbmUgcGFzc2VkIGFzIGFuIGFyZ3VtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfZGVhY3RpdmF0ZUFsbEJ1dChhY3RpdmVTdGVwOiBUZFN0ZXBDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGVwc1xuICAgICAgLmZpbHRlcigoc3RlcDogVGRTdGVwQ29tcG9uZW50KSA9PiBzdGVwICE9PSBhY3RpdmVTdGVwKVxuICAgICAgLmZvckVhY2goKHN0ZXA6IFRkU3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgICBzdGVwLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWdpc3RlclN0ZXBzKCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YmNyaXB0aW9ucyA9IFtdO1xuICAgIHRoaXMuX3N0ZXBzLnRvQXJyYXkoKS5mb3JFYWNoKChzdGVwOiBUZFN0ZXBDb21wb25lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gc3RlcC5hY3RpdmF0ZWQuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fb25TdGVwU2VsZWN0aW9uKHN0ZXApO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zdWJjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVyZWdpc3RlclN0ZXBzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdWJjcmlwdGlvbnMpIHtcbiAgICAgIHRoaXMuX3N1YmNyaXB0aW9ucy5mb3JFYWNoKChzdWJzOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgc3Vicy51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zdWJjcmlwdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=