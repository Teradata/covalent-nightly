/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                styles: [":host{white-space:nowrap;position:relative;padding:0;vertical-align:middle;text-align:left}:host>.td-data-table-heading{padding:0 28px}:host:first-child>.td-data-table-heading{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host mat-icon{height:16px;width:16px;font-size:16px!important;line-height:16px!important}:host mat-icon.td-data-table-sort-icon{opacity:0;transition:transform .25s;position:absolute;top:0}:host mat-icon.td-data-table-sort-icon.display-numeric{right:0}:host mat-icon.td-data-table-sort-icon.mat-asc{-ms-transform:rotate(0);transform:rotate(0)}:host mat-icon.td-data-table-sort-icon.mat-desc{-ms-transform:rotate(180deg);transform:rotate(180deg)}:host.mat-active.mat-sortable mat-icon.td-data-table-sort-icon,:host:hover.mat-sortable mat-icon.td-data-table-sort-icon{opacity:1}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host .td-data-table-heading{display:inline-block;position:relative}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:-22px;margin-right:initial}html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:6px;margin-right:initial}html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRWxFLGlEQUdDOzs7SUFGQyw0Q0FBK0I7O0lBQy9CLDJDQUFhOztBQVNmLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBc0ZyQyxZQUFvQixXQUF1QixFQUFVLFNBQW9CO1FBQXJELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQXJGakUsZUFBVSxHQUE0Qix1QkFBdUIsQ0FBQyxTQUFTLENBQUM7Ozs7O1FBZXZFLFNBQUksR0FBVyxFQUFFLENBQUM7Ozs7OztRQU9sQixhQUFRLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFPMUIsV0FBTSxHQUFZLEtBQUssQ0FBQzs7Ozs7O1FBT3hCLFlBQU8sR0FBWSxLQUFLLENBQUM7Ozs7UUFLekIsc0JBQWlCLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFzQmxDLGVBQVUsR0FBOEMsSUFBSSxZQUFZLEVBQStCLENBQUM7UUF1QmhILElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDbEYsQ0FBQzs7OztJQW5GRCxJQUFJLGNBQWM7UUFDaEIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFO1lBQzVELE9BQU8sQ0FBQyxtQkFBYSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDdkY7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7Ozs7O0lBdUNELElBQ0ksU0FBUyxDQUFDLEtBQXFCOztjQUMzQixTQUFTLEdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFDN0QsSUFBSSxTQUFTLEtBQUssTUFBTSxJQUFJLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDL0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQztJQUNqSCxDQUFDOzs7O0lBU0QsSUFDSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBVUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyx1QkFBdUIsQ0FBQyxVQUFVLENBQUM7SUFDaEUsQ0FBQzs7O1lBaEhGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLDBCQUEwQjtnQkFFcEMsd29CQUFpRDs7YUFDbEQ7Ozs7WUFsQkMsVUFBVTtZQURWLFNBQVM7Ozs2QkF1QlIsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTttQkFhN0QsS0FBSzt1QkFPTCxLQUFLO3FCQU9MLEtBQUs7c0JBT0wsS0FBSztnQ0FLTCxLQUFLO3dCQU9MLEtBQUssU0FBQyxXQUFXO3lCQWVqQixNQUFNOzRCQUVOLFdBQVcsU0FBQyxxQkFBcUI7MkJBS2pDLFdBQVcsU0FBQyxvQkFBb0I7eUJBS2hDLFdBQVcsU0FBQyxrQkFBa0I7MEJBSzlCLFdBQVcsU0FBQyxtQkFBbUI7MEJBWS9CLFlBQVksU0FBQyxPQUFPOzs7Ozs7O0lBNUZyQixnREFBZ0Y7O0lBRWhGLG9EQUEyRjs7Ozs7O0lBYTNGLDBDQUEyQjs7Ozs7OztJQU8zQiw4Q0FBbUM7Ozs7Ozs7SUFPbkMsNENBQWlDOzs7Ozs7O0lBT2pDLDZDQUFrQzs7Ozs7SUFLbEMsdURBQTRDOzs7Ozs7O0lBc0I1QyxnREFBa0g7Ozs7O0lBc0J0RyxpREFBK0I7Ozs7O0lBQUUsK0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgfSBmcm9tICcuLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50IHtcbiAgb3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0aFt0ZC1kYXRhLXRhYmxlLWNvbHVtbl0nLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB7XG4gIHByaXZhdGUgX3NvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmc7XG5cbiAgQFZpZXdDaGlsZCgnY29sdW1uQ29udGVudCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIF9jb2x1bW5Db250ZW50OiBFbGVtZW50UmVmO1xuXG4gIGdldCBwcm9qZWN0ZWRXaWR0aCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl9jb2x1bW5Db250ZW50ICYmIHRoaXMuX2NvbHVtbkNvbnRlbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fY29sdW1uQ29udGVudC5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIDEwMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBuYW1lPzogc3RyaW5nXG4gICAqIFNldHMgdW5pcXVlIGNvbHVtbiBbbmFtZV0gZm9yIFtzb3J0YWJsZV0gZXZlbnRzLlxuICAgKi9cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIHNvcnRhYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHNvcnRpbmcgZXZlbnRzLCBzb3J0IGljb25zIGFuZCBhY3RpdmUgY29sdW1uIHN0YXRlcy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCkgc29ydGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogYWN0aXZlPzogYm9vbGVhblxuICAgKiBTZXRzIGNvbHVtbiB0byBhY3RpdmUgc3RhdGUgd2hlbiAndHJ1ZScuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBudW1lcmljPzogYm9vbGVhblxuICAgKiBNYWtlcyBjb2x1bW4gZm9sbG93IHRoZSBudW1lcmljIGRhdGEtdGFibGUgc3BlY3MgYW5kIHNvcnQgaWNvbi5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCkgbnVtZXJpYzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBpZiBjb2x1bW4gc29ydCBvcmRlciBpcyBwcmVzZW50XG4gICAqL1xuICBASW5wdXQoKSBpc0NvbHVtblNvcnRPcmRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBzb3J0T3JkZXI/OiBbJ0FTQycgfCAnREVTQyddIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyXG4gICAqIFNldHMgdGhlIHNvcnQgb3JkZXIgb2YgY29sdW1uLlxuICAgKiBEZWZhdWx0cyB0byAnQVNDJyBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICovXG4gIEBJbnB1dCgnc29ydE9yZGVyJylcbiAgc2V0IHNvcnRPcmRlcihvcmRlcjogJ0FTQycgfCAnREVTQycpIHtcbiAgICBjb25zdCBzb3J0T3JkZXI6IHN0cmluZyA9IG9yZGVyID8gb3JkZXIudG9VcHBlckNhc2UoKSA6ICdBU0MnO1xuICAgIGlmIChzb3J0T3JkZXIgIT09ICdERVNDJyAmJiBzb3J0T3JkZXIgIT09ICdBU0MnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tzb3J0T3JkZXJdIG11c3QgYmUgZW1wdHksIEFTQyBvciBERVNDJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fc29ydE9yZGVyID0gc29ydE9yZGVyID09PSAnQVNDJyA/IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZyA6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmc7XG4gIH1cblxuICAvKipcbiAgICogc29ydENoYW5nZT86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY29sdW1uIGhlYWRlcnMgYXJlIGNsaWNrZWQuIFtzb3J0YWJsZV0gbmVlZHMgdG8gYmUgZW5hYmxlZC5cbiAgICogRW1pdHMgYW4gW0lUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGREYXRhVGFibGVTb3J0Q2hhbmdlRXZlbnQ+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtY2xpY2thYmxlJylcbiAgZ2V0IGJpbmRDbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc29ydGFibGU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1zb3J0YWJsZScpXG4gIGdldCBiaW5nU29ydGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc29ydGFibGU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1hY3RpdmUnKVxuICBnZXQgYmluZEFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1udW1lcmljJylcbiAgZ2V0IGJpbmROdW1lcmljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm51bWVyaWM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZS1jb2x1bW4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5pbmcgdG8gY2xpY2sgZXZlbnQgb24gaG9zdCB0byB0aHJvdyBhIHNvcnQgZXZlbnRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgaGFuZGxlQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc29ydGFibGUpIHtcbiAgICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KHsgbmFtZTogdGhpcy5uYW1lLCBvcmRlcjogdGhpcy5fc29ydE9yZGVyIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlzQXNjZW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZztcbiAgfVxuXG4gIGlzRGVzY2VuZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydE9yZGVyID09PSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5EZXNjZW5kaW5nO1xuICB9XG59XG4iXX0=