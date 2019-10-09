/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, QueryList, ViewChildren, ElementRef, HostListener, Renderer2, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TdVirtualScrollRowDirective } from './virtual-scroll-row.directive';
/** @type {?} */
const TD_VIRTUAL_OFFSET = 2;
/** @type {?} */
const SCROLL_DEBOUNCE = 200;
/**
 * @record
 */
export function ITdVirtualScrollBottomEvent() { }
if (false) {
    /** @type {?} */
    ITdVirtualScrollBottomEvent.prototype.lastRow;
    /** @type {?} */
    ITdVirtualScrollBottomEvent.prototype.lastIndex;
}
export class TdVirtualScrollContainerComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _domSanitizer
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _domSanitizer, _renderer, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._subs = [];
        this._bottom = new Subject();
        this._initialized = false;
        this._totalHeight = 0;
        this._hostHeight = 0;
        this._scrollVerticalOffset = 0;
        this._fromRow = 0;
        this._toRow = 0;
        /**
         * bottom: function
         * Method to be executed when user scrolled to the last item of the list.
         * An [ITdVirtualScrollBottomEvent] event is emitted
         */
        this.bottom = new EventEmitter();
        /**
         * trackBy?: TrackByFunction
         * This accepts the same trackBy function [ngFor] does.
         * https://angular.io/api/core/TrackByFunction
         */
        this.trackBy = (/**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        (index, item) => {
            return item;
        });
    }
    /**
     * data: any[]
     * List of items to virtually iterate on.
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        if (this._initialized) {
            this._calculateVirtualRows();
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get virtualData() {
        return this._virtualData;
    }
    /**
     * @return {?}
     */
    get rowHeight() {
        if (this._rows && this._rows.toArray()[0]) {
            return this._rows.toArray()[0].nativeElement.getBoundingClientRect().height;
        }
        return 0;
    }
    /**
     * @return {?}
     */
    get totalHeight() {
        return this._totalHeight;
    }
    /**
     * @return {?}
     */
    get fromRow() {
        return this._fromRow;
    }
    /**
     * @return {?}
     */
    get toRow() {
        return this._toRow;
    }
    /**
     * @return {?}
     */
    get offsetTransform() {
        return this._offsetTransform;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._subs.push(this._rows.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this._calculateVirtualRows();
        })));
        this._initialized = true;
        this._calculateVirtualRows();
        this._subs.push(this._bottom.pipe(debounceTime(SCROLL_DEBOUNCE)).subscribe((/**
         * @return {?}
         */
        () => {
            this.bottom.emit({
                lastRow: this._data[this._data.length - 1],
                lastIndex: this.toRow,
            });
        })));
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        let newHostHeight = this._elementRef.nativeElement.getBoundingClientRect().height;
        if (this._hostHeight !== newHostHeight) {
            this._hostHeight = newHostHeight;
            if (this._initialized) {
                this._calculateVirtualRows();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subs) {
            this._subs.forEach((/**
             * @param {?} sub
             * @return {?}
             */
            (sub) => {
                sub.unsubscribe();
            }));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleScroll(event) {
        /** @type {?} */
        let element = (/** @type {?} */ (event.target));
        if (element) {
            /** @type {?} */
            let verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._scrollVerticalOffset = verticalScroll;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
            }
            if (this._initialized) {
                // check to see if bottom was hit to throw the bottom event
                if (this._data.length * this.rowHeight - (verticalScroll + this._hostHeight) === 0) {
                    this._bottom.next();
                }
            }
        }
    }
    /**
     * Method to refresh and recalculate the virtual rows
     * e.g. after changing the [data] content
     * @return {?}
     */
    refresh() {
        this._calculateVirtualRows();
    }
    /**
     * Method to scroll to a specific row of the list.
     * @param {?} row
     * @return {?}
     */
    scrollTo(row) {
        this._elementRef.nativeElement.scrollTop = row * this.rowHeight;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to scroll to the start of the list.
     * @return {?}
     */
    scrollToStart() {
        this.scrollTo(0);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to scroll to the end of the list.
     * @return {?}
     */
    scrollToEnd() {
        this.scrollTo(this.totalHeight / this.rowHeight);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    _calculateVirtualRows() {
        if (this._data) {
            this._totalHeight = this._data.length * this.rowHeight;
            /** @type {?} */
            let fromRow = Math.floor(this._scrollVerticalOffset / this.rowHeight) - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            /** @type {?} */
            let range = Math.floor(this._hostHeight / this.rowHeight) + TD_VIRTUAL_OFFSET * 2;
            /** @type {?} */
            let toRow = range + this.fromRow;
            if (isFinite(toRow) && toRow > this._data.length) {
                toRow = this._data.length;
            }
            else if (!isFinite(toRow)) {
                toRow = TD_VIRTUAL_OFFSET;
            }
            this._toRow = toRow;
        }
        else {
            this._totalHeight = 0;
            this._fromRow = 0;
            this._toRow = 0;
        }
        /** @type {?} */
        let offset = 0;
        if (this._scrollVerticalOffset > TD_VIRTUAL_OFFSET * this.rowHeight) {
            offset = this.fromRow * this.rowHeight;
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
        }));
    }
}
TdVirtualScrollContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-virtual-scroll-container',
                template: "<div [style.height.px]=\"totalHeight\"></div>\n<div [style.transform]=\"offsetTransform\" [style.position]=\"'absolute'\" [style.width.%]=\"100\">\n  <ng-template let-row let-index=\"index\" ngFor [ngForOf]=\"virtualData\" [ngForTrackBy]=\"trackBy\">\n    <div #rowElement [style.width.%]=\"100\">\n      <ng-template\n        *ngIf=\"_rowTemplate\"\n        [ngTemplateOutlet]=\"_rowTemplate.templateRef\"\n        [ngTemplateOutletContext]=\"{\n          row: row,\n          index: fromRow + index,\n          first: fromRow + index === 0,\n          last: fromRow + index === data.length - 1,\n          odd: (fromRow + index + 1) % 2 === 1,\n          even: (fromRow + index + 1) % 2 === 0\n        }\"\n      ></ng-template>\n    </div>\n  </ng-template>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;height:100%;width:100%;overflow:auto;position:relative}"]
            }] }
];
/** @nocollapse */
TdVirtualScrollContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
TdVirtualScrollContainerComponent.propDecorators = {
    data: [{ type: Input, args: ['data',] }],
    bottom: [{ type: Output }],
    _rows: [{ type: ViewChildren, args: ['rowElement',] }],
    _rowTemplate: [{ type: ContentChild, args: [TdVirtualScrollRowDirective, { static: false },] }],
    trackBy: [{ type: Input, args: ['trackBy',] }],
    handleScroll: [{ type: HostListener, args: ['scroll', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._bottom;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._initialized;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._totalHeight;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._hostHeight;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._scrollVerticalOffset;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._offsetTransform;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._fromRow;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._toRow;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._virtualData;
    /**
     * bottom: function
     * Method to be executed when user scrolled to the last item of the list.
     * An [ITdVirtualScrollBottomEvent] event is emitted
     * @type {?}
     */
    TdVirtualScrollContainerComponent.prototype.bottom;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._rows;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._rowTemplate;
    /**
     * trackBy?: TrackByFunction
     * This accepts the same trackBy function [ngFor] does.
     * https://angular.io/api/core/TrackByFunction
     * @type {?}
     */
    TdVirtualScrollContainerComponent.prototype.trackBy;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._domSanitizer;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsidmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBR1osdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osU0FBUyxHQUlWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUVwRSxPQUFPLEVBQWdCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O01BRXZFLGlCQUFpQixHQUFXLENBQUM7O01BQzdCLGVBQWUsR0FBVyxHQUFHOzs7O0FBRW5DLGlEQUdDOzs7SUFGQyw4Q0FBYTs7SUFDYixnREFBa0I7O0FBU3BCLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7Ozs7SUFzRTVDLFlBQ1UsV0FBdUIsRUFDdkIsYUFBMkIsRUFDM0IsU0FBb0IsRUFDcEIsa0JBQXFDO1FBSHJDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXpFdkMsVUFBSyxHQUFtQixFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBRTlC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LEtBQUssU0FBQyxNQUFNO3FCQXFCWixNQUFNO29CQUVOLFlBQVksU0FBQyxZQUFZOzJCQUV6QixZQUFZLFNBQUMsMkJBQTJCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3NCQTBFM0QsS0FBSyxTQUFDLFNBQVM7MkJBSWYsWUFBWSxTQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQTFIbEMsa0RBQW1DOzs7OztJQUNuQyxvREFBOEM7Ozs7O0lBQzlDLHlEQUFzQzs7Ozs7SUFFdEMseURBQWlDOzs7OztJQUNqQyx3REFBZ0M7Ozs7O0lBQ2hDLGtFQUEwQzs7Ozs7SUFDMUMsNkRBQW9DOzs7OztJQUVwQyxxREFBNkI7Ozs7O0lBQzdCLG1EQUEyQjs7Ozs7SUFFM0Isa0RBQXFCOzs7OztJQUNyQix5REFBNEI7Ozs7Ozs7SUEyQjVCLG1EQUE4Rzs7SUFFOUcsa0RBQXlEOztJQUV6RCx5REFBd0c7Ozs7Ozs7SUEwRXhHLG9EQUVFOzs7OztJQWxEQSx3REFBK0I7Ozs7O0lBQy9CLDBEQUFtQzs7Ozs7SUFDbkMsc0RBQTRCOzs7OztJQUM1QiwrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIFZpZXdDaGlsZCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIE9uRGVzdHJveSxcbiAgVHJhY2tCeUZ1bmN0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZFZpcnR1YWxTY3JvbGxSb3dEaXJlY3RpdmUgfSBmcm9tICcuL3ZpcnR1YWwtc2Nyb2xsLXJvdy5kaXJlY3RpdmUnO1xuXG5jb25zdCBURF9WSVJUVUFMX09GRlNFVDogbnVtYmVyID0gMjtcbmNvbnN0IFNDUk9MTF9ERUJPVU5DRTogbnVtYmVyID0gMjAwO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFZpcnR1YWxTY3JvbGxCb3R0b21FdmVudCB7XG4gIGxhc3RSb3c6IGFueTtcbiAgbGFzdEluZGV4OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXZpcnR1YWwtc2Nyb2xsLWNvbnRhaW5lcicsXG4gIHN0eWxlVXJsczogWycuL3ZpcnR1YWwtc2Nyb2xsLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vdmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkVmlydHVhbFNjcm9sbENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2JvdHRvbTogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF90b3RhbEhlaWdodDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfaG9zdEhlaWdodDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc2Nyb2xsVmVydGljYWxPZmZzZXQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX29mZnNldFRyYW5zZm9ybTogU2FmZVN0eWxlO1xuXG4gIHByaXZhdGUgX2Zyb21Sb3c6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RvUm93OiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgX2RhdGE6IGFueVtdO1xuICBwcml2YXRlIF92aXJ0dWFsRGF0YTogYW55W107XG5cbiAgLyoqXG4gICAqIGRhdGE6IGFueVtdXG4gICAqIExpc3Qgb2YgaXRlbXMgdG8gdmlydHVhbGx5IGl0ZXJhdGUgb24uXG4gICAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YShkYXRhOiBhbnlbXSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGRhdGEoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IHZpcnR1YWxEYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbERhdGE7XG4gIH1cblxuICAvKipcbiAgICogYm90dG9tOiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiB1c2VyIHNjcm9sbGVkIHRvIHRoZSBsYXN0IGl0ZW0gb2YgdGhlIGxpc3QuXG4gICAqIEFuIFtJVGRWaXJ0dWFsU2Nyb2xsQm90dG9tRXZlbnRdIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSBib3R0b206IEV2ZW50RW1pdHRlcjxJVGRWaXJ0dWFsU2Nyb2xsQm90dG9tRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGRWaXJ0dWFsU2Nyb2xsQm90dG9tRXZlbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZHJlbigncm93RWxlbWVudCcpIF9yb3dzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgQENvbnRlbnRDaGlsZChUZFZpcnR1YWxTY3JvbGxSb3dEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBfcm93VGVtcGxhdGU6IFRkVmlydHVhbFNjcm9sbFJvd0RpcmVjdGl2ZTtcblxuICBnZXQgcm93SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX3Jvd3MgJiYgdGhpcy5fcm93cy50b0FycmF5KClbMF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9yb3dzLnRvQXJyYXkoKVswXS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXQgdG90YWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxIZWlnaHQ7XG4gIH1cblxuICBnZXQgZnJvbVJvdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9mcm9tUm93O1xuICB9XG5cbiAgZ2V0IHRvUm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvUm93O1xuICB9XG5cbiAgZ2V0IG9mZnNldFRyYW5zZm9ybSgpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXRUcmFuc2Zvcm07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3Jvd3MuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcblxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX2JvdHRvbS5waXBlKGRlYm91bmNlVGltZShTQ1JPTExfREVCT1VOQ0UpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmJvdHRvbS5lbWl0KHtcbiAgICAgICAgICBsYXN0Um93OiB0aGlzLl9kYXRhW3RoaXMuX2RhdGEubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgbGFzdEluZGV4OiB0aGlzLnRvUm93LFxuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgbGV0IG5ld0hvc3RIZWlnaHQ6IG51bWJlciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgaWYgKHRoaXMuX2hvc3RIZWlnaHQgIT09IG5ld0hvc3RIZWlnaHQpIHtcbiAgICAgIHRoaXMuX2hvc3RIZWlnaHQgPSBuZXdIb3N0SGVpZ2h0O1xuICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YnMpIHtcbiAgICAgIHRoaXMuX3N1YnMuZm9yRWFjaCgoc3ViOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdHJhY2tCeT86IFRyYWNrQnlGdW5jdGlvblxuICAgKiBUaGlzIGFjY2VwdHMgdGhlIHNhbWUgdHJhY2tCeSBmdW5jdGlvbiBbbmdGb3JdIGRvZXMuXG4gICAqIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29yZS9UcmFja0J5RnVuY3Rpb25cbiAgICovXG4gIEBJbnB1dCgndHJhY2tCeScpIHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxhbnk+ID0gKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xuICAgIHJldHVybiBpdGVtO1xuICB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXG4gIGhhbmRsZVNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBsZXQgdmVydGljYWxTY3JvbGw6IG51bWJlciA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ICE9PSB2ZXJ0aWNhbFNjcm9sbCkge1xuICAgICAgICB0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCA9IHZlcnRpY2FsU2Nyb2xsO1xuICAgICAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIGJvdHRvbSB3YXMgaGl0IHRvIHRocm93IHRoZSBib3R0b20gZXZlbnRcbiAgICAgICAgaWYgKHRoaXMuX2RhdGEubGVuZ3RoICogdGhpcy5yb3dIZWlnaHQgLSAodmVydGljYWxTY3JvbGwgKyB0aGlzLl9ob3N0SGVpZ2h0KSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2JvdHRvbS5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlZnJlc2ggYW5kIHJlY2FsY3VsYXRlIHRoZSB2aXJ0dWFsIHJvd3NcbiAgICogZS5nLiBhZnRlciBjaGFuZ2luZyB0aGUgW2RhdGFdIGNvbnRlbnRcbiAgICovXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc2Nyb2xsIHRvIGEgc3BlY2lmaWMgcm93IG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgc2Nyb2xsVG8ocm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gcm93ICogdGhpcy5yb3dIZWlnaHQ7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNjcm9sbCB0byB0aGUgc3RhcnQgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBzY3JvbGxUb1N0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsVG8oMCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNjcm9sbCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgc2Nyb2xsVG9FbmQoKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxUbyh0aGlzLnRvdGFsSGVpZ2h0IC8gdGhpcy5yb3dIZWlnaHQpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlVmlydHVhbFJvd3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gdGhpcy5fZGF0YS5sZW5ndGggKiB0aGlzLnJvd0hlaWdodDtcbiAgICAgIGxldCBmcm9tUm93OiBudW1iZXIgPSBNYXRoLmZsb29yKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0IC8gdGhpcy5yb3dIZWlnaHQpIC0gVERfVklSVFVBTF9PRkZTRVQ7XG4gICAgICB0aGlzLl9mcm9tUm93ID0gZnJvbVJvdyA+IDAgPyBmcm9tUm93IDogMDtcbiAgICAgIGxldCByYW5nZTogbnVtYmVyID0gTWF0aC5mbG9vcih0aGlzLl9ob3N0SGVpZ2h0IC8gdGhpcy5yb3dIZWlnaHQpICsgVERfVklSVFVBTF9PRkZTRVQgKiAyO1xuICAgICAgbGV0IHRvUm93OiBudW1iZXIgPSByYW5nZSArIHRoaXMuZnJvbVJvdztcbiAgICAgIGlmIChpc0Zpbml0ZSh0b1JvdykgJiYgdG9Sb3cgPiB0aGlzLl9kYXRhLmxlbmd0aCkge1xuICAgICAgICB0b1JvdyA9IHRoaXMuX2RhdGEubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmICghaXNGaW5pdGUodG9Sb3cpKSB7XG4gICAgICAgIHRvUm93ID0gVERfVklSVFVBTF9PRkZTRVQ7XG4gICAgICB9XG4gICAgICB0aGlzLl90b1JvdyA9IHRvUm93O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90b3RhbEhlaWdodCA9IDA7XG4gICAgICB0aGlzLl9mcm9tUm93ID0gMDtcbiAgICAgIHRoaXMuX3RvUm93ID0gMDtcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAwO1xuICAgIGlmICh0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCA+IFREX1ZJUlRVQUxfT0ZGU0VUICogdGhpcy5yb3dIZWlnaHQpIHtcbiAgICAgIG9mZnNldCA9IHRoaXMuZnJvbVJvdyAqIHRoaXMucm93SGVpZ2h0O1xuICAgIH1cblxuICAgIHRoaXMuX29mZnNldFRyYW5zZm9ybSA9IHRoaXMuX2RvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoXG4gICAgICAndHJhbnNsYXRlWSgnICsgKG9mZnNldCAtIHRoaXMudG90YWxIZWlnaHQpICsgJ3B4KScsXG4gICAgKTtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fdmlydHVhbERhdGEgPSB0aGlzLmRhdGEuc2xpY2UodGhpcy5mcm9tUm93LCB0aGlzLnRvUm93KTtcbiAgICB9XG5cbiAgICAvLyBtYXJrIGZvciBjaGVjayBhdCB0aGUgZW5kIG9mIHRoZSBxdWV1ZSBzbyB3ZSBhcmUgc3VyZVxuICAgIC8vIHRoYXQgdGhlIGNoYW5nZXMgd2lsbCBiZSBtYXJrZWRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=