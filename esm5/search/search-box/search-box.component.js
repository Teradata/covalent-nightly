/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';
import { TdSearchInputComponent } from '../search-input/search-input.component';
import { mixinControlValueAccessor } from '@covalent/core/common';
var TdSearchBoxBase = /** @class */ (function () {
    function TdSearchBoxBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchBoxBase;
}());
export { TdSearchBoxBase };
if (false) {
    /** @type {?} */
    TdSearchBoxBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdSearchBoxMixinBase = mixinControlValueAccessor(TdSearchBoxBase);
var TdSearchBoxComponent = /** @class */ (function (_super) {
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
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdSearchBoxComponent; })),
                            multi: true,
                        },
                    ],
                    selector: 'td-search-box',
                    template: "<div class=\"td-search-box\">\n  <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\">\n    <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{ backIcon }}</mat-icon>\n    <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{ searchIcon }}</mat-icon>\n  </button>\n  <td-search-input\n    #searchInput\n    [@inputState]=\"alwaysVisible || searchVisible\"\n    [debounce]=\"debounce\"\n    [(ngModel)]=\"value\"\n    [showUnderline]=\"showUnderline\"\n    [placeholder]=\"placeholder\"\n    [clearIcon]=\"clearIcon\"\n    (searchDebounce)=\"handleSearchDebounce($event)\"\n    (search)=\"handleSearch($event)\"\n    (clear)=\"handleClear(); toggleVisibility()\"\n    (blur)=\"handleBlur()\"\n  >\n  </td-search-input>\n</div>\n",
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
                    styles: [":host{display:block}.td-search-box{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}.td-search-box .td-search-icon{-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.td-search-box td-search-input{margin-left:12px}::ng-deep [dir=rtl] .td-search-box td-search-input{margin-right:12px;margin-left:0!important}.td-search-box td-search-input ::ng-deep .mat-form.field.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1em}"]
                }] }
    ];
    /** @nocollapse */
    TdSearchBoxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TdSearchBoxComponent.propDecorators = {
        _searchInput: [{ type: ViewChild, args: [TdSearchInputComponent, { static: true },] }],
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
export { TdSearchBoxComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdSearchBoxComponent.prototype._searchVisible;
    /** @type {?} */
    TdSearchBoxComponent.prototype._searchInput;
    /**
     * backIcon?: string
     * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
     * Defaults to 'search' icon.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.backIcon;
    /**
     * searchIcon?: string
     * The icon used to open/focus the search toggle.
     * Defaults to 'search' icon.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.searchIcon;
    /**
     * clearIcon?: string
     * The icon used to clear the search input.
     * Defaults to 'cancel' icon.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.clearIcon;
    /**
     * showUnderline?: boolean
     * Sets if the input underline should be visible. Defaults to 'false'.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.showUnderline;
    /**
     * debounce?: number
     * Debounce timeout between keypresses. Defaults to 400.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.debounce;
    /**
     * alwaysVisible?: boolean
     * Sets if the input should always be visible. Defaults to 'false'.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.alwaysVisible;
    /**
     * placeholder?: string
     * Placeholder for the underlying input component.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.placeholder;
    /**
     * searchDebounce: function($event)
     * Event emitted after the [debounce] timeout.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.onSearchDebounce;
    /**
     * search: function($event)
     * Event emitted after the key enter has been pressed.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.onSearch;
    /**
     * clear: function()
     * Event emitted after the clear icon has been clicked.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.onClear;
    /**
     * blur: function()
     * Event emitted after the blur event has been called in underlying input.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.onBlur;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9zZWFyY2gvIiwic291cmNlcyI6WyJzZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUF5Qix5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXpGO0lBQ0UseUJBQW1CLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBQUcsQ0FBQztJQUM5RCxzQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBRGEsNkNBQTRDOzs7O0FBSTFELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyx5QkFBeUIsQ0FBQyxlQUFlLENBQUM7QUFFL0U7SUFrQzBDLGdEQUFxQjtJQTZFN0QsOEJBQVksa0JBQXFDO1FBQWpELFlBQ0Usa0JBQU0sa0JBQWtCLENBQUMsU0FDMUI7UUE5RU8sb0JBQWMsR0FBWSxLQUFLLENBQUM7Ozs7OztRQVlyQixjQUFRLEdBQVcsUUFBUSxDQUFDOzs7Ozs7UUFPMUIsZ0JBQVUsR0FBVyxRQUFRLENBQUM7Ozs7OztRQU8vQixlQUFTLEdBQVcsUUFBUSxDQUFDOzs7OztRQU16QixtQkFBYSxHQUFZLEtBQUss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QUUsSUFBSSxFQUFFOzJCQVdsRCxLQUFLLFNBQUMsVUFBVTs2QkFPaEIsS0FBSyxTQUFDLFlBQVk7NEJBT2xCLEtBQUssU0FBQyxXQUFXO2dDQU1qQixLQUFLLFNBQUMsZUFBZTsyQkFNckIsS0FBSyxTQUFDLFVBQVU7Z0NBTWhCLEtBQUssU0FBQyxlQUFlOzhCQU1yQixLQUFLLFNBQUMsYUFBYTttQ0FNbkIsTUFBTSxTQUFDLGdCQUFnQjsyQkFNdkIsTUFBTSxTQUFDLFFBQVE7MEJBTWYsTUFBTSxTQUFDLE9BQU87eUJBTWQsTUFBTSxTQUFDLE1BQU07O0lBdUNoQiwyQkFBQztDQUFBLEFBcEpELENBa0MwQyxxQkFBcUIsR0FrSDlEO1NBbEhZLG9CQUFvQjs7Ozs7O0lBQy9CLDhDQUF3Qzs7SUFDeEMsNENBQTBGOzs7Ozs7O0lBVzFGLHdDQUErQzs7Ozs7OztJQU8vQywwQ0FBbUQ7Ozs7Ozs7SUFPbkQseUNBQWlEOzs7Ozs7SUFNakQsNkNBQXVEOzs7Ozs7SUFNdkQsd0NBQTBDOzs7Ozs7SUFNMUMsNkNBQXVEOzs7Ozs7SUFNdkQsMkNBQTBDOzs7Ozs7SUFNMUMsZ0RBQThGOzs7Ozs7SUFNOUYsd0NBQThFOzs7Ozs7SUFNOUUsdUNBQXdFOzs7Ozs7SUFNeEUsc0NBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBBVVRPX1NUWUxFIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IFRkU2VhcmNoSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgVGRTZWFyY2hCb3hCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZFNlYXJjaEJveE1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IoVGRTZWFyY2hCb3hCYXNlKTtcblxuQENvbXBvbmVudCh7XG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRTZWFyY2hCb3hDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgc2VsZWN0b3I6ICd0ZC1zZWFyY2gtYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFsndmFsdWUnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2lucHV0U3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJzAnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgd2lkdGg6ICcwJScsXG4gICAgICAgICAgbWFyZ2luOiAnMHB4JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICcxJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgbWFyZ2luOiBBVVRPX1NUWUxFLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCcwID0+IDEnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignMSA9PiAwJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1vdXQnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkU2VhcmNoQm94Q29tcG9uZW50IGV4dGVuZHMgX1RkU2VhcmNoQm94TWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfc2VhcmNoVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAVmlld0NoaWxkKFRkU2VhcmNoSW5wdXRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIF9zZWFyY2hJbnB1dDogVGRTZWFyY2hJbnB1dENvbXBvbmVudDtcblxuICBnZXQgc2VhcmNoVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmlzaWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiYWNrSWNvbj86IHN0cmluZ1xuICAgKiBUaGUgaWNvbiB1c2VkIHRvIGNsb3NlIHRoZSBzZWFyY2ggdG9nZ2xlLCBvbmx5IHNob3duIHdoZW4gW2Fsd2F5c1Zpc2libGVdIGlzIGZhbHNlLlxuICAgKiBEZWZhdWx0cyB0byAnc2VhcmNoJyBpY29uLlxuICAgKi9cbiAgQElucHV0KCdiYWNrSWNvbicpIGJhY2tJY29uOiBzdHJpbmcgPSAnc2VhcmNoJztcblxuICAvKipcbiAgICogc2VhcmNoSWNvbj86IHN0cmluZ1xuICAgKiBUaGUgaWNvbiB1c2VkIHRvIG9wZW4vZm9jdXMgdGhlIHNlYXJjaCB0b2dnbGUuXG4gICAqIERlZmF1bHRzIHRvICdzZWFyY2gnIGljb24uXG4gICAqL1xuICBASW5wdXQoJ3NlYXJjaEljb24nKSBzZWFyY2hJY29uOiBzdHJpbmcgPSAnc2VhcmNoJztcblxuICAvKipcbiAgICogY2xlYXJJY29uPzogc3RyaW5nXG4gICAqIFRoZSBpY29uIHVzZWQgdG8gY2xlYXIgdGhlIHNlYXJjaCBpbnB1dC5cbiAgICogRGVmYXVsdHMgdG8gJ2NhbmNlbCcgaWNvbi5cbiAgICovXG4gIEBJbnB1dCgnY2xlYXJJY29uJykgY2xlYXJJY29uOiBzdHJpbmcgPSAnY2FuY2VsJztcblxuICAvKipcbiAgICogc2hvd1VuZGVybGluZT86IGJvb2xlYW5cbiAgICogU2V0cyBpZiB0aGUgaW5wdXQgdW5kZXJsaW5lIHNob3VsZCBiZSB2aXNpYmxlLiBEZWZhdWx0cyB0byAnZmFsc2UnLlxuICAgKi9cbiAgQElucHV0KCdzaG93VW5kZXJsaW5lJykgc2hvd1VuZGVybGluZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBkZWJvdW5jZT86IG51bWJlclxuICAgKiBEZWJvdW5jZSB0aW1lb3V0IGJldHdlZW4ga2V5cHJlc3Nlcy4gRGVmYXVsdHMgdG8gNDAwLlxuICAgKi9cbiAgQElucHV0KCdkZWJvdW5jZScpIGRlYm91bmNlOiBudW1iZXIgPSA0MDA7XG5cbiAgLyoqXG4gICAqIGFsd2F5c1Zpc2libGU/OiBib29sZWFuXG4gICAqIFNldHMgaWYgdGhlIGlucHV0IHNob3VsZCBhbHdheXMgYmUgdmlzaWJsZS4gRGVmYXVsdHMgdG8gJ2ZhbHNlJy5cbiAgICovXG4gIEBJbnB1dCgnYWx3YXlzVmlzaWJsZScpIGFsd2F5c1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgICogUGxhY2Vob2xkZXIgZm9yIHRoZSB1bmRlcmx5aW5nIGlucHV0IGNvbXBvbmVudC5cbiAgICovXG4gIEBJbnB1dCgncGxhY2Vob2xkZXInKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzZWFyY2hEZWJvdW5jZTogZnVuY3Rpb24oJGV2ZW50KVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBbZGVib3VuY2VdIHRpbWVvdXQuXG4gICAqL1xuICBAT3V0cHV0KCdzZWFyY2hEZWJvdW5jZScpIG9uU2VhcmNoRGVib3VuY2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIHNlYXJjaDogZnVuY3Rpb24oJGV2ZW50KVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBrZXkgZW50ZXIgaGFzIGJlZW4gcHJlc3NlZC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlYXJjaCcpIG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBjbGVhcjogZnVuY3Rpb24oKVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBjbGVhciBpY29uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCdjbGVhcicpIG9uQ2xlYXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogYmx1cjogZnVuY3Rpb24oKVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBibHVyIGV2ZW50IGhhcyBiZWVuIGNhbGxlZCBpbiB1bmRlcmx5aW5nIGlucHV0LlxuICAgKi9cbiAgQE91dHB1dCgnYmx1cicpIG9uQmx1cjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBzZWFyY2ggaWNvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgc2VhcmNoQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWx3YXlzVmlzaWJsZSAmJiB0aGlzLl9zZWFyY2hWaXNpYmxlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICB0aGlzLmhhbmRsZUNsZWFyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFsd2F5c1Zpc2libGUgfHwgIXRoaXMuX3NlYXJjaFZpc2libGUpIHtcbiAgICAgIHRoaXMuX3NlYXJjaElucHV0LmZvY3VzKCk7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlVmlzaWJpbGl0eSgpO1xuICB9XG5cbiAgdG9nZ2xlVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWFyY2hWaXNpYmxlID0gIXRoaXMuX3NlYXJjaFZpc2libGU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2hEZWJvdW5jZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5vblNlYXJjaERlYm91bmNlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5vbkNsZWFyLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5vbkJsdXIuZW1pdCh1bmRlZmluZWQpO1xuICB9XG59XG4iXX0=