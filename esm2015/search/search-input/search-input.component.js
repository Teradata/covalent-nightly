/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Output, EventEmitter, Optional, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dir } from '@angular/cdk/bidi';
import { MatInput } from '@angular/material/input';
import { debounceTime, skip } from 'rxjs/operators';
import { mixinControlValueAccessor } from '@covalent/core/common';
export class TdSearchInputBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
if (false) {
    /** @type {?} */
    TdSearchInputBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdSearchInputMixinBase = mixinControlValueAccessor(TdSearchInputBase);
export class TdSearchInputComponent extends _TdSearchInputMixinBase {
    /**
     * @param {?} _dir
     * @param {?} _changeDetectorRef
     */
    constructor(_dir, _changeDetectorRef) {
        super(_changeDetectorRef);
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
         * clearIcon?: string
         * The icon used to clear the search input.
         * Defaults to 'cancel' icon.
         */
        this.clearIcon = 'cancel';
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
    /**
     * @return {?}
     */
    get isRTL() {
        if (this._dir) {
            return this._dir.dir === 'rtl';
        }
        return false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._input.ngControl.valueChanges
            .pipe(debounceTime(this.debounce), skip(1))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this._searchTermChanged(value);
        }));
    }
    /**
     * Method to focus to underlying input.
     * @return {?}
     */
    focus() {
        this._input.focus();
    }
    /**
     * @return {?}
     */
    handleBlur() {
        this.onBlur.emit(undefined);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    stopPropagation(event) {
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleSearch(event) {
        this.stopPropagation(event);
        this.onSearch.emit(this.value);
    }
    /**
     * Method to clear the underlying input.
     * @return {?}
     */
    clearSearch() {
        this.value = '';
        this._changeDetectorRef.markForCheck();
        this.onClear.emit(undefined);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _searchTermChanged(value) {
        this.onSearchDebounce.emit(value);
    }
}
TdSearchInputComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdSearchInputComponent)),
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
TdSearchInputComponent.ctorParameters = () => [
    { type: Dir, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL3NlYXJjaC8iLCJzb3VyY2VzIjpbInNlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixRQUFRLEVBQ1IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUF5Qix5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXpGLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsWUFBbUIsa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFBRyxDQUFDO0NBQzdEOzs7SUFEYSwrQ0FBNEM7Ozs7QUFJMUQsTUFBTSxPQUFPLHVCQUF1QixHQUFHLHlCQUF5QixDQUFDLGlCQUFpQixDQUFDO0FBMkNuRixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsdUJBQXVCOzs7OztJQWlFakUsWUFBZ0MsSUFBUyxFQUFFLGtCQUFxQztRQUM5RSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQURJLFNBQUksR0FBSixJQUFJLENBQUs7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TyxFQUFFLE9BQU87eUJBQ2pCLENBQUMsQ0FDSDt3QkFDRCxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDakQsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztxQkFDbkQsQ0FBQztpQkFDSDs7YUFDRjs7OztZQXZEUSxHQUFHLHVCQXlIRyxRQUFRO1lBOUhyQixpQkFBaUI7OztxQkE4RGhCLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lCQU1wQyxLQUFLLFNBQUMsWUFBWTs0QkFNbEIsS0FBSyxTQUFDLGVBQWU7dUJBTXJCLEtBQUssU0FBQyxVQUFVOzBCQU1oQixLQUFLLFNBQUMsYUFBYTt3QkFPbkIsS0FBSyxTQUFDLFdBQVc7K0JBTWpCLE1BQU0sU0FBQyxnQkFBZ0I7dUJBTXZCLE1BQU0sU0FBQyxRQUFRO3NCQU1mLE1BQU0sU0FBQyxPQUFPO3FCQU1kLE1BQU0sU0FBQyxNQUFNOzs7O0lBdkRkLHdDQUF3RDs7Ozs7O0lBTXhELDRDQUF3RDs7Ozs7O0lBTXhELCtDQUF1RDs7Ozs7O0lBTXZELDBDQUEwQzs7Ozs7O0lBTTFDLDZDQUEwQzs7Ozs7OztJQU8xQywyQ0FBaUQ7Ozs7OztJQU1qRCxrREFBOEY7Ozs7OztJQU05RiwwQ0FBOEU7Ozs7OztJQU05RSx5Q0FBd0U7Ozs7OztJQU14RSx3Q0FBc0U7Ozs7O0lBUzFELHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3B0aW9uYWwsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgTWF0SW5wdXQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRBcHBlYXJhbmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5cbmltcG9ydCB7IGRlYm91bmNlVGltZSwgc2tpcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIFRkU2VhcmNoSW5wdXRCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZFNlYXJjaElucHV0TWl4aW5CYXNlID0gbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvcihUZFNlYXJjaElucHV0QmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkU2VhcmNoSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgc2VsZWN0b3I6ICd0ZC1zZWFyY2gtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFsndmFsdWUnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3NlYXJjaFN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdoaWRlLWxlZnQnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTUwJSknLFxuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdoaWRlLXJpZ2h0JyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTUwJSknLFxuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdzaG93JyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJyxcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHNob3cnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignc2hvdyA9PiAqJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1vdXQnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkU2VhcmNoSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBfVGRTZWFyY2hJbnB1dE1peGluQmFzZSBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChNYXRJbnB1dCwgeyBzdGF0aWM6IHRydWUgfSkgX2lucHV0OiBNYXRJbnB1dDtcblxuICAvKipcbiAgICogYXBwZWFyYW5jZT86IE1hdEZvcm1GaWVsZEFwcGVhcmFuY2VcbiAgICogQXBwZWFyYW5jZSBzdHlsZSBmb3IgdGhlIHVuZGVybHlpbmcgaW5wdXQgY29tcG9uZW50LlxuICAgKi9cbiAgQElucHV0KCdhcHBlYXJhbmNlJykgYXBwZWFyYW5jZTogTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZTtcblxuICAvKipcbiAgICogc2hvd1VuZGVybGluZT86IGJvb2xlYW5cbiAgICogU2V0cyBpZiB0aGUgaW5wdXQgdW5kZXJsaW5lIHNob3VsZCBiZSB2aXNpYmxlLiBEZWZhdWx0cyB0byAnZmFsc2UnLlxuICAgKi9cbiAgQElucHV0KCdzaG93VW5kZXJsaW5lJykgc2hvd1VuZGVybGluZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBkZWJvdW5jZT86IG51bWJlclxuICAgKiBEZWJvdW5jZSB0aW1lb3V0IGJldHdlZW4ga2V5cHJlc3Nlcy4gRGVmYXVsdHMgdG8gNDAwLlxuICAgKi9cbiAgQElucHV0KCdkZWJvdW5jZScpIGRlYm91bmNlOiBudW1iZXIgPSA0MDA7XG5cbiAgLyoqXG4gICAqIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gICAqIFBsYWNlaG9sZGVyIGZvciB0aGUgdW5kZXJseWluZyBpbnB1dCBjb21wb25lbnQuXG4gICAqL1xuICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAvKipcbiAgICogY2xlYXJJY29uPzogc3RyaW5nXG4gICAqIFRoZSBpY29uIHVzZWQgdG8gY2xlYXIgdGhlIHNlYXJjaCBpbnB1dC5cbiAgICogRGVmYXVsdHMgdG8gJ2NhbmNlbCcgaWNvbi5cbiAgICovXG4gIEBJbnB1dCgnY2xlYXJJY29uJykgY2xlYXJJY29uOiBzdHJpbmcgPSAnY2FuY2VsJztcblxuICAvKipcbiAgICogc2VhcmNoRGVib3VuY2U6IGZ1bmN0aW9uKCRldmVudClcbiAgICogRXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgW2RlYm91bmNlXSB0aW1lb3V0LlxuICAgKi9cbiAgQE91dHB1dCgnc2VhcmNoRGVib3VuY2UnKSBvblNlYXJjaERlYm91bmNlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBzZWFyY2g6IGZ1bmN0aW9uKCRldmVudClcbiAgICogRXZlbnQgZW1pdHRlZCBhZnRlciB0aGUga2V5IGVudGVyIGhhcyBiZWVuIHByZXNzZWQuXG4gICAqL1xuICBAT3V0cHV0KCdzZWFyY2gnKSBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogY2xlYXI6IGZ1bmN0aW9uKClcbiAgICogRXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgY2xlYXIgaWNvbiBoYXMgYmVlbiBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgnY2xlYXInKSBvbkNsZWFyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIGJsdXI6IGZ1bmN0aW9uKClcbiAgICogRXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgYmx1ciBldmVudCBoYXMgYmVlbiBjYWxsZWQgaW4gdW5kZXJseWluZyBpbnB1dC5cbiAgICovXG4gIEBPdXRwdXQoJ2JsdXInKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBnZXQgaXNSVEwoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2Rpcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpci5kaXIgPT09ICdydGwnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpciwgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnB1dC5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2UpLFxuICAgICAgICBza2lwKDEpLCAvLyBza2lwIGZpcnN0IGNoYW5nZSB3aGVuIHZhbHVlIGlzIHNldCB0byB1bmRlZmluZWRcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5fc2VhcmNoVGVybUNoYW5nZWQodmFsdWUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGZvY3VzIHRvIHVuZGVybHlpbmcgaW5wdXQuXG4gICAqL1xuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLm9uQmx1ci5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2goZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oZXZlbnQpO1xuICAgIHRoaXMub25TZWFyY2guZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2xlYXIgdGhlIHVuZGVybHlpbmcgaW5wdXQuXG4gICAqL1xuICBjbGVhclNlYXJjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5vbkNsZWFyLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NlYXJjaFRlcm1DaGFuZ2VkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VhcmNoRGVib3VuY2UuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==