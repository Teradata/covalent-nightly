var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Output, EventEmitter, Optional } from '@angular/core';
import { Dir, coerceNumberProperty } from '@angular/cdk';
var TdPagingBarComponent = (function () {
    function TdPagingBarComponent(_dir) {
        this._dir = _dir;
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
        this.onChange.emit(event);
    };
    return TdPagingBarComponent;
}());
__decorate([
    Input('firstLast'),
    __metadata("design:type", Boolean)
], TdPagingBarComponent.prototype, "firstLast", void 0);
__decorate([
    Input('initialPage'),
    __metadata("design:type", Number)
], TdPagingBarComponent.prototype, "initialPage", void 0);
__decorate([
    Input('pageLinkCount'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TdPagingBarComponent.prototype, "pageLinkCount", null);
__decorate([
    Input('pageSize'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TdPagingBarComponent.prototype, "pageSize", null);
__decorate([
    Input('total'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TdPagingBarComponent.prototype, "total", null);
__decorate([
    Output('change'),
    __metadata("design:type", EventEmitter)
], TdPagingBarComponent.prototype, "onChange", void 0);
TdPagingBarComponent = __decorate([
    Component({
        selector: 'td-paging-bar',
        template: "<div layout=\"row\" layout-align=\"end center\" class=\"md-caption td-paging-bar\" (change)=\"$event.stopPropagation()\" > <ng-content></ng-content> <div class=\"td-paging-bar-navigation\"> <button md-icon-button class=\"td-paging-bar-first-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMinPage()\" (click)=\"firstPage()\"> <md-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</md-icon> </button> <button md-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\"> <md-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</md-icon> </button> <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\"> <button class=\"td-paging-bar-link-page\" md-icon-button type=\"button\" [color]=\"page === link ? 'accent' : ''\" (click)=\"navigateToPage(link)\">{{link}}</button> </ng-template> <button md-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\"> <md-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</md-icon> </button> <button md-icon-button class=\"td-paging-bar-last-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMaxPage()\" (click)=\"lastPage()\"> <md-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</md-icon> </button> </div> </div>",
        styles: [":host { display: block; } .td-paging-bar { height: 48px; } .td-paging-bar /deep/ > * { margin: 0 10px; } [md-icon-button] { font-size: 12px; font-weight: normal; } /deep/ md-select .mat-select-trigger { min-width: 44px; font-size: 12px; } /deep/ md-select .mat-select-value { top: auto; position: static; } /deep/ md-select .mat-select-underline { display: none; } "],
    }),
    __param(0, Optional()),
    __metadata("design:paramtypes", [Dir])
], TdPagingBarComponent);
export { TdPagingBarComponent };
//# sourceMappingURL=paging-bar.component.js.map