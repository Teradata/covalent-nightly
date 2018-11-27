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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdSearchInputBase = /** @class */ (function () {
    function TdSearchInputBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchInputBase;
}());
/* tslint:disable-next-line */
/** @type {?} */
var _TdSearchInputMixinBase = mixinControlValueAccessor(TdSearchInputBase);
var TdSearchInputComponent = /** @class */ (function (_super) {
    __extends(TdSearchInputComponent, _super);
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
    Object.defineProperty(TdSearchInputComponent.prototype, "isRTL", {
        get: /**
         * @return {?}
         */
        function () {
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
    TdSearchInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._input.ngControl.valueChanges.pipe(debounceTime(this.debounce), skip(1)).subscribe(function (value) {
            _this._searchTermChanged(value);
        });
    };
    /**
     * Method to focus to underlying input.
     */
    /**
     * Method to focus to underlying input.
     * @return {?}
     */
    TdSearchInputComponent.prototype.focus = /**
     * Method to focus to underlying input.
     * @return {?}
     */
    function () {
        this._input.focus();
    };
    /**
     * @return {?}
     */
    TdSearchInputComponent.prototype.handleBlur = /**
     * @return {?}
     */
    function () {
        this.onBlur.emit(undefined);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdSearchInputComponent.prototype.stopPropagation = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdSearchInputComponent.prototype.handleSearch = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.stopPropagation(event);
        this.onSearch.emit(this.value);
    };
    /**
     * Method to clear the underlying input.
     */
    /**
     * Method to clear the underlying input.
     * @return {?}
     */
    TdSearchInputComponent.prototype.clearSearch = /**
     * Method to clear the underlying input.
     * @return {?}
     */
    function () {
        this.value = '';
        this._changeDetectorRef.markForCheck();
        this.onClear.emit(undefined);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TdSearchInputComponent.prototype._searchTermChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.onSearchDebounce.emit(value);
    };
    TdSearchInputComponent.decorators = [
        { type: Component, args: [{
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TdSearchInputComponent; }),
                            multi: true,
                        }],
                    selector: 'td-search-input',
                    template: "<div class=\"td-search-input\">\n  <mat-form-field class=\"td-search-input-field\"\n                  [class.mat-hide-underline]=\"!showUnderline\"\n                  floatLabel=\"never\">\n    <input matInput\n            #searchElement\n            type=\"search\"\n            [(ngModel)]=\"value\"\n            [placeholder]=\"placeholder\"\n            (blur)=\"handleBlur()\"\n            (search)=\"stopPropagation($event)\"\n            (keyup.enter)=\"handleSearch($event)\"/>\n  </mat-form-field>\n  <button mat-icon-button\n          class=\"td-search-input-clear\"\n          type=\"button\"\n          [@searchState]=\"(searchElement.value ?  'show' : (isRTL ? 'hide-left' : 'hide-right'))\"\n          (click)=\"clearSearch()\">\n    <mat-icon>{{clearIcon}}</mat-icon>\n  </button>\n</div>",
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
                    styles: [":host .td-search-input{overflow-x:hidden;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host .td-search-input .td-search-input-field{-ms-flex:1;flex:1}:host .td-search-input ::ng-deep mat-form-field .mat-input-element{caret-color:currentColor}:host .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline{display:none}:host .td-search-input .td-search-input-clear{-ms-flex:0 0 auto;flex:0 0 auto}"]
                }] }
    ];
    /** @nocollapse */
    TdSearchInputComponent.ctorParameters = function () { return [
        { type: Dir, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef }
    ]; };
    TdSearchInputComponent.propDecorators = {
        _input: [{ type: ViewChild, args: [MatInput,] }],
        showUnderline: [{ type: Input, args: ['showUnderline',] }],
        debounce: [{ type: Input, args: ['debounce',] }],
        placeholder: [{ type: Input, args: ['placeholder',] }],
        clearIcon: [{ type: Input, args: ['clearIcon',] }],
        onSearchDebounce: [{ type: Output, args: ['searchDebounce',] }],
        onSearch: [{ type: Output, args: ['search',] }],
        onClear: [{ type: Output, args: ['clear',] }],
        onBlur: [{ type: Output, args: ['blur',] }]
    };
    return TdSearchInputComponent;
}(_TdSearchInputMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdSearchBoxBase = /** @class */ (function () {
    function TdSearchBoxBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchBoxBase;
}());
/* tslint:disable-next-line */
/** @type {?} */
var _TdSearchBoxMixinBase = mixinControlValueAccessor(TdSearchBoxBase);
var TdSearchBoxComponent = /** @class */ (function (_super) {
    __extends(TdSearchBoxComponent, _super);
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
        /**
         * blur: function()
         * Event emitted after the blur event has been called in underlying input.
         */
        _this.onBlur = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdSearchBoxComponent.prototype, "searchVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when the search icon is clicked.
     */
    /**
     * Method executed when the search icon is clicked.
     * @return {?}
     */
    TdSearchBoxComponent.prototype.searchClicked = /**
     * Method executed when the search icon is clicked.
     * @return {?}
     */
    function () {
        if (!this.alwaysVisible && this._searchVisible) {
            this.value = '';
            this.handleClear();
        }
        else if (this.alwaysVisible || !this._searchVisible) {
            this._searchInput.focus();
        }
        this.toggleVisibility();
    };
    /**
     * @return {?}
     */
    TdSearchBoxComponent.prototype.toggleVisibility = /**
     * @return {?}
     */
    function () {
        this._searchVisible = !this._searchVisible;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TdSearchBoxComponent.prototype.handleSearchDebounce = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.onSearchDebounce.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TdSearchBoxComponent.prototype.handleSearch = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.onSearch.emit(value);
    };
    /**
     * @return {?}
     */
    TdSearchBoxComponent.prototype.handleClear = /**
     * @return {?}
     */
    function () {
        this.onClear.emit(undefined);
    };
    /**
     * @return {?}
     */
    TdSearchBoxComponent.prototype.handleBlur = /**
     * @return {?}
     */
    function () {
        this.onBlur.emit(undefined);
    };
    TdSearchBoxComponent.decorators = [
        { type: Component, args: [{
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TdSearchBoxComponent; }),
                            multi: true,
                        }],
                    selector: 'td-search-box',
                    template: "<div class=\"td-search-box\">\n  <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\">\n    <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{backIcon}}</mat-icon>\n    <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{searchIcon}}</mat-icon>\n  </button>\n  <td-search-input #searchInput\n                   [@inputState]=\"alwaysVisible || searchVisible\"\n                   [debounce]=\"debounce\"\n                   [(ngModel)]=\"value\"\n                   [showUnderline]=\"showUnderline\"\n                   [placeholder]=\"placeholder\"\n                   [clearIcon]=\"clearIcon\"\n                   (searchDebounce)=\"handleSearchDebounce($event)\"\n                   (search)=\"handleSearch($event)\"\n                   (clear)=\"handleClear(); toggleVisibility()\"\n                   (blur)=\"handleBlur()\">\n  </td-search-input>\n</div>",
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
                    styles: [":host{display:block}.td-search-box{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}.td-search-box .td-search-icon{-ms-flex:0 0 auto;flex:0 0 auto}.td-search-box td-search-input{margin-left:12px}::ng-deep [dir=rtl] .td-search-box td-search-input{margin-right:12px;margin-left:0!important}"]
                }] }
    ];
    /** @nocollapse */
    TdSearchBoxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TdSearchBoxComponent.propDecorators = {
        _searchInput: [{ type: ViewChild, args: [TdSearchInputComponent,] }],
        backIcon: [{ type: Input, args: ['backIcon',] }],
        searchIcon: [{ type: Input, args: ['searchIcon',] }],
        clearIcon: [{ type: Input, args: ['clearIcon',] }],
        showUnderline: [{ type: Input, args: ['showUnderline',] }],
        debounce: [{ type: Input, args: ['debounce',] }],
        alwaysVisible: [{ type: Input, args: ['alwaysVisible',] }],
        placeholder: [{ type: Input, args: ['placeholder',] }],
        onSearchDebounce: [{ type: Output, args: ['searchDebounce',] }],
        onSearch: [{ type: Output, args: ['search',] }],
        onClear: [{ type: Output, args: ['clear',] }],
        onBlur: [{ type: Output, args: ['blur',] }]
    };
    return TdSearchBoxComponent;
}(_TdSearchBoxMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CovalentSearchModule = /** @class */ (function () {
    function CovalentSearchModule() {
    }
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
                },] }
    ];
    return CovalentSearchModule;
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

