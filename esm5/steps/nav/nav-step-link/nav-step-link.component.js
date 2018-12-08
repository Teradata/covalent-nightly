/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, ElementRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { _TdStepMixinBase, StepState } from '../../step.component';
var TdNavStepLinkComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdNavStepLinkComponent, _super);
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
export { TdNavStepLinkComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXN0ZXAtbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9zdGVwcy8iLCJzb3VyY2VzIjpbIm5hdi9uYXYtc3RlcC1saW5rL25hdi1zdGVwLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRTtJQWM0QyxrREFBZ0I7SUEwRDFELGdDQUFvQixrQkFBcUMsRUFDdEMsVUFBc0I7UUFEekMsWUFFRSxpQkFBTyxTQUNSO1FBSG1CLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDdEMsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUF6RGpDLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTSxHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUM7O0lBMEQzQyxDQUFDO0lBaERELHNCQUNJLHlDQUFLOzs7O1FBYVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQztRQXJCRDs7OztXQUlHOzs7Ozs7OztRQUNILFVBQ1UsS0FBZ0I7WUFDeEIsUUFBUSxLQUFLLEVBQUU7Z0JBQ2IsS0FBSyxTQUFTLENBQUMsUUFBUTtvQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO29CQUNqQyxNQUFNO2dCQUNSLEtBQUssU0FBUyxDQUFDLFFBQVE7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztvQkFDakMsTUFBTTtnQkFDUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQzdCLE1BQU07YUFDVDtRQUNILENBQUM7OztPQUFBO0lBdUJELHNCQUNJLDBDQUFNOzs7O1FBSVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQztRQVhEOzs7V0FHRzs7Ozs7OztRQUNILFVBQ1csTUFBZTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTs7Ozs7SUFVRCw2Q0FBWTs7OztJQUFaLFVBQWEsS0FBWTtRQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Z0JBbEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUV2QyxpZkFBNkM7b0JBQzdDLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUM7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztvQkFFL0MsSUFBSSxFQUFFO3dCQUNKLGlCQUFpQixFQUFFLG1CQUFtQjt3QkFDdEMsaUJBQWlCLEVBQUUsa0JBQWtCO3dCQUNyQyxzQkFBc0IsRUFBRSxrQkFBa0I7d0JBQzFDLFNBQVMsRUFBRSxzQkFBc0I7cUJBQ2xDOztpQkFDRjs7OztnQkFwQjRDLGlCQUFpQjtnQkFBUyxVQUFVOzs7d0JBa0M5RSxLQUFLLFNBQUMsT0FBTzt3QkF1QmIsS0FBSyxTQUFDLE9BQU87MkJBT2IsS0FBSyxTQUFDLFVBQVU7eUJBTWhCLEtBQUssU0FBQyxRQUFROztJQXFCakIsNkJBQUM7Q0FBQSxBQXBGRCxDQWM0QyxnQkFBZ0IsR0FzRTNEO1NBdEVZLHNCQUFzQjs7O0lBRWpDLHlDQUFpQzs7SUFDakMsd0NBQTJDOztJQUczQyx3Q0FBZTs7Ozs7OztJQThCZix1Q0FBOEI7Ozs7Ozs7SUFPOUIsMENBQW9DOztJQWV4QixvREFBNkM7O0lBQzdDLDRDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBJbnB1dCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgSUNhbkRpc2FibGVSaXBwbGUgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuaW1wb3J0IHsgX1RkU3RlcE1peGluQmFzZSwgU3RlcFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RlcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbdGQtc3RlcC1saW5rXSxbdGRTdGVwTGlua10nLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtc3RlcC1saW5rLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtc3RlcC1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2Rpc2FibGVSaXBwbGUnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBob3N0OiB7XG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdkaXNhYmxlZCA/IC0xIDogMCcsXG4gICAgJ1thdHRyLmRpc2FibGVkXSc6ICdkaXNhYmxlZCB8fCBudWxsJyxcbiAgICAnW2NsYXNzLm1hdC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQgfHwgbnVsbCcsXG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdlN0ZXBMaW5rQ29tcG9uZW50IGV4dGVuZHMgX1RkU3RlcE1peGluQmFzZSBpbXBsZW1lbnRzIElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSB7XG5cbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3N0YXRlOiBTdGVwU3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcblxuICAvLyBOdW1iZXIgdG8gZGlzcGxheSBpbiBzdGVwIGhlYWRlclxuICBudW1iZXI6IG51bWJlcjtcblxuICAvKipcbiAgICogc3RhdGU/OiBTdGVwU3RhdGUgb3IgWydub25lJyB8ICdyZXF1aXJlZCcgfCAnY29tcGxldGUnXVxuICAgKiBTZXRzIHN0YXRlIG9mIGNvbXBvbmVudCBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtTdGVwU3RhdGUuTm9uZSB8ICdub25lJ10uXG4gICAqL1xuICBASW5wdXQoJ3N0YXRlJylcbiAgc2V0IHN0YXRlKHN0YXRlOiBTdGVwU3RhdGUpIHtcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICBjYXNlIFN0ZXBTdGF0ZS5Db21wbGV0ZTpcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTdGVwU3RhdGUuQ29tcGxldGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTdGVwU3RhdGUuUmVxdWlyZWQ6XG4gICAgICAgIHRoaXMuX3N0YXRlID0gU3RlcFN0YXRlLlJlcXVpcmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX3N0YXRlID0gU3RlcFN0YXRlLk5vbmU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBnZXQgc3RhdGUoKTogU3RlcFN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogbGFiZWw/OiBzdHJpbmdcbiAgICogTGFiZWwgdG8gZGlzcGxheSBpbiBzdGVwIGhlYWRlclxuICAgKiBEZWZhdWx0cyB0byBlbXB0eVxuICAgKi9cbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHN1YmxhYmVsPzogc3RyaW5nXG4gICAqIFN1YmxhYmVsIHRvIGRpc3BsYXkgaW4gc3RlcCBoZWFkZXJcbiAgICogRGVmYXVsdHMgdG8gZW1wdHlcbiAgICovXG4gIEBJbnB1dCgnc3VibGFiZWwnKSBzdWJsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBhY3RpdmU/OiBib29sZWFuXG4gICAqIFRvZ2dsZXMgY29tcG9uZW50IGJldHdlZW4gYWN0aXZlL2RlYWN0aXZlLlxuICAgKi9cbiAgQElucHV0KCdhY3RpdmUnKVxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShhY3RpdmUpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgX2hhbmRsZUNsaWNrKGNsaWNrOiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICBjbGljay5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xpY2suc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==