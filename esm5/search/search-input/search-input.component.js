/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter, Optional, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dir } from '@angular/cdk/bidi';
import { MatInput } from '@angular/material/input';
import { debounceTime, skip } from 'rxjs/operators';
import { mixinControlValueAccessor } from '@covalent/core/common';
var TdSearchInputBase = /** @class */ (function () {
    function TdSearchInputBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchInputBase;
}());
export { TdSearchInputBase };
if (false) {
    /** @type {?} */
    TdSearchInputBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdSearchInputMixinBase = mixinControlValueAccessor(TdSearchInputBase);
var TdSearchInputComponent = /** @class */ (function (_super) {
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
        this._input.ngControl.valueChanges
            .pipe(debounceTime(this.debounce), skip(1))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._searchTermChanged(value);
        }));
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
     * @private
     * @param {?} value
     * @return {?}
     */
    TdSearchInputComponent.prototype._searchTermChanged = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.onSearchDebounce.emit(value);
    };
    TdSearchInputComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdSearchInputComponent; })),
                            multi: true,
                        },
                    ],
                    selector: 'td-search-input',
                    template: "<div class=\"td-search-input\">\n  <mat-form-field\n    class=\"td-search-input-field\"\n    [class.mat-hide-underline]=\"!showUnderline\"\n    [appearance]=\"appearance\"\n    floatLabel=\"never\"\n  >\n    <input\n      matInput\n      #searchElement\n      type=\"search\"\n      [(ngModel)]=\"value\"\n      [placeholder]=\"placeholder\"\n      (blur)=\"handleBlur()\"\n      (search)=\"stopPropagation($event)\"\n      (keyup.enter)=\"handleSearch($event)\"\n    />\n    <span matSuffix *ngIf=\"appearance === 'fill' || appearance === 'outline' || appearance === 'standard'\">\n      <ng-template [ngTemplateOutlet]=\"clearButton\"></ng-template>\n    </span>\n  </mat-form-field>\n  <ng-template *ngIf=\"!appearance || appearance === 'legacy'\" [ngTemplateOutlet]=\"clearButton\"></ng-template>\n</div>\n<ng-template #clearButton>\n  <button\n    mat-icon-button\n    class=\"td-search-input-clear\"\n    type=\"button\"\n    [@searchState]=\"searchElement.value ? 'show' : isRTL ? 'hide-left' : 'hide-right'\"\n    (click)=\"clearSearch()\"\n  >\n    <mat-icon>{{ clearIcon }}</mat-icon>\n  </button>\n</ng-template>\n",
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
                    styles: [":host .td-search-input{overflow-x:hidden;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-ms-flex-pack:end;justify-content:flex-end}:host .td-search-input .td-search-input-field{-ms-flex:1;flex:1}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-outline .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-flex{height:52px}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-underline{bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-infix{bottom:.4em}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-underline{bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-legacy .mat-form-field-infix{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}:host .td-search-input ::ng-deep mat-form-field .mat-input-element{caret-color:currentColor}:host .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline{display:none}:host .td-search-input .td-search-input-clear{-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}"]
                }] }
    ];
    /** @nocollapse */
    TdSearchInputComponent.ctorParameters = function () { return [
        { type: Dir, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef }
    ]; };
    TdSearchInputComponent.propDecorators = {
        _input: [{ type: ViewChild, args: [MatInput, { static: true },] }],
        appearance: [{ type: Input, args: ['appearance',] }],
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
export { TdSearchInputComponent };
if (false) {
    /** @type {?} */
    TdSearchInputComponent.prototype._input;
    /**
     * appearance?: MatFormFieldAppearance
     * Appearance style for the underlying input component.
     * @type {?}
     */
    TdSearchInputComponent.prototype.appearance;
    /**
     * showUnderline?: boolean
     * Sets if the input underline should be visible. Defaults to 'false'.
     * @type {?}
     */
    TdSearchInputComponent.prototype.showUnderline;
    /**
     * debounce?: number
     * Debounce timeout between keypresses. Defaults to 400.
     * @type {?}
     */
    TdSearchInputComponent.prototype.debounce;
    /**
     * placeholder?: string
     * Placeholder for the underlying input component.
     * @type {?}
     */
    TdSearchInputComponent.prototype.placeholder;
    /**
     * clearIcon?: string
     * The icon used to clear the search input.
     * Defaults to 'cancel' icon.
     * @type {?}
     */
    TdSearchInputComponent.prototype.clearIcon;
    /**
     * searchDebounce: function($event)
     * Event emitted after the [debounce] timeout.
     * @type {?}
     */
    TdSearchInputComponent.prototype.onSearchDebounce;
    /**
     * search: function($event)
     * Event emitted after the key enter has been pressed.
     * @type {?}
     */
    TdSearchInputComponent.prototype.onSearch;
    /**
     * clear: function()
     * Event emitted after the clear icon has been clicked.
     * @type {?}
     */
    TdSearchInputComponent.prototype.onClear;
    /**
     * blur: function()
     * Event emitted after the blur event has been called in underlying input.
     * @type {?}
     */
    TdSearchInputComponent.prototype.onBlur;
    /**
     * @type {?}
     * @private
     */
    TdSearchInputComponent.prototype._dir;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsic2VhcmNoL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osUUFBUSxFQUNSLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUduRCxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBELE9BQU8sRUFBeUIseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RjtJQUNFLDJCQUFtQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUFHLENBQUM7SUFDOUQsd0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURhLCtDQUE0Qzs7OztBQUkxRCxNQUFNLEtBQU8sdUJBQXVCLEdBQUcseUJBQXlCLENBQUMsaUJBQWlCLENBQUM7QUFFbkY7SUF5QzRDLGtEQUF1QjtJQWlFakUsZ0NBQWdDLElBQVMsRUFBRSxrQkFBcUM7UUFBaEYsWUFDRSxrQkFBTSxrQkFBa0IsQ0FBQyxTQUMxQjtRQUYrQixVQUFJLEdBQUosSUFBSSxDQUFLOzs7OztRQXBE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LE9BQU8sRUFBRSxNQUFNOzZCQUNoQixDQUFDLENBQ0g7NEJBQ0QsS0FBSyxDQUNILE1BQU0sRUFDTixLQUFLLENBQUM7Z0NBQ0osU0FBUyxFQUFFLGdCQUFnQjtnQ0FDM0IsT0FBTyxFQUFFLE9BQU87NkJBQ2pCLENBQUMsQ0FDSDs0QkFDRCxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzs0QkFDakQsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt5QkFDbkQsQ0FBQztxQkFDSDs7aUJBQ0Y7Ozs7Z0JBdkRRLEdBQUcsdUJBeUhHLFFBQVE7Z0JBOUhyQixpQkFBaUI7Ozt5QkE4RGhCLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzZCQU1wQyxLQUFLLFNBQUMsWUFBWTtnQ0FNbEIsS0FBSyxTQUFDLGVBQWU7MkJBTXJCLEtBQUssU0FBQyxVQUFVOzhCQU1oQixLQUFLLFNBQUMsYUFBYTs0QkFPbkIsS0FBSyxTQUFDLFdBQVc7bUNBTWpCLE1BQU0sU0FBQyxnQkFBZ0I7MkJBTXZCLE1BQU0sU0FBQyxRQUFROzBCQU1mLE1BQU0sU0FBQyxPQUFPO3lCQU1kLE1BQU0sU0FBQyxNQUFNOztJQXdEaEIsNkJBQUM7Q0FBQSxBQXpKRCxDQXlDNEMsdUJBQXVCLEdBZ0hsRTtTQWhIWSxzQkFBc0I7OztJQUNqQyx3Q0FBd0Q7Ozs7OztJQU14RCw0Q0FBd0Q7Ozs7OztJQU14RCwrQ0FBdUQ7Ozs7OztJQU12RCwwQ0FBMEM7Ozs7OztJQU0xQyw2Q0FBMEM7Ozs7Ozs7SUFPMUMsMkNBQWlEOzs7Ozs7SUFNakQsa0RBQThGOzs7Ozs7SUFNOUYsMENBQThFOzs7Ozs7SUFNOUUseUNBQXdFOzs7Ozs7SUFNeEUsd0NBQXNFOzs7OztJQVMxRCxzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE1hdElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBUZFNlYXJjaElucHV0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRTZWFyY2hJbnB1dE1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IoVGRTZWFyY2hJbnB1dEJhc2UpO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZFNlYXJjaElucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHNlbGVjdG9yOiAndGQtc2VhcmNoLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbJ3ZhbHVlJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzZWFyY2hTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnaGlkZS1sZWZ0JyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTE1MCUpJyxcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnaGlkZS1yaWdodCcsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDE1MCUpJyxcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc2hvdycsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBzaG93JywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJ3Nob3cgPT4gKicsIGFuaW1hdGUoJzIwMG1zIGVhc2Utb3V0JykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZFNlYXJjaElucHV0Q29tcG9uZW50IGV4dGVuZHMgX1RkU2VhcmNoSW5wdXRNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoTWF0SW5wdXQsIHsgc3RhdGljOiB0cnVlIH0pIF9pbnB1dDogTWF0SW5wdXQ7XG5cbiAgLyoqXG4gICAqIGFwcGVhcmFuY2U/OiBNYXRGb3JtRmllbGRBcHBlYXJhbmNlXG4gICAqIEFwcGVhcmFuY2Ugc3R5bGUgZm9yIHRoZSB1bmRlcmx5aW5nIGlucHV0IGNvbXBvbmVudC5cbiAgICovXG4gIEBJbnB1dCgnYXBwZWFyYW5jZScpIGFwcGVhcmFuY2U6IE1hdEZvcm1GaWVsZEFwcGVhcmFuY2U7XG5cbiAgLyoqXG4gICAqIHNob3dVbmRlcmxpbmU/OiBib29sZWFuXG4gICAqIFNldHMgaWYgdGhlIGlucHV0IHVuZGVybGluZSBzaG91bGQgYmUgdmlzaWJsZS4gRGVmYXVsdHMgdG8gJ2ZhbHNlJy5cbiAgICovXG4gIEBJbnB1dCgnc2hvd1VuZGVybGluZScpIHNob3dVbmRlcmxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogZGVib3VuY2U/OiBudW1iZXJcbiAgICogRGVib3VuY2UgdGltZW91dCBiZXR3ZWVuIGtleXByZXNzZXMuIERlZmF1bHRzIHRvIDQwMC5cbiAgICovXG4gIEBJbnB1dCgnZGVib3VuY2UnKSBkZWJvdW5jZTogbnVtYmVyID0gNDAwO1xuXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAgKiBQbGFjZWhvbGRlciBmb3IgdGhlIHVuZGVybHlpbmcgaW5wdXQgY29tcG9uZW50LlxuICAgKi9cbiAgQElucHV0KCdwbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNsZWFySWNvbj86IHN0cmluZ1xuICAgKiBUaGUgaWNvbiB1c2VkIHRvIGNsZWFyIHRoZSBzZWFyY2ggaW5wdXQuXG4gICAqIERlZmF1bHRzIHRvICdjYW5jZWwnIGljb24uXG4gICAqL1xuICBASW5wdXQoJ2NsZWFySWNvbicpIGNsZWFySWNvbjogc3RyaW5nID0gJ2NhbmNlbCc7XG5cbiAgLyoqXG4gICAqIHNlYXJjaERlYm91bmNlOiBmdW5jdGlvbigkZXZlbnQpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIFtkZWJvdW5jZV0gdGltZW91dC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlYXJjaERlYm91bmNlJykgb25TZWFyY2hEZWJvdW5jZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogc2VhcmNoOiBmdW5jdGlvbigkZXZlbnQpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGtleSBlbnRlciBoYXMgYmVlbiBwcmVzc2VkLlxuICAgKi9cbiAgQE91dHB1dCgnc2VhcmNoJykgb25TZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIGNsZWFyOiBmdW5jdGlvbigpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGNsZWFyIGljb24gaGFzIGJlZW4gY2xpY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoJ2NsZWFyJykgb25DbGVhcjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBibHVyOiBmdW5jdGlvbigpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGJsdXIgZXZlbnQgaGFzIGJlZW4gY2FsbGVkIGluIHVuZGVybHlpbmcgaW5wdXQuXG4gICAqL1xuICBAT3V0cHV0KCdibHVyJykgb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZ2V0IGlzUlRMKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9kaXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXIuZGlyID09PSAncnRsJztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXIsIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5wdXQubmdDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlKSxcbiAgICAgICAgc2tpcCgxKSwgLy8gc2tpcCBmaXJzdCBjaGFuZ2Ugd2hlbiB2YWx1ZSBpcyBzZXQgdG8gdW5kZWZpbmVkXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuX3NlYXJjaFRlcm1DaGFuZ2VkKHZhbHVlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBmb2N1cyB0byB1bmRlcmx5aW5nIGlucHV0LlxuICAgKi9cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5faW5wdXQuZm9jdXMoKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5vbkJsdXIuZW1pdCh1bmRlZmluZWQpO1xuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNsZWFyIHRoZSB1bmRlcmx5aW5nIGlucHV0LlxuICAgKi9cbiAgY2xlYXJTZWFyY2goKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMub25DbGVhci5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBwcml2YXRlIF9zZWFyY2hUZXJtQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5vblNlYXJjaERlYm91bmNlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=