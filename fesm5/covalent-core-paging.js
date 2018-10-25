import { Component, Input, Output, EventEmitter, Optional, ChangeDetectorRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Dir } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
        var top = (this._pageSize * this._page);
        this._fromRow = (this._pageSize * (this._page - 1)) + 1;
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
            if ((actualPageLinkCount % 2 === 0 && (this.page + middlePageLinks > this.maxPage)) ||
                (actualPageLinkCount % 2 !== 0 && (this.page + middlePageLinks >= this.maxPage))) {
                this._pageLinks[x] = this.maxPage - (actualPageLinkCount - (x + 1));
                // if the selected page is after the middle then set that page as middle and get the correct balance on left and right
                // special handling when there are only 2 pageLinks to just drop to next if block so can lead to next numbers when moving to right
                // when moving to the left then go into this block
            }
            else if ((actualPageLinkCount > 2 || actualPageLinkCount <= 2 && this._hitEnd) && (this.page - middlePageLinks) > 0) {
                this._pageLinks[x] = (this.page - middlePageLinks) + x;
                // if the selected page is before the middle then set the pages based on the x index leading up to and after selected page
            }
            else if ((this.page - middlePageLinks) <= 0) {
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
                    template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\" >\n  <ng-content></ng-content>\n  <div class=\"td-paging-bar-navigation\">\n    <button mat-icon-button class=\"td-paging-bar-first-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMinPage()\" (click)=\"firstPage()\">\n      <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon>\n    </button>\n    <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\">\n      <button class=\"td-paging-bar-link-page\" mat-icon-button type=\"button\" [color]=\"page === link ? 'accent' : ''\" (click)=\"navigateToPage(link)\">{{link}}</button>\n    </ng-template>\n    <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-last-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMaxPage()\" (click)=\"lastPage()\">\n      <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon>\n    </button>\n  </div>\n</div>",
                    styles: [":host{display:block}:host .td-paging-bar{height:48px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host .td-paging-bar ::ng-deep>*{margin:0 10px}:host .td-paging-bar [mat-icon-button]{font-size:12px;font-weight:400}"]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CovalentPagingModule = /** @class */ (function () {
    function CovalentPagingModule() {
    }
    CovalentPagingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatIconModule,
                        MatButtonModule,
                    ],
                    declarations: [
                        TdPagingBarComponent,
                    ],
                    exports: [
                        TdPagingBarComponent,
                    ],
                },] }
    ];
    return CovalentPagingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentPagingModule, TdPagingBarComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1wYWdpbmcuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9jb3JlL3BhZ2luZy9wYWdpbmctYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvcGFnaW5nL3BhZ2luZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3B0aW9uYWwsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRGlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQYWdlQ2hhbmdlRXZlbnQge1xuICBwYWdlOiBudW1iZXI7XG4gIG1heFBhZ2U6IG51bWJlcjtcbiAgcGFnZVNpemU6IG51bWJlcjtcbiAgdG90YWw6IG51bWJlcjtcbiAgZnJvbVJvdzogbnVtYmVyO1xuICB0b1JvdzogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAndGQtcGFnaW5nLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmctYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5nLWJhci5jb21wb25lbnQuc2NzcycgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRQYWdpbmdCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgX3BhZ2VTaXplOiBudW1iZXIgPSA1MDtcbiAgcHJpdmF0ZSBfdG90YWw6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3BhZ2U6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgX2Zyb21Sb3c6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgX3RvUm93OiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9wYWdlTGlua3M6IG51bWJlcltdID0gW107XG4gIHByaXZhdGUgX3BhZ2VMaW5rQ291bnQ6IG51bWJlciA9IDA7XG4gIC8vIHNwZWNpYWwgY2FzZSB3aGVuIDIgcGFnZUxpbmtzLCBkZXRlY3Qgd2hlbiBoaXQgZW5kIG9mIHBhZ2VzIHNvIGNhbiBsZWFkIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gIHByaXZhdGUgX2hpdEVuZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIHNwZWNpYWwgY2FzZSB3aGVuIDIgcGFnZUxpbmtzLCBkZXRlY3Qgd2hlbiBoaXQgc3RhcnQgb2YgcGFnZXMgc28gY2FuIGxlYWQgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgcHJpdmF0ZSBfaGl0U3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogZmlyc3RMYXN0PzogYm9vbGVhblxuICAgKiBTaG93cyBvciBoaWRlcyB0aGUgZmlyc3QgYW5kIGxhc3QgcGFnZSBidXR0b25zIG9mIHRoZSBwYWdpbmcgYmFyLiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ2ZpcnN0TGFzdCcpIGZpcnN0TGFzdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIGluaXRpYWxQYWdlPzogbnVtYmVyXG4gICAqIFNldHMgc3RhcnRpbmcgcGFnZSBmb3IgdGhlIHBhZ2luZyBiYXIuIERlZmF1bHRzIHRvICcxJ1xuICAgKi9cbiAgQElucHV0KCdpbml0aWFsUGFnZScpIGluaXRpYWxQYWdlOiBudW1iZXIgPSAxO1xuXG4gIC8qKlxuICAgKiBwYWdlTGlua0NvdW50PzogbnVtYmVyXG4gICAqIEFtb3VudCBvZiBwYWdlIG5hdmlnYXRpb24gbGlua3MgZm9yIHRoZSBwYWdpbmcgYmFyLiBEZWZhdWx0cyB0byAnMCdcbiAgICovXG4gIEBJbnB1dCgncGFnZUxpbmtDb3VudCcpXG4gIHNldCBwYWdlTGlua0NvdW50KHBhZ2VMaW5rQ291bnQ6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VMaW5rQ291bnQgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eShwYWdlTGlua0NvdW50KTtcbiAgICB0aGlzLl9jYWxjdWxhdGVQYWdlTGlua3MoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgcGFnZUxpbmtDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlTGlua0NvdW50O1xuICB9XG5cbiAgLyoqXG4gICAqIHBhZ2VTaXplPzogbnVtYmVyXG4gICAqIFNlbGVjdGVkIHBhZ2Ugc2l6ZSBmb3IgdGhlIHBhZ2luYXRpb24uIERlZmF1bHRzIDUwLlxuICAgKi9cbiAgQElucHV0KCdwYWdlU2l6ZScpXG4gIHNldCBwYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZVNpemUgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eShwYWdlU2l6ZSk7XG4gICAgdGhpcy5fcGFnZSA9IDE7XG4gICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLl9oYW5kbGVPbkNoYW5nZSgpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgcGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cblxuICAvKipcbiAgICogdG90YWw6IG51bWJlclxuICAgKiBUb3RhbCByb3dzIGZvciB0aGUgcGFnaW5hdGlvbi5cbiAgICovXG4gIEBJbnB1dCgndG90YWwnKVxuICBzZXQgdG90YWwodG90YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsID0gY29lcmNlTnVtYmVyUHJvcGVydHkodG90YWwpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVQYWdlTGlua3MoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgdG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWw7XG4gIH1cblxuICAvKipcbiAgICogcGFnZUxpbmtzOiBudW1iZXJbXVxuICAgKiBSZXR1cm5zIHRoZSBwYWdlTGlua3MgaW4gYW4gYXJyYXlcbiAgICovXG4gIGdldCBwYWdlTGlua3MoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiB0aGlzLl9wYWdlTGlua3M7XG4gIH1cblxuICAvKipcbiAgICogcmFuZ2U6IHN0cmluZ1xuICAgKiBSZXR1cm5zIHRoZSByYW5nZSBvZiB0aGUgcm93cy5cbiAgICovXG4gIGdldCByYW5nZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHshdGhpcy5fdG9Sb3cgPyAwIDogdGhpcy5fZnJvbVJvd30tJHt0aGlzLl90b1Jvd31gO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhZ2U6IG51bWJlclxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBhZ2UuXG4gICAqL1xuICBnZXQgcGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhZ2U6IG51bWJlclxuICAgKiBSZXR1cm5zIHRoZSBtYXggcGFnZSBmb3IgdGhlIGN1cnJlbnQgcGFnZVNpemUgYW5kIHRvdGFsLlxuICAgKi9cbiAgZ2V0IG1heFBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3RvdGFsIC8gdGhpcy5fcGFnZVNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoYW5nZT86IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIHBhZ2Ugc2l6ZSBjaGFuZ2VzIG9yIGFueSBidXR0b24gaXMgY2xpY2tlZCBpbiB0aGUgcGFnaW5nIGJhci5cbiAgICogRW1pdHMgYW4gW0lQYWdlQ2hhbmdlRXZlbnRdIGltcGxlbWVudGVkIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ2NoYW5nZScpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SVBhZ2VDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElQYWdlQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgZ2V0IGlzUlRMKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9kaXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXIuZGlyID09PSAncnRsJztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9wYWdlID0gY29lcmNlTnVtYmVyUHJvcGVydHkodGhpcy5pbml0aWFsUGFnZSk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUm93cygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVBhZ2VMaW5rcygpO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBuYXZpZ2F0ZVRvUGFnZT86IGZ1bmN0aW9uXG4gICAqIE5hdmlnYXRlcyB0byBhIHNwZWNpZmljIHZhbGlkIHBhZ2UuIFJldHVybnMgJ3RydWUnIGlmIHBhZ2UgaXMgdmFsaWQsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIG5hdmlnYXRlVG9QYWdlKHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmIChwYWdlID09PSAxIHx8IChwYWdlID49IDEgJiYgcGFnZSA8PSB0aGlzLm1heFBhZ2UpKSB7XG4gICAgICB0aGlzLl9wYWdlID0gY29lcmNlTnVtYmVyUHJvcGVydHkoTWF0aC5mbG9vcihwYWdlKSk7XG4gICAgICB0aGlzLl9oYW5kbGVPbkNoYW5nZSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmaXJzdFBhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIGZpcnN0IHBhZ2UuIFJldHVybnMgJ3RydWUnIGlmIHBhZ2UgaXMgdmFsaWQsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGZpcnN0UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvUGFnZSgxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwcmV2UGFnZT86IGZ1bmN0aW9uXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgcHJldmlvdXMgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgcHJldlBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1BhZ2UodGhpcy5fcGFnZSAtIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIG5leHRQYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIHRoZSBuZXh0IHBhZ2UuIFJldHVybnMgJ3RydWUnIGlmIHBhZ2UgaXMgdmFsaWQsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIG5leHRQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG9QYWdlKHRoaXMuX3BhZ2UgKyAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBsYXN0UGFnZT86IGZ1bmN0aW9uXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgbGFzdCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBsYXN0UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvUGFnZSh0aGlzLm1heFBhZ2UpO1xuICB9XG5cbiAgaXNNaW5QYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9wYWdlIDw9IDE7XG4gIH1cblxuICBpc01heFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2UgPj0gdGhpcy5tYXhQYWdlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlUm93cygpOiB2b2lkIHtcbiAgICBsZXQgdG9wOiBudW1iZXIgPSAodGhpcy5fcGFnZVNpemUgKiB0aGlzLl9wYWdlKTtcbiAgICB0aGlzLl9mcm9tUm93ID0gKHRoaXMuX3BhZ2VTaXplICogKHRoaXMuX3BhZ2UgLSAxKSkgKyAxO1xuICAgIHRoaXMuX3RvUm93ID0gdGhpcy5fdG90YWwgPiB0b3AgPyB0b3AgOiB0aGlzLl90b3RhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBfY2FsY3VsYXRlUGFnZUxpbmtzPzogZnVuY3Rpb25cbiAgICogQ2FsY3VsYXRlcyB0aGUgcGFnZSBsaW5rcyB0aGF0IHNob3VsZCBiZSBzaG93biB0byB0aGUgdXNlciBiYXNlZCBvbiB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcGFnaW5hdG9yXG4gICAqL1xuICBwcml2YXRlIF9jYWxjdWxhdGVQYWdlTGlua3MoKTogdm9pZCB7XG4gICAgLy8gc3BlY2lhbCBjYXNlIHdoZW4gMiBwYWdlTGlua3MsIGRldGVjdCB3aGVuIGhpdCBlbmQgb2YgcGFnZXMgc28gY2FuIGxlYWQgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgICBpZiAodGhpcy5pc01heFBhZ2UoKSkge1xuICAgICAgdGhpcy5faGl0RW5kID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2hpdFN0YXJ0ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHNwZWNpYWwgY2FzZSB3aGVuIDIgcGFnZUxpbmtzLCBkZXRlY3Qgd2hlbiBoaXQgc3RhcnQgb2YgcGFnZXMgc28gY2FuIGxlYWQgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgICBpZiAodGhpcy5pc01pblBhZ2UoKSkge1xuICAgICAgdGhpcy5faGl0RW5kID0gZmFsc2U7XG4gICAgICB0aGlzLl9oaXRTdGFydCA9IHRydWU7XG4gICAgfVxuICAgIC8vIElmIHRoZSBwYWdlTGlua0NvdW50IGdvZXMgYWJvdmUgbWF4IHBvc3NpYmxlIHBhZ2VzIGJhc2VkIG9uIHBlcnBhZ2Ugc2V0dGluZyB0aGVuIHJlc2V0IGl0IHRvIG1heFBhZ2VcbiAgICBsZXQgYWN0dWFsUGFnZUxpbmtDb3VudDogbnVtYmVyID0gdGhpcy5wYWdlTGlua0NvdW50O1xuICAgIGlmICh0aGlzLnBhZ2VMaW5rQ291bnQgPiB0aGlzLm1heFBhZ2UpIHtcbiAgICAgIGFjdHVhbFBhZ2VMaW5rQ291bnQgPSB0aGlzLm1heFBhZ2U7XG4gICAgfVxuICAgIC8vIHJlc2V0IHRoZSBwYWdlTGlua3MgYXJyYXlcbiAgICB0aGlzLl9wYWdlTGlua3MgPSBbXTtcbiAgICAvLyBmaWxsIGluIHRoZSBhcnJheSB3aXRoIHRoZSBwYWdlTGlua3MgYmFzZWQgb24gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgcGFnZVxuICAgIGxldCBtaWRkbGVQYWdlTGlua3M6IG51bWJlciA9IE1hdGguZmxvb3IoYWN0dWFsUGFnZUxpbmtDb3VudCAvIDIpO1xuICAgIGZvciAobGV0IHg6IG51bWJlciA9IDA7IHggPCBhY3R1YWxQYWdlTGlua0NvdW50OyB4KyspIHtcbiAgICAgIC8vIGRvbid0IGdvIHBhc3QgdGhlIG1heFBhZ2UgaW4gdGhlIHBhZ2VMaW5rc1xuICAgICAgLy8gaGF2ZSB0byBoYW5kbGUgZXZlbiBhbmQgb2RkIHBhZ2VMaW5rQ291bnRzIGRpZmZlcmVudGx5IHNvIGNhbiBzdGlsbCBsZWFkIHRvIHRoZSBuZXh0IG51bWJlcnNcbiAgICAgIGlmICgoYWN0dWFsUGFnZUxpbmtDb3VudCAlIDIgPT09IDAgJiYgKHRoaXMucGFnZSArIG1pZGRsZVBhZ2VMaW5rcyA+IHRoaXMubWF4UGFnZSkpIHx8XG4gICAgICAgICAgKGFjdHVhbFBhZ2VMaW5rQ291bnQgJSAyICE9PSAwICYmICh0aGlzLnBhZ2UgKyBtaWRkbGVQYWdlTGlua3MgPj0gdGhpcy5tYXhQYWdlKSkpIHtcbiAgICAgICAgdGhpcy5fcGFnZUxpbmtzW3hdID0gdGhpcy5tYXhQYWdlIC0gKGFjdHVhbFBhZ2VMaW5rQ291bnQgLSAoeCArIDEpKTtcbiAgICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBwYWdlIGlzIGFmdGVyIHRoZSBtaWRkbGUgdGhlbiBzZXQgdGhhdCBwYWdlIGFzIG1pZGRsZSBhbmQgZ2V0IHRoZSBjb3JyZWN0IGJhbGFuY2Ugb24gbGVmdCBhbmQgcmlnaHRcbiAgICAgIC8vIHNwZWNpYWwgaGFuZGxpbmcgd2hlbiB0aGVyZSBhcmUgb25seSAyIHBhZ2VMaW5rcyB0byBqdXN0IGRyb3AgdG8gbmV4dCBpZiBibG9jayBzbyBjYW4gbGVhZCB0byBuZXh0IG51bWJlcnMgd2hlbiBtb3ZpbmcgdG8gcmlnaHRcbiAgICAgIC8vIHdoZW4gbW92aW5nIHRvIHRoZSBsZWZ0IHRoZW4gZ28gaW50byB0aGlzIGJsb2NrXG4gICAgICB9IGVsc2UgaWYgKChhY3R1YWxQYWdlTGlua0NvdW50ID4gMiB8fCBhY3R1YWxQYWdlTGlua0NvdW50IDw9IDIgJiYgdGhpcy5faGl0RW5kKSAmJiAodGhpcy5wYWdlIC0gbWlkZGxlUGFnZUxpbmtzKSA+IDApIHtcbiAgICAgICAgdGhpcy5fcGFnZUxpbmtzW3hdID0gKHRoaXMucGFnZSAtIG1pZGRsZVBhZ2VMaW5rcykgKyB4O1xuICAgICAgLy8gaWYgdGhlIHNlbGVjdGVkIHBhZ2UgaXMgYmVmb3JlIHRoZSBtaWRkbGUgdGhlbiBzZXQgdGhlIHBhZ2VzIGJhc2VkIG9uIHRoZSB4IGluZGV4IGxlYWRpbmcgdXAgdG8gYW5kIGFmdGVyIHNlbGVjdGVkIHBhZ2VcbiAgICAgIH0gZWxzZSBpZiAoKHRoaXMucGFnZSAtIG1pZGRsZVBhZ2VMaW5rcykgPD0gMCkge1xuICAgICAgICB0aGlzLl9wYWdlTGlua3NbeF0gPSB4ICsgMTtcbiAgICAgIC8vIG90aGVyIHdpc2UganVzdCBzZXQgdGhlIGFycmF5IGluIG9yZGVyIHN0YXJ0aW5nIGZyb20gdGhlIHNlbGVjdGVkIHBhZ2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9IHRoaXMucGFnZSArIHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlT25DaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5fY2FsY3VsYXRlUm93cygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVBhZ2VMaW5rcygpO1xuICAgIGxldCBldmVudDogSVBhZ2VDaGFuZ2VFdmVudCA9IHtcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXG4gICAgICBtYXhQYWdlOiB0aGlzLm1heFBhZ2UsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5fcGFnZVNpemUsXG4gICAgICB0b3RhbDogdGhpcy5fdG90YWwsXG4gICAgICBmcm9tUm93OiB0aGlzLl9mcm9tUm93LFxuICAgICAgdG9Sb3c6IHRoaXMuX3RvUm93LFxuICAgIH07XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5pbXBvcnQgeyBUZFBhZ2luZ0JhckNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5nLWJhci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZFBhZ2luZ0JhckNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRkUGFnaW5nQmFyQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFBhZ2luZ01vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0lBMElFLDhCQUFnQyxJQUFTLEVBQ3JCLGtCQUFxQztRQUR6QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ3JCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUF0SGpELGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDOztRQUUzQixZQUFPLEdBQVksS0FBSyxDQUFDOztRQUV6QixjQUFTLEdBQVksS0FBSyxDQUFDOzs7OztRQU1mLGNBQVMsR0FBWSxJQUFJLENBQUM7Ozs7O1FBTXhCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDOzs7Ozs7UUFxRjVCLGFBQVEsR0FBbUMsSUFBSSxZQUFZLEVBQW9CLENBQUM7S0FVckM7SUF6RjdELHNCQUNJLCtDQUFhOzs7O1FBS2pCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQzVCOzs7Ozs7Ozs7OztRQVJELFVBQ2tCLGFBQXFCO1lBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1NB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