/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, QueryList, ViewChildren, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TdVirtualScrollRowDirective } from './virtual-scroll-row.directive';
/** @type {?} */
const TD_VIRTUAL_OFFSET = 2;
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
        this._initialized = false;
        this._totalHeight = 0;
        this._hostHeight = 0;
        this._scrollVerticalOffset = 0;
        this._fromRow = 0;
        this._toRow = 0;
        /**
         * trackBy?: TrackByFunction
         * This accepts the same trackBy function [ngFor] does.
         * https://angular.io/api/core/TrackByFunction
         */
        this.trackBy = (index, item) => {
            return item;
        };
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
        this._rowChangeSubs = this._rows.changes.subscribe(() => {
            this._calculateVirtualRows();
        });
        this._initialized = true;
        this._calculateVirtualRows();
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
        if (this._rowChangeSubs) {
            this._rowChangeSubs.unsubscribe();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleScroll(event) {
        /** @type {?} */
        let element = ((/** @type {?} */ (event.target)));
        if (element) {
            /** @type {?} */
            let verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._scrollVerticalOffset = verticalScroll;
                if (this._initialized) {
                    this._calculateVirtualRows();
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
     * @return {?}
     */
    _calculateVirtualRows() {
        if (this._data) {
            this._totalHeight = this._data.length * this.rowHeight;
            /** @type {?} */
            let fromRow = Math.floor((this._scrollVerticalOffset / this.rowHeight)) - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            /** @type {?} */
            let range = Math.floor((this._hostHeight / this.rowHeight)) + (TD_VIRTUAL_OFFSET * 2);
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
        if (this._scrollVerticalOffset > (TD_VIRTUAL_OFFSET * this.rowHeight)) {
            offset = this.fromRow * this.rowHeight;
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then(() => {
            this._changeDetectorRef.markForCheck();
        });
    }
}
TdVirtualScrollContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-virtual-scroll-container',
                template: "<div [style.height.px]=\"totalHeight\"></div>\n<div [style.transform]=\"offsetTransform\"\n      [style.position]=\"'absolute'\"\n      [style.width.%]=\"100\">\n  <ng-template let-row\n                let-index=\"index\"\n                ngFor\n                [ngForOf]=\"virtualData\"\n                [ngForTrackBy]=\"trackBy\">\n    <div #rowElement\n         [style.width.%]=\"100\">\n      <ng-template *ngIf=\"_rowTemplate\"\n                  [ngTemplateOutlet]=\"_rowTemplate.templateRef\"\n                  [ngTemplateOutletContext]=\"{row: row,\n                                      index: (fromRow + index),\n                                      first: (fromRow + index) === 0,\n                                      last: (fromRow + index) === (data.length - 1),\n                                      odd: ((fromRow + index + 1) % 2) === 1,\n                                      even: ((fromRow + index + 1) % 2) === 0}\">\n      </ng-template>\n    </div>\n  </ng-template>\n</div>",
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
    _rows: [{ type: ViewChildren, args: ['rowElement',] }],
    _rowTemplate: [{ type: ContentChild, args: [TdVirtualScrollRowDirective,] }],
    trackBy: [{ type: Input, args: ['trackBy',] }],
    handleScroll: [{ type: HostListener, args: ['scroll', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._rowChangeSubs;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._initialized;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._totalHeight;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._hostHeight;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._scrollVerticalOffset;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._offsetTransform;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._fromRow;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._toRow;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._data;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._virtualData;
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
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._elementRef;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._domSanitizer;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._renderer;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsidmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxLQUFLLEVBQWdCLFlBQVksRUFDdkQsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUM3RixTQUFTLEVBQWdELE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUlwRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7TUFFdkUsaUJBQWlCLEdBQVcsQ0FBQztBQVFuQyxNQUFNLE9BQU8saUNBQWlDOzs7Ozs7O0lBK0Q1QyxZQUFvQixXQUF1QixFQUN2QixhQUEyQixFQUMzQixTQUFvQixFQUNwQixrQkFBcUM7UUFIckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBL0RqRCxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QiwwQkFBcUIsR0FBVyxDQUFDLENBQUM7UUFHbEMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQVcsQ0FBQyxDQUFDOzs7Ozs7UUFzRlQsWUFBTyxHQUEwQixDQUFDLEtBQWEsRUFBRSxJQUFTLEVBQUUsRUFBRTtZQUM5RSxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQTtJQWpDMkQsQ0FBQzs7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QyxNQUFNOzthQUNoRDs7OztZQWY2RSxVQUFVO1lBRS9FLFlBQVk7WUFEWixTQUFTO1lBRGdCLGlCQUFpQjs7O21CQW9DaEQsS0FBSyxTQUFDLE1BQU07b0JBZ0JaLFlBQVksU0FBQyxZQUFZOzJCQUV6QixZQUFZLFNBQUMsMkJBQTJCO3NCQTJEeEMsS0FBSyxTQUFDLFNBQVM7MkJBSWYsWUFBWSxTQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQW5HbEMsMkRBQXFDOztJQUNyQyx5REFBc0M7O0lBRXRDLHlEQUFpQzs7SUFDakMsd0RBQWdDOztJQUNoQyxrRUFBMEM7O0lBQzFDLDZEQUFvQzs7SUFFcEMscURBQTZCOztJQUM3QixtREFBMkI7O0lBRTNCLGtEQUFxQjs7SUFDckIseURBQTRCOztJQXNCNUIsa0RBQXlEOztJQUV6RCx5REFBcUY7Ozs7Ozs7SUEyRHJGLG9EQUVDOztJQXBDVyx3REFBK0I7O0lBQy9CLDBEQUFtQzs7SUFDbkMsc0RBQTRCOztJQUM1QiwrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkLCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsXG4gICAgICAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsXG4gICAgICAgICBSZW5kZXJlcjIsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSwgVHJhY2tCeUZ1bmN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRWaXJ0dWFsU2Nyb2xsUm93RGlyZWN0aXZlIH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC1yb3cuZGlyZWN0aXZlJztcblxuY29uc3QgVERfVklSVFVBTF9PRkZTRVQ6IG51bWJlciA9IDI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXZpcnR1YWwtc2Nyb2xsLWNvbnRhaW5lcicsXG4gIHN0eWxlVXJsczogWycuL3ZpcnR1YWwtc2Nyb2xsLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpcnR1YWwtc2Nyb2xsLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZFZpcnR1YWxTY3JvbGxDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3Jvd0NoYW5nZVN1YnM6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF90b3RhbEhlaWdodDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfaG9zdEhlaWdodDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc2Nyb2xsVmVydGljYWxPZmZzZXQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX29mZnNldFRyYW5zZm9ybTogU2FmZVN0eWxlO1xuXG4gIHByaXZhdGUgX2Zyb21Sb3c6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3RvUm93OiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgX2RhdGE6IGFueVtdO1xuICBwcml2YXRlIF92aXJ0dWFsRGF0YTogYW55W107XG5cbiAgLyoqXG4gICAqIGRhdGE6IGFueVtdXG4gICAqIExpc3Qgb2YgaXRlbXMgdG8gdmlydHVhbGx5IGl0ZXJhdGUgb24uXG4gICAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YShkYXRhOiBhbnlbXSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGRhdGEoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IHZpcnR1YWxEYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbERhdGE7XG4gIH1cblxuICBAVmlld0NoaWxkcmVuKCdyb3dFbGVtZW50JykgX3Jvd3M6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBAQ29udGVudENoaWxkKFRkVmlydHVhbFNjcm9sbFJvd0RpcmVjdGl2ZSkgX3Jvd1RlbXBsYXRlOiBUZFZpcnR1YWxTY3JvbGxSb3dEaXJlY3RpdmU7XG5cbiAgZ2V0IHJvd0hlaWdodCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl9yb3dzICYmIHRoaXMuX3Jvd3MudG9BcnJheSgpWzBdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcm93cy50b0FycmF5KClbMF0ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0IHRvdGFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsSGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGZyb21Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbVJvdztcbiAgfVxuXG4gIGdldCB0b1JvdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b1JvdztcbiAgfVxuXG4gIGdldCBvZmZzZXRUcmFuc2Zvcm0oKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VHJhbnNmb3JtO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcm93Q2hhbmdlU3VicyA9IHRoaXMuX3Jvd3MuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBsZXQgbmV3SG9zdEhlaWdodDogbnVtYmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICBpZiAodGhpcy5faG9zdEhlaWdodCAhPT0gbmV3SG9zdEhlaWdodCkge1xuICAgICAgdGhpcy5faG9zdEhlaWdodCA9IG5ld0hvc3RIZWlnaHQ7XG4gICAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcm93Q2hhbmdlU3Vicykge1xuICAgICAgdGhpcy5fcm93Q2hhbmdlU3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0cmFja0J5PzogVHJhY2tCeUZ1bmN0aW9uXG4gICAqIFRoaXMgYWNjZXB0cyB0aGUgc2FtZSB0cmFja0J5IGZ1bmN0aW9uIFtuZ0Zvcl0gZG9lcy5cbiAgICogaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb3JlL1RyYWNrQnlGdW5jdGlvblxuICAgKi9cbiAgQElucHV0KCd0cmFja0J5JykgdHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPGFueT4gPSAgKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9ICg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgbGV0IHZlcnRpY2FsU2Nyb2xsOiBudW1iZXIgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGlmICh0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCAhPT0gdmVydGljYWxTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgPSB2ZXJ0aWNhbFNjcm9sbDtcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gcmVmcmVzaCBhbmQgcmVjYWxjdWxhdGUgdGhlIHZpcnR1YWwgcm93c1xuICAgKiBlLmcuIGFmdGVyIGNoYW5naW5nIHRoZSBbZGF0YV0gY29udGVudFxuICAgKi9cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzY3JvbGwgdG8gYSBzcGVjaWZpYyByb3cgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBzY3JvbGxUbyhyb3c6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSByb3cgKiB0aGlzLnJvd0hlaWdodDtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc2Nyb2xsIHRvIHRoZSBzdGFydCBvZiB0aGUgbGlzdC5cbiAgICovXG4gIHNjcm9sbFRvU3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxUbygwKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gc2Nyb2xsIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBzY3JvbGxUb0VuZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNjcm9sbFRvKHRoaXMudG90YWxIZWlnaHQgLyB0aGlzLnJvd0hlaWdodCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9jYWxjdWxhdGVWaXJ0dWFsUm93cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSB0aGlzLl9kYXRhLmxlbmd0aCAqIHRoaXMucm93SGVpZ2h0O1xuICAgICAgbGV0IGZyb21Sb3c6IG51bWJlciA9IE1hdGguZmxvb3IoKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0IC8gdGhpcy5yb3dIZWlnaHQpKSAtIFREX1ZJUlRVQUxfT0ZGU0VUO1xuICAgICAgdGhpcy5fZnJvbVJvdyA9IGZyb21Sb3cgPiAwID8gZnJvbVJvdyA6IDA7XG4gICAgICBsZXQgcmFuZ2U6IG51bWJlciA9IE1hdGguZmxvb3IoKHRoaXMuX2hvc3RIZWlnaHQgLyB0aGlzLnJvd0hlaWdodCkpICsgKFREX1ZJUlRVQUxfT0ZGU0VUICogMik7XG4gICAgICBsZXQgdG9Sb3c6IG51bWJlciA9IHJhbmdlICsgdGhpcy5mcm9tUm93O1xuICAgICAgaWYgKGlzRmluaXRlKHRvUm93KSAmJiB0b1JvdyA+IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRvUm93ID0gdGhpcy5fZGF0YS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKCFpc0Zpbml0ZSh0b1JvdykpIHtcbiAgICAgICAgdG9Sb3cgPSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RvUm93ID0gdG9Sb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSAwO1xuICAgICAgdGhpcy5fdG9Sb3cgPSAwO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID4gKFREX1ZJUlRVQUxfT0ZGU0VUICogdGhpcy5yb3dIZWlnaHQpKSB7XG4gICAgICBvZmZzZXQgPSB0aGlzLmZyb21Sb3cgKiB0aGlzLnJvd0hlaWdodDtcbiAgICB9XG5cbiAgICB0aGlzLl9vZmZzZXRUcmFuc2Zvcm0gPSB0aGlzLl9kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCd0cmFuc2xhdGVZKCcgKyAob2Zmc2V0IC0gdGhpcy50b3RhbEhlaWdodCkgKyAncHgpJyk7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX3ZpcnR1YWxEYXRhID0gdGhpcy5kYXRhLnNsaWNlKHRoaXMuZnJvbVJvdywgdGhpcy50b1Jvdyk7XG4gICAgfVxuICAgIC8vIG1hcmsgZm9yIGNoZWNrIGF0IHRoZSBlbmQgb2YgdGhlIHF1ZXVlIHNvIHdlIGFyZSBzdXJlXG4gICAgLy8gdGhhdCB0aGUgY2hhbmdlcyB3aWxsIGJlIG1hcmtlZFxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19