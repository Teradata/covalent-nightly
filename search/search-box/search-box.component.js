import * as tslib_1 from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';
import { TdSearchInputComponent } from '../search-input/search-input.component';
var TdSearchBoxComponent = (function () {
    function TdSearchBoxComponent() {
        this._searchVisible = false;
        /**
         * backIcon?: string
         * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
         * Defaults to 'search' icon.
         */
        this.backIcon = 'search';
        /**
         * showUnderline?: boolean
         * Sets if the input underline should be visible. Defaults to 'false'.
         */
        this.showUnderline = false;
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 400.
         */
        this.debounce = 400;
        /**
         * alwaysVisible?: boolean
         * Sets if the input should always be visible. Defaults to 'false'.
         */
        this.alwaysVisible = false;
        /**
         * searchDebounce: function($event)
         * Event emitted after the [debounce] timeout.
         */
        this.onSearchDebounce = new EventEmitter();
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         */
        this.onSearch = new EventEmitter();
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         */
        this.onClear = new EventEmitter();
    }
    Object.defineProperty(TdSearchBoxComponent.prototype, "value", {
        get: function () {
            return this._searchInput.value;
        },
        set: function (value) {
            this._searchInput.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdSearchBoxComponent.prototype, "searchVisible", {
        get: function () {
            return this._searchVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when the search icon is clicked.
     */
    TdSearchBoxComponent.prototype.searchClicked = function () {
        if (this.alwaysVisible || !this._searchVisible) {
            this._searchInput.focus();
        }
        this.toggleVisibility();
    };
    TdSearchBoxComponent.prototype.toggleVisibility = function () {
        this._searchVisible = !this._searchVisible;
    };
    TdSearchBoxComponent.prototype.handleSearchDebounce = function (value) {
        this.onSearchDebounce.emit(value);
    };
    TdSearchBoxComponent.prototype.handleSearch = function (value) {
        this.onSearch.emit(value);
    };
    TdSearchBoxComponent.prototype.handleClear = function () {
        this.onClear.emit(undefined);
    };
    return TdSearchBoxComponent;
}());
tslib_1.__decorate([
    ViewChild(TdSearchInputComponent),
    tslib_1.__metadata("design:type", TdSearchInputComponent)
], TdSearchBoxComponent.prototype, "_searchInput", void 0);
tslib_1.__decorate([
    Input('backIcon'),
    tslib_1.__metadata("design:type", String)
], TdSearchBoxComponent.prototype, "backIcon", void 0);
tslib_1.__decorate([
    Input('showUnderline'),
    tslib_1.__metadata("design:type", Boolean)
], TdSearchBoxComponent.prototype, "showUnderline", void 0);
tslib_1.__decorate([
    Input('debounce'),
    tslib_1.__metadata("design:type", Number)
], TdSearchBoxComponent.prototype, "debounce", void 0);
tslib_1.__decorate([
    Input('alwaysVisible'),
    tslib_1.__metadata("design:type", Boolean)
], TdSearchBoxComponent.prototype, "alwaysVisible", void 0);
tslib_1.__decorate([
    Input('placeholder'),
    tslib_1.__metadata("design:type", String)
], TdSearchBoxComponent.prototype, "placeholder", void 0);
tslib_1.__decorate([
    Output('searchDebounce'),
    tslib_1.__metadata("design:type", EventEmitter)
], TdSearchBoxComponent.prototype, "onSearchDebounce", void 0);
tslib_1.__decorate([
    Output('search'),
    tslib_1.__metadata("design:type", EventEmitter)
], TdSearchBoxComponent.prototype, "onSearch", void 0);
tslib_1.__decorate([
    Output('clear'),
    tslib_1.__metadata("design:type", EventEmitter)
], TdSearchBoxComponent.prototype, "onClear", void 0);
TdSearchBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'td-search-box',
        template: "<div class=\"td-search-box\" layout=\"row\" layout-align=\"end center\"> <button mat-icon-button type=\"button\" class=\"td-search-icon\" flex=\"none\" (click)=\"searchClicked()\"> <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{backIcon}}</mat-icon> <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">search</mat-icon> </button> <td-search-input #searchInput [@inputState]=\"alwaysVisible || searchVisible\" [debounce]=\"debounce\" [showUnderline]=\"showUnderline\" [placeholder]=\"placeholder\" (searchDebounce)=\"handleSearchDebounce($event)\" (search)=\"handleSearch($event)\" (clear)=\"handleClear(); toggleVisibility()\"> </td-search-input> </div>",
        styles: [":host { display: block; } .td-search-box td-search-input { margin-left: 12px; } /deep/ [dir='rtl'] .td-search-box td-search-input { margin-right: 12px; margin-left: 0px !important; } /*# sourceMappingURL=search-box.component.css.map */ "],
        animations: [
            trigger('inputState', [
                state('0', style({
                    width: '0%',
                    margin: '0px',
                })),
                state('1', style({
                    width: '100%',
                    margin: AUTO_STYLE,
                })),
                transition('0 => 1', animate('200ms ease-in')),
                transition('1 => 0', animate('200ms ease-out')),
            ]),
        ],
    })
], TdSearchBoxComponent);
export { TdSearchBoxComponent };
//# sourceMappingURL=search-box.component.js.map