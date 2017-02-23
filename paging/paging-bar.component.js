var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var TdPagingBarComponent = (function () {
    function TdPagingBarComponent() {
        this._pageSizes = [50, 100, 200, 500, 1000];
        this._pageSize = 50;
        this._total = 0;
        this._page = 1;
        this._fromRow = 1;
        this._toRow = 1;
        this._initialized = false;
        /**
         * pageSizeAll?: boolean
         * Shows or hides the 'all' menu item in the page size menu. Defaults to 'false'
         */
        this.pageSizeAll = false;
        /**
         * pageSizeAllText?: string
         * Text for the 'all' menu item in the page size menu. Defaults to 'All'
         */
        this.pageSizeAllText = 'All';
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
    Object.defineProperty(TdPagingBarComponent.prototype, "pageSizes", {
        get: function () {
            return this._pageSizes;
        },
        /**
         * pageSizes?: number[]
         * Array that populates page size menu. Defaults to [50, 100, 200, 500, 1000]
         */
        set: function (pageSizes) {
            if (!(pageSizes instanceof Array)) {
                throw new Error('[pageSizes] needs to be an number array.');
            }
            this._pageSizes = pageSizes;
            this._pageSize = this._pageSizes[0];
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
         * Selected page size for the pagination. Defaults to first element of the [pageSizes] array.
         */
        set: function (pageSize) {
            if ((this._pageSizes.indexOf(pageSize) > -1 || this.total === pageSize) && this._pageSize !== pageSize) {
                this._pageSize = pageSize;
                this._page = 1;
                if (this._initialized) {
                    this._handleOnChange();
                }
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
            this._total = total;
            this._calculateRows();
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
    TdPagingBarComponent.prototype.ngOnInit = function () {
        this._page = this.initialPage;
        this._calculateRows();
        this._initialized = true;
    };
    /**
     * navigateToPage?: function
     * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
     */
    TdPagingBarComponent.prototype.navigateToPage = function (page) {
        if (page === 1 || (page >= 1 && page <= this.maxPage)) {
            this._page = page;
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
    TdPagingBarComponent.prototype._handleOnChange = function () {
        this._calculateRows();
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
    Input('pageSizeAll'),
    __metadata("design:type", Boolean)
], TdPagingBarComponent.prototype, "pageSizeAll", void 0);
__decorate([
    Input('pageSizeAllText'),
    __metadata("design:type", String)
], TdPagingBarComponent.prototype, "pageSizeAllText", void 0);
__decorate([
    Input('firstLast'),
    __metadata("design:type", Boolean)
], TdPagingBarComponent.prototype, "firstLast", void 0);
__decorate([
    Input('initialPage'),
    __metadata("design:type", Number)
], TdPagingBarComponent.prototype, "initialPage", void 0);
__decorate([
    Input('pageSizes'),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TdPagingBarComponent.prototype, "pageSizes", null);
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
        template: "<div layout=\"row\" layout-align=\"end center\" class=\"md-caption td-paging-bar\"> <ng-content select=\"[td-paging-bar-label]\"></ng-content> <md-select [(ngModel)]=\"pageSize\"> <template let-size ngFor [ngForOf]=\"pageSizes\"> <md-option [value]=\"size\"> {{size}} </md-option> </template> <md-option *ngIf=\"pageSizeAll\" [value]=\"total\">{{pageSizeAllText}}</md-option> </md-select> <div> <ng-content></ng-content> </div> <div class=\"td-paging-bar-navigation\"> <button md-icon-button type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMinPage()\" (click)=\"firstPage()\"> <md-icon>skip_previous</md-icon> </button> <button md-icon-button type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\"> <md-icon>navigate_before</md-icon> </button> <button md-icon-button type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\"> <md-icon>navigate_next</md-icon> </button> <button md-icon-button type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMaxPage()\" (click)=\"lastPage()\"> <md-icon>skip_next</md-icon> </button> </div> </div>",
        styles: [":host { display: block; } .td-paging-bar { height: 48px; } .td-paging-bar > * { margin: 0 10px; } [md-icon-button] { font-size: 12px; font-weight: normal; } md-select /deep/ .mat-select-trigger { min-width: 44px; font-size: 12px; } md-select /deep/ .mat-select-value { top: auto; position: static; } md-select /deep/ .mat-select-underline { display: none; } .td-paging-size { margin-right: -5px; } "],
    })
], TdPagingBarComponent);
export { TdPagingBarComponent };
//# sourceMappingURL=paging-bar.component.js.map