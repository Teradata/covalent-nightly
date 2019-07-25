/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Optional, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Dir } from '@angular/cdk/bidi';
/**
 * @record
 */
export function IPageChangeEvent() { }
if (false) {
    /** @type {?} */
    IPageChangeEvent.prototype.page;
    /** @type {?} */
    IPageChangeEvent.prototype.maxPage;
    /** @type {?} */
    IPageChangeEvent.prototype.pageSize;
    /** @type {?} */
    IPageChangeEvent.prototype.total;
    /** @type {?} */
    IPageChangeEvent.prototype.fromRow;
    /** @type {?} */
    IPageChangeEvent.prototype.toRow;
}
var TdPagingBarComponent = /** @class */ (function () {
    function TdPagingBarComponent(_dir, _changeDetectorRef) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._pageSize = 50;
        this._total = 0;
        this._page = 1;
        this._fromRow = 1;
        this._toRow = 1;
        this._initialized = false;
        this._pageLinks = [];
        this._pageLinkCount = 0;
        // special case when 2 pageLinks, detect when hit end of pages so can lead in correct direction
        this._hitEnd = false;
        // special case when 2 pageLinks, detect when hit start of pages so can lead in correct direction
        this._hitStart = false;
        /**
         * firstLast?: boolean
         * Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'
         */
        this.firstLast = true;
        /**
         * initialPage?: number
         * Sets starting page for the paging bar. Defaults to '1'
         */
        this.initialPage = 1;
        /**
         * change?: function
         * Method to be executed when page size changes or any button is clicked in the paging bar.
         * Emits an [IPageChangeEvent] implemented object.
         */
        this.onChange = new EventEmitter();
    }
    Object.defineProperty(TdPagingBarComponent.prototype, "pageLinkCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageLinkCount;
        },
        /**
         * pageLinkCount?: number
         * Amount of page navigation links for the paging bar. Defaults to '0'
         */
        set: /**
         * pageLinkCount?: number
         * Amount of page navigation links for the paging bar. Defaults to '0'
         * @param {?} pageLinkCount
         * @return {?}
         */
        function (pageLinkCount) {
            this._pageLinkCount = coerceNumberProperty(pageLinkCount);
            this._calculatePageLinks();
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "pageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        /**
         * pageSize?: number
         * Selected page size for the pagination. Defaults 50.
         */
        set: /**
         * pageSize?: number
         * Selected page size for the pagination. Defaults 50.
         * @param {?} pageSize
         * @return {?}
         */
        function (pageSize) {
            this._pageSize = coerceNumberProperty(pageSize);
            this._page = 1;
            if (this._initialized) {
                this._handleOnChange();
            }
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "total", {
        get: /**
         * @return {?}
         */
        function () {
            return this._total;
        },
        /**
         * total: number
         * Total rows for the pagination.
         */
        set: /**
         * total: number
         * Total rows for the pagination.
         * @param {?} total
         * @return {?}
         */
        function (total) {
            this._total = coerceNumberProperty(total);
            this._calculateRows();
            this._calculatePageLinks();
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "pageLinks", {
        /**
         * pageLinks: number[]
         * Returns the pageLinks in an array
         */
        get: /**
         * pageLinks: number[]
         * Returns the pageLinks in an array
         * @return {?}
         */
        function () {
            return this._pageLinks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "range", {
        /**
         * range: string
         * Returns the range of the rows.
         */
        get: /**
         * range: string
         * Returns the range of the rows.
         * @return {?}
         */
        function () {
            return (!this._toRow ? 0 : this._fromRow) + "-" + this._toRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "page", {
        /**
         * page: number
         * Returns the current page.
         */
        get: /**
         * page: number
         * Returns the current page.
         * @return {?}
         */
        function () {
            return this._page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "maxPage", {
        /**
         * page: number
         * Returns the max page for the current pageSize and total.
         */
        get: /**
         * page: number
         * Returns the max page for the current pageSize and total.
         * @return {?}
         */
        function () {
            return Math.ceil(this._total / this._pageSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "isRTL", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._dir) {
                return this._dir.dir === 'rtl';
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdPagingBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._page = coerceNumberProperty(this.initialPage);
        this._calculateRows();
        this._calculatePageLinks();
        this._initialized = true;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * navigateToPage?: function
     * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
     */
    /**
     * navigateToPage?: function
     * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
     * @param {?} page
     * @return {?}
     */
    TdPagingBarComponent.prototype.navigateToPage = /**
     * navigateToPage?: function
     * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (page === 1 || (page >= 1 && page <= this.maxPage)) {
            this._page = coerceNumberProperty(Math.floor(page));
            this._handleOnChange();
            return true;
        }
        return false;
    };
    /**
     * firstPage?: function
     * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
     */
    /**
     * firstPage?: function
     * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    TdPagingBarComponent.prototype.firstPage = /**
     * firstPage?: function
     * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    function () {
        return this.navigateToPage(1);
    };
    /**
     * prevPage?: function
     * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
     */
    /**
     * prevPage?: function
     * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    TdPagingBarComponent.prototype.prevPage = /**
     * prevPage?: function
     * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    function () {
        return this.navigateToPage(this._page - 1);
    };
    /**
     * nextPage?: function
     * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
     */
    /**
     * nextPage?: function
     * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    TdPagingBarComponent.prototype.nextPage = /**
     * nextPage?: function
     * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    function () {
        return this.navigateToPage(this._page + 1);
    };
    /**
     * lastPage?: function
     * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
     */
    /**
     * lastPage?: function
     * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    TdPagingBarComponent.prototype.lastPage = /**
     * lastPage?: function
     * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    function () {
        return this.navigateToPage(this.maxPage);
    };
    /**
     * @return {?}
     */
    TdPagingBarComponent.prototype.isMinPage = /**
     * @return {?}
     */
    function () {
        return this._page <= 1;
    };
    /**
     * @return {?}
     */
    TdPagingBarComponent.prototype.isMaxPage = /**
     * @return {?}
     */
    function () {
        return this._page >= this.maxPage;
    };
    /**
     * @return {?}
     */
    TdPagingBarComponent.prototype._calculateRows = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var top = this._pageSize * this._page;
        this._fromRow = this._pageSize * (this._page - 1) + 1;
        this._toRow = this._total > top ? top : this._total;
    };
    /**
     * _calculatePageLinks?: function
     * Calculates the page links that should be shown to the user based on the current state of the paginator
     */
    /**
     * _calculatePageLinks?: function
     * Calculates the page links that should be shown to the user based on the current state of the paginator
     * @return {?}
     */
    TdPagingBarComponent.prototype._calculatePageLinks = /**
     * _calculatePageLinks?: function
     * Calculates the page links that should be shown to the user based on the current state of the paginator
     * @return {?}
     */
    function () {
        // special case when 2 pageLinks, detect when hit end of pages so can lead in correct direction
        if (this.isMaxPage()) {
            this._hitEnd = true;
            this._hitStart = false;
        }
        // special case when 2 pageLinks, detect when hit start of pages so can lead in correct direction
        if (this.isMinPage()) {
            this._hitEnd = false;
            this._hitStart = true;
        }
        // If the pageLinkCount goes above max possible pages based on perpage setting then reset it to maxPage
        /** @type {?} */
        var actualPageLinkCount = this.pageLinkCount;
        if (this.pageLinkCount > this.maxPage) {
            actualPageLinkCount = this.maxPage;
        }
        // reset the pageLinks array
        this._pageLinks = [];
        // fill in the array with the pageLinks based on the current selected page
        /** @type {?} */
        var middlePageLinks = Math.floor(actualPageLinkCount / 2);
        for (var x = 0; x < actualPageLinkCount; x++) {
            // don't go past the maxPage in the pageLinks
            // have to handle even and odd pageLinkCounts differently so can still lead to the next numbers
            if ((actualPageLinkCount % 2 === 0 && this.page + middlePageLinks > this.maxPage) ||
                (actualPageLinkCount % 2 !== 0 && this.page + middlePageLinks >= this.maxPage)) {
                this._pageLinks[x] = this.maxPage - (actualPageLinkCount - (x + 1));
                // if the selected page is after the middle then set that page as middle and get the correct balance on left and right
                // special handling when there are only 2 pageLinks to just drop to next if block so can lead to next numbers when moving to right
                // when moving to the left then go into this block
            }
            else if ((actualPageLinkCount > 2 || (actualPageLinkCount <= 2 && this._hitEnd)) &&
                this.page - middlePageLinks > 0) {
                this._pageLinks[x] = this.page - middlePageLinks + x;
                // if the selected page is before the middle then set the pages based on the x index leading up to and after selected page
            }
            else if (this.page - middlePageLinks <= 0) {
                this._pageLinks[x] = x + 1;
                // other wise just set the array in order starting from the selected page
            }
            else {
                this._pageLinks[x] = this.page + x;
            }
        }
    };
    /**
     * @return {?}
     */
    TdPagingBarComponent.prototype._handleOnChange = /**
     * @return {?}
     */
    function () {
        this._calculateRows();
        this._calculatePageLinks();
        /** @type {?} */
        var event = {
            page: this._page,
            maxPage: this.maxPage,
            pageSize: this._pageSize,
            total: this._total,
            fromRow: this._fromRow,
            toRow: this._toRow,
        };
        this._changeDetectorRef.markForCheck();
        this.onChange.emit(event);
    };
    TdPagingBarComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'td-paging-bar',
                    template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\">\n  <ng-content></ng-content>\n  <div class=\"td-paging-bar-navigation\">\n    <button\n      mat-icon-button\n      class=\"td-paging-bar-first-page\"\n      type=\"button\"\n      *ngIf=\"firstLast\"\n      [disabled]=\"isMinPage()\"\n      (click)=\"firstPage()\"\n    >\n      <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon>\n    </button>\n    <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\">\n      <button\n        class=\"td-paging-bar-link-page\"\n        mat-icon-button\n        type=\"button\"\n        [color]=\"page === link ? 'accent' : ''\"\n        (click)=\"navigateToPage(link)\"\n      >\n        {{ link }}\n      </button>\n    </ng-template>\n    <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon>\n    </button>\n    <button\n      mat-icon-button\n      class=\"td-paging-bar-last-page\"\n      type=\"button\"\n      *ngIf=\"firstLast\"\n      [disabled]=\"isMaxPage()\"\n      (click)=\"lastPage()\"\n    >\n      <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon>\n    </button>\n  </div>\n</div>\n",
                    styles: [":host{display:block}:host .td-paging-bar{height:48px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-paging-bar ::ng-deep>*{margin:0 10px}:host .td-paging-bar [mat-icon-button]{font-size:12px;font-weight:400}"]
                }] }
    ];
    /** @nocollapse */
    TdPagingBarComponent.ctorParameters = function () { return [
        { type: Dir, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef }
    ]; };
    TdPagingBarComponent.propDecorators = {
        firstLast: [{ type: Input, args: ['firstLast',] }],
        initialPage: [{ type: Input, args: ['initialPage',] }],
        pageLinkCount: [{ type: Input, args: ['pageLinkCount',] }],
        pageSize: [{ type: Input, args: ['pageSize',] }],
        total: [{ type: Input, args: ['total',] }],
        onChange: [{ type: Output, args: ['change',] }]
    };
    return TdPagingBarComponent;
}());
export { TdPagingBarComponent };
if (false) {
    /** @type {?} */
    TdPagingBarComponent.prototype._pageSize;
    /** @type {?} */
    TdPagingBarComponent.prototype._total;
    /** @type {?} */
    TdPagingBarComponent.prototype._page;
    /** @type {?} */
    TdPagingBarComponent.prototype._fromRow;
    /** @type {?} */
    TdPagingBarComponent.prototype._toRow;
    /** @type {?} */
    TdPagingBarComponent.prototype._initialized;
    /** @type {?} */
    TdPagingBarComponent.prototype._pageLinks;
    /** @type {?} */
    TdPagingBarComponent.prototype._pageLinkCount;
    /** @type {?} */
    TdPagingBarComponent.prototype._hitEnd;
    /** @type {?} */
    TdPagingBarComponent.prototype._hitStart;
    /**
     * firstLast?: boolean
     * Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'
     * @type {?}
     */
    TdPagingBarComponent.prototype.firstLast;
    /**
     * initialPage?: number
     * Sets starting page for the paging bar. Defaults to '1'
     * @type {?}
     */
    TdPagingBarComponent.prototype.initialPage;
    /**
     * change?: function
     * Method to be executed when page size changes or any button is clicked in the paging bar.
     * Emits an [IPageChangeEvent] implemented object.
     * @type {?}
     */
    TdPagingBarComponent.prototype.onChange;
    /** @type {?} */
    TdPagingBarComponent.prototype._dir;
    /** @type {?} */
    TdPagingBarComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbInBhZ2luZy9wYWdpbmctYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFeEMsc0NBT0M7OztJQU5DLGdDQUFhOztJQUNiLG1DQUFnQjs7SUFDaEIsb0NBQWlCOztJQUNqQixpQ0FBYzs7SUFDZCxtQ0FBZ0I7O0lBQ2hCLGlDQUFjOztBQUdoQjtJQTRIRSw4QkFBZ0MsSUFBUyxFQUFVLGtCQUFxQztRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXJIaEYsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDMUIsbUJBQWMsR0FBVyxDQUFDLENBQUM7O1FBRTNCLFlBQU8sR0FBWSxLQUFLLENBQUM7O1FBRXpCLGNBQVMsR0FBWSxLQUFLLENBQUM7Ozs7O1FBTWYsY0FBUyxHQUFZLElBQUksQ0FBQzs7Ozs7UUFNeEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7Ozs7OztRQXFGNUIsYUFBUSxHQUFtQyxJQUFJLFlBQVksRUFBb0Is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QyxPQUFPO1lBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNuQjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkFoUUYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsZUFBZTtvQkFDekIsMmhEQUEwQzs7aUJBRTNDOzs7O2dCQWhCUSxHQUFHLHVCQXVJRyxRQUFRO2dCQTNJckIsaUJBQWlCOzs7NEJBdUNoQixLQUFLLFNBQUMsV0FBVzs4QkFNakIsS0FBSyxTQUFDLGFBQWE7Z0NBTW5CLEtBQUssU0FBQyxlQUFlOzJCQWNyQixLQUFLLFNBQUMsVUFBVTt3QkFpQmhCLEtBQUssU0FBQyxPQUFPOzJCQWdEYixNQUFNLFNBQUMsUUFBUTs7SUE4SWxCLDJCQUFDO0NBQUEsQUFqUUQsSUFpUUM7U0EzUFksb0JBQW9COzs7SUFDL0IseUNBQStCOztJQUMvQixzQ0FBMkI7O0lBQzNCLHFDQUEwQjs7SUFDMUIsd0NBQTZCOztJQUM3QixzQ0FBMkI7O0lBQzNCLDRDQUFzQzs7SUFDdEMsMENBQWtDOztJQUNsQyw4Q0FBbUM7O0lBRW5DLHVDQUFpQzs7SUFFakMseUNBQW1DOzs7Ozs7SUFNbkMseUNBQThDOzs7Ozs7SUFNOUMsMkNBQThDOzs7Ozs7O0lBcUY5Qyx3Q0FBa0c7O0lBU3RGLG9DQUE2Qjs7SUFBRSxrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcblxuZXhwb3J0IGludGVyZmFjZSBJUGFnZUNoYW5nZUV2ZW50IHtcbiAgcGFnZTogbnVtYmVyO1xuICBtYXhQYWdlOiBudW1iZXI7XG4gIHBhZ2VTaXplOiBudW1iZXI7XG4gIHRvdGFsOiBudW1iZXI7XG4gIGZyb21Sb3c6IG51bWJlcjtcbiAgdG9Sb3c6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ3RkLXBhZ2luZy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luZy1iYXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRQYWdpbmdCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9wYWdlU2l6ZTogbnVtYmVyID0gNTA7XG4gIHByaXZhdGUgX3RvdGFsOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9wYWdlOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF9mcm9tUm93OiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF90b1JvdzogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcGFnZUxpbmtzOiBudW1iZXJbXSA9IFtdO1xuICBwcml2YXRlIF9wYWdlTGlua0NvdW50OiBudW1iZXIgPSAwO1xuICAvLyBzcGVjaWFsIGNhc2Ugd2hlbiAyIHBhZ2VMaW5rcywgZGV0ZWN0IHdoZW4gaGl0IGVuZCBvZiBwYWdlcyBzbyBjYW4gbGVhZCBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICBwcml2YXRlIF9oaXRFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gc3BlY2lhbCBjYXNlIHdoZW4gMiBwYWdlTGlua3MsIGRldGVjdCB3aGVuIGhpdCBzdGFydCBvZiBwYWdlcyBzbyBjYW4gbGVhZCBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICBwcml2YXRlIF9oaXRTdGFydDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBmaXJzdExhc3Q/OiBib29sZWFuXG4gICAqIFNob3dzIG9yIGhpZGVzIHRoZSBmaXJzdCBhbmQgbGFzdCBwYWdlIGJ1dHRvbnMgb2YgdGhlIHBhZ2luZyBiYXIuIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnZmlyc3RMYXN0JykgZmlyc3RMYXN0OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogaW5pdGlhbFBhZ2U/OiBudW1iZXJcbiAgICogU2V0cyBzdGFydGluZyBwYWdlIGZvciB0aGUgcGFnaW5nIGJhci4gRGVmYXVsdHMgdG8gJzEnXG4gICAqL1xuICBASW5wdXQoJ2luaXRpYWxQYWdlJykgaW5pdGlhbFBhZ2U6IG51bWJlciA9IDE7XG5cbiAgLyoqXG4gICAqIHBhZ2VMaW5rQ291bnQ/OiBudW1iZXJcbiAgICogQW1vdW50IG9mIHBhZ2UgbmF2aWdhdGlvbiBsaW5rcyBmb3IgdGhlIHBhZ2luZyBiYXIuIERlZmF1bHRzIHRvICcwJ1xuICAgKi9cbiAgQElucHV0KCdwYWdlTGlua0NvdW50JylcbiAgc2V0IHBhZ2VMaW5rQ291bnQocGFnZUxpbmtDb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZUxpbmtDb3VudCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHBhZ2VMaW5rQ291bnQpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVBhZ2VMaW5rcygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBwYWdlTGlua0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VMaW5rQ291bnQ7XG4gIH1cblxuICAvKipcbiAgICogcGFnZVNpemU/OiBudW1iZXJcbiAgICogU2VsZWN0ZWQgcGFnZSBzaXplIGZvciB0aGUgcGFnaW5hdGlvbi4gRGVmYXVsdHMgNTAuXG4gICAqL1xuICBASW5wdXQoJ3BhZ2VTaXplJylcbiAgc2V0IHBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHBhZ2VTaXplKTtcbiAgICB0aGlzLl9wYWdlID0gMTtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZU9uQ2hhbmdlKCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBwYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b3RhbDogbnVtYmVyXG4gICAqIFRvdGFsIHJvd3MgZm9yIHRoZSBwYWdpbmF0aW9uLlxuICAgKi9cbiAgQElucHV0KCd0b3RhbCcpXG4gIHNldCB0b3RhbCh0b3RhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWwgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh0b3RhbCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUm93cygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVBhZ2VMaW5rcygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCB0b3RhbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYWdlTGlua3M6IG51bWJlcltdXG4gICAqIFJldHVybnMgdGhlIHBhZ2VMaW5rcyBpbiBhbiBhcnJheVxuICAgKi9cbiAgZ2V0IHBhZ2VMaW5rcygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VMaW5rcztcbiAgfVxuXG4gIC8qKlxuICAgKiByYW5nZTogc3RyaW5nXG4gICAqIFJldHVybnMgdGhlIHJhbmdlIG9mIHRoZSByb3dzLlxuICAgKi9cbiAgZ2V0IHJhbmdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAkeyF0aGlzLl90b1JvdyA/IDAgOiB0aGlzLl9mcm9tUm93fS0ke3RoaXMuX3RvUm93fWA7XG4gIH1cblxuICAvKipcbiAgICogcGFnZTogbnVtYmVyXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcGFnZS5cbiAgICovXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cblxuICAvKipcbiAgICogcGFnZTogbnVtYmVyXG4gICAqIFJldHVybnMgdGhlIG1heCBwYWdlIGZvciB0aGUgY3VycmVudCBwYWdlU2l6ZSBhbmQgdG90YWwuXG4gICAqL1xuICBnZXQgbWF4UGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5fdG90YWwgLyB0aGlzLl9wYWdlU2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogY2hhbmdlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gcGFnZSBzaXplIGNoYW5nZXMgb3IgYW55IGJ1dHRvbiBpcyBjbGlja2VkIGluIHRoZSBwYWdpbmcgYmFyLlxuICAgKiBFbWl0cyBhbiBbSVBhZ2VDaGFuZ2VFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnY2hhbmdlJykgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxJUGFnZUNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVBhZ2VDaGFuZ2VFdmVudD4oKTtcblxuICBnZXQgaXNSVEwoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2Rpcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpci5kaXIgPT09ICdydGwnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpciwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3BhZ2UgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh0aGlzLmluaXRpYWxQYWdlKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVSb3dzKCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUGFnZUxpbmtzKCk7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIG5hdmlnYXRlVG9QYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIGEgc3BlY2lmaWMgdmFsaWQgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgbmF2aWdhdGVUb1BhZ2UocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHBhZ2UgPT09IDEgfHwgKHBhZ2UgPj0gMSAmJiBwYWdlIDw9IHRoaXMubWF4UGFnZSkpIHtcbiAgICAgIHRoaXMuX3BhZ2UgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eShNYXRoLmZsb29yKHBhZ2UpKTtcbiAgICAgIHRoaXMuX2hhbmRsZU9uQ2hhbmdlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGZpcnN0UGFnZT86IGZ1bmN0aW9uXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgZmlyc3QgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgZmlyc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG9QYWdlKDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHByZXZQYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIHRoZSBwcmV2aW91cyBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBwcmV2UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvUGFnZSh0aGlzLl9wYWdlIC0gMSk7XG4gIH1cblxuICAvKipcbiAgICogbmV4dFBhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIG5leHQgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgbmV4dFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1BhZ2UodGhpcy5fcGFnZSArIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIGxhc3RQYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIHRoZSBsYXN0IHBhZ2UuIFJldHVybnMgJ3RydWUnIGlmIHBhZ2UgaXMgdmFsaWQsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGxhc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG9QYWdlKHRoaXMubWF4UGFnZSk7XG4gIH1cblxuICBpc01pblBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2UgPD0gMTtcbiAgfVxuXG4gIGlzTWF4UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZSA+PSB0aGlzLm1heFBhZ2U7XG4gIH1cblxuICBwcml2YXRlIF9jYWxjdWxhdGVSb3dzKCk6IHZvaWQge1xuICAgIGxldCB0b3A6IG51bWJlciA9IHRoaXMuX3BhZ2VTaXplICogdGhpcy5fcGFnZTtcbiAgICB0aGlzLl9mcm9tUm93ID0gdGhpcy5fcGFnZVNpemUgKiAodGhpcy5fcGFnZSAtIDEpICsgMTtcbiAgICB0aGlzLl90b1JvdyA9IHRoaXMuX3RvdGFsID4gdG9wID8gdG9wIDogdGhpcy5fdG90YWw7XG4gIH1cblxuICAvKipcbiAgICogX2NhbGN1bGF0ZVBhZ2VMaW5rcz86IGZ1bmN0aW9uXG4gICAqIENhbGN1bGF0ZXMgdGhlIHBhZ2UgbGlua3MgdGhhdCBzaG91bGQgYmUgc2hvd24gdG8gdGhlIHVzZXIgYmFzZWQgb24gdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHBhZ2luYXRvclxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlUGFnZUxpbmtzKCk6IHZvaWQge1xuICAgIC8vIHNwZWNpYWwgY2FzZSB3aGVuIDIgcGFnZUxpbmtzLCBkZXRlY3Qgd2hlbiBoaXQgZW5kIG9mIHBhZ2VzIHNvIGNhbiBsZWFkIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gICAgaWYgKHRoaXMuaXNNYXhQYWdlKCkpIHtcbiAgICAgIHRoaXMuX2hpdEVuZCA9IHRydWU7XG4gICAgICB0aGlzLl9oaXRTdGFydCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBzcGVjaWFsIGNhc2Ugd2hlbiAyIHBhZ2VMaW5rcywgZGV0ZWN0IHdoZW4gaGl0IHN0YXJ0IG9mIHBhZ2VzIHNvIGNhbiBsZWFkIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gICAgaWYgKHRoaXMuaXNNaW5QYWdlKCkpIHtcbiAgICAgIHRoaXMuX2hpdEVuZCA9IGZhbHNlO1xuICAgICAgdGhpcy5faGl0U3RhcnQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgcGFnZUxpbmtDb3VudCBnb2VzIGFib3ZlIG1heCBwb3NzaWJsZSBwYWdlcyBiYXNlZCBvbiBwZXJwYWdlIHNldHRpbmcgdGhlbiByZXNldCBpdCB0byBtYXhQYWdlXG4gICAgbGV0IGFjdHVhbFBhZ2VMaW5rQ291bnQ6IG51bWJlciA9IHRoaXMucGFnZUxpbmtDb3VudDtcbiAgICBpZiAodGhpcy5wYWdlTGlua0NvdW50ID4gdGhpcy5tYXhQYWdlKSB7XG4gICAgICBhY3R1YWxQYWdlTGlua0NvdW50ID0gdGhpcy5tYXhQYWdlO1xuICAgIH1cbiAgICAvLyByZXNldCB0aGUgcGFnZUxpbmtzIGFycmF5XG4gICAgdGhpcy5fcGFnZUxpbmtzID0gW107XG4gICAgLy8gZmlsbCBpbiB0aGUgYXJyYXkgd2l0aCB0aGUgcGFnZUxpbmtzIGJhc2VkIG9uIHRoZSBjdXJyZW50IHNlbGVjdGVkIHBhZ2VcbiAgICBsZXQgbWlkZGxlUGFnZUxpbmtzOiBudW1iZXIgPSBNYXRoLmZsb29yKGFjdHVhbFBhZ2VMaW5rQ291bnQgLyAyKTtcbiAgICBmb3IgKGxldCB4OiBudW1iZXIgPSAwOyB4IDwgYWN0dWFsUGFnZUxpbmtDb3VudDsgeCsrKSB7XG4gICAgICAvLyBkb24ndCBnbyBwYXN0IHRoZSBtYXhQYWdlIGluIHRoZSBwYWdlTGlua3NcbiAgICAgIC8vIGhhdmUgdG8gaGFuZGxlIGV2ZW4gYW5kIG9kZCBwYWdlTGlua0NvdW50cyBkaWZmZXJlbnRseSBzbyBjYW4gc3RpbGwgbGVhZCB0byB0aGUgbmV4dCBudW1iZXJzXG4gICAgICBpZiAoXG4gICAgICAgIChhY3R1YWxQYWdlTGlua0NvdW50ICUgMiA9PT0gMCAmJiB0aGlzLnBhZ2UgKyBtaWRkbGVQYWdlTGlua3MgPiB0aGlzLm1heFBhZ2UpIHx8XG4gICAgICAgIChhY3R1YWxQYWdlTGlua0NvdW50ICUgMiAhPT0gMCAmJiB0aGlzLnBhZ2UgKyBtaWRkbGVQYWdlTGlua3MgPj0gdGhpcy5tYXhQYWdlKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9IHRoaXMubWF4UGFnZSAtIChhY3R1YWxQYWdlTGlua0NvdW50IC0gKHggKyAxKSk7XG4gICAgICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBwYWdlIGlzIGFmdGVyIHRoZSBtaWRkbGUgdGhlbiBzZXQgdGhhdCBwYWdlIGFzIG1pZGRsZSBhbmQgZ2V0IHRoZSBjb3JyZWN0IGJhbGFuY2Ugb24gbGVmdCBhbmQgcmlnaHRcbiAgICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyB3aGVuIHRoZXJlIGFyZSBvbmx5IDIgcGFnZUxpbmtzIHRvIGp1c3QgZHJvcCB0byBuZXh0IGlmIGJsb2NrIHNvIGNhbiBsZWFkIHRvIG5leHQgbnVtYmVycyB3aGVuIG1vdmluZyB0byByaWdodFxuICAgICAgICAvLyB3aGVuIG1vdmluZyB0byB0aGUgbGVmdCB0aGVuIGdvIGludG8gdGhpcyBibG9ja1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGFjdHVhbFBhZ2VMaW5rQ291bnQgPiAyIHx8IChhY3R1YWxQYWdlTGlua0NvdW50IDw9IDIgJiYgdGhpcy5faGl0RW5kKSkgJiZcbiAgICAgICAgdGhpcy5wYWdlIC0gbWlkZGxlUGFnZUxpbmtzID4gMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9IHRoaXMucGFnZSAtIG1pZGRsZVBhZ2VMaW5rcyArIHg7XG4gICAgICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBwYWdlIGlzIGJlZm9yZSB0aGUgbWlkZGxlIHRoZW4gc2V0IHRoZSBwYWdlcyBiYXNlZCBvbiB0aGUgeCBpbmRleCBsZWFkaW5nIHVwIHRvIGFuZCBhZnRlciBzZWxlY3RlZCBwYWdlXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZSAtIG1pZGRsZVBhZ2VMaW5rcyA8PSAwKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9IHggKyAxO1xuICAgICAgICAvLyBvdGhlciB3aXNlIGp1c3Qgc2V0IHRoZSBhcnJheSBpbiBvcmRlciBzdGFydGluZyBmcm9tIHRoZSBzZWxlY3RlZCBwYWdlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wYWdlTGlua3NbeF0gPSB0aGlzLnBhZ2UgKyB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuX2NhbGN1bGF0ZVJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVQYWdlTGlua3MoKTtcbiAgICBsZXQgZXZlbnQ6IElQYWdlQ2hhbmdlRXZlbnQgPSB7XG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxuICAgICAgbWF4UGFnZTogdGhpcy5tYXhQYWdlLFxuICAgICAgcGFnZVNpemU6IHRoaXMuX3BhZ2VTaXplLFxuICAgICAgdG90YWw6IHRoaXMuX3RvdGFsLFxuICAgICAgZnJvbVJvdzogdGhpcy5fZnJvbVJvdyxcbiAgICAgIHRvUm93OiB0aGlzLl90b1JvdyxcbiAgICB9O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==