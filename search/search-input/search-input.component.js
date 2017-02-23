var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Input, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { MdInputDirective } from '@angular/material';
import 'rxjs/add/operator/debounceTime';
var TdSearchInputComponent = (function () {
    function TdSearchInputComponent() {
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
    TdSearchInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._input._ngControl.valueChanges
            .debounceTime(this.debounce)
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
__decorate([
    ViewChild(MdInputDirective),
    __metadata("design:type", MdInputDirective)
], TdSearchInputComponent.prototype, "_input", void 0);
__decorate([
    Input('showUnderline'),
    __metadata("design:type", Boolean)
], TdSearchInputComponent.prototype, "showUnderline", void 0);
__decorate([
    Input('debounce'),
    __metadata("design:type", Number)
], TdSearchInputComponent.prototype, "debounce", void 0);
__decorate([
    Input('placeholder'),
    __metadata("design:type", String)
], TdSearchInputComponent.prototype, "placeholder", void 0);
__decorate([
    Output('searchDebounce'),
    __metadata("design:type", EventEmitter)
], TdSearchInputComponent.prototype, "onSearchDebounce", void 0);
__decorate([
    Output('search'),
    __metadata("design:type", EventEmitter)
], TdSearchInputComponent.prototype, "onSearch", void 0);
__decorate([
    Output('clear'),
    __metadata("design:type", EventEmitter)
], TdSearchInputComponent.prototype, "onClear", void 0);
__decorate([
    Output('blur'),
    __metadata("design:type", EventEmitter)
], TdSearchInputComponent.prototype, "onBlur", void 0);
TdSearchInputComponent = __decorate([
    Component({
        selector: 'td-search-input',
        template: "<div class=\"td-search-input\" layout=\"row\" layout-align=\"end center\"> <md-input-container [class.mat-hide-underline]=\"!showUnderline\" flex> <input mdInput #searchElement type=\"search\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\" (blur)=\"handleBlur()\" (search)=\"stopPropagation($event)\" (keyup.enter)=\"handleSearch($event)\"/> </md-input-container> <button md-icon-button type=\"button\" [@searchState]=\"searchElement.value ? true : false\" (click)=\"clearSearch()\" flex=\"none\"> <md-icon>cancel</md-icon> </button> </div>",
        styles: [".td-search-input { height: 64px; overflow-x: hidden; } .td-search-input /deep/ md-input-container.mat-hide-underline .mat-input-underline { display: none; } "],
        animations: [
            trigger('searchState', [
                state('false', style({
                    transform: 'translateX(150%)',
                    display: 'none',
                })),
                state('true', style({
                    transform: 'translateX(0%)',
                    display: 'block',
                })),
                transition('0 => 1', animate('200ms ease-in')),
                transition('1 => 0', animate('200ms ease-out')),
            ]),
        ],
    })
], TdSearchInputComponent);
export { TdSearchInputComponent };
//# sourceMappingURL=search-input.component.js.map