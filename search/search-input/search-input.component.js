import * as tslib_1 from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter, Optional, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dir } from '@angular/cdk/bidi';
import { MatInput } from '@angular/material/input';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { skip } from 'rxjs/operators/skip';
import { mixinControlValueAccessor } from '../../common/common.module';
var TdSearchInputBase = (function () {
    function TdSearchInputBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchInputBase;
}());
export { TdSearchInputBase };
/* tslint:disable-next-line */
export var _TdSearchInputMixinBase = mixinControlValueAccessor(TdSearchInputBase);
var TdSearchInputComponent = (function (_super) {
    tslib_1.__extends(TdSearchInputComponent, _super);
    function TdSearchInputComponent(_dir, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._dir = _dir;
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
         * clearIcon?: string
         * The icon used to clear the search input.
         * Defaults to 'cancel' icon.
         */
        _this.clearIcon = 'cancel';
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
        /**
         * blur: function()
         * Event emitted after the blur event has been called in underlying input.
         */
        _this.onBlur = new EventEmitter();
        return _this;
    }
    TdSearchInputComponent_1 = TdSearchInputComponent;
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
        this._input.ngControl.valueChanges.pipe(skip(1), // skip first change when value is set to undefined
        debounceTime(this.debounce)).subscribe(function (value) {
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
        this._changeDetectorRef.markForCheck();
        this.onClear.emit(undefined);
    };
    TdSearchInputComponent.prototype._searchTermChanged = function (value) {
        this.onSearchDebounce.emit(value);
    };
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
        Input('clearIcon'),
        tslib_1.__metadata("design:type", String)
    ], TdSearchInputComponent.prototype, "clearIcon", void 0);
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
    TdSearchInputComponent = TdSearchInputComponent_1 = tslib_1.__decorate([
        Component({
            providers: [{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return TdSearchInputComponent_1; }),
                    multi: true,
                }],
            selector: 'td-search-input',
            template: "<div class=\"td-search-input\"> <mat-form-field class=\"td-search-input-field\" [class.mat-hide-underline]=\"!showUnderline\" floatPlaceholder=\"never\"> <input matInput #searchElement type=\"search\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\" (blur)=\"handleBlur()\" (search)=\"stopPropagation($event)\" (keyup.enter)=\"handleSearch($event)\"/> </mat-form-field> <button mat-icon-button class=\"td-search-input-clear\" type=\"button\" [@searchState]=\"(searchElement.value ?  'show' : (isRTL ? 'hide-left' : 'hide-right'))\" (click)=\"clearSearch()\"> <mat-icon>{{clearIcon}}</mat-icon> </button> </div>",
            styles: [".td-search-input { overflow-x: hidden; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; -webkit-box-align: center; -ms-flex-align: center; align-items: center; -ms-flex-line-pack: center; align-content: center; max-width: 100%; -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } .td-search-input .td-search-input-field { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline { display: none; } .td-search-input .td-search-input-clear { -webkit-box-flex: 0; -ms-flex: 0 0 auto; flex: 0 0 auto; } /*# sourceMappingURL=search-input.component.css.map */ "],
            changeDetection: ChangeDetectionStrategy.OnPush,
            inputs: ['value'],
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
        tslib_1.__metadata("design:paramtypes", [Dir,
            ChangeDetectorRef])
    ], TdSearchInputComponent);
    return TdSearchInputComponent;
    var TdSearchInputComponent_1;
}(_TdSearchInputMixinBase));
export { TdSearchInputComponent };
//# sourceMappingURL=search-input.component.js.map