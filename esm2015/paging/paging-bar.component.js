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
        this.onChange = new EventEmitter();
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
        let top = this._pageSize * this._page;
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
        let middlePageLinks = Math.floor(actualPageLinkCount / 2);
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
        let event = {
            page: this._page,
            maxPage: this.maxPage,
            pageSize: this._pageSize,
            total: this._total,
            fromRow: this._fromRow,
            toRow: this._toRow,
        };
        this._changeDetectorRef.markForCheck();
        this.onChange.emit(event);
    }
}
TdPagingBarComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'td-paging-bar',
                template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\">\n  <ng-content></ng-content>\n  <div class=\"td-paging-bar-navigation\">\n    <button\n      mat-icon-button\n      class=\"td-paging-bar-first-page\"\n      type=\"button\"\n      *ngIf=\"firstLast\"\n      [disabled]=\"isMinPage()\"\n      (click)=\"firstPage()\"\n    >\n      <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon>\n    </button>\n    <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\">\n      <button\n        class=\"td-paging-bar-link-page\"\n        mat-icon-button\n        type=\"button\"\n        [color]=\"page === link ? 'accent' : undefined\"\n        (click)=\"navigateToPage(link)\"\n      >\n        {{ link }}\n      </button>\n    </ng-template>\n    <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon>\n    </button>\n    <button\n      mat-icon-button\n      class=\"td-paging-bar-last-page\"\n      type=\"button\"\n      *ngIf=\"firstLast\"\n      [disabled]=\"isMaxPage()\"\n      (click)=\"lastPage()\"\n    >\n      <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon>\n    </button>\n  </div>\n</div>\n",
                styles: [":host{display:block}:host .td-paging-bar{height:48px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host .td-paging-bar ::ng-deep>*{margin:0 10px}:host .td-paging-bar [mat-icon-button]{font-size:12px;font-weight:400}"]
            }] }
];
/** @nocollapse */
TdPagingBarComponent.ctorParameters = () => [
    { type: Dir, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
TdPagingBarComponent.propDecorators = {
    firstLast: [{ type: Input, args: ['firstLast',] }],
    initialPage: [{ type: Input, args: ['initialPage',] }],
    pageLinkCount: [{ type: Input, args: ['pageLinkCount',] }],
    pageSize: [{ type: Input, args: ['pageSize',] }],
    total: [{ type: Input, args: ['total',] }],
    onChange: [{ type: Output, args: ['change',] }]
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
    TdPagingBarComponent.prototype.onChange;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbInBhZ2luZy9wYWdpbmctYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFWixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFeEMsc0NBT0M7OztJQU5DLGdDQUFhOztJQUNiLG1DQUFnQjs7SUFDaEIsb0NBQWlCOztJQUNqQixpQ0FBYzs7SUFDZCxtQ0FBZ0I7O0lBQ2hCLGlDQUFjOztBQVNoQixNQUFNLE9BQU8sb0JBQW9COzs7OztJQXNIL0IsWUFBZ0MsSUFBUyxFQUFVLGtCQUFxQztRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXJIaEYsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDMUIsbUJBQWMsR0FBVyxDQUFDLENBQUM7O1FBRTNCLFlBQU8sR0FBWSxLQUFLLENBQUM7O1FBRXpCLGNBQVMsR0FBWSxLQUFLLENBQUM7Ozs7O1FBTWYsY0FBUyxHQUFZLElBQUksQ0FBQzs7Ozs7UUFNeEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7Ozs7OztRQXFGNUIsYUFBUSxH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O2dCQUN6QixraURBQTBDOzthQUUzQzs7OztZQWhCUSxHQUFHLHVCQXVJRyxRQUFRO1lBM0lyQixpQkFBaUI7Ozt3QkF1Q2hCLEtBQUssU0FBQyxXQUFXOzBCQU1qQixLQUFLLFNBQUMsYUFBYTs0QkFNbkIsS0FBSyxTQUFDLGVBQWU7dUJBY3JCLEtBQUssU0FBQyxVQUFVO29CQWlCaEIsS0FBSyxTQUFDLE9BQU87dUJBZ0RiLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBNUdoQix5Q0FBK0I7Ozs7O0lBQy9CLHNDQUEyQjs7Ozs7SUFDM0IscUNBQTBCOzs7OztJQUMxQix3Q0FBNkI7Ozs7O0lBQzdCLHNDQUEyQjs7Ozs7SUFDM0IsNENBQXNDOzs7OztJQUN0QywwQ0FBa0M7Ozs7O0lBQ2xDLDhDQUFtQzs7Ozs7SUFFbkMsdUNBQWlDOzs7OztJQUVqQyx5Q0FBbUM7Ozs7OztJQU1uQyx5Q0FBOEM7Ozs7OztJQU05QywyQ0FBOEM7Ozs7Ozs7SUFxRjlDLHdDQUFrRzs7Ozs7SUFTdEYsb0NBQTZCOzs7OztJQUFFLGtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRGlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQYWdlQ2hhbmdlRXZlbnQge1xuICBwYWdlOiBudW1iZXI7XG4gIG1heFBhZ2U6IG51bWJlcjtcbiAgcGFnZVNpemU6IG51bWJlcjtcbiAgdG90YWw6IG51bWJlcjtcbiAgZnJvbVJvdzogbnVtYmVyO1xuICB0b1JvdzogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAndGQtcGFnaW5nLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmctYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5nLWJhci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZFBhZ2luZ0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX3BhZ2VTaXplOiBudW1iZXIgPSA1MDtcbiAgcHJpdmF0ZSBfdG90YWw6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3BhZ2U6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgX2Zyb21Sb3c6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgX3RvUm93OiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9wYWdlTGlua3M6IG51bWJlcltdID0gW107XG4gIHByaXZhdGUgX3BhZ2VMaW5rQ291bnQ6IG51bWJlciA9IDA7XG4gIC8vIHNwZWNpYWwgY2FzZSB3aGVuIDIgcGFnZUxpbmtzLCBkZXRlY3Qgd2hlbiBoaXQgZW5kIG9mIHBhZ2VzIHNvIGNhbiBsZWFkIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gIHByaXZhdGUgX2hpdEVuZDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBzcGVjaWFsIGNhc2Ugd2hlbiAyIHBhZ2VMaW5rcywgZGV0ZWN0IHdoZW4gaGl0IHN0YXJ0IG9mIHBhZ2VzIHNvIGNhbiBsZWFkIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gIHByaXZhdGUgX2hpdFN0YXJ0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGZpcnN0TGFzdD86IGJvb2xlYW5cbiAgICogU2hvd3Mgb3IgaGlkZXMgdGhlIGZpcnN0IGFuZCBsYXN0IHBhZ2UgYnV0dG9ucyBvZiB0aGUgcGFnaW5nIGJhci4gRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdmaXJzdExhc3QnKSBmaXJzdExhc3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBpbml0aWFsUGFnZT86IG51bWJlclxuICAgKiBTZXRzIHN0YXJ0aW5nIHBhZ2UgZm9yIHRoZSBwYWdpbmcgYmFyLiBEZWZhdWx0cyB0byAnMSdcbiAgICovXG4gIEBJbnB1dCgnaW5pdGlhbFBhZ2UnKSBpbml0aWFsUGFnZTogbnVtYmVyID0gMTtcblxuICAvKipcbiAgICogcGFnZUxpbmtDb3VudD86IG51bWJlclxuICAgKiBBbW91bnQgb2YgcGFnZSBuYXZpZ2F0aW9uIGxpbmtzIGZvciB0aGUgcGFnaW5nIGJhci4gRGVmYXVsdHMgdG8gJzAnXG4gICAqL1xuICBASW5wdXQoJ3BhZ2VMaW5rQ291bnQnKVxuICBzZXQgcGFnZUxpbmtDb3VudChwYWdlTGlua0NvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlTGlua0NvdW50ID0gY29lcmNlTnVtYmVyUHJvcGVydHkocGFnZUxpbmtDb3VudCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUGFnZUxpbmtzKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHBhZ2VMaW5rQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZUxpbmtDb3VudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYWdlU2l6ZT86IG51bWJlclxuICAgKiBTZWxlY3RlZCBwYWdlIHNpemUgZm9yIHRoZSBwYWdpbmF0aW9uLiBEZWZhdWx0cyA1MC5cbiAgICovXG4gIEBJbnB1dCgncGFnZVNpemUnKVxuICBzZXQgcGFnZVNpemUocGFnZVNpemU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VTaXplID0gY29lcmNlTnVtYmVyUHJvcGVydHkocGFnZVNpemUpO1xuICAgIHRoaXMuX3BhZ2UgPSAxO1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5faGFuZGxlT25DaGFuZ2UoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvdGFsOiBudW1iZXJcbiAgICogVG90YWwgcm93cyBmb3IgdGhlIHBhZ2luYXRpb24uXG4gICAqL1xuICBASW5wdXQoJ3RvdGFsJylcbiAgc2V0IHRvdGFsKHRvdGFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHRvdGFsKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVSb3dzKCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUGFnZUxpbmtzKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHRvdGFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhZ2VMaW5rczogbnVtYmVyW11cbiAgICogUmV0dXJucyB0aGUgcGFnZUxpbmtzIGluIGFuIGFycmF5XG4gICAqL1xuICBnZXQgcGFnZUxpbmtzKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZUxpbmtzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJhbmdlOiBzdHJpbmdcbiAgICogUmV0dXJucyB0aGUgcmFuZ2Ugb2YgdGhlIHJvd3MuXG4gICAqL1xuICBnZXQgcmFuZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7IXRoaXMuX3RvUm93ID8gMCA6IHRoaXMuX2Zyb21Sb3d9LSR7dGhpcy5fdG9Sb3d9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYWdlOiBudW1iZXJcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwYWdlLlxuICAgKi9cbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYWdlOiBudW1iZXJcbiAgICogUmV0dXJucyB0aGUgbWF4IHBhZ2UgZm9yIHRoZSBjdXJyZW50IHBhZ2VTaXplIGFuZCB0b3RhbC5cbiAgICovXG4gIGdldCBtYXhQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLl90b3RhbCAvIHRoaXMuX3BhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGFuZ2U/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBwYWdlIHNpemUgY2hhbmdlcyBvciBhbnkgYnV0dG9uIGlzIGNsaWNrZWQgaW4gdGhlIHBhZ2luZyBiYXIuXG4gICAqIEVtaXRzIGFuIFtJUGFnZUNoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdjaGFuZ2UnKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPElQYWdlQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJUGFnZUNoYW5nZUV2ZW50PigpO1xuXG4gIGdldCBpc1JUTCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZGlyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlyLmRpciA9PT0gJ3J0bCc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcGFnZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHRoaXMuaW5pdGlhbFBhZ2UpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVQYWdlTGlua3MoKTtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogbmF2aWdhdGVUb1BhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gYSBzcGVjaWZpYyB2YWxpZCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBuYXZpZ2F0ZVRvUGFnZShwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAocGFnZSA9PT0gMSB8fCAocGFnZSA+PSAxICYmIHBhZ2UgPD0gdGhpcy5tYXhQYWdlKSkge1xuICAgICAgdGhpcy5fcGFnZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KE1hdGguZmxvb3IocGFnZSkpO1xuICAgICAgdGhpcy5faGFuZGxlT25DaGFuZ2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogZmlyc3RQYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIHRoZSBmaXJzdCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBmaXJzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1BhZ2UoMSk7XG4gIH1cblxuICAvKipcbiAgICogcHJldlBhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHByZXZpb3VzIHBhZ2UuIFJldHVybnMgJ3RydWUnIGlmIHBhZ2UgaXMgdmFsaWQsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIHByZXZQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG9QYWdlKHRoaXMuX3BhZ2UgLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBuZXh0UGFnZT86IGZ1bmN0aW9uXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgbmV4dCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBuZXh0UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvUGFnZSh0aGlzLl9wYWdlICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogbGFzdFBhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIGxhc3QgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgbGFzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1BhZ2UodGhpcy5tYXhQYWdlKTtcbiAgfVxuXG4gIGlzTWluUGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZSA8PSAxO1xuICB9XG5cbiAgaXNNYXhQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9wYWdlID49IHRoaXMubWF4UGFnZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVJvd3MoKTogdm9pZCB7XG4gICAgbGV0IHRvcDogbnVtYmVyID0gdGhpcy5fcGFnZVNpemUgKiB0aGlzLl9wYWdlO1xuICAgIHRoaXMuX2Zyb21Sb3cgPSB0aGlzLl9wYWdlU2l6ZSAqICh0aGlzLl9wYWdlIC0gMSkgKyAxO1xuICAgIHRoaXMuX3RvUm93ID0gdGhpcy5fdG90YWwgPiB0b3AgPyB0b3AgOiB0aGlzLl90b3RhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBfY2FsY3VsYXRlUGFnZUxpbmtzPzogZnVuY3Rpb25cbiAgICogQ2FsY3VsYXRlcyB0aGUgcGFnZSBsaW5rcyB0aGF0IHNob3VsZCBiZSBzaG93biB0byB0aGUgdXNlciBiYXNlZCBvbiB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcGFnaW5hdG9yXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVQYWdlTGlua3MoKTogdm9pZCB7XG4gICAgLy8gc3BlY2lhbCBjYXNlIHdoZW4gMiBwYWdlTGlua3MsIGRldGVjdCB3aGVuIGhpdCBlbmQgb2YgcGFnZXMgc28gY2FuIGxlYWQgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgICBpZiAodGhpcy5pc01heFBhZ2UoKSkge1xuICAgICAgdGhpcy5faGl0RW5kID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2hpdFN0YXJ0ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHNwZWNpYWwgY2FzZSB3aGVuIDIgcGFnZUxpbmtzLCBkZXRlY3Qgd2hlbiBoaXQgc3RhcnQgb2YgcGFnZXMgc28gY2FuIGxlYWQgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgICBpZiAodGhpcy5pc01pblBhZ2UoKSkge1xuICAgICAgdGhpcy5faGl0RW5kID0gZmFsc2U7XG4gICAgICB0aGlzLl9oaXRTdGFydCA9IHRydWU7XG4gICAgfVxuICAgIC8vIElmIHRoZSBwYWdlTGlua0NvdW50IGdvZXMgYWJvdmUgbWF4IHBvc3NpYmxlIHBhZ2VzIGJhc2VkIG9uIHBlcnBhZ2Ugc2V0dGluZyB0aGVuIHJlc2V0IGl0IHRvIG1heFBhZ2VcbiAgICBsZXQgYWN0dWFsUGFnZUxpbmtDb3VudDogbnVtYmVyID0gdGhpcy5wYWdlTGlua0NvdW50O1xuICAgIGlmICh0aGlzLnBhZ2VMaW5rQ291bnQgPiB0aGlzLm1heFBhZ2UpIHtcbiAgICAgIGFjdHVhbFBhZ2VMaW5rQ291bnQgPSB0aGlzLm1heFBhZ2U7XG4gICAgfVxuICAgIC8vIHJlc2V0IHRoZSBwYWdlTGlua3MgYXJyYXlcbiAgICB0aGlzLl9wYWdlTGlua3MgPSBbXTtcbiAgICAvLyBmaWxsIGluIHRoZSBhcnJheSB3aXRoIHRoZSBwYWdlTGlua3MgYmFzZWQgb24gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgcGFnZVxuICAgIGxldCBtaWRkbGVQYWdlTGlua3M6IG51bWJlciA9IE1hdGguZmxvb3IoYWN0dWFsUGFnZUxpbmtDb3VudCAvIDIpO1xuICAgIGZvciAobGV0IHg6IG51bWJlciA9IDA7IHggPCBhY3R1YWxQYWdlTGlua0NvdW50OyB4KyspIHtcbiAgICAgIC8vIGRvbid0IGdvIHBhc3QgdGhlIG1heFBhZ2UgaW4gdGhlIHBhZ2VMaW5rc1xuICAgICAgLy8gaGF2ZSB0byBoYW5kbGUgZXZlbiBhbmQgb2RkIHBhZ2VMaW5rQ291bnRzIGRpZmZlcmVudGx5IHNvIGNhbiBzdGlsbCBsZWFkIHRvIHRoZSBuZXh0IG51bWJlcnNcbiAgICAgIGlmIChcbiAgICAgICAgKGFjdHVhbFBhZ2VMaW5rQ291bnQgJSAyID09PSAwICYmIHRoaXMucGFnZSArIG1pZGRsZVBhZ2VMaW5rcyA+IHRoaXMubWF4UGFnZSkgfHxcbiAgICAgICAgKGFjdHVhbFBhZ2VMaW5rQ291bnQgJSAyICE9PSAwICYmIHRoaXMucGFnZSArIG1pZGRsZVBhZ2VMaW5rcyA+PSB0aGlzLm1heFBhZ2UpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fcGFnZUxpbmtzW3hdID0gdGhpcy5tYXhQYWdlIC0gKGFjdHVhbFBhZ2VMaW5rQ291bnQgLSAoeCArIDEpKTtcbiAgICAgICAgLy8gaWYgdGhlIHNlbGVjdGVkIHBhZ2UgaXMgYWZ0ZXIgdGhlIG1pZGRsZSB0aGVuIHNldCB0aGF0IHBhZ2UgYXMgbWlkZGxlIGFuZCBnZXQgdGhlIGNvcnJlY3QgYmFsYW5jZSBvbiBsZWZ0IGFuZCByaWdodFxuICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIHdoZW4gdGhlcmUgYXJlIG9ubHkgMiBwYWdlTGlua3MgdG8ganVzdCBkcm9wIHRvIG5leHQgaWYgYmxvY2sgc28gY2FuIGxlYWQgdG8gbmV4dCBudW1iZXJzIHdoZW4gbW92aW5nIHRvIHJpZ2h0XG4gICAgICAgIC8vIHdoZW4gbW92aW5nIHRvIHRoZSBsZWZ0IHRoZW4gZ28gaW50byB0aGlzIGJsb2NrXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAoYWN0dWFsUGFnZUxpbmtDb3VudCA+IDIgfHwgKGFjdHVhbFBhZ2VMaW5rQ291bnQgPD0gMiAmJiB0aGlzLl9oaXRFbmQpKSAmJlxuICAgICAgICB0aGlzLnBhZ2UgLSBtaWRkbGVQYWdlTGlua3MgPiAwXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fcGFnZUxpbmtzW3hdID0gdGhpcy5wYWdlIC0gbWlkZGxlUGFnZUxpbmtzICsgeDtcbiAgICAgICAgLy8gaWYgdGhlIHNlbGVjdGVkIHBhZ2UgaXMgYmVmb3JlIHRoZSBtaWRkbGUgdGhlbiBzZXQgdGhlIHBhZ2VzIGJhc2VkIG9uIHRoZSB4IGluZGV4IGxlYWRpbmcgdXAgdG8gYW5kIGFmdGVyIHNlbGVjdGVkIHBhZ2VcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlIC0gbWlkZGxlUGFnZUxpbmtzIDw9IDApIHtcbiAgICAgICAgdGhpcy5fcGFnZUxpbmtzW3hdID0geCArIDE7XG4gICAgICAgIC8vIG90aGVyIHdpc2UganVzdCBzZXQgdGhlIGFycmF5IGluIG9yZGVyIHN0YXJ0aW5nIGZyb20gdGhlIHNlbGVjdGVkIHBhZ2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9IHRoaXMucGFnZSArIHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlT25DaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5fY2FsY3VsYXRlUm93cygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVBhZ2VMaW5rcygpO1xuICAgIGxldCBldmVudDogSVBhZ2VDaGFuZ2VFdmVudCA9IHtcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXG4gICAgICBtYXhQYWdlOiB0aGlzLm1heFBhZ2UsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5fcGFnZVNpemUsXG4gICAgICB0b3RhbDogdGhpcy5fdG90YWwsXG4gICAgICBmcm9tUm93OiB0aGlzLl9mcm9tUm93LFxuICAgICAgdG9Sb3c6IHRoaXMuX3RvUm93LFxuICAgIH07XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19