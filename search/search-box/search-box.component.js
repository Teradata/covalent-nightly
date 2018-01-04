import * as tslib_1 from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';
import { TdSearchInputComponent } from '../search-input/search-input.component';
import { mixinControlValueAccessor } from '../../common/common.module';
var TdSearchBoxBase = (function () {
    function TdSearchBoxBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchBoxBase;
}());
export { TdSearchBoxBase };
/* tslint:disable-next-line */
export var _TdSearchBoxMixinBase = mixinControlValueAccessor(TdSearchBoxBase);
var TdSearchBoxComponent = (function (_super) {
    tslib_1.__extends(TdSearchBoxComponent, _super);
    function TdSearchBoxComponent(_changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._searchVisible = false;
        /**
         * backIcon?: string
         * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
         * Defaults to 'search' icon.
         */
        _this.backIcon = 'search';
        /**
         * searchIcon?: string
         * The icon used to open/focus the search toggle.
         * Defaults to 'search' icon.
         */
        _this.searchIcon = 'search';
        /**
         * clearIcon?: string
         * The icon used to clear the search input.
         * Defaults to 'cancel' icon.
         */
        _this.clearIcon = 'cancel';
        /**
         * showUnderline?: boolean
         * Sets if the input underline should be visible. Defaults to 'false'.
         */
        _this.showUnderline = false;
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 400.
         */
        _this.debounce = 400;
        /**
         * alwaysVisible?: boolean
         * Sets if the input should always be visible. Defaults to 'false'.
         */
        _this.alwaysVisible = false;
        /**
         * searchDebounce: function($event)
         * Event emitted after the [debounce] timeout.
         */
        _this.onSearchDebounce = new EventEmitter();
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         */
        _this.onSearch = new EventEmitter();
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         */
        _this.onClear = new EventEmitter();
        return _this;
    }
    TdSearchBoxComponent_1 = TdSearchBoxComponent;
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
        this._changeDetectorRef.markForCheck();
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
    tslib_1.__decorate([
        ViewChild(TdSearchInputComponent),
        tslib_1.__metadata("design:type", TdSearchInputComponent)
    ], TdSearchBoxComponent.prototype, "_searchInput", void 0);
    tslib_1.__decorate([
        Input('backIcon'),
        tslib_1.__metadata("design:type", String)
    ], TdSearchBoxComponent.prototype, "backIcon", void 0);
    tslib_1.__decorate([
        Input('searchIcon'),
        tslib_1.__metadata("design:type", String)
    ], TdSearchBoxComponent.prototype, "searchIcon", void 0);
    tslib_1.__decorate([
        Input('clearIcon'),
        tslib_1.__metadata("design:type", String)
    ], TdSearchBoxComponent.prototype, "clearIcon", void 0);
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
    TdSearchBoxComponent = TdSearchBoxComponent_1 = tslib_1.__decorate([
        Component({
            providers: [{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return TdSearchBoxComponent_1; }),
                    multi: true,
                }],
            selector: 'td-search-box',
            template: "<div class=\"td-search-box\"> <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\"> <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{backIcon}}</mat-icon> <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{searchIcon}}</mat-icon> </button> <td-search-input #searchInput [@inputState]=\"alwaysVisible || searchVisible\" [debounce]=\"debounce\" [(ngModel)]=\"value\" [showUnderline]=\"showUnderline\" [placeholder]=\"placeholder\" [clearIcon]=\"clearIcon\" (searchDebounce)=\"handleSearchDebounce($event)\" (search)=\"handleSearch($event)\" (clear)=\"handleClear(); toggleVisibility()\"> </td-search-input> </div>",
            styles: [":host { display: block; } .td-search-box { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } .td-search-box .td-search-icon { -webkit-box-flex: 0; -ms-flex: 0 0 auto; flex: 0 0 auto; } .td-search-box td-search-input { margin-left: 12px; } ::ng-deep [dir='rtl'] .td-search-box td-search-input { margin-right: 12px; margin-left: 0 !important; } /*# sourceMappingURL=search-box.component.css.map */ "],
            changeDetection: ChangeDetectionStrategy.OnPush,
            inputs: ['value'],
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
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
    ], TdSearchBoxComponent);
    return TdSearchBoxComponent;
    var TdSearchBoxComponent_1;
}(_TdSearchBoxMixinBase));
export { TdSearchBoxComponent };
//# sourceMappingURL=search-box.component.js.map