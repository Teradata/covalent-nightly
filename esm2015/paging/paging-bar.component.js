/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class TdPagingBarComponent {
    /**
     * @param {?} _dir
     * @param {?} _changeDetectorRef
     */
    constructor(_dir, _changeDetectorRef) {
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
        this.change = new EventEmitter();
    }
    /**
     * pageLinkCount?: number
     * Amount of page navigation links for the paging bar. Defaults to '0'
     * @param {?} pageLinkCount
     * @return {?}
     */
    set pageLinkCount(pageLinkCount) {
        this._pageLinkCount = coerceNumberProperty(pageLinkCount);
        this._calculatePageLinks();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get pageLinkCount() {
        return this._pageLinkCount;
    }
    /**
     * pageSize?: number
     * Selected page size for the pagination. Defaults 50.
     * @param {?} pageSize
     * @return {?}
     */
    set pageSize(pageSize) {
        this._pageSize = coerceNumberProperty(pageSize);
        this._page = 1;
        if (this._initialized) {
            this._handleOnChange();
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get pageSize() {
        return this._pageSize;
    }
    /**
     * total: number
     * Total rows for the pagination.
     * @param {?} total
     * @return {?}
     */
    set total(total) {
        this._total = coerceNumberProperty(total);
        this._calculateRows();
        this._calculatePageLinks();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get total() {
        return this._total;
    }
    /**
     * pageLinks: number[]
     * Returns the pageLinks in an array
     * @return {?}
     */
    get pageLinks() {
        return this._pageLinks;
    }
    /**
     * range: string
     * Returns the range of the rows.
     * @return {?}
     */
    get range() {
        return `${!this._toRow ? 0 : this._fromRow}-${this._toRow}`;
    }
    /**
     * page: number
     * Returns the current page.
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * page: number
     * Returns the max page for the current pageSize and total.
     * @return {?}
     */
    get maxPage() {
        return Math.ceil(this._total / this._pageSize);
    }
    /**
     * @return {?}
     */
    get isRTL() {
        if (this._dir) {
            return this._dir.dir === 'rtl';
        }
        return false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._page = coerceNumberProperty(this.initialPage);
        this._calculateRows();
        this._calculatePageLinks();
        this._initialized = true;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * navigateToPage?: function
     * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
     * @param {?} page
     * @return {?}
     */
    navigateToPage(page) {
        if (page === 1 || (page >= 1 && page <= this.maxPage)) {
            this._page = coerceNumberProperty(Math.floor(page));
            this._handleOnChange();
            return true;
        }
        return false;
    }
    /**
     * firstPage?: function
     * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    firstPage() {
        return this.navigateToPage(1);
    }
    /**
     * prevPage?: function
     * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    prevPage() {
        return this.navigateToPage(this._page - 1);
    }
    /**
     * nextPage?: function
     * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    nextPage() {
        return this.navigateToPage(this._page + 1);
    }
    /**
     * lastPage?: function
     * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    lastPage() {
        return this.navigateToPage(this.maxPage);
    }
    /**
     * @return {?}
     */
    isMinPage() {
        return this._page <= 1;
    }
    /**
     * @return {?}
     */
    isMaxPage() {
        return this._page >= this.maxPage;
    }
    /**
     * @private
     * @return {?}
     */
    _calculateRows() {
        /** @type {?} */
        const top = this._pageSize * this._page;
        this._fromRow = this._pageSize * (this._page - 1) + 1;
        this._toRow = this._total > top ? top : this._total;
    }
    /**
     * _calculatePageLinks?: function
     * Calculates the page links that should be shown to the user based on the current state of the paginator
     * @private
     * @return {?}
     */
    _calculatePageLinks() {
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
        let actualPageLinkCount = this.pageLinkCount;
        if (this.pageLinkCount > this.maxPage) {
            actualPageLinkCount = this.maxPage;
        }
        // reset the pageLinks array
        this._pageLinks = [];
        // fill in the array with the pageLinks based on the current selected page
        /** @type {?} */
        const middlePageLinks = Math.floor(actualPageLinkCount / 2);
        for (let x = 0; x < actualPageLinkCount; x++) {
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
    }
    /**
     * @private
     * @return {?}
     */
    _handleOnChange() {
        this._calculateRows();
        this._calculatePageLinks();
        /** @type {?} */
        const event = {
            page: this._page,
            maxPage: this.maxPage,
            pageSize: this._pageSize,
            total: this._total,
            fromRow: this._fromRow,
            toRow: this._toRow,
        };
        this._changeDetectorRef.markForCheck();
        this.change.emit(event);
    }
}
TdPagingBarComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'td-paging-bar',
                template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\">\n  <ng-content></ng-content>\n  <div class=\"td-paging-bar-navigation\">\n    <button\n      mat-icon-button\n      class=\"td-paging-bar-first-page\"\n      type=\"button\"\n      *ngIf=\"firstLast\"\n      [disabled]=\"isMinPage()\"\n      (click)=\"firstPage()\"\n    >\n      <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon>\n    </button>\n    <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\">\n      <button\n        class=\"td-paging-bar-link-page\"\n        mat-icon-button\n        type=\"button\"\n        [color]=\"page === link ? 'accent' : undefined\"\n        (click)=\"navigateToPage(link)\"\n      >\n        {{ link }}\n      </button>\n    </ng-template>\n    <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon>\n    </button>\n    <button\n      mat-icon-button\n      class=\"td-paging-bar-last-page\"\n      type=\"button\"\n      *ngIf=\"firstLast\"\n      [disabled]=\"isMaxPage()\"\n      (click)=\"lastPage()\"\n    >\n      <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon>\n    </button>\n  </div>\n</div>\n",
                styles: [":host{display:block}:host .td-paging-bar{height:48px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-paging-bar ::ng-deep>*{margin:0 10px}:host .td-paging-bar [mat-icon-button]{font-size:12px;font-weight:400}"]
            }] }
];
/** @nocollapse */
TdPagingBarComponent.ctorParameters = () => [
    { type: Dir, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
TdPagingBarComponent.propDecorators = {
    firstLast: [{ type: Input }],
    initialPage: [{ type: Input }],
    pageLinkCount: [{ type: Input, args: ['pageLinkCount',] }],
    pageSize: [{ type: Input, args: ['pageSize',] }],
    total: [{ type: Input, args: ['total',] }],
    change: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdPagingBarComponent.prototype._pageSize;
    /**
     * @type {?}
     * @private
     */
    TdPagingBarComponent.prototype._total;
    /**
     * @type {?}
     * @private
     */
    TdPagingBarComponent.prototype._page;
    /**
     * @type {?}
     * @private
     */
    TdPagingBarComponent.prototype._fromRow;
    /**
     * @type {?}
     * @private
     */
    TdPagingBarComponent.prototype._toRow;
    /**
     * @type {?}
     * @private
     */
    TdPagingBarComponent.prototype._initialized;
    /**
     * @type {?}
     * @private
     */
    TdPagingBarComponent.prototype._pageLinks;
    /**
     * @type {?}
     * @private
     */
    TdPagingBarComponent.prototype._pageLinkCount;
    /**
     * @type {?}
     * @private
     */
    TdPagingBarComponent.prototype._hitEnd;
    /**
     * @type {?}
     * @private
     */
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
    TdPagingBarComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    TdPagingBarComponent.prototype._dir;
    /**
     * @type {?}
     * @private
     */
    TdPagingBarComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9wYWdpbmcvIiwic291cmNlcyI6WyJwYWdpbmctYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFeEMsc0NBT0M7OztJQU5DLGdDQUFhOztJQUNiLG1DQUFnQjs7SUFDaEIsb0NBQWlCOztJQUNqQixpQ0FBYzs7SUFDZCxtQ0FBZ0I7O0lBQ2hCLGlDQUFjOztBQVNoQixNQUFNLE9BQU8sb0JBQW9COzs7OztJQXNIL0IsWUFBZ0MsSUFBUyxFQUFVLGtCQUFxQztRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXJIaEYsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDMUIsbUJBQWMsR0FBVyxDQUFDLENBQUM7O1FBRTNCLFlBQU8sR0FBWSxLQUFLLENBQUM7O1FBRXpCLGNBQVMsR0FBWSxLQUFLLENBQUM7Ozs7O1FBTTFCLGNBQVMsR0FBWSxJQUFJLENBQUM7Ozs7O1FBTTFCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDOzs7Ozs7UUFxRnZCLFdBQU0s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Z0JBQ3pCLGtpREFBMEM7O2FBRTNDOzs7O1lBaEJRLEdBQUcsdUJBdUlHLFFBQVE7WUEzSXJCLGlCQUFpQjs7O3dCQXVDaEIsS0FBSzswQkFNTCxLQUFLOzRCQU1MLEtBQUssU0FBQyxlQUFlO3VCQWNyQixLQUFLLFNBQUMsVUFBVTtvQkFpQmhCLEtBQUssU0FBQyxPQUFPO3FCQWdEYixNQUFNOzs7Ozs7O0lBNUdQLHlDQUErQjs7Ozs7SUFDL0Isc0NBQTJCOzs7OztJQUMzQixxQ0FBMEI7Ozs7O0lBQzFCLHdDQUE2Qjs7Ozs7SUFDN0Isc0NBQTJCOzs7OztJQUMzQiw0Q0FBc0M7Ozs7O0lBQ3RDLDBDQUFrQzs7Ozs7SUFDbEMsOENBQW1DOzs7OztJQUVuQyx1Q0FBaUM7Ozs7O0lBRWpDLHlDQUFtQzs7Ozs7O0lBTW5DLHlDQUFtQzs7Ozs7O0lBTW5DLDJDQUFpQzs7Ozs7OztJQXFGakMsc0NBQXdGOzs7OztJQVM1RSxvQ0FBNkI7Ozs7O0lBQUUsa0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBEaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VDaGFuZ2VFdmVudCB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgbWF4UGFnZTogbnVtYmVyO1xuICBwYWdlU2l6ZTogbnVtYmVyO1xuICB0b3RhbDogbnVtYmVyO1xuICBmcm9tUm93OiBudW1iZXI7XG4gIHRvUm93OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICd0ZC1wYWdpbmctYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luZy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmctYmFyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRkUGFnaW5nQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfcGFnZVNpemU6IG51bWJlciA9IDUwO1xuICBwcml2YXRlIF90b3RhbDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfcGFnZTogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfZnJvbVJvdzogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfdG9Sb3c6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3BhZ2VMaW5rczogbnVtYmVyW10gPSBbXTtcbiAgcHJpdmF0ZSBfcGFnZUxpbmtDb3VudDogbnVtYmVyID0gMDtcbiAgLy8gc3BlY2lhbCBjYXNlIHdoZW4gMiBwYWdlTGlua3MsIGRldGVjdCB3aGVuIGhpdCBlbmQgb2YgcGFnZXMgc28gY2FuIGxlYWQgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgcHJpdmF0ZSBfaGl0RW5kOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIHNwZWNpYWwgY2FzZSB3aGVuIDIgcGFnZUxpbmtzLCBkZXRlY3Qgd2hlbiBoaXQgc3RhcnQgb2YgcGFnZXMgc28gY2FuIGxlYWQgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgcHJpdmF0ZSBfaGl0U3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogZmlyc3RMYXN0PzogYm9vbGVhblxuICAgKiBTaG93cyBvciBoaWRlcyB0aGUgZmlyc3QgYW5kIGxhc3QgcGFnZSBidXR0b25zIG9mIHRoZSBwYWdpbmcgYmFyLiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoKSBmaXJzdExhc3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBpbml0aWFsUGFnZT86IG51bWJlclxuICAgKiBTZXRzIHN0YXJ0aW5nIHBhZ2UgZm9yIHRoZSBwYWdpbmcgYmFyLiBEZWZhdWx0cyB0byAnMSdcbiAgICovXG4gIEBJbnB1dCgpIGluaXRpYWxQYWdlOiBudW1iZXIgPSAxO1xuXG4gIC8qKlxuICAgKiBwYWdlTGlua0NvdW50PzogbnVtYmVyXG4gICAqIEFtb3VudCBvZiBwYWdlIG5hdmlnYXRpb24gbGlua3MgZm9yIHRoZSBwYWdpbmcgYmFyLiBEZWZhdWx0cyB0byAnMCdcbiAgICovXG4gIEBJbnB1dCgncGFnZUxpbmtDb3VudCcpXG4gIHNldCBwYWdlTGlua0NvdW50KHBhZ2VMaW5rQ291bnQ6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VMaW5rQ291bnQgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eShwYWdlTGlua0NvdW50KTtcbiAgICB0aGlzLl9jYWxjdWxhdGVQYWdlTGlua3MoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgcGFnZUxpbmtDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlTGlua0NvdW50O1xuICB9XG5cbiAgLyoqXG4gICAqIHBhZ2VTaXplPzogbnVtYmVyXG4gICAqIFNlbGVjdGVkIHBhZ2Ugc2l6ZSBmb3IgdGhlIHBhZ2luYXRpb24uIERlZmF1bHRzIDUwLlxuICAgKi9cbiAgQElucHV0KCdwYWdlU2l6ZScpXG4gIHNldCBwYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZVNpemUgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eShwYWdlU2l6ZSk7XG4gICAgdGhpcy5fcGFnZSA9IDE7XG4gICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLl9oYW5kbGVPbkNoYW5nZSgpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgcGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cblxuICAvKipcbiAgICogdG90YWw6IG51bWJlclxuICAgKiBUb3RhbCByb3dzIGZvciB0aGUgcGFnaW5hdGlvbi5cbiAgICovXG4gIEBJbnB1dCgndG90YWwnKVxuICBzZXQgdG90YWwodG90YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsID0gY29lcmNlTnVtYmVyUHJvcGVydHkodG90YWwpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVQYWdlTGlua3MoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgdG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWw7XG4gIH1cblxuICAvKipcbiAgICogcGFnZUxpbmtzOiBudW1iZXJbXVxuICAgKiBSZXR1cm5zIHRoZSBwYWdlTGlua3MgaW4gYW4gYXJyYXlcbiAgICovXG4gIGdldCBwYWdlTGlua3MoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiB0aGlzLl9wYWdlTGlua3M7XG4gIH1cblxuICAvKipcbiAgICogcmFuZ2U6IHN0cmluZ1xuICAgKiBSZXR1cm5zIHRoZSByYW5nZSBvZiB0aGUgcm93cy5cbiAgICovXG4gIGdldCByYW5nZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHshdGhpcy5fdG9Sb3cgPyAwIDogdGhpcy5fZnJvbVJvd30tJHt0aGlzLl90b1Jvd31gO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhZ2U6IG51bWJlclxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBhZ2UuXG4gICAqL1xuICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhZ2U6IG51bWJlclxuICAgKiBSZXR1cm5zIHRoZSBtYXggcGFnZSBmb3IgdGhlIGN1cnJlbnQgcGFnZVNpemUgYW5kIHRvdGFsLlxuICAgKi9cbiAgZ2V0IG1heFBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3RvdGFsIC8gdGhpcy5fcGFnZVNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoYW5nZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIHBhZ2Ugc2l6ZSBjaGFuZ2VzIG9yIGFueSBidXR0b24gaXMgY2xpY2tlZCBpbiB0aGUgcGFnaW5nIGJhci5cbiAgICogRW1pdHMgYW4gW0lQYWdlQ2hhbmdlRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxJUGFnZUNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVBhZ2VDaGFuZ2VFdmVudD4oKTtcblxuICBnZXQgaXNSVEwoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2Rpcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpci5kaXIgPT09ICdydGwnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpciwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3BhZ2UgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh0aGlzLmluaXRpYWxQYWdlKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVSb3dzKCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUGFnZUxpbmtzKCk7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIG5hdmlnYXRlVG9QYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIGEgc3BlY2lmaWMgdmFsaWQgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgbmF2aWdhdGVUb1BhZ2UocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHBhZ2UgPT09IDEgfHwgKHBhZ2UgPj0gMSAmJiBwYWdlIDw9IHRoaXMubWF4UGFnZSkpIHtcbiAgICAgIHRoaXMuX3BhZ2UgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eShNYXRoLmZsb29yKHBhZ2UpKTtcbiAgICAgIHRoaXMuX2hhbmRsZU9uQ2hhbmdlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGZpcnN0UGFnZT86IGZ1bmN0aW9uXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgZmlyc3QgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgZmlyc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG9QYWdlKDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHByZXZQYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIHRoZSBwcmV2aW91cyBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBwcmV2UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvUGFnZSh0aGlzLl9wYWdlIC0gMSk7XG4gIH1cblxuICAvKipcbiAgICogbmV4dFBhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIG5leHQgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgbmV4dFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1BhZ2UodGhpcy5fcGFnZSArIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIGxhc3RQYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIHRoZSBsYXN0IHBhZ2UuIFJldHVybnMgJ3RydWUnIGlmIHBhZ2UgaXMgdmFsaWQsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGxhc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG9QYWdlKHRoaXMubWF4UGFnZSk7XG4gIH1cblxuICBpc01pblBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2UgPD0gMTtcbiAgfVxuXG4gIGlzTWF4UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZSA+PSB0aGlzLm1heFBhZ2U7XG4gIH1cblxuICBwcml2YXRlIF9jYWxjdWxhdGVSb3dzKCk6IHZvaWQge1xuICAgIGNvbnN0IHRvcDogbnVtYmVyID0gdGhpcy5fcGFnZVNpemUgKiB0aGlzLl9wYWdlO1xuICAgIHRoaXMuX2Zyb21Sb3cgPSB0aGlzLl9wYWdlU2l6ZSAqICh0aGlzLl9wYWdlIC0gMSkgKyAxO1xuICAgIHRoaXMuX3RvUm93ID0gdGhpcy5fdG90YWwgPiB0b3AgPyB0b3AgOiB0aGlzLl90b3RhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBfY2FsY3VsYXRlUGFnZUxpbmtzPzogZnVuY3Rpb25cbiAgICogQ2FsY3VsYXRlcyB0aGUgcGFnZSBsaW5rcyB0aGF0IHNob3VsZCBiZSBzaG93biB0byB0aGUgdXNlciBiYXNlZCBvbiB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcGFnaW5hdG9yXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVQYWdlTGlua3MoKTogdm9pZCB7XG4gICAgLy8gc3BlY2lhbCBjYXNlIHdoZW4gMiBwYWdlTGlua3MsIGRldGVjdCB3aGVuIGhpdCBlbmQgb2YgcGFnZXMgc28gY2FuIGxlYWQgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgICBpZiAodGhpcy5pc01heFBhZ2UoKSkge1xuICAgICAgdGhpcy5faGl0RW5kID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2hpdFN0YXJ0ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHNwZWNpYWwgY2FzZSB3aGVuIDIgcGFnZUxpbmtzLCBkZXRlY3Qgd2hlbiBoaXQgc3RhcnQgb2YgcGFnZXMgc28gY2FuIGxlYWQgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgICBpZiAodGhpcy5pc01pblBhZ2UoKSkge1xuICAgICAgdGhpcy5faGl0RW5kID0gZmFsc2U7XG4gICAgICB0aGlzLl9oaXRTdGFydCA9IHRydWU7XG4gICAgfVxuICAgIC8vIElmIHRoZSBwYWdlTGlua0NvdW50IGdvZXMgYWJvdmUgbWF4IHBvc3NpYmxlIHBhZ2VzIGJhc2VkIG9uIHBlcnBhZ2Ugc2V0dGluZyB0aGVuIHJlc2V0IGl0IHRvIG1heFBhZ2VcbiAgICBsZXQgYWN0dWFsUGFnZUxpbmtDb3VudDogbnVtYmVyID0gdGhpcy5wYWdlTGlua0NvdW50O1xuICAgIGlmICh0aGlzLnBhZ2VMaW5rQ291bnQgPiB0aGlzLm1heFBhZ2UpIHtcbiAgICAgIGFjdHVhbFBhZ2VMaW5rQ291bnQgPSB0aGlzLm1heFBhZ2U7XG4gICAgfVxuICAgIC8vIHJlc2V0IHRoZSBwYWdlTGlua3MgYXJyYXlcbiAgICB0aGlzLl9wYWdlTGlua3MgPSBbXTtcbiAgICAvLyBmaWxsIGluIHRoZSBhcnJheSB3aXRoIHRoZSBwYWdlTGlua3MgYmFzZWQgb24gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgcGFnZVxuICAgIGNvbnN0IG1pZGRsZVBhZ2VMaW5rczogbnVtYmVyID0gTWF0aC5mbG9vcihhY3R1YWxQYWdlTGlua0NvdW50IC8gMik7XG4gICAgZm9yIChsZXQgeDogbnVtYmVyID0gMDsgeCA8IGFjdHVhbFBhZ2VMaW5rQ291bnQ7IHgrKykge1xuICAgICAgLy8gZG9uJ3QgZ28gcGFzdCB0aGUgbWF4UGFnZSBpbiB0aGUgcGFnZUxpbmtzXG4gICAgICAvLyBoYXZlIHRvIGhhbmRsZSBldmVuIGFuZCBvZGQgcGFnZUxpbmtDb3VudHMgZGlmZmVyZW50bHkgc28gY2FuIHN0aWxsIGxlYWQgdG8gdGhlIG5leHQgbnVtYmVyc1xuICAgICAgaWYgKFxuICAgICAgICAoYWN0dWFsUGFnZUxpbmtDb3VudCAlIDIgPT09IDAgJiYgdGhpcy5wYWdlICsgbWlkZGxlUGFnZUxpbmtzID4gdGhpcy5tYXhQYWdlKSB8fFxuICAgICAgICAoYWN0dWFsUGFnZUxpbmtDb3VudCAlIDIgIT09IDAgJiYgdGhpcy5wYWdlICsgbWlkZGxlUGFnZUxpbmtzID49IHRoaXMubWF4UGFnZSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9wYWdlTGlua3NbeF0gPSB0aGlzLm1heFBhZ2UgLSAoYWN0dWFsUGFnZUxpbmtDb3VudCAtICh4ICsgMSkpO1xuICAgICAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgcGFnZSBpcyBhZnRlciB0aGUgbWlkZGxlIHRoZW4gc2V0IHRoYXQgcGFnZSBhcyBtaWRkbGUgYW5kIGdldCB0aGUgY29ycmVjdCBiYWxhbmNlIG9uIGxlZnQgYW5kIHJpZ2h0XG4gICAgICAgIC8vIHNwZWNpYWwgaGFuZGxpbmcgd2hlbiB0aGVyZSBhcmUgb25seSAyIHBhZ2VMaW5rcyB0byBqdXN0IGRyb3AgdG8gbmV4dCBpZiBibG9jayBzbyBjYW4gbGVhZCB0byBuZXh0IG51bWJlcnMgd2hlbiBtb3ZpbmcgdG8gcmlnaHRcbiAgICAgICAgLy8gd2hlbiBtb3ZpbmcgdG8gdGhlIGxlZnQgdGhlbiBnbyBpbnRvIHRoaXMgYmxvY2tcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChhY3R1YWxQYWdlTGlua0NvdW50ID4gMiB8fCAoYWN0dWFsUGFnZUxpbmtDb3VudCA8PSAyICYmIHRoaXMuX2hpdEVuZCkpICYmXG4gICAgICAgIHRoaXMucGFnZSAtIG1pZGRsZVBhZ2VMaW5rcyA+IDBcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9wYWdlTGlua3NbeF0gPSB0aGlzLnBhZ2UgLSBtaWRkbGVQYWdlTGlua3MgKyB4O1xuICAgICAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgcGFnZSBpcyBiZWZvcmUgdGhlIG1pZGRsZSB0aGVuIHNldCB0aGUgcGFnZXMgYmFzZWQgb24gdGhlIHggaW5kZXggbGVhZGluZyB1cCB0byBhbmQgYWZ0ZXIgc2VsZWN0ZWQgcGFnZVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2UgLSBtaWRkbGVQYWdlTGlua3MgPD0gMCkge1xuICAgICAgICB0aGlzLl9wYWdlTGlua3NbeF0gPSB4ICsgMTtcbiAgICAgICAgLy8gb3RoZXIgd2lzZSBqdXN0IHNldCB0aGUgYXJyYXkgaW4gb3JkZXIgc3RhcnRpbmcgZnJvbSB0aGUgc2VsZWN0ZWQgcGFnZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGFnZUxpbmtzW3hdID0gdGhpcy5wYWdlICsgeDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVPbkNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWxjdWxhdGVSb3dzKCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUGFnZUxpbmtzKCk7XG4gICAgY29uc3QgZXZlbnQ6IElQYWdlQ2hhbmdlRXZlbnQgPSB7XG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxuICAgICAgbWF4UGFnZTogdGhpcy5tYXhQYWdlLFxuICAgICAgcGFnZVNpemU6IHRoaXMuX3BhZ2VTaXplLFxuICAgICAgdG90YWw6IHRoaXMuX3RvdGFsLFxuICAgICAgZnJvbVJvdzogdGhpcy5fZnJvbVJvdyxcbiAgICAgIHRvUm93OiB0aGlzLl90b1JvdyxcbiAgICB9O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=