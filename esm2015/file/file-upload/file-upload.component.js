/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ContentChild, ChangeDetectorRef, forwardRef, } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
import { TdFileInputComponent, TdFileInputLabelDirective } from '../file-input/file-input.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class TdFileUploadBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
if (false) {
    /** @type {?} */
    TdFileUploadBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdFileUploadMixinBase = mixinControlValueAccessor(mixinDisabled(TdFileUploadBase));
export class TdFileUploadComponent extends _TdFileUploadMixinBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        super(_changeDetectorRef);
        this._multiple = false;
        this._required = false;
        /**
         * defaultColor?: 'accent' | 'primary' | 'warn'
         * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
         */
        this.defaultColor = 'primary';
        /**
         * activeColor?: 'accent' | 'primary' | 'warn'
         * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
         */
        this.activeColor = 'accent';
        /**
         * cancelColor?: 'accent' | 'primary' | 'warn'
         * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
         */
        this.cancelColor = 'warn';
        /**
         * select?: function
         * Event emitted when a file is selected.
         * Emits a [File | FileList] object.
         */
        this.onSelect = new EventEmitter();
        /**
         * upload?: function
         * Event emitted when upload button is clicked.
         * Emits a [File | FileList] object.
         */
        this.onUpload = new EventEmitter();
        /**
         * cancel?: function
         * Event emitted when cancel button is clicked.
         */
        this.onCancel = new EventEmitter();
    }
    /**
     * multiple?: boolean
     * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
     * @param {?} multiple
     * @return {?}
     */
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    /**
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * required?: boolean
     * Forces at least one file upload.
     * Defaults to 'false'
     * @param {?} required
     * @return {?}
     */
    set required(required) {
        this._required = coerceBooleanProperty(required);
    }
    /**
     * @return {?}
     */
    get required() {
        return this._required;
    }
    /**
     * Method executed when upload button is clicked.
     * @return {?}
     */
    uploadPressed() {
        if (this.value) {
            this.onUpload.emit(this.value);
        }
    }
    /**
     * Method executed when a file is selected.
     * @param {?} value
     * @return {?}
     */
    handleSelect(value) {
        this.value = value;
        this.onSelect.emit(value);
    }
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     * @return {?}
     */
    cancel() {
        this.value = undefined;
        this.onCancel.emit(undefined);
        // check if the file input is rendered before clearing it
        if (this.fileInput) {
            this.fileInput.clear();
        }
    }
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    onDisabledChange(v) {
        if (v) {
            this.cancel();
        }
    }
}
TdFileUploadComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdFileUploadComponent)),
                        multi: true,
                    },
                ],
                selector: 'td-file-upload',
                inputs: ['disabled', 'value'],
                template: "<td-file-input\n  *ngIf=\"!value\"\n  [(ngModel)]=\"value\"\n  [multiple]=\"multiple\"\n  [disabled]=\"disabled\"\n  [accept]=\"accept\"\n  [color]=\"defaultColor\"\n  (select)=\"handleSelect($event)\"\n>\n  <ng-template [cdkPortalOutlet]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button\n    #fileUpload\n    class=\"td-file-upload\"\n    mat-raised-button\n    type=\"button\"\n    [color]=\"activeColor\"\n    (keyup.delete)=\"cancel()\"\n    (keyup.backspace)=\"cancel()\"\n    (keyup.escape)=\"cancel()\"\n    (click)=\"uploadPressed()\"\n  >\n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button type=\"button\" class=\"td-file-upload-cancel\" [color]=\"cancelColor\" (click)=\"cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>\n",
                styles: [".td-file-upload{padding-left:8px;padding-right:8px}.td-file-upload-cancel{height:24px;width:24px;position:relative;top:24px;left:-12px}::ng-deep [dir=rtl] .td-file-upload-cancel{right:-12px;left:0}.td-file-upload-cancel mat-icon{border-radius:12px;vertical-align:baseline}.drop-zone{border-radius:3px}.drop-zone *{pointer-events:none}"]
            }] }
];
/** @nocollapse */
TdFileUploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TdFileUploadComponent.propDecorators = {
    fileInput: [{ type: ViewChild, args: [TdFileInputComponent, { static: false },] }],
    inputLabel: [{ type: ContentChild, args: [TdFileInputLabelDirective, { static: false },] }],
    defaultColor: [{ type: Input, args: ['defaultColor',] }],
    activeColor: [{ type: Input, args: ['activeColor',] }],
    cancelColor: [{ type: Input, args: ['cancelColor',] }],
    multiple: [{ type: Input, args: ['multiple',] }],
    required: [{ type: Input, args: ['required',] }],
    accept: [{ type: Input, args: ['accept',] }],
    onSelect: [{ type: Output, args: ['select',] }],
    onUpload: [{ type: Output, args: ['upload',] }],
    onCancel: [{ type: Output, args: ['cancel',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdFileUploadComponent.prototype._multiple;
    /**
     * @type {?}
     * @private
     */
    TdFileUploadComponent.prototype._required;
    /** @type {?} */
    TdFileUploadComponent.prototype.fileInput;
    /** @type {?} */
    TdFileUploadComponent.prototype.inputLabel;
    /**
     * defaultColor?: 'accent' | 'primary' | 'warn'
     * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
     * @type {?}
     */
    TdFileUploadComponent.prototype.defaultColor;
    /**
     * activeColor?: 'accent' | 'primary' | 'warn'
     * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
     * @type {?}
     */
    TdFileUploadComponent.prototype.activeColor;
    /**
     * cancelColor?: 'accent' | 'primary' | 'warn'
     * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
     * @type {?}
     */
    TdFileUploadComponent.prototype.cancelColor;
    /**
     * accept?: string
     * Sets files accepted when opening the file browser dialog.
     * Same as 'accept' attribute in <input/> element.
     * @type {?}
     */
    TdFileUploadComponent.prototype.accept;
    /**
     * select?: function
     * Event emitted when a file is selected.
     * Emits a [File | FileList] object.
     * @type {?}
     */
    TdFileUploadComponent.prototype.onSelect;
    /**
     * upload?: function
     * Event emitted when upload button is clicked.
     * Emits a [File | FileList] object.
     * @type {?}
     */
    TdFileUploadComponent.prototype.onUpload;
    /**
     * cancel?: function
     * Event emitted when cancel button is clicked.
     * @type {?}
     */
    TdFileUploadComponent.prototype.onCancel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJmaWxlL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixpQkFBaUIsRUFDakIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBZSxhQUFhLEVBQXlCLHlCQUF5QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckcsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFBbUIsa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFBRyxDQUFDO0NBQzdEOzs7SUFEYSw4Q0FBNEM7Ozs7QUFJMUQsTUFBTSxPQUFPLHNCQUFzQixHQUFHLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBZ0JoRyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsc0JBQXNCOzs7O0lBOEUvRCxZQUFZLGtCQUFxQztRQUMvQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQTlFcEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQVksS0FBSyxDQUFDOzs7OztRQVVaLGlCQUFZLEdBQWtDLFNBQVMsQ0FBQzs7Ozs7UUFNekQsZ0JBQVcsR0FBa0MsUUFBUSxDQUFDOzs7OztRQU10RCxnQkFBVyxHQUFr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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3Q2hpbGQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkLCBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuaW1wb3J0IHsgVGRGaWxlSW5wdXRDb21wb25lbnQsIFRkRmlsZUlucHV0TGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuLi9maWxlLWlucHV0L2ZpbGUtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIFRkRmlsZVVwbG9hZEJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkRmlsZVVwbG9hZE1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IobWl4aW5EaXNhYmxlZChUZEZpbGVVcGxvYWRCYXNlKSk7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZEZpbGVVcGxvYWRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgc2VsZWN0b3I6ICd0ZC1maWxlLXVwbG9hZCcsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICd2YWx1ZSddLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVVcGxvYWRDb21wb25lbnQgZXh0ZW5kcyBfVGRGaWxlVXBsb2FkTWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBJQ2FuRGlzYWJsZSB7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3JlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChUZEZpbGVJbnB1dENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIGZpbGVJbnB1dDogVGRGaWxlSW5wdXRDb21wb25lbnQ7XG5cbiAgQENvbnRlbnRDaGlsZChUZEZpbGVJbnB1dExhYmVsRGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UgfSkgaW5wdXRMYWJlbDogVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZTtcblxuICAvKipcbiAgICogZGVmYXVsdENvbG9yPzogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybidcbiAgICogU2V0cyBicm93c2UgYnV0dG9uIGNvbG9yLiBVc2VzIHNhbWUgY29sb3IgcGFsZXR0ZSBhY2NlcHRlZCBhcyBbTWF0QnV0dG9uXSBhbmQgZGVmYXVsdHMgdG8gJ3ByaW1hcnknLlxuICAgKi9cbiAgQElucHV0KCdkZWZhdWx0Q29sb3InKSBkZWZhdWx0Q29sb3I6ICdhY2NlbnQnIHwgJ3ByaW1hcnknIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuXG4gIC8qKlxuICAgKiBhY3RpdmVDb2xvcj86ICdhY2NlbnQnIHwgJ3ByaW1hcnknIHwgJ3dhcm4nXG4gICAqIFNldHMgdXBsb2FkIGJ1dHRvbiBjb2xvci4gVXNlcyBzYW1lIGNvbG9yIHBhbGV0dGUgYWNjZXB0ZWQgYXMgW01hdEJ1dHRvbl0gYW5kIGRlZmF1bHRzIHRvICdhY2NlbnQnLlxuICAgKi9cbiAgQElucHV0KCdhY3RpdmVDb2xvcicpIGFjdGl2ZUNvbG9yOiAnYWNjZW50JyB8ICdwcmltYXJ5JyB8ICd3YXJuJyA9ICdhY2NlbnQnO1xuXG4gIC8qKlxuICAgKiBjYW5jZWxDb2xvcj86ICdhY2NlbnQnIHwgJ3ByaW1hcnknIHwgJ3dhcm4nXG4gICAqIFNldHMgY2FuY2VsIGJ1dHRvbiBjb2xvci4gVXNlcyBzYW1lIGNvbG9yIHBhbGV0dGUgYWNjZXB0ZWQgYXMgW01hdEJ1dHRvbl0gYW5kIGRlZmF1bHRzIHRvICd3YXJuJy5cbiAgICovXG4gIEBJbnB1dCgnY2FuY2VsQ29sb3InKSBjYW5jZWxDb2xvcjogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybicgPSAnd2Fybic7XG5cbiAgLyoqXG4gICAqIG11bHRpcGxlPzogYm9vbGVhblxuICAgKiBTZXRzIGlmIG11bHRpcGxlIGZpbGVzIGNhbiBiZSBkcm9wcGVkL3NlbGVjdGVkIGF0IG9uY2UgaW4gW1RkRmlsZVVwbG9hZENvbXBvbmVudF0uXG4gICAqL1xuICBASW5wdXQoJ211bHRpcGxlJylcbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cblxuICAvKipcbiAgICogcmVxdWlyZWQ/OiBib29sZWFuXG4gICAqIEZvcmNlcyBhdCBsZWFzdCBvbmUgZmlsZSB1cGxvYWQuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgncmVxdWlyZWQnKVxuICBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXF1aXJlZCk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBhY2NlcHQ/OiBzdHJpbmdcbiAgICogU2V0cyBmaWxlcyBhY2NlcHRlZCB3aGVuIG9wZW5pbmcgdGhlIGZpbGUgYnJvd3NlciBkaWFsb2cuXG4gICAqIFNhbWUgYXMgJ2FjY2VwdCcgYXR0cmlidXRlIGluIDxpbnB1dC8+IGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoJ2FjY2VwdCcpIGFjY2VwdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzZWxlY3Q/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkLlxuICAgKiBFbWl0cyBhIFtGaWxlIHwgRmlsZUxpc3RdIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlbGVjdCcpIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PigpO1xuXG4gIC8qKlxuICAgKiB1cGxvYWQ/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdXBsb2FkIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKiBFbWl0cyBhIFtGaWxlIHwgRmlsZUxpc3RdIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3VwbG9hZCcpIG9uVXBsb2FkOiBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PigpO1xuXG4gIC8qKlxuICAgKiBjYW5jZWw/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgnY2FuY2VsJykgb25DYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB1cGxvYWQgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICB1cGxvYWRQcmVzc2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLm9uVXBsb2FkLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIGEgZmlsZSBpcyBzZWxlY3RlZC5cbiAgICovXG4gIGhhbmRsZVNlbGVjdCh2YWx1ZTogRmlsZSB8IEZpbGVMaXN0KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kcyBleGVjdXRlZCB3aGVuIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICogQ2xlYXJzIGZpbGVzLlxuICAgKi9cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbkNhbmNlbC5lbWl0KHVuZGVmaW5lZCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGZpbGUgaW5wdXQgaXMgcmVuZGVyZWQgYmVmb3JlIGNsZWFyaW5nIGl0XG4gICAgaWYgKHRoaXMuZmlsZUlucHV0KSB7XG4gICAgICB0aGlzLmZpbGVJbnB1dC5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB0aGUgZGlzYWJsZWQgdmFsdWUgY2hhbmdlcyAqL1xuICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodikge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==