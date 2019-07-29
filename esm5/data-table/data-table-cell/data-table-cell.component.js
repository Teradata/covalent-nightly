/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef, HostBinding } from '@angular/core';
var TdDataTableCellComponent = /** @class */ (function () {
    function TdDataTableCellComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * numeric?: boolean
         * Makes cell follow the numeric data-table specs.
         * Defaults to 'false'
         */
        this.numeric = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-cell');
    }
    Object.defineProperty(TdDataTableCellComponent.prototype, "align", {
        get: /**
         * @return {?}
         */
        function () {
            return this._align;
        },
        /**
         * align?: 'start' | 'center' | 'end'
         * Makes cell content align on demand
         * Defaults to 'left', overrides numeric
         */
        set: /**
         * align?: 'start' | 'center' | 'end'
         * Makes cell content align on demand
         * Defaults to 'left', overrides numeric
         * @param {?} align
         * @return {?}
         */
        function (align) {
            this._align = align;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableCellComponent.prototype, "bindNumeric", {
        get: /**
         * @return {?}
         */
        function () {
            return this.numeric;
        },
        enumerable: true,
        configurable: true
    });
    TdDataTableCellComponent.decorators = [
        { type: Component, args: [{
                    /* tslint:disable-next-line */
                    selector: 'td[td-data-table-cell]',
                    template: "<div\n  class=\"td-data-table-cell-content-wrapper\"\n  [class.td-data-table-cell-numeric]=\"numeric\"\n  [class.td-data-table-cell-align-center]=\"align === 'center'\"\n  [class.td-data-table-cell-align-end]=\"align === 'end'\"\n  [class.td-data-table-cell-align-start]=\"align === 'start'\"\n>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{vertical-align:middle;text-align:left;padding:0}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>.td-data-table-cell-content-wrapper{padding:0 28px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-numeric{-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-start{-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-end{-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-center{-ms-flex-pack:center;justify-content:center}:host:first-child>.td-data-table-cell-content-wrapper{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
                }] }
    ];
    /** @nocollapse */
    TdDataTableCellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TdDataTableCellComponent.propDecorators = {
        numeric: [{ type: Input, args: ['numeric',] }],
        align: [{ type: Input }],
        bindNumeric: [{ type: HostBinding, args: ['class.mat-numeric',] }]
    };
    return TdDataTableCellComponent;
}());
export { TdDataTableCellComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdDataTableCellComponent.prototype._align;
    /**
     * numeric?: boolean
     * Makes cell follow the numeric data-table specs.
     * Defaults to 'false'
     * @type {?}
     */
    TdDataTableCellComponent.prototype.numeric;
    /**
     * @type {?}
     * @private
     */
    TdDataTableCellComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdDataTableCellComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJkYXRhLXRhYmxlLWNlbGwvZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJckY7SUFrQ0Usa0NBQW9CLFdBQXVCLEVBQVUsU0FBb0I7UUFBckQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXOzs7Ozs7UUFwQnZELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFxQnpDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDaEYsQ0FBQztJQWZELHNCQUNJLDJDQUFLOzs7O1FBR1Q7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQztRQVhEOzs7O1dBSUc7Ozs7Ozs7O1FBQ0gsVUFDVSxLQUEyQjtZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUtELHNCQUNJLGlEQUFXOzs7O1FBRGY7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7O2dCQWhDRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSx3QkFBd0I7b0JBRWxDLDBWQUErQzs7aUJBQ2hEOzs7O2dCQVRxQyxVQUFVO2dCQUFyQixTQUFTOzs7MEJBa0JqQyxLQUFLLFNBQUMsU0FBUzt3QkFPZixLQUFLOzhCQVFMLFdBQVcsU0FBQyxtQkFBbUI7O0lBUWxDLCtCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0EvQlksd0JBQXdCOzs7Ozs7SUFDbkMsMENBQXFDOzs7Ozs7O0lBT3JDLDJDQUEyQzs7Ozs7SUFvQi9CLCtDQUErQjs7Ozs7SUFBRSw2Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFRkRGF0YVRhYmxlQ2VsbEFsaWduID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCc7XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0ZFt0ZC1kYXRhLXRhYmxlLWNlbGxdJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLWNlbGwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUNlbGxDb21wb25lbnQge1xuICBwcml2YXRlIF9hbGlnbjogVGREYXRhVGFibGVDZWxsQWxpZ247XG5cbiAgLyoqXG4gICAqIG51bWVyaWM/OiBib29sZWFuXG4gICAqIE1ha2VzIGNlbGwgZm9sbG93IHRoZSBudW1lcmljIGRhdGEtdGFibGUgc3BlY3MuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnbnVtZXJpYycpIG51bWVyaWM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogYWxpZ24/OiAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJ1xuICAgKiBNYWtlcyBjZWxsIGNvbnRlbnQgYWxpZ24gb24gZGVtYW5kXG4gICAqIERlZmF1bHRzIHRvICdsZWZ0Jywgb3ZlcnJpZGVzIG51bWVyaWNcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnbihhbGlnbjogVGREYXRhVGFibGVDZWxsQWxpZ24pIHtcbiAgICB0aGlzLl9hbGlnbiA9IGFsaWduO1xuICB9XG4gIGdldCBhbGlnbigpOiBUZERhdGFUYWJsZUNlbGxBbGlnbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtbnVtZXJpYycpXG4gIGdldCBiaW5kTnVtZXJpYygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5udW1lcmljO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWRhdGEtdGFibGUtY2VsbCcpO1xuICB9XG59XG4iXX0=