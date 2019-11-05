/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ContentChild, ChangeDetectorRef, forwardRef, } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
import { TdFileInputComponent, TdFileInputLabelDirective } from '../file-input/file-input.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var TdFileUploadBase = /** @class */ (function () {
    function TdFileUploadBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdFileUploadBase;
}());
export { TdFileUploadBase };
if (false) {
    /** @type {?} */
    TdFileUploadBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdFileUploadMixinBase = mixinControlValueAccessor(mixinDisabled(TdFileUploadBase));
var TdFileUploadComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdFileUploadComponent, _super);
    function TdFileUploadComponent(_changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._multiple = false;
        _this._required = false;
        /**
         * defaultColor?: 'accent' | 'primary' | 'warn'
         * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
         */
        _this.defaultColor = 'primary';
        /**
         * activeColor?: 'accent' | 'primary' | 'warn'
         * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
         */
        _this.activeColor = 'accent';
        /**
         * cancelColor?: 'accent' | 'primary' | 'warn'
         * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
         */
        _this.cancelColor = 'warn';
        /**
         * select?: function
         * Event emitted when a file is selected.
         * Emits a [File | FileList] object.
         */
        _this.select = new EventEmitter();
        /**
         * upload?: function
         * Event emitted when upload button is clicked.
         * Emits a [File | FileList] object.
         */
        _this.upload = new EventEmitter();
        /**
         * cancel?: function
         * Event emitted when cancel button is clicked.
         */
        _this.cancel = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
         */
        set: /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
         * @param {?} multiple
         * @return {?}
         */
        function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileUploadComponent.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () {
            return this._required;
        },
        /**
         * required?: boolean
         * Forces at least one file upload.
         * Defaults to 'false'
         */
        set: /**
         * required?: boolean
         * Forces at least one file upload.
         * Defaults to 'false'
         * @param {?} required
         * @return {?}
         */
        function (required) {
            this._required = coerceBooleanProperty(required);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when upload button is clicked.
     */
    /**
     * Method executed when upload button is clicked.
     * @return {?}
     */
    TdFileUploadComponent.prototype.uploadPressed = /**
     * Method executed when upload button is clicked.
     * @return {?}
     */
    function () {
        if (this.value) {
            this.upload.emit(this.value);
        }
    };
    /**
     * Method executed when a file is selected.
     */
    /**
     * Method executed when a file is selected.
     * @param {?} value
     * @return {?}
     */
    TdFileUploadComponent.prototype.handleSelect = /**
     * Method executed when a file is selected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.select.emit(value);
    };
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     */
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     * @return {?}
     */
    TdFileUploadComponent.prototype._cancel = /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     * @return {?}
     */
    function () {
        this.value = undefined;
        this.cancel.emit();
        // check if the file input is rendered before clearing it
        if (this.fileInput) {
            this.fileInput.clear();
        }
    };
    /** Method executed when the disabled value changes */
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdFileUploadComponent.prototype.onDisabledChange = /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    function (v) {
        if (v) {
            this._cancel();
        }
    };
    TdFileUploadComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdFileUploadComponent; })),
                            multi: true,
                        },
                    ],
                    selector: 'td-file-upload',
                    inputs: ['disabled', 'value'],
                    template: "<td-file-input\n  *ngIf=\"!value\"\n  [(ngModel)]=\"value\"\n  [multiple]=\"multiple\"\n  [disabled]=\"disabled\"\n  [accept]=\"accept\"\n  [color]=\"defaultColor\"\n  (select)=\"handleSelect($event)\"\n>\n  <ng-template [cdkPortalOutlet]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button\n    #fileUpload\n    class=\"td-file-upload\"\n    mat-raised-button\n    type=\"button\"\n    [color]=\"activeColor\"\n    (keyup.delete)=\"_cancel()\"\n    (keyup.backspace)=\"_cancel()\"\n    (keyup.escape)=\"_cancel()\"\n    (click)=\"uploadPressed()\"\n  >\n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button type=\"button\" class=\"td-file-upload-cancel\" [color]=\"cancelColor\" (click)=\"_cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>\n",
                    styles: [".td-file-upload{padding-left:8px;padding-right:8px}.td-file-upload-cancel{height:24px;width:24px;position:relative;top:24px;left:-12px}::ng-deep [dir=rtl] .td-file-upload-cancel{right:-12px;left:0}.td-file-upload-cancel mat-icon{border-radius:12px;vertical-align:baseline}.drop-zone{border-radius:3px}.drop-zone *{pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    TdFileUploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TdFileUploadComponent.propDecorators = {
        fileInput: [{ type: ViewChild, args: [TdFileInputComponent, { static: false },] }],
        inputLabel: [{ type: ContentChild, args: [TdFileInputLabelDirective, { static: false },] }],
        defaultColor: [{ type: Input }],
        activeColor: [{ type: Input }],
        cancelColor: [{ type: Input }],
        multiple: [{ type: Input, args: ['multiple',] }],
        required: [{ type: Input, args: ['required',] }],
        accept: [{ type: Input }],
        select: [{ type: Output }],
        upload: [{ type: Output }],
        cancel: [{ type: Output }]
    };
    return TdFileUploadComponent;
}(_TdFileUploadMixinBase));
export { TdFileUploadComponent };
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
    TdFileUploadComponent.prototype.select;
    /**
     * upload?: function
     * Event emitted when upload button is clicked.
     * Emits a [File | FileList] object.
     * @type {?}
     */
    TdFileUploadComponent.prototype.upload;
    /**
     * cancel?: function
     * Event emitted when cancel button is clicked.
     * @type {?}
     */
    TdFileUploadComponent.prototype.cancel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJmaWxlL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQWUsYUFBYSxFQUF5Qix5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RTtJQUNFLDBCQUFtQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUFHLENBQUM7SUFDOUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURhLDhDQUE0Qzs7OztBQUkxRCxNQUFNLEtBQU8sc0JBQXNCLEdBQUcseUJBQXlCLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFaEc7SUFjMkMsaURBQXNCO0lBOEUvRCwrQkFBWSxrQkFBcUM7UUFBakQsWUFDRSxrQkFBTSxrQkFBa0IsQ0FBQyxTQUMxQjtRQS9FTyxlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVMsR0FBWSxLQUFLLENBQUM7Ozs7O1FBVTFCLGtCQUFZLEdBQWtDLFNBQVMsQ0FBQzs7Ozs7UUFNeEQsaUJBQVcsR0FBa0MsUUFBUSxDQUFDOzs7OztRQU10RCxpQkFBVyxHQUFrQyxNQUFNLENB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SUFNL0QsNENBQTZEOzs7Ozs7O0lBZ0M3RCx1Q0FBd0I7Ozs7Ozs7SUFPeEIsdUNBQXNGOzs7Ozs7O0lBT3RGLHVDQUFzRjs7Ozs7O0lBTXRGLHVDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0NoaWxkLFxuICBDb250ZW50Q2hpbGQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCwgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcbmltcG9ydCB7IFRkRmlsZUlucHV0Q29tcG9uZW50LCBUZEZpbGVJbnB1dExhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi4vZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjbGFzcyBUZEZpbGVVcGxvYWRCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZEZpbGVVcGxvYWRNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQoVGRGaWxlVXBsb2FkQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRGaWxlVXBsb2FkQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHNlbGVjdG9yOiAndGQtZmlsZS11cGxvYWQnLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAndmFsdWUnXSxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRGaWxlVXBsb2FkQ29tcG9uZW50IGV4dGVuZHMgX1RkRmlsZVVwbG9hZE1peGluQmFzZSBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciwgSUNhbkRpc2FibGUge1xuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoVGRGaWxlSW5wdXRDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWxlSW5wdXQ6IFRkRmlsZUlucHV0Q29tcG9uZW50O1xuXG4gIEBDb250ZW50Q2hpbGQoVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIGlucHV0TGFiZWw6IFRkRmlsZUlucHV0TGFiZWxEaXJlY3RpdmU7XG5cbiAgLyoqXG4gICAqIGRlZmF1bHRDb2xvcj86ICdhY2NlbnQnIHwgJ3ByaW1hcnknIHwgJ3dhcm4nXG4gICAqIFNldHMgYnJvd3NlIGJ1dHRvbiBjb2xvci4gVXNlcyBzYW1lIGNvbG9yIHBhbGV0dGUgYWNjZXB0ZWQgYXMgW01hdEJ1dHRvbl0gYW5kIGRlZmF1bHRzIHRvICdwcmltYXJ5Jy5cbiAgICovXG4gIEBJbnB1dCgpIGRlZmF1bHRDb2xvcjogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZUNvbG9yPzogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybidcbiAgICogU2V0cyB1cGxvYWQgYnV0dG9uIGNvbG9yLiBVc2VzIHNhbWUgY29sb3IgcGFsZXR0ZSBhY2NlcHRlZCBhcyBbTWF0QnV0dG9uXSBhbmQgZGVmYXVsdHMgdG8gJ2FjY2VudCcuXG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmVDb2xvcjogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybicgPSAnYWNjZW50JztcblxuICAvKipcbiAgICogY2FuY2VsQ29sb3I/OiAnYWNjZW50JyB8ICdwcmltYXJ5JyB8ICd3YXJuJ1xuICAgKiBTZXRzIGNhbmNlbCBidXR0b24gY29sb3IuIFVzZXMgc2FtZSBjb2xvciBwYWxldHRlIGFjY2VwdGVkIGFzIFtNYXRCdXR0b25dIGFuZCBkZWZhdWx0cyB0byAnd2FybicuXG4gICAqL1xuICBASW5wdXQoKSBjYW5jZWxDb2xvcjogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybicgPSAnd2Fybic7XG5cbiAgLyoqXG4gICAqIG11bHRpcGxlPzogYm9vbGVhblxuICAgKiBTZXRzIGlmIG11bHRpcGxlIGZpbGVzIGNhbiBiZSBkcm9wcGVkL3NlbGVjdGVkIGF0IG9uY2UgaW4gW1RkRmlsZVVwbG9hZENvbXBvbmVudF0uXG4gICAqL1xuICBASW5wdXQoJ211bHRpcGxlJylcbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cblxuICAvKipcbiAgICogcmVxdWlyZWQ/OiBib29sZWFuXG4gICAqIEZvcmNlcyBhdCBsZWFzdCBvbmUgZmlsZSB1cGxvYWQuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgncmVxdWlyZWQnKVxuICBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXF1aXJlZCk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBhY2NlcHQ/OiBzdHJpbmdcbiAgICogU2V0cyBmaWxlcyBhY2NlcHRlZCB3aGVuIG9wZW5pbmcgdGhlIGZpbGUgYnJvd3NlciBkaWFsb2cuXG4gICAqIFNhbWUgYXMgJ2FjY2VwdCcgYXR0cmlidXRlIGluIDxpbnB1dC8+IGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoKSBhY2NlcHQ6IHN0cmluZztcblxuICAvKipcbiAgICogc2VsZWN0PzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEgZmlsZSBpcyBzZWxlY3RlZC5cbiAgICogRW1pdHMgYSBbRmlsZSB8IEZpbGVMaXN0XSBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PigpO1xuXG4gIC8qKlxuICAgKiB1cGxvYWQ/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdXBsb2FkIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKiBFbWl0cyBhIFtGaWxlIHwgRmlsZUxpc3RdIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoKSB1cGxvYWQ6IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlIHwgRmlsZUxpc3Q+KCk7XG5cbiAgLyoqXG4gICAqIGNhbmNlbD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2FuY2VsOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdXBsb2FkIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgdXBsb2FkUHJlc3NlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy51cGxvYWQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgaGFuZGxlU2VsZWN0KHZhbHVlOiBGaWxlIHwgRmlsZUxpc3QpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kcyBleGVjdXRlZCB3aGVuIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICogQ2xlYXJzIGZpbGVzLlxuICAgKi9cbiAgX2NhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2FuY2VsLmVtaXQoKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgZmlsZSBpbnB1dCBpcyByZW5kZXJlZCBiZWZvcmUgY2xlYXJpbmcgaXRcbiAgICBpZiAodGhpcy5maWxlSW5wdXQpIHtcbiAgICAgIHRoaXMuZmlsZUlucHV0LmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBkaXNhYmxlZCB2YWx1ZSBjaGFuZ2VzICovXG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh2KSB7XG4gICAgICB0aGlzLl9jYW5jZWwoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==