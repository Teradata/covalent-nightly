(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@angular/forms'), require('@angular/cdk/bidi'), require('@angular/material/input'), require('rxjs/operators'), require('@covalent/core/common'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/button')) :
	typeof define === 'function' && define.amd ? define('@covalent/core/search', ['exports', '@angular/core', '@angular/animations', '@angular/forms', '@angular/cdk/bidi', '@angular/material/input', 'rxjs/operators', '@covalent/core/common', '@angular/common', '@angular/material/icon', '@angular/material/button'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.search = {}),global.ng.core,global.ng.animations,global.ng.forms,global.ng.cdk.bidi,global.ng.material.input,global.Rx.Observable.prototype,global.covalent.core.common,global.ng.common,global.ng.material.icon,global.ng.material.button));
}(this, (function (exports,core,animations,forms,bidi,input,operators,common,common$1,icon,button) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var TdSearchInputBase = /** @class */ (function () {
    function TdSearchInputBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchInputBase;
}());
var _TdSearchInputMixinBase = common.mixinControlValueAccessor(TdSearchInputBase);
var TdSearchInputComponent = /** @class */ (function (_super) {
    __extends(TdSearchInputComponent, _super);
    function TdSearchInputComponent(_dir, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._dir = _dir;
        _this.showUnderline = false;
        _this.debounce = 400;
        _this.clearIcon = 'cancel';
        _this.onSearchDebounce = new core.EventEmitter();
        _this.onSearch = new core.EventEmitter();
        _this.onClear = new core.EventEmitter();
        _this.onBlur = new core.EventEmitter();
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
        this._input.ngControl.valueChanges.pipe(operators.debounceTime(this.debounce), operators.skip(1)).subscribe(function (value) {
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
    { type: core.Component, args: [{
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TdSearchInputComponent; }),
                        multi: true,
                    }],
                selector: 'td-search-input',
                template: "<div class=\"td-search-input\">\n  <mat-form-field class=\"td-search-input-field\"\n                  [class.mat-hide-underline]=\"!showUnderline\"\n                  floatLabel=\"never\">\n    <input matInput\n            #searchElement\n            type=\"search\"\n            [(ngModel)]=\"value\"\n            [placeholder]=\"placeholder\"\n            (blur)=\"handleBlur()\"\n            (search)=\"stopPropagation($event)\"\n            (keyup.enter)=\"handleSearch($event)\"/>\n  </mat-form-field>\n  <button mat-icon-button\n          class=\"td-search-input-clear\"\n          type=\"button\"\n          [@searchState]=\"(searchElement.value ?  'show' : (isRTL ? 'hide-left' : 'hide-right'))\"\n          (click)=\"clearSearch()\">\n    <mat-icon>{{clearIcon}}</mat-icon>\n  </button>\n</div>",
                styles: [":host .td-search-input{overflow-x:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-search-input .td-search-input-field{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-search-input ::ng-deep mat-form-field .mat-input-element{caret-color:currentColor}:host .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline{display:none}:host .td-search-input .td-search-input-clear{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}"],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                inputs: ['value'],
                animations: [
                    animations.trigger('searchState', [
                        animations.state('hide-left', animations.style({
                            transform: 'translateX(-150%)',
                            display: 'none',
                        })),
                        animations.state('hide-right', animations.style({
                            transform: 'translateX(150%)',
                            display: 'none',
                        })),
                        animations.state('show', animations.style({
                            transform: 'translateX(0%)',
                            display: 'block',
                        })),
                        animations.transition('* => show', animations.animate('200ms ease-in')),
                        animations.transition('show => *', animations.animate('200ms ease-out')),
                    ]),
                ],
            },] },
];
TdSearchInputComponent.ctorParameters = function () { return [
    { type: bidi.Dir, decorators: [{ type: core.Optional },] },
    { type: core.ChangeDetectorRef, },
]; };
TdSearchInputComponent.propDecorators = {
    "_input": [{ type: core.ViewChild, args: [input.MatInput,] },],
    "showUnderline": [{ type: core.Input, args: ['showUnderline',] },],
    "debounce": [{ type: core.Input, args: ['debounce',] },],
    "placeholder": [{ type: core.Input, args: ['placeholder',] },],
    "clearIcon": [{ type: core.Input, args: ['clearIcon',] },],
    "onSearchDebounce": [{ type: core.Output, args: ['searchDebounce',] },],
    "onSearch": [{ type: core.Output, args: ['search',] },],
    "onClear": [{ type: core.Output, args: ['clear',] },],
    "onBlur": [{ type: core.Output, args: ['blur',] },],
};
var TdSearchBoxBase = /** @class */ (function () {
    function TdSearchBoxBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchBoxBase;
}());
var _TdSearchBoxMixinBase = common.mixinControlValueAccessor(TdSearchBoxBase);
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
        _this.onSearchDebounce = new core.EventEmitter();
        _this.onSearch = new core.EventEmitter();
        _this.onClear = new core.EventEmitter();
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
    { type: core.Component, args: [{
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TdSearchBoxComponent; }),
                        multi: true,
                    }],
                selector: 'td-search-box',
                template: "<div class=\"td-search-box\">\n  <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\">\n    <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{backIcon}}</mat-icon>\n    <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{searchIcon}}</mat-icon>\n  </button>\n  <td-search-input #searchInput\n                   [@inputState]=\"alwaysVisible || searchVisible\"\n                   [debounce]=\"debounce\"\n                   [(ngModel)]=\"value\"\n                   [showUnderline]=\"showUnderline\"\n                   [placeholder]=\"placeholder\"\n                   [clearIcon]=\"clearIcon\"\n                   (searchDebounce)=\"handleSearchDebounce($event)\"\n                   (search)=\"handleSearch($event)\"\n                   (clear)=\"handleClear(); toggleVisibility()\">\n  </td-search-input>\n</div>",
                styles: [":host{display:block}.td-search-box{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.td-search-box .td-search-icon{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.td-search-box td-search-input{margin-left:12px}::ng-deep [dir=rtl] .td-search-box td-search-input{margin-right:12px;margin-left:0!important}"],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                inputs: ['value'],
                animations: [
                    animations.trigger('inputState', [
                        animations.state('0', animations.style({
                            width: '0%',
                            margin: '0px',
                        })),
                        animations.state('1', animations.style({
                            width: '100%',
                            margin: animations.AUTO_STYLE,
                        })),
                        animations.transition('0 => 1', animations.animate('200ms ease-in')),
                        animations.transition('1 => 0', animations.animate('200ms ease-out')),
                    ]),
                ],
            },] },
];
TdSearchBoxComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
]; };
TdSearchBoxComponent.propDecorators = {
    "_searchInput": [{ type: core.ViewChild, args: [TdSearchInputComponent,] },],
    "backIcon": [{ type: core.Input, args: ['backIcon',] },],
    "searchIcon": [{ type: core.Input, args: ['searchIcon',] },],
    "clearIcon": [{ type: core.Input, args: ['clearIcon',] },],
    "showUnderline": [{ type: core.Input, args: ['showUnderline',] },],
    "debounce": [{ type: core.Input, args: ['debounce',] },],
    "alwaysVisible": [{ type: core.Input, args: ['alwaysVisible',] },],
    "placeholder": [{ type: core.Input, args: ['placeholder',] },],
    "onSearchDebounce": [{ type: core.Output, args: ['searchDebounce',] },],
    "onSearch": [{ type: core.Output, args: ['search',] },],
    "onClear": [{ type: core.Output, args: ['clear',] },],
};
var CovalentSearchModule = /** @class */ (function () {
    function CovalentSearchModule() {
    }
    return CovalentSearchModule;
}());
CovalentSearchModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    forms.FormsModule,
                    common$1.CommonModule,
                    input.MatInputModule,
                    icon.MatIconModule,
                    button.MatButtonModule,
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

exports.CovalentSearchModule = CovalentSearchModule;
exports.TdSearchBoxBase = TdSearchBoxBase;
exports._TdSearchBoxMixinBase = _TdSearchBoxMixinBase;
exports.TdSearchBoxComponent = TdSearchBoxComponent;
exports.TdSearchInputBase = TdSearchInputBase;
exports._TdSearchInputMixinBase = _TdSearchInputMixinBase;
exports.TdSearchInputComponent = TdSearchInputComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-search.umd.js.map
