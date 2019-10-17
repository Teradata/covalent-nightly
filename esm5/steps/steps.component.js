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
     * and emits [onStepChange] event.
     */
    /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [onStepChange] event.
     * @private
     * @param {?} step
     * @return {?}
     */
    TdStepsComponent.prototype._onStepSelection = /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [onStepChange] event.
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
            this.onStepChange.emit(event_1);
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
            var subscription = step.onActivated.asObservable().subscribe((/**
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
        onStepChange: [{ type: Output, args: ['stepChange',] }]
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
     * Method to be executed when [onStepChange] event is emitted.
     * Emits an [IStepChangeEvent] implemented object.
     * @type {?}
     */
    TdStepsComponent.prototype.onStepChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJzdGVwcy9zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRW5ELHNDQUdDOzs7SUFGQyxtQ0FBeUI7O0lBQ3pCLG9DQUEwQjs7OztJQUkxQixVQUFXLFVBQVU7SUFDckIsWUFBYSxZQUFZOzs7QUFHM0I7SUFBQTtRQVdVLFVBQUssR0FBYSxRQUFRLENBQUMsUUFBUSxDQUFDOzs7Ozs7UUF1Q3RCLGlCQUFZLEdBQW1DLElBQUksWUFBWSxFQUFvQixDQUFDO0lBcUY1RyxDQUFDO0lBekhDLHNCQUNJLDBDQUFZOzs7OztRQURoQixVQUNpQixLQUFpQztZQUNoRCxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBT0Qsc0JBQ0ksa0NBQUk7Ozs7UUFTUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO1FBaEJEOzs7V0FHRzs7Ozs7OztRQUNILFVBQ1MsSUFBYztZQUNyQixRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLFFBQVEsQ0FBQyxVQUFVO29CQUN0QixJQUFJLENBQUMsS0FBSyxH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QkFFcEIscXNFQUFxQzs7b0JBRXJDLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsVUFBVTtxQkFDbEI7O2lCQUNGOzs7K0JBTUUsZUFBZSxTQUFDLGVBQWU7dUJBaUIvQixLQUFLLFNBQUMsTUFBTTsrQkFtQlosTUFBTSxTQUFDLFlBQVk7O0lBcUZ0Qix1QkFBQztDQUFBLEFBdklELElBdUlDO1NBOUhZLGdCQUFnQjs7Ozs7O0lBQzNCLHlDQUFzQzs7Ozs7SUFDdEMsaUNBQTRDOzs7OztJQUM1QyxrQ0FBMkM7O0lBYTNDLG9DQUEwQjs7Ozs7OztJQXlCMUIsd0NBQTBHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZFN0ZXBDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJU3RlcENoYW5nZUV2ZW50IHtcbiAgbmV3U3RlcDogVGRTdGVwQ29tcG9uZW50O1xuICBwcmV2U3RlcDogVGRTdGVwQ29tcG9uZW50O1xufVxuXG5leHBvcnQgZW51bSBTdGVwTW9kZSB7XG4gIFZlcnRpY2FsID0gJ3ZlcnRpY2FsJyxcbiAgSG9yaXpvbnRhbCA9ICdob3Jpem9udGFsJyxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtc3RlcHMnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwcy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcHMuY29tcG9uZW50Lmh0bWwnLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndGQtc3RlcHMnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUZFN0ZXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBfc3ViY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXTtcbiAgcHJpdmF0ZSBfbW9kZTogU3RlcE1vZGUgPSBTdGVwTW9kZS5WZXJ0aWNhbDtcbiAgcHJpdmF0ZSBfc3RlcHM6IFF1ZXJ5TGlzdDxUZFN0ZXBDb21wb25lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRTdGVwQ29tcG9uZW50KVxuICBzZXQgc3RlcHNDb250ZW50KHN0ZXBzOiBRdWVyeUxpc3Q8VGRTdGVwQ29tcG9uZW50Pikge1xuICAgIGlmIChzdGVwcykge1xuICAgICAgdGhpcy5fc3RlcHMgPSBzdGVwcztcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3RlcHMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3RlcHMoKTogVGRTdGVwQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLl9zdGVwcy50b0FycmF5KCk7XG4gIH1cbiAgcHJldlN0ZXA6IFRkU3RlcENvbXBvbmVudDtcblxuICAvKipcbiAgICogbW9kZT86IFN0ZXBNb2RlIG9yIFtcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIl1cbiAgICogRGVmaW5lcyBpZiB0aGUgbW9kZSBvZiB0aGUgW1RkU3RlcHNDb21wb25lbnRdLiAgRGVmYXVsdHMgdG8gW1N0ZXBNb2RlLlZlcnRpY2FsIHwgXCJ2ZXJ0aWNhbFwiXVxuICAgKi9cbiAgQElucHV0KCdtb2RlJylcbiAgc2V0IG1vZGUobW9kZTogU3RlcE1vZGUpIHtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgU3RlcE1vZGUuSG9yaXpvbnRhbDpcbiAgICAgICAgdGhpcy5fbW9kZSA9IFN0ZXBNb2RlLkhvcml6b250YWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fbW9kZSA9IFN0ZXBNb2RlLlZlcnRpY2FsO1xuICAgIH1cbiAgfVxuICBnZXQgbW9kZSgpOiBTdGVwTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gIH1cblxuICAvKipcbiAgICogc3RlcENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIFtvblN0ZXBDaGFuZ2VdIGV2ZW50IGlzIGVtaXR0ZWQuXG4gICAqIEVtaXRzIGFuIFtJU3RlcENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzdGVwQ2hhbmdlJykgb25TdGVwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SVN0ZXBDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElTdGVwQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVkIGFmdGVyIGNvbnRlbnQgaXMgaW5pdGlhbGl6ZWQsIGxvb3BzIHRocm91Z2ggYW55IFtUZFN0ZXBDb21wb25lbnRdIGNoaWxkcmVuIGVsZW1lbnRzLFxuICAgKiBhc3NpZ25zIHRoZW0gYSBudW1iZXIgYW5kIHN1YnNjcmliZXMgYXMgYW4gb2JzZXJ2ZXIgdG8gdGhlaXIgW29uQWN0aXZhdGVkXSBldmVudC5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZWdpc3RlclN0ZXBzKCk7XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmVzIGZyb20gW1RkU3RlcENvbXBvbmVudF0gY2hpbGRyZW4gZWxlbWVudHMgd2hlbiBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGVyZWdpc3RlclN0ZXBzKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyAndHJ1ZScgaWYgW21vZGVdIGVxdWFscyB0byBbU3RlcE1vZGUuSG9yaXpvbnRhbCB8ICdob3Jpem9udGFsJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzSG9yaXpvbnRhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZSA9PT0gU3RlcE1vZGUuSG9yaXpvbnRhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbbW9kZV0gZXF1YWxzIHRvIFtTdGVwTW9kZS5WZXJ0aWNhbCB8ICd2ZXJ0aWNhbCddLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBpc1ZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tb2RlID09PSBTdGVwTW9kZS5WZXJ0aWNhbDtcbiAgfVxuXG4gIGFyZVN0ZXBzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9zdGVwcy5maWx0ZXIoKHN0ZXA6IFRkU3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgICByZXR1cm4gc3RlcC5hY3RpdmU7XG4gICAgICB9KS5sZW5ndGggPiAwXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcyBwcmV2aW91cyBhbmQgbmV3IFtUZFN0ZXBDb21wb25lbnRdIG51bWJlcnMgaW4gYW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyBbSVN0ZXBDaGFuZ2VFdmVudF1cbiAgICogYW5kIGVtaXRzIFtvblN0ZXBDaGFuZ2VdIGV2ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfb25TdGVwU2VsZWN0aW9uKHN0ZXA6IFRkU3RlcENvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXZTdGVwICE9PSBzdGVwKSB7XG4gICAgICBsZXQgcHJldlN0ZXA6IFRkU3RlcENvbXBvbmVudCA9IHRoaXMucHJldlN0ZXA7XG4gICAgICB0aGlzLnByZXZTdGVwID0gc3RlcDtcbiAgICAgIGxldCBldmVudDogSVN0ZXBDaGFuZ2VFdmVudCA9IHtcbiAgICAgICAgbmV3U3RlcDogc3RlcCxcbiAgICAgICAgcHJldlN0ZXA6IHByZXZTdGVwLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2RlYWN0aXZhdGVBbGxCdXQoc3RlcCk7XG4gICAgICB0aGlzLm9uU3RlcENoYW5nZS5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9vcHMgdGhyb3VnaCBbVGRTdGVwQ29tcG9uZW50XSBjaGlsZHJlbiBlbGVtZW50cyBhbmQgZGVhY3RpdmF0ZXMgdGhlbSBpZ25vcmluZyB0aGUgb25lIHBhc3NlZCBhcyBhbiBhcmd1bWVudC5cbiAgICovXG4gIHByaXZhdGUgX2RlYWN0aXZhdGVBbGxCdXQoYWN0aXZlU3RlcDogVGRTdGVwQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5fc3RlcHNcbiAgICAgIC5maWx0ZXIoKHN0ZXA6IFRkU3RlcENvbXBvbmVudCkgPT4gc3RlcCAhPT0gYWN0aXZlU3RlcClcbiAgICAgIC5mb3JFYWNoKChzdGVwOiBUZFN0ZXBDb21wb25lbnQpID0+IHtcbiAgICAgICAgc3RlcC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJTdGVwcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJjcmlwdGlvbnMgPSBbXTtcbiAgICB0aGlzLl9zdGVwcy50b0FycmF5KCkuZm9yRWFjaCgoc3RlcDogVGRTdGVwQ29tcG9uZW50KSA9PiB7XG4gICAgICBsZXQgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBzdGVwLm9uQWN0aXZhdGVkLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX29uU3RlcFNlbGVjdGlvbihzdGVwKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc3ViY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2RlcmVnaXN0ZXJTdGVwcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3ViY3JpcHRpb25zKSB7XG4gICAgICB0aGlzLl9zdWJjcmlwdGlvbnMuZm9yRWFjaCgoc3ViczogU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fc3ViY3JpcHRpb25zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19