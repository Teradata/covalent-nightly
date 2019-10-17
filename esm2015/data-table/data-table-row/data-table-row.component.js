/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef, HostListener, } from '@angular/core';
export class TdDataTableColumnRowComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
    }
}
TdDataTableColumnRowComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'tr[td-data-table-column-row]',
                template: "<ng-content></ng-content>\n",
                styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
            }] }
];
/** @nocollapse */
TdDataTableColumnRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TdDataTableColumnRowComponent.prototype._elementRef;
    /**
     * @type {?}
     * @protected
     */
    TdDataTableColumnRowComponent.prototype._renderer;
}
export class TdDataTableRowComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._selected = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        if (selected) {
            this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
        }
        else {
            this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
        }
        this._selected = selected;
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @return {?}
     */
    get height() {
        /** @type {?} */
        let height = 48;
        if (this._elementRef.nativeElement) {
            height = ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
        }
        return height;
    }
    /**
     * Listening to click event to explicitly focus the row element.
     * @return {?}
     */
    clickListener() {
        this.focus();
    }
    /**
     * @return {?}
     */
    focus() {
        this._elementRef.nativeElement.focus();
    }
}
TdDataTableRowComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'tr[td-data-table-row]',
                template: "<ng-content></ng-content>\n",
                styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
            }] }
];
/** @nocollapse */
TdDataTableRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableRowComponent.propDecorators = {
    selected: [{ type: Input, args: ['selected',] }],
    clickListener: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdDataTableRowComponent.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    TdDataTableRowComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdDataTableRowComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJkYXRhLXRhYmxlL2RhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFHVixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFXdkIsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7SUFDeEMsWUFBc0IsV0FBdUIsRUFBWSxTQUFvQjtRQUF2RCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFZLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7WUFURixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSw4QkFBOEI7Z0JBRXhDLHVDQUE4Qzs7YUFDL0M7Ozs7WUFkQyxVQUFVO1lBRFYsU0FBUzs7Ozs7OztJQWlCRyxvREFBaUM7Ozs7O0lBQUUsa0RBQThCOztBQVcvRSxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQXdCbEMsWUFBb0IsV0FBdUIsRUFBVSxTQUFvQjtRQUFyRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUF2QmpFLGNBQVMsR0FBWSxLQUFLLENBQUM7UUF3QmpDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7SUF2QkQsSUFDSSxRQUFRLENBQUMsUUFBaUI7UUFDNUIsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDM0U7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDOzs7O0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07O1lBQ0osTUFBTSxHQUFXLEVBQUU7UUFDdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtZQUNsQyxNQUFNLEdBQUcsQ0FBQyxtQkFBYSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDdkY7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQVVELGFBQWE7UUFDWCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pDLENBQUM7OztZQTVDRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSx1QkFBdUI7Z0JBRWpDLHVDQUE4Qzs7YUFDL0M7Ozs7WUExQkMsVUFBVTtZQURWLFNBQVM7Ozt1QkErQlIsS0FBSyxTQUFDLFVBQVU7NEJBNEJoQixZQUFZLFNBQUMsT0FBTzs7Ozs7OztJQTlCckIsNENBQW1DOzs7OztJQXVCdkIsOENBQStCOzs7OztJQUFFLDRDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgSG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS10YWJsZS1jZWxsL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndHJbdGQtZGF0YS10YWJsZS1jb2x1bW4tcm93XScsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQ29sdW1uUm93Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1kYXRhLXRhYmxlLWNvbHVtbi1yb3cnKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndHJbdGQtZGF0YS10YWJsZS1yb3ddJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVSb3dDb21wb25lbnQge1xuICBwcml2YXRlIF9zZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnc2VsZWN0ZWQnKVxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLXNlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLXNlbGVjdGVkJyk7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gIH1cbiAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICBsZXQgaGVpZ2h0OiBudW1iZXIgPSA0ODtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBoZWlnaHQgPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWRhdGEtdGFibGUtcm93Jyk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuaW5nIHRvIGNsaWNrIGV2ZW50IHRvIGV4cGxpY2l0bHkgZm9jdXMgdGhlIHJvdyBlbGVtZW50LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBjbGlja0xpc3RlbmVyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iXX0=