/**
 * @fileoverview added by tsickle
 * Generated from: data-table-column/data-table-column.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Renderer2, ElementRef, HostBinding, HostListener, ViewChild, } from '@angular/core';
import { TdDataTableSortingOrder } from '../data-table.component';
/**
 * @record
 */
export function ITdDataTableSortChangeEvent() { }
if (false) {
    /** @type {?} */
    ITdDataTableSortChangeEvent.prototype.order;
    /** @type {?} */
    ITdDataTableSortChangeEvent.prototype.name;
}
export class TdDataTableColumnComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._sortOrder = TdDataTableSortingOrder.Ascending;
        /**
         * name?: string
         * Sets unique column [name] for [sortable] events.
         */
        this.name = '';
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         */
        this.sortable = false;
        /**
         * active?: boolean
         * Sets column to active state when 'true'.
         * Defaults to 'false'
         */
        this.active = false;
        /**
         * numeric?: boolean
         * Makes column follow the numeric data-table specs and sort icon.
         * Defaults to 'false'
         */
        this.numeric = false;
        /**
         * if column sort order is present
         */
        this.isColumnSortOrder = false;
        /**
         * sortChange?: function
         * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
         * Emits an [ITdDataTableSortChangeEvent] implemented object.
         */
        this.sortChange = new EventEmitter();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column');
    }
    /**
     * @return {?}
     */
    get projectedWidth() {
        if (this._columnContent && this._columnContent.nativeElement) {
            return ((/** @type {?} */ (this._columnContent.nativeElement))).getBoundingClientRect().width;
        }
        return 100;
    }
    /**
     * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
     * Sets the sort order of column.
     * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
     * @param {?} order
     * @return {?}
     */
    set sortOrder(order) {
        /** @type {?} */
        const sortOrder = order ? order.toUpperCase() : 'ASC';
        if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
            throw new Error('[sortOrder] must be empty, ASC or DESC');
        }
        this._sortOrder = sortOrder === 'ASC' ? TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
    }
    /**
     * @return {?}
     */
    get bindClickable() {
        return this.sortable;
    }
    /**
     * @return {?}
     */
    get bingSortable() {
        return this.sortable;
    }
    /**
     * @return {?}
     */
    get bindActive() {
        return this.active;
    }
    /**
     * @return {?}
     */
    get bindNumeric() {
        return this.numeric;
    }
    /**
     * Listening to click event on host to throw a sort event
     * @return {?}
     */
    handleClick() {
        if (this.sortable) {
            this.sortChange.emit({ name: this.name, order: this._sortOrder });
        }
    }
    /**
     * @return {?}
     */
    isAscending() {
        return this._sortOrder === TdDataTableSortingOrder.Ascending;
    }
    /**
     * @return {?}
     */
    isDescending() {
        return this._sortOrder === TdDataTableSortingOrder.Descending;
    }
}
TdDataTableColumnComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'th[td-data-table-column]',
                template: "<span #columnContent class=\"td-data-table-heading\">\n  <mat-icon\n    class=\"td-data-table-sort-icon\"\n    *ngIf=\"sortable && numeric\"\n    [class.mat-asc]=\"isAscending()\"\n    [class.mat-desc]=\"isDescending()\"\n  >\n    arrow_upward\n  </mat-icon>\n  <span>\n    <ng-content></ng-content>\n  </span>\n  <mat-icon\n    class=\"td-data-table-sort-icon\"\n    *ngIf=\"sortable && !numeric\"\n    [class.mat-asc]=\"isAscending()\"\n    [class.mat-desc]=\"isDescending()\"\n    [class.display-numeric]=\"isColumnSortOrder\"\n  >\n    arrow_upward\n  </mat-icon>\n</span>\n<ng-content select=\"[td-column-resizer]\"></ng-content>\n",
                styles: [":host{padding:0;position:relative;text-align:left;vertical-align:middle;white-space:nowrap}:host>.td-data-table-heading{padding:0 28px}:host:first-child>.td-data-table-heading{padding-left:24px;padding-right:0}[dir=rtl] :host:first-child>.td-data-table-heading,body[dir=rtl] :host:first-child>.td-data-table-heading,html[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:0}[dir=rtl] :host:first-child>.td-data-table-heading,body[dir=rtl] :host:first-child>.td-data-table-heading,html[dir=rtl] :host:first-child>.td-data-table-heading{padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading{padding-left:28px;padding-right:24px}[dir=rtl] :host:last-child>.td-data-table-heading,body[dir=rtl] :host:last-child>.td-data-table-heading,html[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px}[dir=rtl] :host:last-child>.td-data-table-heading,body[dir=rtl] :host:last-child>.td-data-table-heading,html[dir=rtl] :host:last-child>.td-data-table-heading{padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host mat-icon{font-size:16px!important;height:16px;line-height:16px!important;width:16px}:host mat-icon.td-data-table-sort-icon{opacity:0;position:absolute;top:0;transition:transform .25s}:host mat-icon.td-data-table-sort-icon.display-numeric{right:0}:host mat-icon.td-data-table-sort-icon.mat-asc{-ms-transform:rotate(0deg);transform:rotate(0deg)}:host mat-icon.td-data-table-sort-icon.mat-desc{-ms-transform:rotate(180deg);transform:rotate(180deg)}:host.mat-active.mat-sortable mat-icon.td-data-table-sort-icon,:host:hover.mat-sortable mat-icon.td-data-table-sort-icon{opacity:1}[dir=rtl] :host,body[dir=rtl] :host,html[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:none}:host .td-data-table-heading{display:inline-block;position:relative}:host.mat-numeric{text-align:right}[dir=rtl] :host.mat-numeric,body[dir=rtl] :host.mat-numeric,html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:-22px;margin-right:0}[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon,body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon,html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:0}[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon,body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon,html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-right:-22px;unicode-bidi:embed}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:6px;margin-right:0}[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon,body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon,html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:0}[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon,body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon,html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-right:6px;unicode-bidi:embed}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
            }] }
];
/** @nocollapse */
TdDataTableColumnComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableColumnComponent.propDecorators = {
    _columnContent: [{ type: ViewChild, args: ['columnContent', { read: ElementRef, static: true },] }],
    name: [{ type: Input }],
    sortable: [{ type: Input }],
    active: [{ type: Input }],
    numeric: [{ type: Input }],
    isColumnSortOrder: [{ type: Input }],
    sortOrder: [{ type: Input, args: ['sortOrder',] }],
    sortChange: [{ type: Output }],
    bindClickable: [{ type: HostBinding, args: ['class.mat-clickable',] }],
    bingSortable: [{ type: HostBinding, args: ['class.mat-sortable',] }],
    bindActive: [{ type: HostBinding, args: ['class.mat-active',] }],
    bindNumeric: [{ type: HostBinding, args: ['class.mat-numeric',] }],
    handleClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdDataTableColumnComponent.prototype._sortOrder;
    /** @type {?} */
    TdDataTableColumnComponent.prototype._columnContent;
    /**
     * name?: string
     * Sets unique column [name] for [sortable] events.
     * @type {?}
     */
    TdDataTableColumnComponent.prototype.name;
    /**
     * sortable?: boolean
     * Enables sorting events, sort icons and active column states.
     * Defaults to 'false'
     * @type {?}
     */
    TdDataTableColumnComponent.prototype.sortable;
    /**
     * active?: boolean
     * Sets column to active state when 'true'.
     * Defaults to 'false'
     * @type {?}
     */
    TdDataTableColumnComponent.prototype.active;
    /**
     * numeric?: boolean
     * Makes column follow the numeric data-table specs and sort icon.
     * Defaults to 'false'
     * @type {?}
     */
    TdDataTableColumnComponent.prototype.numeric;
    /**
     * if column sort order is present
     * @type {?}
     */
    TdDataTableColumnComponent.prototype.isColumnSortOrder;
    /**
     * sortChange?: function
     * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
     * Emits an [ITdDataTableSortChangeEvent] implemented object.
     * @type {?}
     */
    TdDataTableColumnComponent.prototype.sortChange;
    /**
     * @type {?}
     * @private
     */
    TdDataTableColumnComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdDataTableColumnComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJkYXRhLXRhYmxlLWNvbHVtbi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFbEUsaURBR0M7OztJQUZDLDRDQUErQjs7SUFDL0IsMkNBQWE7O0FBU2YsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFzRnJDLFlBQW9CLFdBQXVCLEVBQVUsU0FBb0I7UUFBckQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBckZqRSxlQUFVLEdBQTRCLHVCQUF1QixDQUFDLFNBQVMsQ0FBQzs7Ozs7UUFldkUsU0FBSSxHQUFXLEVBQUUsQ0FBQzs7Ozs7O1FBT2xCLGFBQVEsR0FBWSxLQUFLLENBQUM7Ozs7OztRQU8xQixXQUFNLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFPeEIsWUFBTyxHQUFZLEtBQUssQ0FBQzs7OztRQUt6QixzQkFBaUIsR0FBWSxLQUFLLENBQUM7Ozs7OztRQXNCbEMsZUFBVSxHQUE4QyxJQUFJLFlBQVksRUFBK0IsQ0FBQztRQXVCaEgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7O0lBbkZELElBQUksY0FBYztRQUNoQixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUU7WUFDNUQsT0FBTyxDQUFDLG1CQUFhLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQztTQUN2RjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7Ozs7SUF1Q0QsSUFDSSxTQUFTLENBQUMsS0FBcUI7O2NBQzNCLFNBQVMsR0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUM3RCxJQUFJLFNBQVMsS0FBSyxNQUFNLElBQUksU0FBUyxLQUFLLEtBQUssRUFBRTtZQUMvQyxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDO0lBQ2pILENBQUM7Ozs7SUFTRCxJQUNJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFVRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssdUJBQXVCLENBQUMsU0FBUyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLHVCQUF1QixDQUFDLFVBQVUsQ0FBQztJQUNoRSxDQUFDOzs7WUFoSEYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUVwQyx3b0JBQWlEOzthQUNsRDs7OztZQWxCQyxVQUFVO1lBRFYsU0FBUzs7OzZCQXVCUixTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO21CQWE3RCxLQUFLO3VCQU9MLEtBQUs7cUJBT0wsS0FBSztzQkFPTCxLQUFLO2dDQUtMLEtBQUs7d0JBT0wsS0FBSyxTQUFDLFdBQVc7eUJBZWpCLE1BQU07NEJBRU4sV0FBVyxTQUFDLHFCQUFxQjsyQkFLakMsV0FBVyxTQUFDLG9CQUFvQjt5QkFLaEMsV0FBVyxTQUFDLGtCQUFrQjswQkFLOUIsV0FBVyxTQUFDLG1CQUFtQjswQkFZL0IsWUFBWSxTQUFDLE9BQU87Ozs7Ozs7SUE1RnJCLGdEQUFnRjs7SUFFaEYsb0RBQTJGOzs7Ozs7SUFhM0YsMENBQTJCOzs7Ozs7O0lBTzNCLDhDQUFtQzs7Ozs7OztJQU9uQyw0Q0FBaUM7Ozs7Ozs7SUFPakMsNkNBQWtDOzs7OztJQUtsQyx1REFBNEM7Ozs7Ozs7SUFzQjVDLGdEQUFrSDs7Ozs7SUFzQnRHLGlEQUErQjs7Ozs7SUFBRSwrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciB9IGZyb20gJy4uL2RhdGEtdGFibGUuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQge1xuICBvcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXI7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBzZWxlY3RvcjogJ3RoW3RkLWRhdGEtdGFibGUtY29sdW1uXScsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcblxuICBAVmlld0NoaWxkKCdjb2x1bW5Db250ZW50JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgX2NvbHVtbkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IHByb2plY3RlZFdpZHRoKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX2NvbHVtbkNvbnRlbnQgJiYgdGhpcy5fY29sdW1uQ29udGVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9jb2x1bW5Db250ZW50Lm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gMTAwO1xuICB9XG5cbiAgLyoqXG4gICAqIG5hbWU/OiBzdHJpbmdcbiAgICogU2V0cyB1bmlxdWUgY29sdW1uIFtuYW1lXSBmb3IgW3NvcnRhYmxlXSBldmVudHMuXG4gICAqL1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogc29ydGFibGU/OiBib29sZWFuXG4gICAqIEVuYWJsZXMgc29ydGluZyBldmVudHMsIHNvcnQgaWNvbnMgYW5kIGFjdGl2ZSBjb2x1bW4gc3RhdGVzLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoKSBzb3J0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBhY3RpdmU/OiBib29sZWFuXG4gICAqIFNldHMgY29sdW1uIHRvIGFjdGl2ZSBzdGF0ZSB3aGVuICd0cnVlJy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIG51bWVyaWM/OiBib29sZWFuXG4gICAqIE1ha2VzIGNvbHVtbiBmb2xsb3cgdGhlIG51bWVyaWMgZGF0YS10YWJsZSBzcGVjcyBhbmQgc29ydCBpY29uLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoKSBudW1lcmljOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGlmIGNvbHVtbiBzb3J0IG9yZGVyIGlzIHByZXNlbnRcbiAgICovXG4gIEBJbnB1dCgpIGlzQ29sdW1uU29ydE9yZGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIHNvcnRPcmRlcj86IFsnQVNDJyB8ICdERVNDJ10gb3IgVGREYXRhVGFibGVTb3J0aW5nT3JkZXJcbiAgICogU2V0cyB0aGUgc29ydCBvcmRlciBvZiBjb2x1bW4uXG4gICAqIERlZmF1bHRzIHRvICdBU0MnIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZ1xuICAgKi9cbiAgQElucHV0KCdzb3J0T3JkZXInKVxuICBzZXQgc29ydE9yZGVyKG9yZGVyOiAnQVNDJyB8ICdERVNDJykge1xuICAgIGNvbnN0IHNvcnRPcmRlcjogc3RyaW5nID0gb3JkZXIgPyBvcmRlci50b1VwcGVyQ2FzZSgpIDogJ0FTQyc7XG4gICAgaWYgKHNvcnRPcmRlciAhPT0gJ0RFU0MnICYmIHNvcnRPcmRlciAhPT0gJ0FTQycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW3NvcnRPcmRlcl0gbXVzdCBiZSBlbXB0eSwgQVNDIG9yIERFU0MnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zb3J0T3JkZXIgPSBzb3J0T3JkZXIgPT09ICdBU0MnID8gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjb2x1bW4gaGVhZGVycyBhcmUgY2xpY2tlZC4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCkgc29ydENoYW5nZTogRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudD4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1jbGlja2FibGUnKVxuICBnZXQgYmluZENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LXNvcnRhYmxlJylcbiAgZ2V0IGJpbmdTb3J0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWFjdGl2ZScpXG4gIGdldCBiaW5kQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LW51bWVyaWMnKVxuICBnZXQgYmluZE51bWVyaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnVtZXJpYztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1kYXRhLXRhYmxlLWNvbHVtbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmluZyB0byBjbGljayBldmVudCBvbiBob3N0IHRvIHRocm93IGEgc29ydCBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBoYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zb3J0YWJsZSkge1xuICAgICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoeyBuYW1lOiB0aGlzLm5hbWUsIG9yZGVyOiB0aGlzLl9zb3J0T3JkZXIgfSk7XG4gICAgfVxuICB9XG5cbiAgaXNBc2NlbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRPcmRlciA9PT0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuICB9XG5cbiAgaXNEZXNjZW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmc7XG4gIH1cbn1cbiJdfQ==