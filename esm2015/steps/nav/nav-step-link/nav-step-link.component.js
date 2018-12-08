/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, ElementRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { _TdStepMixinBase, StepState } from '../../step.component';
export class TdNavStepLinkComponent extends _TdStepMixinBase {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} elementRef
     */
    constructor(_changeDetectorRef, elementRef) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this.elementRef = elementRef;
        this._active = false;
        this._state = StepState.None;
    }
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets state of component depending on value.
     * Defaults to [StepState.None | 'none'].
     * @param {?} state
     * @return {?}
     */
    set state(state) {
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
    }
    /**
     * @return {?}
     */
    get state() {
        return this._state;
    }
    /**
     * active?: boolean
     * Toggles component between active/deactive.
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        this._active = coerceBooleanProperty(active);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @param {?} click
     * @return {?}
     */
    _handleClick(click) {
        if (this.disabled) {
            click.preventDefault();
            click.stopImmediatePropagation();
        }
    }
}
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
TdNavStepLinkComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
TdNavStepLinkComponent.propDecorators = {
    state: [{ type: Input, args: ['state',] }],
    label: [{ type: Input, args: ['label',] }],
    sublabel: [{ type: Input, args: ['sublabel',] }],
    active: [{ type: Input, args: ['active',] }]
};
if (false) {
    /** @type {?} */
    TdNavStepLinkComponent.prototype._active;
    /** @type {?} */
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
    /** @type {?} */
    TdNavStepLinkComponent.prototype._changeDetectorRef;
    /** @type {?} */
    TdNavStepLinkComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXN0ZXAtbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9zdGVwcy8iLCJzb3VyY2VzIjpbIm5hdi9uYXYtc3RlcC1saW5rL25hdi1zdGVwLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBZ0JuRSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCOzs7OztJQTBEMUQsWUFBb0Isa0JBQXFDLEVBQ3RDLFVBQXNCO1FBQ3ZDLEtBQUssRUFBRSxDQUFDO1FBRlUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUN0QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBekRqQyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFdBQU0sR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBMEQzQyxDQUFDOzs7Ozs7OztJQWhERCxJQUNJLEtBQUssQ0FBQyxLQUFnQjtRQUN4QixRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssU0FBUyxDQUFDLFFBQVE7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztnQkFDakMsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLFFBQVE7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztnQkFDakMsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDN0IsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7OztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBb0JELElBQ0ksTUFBTSxDQUFDLE1BQWU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQU9ELFlBQVksQ0FBQyxLQUFZO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7WUFsRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBRXZDLGlmQUE2QztnQkFDN0MsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2dCQUUvQyxJQUFJLEVBQUU7b0JBQ0osaUJBQWlCLEVBQUUsbUJBQW1CO29CQUN0QyxpQkFBaUIsRUFBRSxrQkFBa0I7b0JBQ3JDLHNCQUFzQixFQUFFLGtCQUFrQjtvQkFDMUMsU0FBUyxFQUFFLHNCQUFzQjtpQkFDbEM7O2FBQ0Y7Ozs7WUFwQjRDLGlCQUFpQjtZQUFTLFVBQVU7OztvQkFrQzlFLEtBQUssU0FBQyxPQUFPO29CQXVCYixLQUFLLFNBQUMsT0FBTzt1QkFPYixLQUFLLFNBQUMsVUFBVTtxQkFNaEIsS0FBSyxTQUFDLFFBQVE7Ozs7SUEvQ2YseUNBQWlDOztJQUNqQyx3Q0FBMkM7O0lBRzNDLHdDQUFlOzs7Ozs7O0lBOEJmLHVDQUE4Qjs7Ozs7OztJQU85QiwwQ0FBb0M7O0lBZXhCLG9EQUE2Qzs7SUFDN0MsNENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIElucHV0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5pbXBvcnQgeyBfVGRTdGVwTWl4aW5CYXNlLCBTdGVwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGVwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1t0ZC1zdGVwLWxpbmtdLFt0ZFN0ZXBMaW5rXScsXG4gIHN0eWxlVXJsczogWycuL25hdi1zdGVwLWxpbmsuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1zdGVwLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZGlzYWJsZVJpcHBsZSddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGhvc3Q6IHtcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ2Rpc2FibGVkID8gLTEgOiAwJyxcbiAgICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkIHx8IG51bGwnLFxuICAgICdbY2xhc3MubWF0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCB8fCBudWxsJyxcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2U3RlcExpbmtDb21wb25lbnQgZXh0ZW5kcyBfVGRTdGVwTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcblxuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8vIE51bWJlciB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gIG51bWJlcjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBzdGF0ZT86IFN0ZXBTdGF0ZSBvciBbJ25vbmUnIHwgJ3JlcXVpcmVkJyB8ICdjb21wbGV0ZSddXG4gICAqIFNldHMgc3RhdGUgb2YgY29tcG9uZW50IGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW1N0ZXBTdGF0ZS5Ob25lIHwgJ25vbmUnXS5cbiAgICovXG4gIEBJbnB1dCgnc3RhdGUnKVxuICBzZXQgc3RhdGUoc3RhdGU6IFN0ZXBTdGF0ZSkge1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgU3RlcFN0YXRlLkNvbXBsZXRlOlxuICAgICAgICB0aGlzLl9zdGF0ZSA9IFN0ZXBTdGF0ZS5Db21wbGV0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFN0ZXBTdGF0ZS5SZXF1aXJlZDpcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTdGVwU3RhdGUuUmVxdWlyZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGdldCBzdGF0ZSgpOiBTdGVwU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBsYWJlbD86IHN0cmluZ1xuICAgKiBMYWJlbCB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gICAqIERlZmF1bHRzIHRvIGVtcHR5XG4gICAqL1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICogU3VibGFiZWwgdG8gZGlzcGxheSBpbiBzdGVwIGhlYWRlclxuICAgKiBEZWZhdWx0cyB0byBlbXB0eVxuICAgKi9cbiAgQElucHV0KCdzdWJsYWJlbCcpIHN1YmxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogVG9nZ2xlcyBjb21wb25lbnQgYmV0d2VlbiBhY3RpdmUvZGVhY3RpdmUuXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZScpXG4gIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGFjdGl2ZSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBfaGFuZGxlQ2xpY2soY2xpY2s6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGNsaWNrLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjbGljay5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxufVxuIl19