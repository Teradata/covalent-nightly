import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, Optional, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Dir } from '@angular/cdk/bidi';
var TdPagingBarComponent = (function () {
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
        get: function () {
            return this._pageLinkCount;
        },
        /**
         * pageLinkCount?: number
         * Amount of page navigation links for the paging bar. Defaults to '0'
         */
        set: function (pageLinkCount) {
            this._pageLinkCount = coerceNumberProperty(pageLinkCount);
            this._calculatePageLinks();
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        /**
         * pageSize?: number
         * Selected page size for the pagination. Defaults 50.
         */
        set: function (pageSize) {
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
        get: function () {
            return this._total;
        },
        /**
         * total: number
         * Total rows for the pagination.
         */
        set: function (total) {
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
        get: function () {
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
        get: function () {
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
        get: function () {
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
        get: function () {
            return Math.ceil(this._total / this._pageSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "isRTL", {
        get: function () {
            if (this._dir) {
                return this._dir.dir === 'rtl';
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    TdPagingBarComponent.prototype.ngOnInit = function () {
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
    TdPagingBarComponent.prototype.navigateToPage = function (page) {
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
    TdPagingBarComponent.prototype.firstPage = function () {
        return this.navigateToPage(1);
    };
    /**
     * prevPage?: function
     * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
     */
    TdPagingBarComponent.prototype.prevPage = function () {
        return this.navigateToPage(this._page - 1);
    };
    /**
     * nextPage?: function
     * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
     */
    TdPagingBarComponent.prototype.nextPage = function () {
        return this.navigateToPage(this._page + 1);
    };
    /**
     * lastPage?: function
     * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
     */
    TdPagingBarComponent.prototype.lastPage = function () {
        return this.navigateToPage(this.maxPage);
    };
    TdPagingBarComponent.prototype.isMinPage = function () {
        return this._page <= 1;
    };
    TdPagingBarComponent.prototype.isMaxPage = function () {
        return this._page >= this.maxPage;
    };
    TdPagingBarComponent.prototype._calculateRows = function () {
        var top = (this._pageSize * this._page);
        this._fromRow = (this._pageSize * (this._page - 1)) + 1;
        this._toRow = this._total > top ? top : this._total;
    };
    /**
     * _calculatePageLinks?: function
     * Calculates the page links that should be shown to the user based on the current state of the paginator
     */
    TdPagingBarComponent.prototype._calculatePageLinks = function () {
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
        var actualPageLinkCount = this.pageLinkCount;
        if (this.pageLinkCount > this.maxPage) {
            actualPageLinkCount = this.maxPage;
        }
        // reset the pageLinks array
        this._pageLinks = [];
        // fill in the array with the pageLinks based on the current selected page
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
    TdPagingBarComponent.prototype._handleOnChange = function () {
        this._calculateRows();
        this._calculatePageLinks();
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
    tslib_1.__decorate([
        Input('firstLast'),
        tslib_1.__metadata("design:type", Boolean)
    ], TdPagingBarComponent.prototype, "firstLast", void 0);
    tslib_1.__decorate([
        Input('initialPage'),
        tslib_1.__metadata("design:type", Number)
    ], TdPagingBarComponent.prototype, "initialPage", void 0);
    tslib_1.__decorate([
        Input('pageLinkCount'),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], TdPagingBarComponent.prototype, "pageLinkCount", null);
    tslib_1.__decorate([
        Input('pageSize'),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], TdPagingBarComponent.prototype, "pageSize", null);
    tslib_1.__decorate([
        Input('total'),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], TdPagingBarComponent.prototype, "total", null);
    tslib_1.__decorate([
        Output('change'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], TdPagingBarComponent.prototype, "onChange", void 0);
    TdPagingBarComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'td-paging-bar',
            template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\" > <ng-content></ng-content> <div class=\"td-paging-bar-navigation\"> <button mat-icon-button class=\"td-paging-bar-first-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMinPage()\" (click)=\"firstPage()\"> <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon> </button> <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\"> <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon> </button> <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\"> <button class=\"td-paging-bar-link-page\" mat-icon-button type=\"button\" [color]=\"page === link ? 'accent' : ''\" (click)=\"navigateToPage(link)\">{{link}}</button> </ng-template> <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\"> <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon> </button> <button mat-icon-button class=\"td-paging-bar-last-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMaxPage()\" (click)=\"lastPage()\"> <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon> </button> </div> </div>",
            styles: [":host { display: block; } :host .td-paging-bar { height: 48px; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } :host .td-paging-bar ::ng-deep > * { margin: 0 10px; } :host .td-paging-bar [mat-icon-button] { font-size: 12px; font-weight: normal; } /*# sourceMappingURL=paging-bar.component.css.map */ "],
        }),
        tslib_1.__param(0, Optional()),
        tslib_1.__metadata("design:paramtypes", [Dir,
            ChangeDetectorRef])
    ], TdPagingBarComponent);
    return TdPagingBarComponent;
}());
export { TdPagingBarComponent };
//# sourceMappingURL=paging-bar.component.js.map