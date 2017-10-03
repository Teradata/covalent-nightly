import * as tslib_1 from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter, Optional } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Dir } from '@angular/cdk/bidi';
import { MatInput } from '@angular/material';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { skip } from 'rxjs/operator/skip';
var TdSearchInputComponent = (function () {
    function TdSearchInputComponent(_dir) {
        this._dir = _dir;
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
        /**
         * blur: function()
         * Event emitted after the blur event has been called in underlying input.
         */
        this.onBlur = new EventEmitter();
    }
    Object.defineProperty(TdSearchInputComponent.prototype, "isRTL", {
        get: function () {
            if (this._dir) {
                return this._dir.dir === 'rtl';
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    TdSearchInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        debounceTime.call(skip.call(this._input.ngControl.valueChanges, 1), // skip first change when value is set to undefined
        this.debounce)
            .subscribe(function (value) {
            _this._searchTermChanged(value);
        });
    };
    /**
     * Method to focus to underlying input.
     */
    TdSearchInputComponent.prototype.focus = function () {
        this._input.focus();
    };
    TdSearchInputComponent.prototype.handleBlur = function () {
        this.onBlur.emit(undefined);
    };
    TdSearchInputComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
    };
    TdSearchInputComponent.prototype.handleSearch = function (event) {
        this.stopPropagation(event);
        this.onSearch.emit(this.value);
    };
    TdSearchInputComponent.prototype.clearSearch = function () {
        this.value = '';
        this.onClear.emit(undefined);
    };
    TdSearchInputComponent.prototype._searchTermChanged = function (value) {
        this.onSearchDebounce.emit(value);
    };
    return TdSearchInputComponent;
}());
tslib_1.__decorate([
    ViewChild(MatInput),
    tslib_1.__metadata("design:type", MatInput)
], TdSearchInputComponent.prototype, "_input", void 0);
tslib_1.__decorate([
    Input('showUnderline'),
    tslib_1.__metadata("design:type", Boolean)
], TdSearchInputComponent.prototype, "showUnderline", void 0);
tslib_1.__decorate([
    Input('debounce'),
    tslib_1.__metadata("design:type", Number)
], TdSearchInputComponent.prototype, "debounce", void 0);
tslib_1.__decorate([
    Input('placeholder'),
    tslib_1.__metadata("design:type", String)
], TdSearchInputComponent.prototype, "placeholder", void 0);
tslib_1.__decorate([
    Output('searchDebounce'),
    tslib_1.__metadata("design:type", EventEmitter)
], TdSearchInputComponent.prototype, "onSearchDebounce", void 0);
tslib_1.__decorate([
    Output('search'),
    tslib_1.__metadata("design:type", EventEmitter)
], TdSearchInputComponent.prototype, "onSearch", void 0);
tslib_1.__decorate([
    Output('clear'),
    tslib_1.__metadata("design:type", EventEmitter)
], TdSearchInputComponent.prototype, "onClear", void 0);
tslib_1.__decorate([
    Output('blur'),
    tslib_1.__metadata("design:type", EventEmitter)
], TdSearchInputComponent.prototype, "onBlur", void 0);
TdSearchInputComponent = tslib_1.__decorate([
    Component({
        selector: 'td-search-input',
        template: "<div class=\"td-search-input\" layout=\"row\" layout-align=\"end center\"> <mat-form-field [class.mat-hide-underline]=\"!showUnderline\" floatPlaceholder=\"never\" flex> <input matInput #searchElement type=\"search\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\" (blur)=\"handleBlur()\" (search)=\"stopPropagation($event)\" (keyup.enter)=\"handleSearch($event)\"/> </mat-form-field> <button mat-icon-button type=\"button\" [@searchState]=\"(searchElement.value ?  'show' : (isRTL ? 'hide-left' : 'hide-right'))\" (click)=\"clearSearch()\" flex=\"none\"> <mat-icon>cancel</mat-icon> </button> </div>",
        styles: [".td-search-input { overflow-x: hidden; } .td-search-input /deep/ mat-form-field.mat-hide-underline .mat-form-field-underline { display: none; } /*# sourceMappingURL=search-input.component.css.map */ "],
        animations: [
            trigger('searchState', [
                state('hide-left', style({
                    transform: 'translateX(-150%)',
                    display: 'none',
                })),
                state('hide-right', style({
                    transform: 'translateX(150%)',
                    display: 'none',
                })),
                state('show', style({
                    transform: 'translateX(0%)',
                    display: 'block',
                })),
                transition('* => show', animate('200ms ease-in')),
                transition('show => *', animate('200ms ease-out')),
            ]),
        ],
    }),
    tslib_1.__param(0, Optional()),
    tslib_1.__metadata("design:paramtypes", [Dir])
], TdSearchInputComponent);
export { TdSearchInputComponent };
//# sourceMappingURL=search-input.component.js.map