export { CovalentSearchModule, TdSearchBoxBase, _TdSearchBoxMixinBase, TdSearchBoxComponent, TdSearchInputBase, _TdSearchInputMixinBase, TdSearchInputComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1zZWFyY2guanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9jb3JlL3NlYXJjaC9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvc2VhcmNoL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9jb3JlL3NlYXJjaC9zZWFyY2gubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT3B0aW9uYWwsXG4gICAgICAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgTWF0SW5wdXQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5cbmltcG9ydCB7IGRlYm91bmNlVGltZSwgc2tpcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIFRkU2VhcmNoSW5wdXRCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRTZWFyY2hJbnB1dE1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IoVGRTZWFyY2hJbnB1dEJhc2UpO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkU2VhcmNoSW5wdXRDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1zZWFyY2gtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzJyBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbJ3ZhbHVlJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzZWFyY2hTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdoaWRlLWxlZnQnLCBzdHlsZSh7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTE1MCUpJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2hpZGUtcmlnaHQnLCBzdHlsZSh7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTUwJSknLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnc2hvdycsICBzdHlsZSh7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gc2hvdycsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgICB0cmFuc2l0aW9uKCdzaG93ID0+IConLCBhbmltYXRlKCcyMDBtcyBlYXNlLW91dCcpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRTZWFyY2hJbnB1dENvbXBvbmVudCBleHRlbmRzIF9UZFNlYXJjaElucHV0TWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoTWF0SW5wdXQpIF9pbnB1dDogTWF0SW5wdXQ7XG5cbiAgLyoqXG4gICAqIHNob3dVbmRlcmxpbmU/OiBib29sZWFuXG4gICAqIFNldHMgaWYgdGhlIGlucHV0IHVuZGVybGluZSBzaG91bGQgYmUgdmlzaWJsZS4gRGVmYXVsdHMgdG8gJ2ZhbHNlJy5cbiAgICovXG4gIEBJbnB1dCgnc2hvd1VuZGVybGluZScpIHNob3dVbmRlcmxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogZGVib3VuY2U/OiBudW1iZXJcbiAgICogRGVib3VuY2UgdGltZW91dCBiZXR3ZWVuIGtleXByZXNzZXMuIERlZmF1bHRzIHRvIDQwMC5cbiAgICovXG4gIEBJbnB1dCgnZGVib3VuY2UnKSBkZWJvdW5jZTogbnVtYmVyID0gNDAwO1xuXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAgKiBQbGFjZWhvbGRlciBmb3IgdGhlIHVuZGVybHlpbmcgaW5wdXQgY29tcG9uZW50LlxuICAgKi9cbiAgQElucHV0KCdwbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNsZWFySWNvbj86IHN0cmluZ1xuICAgKiBUaGUgaWNvbiB1c2VkIHRvIGNsZWFyIHRoZSBzZWFyY2ggaW5wdXQuXG4gICAqIERlZmF1bHRzIHRvICdjYW5jZWwnIGljb24uXG4gICAqL1xuICBASW5wdXQoJ2NsZWFySWNvbicpIGNsZWFySWNvbjogc3RyaW5nID0gJ2NhbmNlbCc7XG5cbiAgLyoqXG4gICAqIHNlYXJjaERlYm91bmNlOiBmdW5jdGlvbigkZXZlbnQpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIFtkZWJvdW5jZV0gdGltZW91dC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlYXJjaERlYm91bmNlJykgb25TZWFyY2hEZWJvdW5jZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogc2VhcmNoOiBmdW5jdGlvbigkZXZlbnQpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGtleSBlbnRlciBoYXMgYmVlbiBwcmVzc2VkLlxuICAgKi9cbiAgQE91dHB1dCgnc2VhcmNoJykgb25TZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIGNsZWFyOiBmdW5jdGlvbigpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGNsZWFyIGljb24gaGFzIGJlZW4gY2xpY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoJ2NsZWFyJykgb25DbGVhcjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBibHVyOiBmdW5jdGlvbigpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGJsdXIgZXZlbnQgaGFzIGJlZW4gY2FsbGVkIGluIHVuZGVybHlpbmcgaW5wdXQuXG4gICAqL1xuICBAT3V0cHV0KCdibHVyJykgb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZ2V0IGlzUlRMKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9kaXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXIuZGlyID09PSAncnRsJztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXIsXG4gICAgICAgICAgICAgIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5wdXQubmdDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2UpLFxuICAgICAgc2tpcCgxKSwgLy8gc2tpcCBmaXJzdCBjaGFuZ2Ugd2hlbiB2YWx1ZSBpcyBzZXQgdG8gdW5kZWZpbmVkXG4gICAgKS5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuX3NlYXJjaFRlcm1DaGFuZ2VkKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gZm9jdXMgdG8gdW5kZXJseWluZyBpbnB1dC5cbiAgICovXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2lucHV0LmZvY3VzKCk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCk6IHZvaWQge1xuICAgIHRoaXMub25CbHVyLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIHN0b3BQcm9wYWdhdGlvbihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbihldmVudCk7XG4gICAgdGhpcy5vblNlYXJjaC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjbGVhciB0aGUgdW5kZXJseWluZyBpbnB1dC5cbiAgICovXG4gIGNsZWFyU2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLm9uQ2xlYXIuZW1pdCh1bmRlZmluZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VhcmNoVGVybUNoYW5nZWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub25TZWFyY2hEZWJvdW5jZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBBVVRPX1NUWUxFIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IFRkU2VhcmNoSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgVGRTZWFyY2hCb3hCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRTZWFyY2hCb3hNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKFRkU2VhcmNoQm94QmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRTZWFyY2hCb3hDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1zZWFyY2gtYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5zY3NzJyBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbJ3ZhbHVlJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdpbnB1dFN0YXRlJywgW1xuICAgICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICAgIHdpZHRoOiAnMCUnLFxuICAgICAgICBtYXJnaW46ICcwcHgnLFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXJnaW46IEFVVE9fU1RZTEUsXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcwID0+IDEnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignMSA9PiAwJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1vdXQnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkU2VhcmNoQm94Q29tcG9uZW50IGV4dGVuZHMgX1RkU2VhcmNoQm94TWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBwcml2YXRlIF9zZWFyY2hWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoVGRTZWFyY2hJbnB1dENvbXBvbmVudCkgX3NlYXJjaElucHV0OiBUZFNlYXJjaElucHV0Q29tcG9uZW50O1xuXG4gIGdldCBzZWFyY2hWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWaXNpYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIGJhY2tJY29uPzogc3RyaW5nXG4gICAqIFRoZSBpY29uIHVzZWQgdG8gY2xvc2UgdGhlIHNlYXJjaCB0b2dnbGUsIG9ubHkgc2hvd24gd2hlbiBbYWx3YXlzVmlzaWJsZV0gaXMgZmFsc2UuXG4gICAqIERlZmF1bHRzIHRvICdzZWFyY2gnIGljb24uXG4gICAqL1xuICBASW5wdXQoJ2JhY2tJY29uJykgYmFja0ljb246IHN0cmluZyA9ICdzZWFyY2gnO1xuXG4gIC8qKlxuICAgKiBzZWFyY2hJY29uPzogc3RyaW5nXG4gICAqIFRoZSBpY29uIHVzZWQgdG8gb3Blbi9mb2N1cyB0aGUgc2VhcmNoIHRvZ2dsZS5cbiAgICogRGVmYXVsdHMgdG8gJ3NlYXJjaCcgaWNvbi5cbiAgICovXG4gIEBJbnB1dCgnc2VhcmNoSWNvbicpIHNlYXJjaEljb246IHN0cmluZyA9ICdzZWFyY2gnO1xuXG4gIC8qKlxuICAgKiBjbGVhckljb24/OiBzdHJpbmdcbiAgICogVGhlIGljb24gdXNlZCB0byBjbGVhciB0aGUgc2VhcmNoIGlucHV0LlxuICAgKiBEZWZhdWx0cyB0byAnY2FuY2VsJyBpY29uLlxuICAgKi9cbiAgQElucHV0KCdjbGVhckljb24nKSBjbGVhckljb246IHN0cmluZyA9ICdjYW5jZWwnO1xuXG4gIC8qKlxuICAgKiBzaG93VW5kZXJsaW5lPzogYm9vbGVhblxuICAgKiBTZXRzIGlmIHRoZSBpbnB1dCB1bmRlcmxpbmUgc2hvdWxkIGJlIHZpc2libGUuIERlZmF1bHRzIHRvICdmYWxzZScuXG4gICAqL1xuICBASW5wdXQoJ3Nob3dVbmRlcmxpbmUnKSBzaG93VW5kZXJsaW5lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGRlYm91bmNlPzogbnVtYmVyXG4gICAqIERlYm91bmNlIHRpbWVvdXQgYmV0d2VlbiBrZXlwcmVzc2VzLiBEZWZhdWx0cyB0byA0MDAuXG4gICAqL1xuICBASW5wdXQoJ2RlYm91bmNlJykgZGVib3VuY2U6IG51bWJlciA9IDQwMDtcblxuICAvKipcbiAgICogYWx3YXlzVmlzaWJsZT86IGJvb2xlYW5cbiAgICogU2V0cyBpZiB0aGUgaW5wdXQgc2hvdWxkIGFsd2F5cyBiZSB2aXNpYmxlLiBEZWZhdWx0cyB0byAnZmFsc2UnLlxuICAgKi9cbiAgQElucHV0KCdhbHdheXNWaXNpYmxlJykgYWx3YXlzVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAgKiBQbGFjZWhvbGRlciBmb3IgdGhlIHVuZGVybHlpbmcgaW5wdXQgY29tcG9uZW50LlxuICAgKi9cbiAgQElucHV0KCdwbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHNlYXJjaERlYm91bmNlOiBmdW5jdGlvbigkZXZlbnQpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIFtkZWJvdW5jZV0gdGltZW91dC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlYXJjaERlYm91bmNlJykgb25TZWFyY2hEZWJvdW5jZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogc2VhcmNoOiBmdW5jdGlvbigkZXZlbnQpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGtleSBlbnRlciBoYXMgYmVlbiBwcmVzc2VkLlxuICAgKi9cbiAgQE91dHB1dCgnc2VhcmNoJykgb25TZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIGNsZWFyOiBmdW5jdGlvbigpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGNsZWFyIGljb24gaGFzIGJlZW4gY2xpY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoJ2NsZWFyJykgb25DbGVhcjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBibHVyOiBmdW5jdGlvbigpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGJsdXIgZXZlbnQgaGFzIGJlZW4gY2FsbGVkIGluIHVuZGVybHlpbmcgaW5wdXQuXG4gICAqL1xuICBAT3V0cHV0KCdibHVyJykgb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIHNlYXJjaCBpY29uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBzZWFyY2hDbGlja2VkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hbHdheXNWaXNpYmxlICYmIHRoaXMuX3NlYXJjaFZpc2libGUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgIHRoaXMuaGFuZGxlQ2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWx3YXlzVmlzaWJsZSB8fCAhdGhpcy5fc2VhcmNoVmlzaWJsZSkge1xuICAgICAgdGhpcy5fc2VhcmNoSW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVWaXNpYmlsaXR5KCk7XG4gIH1cblxuICB0b2dnbGVWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIHRoaXMuX3NlYXJjaFZpc2libGUgPSAhdGhpcy5fc2VhcmNoVmlzaWJsZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaERlYm91bmNlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VhcmNoRGVib3VuY2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2godmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub25TZWFyY2guZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVDbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2xlYXIuZW1pdCh1bmRlZmluZWQpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLm9uQmx1ci5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5pbXBvcnQgeyBUZFNlYXJjaElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFNlYXJjaEJveENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRkU2VhcmNoSW5wdXRDb21wb25lbnQsXG4gICAgVGRTZWFyY2hCb3hDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUZFNlYXJjaElucHV0Q29tcG9uZW50LFxuICAgIFRkU2VhcmNoQm94Q29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFNlYXJjaE1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZRSwyQkFBbUIsa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7S0FBSztJQUMvRCx3QkFBQztDQUFBLElBQUE7OztBQUdELElBQWEsdUJBQXVCLEdBQUcseUJBQXlCLENBQUMsaUJBQWlCLENBQUM7QUFFbkY7SUE4QjRDQSwwQ0FBdUI7SUE0RGpFLGdDQUFnQyxJQUFTLEVBQzdCLGtCQUFxQztRQURqRCxZQUVFLGtCQUFNLGtCQUFrQixDQUFDLFNBQzFCO1FBSCtCLFVBQUksR0FBSixJQUFJLENBQUs7Ozs7O1FBcERqQixtQkFBYSxHQUFZLEtBQUssQ0FBQzs7Ozs7UUFNcEMsY0FBUSxHQUFXLEdBQUcsQ0FBQzs7Ozs7O1FBYXRCLGVBQVMsR0FBVyxRQUFRLENBQUM7Ozs7O1FBTXZCLHNCQUFnQixHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDOzs7OztRQU01RSxjQUFRLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7Ozs7O1FBTTdELGFBQU8sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7Ozs7UUFNeEQsWUFBTSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDOztLQVlyRTtJQVZELHNCQUFJLHlDQUFLOzs7O1FBQVQ7WUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUM7YUFDaEM7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkOzs7T0FBQTs7OztJQU9ELHlDQUFROzs7SUFBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFT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