(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@angular/forms'), require('@angular/cdk/bidi'), require('@angular/material/input'), require('rxjs/operators'), require('@covalent/core/common'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/button')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/search', ['exports', '@angular/core', '@angular/animations', '@angular/forms', '@angular/cdk/bidi', '@angular/material/input', 'rxjs/operators', '@covalent/core/common', '@angular/common', '@angular/material/icon', '@angular/material/button'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.search = {}),global.ng.core,global.ng.animations,global.ng.forms,global.ng.cdk.bidi,global.ng.material.input,global.rxjs.operators,global.covalent.core.common,global.ng.common,global.ng.material.icon,global.ng.material.button));
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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
    var _TdSearchInputMixinBase = common.mixinControlValueAccessor(TdSearchInputBase);
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
            _this.onSearchDebounce = new core.EventEmitter();
            /**
             * search: function($event)
             * Event emitted after the key enter has been pressed.
             */
            _this.onSearch = new core.EventEmitter();
            /**
             * clear: function()
             * Event emitted after the clear icon has been clicked.
             */
            _this.onClear = new core.EventEmitter();
            /**
             * blur: function()
             * Event emitted after the blur event has been called in underlying input.
             */
            _this.onBlur = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdSearchInputComponent.prototype, "isRTL", {
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
        TdSearchInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._input.ngControl.valueChanges.pipe(operators.debounceTime(this.debounce), operators.skip(1)).subscribe(function (value) {
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
            { type: core.Component, args: [{
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return TdSearchInputComponent; }),
                                multi: true,
                            }],
                        selector: 'td-search-input',
                        template: "<div class=\"td-search-input\">\n  <mat-form-field class=\"td-search-input-field\"\n                  [class.mat-hide-underline]=\"!showUnderline\"\n                  floatLabel=\"never\">\n    <input matInput\n            #searchElement\n            type=\"search\"\n            [(ngModel)]=\"value\"\n            [placeholder]=\"placeholder\"\n            (blur)=\"handleBlur()\"\n            (search)=\"stopPropagation($event)\"\n            (keyup.enter)=\"handleSearch($event)\"/>\n  </mat-form-field>\n  <button mat-icon-button\n          class=\"td-search-input-clear\"\n          type=\"button\"\n          [@searchState]=\"(searchElement.value ?  'show' : (isRTL ? 'hide-left' : 'hide-right'))\"\n          (click)=\"clearSearch()\">\n    <mat-icon>{{clearIcon}}</mat-icon>\n  </button>\n</div>",
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
                        styles: [":host .td-search-input{overflow-x:hidden;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host .td-search-input .td-search-input-field{-ms-flex:1;flex:1}:host .td-search-input ::ng-deep mat-form-field .mat-input-element{caret-color:currentColor}:host .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline{display:none}:host .td-search-input .td-search-input-clear{-ms-flex:0 0 auto;flex:0 0 auto}"]
                    }] }
        ];
        /** @nocollapse */
        TdSearchInputComponent.ctorParameters = function () {
            return [
                { type: bidi.Dir, decorators: [{ type: core.Optional }] },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdSearchInputComponent.propDecorators = {
            _input: [{ type: core.ViewChild, args: [input.MatInput,] }],
            showUnderline: [{ type: core.Input, args: ['showUnderline',] }],
            debounce: [{ type: core.Input, args: ['debounce',] }],
            placeholder: [{ type: core.Input, args: ['placeholder',] }],
            clearIcon: [{ type: core.Input, args: ['clearIcon',] }],
            onSearchDebounce: [{ type: core.Output, args: ['searchDebounce',] }],
            onSearch: [{ type: core.Output, args: ['search',] }],
            onClear: [{ type: core.Output, args: ['clear',] }],
            onBlur: [{ type: core.Output, args: ['blur',] }]
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
    var _TdSearchBoxMixinBase = common.mixinControlValueAccessor(TdSearchBoxBase);
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
            _this.onSearchDebounce = new core.EventEmitter();
            /**
             * search: function($event)
             * Event emitted after the key enter has been pressed.
             */
            _this.onSearch = new core.EventEmitter();
            /**
             * clear: function()
             * Event emitted after the clear icon has been clicked.
             */
            _this.onClear = new core.EventEmitter();
            /**
             * blur: function()
             * Event emitted after the blur event has been called in underlying input.
             */
            _this.onBlur = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdSearchBoxComponent.prototype, "searchVisible", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Component, args: [{
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return TdSearchBoxComponent; }),
                                multi: true,
                            }],
                        selector: 'td-search-box',
                        template: "<div class=\"td-search-box\">\n  <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\">\n    <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{backIcon}}</mat-icon>\n    <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{searchIcon}}</mat-icon>\n  </button>\n  <td-search-input #searchInput\n                   [@inputState]=\"alwaysVisible || searchVisible\"\n                   [debounce]=\"debounce\"\n                   [(ngModel)]=\"value\"\n                   [showUnderline]=\"showUnderline\"\n                   [placeholder]=\"placeholder\"\n                   [clearIcon]=\"clearIcon\"\n                   (searchDebounce)=\"handleSearchDebounce($event)\"\n                   (search)=\"handleSearch($event)\"\n                   (clear)=\"handleClear(); toggleVisibility()\"\n                   (blur)=\"handleBlur()\">\n  </td-search-input>\n</div>",
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
                        styles: [":host{display:block}.td-search-box{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}.td-search-box .td-search-icon{-ms-flex:0 0 auto;flex:0 0 auto}.td-search-box td-search-input{margin-left:12px}::ng-deep [dir=rtl] .td-search-box td-search-input{margin-right:12px;margin-left:0!important}"]
                    }] }
        ];
        /** @nocollapse */
        TdSearchBoxComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        TdSearchBoxComponent.propDecorators = {
            _searchInput: [{ type: core.ViewChild, args: [TdSearchInputComponent,] }],
            backIcon: [{ type: core.Input, args: ['backIcon',] }],
            searchIcon: [{ type: core.Input, args: ['searchIcon',] }],
            clearIcon: [{ type: core.Input, args: ['clearIcon',] }],
            showUnderline: [{ type: core.Input, args: ['showUnderline',] }],
            debounce: [{ type: core.Input, args: ['debounce',] }],
            alwaysVisible: [{ type: core.Input, args: ['alwaysVisible',] }],
            placeholder: [{ type: core.Input, args: ['placeholder',] }],
            onSearchDebounce: [{ type: core.Output, args: ['searchDebounce',] }],
            onSearch: [{ type: core.Output, args: ['search',] }],
            onClear: [{ type: core.Output, args: ['clear',] }],
            onBlur: [{ type: core.Output, args: ['blur',] }]
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

    exports.CovalentSearchModule = CovalentSearchModule;
    exports.TdSearchBoxBase = TdSearchBoxBase;
    exports._TdSearchBoxMixinBase = _TdSearchBoxMixinBase;
    exports.TdSearchBoxComponent = TdSearchBoxComponent;
    exports.TdSearchInputBase = TdSearchInputBase;
    exports._TdSearchInputMixinBase = _TdSearchInputMixinBase;
    exports.TdSearchInputComponent = TdSearchInputComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtY29yZS1zZWFyY2gudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvc2VhcmNoL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvY29yZS9zZWFyY2gvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2NvcmUvc2VhcmNoL3NlYXJjaC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9wdGlvbmFsLFxuICAgICAgICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE1hdElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBUZFNlYXJjaElucHV0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkU2VhcmNoSW5wdXRNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKFRkU2VhcmNoSW5wdXRCYXNlKTtcblxuQENvbXBvbmVudCh7XG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZFNlYXJjaElucHV0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG4gIHNlbGVjdG9yOiAndGQtc2VhcmNoLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcycgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogWyd2YWx1ZSddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2VhcmNoU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaGlkZS1sZWZ0Jywgc3R5bGUoe1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xNTAlKScsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdoaWRlLXJpZ2h0Jywgc3R5bGUoe1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDE1MCUpJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ3Nob3cnLCAgc3R5bGUoe1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHNob3cnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignc2hvdyA9PiAqJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1vdXQnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkU2VhcmNoSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBfVGRTZWFyY2hJbnB1dE1peGluQmFzZSBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKE1hdElucHV0KSBfaW5wdXQ6IE1hdElucHV0O1xuXG4gIC8qKlxuICAgKiBzaG93VW5kZXJsaW5lPzogYm9vbGVhblxuICAgKiBTZXRzIGlmIHRoZSBpbnB1dCB1bmRlcmxpbmUgc2hvdWxkIGJlIHZpc2libGUuIERlZmF1bHRzIHRvICdmYWxzZScuXG4gICAqL1xuICBASW5wdXQoJ3Nob3dVbmRlcmxpbmUnKSBzaG93VW5kZXJsaW5lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGRlYm91bmNlPzogbnVtYmVyXG4gICAqIERlYm91bmNlIHRpbWVvdXQgYmV0d2VlbiBrZXlwcmVzc2VzLiBEZWZhdWx0cyB0byA0MDAuXG4gICAqL1xuICBASW5wdXQoJ2RlYm91bmNlJykgZGVib3VuY2U6IG51bWJlciA9IDQwMDtcblxuICAvKipcbiAgICogcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgICogUGxhY2Vob2xkZXIgZm9yIHRoZSB1bmRlcmx5aW5nIGlucHV0IGNvbXBvbmVudC5cbiAgICovXG4gIEBJbnB1dCgncGxhY2Vob2xkZXInKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjbGVhckljb24/OiBzdHJpbmdcbiAgICogVGhlIGljb24gdXNlZCB0byBjbGVhciB0aGUgc2VhcmNoIGlucHV0LlxuICAgKiBEZWZhdWx0cyB0byAnY2FuY2VsJyBpY29uLlxuICAgKi9cbiAgQElucHV0KCdjbGVhckljb24nKSBjbGVhckljb246IHN0cmluZyA9ICdjYW5jZWwnO1xuXG4gIC8qKlxuICAgKiBzZWFyY2hEZWJvdW5jZTogZnVuY3Rpb24oJGV2ZW50KVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBbZGVib3VuY2VdIHRpbWVvdXQuXG4gICAqL1xuICBAT3V0cHV0KCdzZWFyY2hEZWJvdW5jZScpIG9uU2VhcmNoRGVib3VuY2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIHNlYXJjaDogZnVuY3Rpb24oJGV2ZW50KVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBrZXkgZW50ZXIgaGFzIGJlZW4gcHJlc3NlZC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlYXJjaCcpIG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBjbGVhcjogZnVuY3Rpb24oKVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBjbGVhciBpY29uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCdjbGVhcicpIG9uQ2xlYXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogYmx1cjogZnVuY3Rpb24oKVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBibHVyIGV2ZW50IGhhcyBiZWVuIGNhbGxlZCBpbiB1bmRlcmx5aW5nIGlucHV0LlxuICAgKi9cbiAgQE91dHB1dCgnYmx1cicpIG9uQmx1cjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGdldCBpc1JUTCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZGlyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlyLmRpciA9PT0gJ3J0bCc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyLFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2lucHV0Lm5nQ29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlKSxcbiAgICAgIHNraXAoMSksIC8vIHNraXAgZmlyc3QgY2hhbmdlIHdoZW4gdmFsdWUgaXMgc2V0IHRvIHVuZGVmaW5lZFxuICAgICkuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLl9zZWFyY2hUZXJtQ2hhbmdlZCh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGZvY3VzIHRvIHVuZGVybHlpbmcgaW5wdXQuXG4gICAqL1xuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLm9uQmx1ci5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2goZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oZXZlbnQpO1xuICAgIHRoaXMub25TZWFyY2guZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2xlYXIgdGhlIHVuZGVybHlpbmcgaW5wdXQuXG4gICAqL1xuICBjbGVhclNlYXJjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5vbkNsZWFyLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NlYXJjaFRlcm1DaGFuZ2VkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VhcmNoRGVib3VuY2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgQVVUT19TVFlMRSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBUZFNlYXJjaElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIFRkU2VhcmNoQm94QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkU2VhcmNoQm94TWl4aW5CYXNlID0gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcihUZFNlYXJjaEJveEJhc2UpO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkU2VhcmNoQm94Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG4gIHNlbGVjdG9yOiAndGQtc2VhcmNoLWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWJveC5jb21wb25lbnQuc2NzcycgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogWyd2YWx1ZSddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignaW5wdXRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCcwJywgc3R5bGUoe1xuICAgICAgICB3aWR0aDogJzAlJyxcbiAgICAgICAgbWFyZ2luOiAnMHB4JyxcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCcxJywgIHN0eWxlKHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWFyZ2luOiBBVVRPX1NUWUxFLFxuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignMCA9PiAxJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJzEgPT4gMCcsIGFuaW1hdGUoJzIwMG1zIGVhc2Utb3V0JykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZFNlYXJjaEJveENvbXBvbmVudCBleHRlbmRzIF9UZFNlYXJjaEJveE1peGluQmFzZSBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgcHJpdmF0ZSBfc2VhcmNoVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAVmlld0NoaWxkKFRkU2VhcmNoSW5wdXRDb21wb25lbnQpIF9zZWFyY2hJbnB1dDogVGRTZWFyY2hJbnB1dENvbXBvbmVudDtcblxuICBnZXQgc2VhcmNoVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmlzaWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiYWNrSWNvbj86IHN0cmluZ1xuICAgKiBUaGUgaWNvbiB1c2VkIHRvIGNsb3NlIHRoZSBzZWFyY2ggdG9nZ2xlLCBvbmx5IHNob3duIHdoZW4gW2Fsd2F5c1Zpc2libGVdIGlzIGZhbHNlLlxuICAgKiBEZWZhdWx0cyB0byAnc2VhcmNoJyBpY29uLlxuICAgKi9cbiAgQElucHV0KCdiYWNrSWNvbicpIGJhY2tJY29uOiBzdHJpbmcgPSAnc2VhcmNoJztcblxuICAvKipcbiAgICogc2VhcmNoSWNvbj86IHN0cmluZ1xuICAgKiBUaGUgaWNvbiB1c2VkIHRvIG9wZW4vZm9jdXMgdGhlIHNlYXJjaCB0b2dnbGUuXG4gICAqIERlZmF1bHRzIHRvICdzZWFyY2gnIGljb24uXG4gICAqL1xuICBASW5wdXQoJ3NlYXJjaEljb24nKSBzZWFyY2hJY29uOiBzdHJpbmcgPSAnc2VhcmNoJztcblxuICAvKipcbiAgICogY2xlYXJJY29uPzogc3RyaW5nXG4gICAqIFRoZSBpY29uIHVzZWQgdG8gY2xlYXIgdGhlIHNlYXJjaCBpbnB1dC5cbiAgICogRGVmYXVsdHMgdG8gJ2NhbmNlbCcgaWNvbi5cbiAgICovXG4gIEBJbnB1dCgnY2xlYXJJY29uJykgY2xlYXJJY29uOiBzdHJpbmcgPSAnY2FuY2VsJztcblxuICAvKipcbiAgICogc2hvd1VuZGVybGluZT86IGJvb2xlYW5cbiAgICogU2V0cyBpZiB0aGUgaW5wdXQgdW5kZXJsaW5lIHNob3VsZCBiZSB2aXNpYmxlLiBEZWZhdWx0cyB0byAnZmFsc2UnLlxuICAgKi9cbiAgQElucHV0KCdzaG93VW5kZXJsaW5lJykgc2hvd1VuZGVybGluZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBkZWJvdW5jZT86IG51bWJlclxuICAgKiBEZWJvdW5jZSB0aW1lb3V0IGJldHdlZW4ga2V5cHJlc3Nlcy4gRGVmYXVsdHMgdG8gNDAwLlxuICAgKi9cbiAgQElucHV0KCdkZWJvdW5jZScpIGRlYm91bmNlOiBudW1iZXIgPSA0MDA7XG5cbiAgLyoqXG4gICAqIGFsd2F5c1Zpc2libGU/OiBib29sZWFuXG4gICAqIFNldHMgaWYgdGhlIGlucHV0IHNob3VsZCBhbHdheXMgYmUgdmlzaWJsZS4gRGVmYXVsdHMgdG8gJ2ZhbHNlJy5cbiAgICovXG4gIEBJbnB1dCgnYWx3YXlzVmlzaWJsZScpIGFsd2F5c1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgICogUGxhY2Vob2xkZXIgZm9yIHRoZSB1bmRlcmx5aW5nIGlucHV0IGNvbXBvbmVudC5cbiAgICovXG4gIEBJbnB1dCgncGxhY2Vob2xkZXInKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzZWFyY2hEZWJvdW5jZTogZnVuY3Rpb24oJGV2ZW50KVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBbZGVib3VuY2VdIHRpbWVvdXQuXG4gICAqL1xuICBAT3V0cHV0KCdzZWFyY2hEZWJvdW5jZScpIG9uU2VhcmNoRGVib3VuY2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIHNlYXJjaDogZnVuY3Rpb24oJGV2ZW50KVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBrZXkgZW50ZXIgaGFzIGJlZW4gcHJlc3NlZC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlYXJjaCcpIG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBjbGVhcjogZnVuY3Rpb24oKVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBjbGVhciBpY29uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCdjbGVhcicpIG9uQ2xlYXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogYmx1cjogZnVuY3Rpb24oKVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBibHVyIGV2ZW50IGhhcyBiZWVuIGNhbGxlZCBpbiB1bmRlcmx5aW5nIGlucHV0LlxuICAgKi9cbiAgQE91dHB1dCgnYmx1cicpIG9uQmx1cjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBzZWFyY2ggaWNvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgc2VhcmNoQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWx3YXlzVmlzaWJsZSAmJiB0aGlzLl9zZWFyY2hWaXNpYmxlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICB0aGlzLmhhbmRsZUNsZWFyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFsd2F5c1Zpc2libGUgfHwgIXRoaXMuX3NlYXJjaFZpc2libGUpIHtcbiAgICAgIHRoaXMuX3NlYXJjaElucHV0LmZvY3VzKCk7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlVmlzaWJpbGl0eSgpO1xuICB9XG5cbiAgdG9nZ2xlVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWFyY2hWaXNpYmxlID0gIXRoaXMuX3NlYXJjaFZpc2libGU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2hEZWJvdW5jZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5vblNlYXJjaERlYm91bmNlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5vbkNsZWFyLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5vbkJsdXIuZW1pdCh1bmRlZmluZWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuaW1wb3J0IHsgVGRTZWFyY2hJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZFNlYXJjaElucHV0Q29tcG9uZW50LFxuICAgIFRkU2VhcmNoQm94Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGRTZWFyY2hJbnB1dENvbXBvbmVudCxcbiAgICBUZFNlYXJjaEJveENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRTZWFyY2hNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsibWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciIsInRzbGliXzEuX19leHRlbmRzIiwiRXZlbnRFbWl0dGVyIiwiZGVib3VuY2VUaW1lIiwic2tpcCIsIkNvbXBvbmVudCIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwidHJpZ2dlciIsInN0YXRlIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsIkRpciIsIk9wdGlvbmFsIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJWaWV3Q2hpbGQiLCJNYXRJbnB1dCIsIklucHV0IiwiT3V0cHV0IiwiQVVUT19TVFlMRSIsIk5nTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7YUFDaEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9FLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7QUFFRixhQUFnQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUIsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixTQUFTLEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7OztRQ2ZD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