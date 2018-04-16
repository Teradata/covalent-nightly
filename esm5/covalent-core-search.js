import { __extends } from 'tslib';
import { Component, ViewChild, Input, Output, EventEmitter, Optional, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, NgModule } from '@angular/core';
import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { Dir } from '@angular/cdk/bidi';
import { MatInput, MatInputModule } from '@angular/material/input';
import { debounceTime, skip } from 'rxjs/operators';
import { mixinControlValueAccessor } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

var TdSearchInputBase = /** @class */ (function () {
    function TdSearchInputBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchInputBase;
}());
var _TdSearchInputMixinBase = mixinControlValueAccessor(TdSearchInputBase);
var TdSearchInputComponent = /** @class */ (function (_super) {
    __extends(TdSearchInputComponent, _super);
    function TdSearchInputComponent(_dir, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._dir = _dir;
        _this.showUnderline = false;
        _this.debounce = 400;
        _this.clearIcon = 'cancel';
        _this.onSearchDebounce = new EventEmitter();
        _this.onSearch = new EventEmitter();
        _this.onClear = new EventEmitter();
        _this.onBlur = new EventEmitter();
        return _this;
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
        this._input.ngControl.valueChanges.pipe(debounceTime(this.debounce), skip(1)).subscribe(function (value) {
            _this._searchTermChanged(value);
        });
    };
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
    return TdSearchInputComponent;
}(_TdSearchInputMixinBase));
TdSearchInputComponent.decorators = [
    { type: Component, args: [{
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return TdSearchInputComponent; }),
                        multi: true,
                    }],
                selector: 'td-search-input',
                template: "<div class=\"td-search-input\">\n  <mat-form-field class=\"td-search-input-field\"\n                  [class.mat-hide-underline]=\"!showUnderline\"\n                  floatLabel=\"never\">\n    <input matInput\n            #searchElement\n            type=\"search\"\n            [(ngModel)]=\"value\"\n            [placeholder]=\"placeholder\"\n            (blur)=\"handleBlur()\"\n            (search)=\"stopPropagation($event)\"\n            (keyup.enter)=\"handleSearch($event)\"/>\n  </mat-form-field>\n  <button mat-icon-button\n          class=\"td-search-input-clear\"\n          type=\"button\"\n          [@searchState]=\"(searchElement.value ?  'show' : (isRTL ? 'hide-left' : 'hide-right'))\"\n          (click)=\"clearSearch()\">\n    <mat-icon>{{clearIcon}}</mat-icon>\n  </button>\n</div>",
                styles: [":host .td-search-input{overflow-x:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-search-input .td-search-input-field{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-search-input ::ng-deep mat-form-field .mat-input-element{caret-color:currentColor}:host .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline{display:none}:host .td-search-input .td-search-input-clear{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}"],
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
            },] },
];
TdSearchInputComponent.ctorParameters = function () { return [
    { type: Dir, decorators: [{ type: Optional },] },
    { type: ChangeDetectorRef, },
]; };
TdSearchInputComponent.propDecorators = {
    "_input": [{ type: ViewChild, args: [MatInput,] },],
    "showUnderline": [{ type: Input, args: ['showUnderline',] },],
    "debounce": [{ type: Input, args: ['debounce',] },],
    "placeholder": [{ type: Input, args: ['placeholder',] },],
    "clearIcon": [{ type: Input, args: ['clearIcon',] },],
    "onSearchDebounce": [{ type: Output, args: ['searchDebounce',] },],
    "onSearch": [{ type: Output, args: ['search',] },],
    "onClear": [{ type: Output, args: ['clear',] },],
    "onBlur": [{ type: Output, args: ['blur',] },],
};
var TdSearchBoxBase = /** @class */ (function () {
    function TdSearchBoxBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchBoxBase;
}());
var _TdSearchBoxMixinBase = mixinControlValueAccessor(TdSearchBoxBase);
var TdSearchBoxComponent = /** @class */ (function (_super) {
    __extends(TdSearchBoxComponent, _super);
    function TdSearchBoxComponent(_changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._searchVisible = false;
        _this.backIcon = 'search';
        _this.searchIcon = 'search';
        _this.clearIcon = 'cancel';
        _this.showUnderline = false;
        _this.debounce = 400;
        _this.alwaysVisible = false;
        _this.onSearchDebounce = new EventEmitter();
        _this.onSearch = new EventEmitter();
        _this.onClear = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdSearchBoxComponent.prototype, "searchVisible", {
        get: function () {
            return this._searchVisible;
        },
        enumerable: true,
        configurable: true
    });
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
    return TdSearchBoxComponent;
}(_TdSearchBoxMixinBase));
TdSearchBoxComponent.decorators = [
    { type: Component, args: [{
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return TdSearchBoxComponent; }),
                        multi: true,
                    }],
                selector: 'td-search-box',
                template: "<div class=\"td-search-box\">\n  <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\">\n    <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{backIcon}}</mat-icon>\n    <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{searchIcon}}</mat-icon>\n  </button>\n  <td-search-input #searchInput\n                   [@inputState]=\"alwaysVisible || searchVisible\"\n                   [debounce]=\"debounce\"\n                   [(ngModel)]=\"value\"\n                   [showUnderline]=\"showUnderline\"\n                   [placeholder]=\"placeholder\"\n                   [clearIcon]=\"clearIcon\"\n                   (searchDebounce)=\"handleSearchDebounce($event)\"\n                   (search)=\"handleSearch($event)\"\n                   (clear)=\"handleClear(); toggleVisibility()\">\n  </td-search-input>\n</div>",
                styles: [":host{display:block}.td-search-box{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.td-search-box .td-search-icon{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.td-search-box td-search-input{margin-left:12px}::ng-deep [dir=rtl] .td-search-box td-search-input{margin-right:12px;margin-left:0!important}"],
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
            },] },
];
TdSearchBoxComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
]; };
TdSearchBoxComponent.propDecorators = {
    "_searchInput": [{ type: ViewChild, args: [TdSearchInputComponent,] },],
    "backIcon": [{ type: Input, args: ['backIcon',] },],
    "searchIcon": [{ type: Input, args: ['searchIcon',] },],
    "clearIcon": [{ type: Input, args: ['clearIcon',] },],
    "showUnderline": [{ type: Input, args: ['showUnderline',] },],
    "debounce": [{ type: Input, args: ['debounce',] },],
    "alwaysVisible": [{ type: Input, args: ['alwaysVisible',] },],
    "placeholder": [{ type: Input, args: ['placeholder',] },],
    "onSearchDebounce": [{ type: Output, args: ['searchDebounce',] },],
    "onSearch": [{ type: Output, args: ['search',] },],
    "onClear": [{ type: Output, args: ['clear',] },],
};
var CovalentSearchModule = /** @class */ (function () {
    function CovalentSearchModule() {
    }
    return CovalentSearchModule;
}());
CovalentSearchModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    CommonModule,
                    MatInputModule,
                    MatIconModule,
                    MatButtonModule,
                ],
                declarations: [
                    TdSearchInputComponent,
                    TdSearchBoxComponent,
                ],
                exports: [
                    TdSearchInputComponent,
                    TdSearchBoxComponent,
                ],
            },] },
];
CovalentSearchModule.ctorParameters = function () { return []; };

export { CovalentSearchModule, TdSearchBoxBase, _TdSearchBoxMixinBase, TdSearchBoxComponent, TdSearchInputBase, _TdSearchInputMixinBase, TdSearchInputComponent };
//# sourceMappingURL=covalent-core-search.js.map
