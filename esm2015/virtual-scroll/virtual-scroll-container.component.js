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
        const newHostHeight = this._elementRef.nativeElement.getBoundingClientRect().height;
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
        const element = (/** @type {?} */ (event.target));
        if (element) {
            /** @type {?} */
            const verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._scrollVerticalOffset = verticalScroll;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
            }
            if (this._initialized && this._data.length * this.rowHeight - (verticalScroll + this._hostHeight) === 0) {
                // check to see if bottom was hit to throw the bottom event
                this._bottom.next();
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
            const fromRow = Math.floor(this._scrollVerticalOffset / this.rowHeight) - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            /** @type {?} */
            const range = Math.floor(this._hostHeight / this.rowHeight) + TD_VIRTUAL_OFFSET * 2;
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
    trackBy: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsidmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBR1osdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osU0FBUyxHQUlWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUVwRSxPQUFPLEVBQWdCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O01BRXZFLGlCQUFpQixHQUFXLENBQUM7O01BQzdCLGVBQWUsR0FBVyxHQUFHOzs7O0FBRW5DLGlEQUdDOzs7SUFGQyw4Q0FBYTs7SUFDYixnREFBa0I7O0FBU3BCLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7Ozs7SUFzRTVDLFlBQ1UsV0FBdUIsRUFDdkIsYUFBMkIsRUFDM0IsU0FBb0IsRUFDcEIsa0JBQXFDO1FBSHJDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXpFdkMsVUFBSyxHQUFtQixFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBRTlC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QXFCWixNQUFNO29CQUVOLFlBQVksU0FBQyxZQUFZOzJCQUV6QixZQUFZLFNBQUMsMkJBQTJCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3NCQTBFM0QsS0FBSzsyQkFJTCxZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBMUhsQyxrREFBbUM7Ozs7O0lBQ25DLG9EQUE4Qzs7Ozs7SUFDOUMseURBQXNDOzs7OztJQUV0Qyx5REFBaUM7Ozs7O0lBQ2pDLHdEQUFnQzs7Ozs7SUFDaEMsa0VBQTBDOzs7OztJQUMxQyw2REFBb0M7Ozs7O0lBRXBDLHFEQUE2Qjs7Ozs7SUFDN0IsbURBQTJCOzs7OztJQUUzQixrREFBcUI7Ozs7O0lBQ3JCLHlEQUE0Qjs7Ozs7OztJQTJCNUIsbURBQThHOztJQUU5RyxrREFBeUQ7O0lBRXpELHlEQUF3Rzs7Ozs7OztJQTBFeEcsb0RBRUU7Ozs7O0lBbERBLHdEQUErQjs7Ozs7SUFDL0IsMERBQW1DOzs7OztJQUNuQyxzREFBNEI7Ozs7O0lBQzVCLCtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbnRlbnRDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NoaWxkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgT25EZXN0cm95LFxuICBUcmFja0J5RnVuY3Rpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkVmlydHVhbFNjcm9sbFJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vdmlydHVhbC1zY3JvbGwtcm93LmRpcmVjdGl2ZSc7XG5cbmNvbnN0IFREX1ZJUlRVQUxfT0ZGU0VUOiBudW1iZXIgPSAyO1xuY29uc3QgU0NST0xMX0RFQk9VTkNFOiBudW1iZXIgPSAyMDA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVmlydHVhbFNjcm9sbEJvdHRvbUV2ZW50IHtcbiAgbGFzdFJvdzogYW55O1xuICBsYXN0SW5kZXg6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtdmlydHVhbC1zY3JvbGwtY29udGFpbmVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi92aXJ0dWFsLXNjcm9sbC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRWaXJ0dWFsU2Nyb2xsQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfYm90dG9tOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3RvdGFsSGVpZ2h0OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9ob3N0SGVpZ2h0OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9zY3JvbGxWZXJ0aWNhbE9mZnNldDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfb2Zmc2V0VHJhbnNmb3JtOiBTYWZlU3R5bGU7XG5cbiAgcHJpdmF0ZSBfZnJvbVJvdzogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfdG9Sb3c6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBfZGF0YTogYW55W107XG4gIHByaXZhdGUgX3ZpcnR1YWxEYXRhOiBhbnlbXTtcblxuICAvKipcbiAgICogZGF0YTogYW55W11cbiAgICogTGlzdCBvZiBpdGVtcyB0byB2aXJ0dWFsbHkgaXRlcmF0ZSBvbi5cbiAgICovXG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBkYXRhKGRhdGE6IGFueVtdKSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgZGF0YSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgdmlydHVhbERhdGEoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBib3R0b206IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIHVzZXIgc2Nyb2xsZWQgdG8gdGhlIGxhc3QgaXRlbSBvZiB0aGUgbGlzdC5cbiAgICogQW4gW0lUZFZpcnR1YWxTY3JvbGxCb3R0b21FdmVudF0gZXZlbnQgaXMgZW1pdHRlZFxuICAgKi9cbiAgQE91dHB1dCgpIGJvdHRvbTogRXZlbnRFbWl0dGVyPElUZFZpcnR1YWxTY3JvbGxCb3R0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZFZpcnR1YWxTY3JvbGxCb3R0b21FdmVudD4oKTtcblxuICBAVmlld0NoaWxkcmVuKCdyb3dFbGVtZW50JykgX3Jvd3M6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBAQ29udGVudENoaWxkKFRkVmlydHVhbFNjcm9sbFJvd0RpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIF9yb3dUZW1wbGF0ZTogVGRWaXJ0dWFsU2Nyb2xsUm93RGlyZWN0aXZlO1xuXG4gIGdldCByb3dIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5fcm93cyAmJiB0aGlzLl9yb3dzLnRvQXJyYXkoKVswXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jvd3MudG9BcnJheSgpWzBdLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldCB0b3RhbEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEhlaWdodDtcbiAgfVxuXG4gIGdldCBmcm9tUm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb21Sb3c7XG4gIH1cblxuICBnZXQgdG9Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG9Sb3c7XG4gIH1cblxuICBnZXQgb2Zmc2V0VHJhbnNmb3JtKCk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRyYW5zZm9ybTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fcm93cy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICB9KSxcbiAgICApO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy5fYm90dG9tLnBpcGUoZGVib3VuY2VUaW1lKFNDUk9MTF9ERUJPVU5DRSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYm90dG9tLmVtaXQoe1xuICAgICAgICAgIGxhc3RSb3c6IHRoaXMuX2RhdGFbdGhpcy5fZGF0YS5sZW5ndGggLSAxXSxcbiAgICAgICAgICBsYXN0SW5kZXg6IHRoaXMudG9Sb3csXG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdIb3N0SGVpZ2h0OiBudW1iZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIGlmICh0aGlzLl9ob3N0SGVpZ2h0ICE9PSBuZXdIb3N0SGVpZ2h0KSB7XG4gICAgICB0aGlzLl9ob3N0SGVpZ2h0ID0gbmV3SG9zdEhlaWdodDtcbiAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdWJzKSB7XG4gICAgICB0aGlzLl9zdWJzLmZvckVhY2goKHN1YjogU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRyYWNrQnk/OiBUcmFja0J5RnVuY3Rpb25cbiAgICogVGhpcyBhY2NlcHRzIHRoZSBzYW1lIHRyYWNrQnkgZnVuY3Rpb24gW25nRm9yXSBkb2VzLlxuICAgKiBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvcmUvVHJhY2tCeUZ1bmN0aW9uXG4gICAqL1xuICBASW5wdXQoKSB0cmFja0J5OiBUcmFja0J5RnVuY3Rpb248YW55PiA9IChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxuICBoYW5kbGVTY3JvbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCB2ZXJ0aWNhbFNjcm9sbDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgIT09IHZlcnRpY2FsU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxTY3JvbGw7XG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCAmJiB0aGlzLl9kYXRhLmxlbmd0aCAqIHRoaXMucm93SGVpZ2h0IC0gKHZlcnRpY2FsU2Nyb2xsICsgdGhpcy5faG9zdEhlaWdodCkgPT09IDApIHtcbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIGJvdHRvbSB3YXMgaGl0IHRvIHRocm93IHRoZSBib3R0b20gZXZlbnRcbiAgICAgICAgdGhpcy5fYm90dG9tLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlZnJlc2ggYW5kIHJlY2FsY3VsYXRlIHRoZSB2aXJ0dWFsIHJvd3NcbiAgICogZS5nLiBhZnRlciBjaGFuZ2luZyB0aGUgW2RhdGFdIGNvbnRlbnRcbiAgICovXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc2Nyb2xsIHRvIGEgc3BlY2lmaWMgcm93IG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgc2Nyb2xsVG8ocm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gcm93ICogdGhpcy5yb3dIZWlnaHQ7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNjcm9sbCB0byB0aGUgc3RhcnQgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBzY3JvbGxUb1N0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsVG8oMCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNjcm9sbCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgc2Nyb2xsVG9FbmQoKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxUbyh0aGlzLnRvdGFsSGVpZ2h0IC8gdGhpcy5yb3dIZWlnaHQpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlVmlydHVhbFJvd3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gdGhpcy5fZGF0YS5sZW5ndGggKiB0aGlzLnJvd0hlaWdodDtcbiAgICAgIGNvbnN0IGZyb21Sb3c6IG51bWJlciA9IE1hdGguZmxvb3IodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgLyB0aGlzLnJvd0hlaWdodCkgLSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSBmcm9tUm93ID4gMCA/IGZyb21Sb3cgOiAwO1xuICAgICAgY29uc3QgcmFuZ2U6IG51bWJlciA9IE1hdGguZmxvb3IodGhpcy5faG9zdEhlaWdodCAvIHRoaXMucm93SGVpZ2h0KSArIFREX1ZJUlRVQUxfT0ZGU0VUICogMjtcbiAgICAgIGxldCB0b1JvdzogbnVtYmVyID0gcmFuZ2UgKyB0aGlzLmZyb21Sb3c7XG4gICAgICBpZiAoaXNGaW5pdGUodG9Sb3cpICYmIHRvUm93ID4gdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgdG9Sb3cgPSB0aGlzLl9kYXRhLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRmluaXRlKHRvUm93KSkge1xuICAgICAgICB0b1JvdyA9IFREX1ZJUlRVQUxfT0ZGU0VUO1xuICAgICAgfVxuICAgICAgdGhpcy5fdG9Sb3cgPSB0b1JvdztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSAwO1xuICAgICAgdGhpcy5fZnJvbVJvdyA9IDA7XG4gICAgICB0aGlzLl90b1JvdyA9IDA7XG4gICAgfVxuXG4gICAgbGV0IG9mZnNldDogbnVtYmVyID0gMDtcbiAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgPiBURF9WSVJUVUFMX09GRlNFVCAqIHRoaXMucm93SGVpZ2h0KSB7XG4gICAgICBvZmZzZXQgPSB0aGlzLmZyb21Sb3cgKiB0aGlzLnJvd0hlaWdodDtcbiAgICB9XG5cbiAgICB0aGlzLl9vZmZzZXRUcmFuc2Zvcm0gPSB0aGlzLl9kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKFxuICAgICAgJ3RyYW5zbGF0ZVkoJyArIChvZmZzZXQgLSB0aGlzLnRvdGFsSGVpZ2h0KSArICdweCknLFxuICAgICk7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3ZpcnR1YWxEYXRhID0gdGhpcy5kYXRhLnNsaWNlKHRoaXMuZnJvbVJvdywgdGhpcy50b1Jvdyk7XG4gICAgfVxuXG4gICAgLy8gbWFyayBmb3IgY2hlY2sgYXQgdGhlIGVuZCBvZiB0aGUgcXVldWUgc28gd2UgYXJlIHN1cmVcbiAgICAvLyB0aGF0IHRoZSBjaGFuZ2VzIHdpbGwgYmUgbWFya2VkXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxufVxuIl19