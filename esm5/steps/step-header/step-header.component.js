/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { mixinDisabled, mixinDisableRipple } from '@covalent/core/common';
import { StepState } from '../step.component';
var TdStepHeaderBase = /** @class */ (function () {
    function TdStepHeaderBase() {
    }
    return TdStepHeaderBase;
}());
export { TdStepHeaderBase };
/* tslint:disable-next-line */
/** @type {?} */
export var _TdStepHeaderMixinBase = mixinDisableRipple(mixinDisabled(TdStepHeaderBase));
var TdStepHeaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdStepHeaderComponent, _super);
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
                    styles: [".td-step-header{position:relative;outline:0;height:72px;-ms-flex-direction:row;flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.td-step-header:hover:not(.mat-disabled){cursor:pointer}.td-step-header mat-icon.td-edit-icon{margin:0 8px}.td-step-header mat-icon.mat-warn{font-size:24px;height:24px;width:24px}.td-step-header mat-icon.mat-complete{position:relative;left:-2px;top:2px;font-size:28px;height:24px;width:24px}.td-step-header .td-circle{height:24px;width:24px;line-height:24px;border-radius:99%;text-align:center;-ms-flex:none;flex:none}.td-step-header .td-circle mat-icon{margin-top:2px;font-weight:700}.td-step-header .td-triangle>mat-icon{font-size:25px}::ng-deep :not([dir=rtl]) .td-step-header .td-circle,::ng-deep :not([dir=rtl]) .td-step-header .td-complete,::ng-deep :not([dir=rtl]) .td-step-header .td-triangle{margin-left:8px;margin-right:0}::ng-deep [dir=rtl] .td-step-header .td-circle,::ng-deep [dir=rtl] .td-step-header .td-complete,::ng-deep [dir=rtl] .td-step-header .td-triangle{margin-left:0;margin-right:8px}.td-step-header .td-circle,.td-step-header .td-complete{font-size:14px}.td-step-header .td-step-label-wrapper{padding-left:8px;padding-right:8px}.td-step-header .td-step-header-separator{-ms-flex:1;flex:1;box-sizing:border-box}"]
                }] }
    ];
    TdStepHeaderComponent.propDecorators = {
        number: [{ type: Input, args: ['number',] }],
        active: [{ type: Input, args: ['active',] }],
        state: [{ type: Input, args: ['state',] }]
    };
    return TdStepHeaderComponent;
}(_TdStepHeaderMixinBase));
export { TdStepHeaderComponent };
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvIiwic291cmNlcyI6WyJzdGVwLWhlYWRlci9zdGVwLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWUsYUFBYSxFQUFxQixrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QztJQUFBO0lBQStCLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFBaEMsSUFBZ0M7Ozs7QUFHaEMsTUFBTSxLQUFPLHNCQUFzQixHQUFHLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXpGO0lBTTJDLGlEQUFzQjtJQU5qRTtRQUFBLHFFQXVDQzs7Ozs7O1FBZmlCLFdBQUssR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDOztJQWVwRCxDQUFDO0lBYkM7O09BRUc7Ozs7O0lBQ0gsMENBQVU7Ozs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwwQ0FBVTs7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDO29CQUVyQyw2ekNBQTJDOztpQkFDNUM7Ozt5QkFNRSxLQUFLLFNBQUMsUUFBUTt5QkFNZCxLQUFLLFNBQUMsUUFBUTt3QkFPZCxLQUFLLFNBQUMsT0FBTzs7SUFlaEIsNEJBQUM7Q0FBQSxBQXZDRCxDQU0yQyxzQkFBc0IsR0FpQ2hFO1NBakNZLHFCQUFxQjs7Ozs7O0lBS2hDLHVDQUFnQzs7Ozs7O0lBTWhDLHVDQUFpQzs7Ozs7OztJQU9qQyxzQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkLCBJQ2FuRGlzYWJsZVJpcHBsZSwgbWl4aW5EaXNhYmxlUmlwcGxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuaW1wb3J0IHsgU3RlcFN0YXRlIH0gZnJvbSAnLi4vc3RlcC5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgVGRTdGVwSGVhZGVyQmFzZSB7fVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRTdGVwSGVhZGVyTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlUmlwcGxlKG1peGluRGlzYWJsZWQoVGRTdGVwSGVhZGVyQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1zdGVwLWhlYWRlcicsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICdkaXNhYmxlUmlwcGxlJ10sXG4gIHN0eWxlVXJsczogWycuL3N0ZXAtaGVhZGVyLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFN0ZXBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBfVGRTdGVwSGVhZGVyTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcblxuICAvKipcbiAgICogTnVtYmVyIGFzc2lnbmVkIHRvIFtUZFN0ZXBIZWFkZXJDb21wb25lbnRdLlxuICAgKi9cbiAgQElucHV0KCdudW1iZXInKSBudW1iZXI6IG51bWJlcjtcblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBTZXRzIGZvciBhY3RpdmUvaW5hY3RpdmUgc3RhdGVzIG9uIGhlYWRlci5cbiAgICovXG4gIEBJbnB1dCgnYWN0aXZlJykgYWN0aXZlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBzdGF0ZT86IFN0ZXBTdGF0ZSBvciBbJ25vbmUnIHwgJ3JlcXVpcmVkJyB8ICdjb21wbGV0ZSddXG4gICAqIFNldHMgc3R5bGVzIGZvciBzdGF0ZSBvZiBoZWFkZXIuXG4gICAqIERlZmF1bHRzIHRvIFtTdGVwU3RhdGUuTm9uZSB8ICdub25lJ10uXG4gICAqL1xuICBASW5wdXQoJ3N0YXRlJykgc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLkNvbXBsZXRlIHwgJ2NvbXBsZXRlJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0ZXBTdGF0ZS5Db21wbGV0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLlJlcXVpcmVkIHwgJ3JlcXVpcmVkJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN0ZXBTdGF0ZS5SZXF1aXJlZDtcbiAgfVxufVxuIl19