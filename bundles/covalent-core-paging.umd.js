(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/coercion'), require('@angular/cdk/bidi'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/button')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/paging', ['exports', '@angular/core', '@angular/cdk/coercion', '@angular/cdk/bidi', '@angular/common', '@angular/material/icon', '@angular/material/button'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.paging = {}),global.ng.core,global.ng.cdk.coercion,global.ng.cdk.bidi,global.ng.common,global.ng.material.icon,global.ng.material.button));
}(this, (function (exports,core,coercion,bidi,common,icon,button) { 'use strict';

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
            this.onChange = new core.EventEmitter();
        }
        Object.defineProperty(TdPagingBarComponent.prototype, "pageLinkCount", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (pageLinkCount) {
                this._pageLinkCount = coercion.coerceNumberProperty(pageLinkCount);
                this._calculatePageLinks();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "pageSize", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (pageSize) {
                this._pageSize = coercion.coerceNumberProperty(pageSize);
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
             */ function () {
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
             */ function (total) {
                this._total = coercion.coerceNumberProperty(total);
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
                return Math.ceil(this._total / this._pageSize);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "isRTL", {
            get: /**
             * @return {?}
             */ function () {
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
                this._page = coercion.coerceNumberProperty(this.initialPage);
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
                    this._page = coercion.coerceNumberProperty(Math.floor(page));
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
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'td-paging-bar',
                        template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\" >\n  <ng-content></ng-content>\n  <div class=\"td-paging-bar-navigation\">\n    <button mat-icon-button class=\"td-paging-bar-first-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMinPage()\" (click)=\"firstPage()\">\n      <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon>\n    </button>\n    <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\">\n      <button class=\"td-paging-bar-link-page\" mat-icon-button type=\"button\" [color]=\"page === link ? 'accent' : ''\" (click)=\"navigateToPage(link)\">{{link}}</button>\n    </ng-template>\n    <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-last-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMaxPage()\" (click)=\"lastPage()\">\n      <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon>\n    </button>\n  </div>\n</div>",
                        styles: [":host{display:block}:host .td-paging-bar{height:48px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host .td-paging-bar ::ng-deep>*{margin:0 10px}:host .td-paging-bar [mat-icon-button]{font-size:12px;font-weight:400}"]
                    }] }
        ];
        /** @nocollapse */
        TdPagingBarComponent.ctorParameters = function () {
            return [
                { type: bidi.Dir, decorators: [{ type: core.Optional }] },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdPagingBarComponent.propDecorators = {
            firstLast: [{ type: core.Input, args: ['firstLast',] }],
            initialPage: [{ type: core.Input, args: ['initialPage',] }],
            pageLinkCount: [{ type: core.Input, args: ['pageLinkCount',] }],
            pageSize: [{ type: core.Input, args: ['pageSize',] }],
            total: [{ type: core.Input, args: ['total',] }],
            onChange: [{ type: core.Output, args: ['change',] }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            icon.MatIconModule,
                            button.MatButtonModule,
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

    exports.CovalentPagingModule = CovalentPagingModule;
    exports.TdPagingBarComponent = TdPagingBarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1wYWdpbmcudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvY29yZS9wYWdpbmcvcGFnaW5nLWJhci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL3BhZ2luZy9wYWdpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9wdGlvbmFsLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcblxuZXhwb3J0IGludGVyZmFjZSBJUGFnZUNoYW5nZUV2ZW50IHtcbiAgcGFnZTogbnVtYmVyO1xuICBtYXhQYWdlOiBudW1iZXI7XG4gIHBhZ2VTaXplOiBudW1iZXI7XG4gIHRvdGFsOiBudW1iZXI7XG4gIGZyb21Sb3c6IG51bWJlcjtcbiAgdG9Sb3c6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ3RkLXBhZ2luZy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luZy1iYXIuY29tcG9uZW50LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkUGFnaW5nQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIF9wYWdlU2l6ZTogbnVtYmVyID0gNTA7XG4gIHByaXZhdGUgX3RvdGFsOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9wYWdlOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF9mcm9tUm93OiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF90b1JvdzogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcGFnZUxpbmtzOiBudW1iZXJbXSA9IFtdO1xuICBwcml2YXRlIF9wYWdlTGlua0NvdW50OiBudW1iZXIgPSAwO1xuICAvLyBzcGVjaWFsIGNhc2Ugd2hlbiAyIHBhZ2VMaW5rcywgZGV0ZWN0IHdoZW4gaGl0IGVuZCBvZiBwYWdlcyBzbyBjYW4gbGVhZCBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICBwcml2YXRlIF9oaXRFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBzcGVjaWFsIGNhc2Ugd2hlbiAyIHBhZ2VMaW5rcywgZGV0ZWN0IHdoZW4gaGl0IHN0YXJ0IG9mIHBhZ2VzIHNvIGNhbiBsZWFkIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gIHByaXZhdGUgX2hpdFN0YXJ0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGZpcnN0TGFzdD86IGJvb2xlYW5cbiAgICogU2hvd3Mgb3IgaGlkZXMgdGhlIGZpcnN0IGFuZCBsYXN0IHBhZ2UgYnV0dG9ucyBvZiB0aGUgcGFnaW5nIGJhci4gRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdmaXJzdExhc3QnKSBmaXJzdExhc3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBpbml0aWFsUGFnZT86IG51bWJlclxuICAgKiBTZXRzIHN0YXJ0aW5nIHBhZ2UgZm9yIHRoZSBwYWdpbmcgYmFyLiBEZWZhdWx0cyB0byAnMSdcbiAgICovXG4gIEBJbnB1dCgnaW5pdGlhbFBhZ2UnKSBpbml0aWFsUGFnZTogbnVtYmVyID0gMTtcblxuICAvKipcbiAgICogcGFnZUxpbmtDb3VudD86IG51bWJlclxuICAgKiBBbW91bnQgb2YgcGFnZSBuYXZpZ2F0aW9uIGxpbmtzIGZvciB0aGUgcGFnaW5nIGJhci4gRGVmYXVsdHMgdG8gJzAnXG4gICAqL1xuICBASW5wdXQoJ3BhZ2VMaW5rQ291bnQnKVxuICBzZXQgcGFnZUxpbmtDb3VudChwYWdlTGlua0NvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlTGlua0NvdW50ID0gY29lcmNlTnVtYmVyUHJvcGVydHkocGFnZUxpbmtDb3VudCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUGFnZUxpbmtzKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHBhZ2VMaW5rQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZUxpbmtDb3VudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYWdlU2l6ZT86IG51bWJlclxuICAgKiBTZWxlY3RlZCBwYWdlIHNpemUgZm9yIHRoZSBwYWdpbmF0aW9uLiBEZWZhdWx0cyA1MC5cbiAgICovXG4gIEBJbnB1dCgncGFnZVNpemUnKVxuICBzZXQgcGFnZVNpemUocGFnZVNpemU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VTaXplID0gY29lcmNlTnVtYmVyUHJvcGVydHkocGFnZVNpemUpO1xuICAgIHRoaXMuX3BhZ2UgPSAxO1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5faGFuZGxlT25DaGFuZ2UoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvdGFsOiBudW1iZXJcbiAgICogVG90YWwgcm93cyBmb3IgdGhlIHBhZ2luYXRpb24uXG4gICAqL1xuICBASW5wdXQoJ3RvdGFsJylcbiAgc2V0IHRvdGFsKHRvdGFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHRvdGFsKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVSb3dzKCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUGFnZUxpbmtzKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHRvdGFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhZ2VMaW5rczogbnVtYmVyW11cbiAgICogUmV0dXJucyB0aGUgcGFnZUxpbmtzIGluIGFuIGFycmF5XG4gICAqL1xuICBnZXQgcGFnZUxpbmtzKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZUxpbmtzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJhbmdlOiBzdHJpbmdcbiAgICogUmV0dXJucyB0aGUgcmFuZ2Ugb2YgdGhlIHJvd3MuXG4gICAqL1xuICBnZXQgcmFuZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7IXRoaXMuX3RvUm93ID8gMCA6IHRoaXMuX2Zyb21Sb3d9LSR7dGhpcy5fdG9Sb3d9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYWdlOiBudW1iZXJcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwYWdlLlxuICAgKi9cbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYWdlOiBudW1iZXJcbiAgICogUmV0dXJucyB0aGUgbWF4IHBhZ2UgZm9yIHRoZSBjdXJyZW50IHBhZ2VTaXplIGFuZCB0b3RhbC5cbiAgICovXG4gIGdldCBtYXhQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLl90b3RhbCAvIHRoaXMuX3BhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGFuZ2U/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBwYWdlIHNpemUgY2hhbmdlcyBvciBhbnkgYnV0dG9uIGlzIGNsaWNrZWQgaW4gdGhlIHBhZ2luZyBiYXIuXG4gICAqIEVtaXRzIGFuIFtJUGFnZUNoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdjaGFuZ2UnKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPElQYWdlQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJUGFnZUNoYW5nZUV2ZW50PigpO1xuXG4gIGdldCBpc1JUTCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZGlyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlyLmRpciA9PT0gJ3J0bCc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcGFnZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHRoaXMuaW5pdGlhbFBhZ2UpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVQYWdlTGlua3MoKTtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogbmF2aWdhdGVUb1BhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gYSBzcGVjaWZpYyB2YWxpZCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBuYXZpZ2F0ZVRvUGFnZShwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAocGFnZSA9PT0gMSB8fCAocGFnZSA+PSAxICYmIHBhZ2UgPD0gdGhpcy5tYXhQYWdlKSkge1xuICAgICAgdGhpcy5fcGFnZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KE1hdGguZmxvb3IocGFnZSkpO1xuICAgICAgdGhpcy5faGFuZGxlT25DaGFuZ2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogZmlyc3RQYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIHRoZSBmaXJzdCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBmaXJzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1BhZ2UoMSk7XG4gIH1cblxuICAvKipcbiAgICogcHJldlBhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHByZXZpb3VzIHBhZ2UuIFJldHVybnMgJ3RydWUnIGlmIHBhZ2UgaXMgdmFsaWQsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIHByZXZQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG9QYWdlKHRoaXMuX3BhZ2UgLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBuZXh0UGFnZT86IGZ1bmN0aW9uXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgbmV4dCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBuZXh0UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvUGFnZSh0aGlzLl9wYWdlICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogbGFzdFBhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIGxhc3QgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgbGFzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1BhZ2UodGhpcy5tYXhQYWdlKTtcbiAgfVxuXG4gIGlzTWluUGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZSA8PSAxO1xuICB9XG5cbiAgaXNNYXhQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9wYWdlID49IHRoaXMubWF4UGFnZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVJvd3MoKTogdm9pZCB7XG4gICAgbGV0IHRvcDogbnVtYmVyID0gKHRoaXMuX3BhZ2VTaXplICogdGhpcy5fcGFnZSk7XG4gICAgdGhpcy5fZnJvbVJvdyA9ICh0aGlzLl9wYWdlU2l6ZSAqICh0aGlzLl9wYWdlIC0gMSkpICsgMTtcbiAgICB0aGlzLl90b1JvdyA9IHRoaXMuX3RvdGFsID4gdG9wID8gdG9wIDogdGhpcy5fdG90YWw7XG4gIH1cblxuICAvKipcbiAgICogX2NhbGN1bGF0ZVBhZ2VMaW5rcz86IGZ1bmN0aW9uXG4gICAqIENhbGN1bGF0ZXMgdGhlIHBhZ2UgbGlua3MgdGhhdCBzaG91bGQgYmUgc2hvd24gdG8gdGhlIHVzZXIgYmFzZWQgb24gdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHBhZ2luYXRvclxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlUGFnZUxpbmtzKCk6IHZvaWQge1xuICAgIC8vIHNwZWNpYWwgY2FzZSB3aGVuIDIgcGFnZUxpbmtzLCBkZXRlY3Qgd2hlbiBoaXQgZW5kIG9mIHBhZ2VzIHNvIGNhbiBsZWFkIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gICAgaWYgKHRoaXMuaXNNYXhQYWdlKCkpIHtcbiAgICAgIHRoaXMuX2hpdEVuZCA9IHRydWU7XG4gICAgICB0aGlzLl9oaXRTdGFydCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBzcGVjaWFsIGNhc2Ugd2hlbiAyIHBhZ2VMaW5rcywgZGV0ZWN0IHdoZW4gaGl0IHN0YXJ0IG9mIHBhZ2VzIHNvIGNhbiBsZWFkIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gICAgaWYgKHRoaXMuaXNNaW5QYWdlKCkpIHtcbiAgICAgIHRoaXMuX2hpdEVuZCA9IGZhbHNlO1xuICAgICAgdGhpcy5faGl0U3RhcnQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgcGFnZUxpbmtDb3VudCBnb2VzIGFib3ZlIG1heCBwb3NzaWJsZSBwYWdlcyBiYXNlZCBvbiBwZXJwYWdlIHNldHRpbmcgdGhlbiByZXNldCBpdCB0byBtYXhQYWdlXG4gICAgbGV0IGFjdHVhbFBhZ2VMaW5rQ291bnQ6IG51bWJlciA9IHRoaXMucGFnZUxpbmtDb3VudDtcbiAgICBpZiAodGhpcy5wYWdlTGlua0NvdW50ID4gdGhpcy5tYXhQYWdlKSB7XG4gICAgICBhY3R1YWxQYWdlTGlua0NvdW50ID0gdGhpcy5tYXhQYWdlO1xuICAgIH1cbiAgICAvLyByZXNldCB0aGUgcGFnZUxpbmtzIGFycmF5XG4gICAgdGhpcy5fcGFnZUxpbmtzID0gW107XG4gICAgLy8gZmlsbCBpbiB0aGUgYXJyYXkgd2l0aCB0aGUgcGFnZUxpbmtzIGJhc2VkIG9uIHRoZSBjdXJyZW50IHNlbGVjdGVkIHBhZ2VcbiAgICBsZXQgbWlkZGxlUGFnZUxpbmtzOiBudW1iZXIgPSBNYXRoLmZsb29yKGFjdHVhbFBhZ2VMaW5rQ291bnQgLyAyKTtcbiAgICBmb3IgKGxldCB4OiBudW1iZXIgPSAwOyB4IDwgYWN0dWFsUGFnZUxpbmtDb3VudDsgeCsrKSB7XG4gICAgICAvLyBkb24ndCBnbyBwYXN0IHRoZSBtYXhQYWdlIGluIHRoZSBwYWdlTGlua3NcbiAgICAgIC8vIGhhdmUgdG8gaGFuZGxlIGV2ZW4gYW5kIG9kZCBwYWdlTGlua0NvdW50cyBkaWZmZXJlbnRseSBzbyBjYW4gc3RpbGwgbGVhZCB0byB0aGUgbmV4dCBudW1iZXJzXG4gICAgICBpZiAoKGFjdHVhbFBhZ2VMaW5rQ291bnQgJSAyID09PSAwICYmICh0aGlzLnBhZ2UgKyBtaWRkbGVQYWdlTGlua3MgPiB0aGlzLm1heFBhZ2UpKSB8fFxuICAgICAgICAgIChhY3R1YWxQYWdlTGlua0NvdW50ICUgMiAhPT0gMCAmJiAodGhpcy5wYWdlICsgbWlkZGxlUGFnZUxpbmtzID49IHRoaXMubWF4UGFnZSkpKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9IHRoaXMubWF4UGFnZSAtIChhY3R1YWxQYWdlTGlua0NvdW50IC0gKHggKyAxKSk7XG4gICAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgcGFnZSBpcyBhZnRlciB0aGUgbWlkZGxlIHRoZW4gc2V0IHRoYXQgcGFnZSBhcyBtaWRkbGUgYW5kIGdldCB0aGUgY29ycmVjdCBiYWxhbmNlIG9uIGxlZnQgYW5kIHJpZ2h0XG4gICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIHdoZW4gdGhlcmUgYXJlIG9ubHkgMiBwYWdlTGlua3MgdG8ganVzdCBkcm9wIHRvIG5leHQgaWYgYmxvY2sgc28gY2FuIGxlYWQgdG8gbmV4dCBudW1iZXJzIHdoZW4gbW92aW5nIHRvIHJpZ2h0XG4gICAgICAvLyB3aGVuIG1vdmluZyB0byB0aGUgbGVmdCB0aGVuIGdvIGludG8gdGhpcyBibG9ja1xuICAgICAgfSBlbHNlIGlmICgoYWN0dWFsUGFnZUxpbmtDb3VudCA+IDIgfHwgYWN0dWFsUGFnZUxpbmtDb3VudCA8PSAyICYmIHRoaXMuX2hpdEVuZCkgJiYgKHRoaXMucGFnZSAtIG1pZGRsZVBhZ2VMaW5rcykgPiAwKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9ICh0aGlzLnBhZ2UgLSBtaWRkbGVQYWdlTGlua3MpICsgeDtcbiAgICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBwYWdlIGlzIGJlZm9yZSB0aGUgbWlkZGxlIHRoZW4gc2V0IHRoZSBwYWdlcyBiYXNlZCBvbiB0aGUgeCBpbmRleCBsZWFkaW5nIHVwIHRvIGFuZCBhZnRlciBzZWxlY3RlZCBwYWdlXG4gICAgICB9IGVsc2UgaWYgKCh0aGlzLnBhZ2UgLSBtaWRkbGVQYWdlTGlua3MpIDw9IDApIHtcbiAgICAgICAgdGhpcy5fcGFnZUxpbmtzW3hdID0geCArIDE7XG4gICAgICAvLyBvdGhlciB3aXNlIGp1c3Qgc2V0IHRoZSBhcnJheSBpbiBvcmRlciBzdGFydGluZyBmcm9tIHRoZSBzZWxlY3RlZCBwYWdlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wYWdlTGlua3NbeF0gPSB0aGlzLnBhZ2UgKyB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuX2NhbGN1bGF0ZVJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVQYWdlTGlua3MoKTtcbiAgICBsZXQgZXZlbnQ6IElQYWdlQ2hhbmdlRXZlbnQgPSB7XG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxuICAgICAgbWF4UGFnZTogdGhpcy5tYXhQYWdlLFxuICAgICAgcGFnZVNpemU6IHRoaXMuX3BhZ2VTaXplLFxuICAgICAgdG90YWw6IHRoaXMuX3RvdGFsLFxuICAgICAgZnJvbVJvdzogdGhpcy5fZnJvbVJvdyxcbiAgICAgIHRvUm93OiB0aGlzLl90b1JvdyxcbiAgICB9O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuaW1wb3J0IHsgVGRQYWdpbmdCYXJDb21wb25lbnQgfSBmcm9tICcuL3BhZ2luZy1iYXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGRQYWdpbmdCYXJDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZFBhZ2luZ0JhckNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRQYWdpbmdNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiY29lcmNlTnVtYmVyUHJvcGVydHkiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkRpciIsIk9wdGlvbmFsIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBMElFLDhCQUFnQyxJQUFTLEVBQ3JCLGtCQUFxQztZQUR6QixTQUFJLEdBQUosSUFBSSxDQUFLO1lBQ3JCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7WUF0SGpELGNBQVMsR0FBVyxFQUFFLENBQUM7WUFDdkIsV0FBTSxHQUFXLENBQUMsQ0FBQztZQUNuQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1lBQ2xCLGFBQVEsR0FBVyxDQUFDLENBQUM7WUFDckIsV0FBTSxHQUFXLENBQUMsQ0FBQztZQUNuQixpQkFBWSxHQUFZLEtBQUssQ0FBQztZQUM5QixlQUFVLEdBQWEsRUFBRSxDQUFDO1lBQzFCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDOztZQUUzQixZQUFPLEdBQVksS0FBSyxDQUFDOztZQUV6QixjQUFTLEdBQVksS0FBSyxDQUFDOzs7OztZQU1mLGNBQVMsR0FBWSxJQUFJLENBQUM7Ozs7O1lBTXhCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDOzs7Ozs7WUFxRjVCLGFBQVEsR0FBbUMsSUFBSUEsaUJBQVksRUFBb0IsQ0FBQztTQVVyQztRQXpGN0Qsc0JBQ0ksK0NBQWE7OztnQkFLakI7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